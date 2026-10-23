const r = String.raw;

export const U31 = [
  {
    id: 31, emoji: '🗜️', title: '튜플', goal: '바꿀 수 없는 묶음인 튜플과 언패킹(여러 변수에 한 번에 담기)을 익혀요',
    tips: '튜플은 <b>소괄호 ( )</b>로 만들고, 한 번 만들면 <b>바꿀 수 없는</b> 리스트라고 생각하면 돼요. 좌표, 날짜처럼 “고정된 묶음”에 어울려요.',
    learn: [
      { h: '튜플 만들기와 읽기', b: '<p><code>(값, 값, …)</code>이 튜플이에요. 번호·슬라이싱은 리스트와 같지만 <b>원소를 바꿀 수는 없어요</b>. 원소가 하나인 튜플은 <code>(1,)</code>처럼 쉼표가 꼭 필요해요.</p>', code: r`point = (3, 4)
print(point)
print(point[0], point[-1])
print(len(point))
one = (5,)
print(one, type(one))` },
      { h: '바꿀 수 없어요', b: '<p>튜플의 원소를 바꾸려 하면 <b>TypeError</b>가 나요. 값을 바꾸고 싶다면 리스트를 쓰고, 지키고 싶은 값이라면 튜플이 안전해요.</p>', code: r`point = (3, 4)
point[0] = 10`, err: true },
      { h: '언패킹: 한 번에 여러 변수에', b: '<p>튜플(또는 리스트)의 값을 여러 변수에 <b>한 번에</b> 나눠 담을 수 있어요. 개수가 같아야 해요. 값 교환도 이걸로 한 줄에 끝나요.</p>', code: r`x, y = (3, 4)
print(x, y)
a, b = 1, 2
a, b = b, a
print(a, b)` },
      { h: '튜플을 쓰는 곳', b: '<p>함수가 여러 값을 돌려줄 때, 딕셔너리의 키, 리스트 속 짝(이름, 점수) 등에 자주 써요. 튜플과 리스트는 서로 바꿀 수 있어요.</p>', code: r`pairs = [("민수", 80), ("지영", 95)]
for name, score in pairs:
    print(name, score)
print(tuple([1, 2, 3]))
print(list((4, 5)))` },
    ],
    check: [
      { q: '튜플의 가장 큰 특징은?', opts: ['만든 뒤에 원소를 바꿀 수 없다', '원소를 마음대로 추가할 수 있다', '숫자만 담을 수 있다', '번호로 접근할 수 없다'], ans: 0, why: '불변(immutable) 자료형이에요.' },
      { q: '원소가 하나뿐인 튜플은?', opts: ['(5,)', '(5)', '[5]', '5,'], ans: 0, why: '쉼표가 있어야 튜플이에요. (5)는 그냥 괄호 친 숫자.' },
      { q: '<code>a, b = 1, 2</code> 다음에 <code>a, b = b, a</code>를 실행하면?', opts: ['a는 2, b는 1', 'a는 1, b는 2', '오류', '둘 다 2'], ans: 0, why: '동시에 바꿔 담아서 값이 교환돼요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`p = (3, 4)
print(p[0], p[-1])`, ans: '3 4', wrong: ['4 3', '3 3', '(3, 4)'], why: '0번 3, -1번 4.' },
      { t: 'predict', code: r`print(len((1, 2, 3)))`, ans: '3', wrong: ['1', '6', '(1, 2, 3)'], why: '원소 3개.' },
      { t: 'predict', code: r`x, y = (3, 4)
print(x + y)`, ans: '7', wrong: ['34', '3 4', '(7)'], why: '언패킹 후 더해요.' },
      { t: 'predict', code: r`a, b = 1, 2
a, b = b, a
print(a, b)`, ans: '2 1', wrong: ['1 2', '2 2', '1 1'], why: '값이 서로 바뀌어요.' },
      { t: 'predict', code: r`print((1, 2) + (3,))`, ans: '(1, 2, 3)', wrong: ['(4, 2)', '[1, 2, 3]', '(1, 2)(3,)'], why: '튜플도 +로 이어 붙여요.' },
      { t: 'predict', code: r`print(type((5)), type((5,)))`, ans: "<class 'int'> <class 'tuple'>", wrong: ["<class 'tuple'> <class 'tuple'>", "<class 'int'> <class 'int'>", "<class 'tuple'> <class 'int'>"], why: '쉼표가 있어야 튜플.' },
      { t: 'predict', code: r`pairs = [("a", 1), ("b", 2)]
for k, v in pairs:
    print(k * v)`, ans: 'a\nbb', wrong: ['a\nb', '1\n2', 'a1\nb2'], why: '짝을 풀어서 곱해요.' },
      { t: 'blank', code: r`t = (10, 20, 30)
print(t[___])`, ans: ['-1'], extra: ['0', '3', '1'], out: '30', why: '마지막 원소.' },
      { t: 'blank', code: r`x, y, z = (1, 2, 3)
print(x + ___ + z)`, ans: ['y'], extra: ['t', '2', 'w'], out: '6', why: '언패킹한 변수 y.' },
      { t: 'parsons', lines: [r`a = 5`, r`b = 9`, r`a, b = b, a`, r`print(a, b)`], out: '9 5', why: '교환은 동시 대입 한 줄.' },
      { t: 'bug', code: r`t = (1, 2, 3)
t[0] = 10
print(t)`, line: 2, fix: r`t = (10,) + t[1:]`, out: '(10, 2, 3)', why: '튜플은 직접 바꿀 수 없어요. 새 튜플을 만들어야 해요.' },
      { t: 'bug', code: r`a, b = (1, 2, 3)
print(a, b)`, line: 1, fix: r`a, b, c = (1, 2, 3)`, out: '1 2', why: '언패킹할 때 변수 개수와 값 개수가 같아야 해요.' },
    ],
    tasks: [
      { q: '튜플 <code>t</code>의 <b>첫 번째와 마지막 원소의 합</b>을 출력하세요.', starter: 't = (10, 20, 30, 40)\n', tests: [{ out: '50' }], sol: r`t = (10, 20, 30, 40)
print(t[0] + t[-1])`, hints: ['튜플도 번호로 꺼내요.', '첫 원소 t[0], 마지막 t[-1].', '<code>print(t[0] + t[-1])</code>'] },
      { q: '두 정수를 한 줄씩 입력받아 변수 <code>a</code>, <code>b</code>에 담고 <b>값을 서로 바꾼 뒤</b> <code>a b</code>를 공백으로 출력하세요. (동시 대입 사용)', starter: '', tests: [{ in: ['1', '2'], out: '2 1' }, { in: ['10', '-5'], out: '-5 10', hidden: true }], need: [r`\ba\s*,\s*b\s*=\s*b\s*,\s*a`], needMsg: 'a, b = b, a 처럼 동시 대입을 사용해 보세요.', sol: r`a = int(input())
b = int(input())
a, b = b, a
print(a, b)`, hints: ['임시 변수 없이도 바꿀 수 있어요.', 'a, b = b, a', '입력은 int 로 바꿔요.'] },
      { q: '좌표 두 점 <code>p1</code>, <code>p2</code>(튜플)가 주어져 있어요. <b>가로 거리와 세로 거리의 합</b>(맨해튼 거리)을 출력하세요. (<code>abs()</code>는 절댓값이에요)', starter: 'p1 = (1, 2)\np2 = (4, -2)\n', tests: [{ out: '7' }], sol: r`p1 = (1, 2)
p2 = (4, -2)
x1, y1 = p1
x2, y2 = p2
print(abs(x1 - x2) + abs(y1 - y2))`, hints: ['언패킹으로 x, y 를 꺼내면 편해요.', '가로 거리는 abs(x1 - x2).', '둘을 더해 출력해요: 3 + 4 = 7.'] },
    ],
    boss: { q: '이름과 점수가 담긴 튜플 리스트 <code>data</code>가 있어요. 각 튜플을 <b>언패킹</b>해서 <code>민수: 80점</code> 형태로 한 줄씩 출력하고, 마지막 줄에 <b>점수 합계</b>를 <code>합계: ○</code>로 출력하세요.', starter: 'data = [("민수", 80), ("지영", 95), ("철수", 70)]\n', tests: [{ out: '민수: 80점\n지영: 95점\n철수: 70점\n합계: 245' }], sol: r`data = [("민수", 80), ("지영", 95), ("철수", 70)]
total = 0
for name, score in data:
    print(f"{name}: {score}점")
    total += score
print(f"합계: {total}")`, hints: ['for name, score in data: 로 바로 언패킹해요.', '출력 형식은 f"{name}: {score}점" 이에요.', '합계 변수를 0으로 시작해 누적해요.'] },
    sum: ['<code>(1, 2, 3)</code> 튜플 — 만든 뒤 바꿀 수 없다 · 한 원소는 <code>(5,)</code>', '번호·슬라이싱·<code>len</code>·<code>+</code> 는 리스트처럼 사용', '언패킹: <code>x, y = (3, 4)</code> · 교환 <code>a, b = b, a</code>', '변수 개수와 값 개수가 같아야 함', '<code>tuple(리스트)</code> · <code>list(튜플)</code> 으로 상호 변환'],
  },
  {
    id: 32, emoji: '📖', title: '딕셔너리 기초', goal: '이름표(키)로 값을 찾는 딕셔너리를 만들고, 읽고, 추가하고, 삭제해요',
    tips: '리스트는 <b>번호</b>로, 딕셔너리는 <b>키(이름표)</b>로 값을 찾아요. 전화번호부, 사전, 장바구니 같은 “이름 → 값” 관계에 딱이에요.',
    learn: [
      { h: '키와 값', b: '<p><code>{키: 값, 키: 값}</code> 형태예요. <code>d[키]</code>로 값을 꺼내고, 키가 없으면 <b>KeyError</b>예요. 키는 보통 문자열이나 숫자를 써요.</p>', code: r`prices = {"사과": 1200, "배": 3000, "귤": 500}
print(prices["배"])
print(prices)
print(len(prices))` },
      { h: '추가·수정·삭제', b: '<p>없는 키에 값을 넣으면 <b>추가</b>, 있는 키에 넣으면 <b>수정</b>이에요. 삭제는 <code>del d[키]</code> 또는 <code>d.pop(키)</code>예요.</p>', code: r`d = {"a": 1}
d["b"] = 2
d["a"] = 100
print(d)
del d["a"]
print(d)
x = d.pop("b")
print(x, d)` },
      { h: '키가 있는지 확인: in 과 get', b: '<p><code>키 in d</code>는 <b>키</b>가 있는지 검사해요(값이 아님). <code>d.get(키, 기본값)</code>은 키가 없을 때 오류 대신 기본값을 돌려줘서 편해요.</p>', code: r`d = {"사과": 3}
print("사과" in d, "배" in d)
print(d.get("사과"))
print(d.get("배"))
print(d.get("배", 0))` },
      { h: '키 오류 만나 보기', b: '<p>없는 키를 <code>d[키]</code>로 꺼내면 KeyError예요. 키가 있을지 확신이 없다면 <code>in</code>이나 <code>get</code>을 쓰세요.</p>', code: r`d = {"사과": 3}
print(d["배"])`, err: true },
    ],
    check: [
      { q: '딕셔너리에서 값을 찾는 기준은?', opts: ['키', '번호(인덱스)', '값의 크기', '입력한 순서'], ans: 0, why: '키(이름표)로 값을 찾아요.' },
      { q: '<code>d = {"a": 1}</code>에서 <code>d["z"]</code>를 실행하면?', opts: ['KeyError', 'None', '0', '빈 문자열'], ans: 0, why: '없는 키는 오류예요.' },
      { q: '<code>d.get("z", 0)</code>은 키 z가 없을 때?', opts: ['0 을 돌려준다', '오류가 난다', 'None 을 돌려준다', 'z를 추가한다'], ans: 0, why: '기본값을 돌려줘요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`d = {"a": 1, "b": 2}
print(d["b"])`, ans: '2', wrong: ['1', 'b', '{"b": 2}'], why: '키 b 의 값.' },
      { t: 'predict', code: r`d = {"a": 1}
d["b"] = 2
print(d)`, ans: "{'a': 1, 'b': 2}", wrong: ["{'b': 2}", "{'a': 1}", "{'a': 2}"], why: '없는 키에 값을 넣으면 추가돼요.' },
      { t: 'predict', code: r`d = {"a": 1}
d["a"] = 100
print(d)`, ans: "{'a': 100}", wrong: ["{'a': 1}", "{'a': 1, 'a': 100}", "{'a': 101}"], why: '있는 키에 값을 넣으면 수정.' },
      { t: 'predict', code: r`d = {"x": 5}
print("x" in d, 5 in d)`, ans: 'True False', wrong: ['True True', 'False True', 'False False'], why: 'in 은 키를 검사해요.' },
      { t: 'predict', code: r`d = {"a": 1}
print(d.get("a"), d.get("z"), d.get("z", 0))`, ans: '1 None 0', wrong: ['1 0 0', '1 None None', '오류'], why: 'get 은 없으면 None 또는 기본값.' },
      { t: 'predict', code: r`d = {"a": 1, "b": 2}
del d["a"]
print(d, len(d))`, ans: "{'b': 2} 1", wrong: ["{'a': 1} 1", "{'b': 2} 2", "{} 0"], why: '삭제 후 하나 남아요.' },
      { t: 'predict', code: r`d = {"a": 1, "b": 2}
x = d.pop("a")
print(x, d)`, ans: "1 {'b': 2}", wrong: ["{'a': 1} {'b': 2}", "2 {'a': 1}", "a {'b': 2}"], why: 'pop 은 값을 꺼내면서 삭제.' },
      { t: 'blank', code: r`d = {"사과": 3, "배": 5}
print(d[___])`, ans: ['"배"'], extra: ['배', '1', '"사과"'], out: '5', why: '키는 문자열이라 따옴표가 필요해요.' },
      { t: 'blank', code: r`d = {}
d["a"] = 1
print(___ "a" in d)`, ans: ['not'], extra: ['len', 'type', 'sorted'], out: 'False', why: 'not 은 True/False 를 뒤집어요. "a" 가 키로 있으니 True 를 뒤집어 False.' },
      { t: 'parsons', lines: [r`stock = {"사과": 3}`, r`stock["배"] = 2`, r`stock["사과"] += 1`, r`print(stock)`], out: "{'사과': 4, '배': 2}", why: '추가 후 값을 수정해요.' },
      { t: 'bug', code: r`d = {"a": 1}
print(d["b"])`, line: 2, fix: r`print(d.get("b", 0))`, out: '0', why: '없는 키는 KeyError. get 에 기본값을 주면 안전해요.' },
      { t: 'bug', code: r`d = {"a": 1, "b": 2}
print(d[0])`, line: 2, fix: r`print(d["a"])`, out: '1', why: '딕셔너리는 번호가 아니라 키로 접근해요.' },
    ],
    tasks: [
      { q: '딕셔너리 <code>prices</code>에서 <b>배의 가격</b>을 출력하세요.', starter: 'prices = {"사과": 1200, "배": 3000, "귤": 500}\n', tests: [{ out: '3000' }], sol: r`prices = {"사과": 1200, "배": 3000, "귤": 500}
print(prices["배"])`, hints: ['키로 값을 꺼내요.', '키 "배"는 따옴표로 감싸요.', '<code>print(prices["배"])</code>'] },
      { q: '<code>prices</code>에 <b>포도: 7000</b>을 추가하고, <b>귤의 가격을 600으로 수정</b>한 뒤 딕셔너리를 출력하세요.', starter: 'prices = {"사과": 1200, "배": 3000, "귤": 500}\n', tests: [{ out: "{'사과': 1200, '배': 3000, '귤': 600, '포도': 7000}" }], sol: r`prices = {"사과": 1200, "배": 3000, "귤": 500}
prices["포도"] = 7000
prices["귤"] = 600
print(prices)`, hints: ['없는 키에 값을 넣으면 추가돼요.', '있는 키에 값을 넣으면 수정돼요.', '마지막에 print(prices).'] },
      { q: '과일 이름을 입력받아 <code>stock</code>에 있으면 <code>○개</code>, 없으면 <code>없음</code>을 출력하세요. (get 또는 in 사용)', starter: 'stock = {"사과": 3, "배": 0, "귤": 12}\n', tests: [{ in: ['사과'], out: '3개' }, { in: ['귤'], out: '12개' }, { in: ['포도'], out: '없음' }, { in: ['배'], out: '0개', hidden: true }], sol: r`stock = {"사과": 3, "배": 0, "귤": 12}
name = input()
if name in stock:
    print(f"{stock[name]}개")
else:
    print("없음")`, hints: ['키가 있는지 in 으로 먼저 확인해요.', '있으면 stock[name] 을 f-string 으로 출력.', '없으면 "없음".'] },
    ],
    boss: { q: '연락처 사전 <code>phone</code>이 있어요. 이름을 입력받아 <b>전화번호</b>를 출력하세요. 등록된 이름이 아니면 <code>등록되지 않음</code>을 출력하세요.', starter: 'phone = {"민수": "010-1111-2222", "지영": "010-3333-4444"}\n', tests: [{ in: ['민수'], out: '010-1111-2222' }, { in: ['지영'], out: '010-3333-4444', hidden: true }, { in: ['철수'], out: '등록되지 않음' }], sol: r`phone = {"민수": "010-1111-2222", "지영": "010-3333-4444"}
name = input()
print(phone.get(name, "등록되지 않음"))`, hints: ['get 의 두 번째 인자는 키가 없을 때의 값이에요.', '또는 if name in phone: 으로 나눠도 돼요.', '<code>phone.get(name, "등록되지 않음")</code>'] },
    sum: ['<code>{키: 값}</code> · <code>d[키]</code> 읽기 · 없으면 KeyError', '<code>d[키] = 값</code> 추가/수정 · <code>del d[키]</code> · <code>d.pop(키)</code>', '<code>키 in d</code> 키 검사 · <code>d.get(키, 기본값)</code> 안전한 읽기', '<code>len(d)</code> 항목 수', '번호가 아니라 키로 접근한다'],
  },
  {
    id: 33, emoji: '🔁', title: '딕셔너리 순회와 활용', goal: 'keys·values·items로 순회하고, 개수 세기(빈도수) 패턴을 익혀요',
    tips: '<b>빈도수 세기</b>는 딕셔너리의 대표 활용이에요: <code>count[x] = count.get(x, 0) + 1</code>. 이 한 줄을 꼭 기억하세요!',
    learn: [
      { h: 'keys · values · items', b: '<ul><li><code>d.keys()</code> 키들 · <code>d.values()</code> 값들 · <code>d.items()</code> (키, 값) 쌍들</li><li>그냥 <code>for k in d</code>도 키를 순회해요</li></ul>', code: r`d = {"사과": 3, "배": 5}
for k in d:
    print(k)
for v in d.values():
    print(v)
for k, v in d.items():
    print(k, v)` },
      { h: '집계에 활용', b: '<p><code>sum(d.values())</code>는 값의 합, <code>max(d, key=d.get)</code>은 <b>값이 가장 큰 키</b>를 찾아요.</p>', code: r`score = {"민수": 80, "지영": 95, "철수": 70}
print(sum(score.values()))
print(max(score.values()))
print(max(score, key=score.get))` },
      { h: '빈도수 세기 패턴', b: '<p>값을 하나씩 보며 “지금까지 센 횟수 + 1”로 갱신해요. 처음 보는 키는 <code>get(x, 0)</code>이 0을 주니까 문제없어요.</p>', code: r`s = "banana"
count = {}
for ch in s:
    count[ch] = count.get(ch, 0) + 1
print(count)` },
      { h: '정렬해서 보기', b: '<p>딕셔너리는 <b>넣은 순서</b>대로 보관돼요. 키 순으로 보려면 <code>sorted(d)</code>를 써요.</p>', code: r`count = {"b": 1, "a": 3, "c": 2}
for k in sorted(count):
    print(k, count[k])` },
    ],
    check: [
      { q: '딕셔너리의 (키, 값) 쌍을 순회하는 방법은?', opts: ['for k, v in d.items():', 'for k, v in d:', 'for k, v in d.keys():', 'for v in d.items:'], ans: 0, why: 'items() 가 쌍을 줘요.' },
      { q: '빈도수를 세는 핵심 한 줄은?', opts: ['count[x] = count.get(x, 0) + 1', 'count = count + 1', 'count[x] += 1 (항상 안전)', 'count.append(x)'], ans: 0, why: '처음 보는 키에도 안전해요.' },
      { q: '<code>max(d, key=d.get)</code>은 무엇을 돌려줄까요?', opts: ['값이 가장 큰 항목의 키', '가장 큰 값', '가장 큰 키', '항목 수'], ans: 0, why: '값을 기준으로 비교해 그 키를 알려 줘요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`d = {"a": 1, "b": 2}
for k in d:
    print(k)`, ans: 'a\nb', wrong: ['1\n2', 'a 1\nb 2', "('a', 1)\n('b', 2)"], why: '그냥 순회하면 키.' },
      { t: 'predict', code: r`d = {"a": 1, "b": 2}
for k, v in d.items():
    print(k, v)`, ans: 'a 1\nb 2', wrong: ['a\nb', '1 a\n2 b', 'a b'], why: '키와 값을 함께.' },
      { t: 'predict', code: r`d = {"a": 1, "b": 2, "c": 3}
print(sum(d.values()))`, ans: '6', wrong: ['abc', '3', '1'], why: '값들의 합.' },
      { t: 'predict', code: r`score = {"민수": 80, "지영": 95}
print(max(score, key=score.get))`, ans: '지영', wrong: ['95', '민수', '80'], why: '가장 높은 점수의 키.' },
      { t: 'predict', code: r`count = {}
for ch in "aab":
    count[ch] = count.get(ch, 0) + 1
print(count)`, ans: "{'a': 2, 'b': 1}", wrong: ["{'a': 1, 'b': 1}", "{'a': 2}", "{'b': 1, 'a': 2}"], why: '글자별 개수. 처음 나온 순서대로 보관돼요.' },
      { t: 'predict', code: r`d = {"b": 1, "a": 3}
for k in sorted(d):
    print(k, d[k])`, ans: 'a 3\nb 1', wrong: ['b 1\na 3', 'a b', '3 a\n1 b'], why: '키를 정렬해 순회.' },
      { t: 'predict', code: r`d = {"a": 1, "b": 2}
print(list(d.keys()), list(d.values()))`, ans: "['a', 'b'] [1, 2]", wrong: ["[1, 2] ['a', 'b']", "[('a', 1), ('b', 2)]", "('a', 'b') (1, 2)"], why: 'keys 와 values.' },
      { t: 'blank', code: r`d = {"a": 1, "b": 2}
for k, v in d.___():
    print(k, v)`, ans: ['items'], extra: ['keys', 'values', 'list'], out: 'a 1\nb 2', why: '쌍을 얻으려면 items.' },
      { t: 'blank', code: r`count = {}
for ch in "abca":
    count[ch] = count.___(ch, 0) + 1
print(count["a"])`, ans: ['get'], extra: ['add', 'put', 'find'], out: '2', why: '없으면 0 으로 시작.' },
      { t: 'parsons', lines: [r`count = {}`, r`for w in ["a", "b", "a"]:`, r`    count[w] = count.get(w, 0) + 1`, r`print(count)`], out: "{'a': 2, 'b': 1}", why: '빈 사전 → 반복하며 세기 → 출력.' },
      { t: 'bug', code: r`count = {}
for ch in "aab":
    count[ch] += 1
print(count)`, line: 3, fix: r`    count[ch] = count.get(ch, 0) + 1`, out: "{'a': 2, 'b': 1}", why: '처음 보는 키는 아직 없어서 KeyError. get(키, 0) 으로 시작해야 해요.' },
    ],
    tasks: [
      { q: '문자열을 입력받아 <b>글자별 개수</b>를 <code>글자: 개수</code> 형태로 처음 나온 순서대로 한 줄씩 출력하세요. (딕셔너리 사용)', starter: '', tests: [{ in: ['banana'], out: 'b: 1\na: 3\nn: 2' }, { in: ['aab'], out: 'a: 2\nb: 1', hidden: true }, { in: ['x'], out: 'x: 1' }], need: [r`\{\}|dict\(`], needMsg: '딕셔너리를 사용해 주세요.', sol: r`s = input()
count = {}
for ch in s:
    count[ch] = count.get(ch, 0) + 1
for k, v in count.items():
    print(f"{k}: {v}")`, hints: ['빈 딕셔너리 count = {} 로 시작해요.', 'count[ch] = count.get(ch, 0) + 1', 'items() 로 순회하며 출력.'] },
      { q: '딕셔너리 <code>sales</code>의 <b>값의 합계</b>와 <b>가장 많이 팔린 상품 이름</b>을 각각 한 줄씩 출력하세요.', starter: 'sales = {"사과": 30, "배": 55, "귤": 40}\n', tests: [{ out: '125\n배' }], sol: r`sales = {"사과": 30, "배": 55, "귤": 40}
print(sum(sales.values()))
print(max(sales, key=sales.get))`, hints: ['합계는 sum(sales.values()).', '최댓값의 키는 max(sales, key=sales.get).', '두 줄을 출력해요.'] },
      { q: '문자열 리스트 <code>words</code>가 주어져 있어요. 단어별 등장 횟수를 세어 <b>키 순으로 정렬해</b> <code>단어: 횟수</code>로 한 줄씩 출력하세요.', starter: 'words = ["pear", "apple", "pear", "fig", "apple", "pear"]\n', tests: [{ out: 'apple: 2\nfig: 1\npear: 3' }], sol: r`words = ["pear", "apple", "pear", "fig", "apple", "pear"]
count = {}
for w in words:
    count[w] = count.get(w, 0) + 1
for w in sorted(count):
    print(f"{w}: {count[w]}")`, hints: ['빈도수 세기 패턴을 써요.', '정렬된 키로 순회: for w in sorted(count):', '<code>print(f"{w}: {count[w]}")</code>'] },
    ],
    boss: { q: '문장을 입력받아 <b>단어별 등장 횟수</b>를 세고, 단어를 <b>알파벳 순</b>으로 <code>단어: 횟수</code>로 한 줄씩 출력하세요. (모두 소문자, 공백으로 구분)', starter: '', tests: [{ in: ['the cat and the hat'], out: 'and: 1\ncat: 1\nhat: 1\nthe: 2' }, { in: ['a a a'], out: 'a: 3', hidden: true }, { in: ['to be or not to be'], out: 'be: 2\nnot: 1\nor: 1\nto: 2' }], sol: r`words = input().split()
count = {}
for w in words:
    count[w] = count.get(w, 0) + 1
for w in sorted(count):
    print(f"{w}: {count[w]}")`, hints: ['split() 으로 단어를 나눠요.', '빈도수 세기 패턴.', 'sorted(count) 로 키를 정렬해 출력.'] },
    sum: ['<code>d.keys()</code> <code>d.values()</code> <code>d.items()</code> · <code>for k in d</code> 은 키', '<code>sum(d.values())</code> · <code>max(d, key=d.get)</code>', '빈도수: <code>count[x] = count.get(x, 0) + 1</code>', '<code>sorted(d)</code> 키를 정렬해 순회', '딕셔너리는 넣은 순서를 기억한다'],
  },
  {
    id: 34, emoji: '🔵', title: '집합 (set)', goal: '중복을 없애고 합집합·교집합·차집합을 계산해요',
    tips: '집합은 <b>순서가 없고 중복이 없는</b> 묶음이에요. 순서가 없으니 번호로 접근할 수 없고, 출력 순서를 믿으면 안 돼요 — 보고 싶으면 <code>sorted()</code>를 쓰세요!',
    learn: [
      { h: '집합 만들기와 중복 제거', b: '<p><code>{1, 2, 3}</code>처럼 중괄호에 값만 나열하거나 <code>set(리스트)</code>로 만들어요. <b>중복은 자동으로 사라져요</b>. 빈 집합은 <code>{}</code>가 아니라 <code>set()</code>이에요(<code>{}</code>는 빈 딕셔너리).</p>', code: r`nums = [1, 2, 2, 3, 3, 3]
s = set(nums)
print(len(s))
print(sorted(s))
print(type({}), type(set()))` },
      { h: '추가·삭제·포함', b: '<ul><li><code>s.add(x)</code> 추가 · <code>s.remove(x)</code> 삭제(없으면 오류) · <code>s.discard(x)</code> 삭제(없어도 OK)</li><li><code>x in s</code> 는 리스트보다 훨씬 빨라요</li></ul>', code: r`s = {1, 2}
s.add(3)
s.add(2)
print(sorted(s))
s.discard(10)
s.remove(1)
print(sorted(s), 2 in s)` },
      { h: '집합 연산', b: '<table><tr><th>연산</th><th>기호</th><th>뜻</th></tr><tr><td>합집합</td><td><code>a | b</code></td><td>둘 중 하나라도</td></tr><tr><td>교집합</td><td><code>a &amp; b</code></td><td>둘 다에 있는</td></tr><tr><td>차집합</td><td><code>a - b</code></td><td>a에만 있는</td></tr><tr><td>대칭차</td><td><code>a ^ b</code></td><td>한쪽에만 있는</td></tr></table>', code: r`a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a | b))
print(sorted(a & b))
print(sorted(a - b))
print(sorted(a ^ b))` },
      { h: '리스트 중복 제거 + 순서 지키기', b: '<p><code>set()</code>은 순서를 잃어요. 순서를 지키며 중복을 제거하려면 “본 것” 집합을 따로 두고 처음 보는 값만 새 리스트에 담아요.</p>', code: r`a = [3, 1, 3, 2, 1]
seen = set()
result = []
for x in a:
    if x not in seen:
        seen.add(x)
        result.append(x)
print(result)` },
    ],
    check: [
      { q: '집합의 특징으로 맞는 것은?', opts: ['중복이 없고 순서가 없다', '번호로 접근할 수 있다', '원소를 바꿀 수 없다', '문자열만 담을 수 있다'], ans: 0, why: '집합은 순서 없는 중복 없는 모음.' },
      { q: '빈 집합을 만드는 올바른 방법은?', opts: ['set()', '{}', '[]', '()'], ans: 0, why: '{} 는 빈 딕셔너리예요.' },
      { q: '<code>{1, 2, 3} & {2, 3, 4}</code>는?', opts: ['{2, 3}', '{1, 2, 3, 4}', '{1}', '{4}'], ans: 0, why: '교집합.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print(len(set([1, 2, 2, 3, 3, 3])))`, ans: '3', wrong: ['6', '2', '1'], why: '중복을 없애면 1, 2, 3.' },
      { t: 'predict', code: r`print(sorted(set([3, 1, 3, 2])))`, ans: '[1, 2, 3]', wrong: ['[3, 1, 3, 2]', '[3, 1, 2]', '{1, 2, 3}'], why: '중복 제거 후 정렬 → 리스트.' },
      { t: 'predict', code: r`s = {1, 2}
s.add(2)
s.add(3)
print(len(s))`, ans: '3', wrong: ['4', '2', '1'], why: '2는 이미 있어서 늘지 않아요.' },
      { t: 'predict', code: r`a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a & b))`, ans: '[3, 4]', wrong: ['[1, 2, 3, 4, 5]', '[1, 2]', '[5]'], why: '교집합.' },
      { t: 'predict', code: r`a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a | b))`, ans: '[1, 2, 3, 4, 5]', wrong: ['[3, 4]', '[1, 2, 5]', '[1, 2, 3, 3, 4, 4, 5]'], why: '합집합.' },
      { t: 'predict', code: r`a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a - b), sorted(b - a))`, ans: '[1, 2] [5]', wrong: ['[5] [1, 2]', '[1, 2, 5] []', '[3, 4] [3, 4]'], why: '차집합은 방향이 있어요.' },
      { t: 'predict', code: r`a = [3, 1, 3, 2, 1]
seen = set()
result = []
for x in a:
    if x not in seen:
        seen.add(x)
        result.append(x)
print(result)`, ans: '[3, 1, 2]', wrong: ['[1, 2, 3]', '[3, 1, 3, 2, 1]', '[1, 2]'], why: '처음 나온 순서를 지키며 중복을 제거해요.' },
      { t: 'blank', code: r`nums = [5, 5, 7, 7, 7]
print(len(___(nums)))`, ans: ['set'], extra: ['list', 'dict', 'sorted'], out: '2', why: '중복 제거는 set.' },
      { t: 'blank', code: r`a = {1, 2}
b = {2, 3}
print(sorted(a ___ b))`, ans: ['|'], extra: ['&', '-', '+'], out: '[1, 2, 3]', why: '합집합은 |.' },
      { t: 'parsons', lines: [r`a = {1, 2, 3}`, r`b = {2, 3, 4}`, r`common = a & b`, r`print(sorted(common))`], out: '[2, 3]', why: '두 집합을 만들고 교집합을 구해 정렬해 출력.' },
      { t: 'bug', code: r`s = {}
s.add(1)
print(s)`, line: 1, fix: r`s = set()`, out: '{1}', why: '{} 는 빈 딕셔너리라서 add 가 없어요. 빈 집합은 set().' },
    ],
    tasks: [
      { q: '공백으로 구분된 정수 한 줄을 입력받아 <b>서로 다른 수의 개수</b>를 출력하세요.', starter: '', tests: [{ in: ['1 2 2 3 3 3'], out: '3' }, { in: ['5 5 5'], out: '1', hidden: true }, { in: ['1 2 3 4'], out: '4' }], need: [r`\bset\b`], needMsg: 'set 을 사용해 주세요.', sol: r`nums = input().split()
print(len(set(nums)))`, hints: ['중복을 없애려면 set.', 'len(set(...)).', '숫자 변환 없이도 같은 문자열끼리 비교돼요.'] },
      { q: '두 줄에 각각 공백으로 구분된 정수 목록이 주어져요. <b>두 줄에 모두 있는 수</b>를 오름차순 리스트로 출력하세요. (없으면 <code>[]</code>)', starter: '', tests: [{ in: ['1 2 3 4', '3 4 5'], out: '[3, 4]' }, { in: ['1 2', '3 4'], out: '[]', hidden: true }, { in: ['5 1 9', '9 5 7'], out: '[5, 9]' }], sol: r`a = set(int(x) for x in input().split())
b = set(int(x) for x in input().split())
print(sorted(a & b))`, hints: ['각 줄을 정수 집합으로 만들어요.', '교집합은 &.', '결과를 sorted() 로 정렬해 출력.'] },
      { q: '리스트 <code>a</code>에서 <b>중복을 제거하되 처음 나온 순서를 유지</b>한 리스트를 출력하세요.', starter: 'a = [4, 2, 4, 1, 2, 3]\n', tests: [{ out: '[4, 2, 1, 3]' }], sol: r`a = [4, 2, 4, 1, 2, 3]
seen = set()
result = []
for x in a:
    if x not in seen:
        seen.add(x)
        result.append(x)
print(result)`, hints: ['이미 본 값을 집합에 보관해요.', '처음 보는 값만 결과에 append.', 'x not in seen 으로 검사.'] },
    ],
    boss: { q: '두 사람의 취미가 한 줄씩 공백으로 구분되어 입력돼요. 아래 세 줄을 <b>알파벳 순 리스트</b>로 출력하세요.<br>① 공통 취미 ② 첫째 사람만의 취미 ③ 둘째 사람만의 취미<br>예: <code>game music book</code> / <code>music sport</code> → <code>[\'music\']</code> / <code>[\'book\', \'game\']</code> / <code>[\'sport\']</code>', starter: '', tests: [{ in: ['game music book', 'music sport'], out: "['music']\n['book', 'game']\n['sport']" }, { in: ['a b', 'c d'], out: "[]\n['a', 'b']\n['c', 'd']", hidden: true }, { in: ['x y', 'y x'], out: "['x', 'y']\n[]\n[]" }], sol: r`a = set(input().split())
b = set(input().split())
print(sorted(a & b))
print(sorted(a - b))
print(sorted(b - a))`, hints: ['각 줄을 split() 한 뒤 set 으로 만들어요.', '공통은 a & b, 나만의 것은 a - b 와 b - a.', '각각 sorted() 로 정렬해 출력해요.'] },
    sum: ['<code>{1, 2}</code> · 빈 집합은 <code>set()</code> · 중복 제거 <code>set(리스트)</code>', '<code>add</code> <code>remove</code> <code>discard</code> · <code>x in s</code>', '<code>a | b</code> 합 · <code>a &amp; b</code> 교 · <code>a - b</code> 차 · <code>a ^ b</code> 대칭차', '순서 없음 → 출력은 <code>sorted(s)</code> 로 확인', '순서를 지키며 중복 제거: seen 집합 + 새 리스트'],
  },
  {
    id: 35, emoji: '🧩', title: '자료구조 고르기와 중첩', goal: '상황에 맞는 자료구조를 고르고, 리스트·딕셔너리를 겹쳐서 쓰는 방법을 익혀요',
    tips: '“무엇을 기준으로 찾나?”가 선택 기준이에요. <b>순서·번호</b>면 리스트, <b>이름표</b>면 딕셔너리, <b>중복 없음/포함 검사</b>면 집합, <b>바꾸면 안 되는 묶음</b>이면 튜플!',
    learn: [
      { h: '무엇을 고를까?', b: '<table><tr><th>구조</th><th>언제</th></tr><tr><td>리스트 <code>[ ]</code></td><td>순서가 있는 여러 값, 바꾸고 추가</td></tr><tr><td>튜플 <code>( )</code></td><td>바꾸면 안 되는 고정 묶음 (좌표, 날짜)</td></tr><tr><td>딕셔너리 <code>{ : }</code></td><td>이름표(키)로 값 찾기</td></tr><tr><td>집합 <code>{ }</code></td><td>중복 제거, 포함 검사, 집합 연산</td></tr></table>', code: r`student = {"name": "민수", "age": 20}
scores = [80, 95, 70]
point = (3, 4)
tags = {"python", "code"}
print(student["name"], scores[0], point[1], "code" in tags)` },
      { h: '딕셔너리 리스트: 표 데이터', b: '<p>학생 여러 명처럼 <b>같은 모양의 데이터가 여러 개</b>이면 “딕셔너리의 리스트”가 좋아요. 한 행이 한 딕셔너리예요.</p>', code: r`students = [
    {"name": "민수", "score": 80},
    {"name": "지영", "score": 95},
]
for s in students:
    print(s["name"], s["score"])
print(students[1]["name"])` },
      { h: '리스트를 값으로 가진 딕셔너리', b: '<p>한 키에 여러 값이 필요하면 값을 리스트로 해요. 그룹으로 묶을 때 자주 써요.</p>', code: r`scores = {"민수": [80, 90], "지영": [95, 85]}
for name, lst in scores.items():
    print(name, sum(lst) / len(lst))
scores["민수"].append(100)
print(scores["민수"])` },
      { h: '그룹 묶기 패턴', b: '<p>“같은 것끼리 묶기”는 딕셔너리 + 리스트 조합이에요. 키가 처음이면 빈 리스트를 만들고 <code>append</code>해요.</p>', code: r`words = ["apple", "ant", "bee", "bat", "cat"]
groups = {}
for w in words:
    first = w[0]
    if first not in groups:
        groups[first] = []
    groups[first].append(w)
print(groups)` },
    ],
    check: [
      { q: '“이름으로 점수를 바로 찾는” 데이터에 가장 어울리는 구조는?', opts: ['딕셔너리', '리스트', '튜플', '문자열'], ans: 0, why: '이름표(키)로 값 찾기.' },
      { q: '<code>students = [{"name": "A"}, {"name": "B"}]</code>에서 두 번째 학생 이름은?', opts: ['students[1]["name"]', 'students["name"][1]', 'students[2]["name"]', 'students.name[1]'], ans: 0, why: '리스트 번호로 한 행을 고른 뒤 키로 값.' },
      { q: '그룹 묶기에서 키가 처음 나왔을 때 먼저 해야 할 일은?', opts: ['빈 리스트를 만들어 둔다', 'del 로 지운다', 'sorted 한다', 'break 한다'], ans: 0, why: '그래야 append 할 수 있어요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`students = [{"name": "민수", "score": 80}, {"name": "지영", "score": 95}]
print(students[1]["name"])`, ans: '지영', wrong: ['민수', '95', '80'], why: '1번 학생의 이름.' },
      { t: 'predict', code: r`students = [{"name": "민수", "score": 80}, {"name": "지영", "score": 95}]
total = 0
for s in students:
    total += s["score"]
print(total)`, ans: '175', wrong: ['80', '95', '2'], why: '모든 점수를 더해요.' },
      { t: 'predict', code: r`d = {"a": [1, 2], "b": [3]}
d["a"].append(9)
print(d)`, ans: "{'a': [1, 2, 9], 'b': [3]}", wrong: ["{'a': [1, 2], 'b': [3]}", "{'a': [9], 'b': [3]}", "{'a': [1, 2, 9], 'b': [3, 9]}"], why: '키 a 의 리스트에 추가.' },
      { t: 'predict', code: r`d = {"a": [1, 2], "b": [3, 4, 5]}
print(len(d["b"]), d["a"][-1])`, ans: '3 2', wrong: ['2 3', '3 1', '2 2'], why: 'b 의 길이 3, a 의 마지막 2.' },
      { t: 'predict', code: r`words = ["apple", "ant", "bee"]
groups = {}
for w in words:
    if w[0] not in groups:
        groups[w[0]] = []
    groups[w[0]].append(w)
print(groups)`, ans: "{'a': ['apple', 'ant'], 'b': ['bee']}", wrong: ["{'a': ['apple'], 'b': ['bee']}", "{'apple': 'a'}", "['apple', 'ant', 'bee']"], why: '첫 글자별로 묶여요.' },
      { t: 'predict', code: r`data = {"x": (1, 2), "y": (3, 4)}
a, b = data["y"]
print(a * b)`, ans: '12', wrong: ['7', '34', '(3, 4)'], why: '튜플을 언패킹해 곱해요.' },
      { t: 'blank', code: r`d = {"a": [1, 2]}
d["a"].___(3)
print(d["a"])`, ans: ['append'], extra: ['add', 'push', 'insert'], out: '[1, 2, 3]', why: '값이 리스트이므로 append.' },
      { t: 'blank', code: r`rows = [{"n": 1}, {"n": 2}]
print(rows[___]["n"])`, ans: ['1'], extra: ['0', '2', '"n"'], out: '2', why: '두 번째 행은 1번.' },
      { t: 'parsons', lines: [r`groups = {}`, r`for n in [1, 2, 3, 4]:`, r`    key = n % 2`, r`    if key not in groups:`, r`        groups[key] = []`, r`    groups[key].append(n)`, r`print(groups)`], out: '{1: [1, 3], 0: [2, 4]}', why: '키가 처음이면 빈 리스트를 만든 뒤 추가해요.' },
      { t: 'bug', code: r`groups = {}
for w in ["ab", "ac"]:
    groups[w[0]].append(w)
print(groups)`, line: 3, fix: r`    groups.setdefault(w[0], []).append(w)`, out: "{'a': ['ab', 'ac']}", why: '키가 아직 없으면 KeyError. 먼저 빈 리스트를 만들어 둬야 해요 (setdefault 도 한 방법).' },
    ],
    tasks: [
      { q: '학생 리스트 <code>students</code>(딕셔너리의 리스트)의 <b>평균 점수</b>를 출력하세요.', starter: 'students = [{"name": "민수", "score": 80}, {"name": "지영", "score": 95}, {"name": "철수", "score": 70}]\n', tests: [{ out: '81.66666666666667' }], sol: r`students = [{"name": "민수", "score": 80}, {"name": "지영", "score": 95}, {"name": "철수", "score": 70}]
total = 0
for s in students:
    total += s["score"]
print(total / len(students))`, hints: ['각 학생의 점수를 s["score"] 로 꺼내요.', '합계를 구한 뒤 학생 수로 나눠요.', '<code>total / len(students)</code>'] },
      { q: '<code>students</code>에서 <b>90점 이상인 학생의 이름</b>만 리스트로 모아 출력하세요.', starter: 'students = [{"name": "민수", "score": 80}, {"name": "지영", "score": 95}, {"name": "철수", "score": 70}, {"name": "하나", "score": 90}]\n', tests: [{ out: "['지영', '하나']" }], sol: r`students = [{"name": "민수", "score": 80}, {"name": "지영", "score": 95}, {"name": "철수", "score": 70}, {"name": "하나", "score": 90}]
result = []
for s in students:
    if s["score"] >= 90:
        result.append(s["name"])
print(result)`, hints: ['조건은 s["score"] >= 90.', '이름 s["name"] 을 새 리스트에 append.', '마지막에 리스트를 출력.'] },
      { q: '<code>scores</code>는 학생별 점수 목록이에요. 학생마다 <b>평균</b>을 <code>이름: 평균</code> 형태(평균은 그대로)로 한 줄씩 출력하세요.', starter: 'scores = {"민수": [80, 90], "지영": [95, 85, 90]}\n', tests: [{ out: '민수: 85.0\n지영: 90.0' }], sol: r`scores = {"민수": [80, 90], "지영": [95, 85, 90]}
for name, lst in scores.items():
    print(f"{name}: {sum(lst) / len(lst)}")`, hints: ['items() 로 이름과 점수 리스트를 함께 꺼내요.', '평균은 sum(lst) / len(lst).', 'f-string 으로 출력해요.'] },
    ],
    boss: { q: '단어 리스트 <code>words</code>를 <b>첫 글자별로 묶어서</b> 첫 글자 알파벳 순으로 <code>글자: 단어들(쉼표+공백)</code> 형태로 한 줄씩 출력하세요.<br>예: <code>a: apple, ant</code>', starter: 'words = ["apple", "bee", "ant", "bat", "cat", "apricot"]\n', tests: [{ out: 'a: apple, ant, apricot\nb: bee, bat\nc: cat' }], sol: r`words = ["apple", "bee", "ant", "bat", "cat", "apricot"]
groups = {}
for w in words:
    if w[0] not in groups:
        groups[w[0]] = []
    groups[w[0]].append(w)
for k in sorted(groups):
    print(f"{k}: {', '.join(groups[k])}")`, hints: ['첫 글자 w[0] 를 키로, 단어 리스트를 값으로 하는 딕셔너리를 만들어요.', '키가 처음이면 빈 리스트를 먼저 만들어요.', '출력은 sorted(groups) 순서로, 단어들은 ", ".join(...) 으로 이어요.'] },
    sum: ['순서·번호 → 리스트 · 이름표 → 딕셔너리 · 중복 제거/포함 → 집합 · 고정 묶음 → 튜플', '딕셔너리의 리스트: 표 데이터 <code>students[1]["name"]</code>', '값이 리스트인 딕셔너리: <code>d["a"].append(x)</code>', '그룹 묶기: 키가 없으면 빈 리스트를 만든 뒤 <code>append</code>', '중첩 구조는 바깥부터 한 겹씩 접근'],
  },
  {
    id: 36, emoji: '📊', title: '미니 프로젝트: 단어 빈도 분석기', goal: '텍스트를 정리하고 단어를 세어 가장 많이 나온 단어를 찾는 분석기를 만들어요',
    tips: '실제 데이터는 <b>지저분해요</b>: 대소문자가 섞이고 구두점이 붙어 있어요. 먼저 <b>정리(정규화)</b>하고 나서 세는 순서가 중요해요.',
    learn: [
      { h: '1단계: 텍스트 정리', b: '<p>The와 the는 같은 단어로 세고 싶고, “world!”의 느낌표는 단어가 아니에요. 소문자로 바꾸고 구두점을 <code>replace</code>로 지워요.</p>', code: r`text = "Hello, world! Hello, Python."
text = text.lower()
for p in ",.!?":
    text = text.replace(p, "")
print(text)
print(text.split())` },
      { h: '2단계: 단어 세기', b: '<p>이제 빈도수 세기 패턴으로 딕셔너리를 만들어요.</p>', code: r`words = "the cat and the hat".split()
count = {}
for w in words:
    count[w] = count.get(w, 0) + 1
print(count)` },
      { h: '3단계: 가장 많이 나온 순으로 정렬', b: '<p>(횟수, 단어) 튜플의 리스트를 만들면 <b>튜플은 앞에서부터 비교</b>하므로 정렬이 쉬워요. 횟수를 <b>음수</b>로 넣으면 큰 순서가 앞에 오고, 같은 횟수는 단어 알파벳 순이 돼요.</p>', code: r`count = {"the": 2, "cat": 1, "and": 1}
pairs = []
for w, c in count.items():
    pairs.append((-c, w))
pairs.sort()
print(pairs)
for neg, w in pairs:
    print(w, -neg)` },
      { h: '4단계: 상위 N개만 보기', b: '<p>정렬된 리스트에서 슬라이싱 <code>pairs[:3]</code>으로 상위 3개만 꺼내요. 순위는 <code>enumerate(..., 1)</code>이 편해요.</p>', code: r`pairs = [(-3, "the"), (-2, "cat"), (-1, "and"), (-1, "hat")]
for rank, (neg, w) in enumerate(pairs[:3], 1):
    print(f"{rank}. {w} ({-neg}회)")` },
    ],
    check: [
      { q: '단어를 세기 전에 먼저 해야 할 일로 알맞은 것은?', opts: ['소문자 통일과 구두점 제거', '리스트 정렬', '딕셔너리 삭제', '집합 변환'], ans: 0, why: '정리해야 같은 단어를 같게 셀 수 있어요.' },
      { q: '<code>(-c, w)</code> 튜플로 정렬하면 어떤 순서가 될까요?', opts: ['횟수가 많은 순, 같으면 단어 알파벳 순', '횟수가 적은 순', '단어 길이 순', '입력한 순'], ans: 0, why: '음수로 만들어 큰 값이 앞에 오게 했어요.' },
      { q: '상위 3개만 꺼내는 방법은?', opts: ['pairs[:3]', 'pairs[3]', 'pairs[-3]', 'pairs.pop(3)'], ans: 0, why: '앞에서 3개 슬라이싱.' },
    ],
    puzzles: [
      { t: 'predict', code: r`text = "Hi, Hi!"
text = text.lower()
for p in ",!":
    text = text.replace(p, "")
print(text)`, ans: 'hi hi', wrong: ['Hi, Hi!', 'hi, hi!', 'hihi'], why: '소문자로 바꾸고 구두점을 지워요.' },
      { t: 'predict', code: r`count = {}
for w in "a b a".split():
    count[w] = count.get(w, 0) + 1
print(count)`, ans: "{'a': 2, 'b': 1}", wrong: ["{'a': 1, 'b': 1}", "{'a': 2}", "{'b': 1, 'a': 2}"], why: '단어 빈도.' },
      { t: 'predict', code: r`pairs = [(-1, "b"), (-2, "a"), (-1, "a")]
pairs.sort()
print(pairs)`, ans: "[(-2, 'a'), (-1, 'a'), (-1, 'b')]", wrong: ["[(-1, 'a'), (-1, 'b'), (-2, 'a')]", "[(-1, 'b'), (-2, 'a'), (-1, 'a')]", "[(-2, 'a'), (-1, 'b'), (-1, 'a')]"], why: '튜플은 앞 원소부터 비교해요.' },
      { t: 'predict', code: r`pairs = [(-3, "x"), (-2, "y"), (-1, "z")]
for rank, (neg, w) in enumerate(pairs[:2], 1):
    print(rank, w, -neg)`, ans: '1 x 3\n2 y 2', wrong: ['1 x -3\n2 y -2', '0 x 3\n1 y 2', '1 x 3\n2 y 2\n3 z 1'], why: '상위 2개만, 부호를 되돌려 출력.' },
      { t: 'predict', code: r`words = "to be or not to be".split()
count = {}
for w in words:
    count[w] = count.get(w, 0) + 1
print(max(count.values()), len(count))`, ans: '2 4', wrong: ['6 4', '2 6', '4 2'], why: 'to, be 는 2번, 서로 다른 단어는 4개.' },
      { t: 'blank', code: r`text = "Hello World"
text = text.___()
print(text)`, ans: ['lower'], extra: ['upper', 'strip', 'title'], out: 'hello world', why: '소문자로 통일.' },
      { t: 'blank', code: r`pairs = []
for w, c in {"a": 2, "b": 1}.items():
    pairs.append((___c, w))
pairs.sort()
print(pairs[0][1])`, ans: ['-'], extra: ['+', '*', '#'], out: 'a', why: '횟수를 음수로 해야 큰 값이 앞에 와요.' },
      { t: 'parsons', lines: [r`count = {"b": 1, "a": 3}`, r`pairs = []`, r`for w, c in count.items():`, r`    pairs.append((-c, w))`, r`pairs.sort()`, r`print(pairs[0][1])`], out: 'a', why: '변환 → 정렬 → 1등 출력.' },
      { t: 'bug', code: r`text = "Hello, Hello"
text.lower()
print(text.split())`, line: 2, fix: r`text = text.lower()`, out: "['hello,', 'hello']", why: '메서드 결과를 변수에 저장하지 않으면 바뀌지 않아요.' },
      { t: 'bug', code: r`pairs = [("a", 2), ("b", 3)]
pairs.sort()
print(pairs[0])`, line: 2, fix: r`pairs.sort(reverse=True)`, out: "('b', 3)", why: '글자 기준으로 정렬되어 횟수가 많은 쪽이 앞에 오지 않아요. (여기서는 내림차순으로 맞춰요)' },
    ],
    tasks: [
      { q: '문장을 입력받아 <b>소문자로 바꾸고 <code>.</code> <code>,</code> <code>!</code> <code>?</code>를 모두 지운</b> 결과를 출력하세요.', starter: '', tests: [{ in: ['Hello, World!'], out: 'hello world' }, { in: ['Wait... What?'], out: 'wait what', hidden: true }, { in: ['Plain text'], out: 'plain text' }], sol: r`text = input().lower()
for p in ".,!?":
    text = text.replace(p, "")
print(text)`, hints: ['먼저 lower() 로 소문자.', '구두점 각각에 대해 replace(p, "").', 'for p in ".,!?": 로 하나씩 처리해요.'] },
      { q: '정리된 문장(소문자, 공백 구분)을 입력받아 <b>가장 많이 나온 단어</b>를 출력하세요. 횟수가 같으면 알파벳이 빠른 단어를 출력해요.', starter: '', tests: [{ in: ['the cat and the hat'], out: 'the' }, { in: ['b a b a'], out: 'a' }, { in: ['x'], out: 'x', hidden: true }, { in: ['to be or not to be'], out: 'be', hidden: true }], sol: r`count = {}
for w in input().split():
    count[w] = count.get(w, 0) + 1
pairs = []
for w, c in count.items():
    pairs.append((-c, w))
pairs.sort()
print(pairs[0][1])`, hints: ['빈도 딕셔너리를 만들어요.', '(-횟수, 단어) 튜플 리스트를 만들어 sort().', '정렬 후 첫 번째 튜플의 단어 pairs[0][1].'] },
      { q: '정리된 문장을 입력받아 <b>상위 3개 단어</b>를 <code>1. 단어 (○회)</code> 형태로 출력하세요. (횟수 많은 순, 같으면 알파벳 순. 단어가 3개 미만이면 있는 만큼만)', starter: '', tests: [{ in: ['a b a c b a'], out: '1. a (3회)\n2. b (2회)\n3. c (1회)' }, { in: ['x x'], out: '1. x (2회)', hidden: true }, { in: ['the cat and the hat'], out: '1. the (2회)\n2. and (1회)\n3. cat (1회)' }], sol: r`count = {}
for w in input().split():
    count[w] = count.get(w, 0) + 1
pairs = []
for w, c in count.items():
    pairs.append((-c, w))
pairs.sort()
for rank, (neg, w) in enumerate(pairs[:3], 1):
    print(f"{rank}. {w} ({-neg}회)")`, hints: ['정렬된 (−횟수, 단어) 리스트에서 pairs[:3].', 'enumerate(..., 1) 로 순위를 붙여요.', '횟수는 부호를 되돌려 -neg.'] },
    ],
    boss: { q: '<b>완성판 분석기</b>: 영어 문장 한 줄을 입력받아 ① 소문자로 바꾸고 <code>. , ! ?</code>를 지운 뒤 ② 단어 수를 세서 ③ <b>상위 3개 단어</b>를 <code>1. 단어 (○회)</code> 형태로 출력하세요. 마지막 줄에 전체 단어 수를 <code>전체: ○단어</code>로 출력해요.', starter: '', tests: [{ in: ['The cat, the hat! And the bat.'], out: '1. the (3회)\n2. and (1회)\n3. bat (1회)\n전체: 7단어' }, { in: ['Go go GO?'], out: '1. go (3회)\n전체: 3단어' }, { in: ['Hi.'], out: '1. hi (1회)\n전체: 1단어', hidden: true }], sol: r`text = input().lower()
for p in ".,!?":
    text = text.replace(p, "")
words = text.split()
count = {}
for w in words:
    count[w] = count.get(w, 0) + 1
pairs = []
for w, c in count.items():
    pairs.append((-c, w))
pairs.sort()
for rank, (neg, w) in enumerate(pairs[:3], 1):
    print(f"{rank}. {w} ({-neg}회)")
print(f"전체: {len(words)}단어")`, hints: ['정리 → 쪼개기 → 세기 → 정렬 → 출력 순서예요.', '전체 단어 수는 정리한 단어 리스트의 len().', '이전 단계 코드를 합치면 돼요.'] },
    sum: ['정규화: <code>lower()</code> + <code>replace(구두점, "")</code>', '빈도: <code>count[w] = count.get(w, 0) + 1</code>', '정렬 트릭: <code>(-횟수, 단어)</code> 튜플 리스트를 <code>sort()</code>', '상위 N개: <code>pairs[:N]</code> · 순위 <code>enumerate(…, 1)</code>', '데이터는 정리부터 — 순서가 결과를 좌우한다'],
  },
];
