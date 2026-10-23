# 코드 실행·채점 도우미. 브라우저(Pyodide)와 개발용 검증(CPython)에서 같은 파일을 쓴다.
import sys, io, json, builtins, re, traceback, os, tempfile, shutil

FILE = '<코드>'


def _fmt_err(e):
    line = None
    tb = e.__traceback__
    while tb:
        if tb.tb_frame.f_code.co_filename == FILE:
            line = tb.tb_lineno
        tb = tb.tb_next
    if isinstance(e, SyntaxError):
        return {'type': type(e).__name__, 'msg': e.msg or str(e), 'line': e.lineno, 'text': (e.text or '').rstrip('\n')}
    return {'type': type(e).__name__, 'msg': str(e), 'line': line, 'text': ''}


def run_code(code, stdin=None, seed=None, limit=20000, ns=None):
    out = io.StringIO()
    old_out, old_input = sys.stdout, builtins.input
    lines = [str(x) for x in (stdin or [])]

    def fake_input(prompt=''):
        out.write(str(prompt))
        if not lines:
            raise EOFError('input() 으로 읽을 값이 모자라요')
        return lines.pop(0)

    cwd = os.getcwd()
    tmpd = tempfile.mkdtemp()
    os.chdir(tmpd)
    sys.stdout = out
    builtins.input = fake_input
    if ns is None:
        ns = {'__name__': '__main__'}
    err = None
    try:
        if seed is not None:
            import random
            random.seed(seed)
        exec(compile(code, FILE, 'exec'), ns)
    except SystemExit:
        pass
    except BaseException as e:  # noqa
        err = _fmt_err(e)
    finally:
        sys.stdout = old_out
        builtins.input = old_input
        os.chdir(cwd)
        shutil.rmtree(tmpd, ignore_errors=True)
    return {'ok': err is None, 'out': out.getvalue()[:limit], 'err': err, 'ns': ns}


def norm(s):
    return '\n'.join(l.rstrip() for l in str(s).strip().splitlines())


def _public(r):
    return {'ok': r['ok'], 'out': r['out'], 'err': r['err']}


def run_task(task, code):
    """과제 채점. 결과: {ok, kind, ...}"""
    for pat in task.get('need') or []:
        if not re.search(pat, code):
            return {'ok': False, 'kind': 'need', 'msg': task.get('needMsg') or '이 문제에서 요구한 문법을 사용하지 않았어요.'}
    for pat in task.get('ban') or []:
        if re.search(pat, code):
            return {'ok': False, 'kind': 'ban', 'msg': task.get('banMsg') or '이 문제에서 쓰면 안 되는 방법을 사용했어요.'}
    seed = task.get('seed')
    if 'tests' in task:
        for i, t in enumerate(task['tests']):
            r = run_code(code, t.get('in'), seed)
            if not r['ok']:
                return {'ok': False, 'kind': 'error', 'err': r['err'], 'out': r['out'], 'in': t.get('in')}
            if norm(r['out']) != norm(t['out']):
                return {'ok': False, 'kind': 'out', 'in': t.get('in'), 'expected': t['out'], 'got': r['out'], 'hidden': bool(t.get('hidden')), 'idx': i}
        return {'ok': True, 'kind': 'ok'}
    r = run_code(code, task.get('in'), seed)
    if not r['ok']:
        return {'ok': False, 'kind': 'error', 'err': r['err'], 'out': r['out']}
    ns = r['ns']
    if 'cases' in task:
        fn = ns.get(task['fn'])
        if not callable(fn):
            return {'ok': False, 'kind': 'nofn', 'fn': task['fn']}
        for i, c in enumerate(task['cases']):
            args, exp = c[0], c[1]
            try:
                got = fn(*[json.loads(json.dumps(a)) for a in args])
            except BaseException as e:  # noqa
                return {'ok': False, 'kind': 'error', 'err': _fmt_err(e), 'call': _call(task['fn'], args), 'hidden': bool(len(c) > 2 and c[2])}
            if not _same(got, exp):
                return {'ok': False, 'kind': 'case', 'call': _call(task['fn'], args), 'expected': repr(exp), 'got': repr(got), 'hidden': bool(len(c) > 2 and c[2])}
        if 'check' not in task:
            return {'ok': True, 'kind': 'ok'}
    if 'check' in task:
        try:
            exec(compile(task['check'], '<검사>', 'exec'), ns)
        except AssertionError as e:
            return {'ok': False, 'kind': 'check', 'msg': str(e) or task.get('checkMsg') or '결과가 기대와 달라요.'}
        except BaseException as e:  # noqa
            return {'ok': False, 'kind': 'check', 'msg': task.get('checkMsg') or '결과가 기대와 달라요. (%s)' % type(e).__name__}
        return {'ok': True, 'kind': 'ok'}
    if 'out' in task:
        if norm(r['out']) != norm(task['out']):
            return {'ok': False, 'kind': 'out', 'in': task.get('in'), 'expected': task['out'], 'got': r['out']}
    return {'ok': True, 'kind': 'ok'}


def _num(x):
    return isinstance(x, (int, float)) and not isinstance(x, bool)


def _same(got, exp):
    if got == exp and (type(got) == type(exp) or (_num(got) and _num(exp))):
        return True
    return False


def _call(fn, args):
    return '%s(%s)' % (fn, ', '.join(repr(a) for a in args))


def handle(req):
    k = req.get('kind')
    if k == 'run':
        return _public(run_code(req['code'], req.get('stdin'), req.get('seed')))
    if k == 'task':
        return run_task(req['task'], req['code'])
    return {'ok': False, 'kind': 'unknown'}
