const r = String.raw;
const lines = (n, f) => Array.from({ length: n }, (_, i) => f(i + 1)).join('\n');

export const U37 = [
  {
    id: 37, emoji: '🧱', title: '함수 만들기: def', goal: '자주 쓰는 코드에 이름을 붙여 함수로 만들고, 여러 번 호출해요',
    tips: '함수는 “코드 묶음에 붙인 이름”이에요. <code>def</code>로 <b>정의</b>만 하면 실행되지 않고, <b>이름()</b>으로 <b>호출</b>해야 실행돼요!',
    learn: [
      { h: '첫 함수', b: '<p><code>def 이름():</code> 아래에 들여쓴 줄이 함수의 <b>본문</b>이에요. 정의한 뒤 <code>이름()</code>으로 <b>호출</b>하면 그 본문이 실행돼요.</p>', code: r`def greet():
    print("안녕하세요!")
    print("파이썬 함수예요")

greet()` },
      { h: '여러 번 호출 = 코드 재사용', b: '<p>같은 일을 여러 번 하려면 코드를 복사하지 말고 함수를 만들어 호출하세요. 고칠 때도 한 곳만 고치면 돼요.</p>', code: r`def line():
    print("-" * 20)

line()
print("제목")
line()
print("내용")
line()` },
      { h: '정의만 하면 실행되지 않아요', b: '<p>아래 코드는 정의만 했을 뿐 호출하지 않아서 아무 일도 일어나지 않아요. 또 함수는 <b>호출보다 먼저 정의</b>되어 있어야 해요.</p>', code: r`def hello():
    print("실행되지 않아요")

print("끝")` },
      { h: '함수 안에서 함수 부르기', b: '<p>함수 본문에서 다른 함수를 호출할 수 있어요. 큰 일을 작은 함수들로 쪼개면 읽기 쉬워져요.</p>', code: r`def line():
    print("=" * 10)

def title():
    line()
    print("  파이썬")
    line()

title()` },
      { h: '호출 전에 정의가 없으면', b: '<p>정의하기 전에 부르면 <b>NameError</b>예요. 파이썬은 위에서 아래로 읽기 때문이에요.</p>', code: r`hello()

def hello():
    print("안녕")`, err: true },
    ],
    check: [
      { q: '함수를 만드는 키워드는?', opts: ['def', 'function', 'func', 'make'], ans: 0, why: 'def(define)로 시작해요.' },
      { q: '함수를 정의만 하고 호출하지 않으면?', opts: ['본문이 실행되지 않는다', '한 번 실행된다', '오류가 난다', '자동으로 실행된다'], ans: 0, why: '호출해야 실행돼요.' },
      { q: '함수 호출 방법은?', opts: ['이름()', 'def 이름', 'run 이름', '이름:'], ans: 0, why: '이름 뒤에 괄호를 붙여요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`def hello():
    print("안녕")

hello()
hello()`, ans: '안녕\n안녕', wrong: ['안녕', '(아무것도 출력 안 됨)', 'hello\nhello'], why: '두 번 호출했어요.' },
      { t: 'predict', code: r`def hello():
    print("안녕")

print("시작")`, ans: '시작', wrong: ['안녕\n시작', '안녕', '시작\n안녕'], why: '정의만 하고 호출하지 않았어요.' },
      { t: 'predict', code: r`def line():
    print("-" * 3)

line()
print("A")
line()`, ans: '---\nA\n---', wrong: ['A', '---\n---\nA', '-3\nA\n-3'], why: '호출할 때마다 선이 출력돼요.' },
      { t: 'predict', code: r`def a():
    print("a")

def b():
    a()
    print("b")

b()`, ans: 'a\nb', wrong: ['b\na', 'b', 'a'], why: 'b 안에서 a 를 먼저 호출해요.' },
      { t: 'predict', code: r`def show():
    print("X")

for i in range(3):
    show()`, ans: 'X\nX\nX', wrong: ['X', '0\n1\n2', 'XXX'], why: '반복 안에서 세 번 호출.' },
      { t: 'blank', code: r`___ hello():
    print("안녕")

hello()`, ans: ['def'], extra: ['func', 'function', 'define'], out: '안녕', why: '함수 정의 키워드.' },
      { t: 'blank', code: r`def hello():
    print("안녕")

hello___`, ans: ['()'], extra: ['', ':', '[]'], out: '안녕', why: '호출에는 괄호가 필요해요.' },
      { t: 'parsons', lines: [r`def hi():`, r`    print("hi")`, r`hi()`, r`hi()`], out: 'hi\nhi', why: '정의 → 호출 순서.' },
      { t: 'bug', code: r`def hello():
print("안녕")

hello()`, line: 2, fix: r`    print("안녕")`, out: '안녕', why: '함수 본문은 들여써야 해요.' },
      { t: 'bug', code: r`def hello()
    print("안녕")

hello()`, line: 1, fix: r`def hello():`, out: '안녕', why: 'def 줄 끝에도 콜론이 필요해요.' },
      { t: 'bug', code: r`hello()

def hello():
    print("안녕")`, line: 1, fix: r`pass`, out: '', why: '정의하기 전에 호출하면 NameError. 정의 아래로 옮겨야 해요 (여기서는 줄을 비워 확인).' },
    ],
    tasks: [
      { q: '<code>greet</code> 함수를 만들어 <code>안녕하세요!</code>를 출력하게 하고, 함수를 <b>두 번 호출</b>하세요.', starter: '', tests: [{ out: '안녕하세요!\n안녕하세요!' }], need: [r`def\s+greet\s*\(\s*\)`], needMsg: 'def greet(): 로 함수를 만들어 주세요.', sol: r`def greet():
    print("안녕하세요!")

greet()
greet()`, hints: ['def greet(): 로 정의해요.', '본문에서 print 를 해요.', '정의 아래에서 greet() 를 두 번 써요.'] },
      { q: '<code>line</code> 함수를 만들어 <code>-</code>를 <b>10개</b> 한 줄로 출력하게 하세요. 그리고 아래처럼 호출해 출력되게 하세요.<pre style="margin:6px 0">----------\n파이썬\n----------</pre>', starter: '', tests: [{ out: '----------\n파이썬\n----------' }], need: [r`def\s+line`], needMsg: 'def line(): 으로 함수를 만들어 주세요.', sol: r`def line():
    print("-" * 10)

line()
print("파이썬")
line()`, hints: ['def line(): 안에서 "-" * 10 을 출력해요.', '호출은 line() 이에요.', 'line() → print("파이썬") → line()'] },
      { q: '<code>header()</code>와 <code>footer()</code> 두 함수를 만드세요. header는 <code>=== 시작 ===</code>, footer는 <code>=== 끝 ===</code>를 출력해요. <b>header → 본문(<code>내용</code>) → footer</b> 순서로 호출하세요.', starter: '', tests: [{ out: '=== 시작 ===\n내용\n=== 끝 ===' }], need: [r`def\s+header`, r`def\s+footer`], needMsg: 'header 와 footer 함수를 모두 만들어 주세요.', sol: r`def header():
    print("=== 시작 ===")

def footer():
    print("=== 끝 ===")

header()
print("내용")
footer()`, hints: ['함수 두 개를 각각 정의해요.', '정의가 끝난 뒤 순서대로 호출해요.', 'header() → print("내용") → footer()'] },
    ],
    boss: { q: '<b>영수증 출력기</b>: <code>line()</code> 함수(= 20개)와 <code>item(name, price)</code>처럼 쓰지는 않고, 우선 함수 세 개 <code>line()</code>, <code>title()</code>, <code>thanks()</code>를 만들어 아래 모양을 출력하세요. <code>title()</code> 안에서 <code>line()</code>을 호출해요.<pre style="margin:6px 0">====================\n      영수증\n====================\n커피 4500원\n감사합니다!</pre>(두 번째 줄은 공백 6칸 + 영수증)', starter: '', tests: [{ out: '====================\n      영수증\n====================\n커피 4500원\n감사합니다!' }], need: [r`def\s+line`, r`def\s+title`, r`def\s+thanks`], needMsg: 'line, title, thanks 함수를 모두 만들어 주세요.', sol: r`def line():
    print("=" * 20)

def title():
    line()
    print("      영수증")
    line()

def thanks():
    print("감사합니다!")

title()
print("커피 4500원")
thanks()`, hints: ['title() 안에서 line() 을 두 번 호출해요 (제목 위·아래).', '제목 가운데 줄은 공백 6칸으로 시작해요.', '마지막에 title() → 본문 → thanks() 순서로 호출.'] },
    sum: ['<code>def 이름():</code> + 들여쓴 본문 = 함수 정의', '<code>이름()</code> 으로 호출해야 실행된다', '같은 코드는 복사하지 말고 함수로 → 재사용', '함수는 호출보다 먼저 정의되어야 한다 (NameError)', '함수 안에서 다른 함수 호출 가능'],
  },
  {
    id: 38, emoji: '🎁', title: '매개변수와 반환값', goal: '함수에 값을 넘기고(매개변수), 결과를 돌려받는(return) 방법을 익혀요',
    tips: '<b>print는 화면에 보여 주는 것</b>, <b>return은 결과를 호출한 곳에 돌려주는 것</b>이에요. 돌려받은 값은 변수에 담거나 계산에 쓸 수 있어요!',
    learn: [
      { h: '매개변수: 함수에 값 넘기기', b: '<p>함수 이름 옆 괄호에 쓴 변수를 <b>매개변수</b>, 호출할 때 넘기는 값을 <b>인자</b>라고 해요. 같은 함수를 값만 바꿔 여러 번 쓸 수 있어요.</p>', code: r`def greet(name):
    print(f"안녕하세요, {name}님!")

greet("민수")
greet("지영")` },
      { h: 'return: 결과 돌려주기', b: '<p><code>return 값</code>은 함수를 끝내고 값을 <b>호출한 곳에 돌려줘요</b>. 돌려받은 값은 변수에 담거나 바로 계산할 수 있어요.</p>', code: r`def add(a, b):
    return a + b

x = add(3, 4)
print(x)
print(add(10, 20) * 2)` },
      { h: 'print와 return의 차이', b: '<p>print만 하는 함수의 결과를 변수에 받으면 <code>None</code>(아무것도 없음)이에요. 값을 이어서 쓰고 싶다면 꼭 <b>return</b>하세요.</p>', code: r`def show(x):
    print(x * 2)

def double(x):
    return x * 2

a = show(5)
b = double(5)
print(a, b)` },
      { h: '여러 값 돌려주기와 조건 return', b: '<p>쉼표로 여러 값을 돌려주면 튜플이에요(언패킹으로 받아요). return은 <b>그 즉시 함수를 끝내서</b> 조건에 따라 일찍 돌려줄 수도 있어요.</p>', code: r`def min_max(a):
    return min(a), max(a)

lo, hi = min_max([3, 9, 1])
print(lo, hi)

def sign(n):
    if n > 0:
        return "양수"
    if n < 0:
        return "음수"
    return "영"
print(sign(5), sign(-2), sign(0))` },
    ],
    check: [
      { q: '함수가 계산 결과를 호출한 곳에 돌려주게 하는 키워드는?', opts: ['return', 'print', 'yield', 'give'], ans: 0, why: 'return 이 값을 돌려줘요.' },
      { q: '<code>return</code> 없이 print 만 하는 함수의 반환값은?', opts: ['None', '0', '빈 문자열', '출력한 값'], ans: 0, why: 'return 이 없으면 None 을 돌려줘요.' },
      { q: '<code>def f(x): return x * 2</code> 일 때 <code>f(f(3))</code>은?', opts: ['12', '6', '9', '3'], ans: 0, why: 'f(3) = 6, f(6) = 12.' },
    ],
    puzzles: [
      { t: 'predict', code: r`def add(a, b):
    return a + b

print(add(3, 4))`, ans: '7', wrong: ['34', 'None', 'add(3, 4)'], why: '합을 돌려줘요.' },
      { t: 'predict', code: r`def show(x):
    print(x * 2)

a = show(5)
print(a)`, ans: '10\nNone', wrong: ['10\n10', 'None\n10', '10'], why: 'show 는 출력만 하고 None 을 돌려줘요.' },
      { t: 'predict', code: r`def f(x):
    return x * 2

print(f(f(3)))`, ans: '12', wrong: ['6', '9', '18'], why: 'f(3) = 6, f(6) = 12.' },
      { t: 'predict', code: r`def sign(n):
    if n > 0:
        return "양수"
    return "아님"

print(sign(5), sign(-1))`, ans: '양수 아님', wrong: ['양수 양수', '아님 아님', '양수\n아님'], why: 'return 은 즉시 끝나요.' },
      { t: 'predict', code: r`def calc(a, b):
    return a + b, a * b

x, y = calc(3, 4)
print(x, y)`, ans: '7 12', wrong: ['(7, 12)', '12 7', '7 4'], why: '언패킹으로 받아요.' },
      { t: 'predict', code: r`def f():
    return 1
    print("도달 못함")

print(f())`, ans: '1', wrong: ['도달 못함\n1', '1\n도달 못함', 'None'], why: 'return 이후 줄은 실행되지 않아요.' },
      { t: 'predict', code: r`def greet(name):
    return "안녕, " + name

msg = greet("파이")
print(msg)`, ans: '안녕, 파이', wrong: ['안녕, name', 'None', 'greet'], why: '돌려받은 문자열을 출력해요.' },
      { t: 'blank', code: r`def square(n):
    ___ n * n

print(square(4))`, ans: ['return'], extra: ['print', 'give', 'def'], out: '16', why: '값을 돌려줘야 바깥에서 쓸 수 있어요.' },
      { t: 'blank', code: r`def add(a, ___):
    return a + b

print(add(1, 2))`, ans: ['b'], extra: ['c', 'a', 'x'], out: '3', why: '본문에서 쓰는 이름 b 와 같아야 해요.' },
      { t: 'parsons', lines: [r`def double(x):`, r`    return x * 2`, r`result = double(21)`, r`print(result)`], out: '42', why: '정의 → 호출해서 변수에 받기 → 출력.' },
      { t: 'bug', code: r`def add(a, b):
    print(a + b)

total = add(1, 2) * 10
print(total)`, line: 2, fix: r`    return a + b`, out: '30', why: 'print 만 하면 None 이 돌아와서 곱셈이 안 돼요. return 해야 해요.' },
      { t: 'bug', code: r`def add(a, b):
    return a + b

print(add(1))`, line: 4, fix: r`print(add(1, 2))`, out: '3', why: '필요한 인자 개수를 맞춰야 해요 (TypeError).' },
    ],
    tasks: [
      { q: '두 수를 더해서 돌려주는 함수 <code>add(a, b)</code>를 만드세요.', fn: 'add', starter: 'def add(a, b):\n    # 여기에 코드를 쓰세요\n    pass\n', cases: [[[1, 2], 3], [[0, 0], 0], [[-5, 5], 0, true], [[10, 20], 30]], sol: r`def add(a, b):
    return a + b`, hints: ['함수 본문에서 더한 결과를 return 해요.', 'print 가 아니라 return!', '<code>return a + b</code>'] },
      { q: '정수 <code>n</code>이 짝수이면 <code>True</code>, 아니면 <code>False</code>를 돌려주는 <code>is_even(n)</code> 함수를 만드세요.', fn: 'is_even', starter: 'def is_even(n):\n    pass\n', cases: [[[4], true], [[7], false], [[0], true, true], [[-2], true, true]], sol: r`def is_even(n):
    return n % 2 == 0`, hints: ['2로 나눈 나머지가 0 이면 짝수.', '비교 결과 자체가 True/False 예요.', '<code>return n % 2 == 0</code>'] },
      { q: '세 수 중 <b>가장 큰 수</b>를 돌려주는 <code>max3(a, b, c)</code> 함수를 만드세요. (내장 <code>max</code> 없이 비교로 해 보세요)', fn: 'max3', starter: 'def max3(a, b, c):\n    pass\n', cases: [[[1, 2, 3], 3], [[9, 2, 3], 9], [[4, 8, 5], 8], [[-1, -5, -3], -1, true], [[7, 7, 7], 7, true]], ban: [r`\bmax\s*\(`], banMsg: '내장 max() 없이 비교(if)로 만들어 보세요.', sol: r`def max3(a, b, c):
    best = a
    if b > best:
        best = b
    if c > best:
        best = c
    return best`, hints: ['가장 큰 값을 보관할 변수가 필요해요.', 'a 로 시작해 b, c 와 차례로 비교해요.', '마지막에 return best.'] },
    ],
    boss: { q: '점수 리스트를 받아 <b>평균</b>(실수)을 돌려주는 <code>average(scores)</code> 함수를 만드세요. 빈 리스트가 오면 <code>0.0</code>을 돌려주세요.', fn: 'average', starter: 'def average(scores):\n    pass\n', cases: [[[[1, 2, 3]], 2.0], [[[80, 90]], 85.0], [[[]], 0.0], [[[7]], 7.0, true], [[[1, 2]], 1.5, true]], sol: r`def average(scores):
    if len(scores) == 0:
        return 0.0
    return sum(scores) / len(scores)`, hints: ['빈 리스트이면 0으로 나눌 수 없어요. 먼저 확인해요.', 'if len(scores) == 0: return 0.0', '나머지는 sum(scores) / len(scores)'] },
    sum: ['<code>def f(a, b):</code> 매개변수 · 호출 <code>f(1, 2)</code> 인자', '<code>return 값</code> — 값을 돌려주고 함수 종료', 'print 만 하는 함수는 None 을 돌려준다', '<code>return a, b</code> → 튜플 → <code>x, y = f()</code> 로 받기', '인자 개수가 맞지 않으면 TypeError'],
  },
  {
    id: 39, emoji: '🎛️', title: '기본값과 키워드 인자', goal: '매개변수에 기본값을 주고, 이름으로 인자를 넘기는 방법을 익혀요',
    tips: '기본값이 있는 매개변수는 <b>맨 뒤</b>에 와야 해요. 그리고 리스트·딕셔너리를 기본값으로 쓰면 위험하니 <code>None</code>을 활용하세요.',
    learn: [
      { h: '기본값 매개변수', b: '<p><code>def f(x, y=10):</code> 처럼 <code>=</code>로 기본값을 주면, 호출할 때 그 인자를 생략할 수 있어요.</p>', code: r`def greet(name, greeting="안녕하세요"):
    print(f"{greeting}, {name}님!")

greet("민수")
greet("지영", "반가워요")` },
      { h: '키워드 인자: 이름으로 넘기기', b: '<p>호출할 때 <code>이름=값</code>으로 넘기면 <b>순서에 상관없이</b> 정할 수 있고 읽기도 쉬워요.</p>', code: r`def power(base, exp=2):
    return base ** exp

print(power(3))
print(power(2, 10))
print(power(exp=3, base=2))` },
      { h: '순서 규칙', b: '<ul><li>기본값이 있는 매개변수는 <b>기본값 없는 매개변수 뒤</b>에 와야 해요</li><li>호출할 때 위치 인자가 먼저, 키워드 인자가 뒤에 와요</li></ul>', code: r`def f(a, b=2, c=3):
    return a + b * c

print(f(1))
print(f(1, c=10))
print(f(1, 5, 5))` },
      { h: '*args: 개수가 정해지지 않은 인자', b: '<p>매개변수 이름 앞에 <code>*</code>를 붙이면 넘긴 인자들이 <b>튜플로 모여요</b>. 몇 개든 받는 함수를 만들 수 있어요(<code>print</code>가 그래요).</p>', code: r`def total(*nums):
    return sum(nums)

print(total(1, 2, 3))
print(total(10, 20))
print(total())` },
    ],
    check: [
      { q: '<code>def f(x, y=5):</code> 에서 <code>f(1)</code>을 호출하면 y는?', opts: ['5', '1', 'None', '오류'], ans: 0, why: '기본값이 쓰여요.' },
      { q: '올바른 정의는?', opts: ['def f(a, b=1):', 'def f(a=1, b):', 'def f(a=1, b)', 'def f(=1, b):'], ans: 0, why: '기본값 있는 매개변수는 뒤에 와야 해요.' },
      { q: '<code>def total(*nums)</code> 에서 nums의 자료형은?', opts: ['튜플', '리스트', '딕셔너리', '집합'], ans: 0, why: '넘긴 인자들이 튜플로 모여요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`def power(base, exp=2):
    return base ** exp

print(power(3))`, ans: '9', wrong: ['6', '3', '8'], why: 'exp 기본값 2.' },
      { t: 'predict', code: r`def power(base, exp=2):
    return base ** exp

print(power(2, 10))`, ans: '1024', wrong: ['100', '20', '4'], why: '두 번째 인자가 exp.' },
      { t: 'predict', code: r`def power(base, exp=2):
    return base ** exp

print(power(exp=3, base=2))`, ans: '8', wrong: ['9', '6', '오류'], why: '이름으로 넘기면 순서는 상관없어요.' },
      { t: 'predict', code: r`def f(a, b=2, c=3):
    return a + b * c

print(f(1), f(1, c=10))`, ans: '7 21', wrong: ['7 12', '9 21', '6 21'], why: '1+2*3=7, 1+2*10=21.' },
      { t: 'predict', code: r`def total(*nums):
    return sum(nums)

print(total(1, 2, 3), total())`, ans: '6 0', wrong: ['6 None', '(1, 2, 3) 0', '오류'], why: '인자가 없으면 빈 튜플이라 합은 0.' },
      { t: 'predict', code: r`def hi(name, end="!"):
    return "Hi " + name + end

print(hi("A"), hi("B", "?"))`, ans: 'Hi A! Hi B?', wrong: ['Hi A Hi B', 'Hi A!? Hi B', 'Hi A! Hi B!'], why: '기본값과 넘긴 값.' },
      { t: 'blank', code: r`def greet(name, greeting___"안녕"):
    return f"{greeting}, {name}"

print(greet("민수"))`, ans: ['='], extra: [':', '==', '->'], out: '안녕, 민수', why: '기본값은 = 로 줘요.' },
      { t: 'blank', code: r`def f(a, b=10):
    return a + b

print(f(1, ___=5))`, ans: ['b'], extra: ['a', 'c', 'x'], out: '6', why: '키워드 인자는 매개변수 이름 그대로.' },
      { t: 'parsons', lines: [r`def area(w, h=1):`, r`    return w * h`, r`print(area(5))`, r`print(area(5, 3))`], out: '5\n15', why: '기본값 덕분에 인자를 줄일 수 있어요.' },
      { t: 'bug', code: r`def f(a=1, b):
    return a + b

print(f(2))`, line: 1, fix: r`def f(b, a=1):`, out: '3', why: '기본값 있는 매개변수는 기본값 없는 매개변수보다 뒤에 와야 해요.' },
      { t: 'bug', code: r`def f(a, b=2):
    return a + b

print(f(b=3))`, line: 4, fix: r`print(f(1, b=3))`, out: '4', why: '기본값이 없는 a 에 값을 주지 않았어요 (TypeError).' },
    ],
    tasks: [
      { q: '이름과 인사말(기본값 <code>"안녕하세요"</code>)을 받아 <code>인사말, 이름님!</code> 문자열을 돌려주는 <code>greet(name, greeting)</code> 함수를 만드세요.', fn: 'greet', starter: 'def greet(name, greeting="안녕하세요"):\n    pass\n', cases: [[['민수'], '안녕하세요, 민수님!'], [['지영', '반가워요'], '반가워요, 지영님!'], [['A', 'Hi'], 'Hi, A님!', true]], sol: r`def greet(name, greeting="안녕하세요"):
    return f"{greeting}, {name}님!"`, hints: ['매개변수에 기본값이 이미 있어요.', 'f-string 으로 만들어 return.', '<code>return f"{greeting}, {name}님!"</code>'] },
      { q: '<code>power(base, exp=2)</code>를 만드세요. base의 exp 제곱을 돌려줘요. (기본은 제곱)', fn: 'power', starter: 'def power(base, exp=2):\n    pass\n', cases: [[[3], 9], [[2, 10], 1024], [[5, 0], 1, true], [[4, 3], 64, true]], sol: r`def power(base, exp=2):
    return base ** exp`, hints: ['거듭제곱 연산자는 ** 예요.', 'exp 기본값은 이미 2.', '<code>return base ** exp</code>'] },
      { q: '몇 개든 숫자를 받아 <b>곱</b>을 돌려주는 <code>multiply(*nums)</code>를 만드세요. 인자가 하나도 없으면 <code>1</code>을 돌려줘요.', fn: 'multiply', starter: 'def multiply(*nums):\n    pass\n', cases: [[[2, 3, 4], 24], [[5], 5], [[], 1], [[1, 2, 3, 4, 5], 120, true]], sol: r`def multiply(*nums):
    result = 1
    for n in nums:
        result *= n
    return result`, hints: ['nums 는 튜플이라 for 로 순회할 수 있어요.', '곱의 시작값은 1.', '반복이 끝난 뒤 return result.'] },
    ],
    boss: { q: '<code>format_price(amount, currency="원", comma=True)</code>를 만드세요. <code>comma</code>가 True이면 천 단위 쉼표를 넣고, False이면 넣지 않아요. 예: <code>format_price(1234567)</code> → <code>"1,234,567원"</code>, <code>format_price(1234, "$", False)</code> → <code>"1234$"</code>', fn: 'format_price', starter: 'def format_price(amount, currency="원", comma=True):\n    pass\n', cases: [[[1234567], '1,234,567원'], [[1234, '$', false], '1234$'], [[500], '500원'], [[1000, '달러'], '1,000달러', true], [[2500, '원', false], '2500원', true]], sol: r`def format_price(amount, currency="원", comma=True):
    if comma:
        return f"{amount:,}{currency}"
    return f"{amount}{currency}"`, hints: ['comma 가 True 일 때와 False 일 때를 나눠요.', 'f-string 의 {amount:,} 가 쉼표 형식이에요.', '두 경우 모두 통화 기호를 숫자 뒤에 붙여 return.'] },
    sum: ['<code>def f(a, b=기본값):</code> — 생략 가능한 매개변수', '키워드 인자 <code>f(exp=3, base=2)</code> — 순서 무관', '기본값 있는 매개변수는 뒤쪽에', '<code>*args</code> — 개수 제한 없이 받으면 튜플', '리스트를 기본값으로 쓰지 말고 <code>None</code> 사용'],
  },
  {
    id: 40, emoji: '🔭', title: '변수의 범위 (스코프)', goal: '함수 안과 밖 변수의 차이를 이해하고, 부작용 없는 함수를 만들어요',
    tips: '함수 안에서 만든 변수는 <b>함수가 끝나면 사라져요</b>. 함수가 바깥 값을 바꾸게 하기보다 <b>인자로 받고 return으로 돌려주는</b> 방식이 안전하고 읽기 쉬워요.',
    learn: [
      { h: '지역 변수', b: '<p>함수 안에서 만든 변수(매개변수 포함)는 <b>그 함수 안에서만</b> 쓸 수 있는 <b>지역 변수</b>예요. 함수 밖에서 쓰면 NameError예요.</p>', code: r`def f():
    x = 10
    print(x)

f()
print(x)`, err: true },
      { h: '전역 변수 읽기', b: '<p>함수 밖에서 만든 변수는 <b>전역 변수</b>예요. 함수 안에서 <b>읽는 것</b>은 자유로워요.</p>', code: r`name = "파이"

def hi():
    print("안녕", name)

hi()` },
      { h: '같은 이름이면 지역이 우선', b: '<p>함수 안에서 같은 이름에 값을 넣으면 <b>새로운 지역 변수</b>가 만들어질 뿐 바깥 변수는 그대로예요.</p>', code: r`x = 1

def f():
    x = 99
    print("안:", x)

f()
print("밖:", x)` },
      { h: '바깥 값을 바꾸고 싶다면: return', b: '<p>바깥 변수를 함수가 몰래 바꾸는 <code>global</code>은 편하지만 <b>버그의 근원</b>이 돼요. 값을 받아서 계산하고 <code>return</code>한 결과를 바깥에서 변수에 다시 담는 방식을 권해요. 리스트는 함수 안에서 바꾸면 <b>원본이 같이 바뀌어요</b>(같은 리스트를 가리키므로).</p>', code: r`def add_one(n):
    return n + 1

score = 5
score = add_one(score)
print(score)

def add_item(lst):
    lst.append(99)

a = [1]
add_item(a)
print(a)` },
    ],
    check: [
      { q: '함수 안에서 만든 변수를 함수 밖에서 쓰면?', opts: ['NameError', '정상 동작', '값이 0', 'None'], ans: 0, why: '지역 변수는 함수가 끝나면 사라져요.' },
      { q: '함수 안에서 <code>x = 5</code>를 하면 바깥의 같은 이름 x는?', opts: ['그대로다 (함수 안은 새 변수)', '5로 바뀐다', '삭제된다', '오류가 난다'], ans: 0, why: '새로운 지역 변수가 만들어져요.' },
      { q: '함수가 바깥 변수의 값을 바꾸게 하는 가장 권장되는 방법은?', opts: ['값을 return 하고 바깥에서 다시 대입', 'global 을 쓴다', '변수 이름을 같게 한다', '두 번 호출한다'], ans: 0, why: '입력(인자)과 출력(return)으로만 소통하는 것이 읽기 쉬워요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`x = 1

def f():
    x = 99
    return x

print(f(), x)`, ans: '99 1', wrong: ['99 99', '1 1', '1 99'], why: '함수 안의 x 는 별개의 지역 변수.' },
      { t: 'predict', code: r`name = "파이"

def hi():
    return "안녕 " + name

print(hi())`, ans: '안녕 파이', wrong: ['안녕 name', '오류', '안녕'], why: '전역 변수는 읽을 수 있어요.' },
      { t: 'predict', code: r`def add_one(n):
    n = n + 1
    return n

a = 5
add_one(a)
print(a)`, ans: '5', wrong: ['6', 'None', '오류'], why: '반환값을 받지 않았고, 숫자는 바뀌지도 않아요.' },
      { t: 'predict', code: r`def add_item(lst):
    lst.append(99)

a = [1]
add_item(a)
print(a)`, ans: '[1, 99]', wrong: ['[1]', '[99]', 'None'], why: '리스트는 같은 객체가 전달돼서 원본이 바뀌어요.' },
      { t: 'predict', code: r`count = 0

def inc():
    global count
    count += 1

inc()
inc()
print(count)`, ans: '2', wrong: ['0', '1', '오류'], why: 'global 로 선언하면 전역 변수를 바꿀 수 있어요 (하지만 권장하지 않아요).' },
      { t: 'predict', code: r`def f(x):
    x = x * 2
    return x

y = 3
y = f(y)
print(y)`, ans: '6', wrong: ['3', '9', '오류'], why: '반환값을 다시 y 에 담았어요.' },
      { t: 'blank', code: r`def square(n):
    result = n * n
    ___ result

s = square(4)
print(s)`, ans: ['return'], extra: ['print', 'global', 'yield'], out: '16', why: '지역 변수 값은 return 으로 돌려줘야 바깥에서 쓸 수 있어요.' },
      { t: 'blank', code: r`x = 10

def f():
    x = 5
    return x

f()
print(___)`, ans: ['x'], extra: ['f', 'f()', 'result'], out: '10', why: '바깥 x 는 그대로 10.' },
      { t: 'parsons', lines: [r`def double(n):`, r`    return n * 2`, r`score = 5`, r`score = double(score)`, r`print(score)`], out: '10', why: '반환값을 변수에 다시 담아요.' },
      { t: 'bug', code: r`def total():
    t = 0
    for i in range(3):
        t += i
    return t

total()
print(t)`, line: 8, fix: r`print(total())`, out: '3', why: '함수 안의 t 는 지역 변수라 밖에서 쓸 수 없어요. 돌려받은 값을 쓰세요.' },
    ],
    tasks: [
      { q: '리스트를 받아 각 원소를 제곱한 <b>새 리스트</b>를 돌려주는 <code>square_all(nums)</code>를 만드세요. <b>원본 리스트는 바뀌면 안 돼요.</b>', fn: 'square_all', starter: 'def square_all(nums):\n    pass\n', cases: [[[[1, 2, 3]], [1, 4, 9]], [[[]], []], [[[5]], [25], true]], check: 'a = [1, 2]\nb = square_all(a)\nassert a == [1, 2], "원본 리스트가 바뀌었어요"\nassert b == [1, 4]', sol: r`def square_all(nums):
    return [n * n for n in nums]`, hints: ['새 리스트를 만들어 돌려줘요.', 'append 로 원본을 고치면 안 돼요.', '<code>[n * n for n in nums]</code>'] },
      { q: '<code>count</code>가 전역 변수로 <code>0</code>이에요. 함수 <code>increase(n)</code>이 <b>n을 받아 n + 1을 돌려주게</b> 하고, 아래처럼 <b>return과 재대입</b>으로 count를 3번 올려 <code>3</code>을 출력하세요.', starter: 'count = 0\n\ndef increase(n):\n    pass\n\n# 아래에서 increase 를 세 번 사용해 count 를 3으로 만들고 출력하세요\n', tests: [{ out: '3' }], ban: [r`\bglobal\b`], banMsg: 'global 없이 return 과 재대입으로 해 보세요.', sol: r`count = 0

def increase(n):
    return n + 1

count = increase(count)
count = increase(count)
count = increase(count)
print(count)`, hints: ['함수는 n + 1 을 돌려주기만 해요.', '바깥에서 count = increase(count) 로 다시 담아요.', '세 번 반복한 뒤 print(count).'] },
      { q: '<code>grade(score)</code>를 만드세요. 90 이상 <code>"A"</code>, 80 이상 <code>"B"</code>, 그 외 <code>"C"</code>를 돌려줘요. 함수 안에서 만든 변수는 밖에서 쓰지 않아요.', fn: 'grade', starter: 'def grade(score):\n    pass\n', cases: [[[95], 'A'], [[85], 'B'], [[50], 'C'], [[90], 'A', true], [[80], 'B', true], [[79], 'C', true]], sol: r`def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    return "C"`, hints: ['큰 기준부터 검사해요.', '조건이 맞으면 바로 return.', '마지막은 나머지 경우의 return "C".'] },
    ],
    boss: { q: '점수 리스트를 받아 <b>최고·최저·평균</b>을 담은 딕셔너리를 돌려주는 <code>make_report(scores)</code>를 만드세요. 키는 <code>"max"</code>, <code>"min"</code>, <code>"avg"</code>예요.', fn: 'make_report', starter: 'def make_report(scores):\n    pass\n', cases: [[[[80, 90, 100]], { max: 100, min: 80, avg: 90.0 }], [[[50]], { max: 50, min: 50, avg: 50.0 }], [[[1, 2]], { max: 2, min: 1, avg: 1.5 }, true]], sol: r`def make_report(scores):
    return {"max": max(scores), "min": min(scores), "avg": sum(scores) / len(scores)}`, hints: ['딕셔너리 {"max": ..., "min": ..., "avg": ...} 를 만들어요.', 'max(), min(), sum() / len() 을 사용해요.', '그 딕셔너리를 return 해요.'] },
    sum: ['함수 안에서 만든 변수는 <b>지역</b> — 함수 밖에서 쓰면 NameError', '바깥 전역 변수는 함수 안에서 <b>읽기</b>만 자유로움', '같은 이름에 대입하면 새 지역 변수가 만들어진다', '값을 바꾸려면 <code>return</code> + 바깥에서 재대입 (<code>global</code> 지양)', '리스트는 함수 안에서 바꾸면 원본이 바뀐다 (같은 객체)'],
  },
  {
    id: 41, emoji: '♻️', title: '재귀 함수', goal: '함수가 자기 자신을 부르는 재귀를 이해하고, 종료 조건(base case)을 설계해요',
    tips: '재귀에는 두 가지가 꼭 필요해요: <b>① 멈추는 조건(base case)</b> ② <b>문제를 더 작게 만들어 자기 자신 호출</b>. 큰 문제를 “작은 같은 문제”로 바꿔 보세요.',
    learn: [
      { h: '재귀의 기본 모양', b: '<p>5! = 5 × 4!, 4! = 4 × 3!, … 처럼 <b>작은 같은 문제</b>로 정의되는 계산이 재귀에 딱 맞아요. 마지막(작은 문제)에서는 직접 답을 돌려줘야 끝나요.</p>', code: r`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))` },
      { h: '카운트다운', b: '<p>값을 출력하고 더 작은 값으로 자신을 호출하는 재귀예요. 종료 조건이 없으면 끝나지 않겠죠?</p>', code: r`def countdown(n):
    if n == 0:
        print("발사!")
        return
    print(n)
    countdown(n - 1)

countdown(3)` },
      { h: '합계를 재귀로', b: '<p>1부터 n까지의 합 = n + (1부터 n-1까지의 합). 같은 모양의 작은 문제로 줄어요.</p>', code: r`def sum_to(n):
    if n == 0:
        return 0
    return n + sum_to(n - 1)

print(sum_to(10))` },
      { h: '종료 조건이 없으면?', b: '<p>종료 조건이 없거나 도달하지 못하면 파이썬이 <b>RecursionError</b>로 멈춰 줘요. 호출이 쌓이는 한계(약 1000번)가 있어요.</p>', code: r`def forever(n):
    return forever(n + 1)

forever(0)`, err: true },
    ],
    check: [
      { q: '재귀 함수에 꼭 필요한 것은?', opts: ['멈추는 조건(base case)', 'for 문', '전역 변수', 'print 문'], ans: 0, why: '없으면 끝없이 호출해 RecursionError.' },
      { q: '<code>factorial(3)</code>은 재귀 정의로 어떻게 계산될까요?', opts: ['3 * factorial(2)', '3 + factorial(2)', 'factorial(3 - 1)', '3 * 2 * 1 을 바로'], ans: 0, why: 'n! = n × (n-1)!', },
      { q: '종료 조건을 빼먹으면 일어나는 일은?', opts: ['RecursionError', '무한히 정상 실행', 'SyntaxError', '0이 반환됨'], ans: 0, why: '호출 한도를 넘어 오류가 나요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(4))`, ans: '24', wrong: ['10', '12', '4'], why: '4×3×2×1 = 24.' },
      { t: 'predict', code: r`def countdown(n):
    if n == 0:
        print("발사!")
        return
    print(n)
    countdown(n - 1)

countdown(2)`, ans: '2\n1\n발사!', wrong: ['발사!', '2\n1\n0\n발사!', '1\n2\n발사!'], why: '2, 1 을 출력한 뒤 0에서 종료.' },
      { t: 'predict', code: r`def sum_to(n):
    if n == 0:
        return 0
    return n + sum_to(n - 1)

print(sum_to(4))`, ans: '10', wrong: ['4', '24', '6'], why: '4+3+2+1 = 10.' },
      { t: 'predict', code: r`def f(n):
    if n == 0:
        return "끝"
    return f(n - 1)

print(f(3))`, ans: '끝', wrong: ['3', '0', 'None'], why: '끝까지 내려가 "끝"이 거꾸로 돌아와요.' },
      { t: 'predict', code: r`def power(b, e):
    if e == 0:
        return 1
    return b * power(b, e - 1)

print(power(2, 5))`, ans: '32', wrong: ['10', '25', '16'], why: '2를 5번 곱해요.' },
      { t: 'predict', code: r`def rev(s):
    if s == "":
        return ""
    return rev(s[1:]) + s[0]

print(rev("abc"))`, ans: 'cba', wrong: ['abc', 'bca', 'acb'], why: '뒤쪽을 뒤집은 것 + 첫 글자.' },
      { t: 'blank', code: r`def factorial(n):
    if n <= 1:
        ___ 1
    return n * factorial(n - 1)

print(factorial(3))`, ans: ['return'], extra: ['print', 'break', 'yield'], out: '6', why: '종료 조건에서 값을 돌려줘요.' },
      { t: 'blank', code: r`def sum_to(n):
    if n == 0:
        return 0
    return n + sum_to(n ___ 1)

print(sum_to(3))`, ans: ['-'], extra: ['+', '*', '/'], out: '6', why: '문제를 더 작게 만들어야 해요.' },
      { t: 'parsons', lines: [r`def f(n):`, r`    if n == 0:`, r`        return 0`, r`    return n + f(n - 1)`, r`print(f(3))`], out: '6', why: '종료 조건 → 재귀 호출 순서.' },
      { t: 'bug', code: r`def sum_to(n):
    if n == 0:
        return 0
    return n + sum_to(n)

print(sum_to(3))`, line: 4, fix: r`    return n + sum_to(n - 1)`, out: '6', why: '재귀 호출에서 문제가 줄어들지 않아 끝나지 않아요(RecursionError). n - 1 로 줄여야 해요.' },
    ],
    tasks: [
      { q: '재귀로 <b>n!</b>을 돌려주는 <code>factorial(n)</code>을 만드세요. (<code>factorial(0)</code>과 <code>factorial(1)</code>은 1) 반복문은 쓰지 마세요.', fn: 'factorial', starter: 'def factorial(n):\n    pass\n', cases: [[[5], 120], [[1], 1], [[0], 1, true], [[7], 5040, true]], ban: [r`\b(for|while)\b`], banMsg: '반복문 없이 재귀로 만들어 보세요.', sol: r`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)`, hints: ['멈추는 조건: n <= 1 이면 1.', '나머지는 n * factorial(n - 1).', '반복문을 쓰지 않아요.'] },
      { q: '재귀로 <b>1부터 n까지의 합</b>을 돌려주는 <code>sum_to(n)</code>을 만드세요. (<code>sum_to(0)</code>은 0)', fn: 'sum_to', starter: 'def sum_to(n):\n    pass\n', cases: [[[10], 55], [[1], 1], [[0], 0, true], [[100], 5050, true]], ban: [r`\b(for|while)\b`], banMsg: '반복문 없이 재귀로 만들어 보세요.', sol: r`def sum_to(n):
    if n == 0:
        return 0
    return n + sum_to(n - 1)`, hints: ['종료 조건: n 이 0 이면 0.', 'n + (n-1까지의 합)', '<code>return n + sum_to(n - 1)</code>'] },
      { q: '재귀로 <b>문자열을 뒤집는</b> <code>rev(s)</code>를 만드세요. (슬라이싱 <code>[::-1]</code>은 쓰지 마세요)', fn: 'rev', starter: 'def rev(s):\n    pass\n', cases: [[['abc'], 'cba'], [[''], ''], [['a'], 'a', true], [['hello'], 'olleh', true]], ban: [r`::-1`, r`reversed|sorted`], banMsg: '재귀로 만들어 보세요 ([::-1] 금지).', sol: r`def rev(s):
    if s == "":
        return ""
    return rev(s[1:]) + s[0]`, hints: ['빈 문자열이면 빈 문자열.', '뒤쪽(s[1:])을 뒤집은 것 뒤에 첫 글자를 붙여요.', '<code>rev(s[1:]) + s[0]</code>'] },
    ],
    boss: { q: '재귀로 <b>최대공약수</b>를 돌려주는 <code>gcd(a, b)</code>를 만드세요. 유클리드 호제법: <code>b</code>가 0이면 <code>a</code>가 답이고, 아니면 <code>gcd(b, a % b)</code>예요. 반복문은 쓰지 마세요.', fn: 'gcd', starter: 'def gcd(a, b):\n    pass\n', cases: [[[12, 18], 6], [[7, 3], 1], [[100, 75], 25], [[5, 0], 5, true], [[48, 18], 6, true]], ban: [r`\b(for|while)\b`], banMsg: '반복문 없이 재귀로 만들어 보세요.', sol: r`def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)`, hints: ['종료 조건: b == 0 이면 a.', '아니면 gcd(b, a % b) 로 문제를 줄여요.', 'a % b 는 점점 작아져서 반드시 끝나요.'] },
    sum: ['재귀 = 함수가 자기 자신을 호출', '필수: ① 종료 조건(base case) ② 문제를 줄이며 자기 호출', '<code>n! = n * (n-1)!</code> · <code>sum_to(n) = n + sum_to(n-1)</code>', '종료 조건이 없으면 RecursionError', '반복문으로 풀 수 있는 것은 반복문이 더 단순할 때가 많다'],
  },
  {
    id: 42, emoji: 'λ', title: '람다와 함수를 값처럼', goal: '이름 없는 한 줄 함수 lambda와 map·filter·sorted(key=…)로 함수를 값처럼 다뤄요',
    tips: '파이썬에서 <b>함수도 값</b>이에요. 변수에 담고, 다른 함수에 넘길 수 있어요. 정렬 기준을 정하는 <code>key=lambda …</code>가 가장 자주 쓰이는 모습이에요.',
    learn: [
      { h: '함수는 값이다', b: '<p>함수 이름은 그냥 변수예요. 다른 변수에 담거나 <b>다른 함수의 인자로 넘길 수</b> 있어요.</p>', code: r`def double(x):
    return x * 2

f = double
print(f(5))

def apply(func, value):
    return func(value)

print(apply(double, 7))
print(apply(len, "hello"))` },
      { h: 'lambda: 이름 없는 한 줄 함수', b: '<p><code>lambda 매개변수: 식</code>은 <b>식 하나를 돌려주는 짧은 함수</b>예요. 한 번만 쓸 간단한 함수에 편리해요.</p>', code: r`square = lambda x: x * x
print(square(4))
add = lambda a, b: a + b
print(add(3, 4))
print((lambda x: x + 1)(10))` },
      { h: 'sorted와 key', b: '<p><code>sorted(리스트, key=함수)</code>는 각 원소에 함수를 적용한 값을 <b>기준</b>으로 정렬해요. 튜플이나 딕셔너리 정렬에 필수예요.</p>', code: r`pairs = [("민수", 80), ("지영", 95), ("철수", 70)]
print(sorted(pairs, key=lambda p: p[1]))
print(sorted(pairs, key=lambda p: -p[1]))
words = ["banana", "kiwi", "apple"]
print(sorted(words, key=lambda w: (len(w), w)))` },
      { h: 'map과 filter', b: '<ul><li><code>map(함수, 반복가능)</code> 각 원소에 함수를 적용</li><li><code>filter(함수, 반복가능)</code> 함수가 참인 원소만</li><li>결과는 <code>list()</code>로 감싸서 리스트로 봐요</li></ul>', code: r`nums = [1, 2, 3, 4, 5]
print(list(map(lambda x: x * 2, nums)))
print(list(filter(lambda x: x % 2 == 0, nums)))
print(max(nums, key=lambda x: -x))` },
    ],
    check: [
      { q: '<code>lambda x: x + 1</code>은 무엇일까요?', opts: ['x를 받아 x + 1을 돌려주는 이름 없는 함수', '변수 x', '반복문', '문자열'], ans: 0, why: '짧은 익명 함수예요.' },
      { q: '<code>sorted(a, key=len)</code>이 정렬하는 기준은?', opts: ['각 원소의 길이', '원소 값 자체', '원소의 번호', '무작위'], ans: 0, why: 'key 함수의 결과로 비교해요.' },
      { q: '<code>list(filter(lambda x: x > 2, [1, 2, 3, 4]))</code>의 결과는?', opts: ['[3, 4]', '[1, 2]', '[True, True]', '[1, 2, 3, 4]'], ans: 0, why: '조건이 참인 원소만 남아요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`f = lambda x: x * x
print(f(4))`, ans: '16', wrong: ['8', '4', 'x * x'], why: '제곱.' },
      { t: 'predict', code: r`add = lambda a, b: a + b
print(add(3, 4))`, ans: '7', wrong: ['34', '12', 'None'], why: '합.' },
      { t: 'predict', code: r`pairs = [("a", 3), ("b", 1), ("c", 2)]
print(sorted(pairs, key=lambda p: p[1]))`, ans: "[('b', 1), ('c', 2), ('a', 3)]", wrong: ["[('a', 3), ('b', 1), ('c', 2)]", "[('a', 3), ('c', 2), ('b', 1)]", "[1, 2, 3]"], why: '두 번째 값 기준 오름차순.' },
      { t: 'predict', code: r`words = ["banana", "kiwi", "apple"]
print(sorted(words, key=lambda w: len(w)))`, ans: "['kiwi', 'apple', 'banana']", wrong: ["['apple', 'banana', 'kiwi']", "['banana', 'apple', 'kiwi']", "['kiwi', 'banana', 'apple']"], why: '길이 4, 5, 6.' },
      { t: 'predict', code: r`print(list(map(lambda x: x * 2, [1, 2, 3])))`, ans: '[2, 4, 6]', wrong: ['[1, 2, 3]', '6', '[1, 4, 9]'], why: '각각 2배.' },
      { t: 'predict', code: r`print(list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4])))`, ans: '[2, 4]', wrong: ['[1, 3]', '[True, False, True, False]', '[1, 2, 3, 4]'], why: '짝수만.' },
      { t: 'predict', code: r`def apply(func, v):
    return func(v)

print(apply(len, "hello"), apply(lambda x: x + 1, 9))`, ans: '5 10', wrong: ['hello 10', '5 9', '10 5'], why: '함수를 인자로 넘겨요.' },
      { t: 'blank', code: r`pairs = [("a", 3), ("b", 1)]
print(sorted(pairs, ___=lambda p: p[1]))`, ans: ['key'], extra: ['by', 'func', 'sort'], out: "[('b', 1), ('a', 3)]", why: '정렬 기준 인자는 key.' },
      { t: 'blank', code: r`nums = [1, 2, 3, 4]
print(list(___(lambda x: x > 2, nums)))`, ans: ['filter'], extra: ['map', 'sorted', 'max'], out: '[3, 4]', why: '조건에 맞는 것만 거르는 함수는 filter.' },
      { t: 'parsons', lines: [r`scores = [("a", 70), ("b", 90)]`, r`best = max(scores, key=lambda s: s[1])`, r`print(best[0])`], out: 'b', why: '점수를 기준으로 최댓값을 구해요.' },
      { t: 'bug', code: r`nums = [3, 1, 2]
print(sorted(nums, key=lambda: x))`, line: 2, fix: r`print(sorted(nums, key=lambda x: -x))`, out: '[3, 2, 1]', why: 'lambda 는 매개변수가 필요해요: lambda x: 식.' },
    ],
    tasks: [
      { q: '튜플 리스트 <code>pairs</code>를 <b>두 번째 값 기준 내림차순</b>으로 정렬해 출력하세요. (<code>key=lambda</code> 사용)', starter: 'pairs = [("민수", 80), ("지영", 95), ("철수", 70)]\n', tests: [{ out: "[('지영', 95), ('민수', 80), ('철수', 70)]" }], need: [r`lambda`], needMsg: 'lambda 를 사용해 주세요.', sol: r`pairs = [("민수", 80), ("지영", 95), ("철수", 70)]
print(sorted(pairs, key=lambda p: -p[1]))`, hints: ['정렬 기준은 두 번째 값 p[1].', '내림차순은 부호를 바꾸면 쉬워요.', '<code>sorted(pairs, key=lambda p: -p[1])</code>'] },
      { q: '<code>filter</code>와 <code>lambda</code>로 <code>nums</code>에서 <b>3의 배수만</b> 골라 리스트로 출력하세요.', starter: 'nums = [1, 3, 5, 6, 9, 10, 12]\n', tests: [{ out: '[3, 6, 9, 12]' }], need: [r`filter`, r`lambda`], needMsg: 'filter 와 lambda 를 사용해 주세요.', sol: r`nums = [1, 3, 5, 6, 9, 10, 12]
print(list(filter(lambda x: x % 3 == 0, nums)))`, hints: ['조건은 x % 3 == 0.', 'filter 의 결과는 list() 로 감싸요.', '<code>list(filter(lambda x: x % 3 == 0, nums))</code>'] },
      { q: '단어 리스트 <code>words</code>를 <b>길이 순(짧은 것 먼저), 길이가 같으면 알파벳 순</b>으로 정렬해 출력하세요.', starter: 'words = ["pear", "fig", "apple", "kiwi", "date"]\n', tests: [{ out: "['fig', 'date', 'kiwi', 'pear', 'apple']" }], need: [r`key\s*=`], needMsg: 'key= 를 사용해 주세요.', sol: r`words = ["pear", "fig", "apple", "kiwi", "date"]
print(sorted(words, key=lambda w: (len(w), w)))`, hints: ['기준을 튜플로 만들면 앞 항목부터 비교해요.', '(길이, 단어) 튜플.', '<code>key=lambda w: (len(w), w)</code>'] },
    ],
    boss: { q: '학생 딕셔너리 리스트 <code>students</code>를 <b>점수 높은 순</b>으로 정렬하고, 같은 점수면 이름 알파벳(가나다) 순으로 정렬해 <b>이름만</b> 한 줄에 하나씩 출력하세요.', starter: 'students = [{"name": "민수", "score": 80}, {"name": "지영", "score": 95}, {"name": "철수", "score": 80}, {"name": "하나", "score": 70}]\n', tests: [{ out: '지영\n민수\n철수\n하나' }], need: [r`lambda`], needMsg: 'lambda 를 사용해 주세요.', sol: r`students = [{"name": "민수", "score": 80}, {"name": "지영", "score": 95}, {"name": "철수", "score": 80}, {"name": "하나", "score": 70}]
for s in sorted(students, key=lambda s: (-s["score"], s["name"])):
    print(s["name"])`, hints: ['기준을 (−점수, 이름) 튜플로 만들어요.', 'key=lambda s: (-s["score"], s["name"])', '정렬된 학생에서 이름만 출력.'] },
    sum: ['함수도 값: 변수에 담기, 인자로 넘기기', '<code>lambda x: 식</code> 이름 없는 한 줄 함수', '<code>sorted(a, key=lambda …)</code> 정렬 기준 · <code>(−점수, 이름)</code> 튜플로 다중 기준', '<code>list(map(f, a))</code> 변환 · <code>list(filter(f, a))</code> 필터', '컴프리헨션으로도 같은 일을 할 수 있다'],
  },
];
