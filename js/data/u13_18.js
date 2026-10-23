const r = String.raw;
// 긴 기대 출력을 만드는 도우미
const lines = (n, f) => Array.from({ length: n }, (_, i) => f(i + 1)).join('\n');

export const U13 = [
  {
    id: 13, emoji: '🔁', title: 'while 반복문', goal: '조건이 참인 동안 같은 코드를 반복하고, 반복을 멈추는 변화를 설계해요',
    tips: 'while 반복에는 세 가지가 필요해요: <b>시작값</b>, <b>계속할 조건</b>, 조건을 언젠가 거짓으로 만드는 <b>변화</b>. 변화를 빼먹으면 영원히 반복돼요!',
    learn: [
      { h: 'while: 조건이 참인 동안 반복', b: '<p><code>while 조건:</code> 아래 들여쓴 블록을 <b>조건이 참인 동안 계속</b> 실행해요. 블록을 다 실행하면 다시 조건을 검사하러 돌아가요.</p>', code: r`i = 1
while i <= 5:
    print(i)
    i += 1
print("끝")` },
      { h: '반복의 세 요소', b: '<ol><li><b>시작값</b>: <code>i = 3</code></li><li><b>계속할 조건</b>: <code>i &gt; 0</code></li><li><b>변화</b>: <code>i -= 1</code> (조건이 언젠가 거짓이 되도록)</li></ol>', code: r`i = 3
while i > 0:
    print(i)
    i -= 1
print("발사!")` },
      { h: '누적: 반복하며 합 구하기', b: '<p>결과를 쌓아 가는 변수(<b>누적 변수</b>)를 반복 밖에서 먼저 0으로 만들고, 반복하며 더해요.</p>', code: r`total = 0
i = 1
while i <= 10:
    total += i
    i += 1
print(total)` },
      { h: '무한 반복 조심!', b: '<p>변화가 없거나 조건이 영원히 참이면 <b>끝나지 않는 반복</b>이 돼요. (<code>i += 1</code>을 빼먹는 것이 대표적인 실수예요.) 이 앱은 6초가 지나면 자동으로 멈춰 주니 걱정 말고 실험해 보세요. 아래는 올바른 예예요.</p>', code: r`n = 1
while n < 20:
    n *= 2
print(n)` },
    ],
    check: [
      { q: 'while 반복문이 끝나려면 꼭 필요한 것은?', opts: ['조건이 언젠가 거짓이 되게 하는 변화', 'print 문', 'break 문 한 개', '반복 횟수 변수 이름은 i'], ans: 0, why: '반복 안에서 조건에 쓰이는 값이 변해야 끝나요.' },
      { q: '<code>i = 1</code>, <code>while i <= 3:</code> 안에서 <code>print(i)</code> 와 <code>i += 1</code> 을 하면 몇 줄이 출력될까요?', opts: ['3줄', '4줄', '2줄', '끝나지 않음'], ans: 0, why: 'i가 1, 2, 3일 때 각각 출력해요.' },
      { q: '누적 합을 구할 때 합계 변수는 어디서 만들어야 할까요?', opts: ['반복문 밖에서 0으로', '반복문 안에서 매번 0으로', '아무데나', '반복이 끝난 뒤에'], ans: 0, why: '반복 안에서 매번 0으로 만들면 합이 쌓이지 않아요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`i = 1
while i <= 3:
    print(i)
    i += 1`, ans: '1\n2\n3', wrong: ['1\n2\n3\n4', '0\n1\n2', '3'], why: 'i가 3까지 출력되고 4가 되면 멈춰요.' },
      { t: 'predict', code: r`i = 3
while i > 0:
    print(i)
    i -= 1
print("발사!")`, ans: '3\n2\n1\n발사!', wrong: ['3\n2\n1\n0\n발사!', '1\n2\n3\n발사!', '발사!'], why: 'i가 0이 되면 조건이 거짓이에요.' },
      { t: 'predict', code: r`total = 0
i = 1
while i <= 4:
    total += i
    i += 1
print(total)`, ans: '10', wrong: ['4', '6', '24'], why: '1+2+3+4 = 10' },
      { t: 'predict', code: r`i = 0
while i < 6:
    print(i)
    i += 2`, ans: '0\n2\n4', wrong: ['0\n2\n4\n6', '2\n4\n6', '0\n1\n2\n3\n4\n5'], why: '2씩 늘어요: 0, 2, 4 그리고 6은 조건(< 6)에 맞지 않아요.' },
      { t: 'predict', code: r`i = 10
while i < 5:
    print(i)
    i += 1
print("끝")`, ans: '끝', wrong: ['10\n끝', '(아무것도 출력 안 됨)', '5\n끝'], why: '처음부터 조건이 거짓이면 한 번도 실행되지 않아요.' },
      { t: 'predict', code: r`n = 1
while n < 20:
    n *= 2
print(n)`, ans: '32', wrong: ['16', '20', '64'], why: '1→2→4→8→16→32, 32는 20 미만이 아니라서 멈춰요.' },
      { t: 'blank', code: r`i = 1
while i ___ 3:
    print(i)
    i += 1`, ans: ['<='], extra: ['<', '>', '=='], out: '1\n2\n3', why: '3까지 포함하니 <=.' },
      { t: 'blank', code: r`i = 1
while i <= 3:
    print(i)
    i ___ 1`, ans: ['+='], extra: ['=', '-=', '*='], out: '1\n2\n3', why: '조건이 거짓이 되도록 i를 늘려야 해요.' },
      { t: 'parsons', lines: [r`i = 1`, r`while i <= 3:`, r`    print(i * 10)`, r`    i += 1`], out: '10\n20\n30', why: '시작값 → 조건 → 블록(출력, 변화) 순서.' },
      { t: 'bug', noRun: true, code: r`i = 1
while i <= 3:
    print(i)`, line: 3, fix: r`    print(i); i += 1`, out: '1\n2\n3', why: '반복 안에서 i가 변하지 않아 영원히 끝나지 않아요. i += 1 이 필요해요.' },
      { t: 'bug', code: r`i = 1
while i <= 3
    print(i)
    i += 1`, line: 2, fix: r`while i <= 3:`, out: '1\n2\n3', why: 'while 줄 끝의 콜론이 빠졌어요.' },
    ],
    tasks: [
      { q: '정수 n을 입력받아 <b>1부터 n까지</b> 한 줄에 하나씩 출력하세요.', starter: '', tests: [{ in: ['3'], out: '1\n2\n3' }, { in: ['1'], out: '1', hidden: true }, { in: ['5'], out: '1\n2\n3\n4\n5' }], need: [r`\bwhile\b`], needMsg: '이번에는 while 을 사용해 보세요.', sol: r`n = int(input())
i = 1
while i <= n:
    print(i)
    i += 1`, hints: ['i = 1 에서 시작해요.', '조건은 i <= n.', '출력한 뒤 i += 1.'] },
      { q: '정수 n을 입력받아 <b>1부터 n까지의 합</b>을 출력하세요.', starter: '', tests: [{ in: ['10'], out: '55' }, { in: ['3'], out: '6' }, { in: ['100'], out: '5050', hidden: true }], need: [r`\bwhile\b`], needMsg: 'while 을 사용해 보세요.', sol: r`n = int(input())
total = 0
i = 1
while i <= n:
    total += i
    i += 1
print(total)`, hints: ['합계 변수 total 을 반복 밖에서 0으로 만들어요.', '반복하면서 total += i.', '반복이 끝난 뒤(들여쓰기 밖) print(total).'] },
      { q: '정수 n을 입력받아 <b>n부터 1까지 거꾸로</b> 한 줄에 하나씩 출력한 뒤 마지막에 <code>발사!</code>를 출력하세요.', starter: '', tests: [{ in: ['3'], out: '3\n2\n1\n발사!' }, { in: ['1'], out: '1\n발사!', hidden: true }, { in: ['5'], out: '5\n4\n3\n2\n1\n발사!' }], sol: r`n = int(input())
while n > 0:
    print(n)
    n -= 1
print("발사!")`, hints: ['n 자체를 줄여 가도 돼요.', '조건은 n > 0, 변화는 n -= 1.', '"발사!"는 반복이 끝난 뒤 한 번만.'] },
    ],
    boss: { q: '정수 n(1~9)을 입력받아 <b>n단 구구단</b>을 while 반복으로 출력하세요. 형식은 <code>3 x 1 = 3</code> 입니다.', starter: '', tests: [{ in: ['3'], out: lines(9, (i) => `3 x ${i} = ${3 * i}`) }, { in: ['7'], out: lines(9, (i) => `7 x ${i} = ${7 * i}`) }, { in: ['2'], out: lines(9, (i) => `2 x ${i} = ${2 * i}`), hidden: true }], need: [r`\bwhile\b`], needMsg: 'while 을 사용해 주세요.', sol: r`n = int(input())
i = 1
while i <= 9:
    print(f"{n} x {i} = {n * i}")
    i += 1`, hints: ['곱하는 수 i 를 1부터 9까지 반복해요.', '출력은 f-string이 편해요.', '<code>print(f"{n} x {i} = {n * i}")</code>'] },
    sum: ['<code>while 조건:</code> — 조건이 참인 동안 블록 반복', '필요한 것: 시작값 · 계속할 조건 · 조건을 바꾸는 변화', '누적 변수는 반복 밖에서 만들고 안에서 갱신', '변화가 없으면 무한 반복', '처음부터 조건이 거짓이면 한 번도 실행되지 않는다'],
  },
  {
    id: 14, emoji: '🔂', title: 'for와 range', goal: '정해진 횟수만큼 반복하는 for 문과 range()를 익혀요',
    tips: '횟수가 정해져 있으면 <b>for</b>, 조건이 중요하면 <b>while</b>. <code>range(5)</code>는 0부터 4까지(5개)라는 점이 핵심이에요!',
    learn: [
      { h: 'for와 range(n)', b: '<p><code>for 변수 in range(n):</code> 은 <b>0부터 n-1까지 n번</b> 반복해요. 변수에는 반복마다 0, 1, 2, … 가 들어가요.</p>', code: r`for i in range(5):
    print(i)` },
      { h: 'range(시작, 끝)과 range(시작, 끝, 간격)', b: '<p><code>range(a, b)</code>는 a부터 <b>b 직전</b>까지, <code>range(a, b, step)</code>은 step 간격으로 건너뛰어요. 끝 값은 <b>포함되지 않아요</b>.</p>', code: r`for i in range(1, 6):
    print(i)
print("---")
for i in range(0, 10, 3):
    print(i)
print("---")
for i in range(5, 0, -1):
    print(i)` },
      { h: '반복 횟수만큼 같은 일 하기', b: '<p>변수 값이 필요 없으면 이름을 <code>_</code>로 써도 돼요. 합계를 구할 때도 for가 간결해요.</p>', code: r`for _ in range(3):
    print("안녕!")

total = 0
for i in range(1, 11):
    total += i
print(total)` },
      { h: '문자열도 반복할 수 있어요', b: '<p>for는 문자열의 <b>글자를 하나씩</b> 꺼내 줘요. 리스트에서도 똑같이 쓸 수 있어요(유닛 24).</p>', code: r`for ch in "파이썬":
    print(ch)` },
    ],
    check: [
      { q: '<code>range(5)</code>가 만드는 수는?', opts: ['0, 1, 2, 3, 4', '1, 2, 3, 4, 5', '0, 1, 2, 3, 4, 5', '5'], ans: 0, why: '0부터 시작해서 5개(끝 값 5는 제외).' },
      { q: '<code>range(2, 8, 2)</code>가 만드는 수는?', opts: ['2, 4, 6', '2, 4, 6, 8', '2, 3, ..., 7', '8, 6, 4, 2'], ans: 0, why: '2부터 8 직전까지 2씩 증가.' },
      { q: '<code>range(3, 0, -1)</code>이 만드는 수는?', opts: ['3, 2, 1', '3, 2, 1, 0', '0, 1, 2', '오류'], ans: 0, why: '간격이 -1 이면 거꾸로 가요. 끝 값 0은 제외.' },
    ],
    puzzles: [
      { t: 'predict', code: r`for i in range(3):
    print(i)`, ans: '0\n1\n2', wrong: ['1\n2\n3', '0\n1\n2\n3', '3'], why: 'range(3)은 0, 1, 2.' },
      { t: 'predict', code: r`for i in range(1, 4):
    print(i)`, ans: '1\n2\n3', wrong: ['1\n2\n3\n4', '0\n1\n2\n3', '4'], why: '1부터 4 직전(3)까지.' },
      { t: 'predict', code: r`for i in range(0, 10, 3):
    print(i)`, ans: '0\n3\n6\n9', wrong: ['3\n6\n9', '0\n3\n6\n9\n12', '0\n3\n6'], why: '0, 3, 6, 9 (10 직전).' },
      { t: 'predict', code: r`for i in range(3, 0, -1):
    print(i)`, ans: '3\n2\n1', wrong: ['3\n2\n1\n0', '0\n1\n2', '1\n2\n3'], why: '거꾸로 3, 2, 1.' },
      { t: 'predict', code: r`total = 0
for i in range(1, 5):
    total += i
print(total)`, ans: '10', wrong: ['15', '6', '4'], why: '1+2+3+4 = 10 (5는 제외).' },
      { t: 'predict', code: r`for ch in "abc":
    print(ch * 2)`, ans: 'aa\nbb\ncc', wrong: ['abcabc', 'a\nb\nc', 'aabbcc'], why: '글자를 하나씩 꺼내 두 번 반복해 출력해요.' },
      { t: 'predict', code: r`for i in range(2):
    print("안녕")`, ans: '안녕\n안녕', wrong: ['안녕', '안녕\n안녕\n안녕', '0\n1'], why: '2번 반복해요.' },
      { t: 'blank', code: r`for i in ___(3):
    print(i)`, ans: ['range'], extra: ['rang', 'repeat', 'list'], out: '0\n1\n2', why: '반복 횟수를 만드는 함수는 range.' },
      { t: 'blank', code: r`for i in range(1, ___):
    print(i)`, ans: ['6'], extra: ['5', '7', '0'], out: '1\n2\n3\n4\n5', why: '끝 값은 포함되지 않으니 5까지 출력하려면 6.' },
      { t: 'parsons', lines: [r`total = 0`, r`for i in range(1, 4):`, r`    total += i`, r`print(total)`], out: '6', why: '누적 변수 → for → 누적 → 출력.' },
      { t: 'bug', code: r`for i in range(1, 4)
    print(i)`, line: 1, fix: r`for i in range(1, 4):`, out: '1\n2\n3', why: 'for 줄도 콜론으로 끝나야 해요.' },
      { t: 'bug', code: r`for i in range(1, 4):
print(i)`, line: 2, fix: r`    print(i)`, out: '1\n2\n3', why: '반복할 블록은 들여써야 해요.' },
    ],
    tasks: [
      { q: '정수 n을 입력받아 <b>1부터 n까지의 합</b>을 for 문으로 구해 출력하세요.', starter: '', tests: [{ in: ['10'], out: '55' }, { in: ['1'], out: '1', hidden: true }, { in: ['100'], out: '5050' }], need: [r`\bfor\b`], needMsg: 'for 문을 사용해 주세요.', sol: r`n = int(input())
total = 0
for i in range(1, n + 1):
    total += i
print(total)`, hints: ['n까지 포함하려면 range의 끝 값은 n + 1.', 'total = 0 에서 시작해 total += i.', '<code>for i in range(1, n + 1):</code>'] },
      { q: '정수 n을 입력받아 <b>2부터 n까지의 짝수</b>를 한 줄에 하나씩 출력하세요. (range의 간격을 활용해요)', starter: '', tests: [{ in: ['10'], out: '2\n4\n6\n8\n10' }, { in: ['7'], out: '2\n4\n6' }, { in: ['2'], out: '2', hidden: true }], need: [r`range\([^)]*,[^)]*,[^)]*\)`], needMsg: 'range(시작, 끝, 간격) 형태를 써 보세요.', sol: r`n = int(input())
for i in range(2, n + 1, 2):
    print(i)`, hints: ['2부터 시작해서 2씩 늘려요.', 'range(2, n + 1, 2)', '<code>for i in range(2, n + 1, 2):</code>'] },
      { q: '문자열을 입력받아 <b>글자를 한 줄에 하나씩</b> 출력하세요.', starter: '', tests: [{ in: ['abc'], out: 'a\nb\nc' }, { in: ['파이'], out: '파\n이' }, { in: ['x'], out: 'x', hidden: true }], need: [r`\bfor\b`], needMsg: 'for 문을 사용해 주세요.', sol: r`s = input()
for ch in s:
    print(ch)`, hints: ['for 는 문자열의 글자를 하나씩 꺼내 줘요.', 'for ch in s:', 'ch 를 print 해요.'] },
    ],
    boss: { q: '정수 n을 입력받아 <b>별 삼각형</b>을 n줄 출력하세요. i번째 줄에는 별이 i개예요. (예: n=3 → <code>*</code>, <code>**</code>, <code>***</code>)', starter: '', tests: [{ in: ['3'], out: '*\n**\n***' }, { in: ['1'], out: '*', hidden: true }, { in: ['5'], out: '*\n**\n***\n****\n*****' }], need: [r`\bfor\b`], needMsg: 'for 문을 사용해 주세요.', sol: r`n = int(input())
for i in range(1, n + 1):
    print("*" * i)`, hints: ['줄 번호 i 가 1부터 n까지 변해요.', '문자열 반복 "*" * i 를 이용해요.', '<code>print("*" * i)</code>'] },
    sum: ['<code>for 변수 in range(n):</code> — 0 ~ n-1', '<code>range(a, b)</code> a ~ b-1 · <code>range(a, b, step)</code> 간격', '끝 값은 포함되지 않는다', '문자열도 <code>for ch in s:</code> 로 글자 순회', '횟수가 정해지면 for, 조건이 중요하면 while'],
  },
  {
    id: 15, emoji: '⛔', title: 'break와 continue', goal: '반복을 중간에 끝내거나 이번 차례만 건너뛰는 방법, while True 패턴을 익혀요',
    tips: '<code>while True:</code>는 “끝날 때까지 계속”이라는 뜻이에요. 반드시 <code>break</code>로 빠져나올 길을 만들어야 해요.',
    learn: [
      { h: 'break: 반복 끝내기', b: '<p><code>break</code>를 만나면 <b>그 즉시 반복문 전체를 끝내고</b> 반복문 다음 줄로 가요.</p>', code: r`for i in range(1, 10):
    if i == 4:
        break
    print(i)
print("끝")` },
      { h: 'continue: 이번 차례만 건너뛰기', b: '<p><code>continue</code>는 <b>이번 반복의 남은 부분을 건너뛰고</b> 다음 반복으로 가요.</p>', code: r`for i in range(1, 6):
    if i == 3:
        continue
    print(i)` },
      { h: 'while True와 break', b: '<p>몇 번 반복할지 모를 때 <code>while True:</code>로 시작하고, 조건이 맞으면 <code>break</code>로 나와요. 입력을 반복해서 받을 때 자주 써요.</p>', code: r`total = 0
while True:
    n = int(input())
    if n == 0:
        break
    total += n
print("합계:", total)`, stdin: ['3', '5', '2', '0'] },
      { h: '언제 무엇을 쓸까?', b: '<ul><li>더 볼 필요가 없을 때 → <code>break</code></li><li>이번 값만 건너뛰고 싶을 때 → <code>continue</code></li><li>끝나는 시점을 모를 때 → <code>while True</code> + <code>break</code></li></ul>', code: r`for i in range(1, 20):
    if i % 7 == 0 and i > 10:
        print("찾았다:", i)
        break` },
    ],
    check: [
      { q: '<code>break</code>는 무엇을 할까요?', opts: ['가장 가까운 반복문을 끝낸다', '프로그램 전체를 끝낸다', '이번 차례만 건너뛴다', '조건을 반대로 바꾼다'], ans: 0, why: 'break는 반복문을 빠져나와요.' },
      { q: '<code>continue</code>는 무엇을 할까요?', opts: ['이번 차례를 건너뛰고 다음 차례로 간다', '반복문을 끝낸다', '프로그램을 끝낸다', '값을 출력한다'], ans: 0, why: '남은 부분만 건너뛰고 반복은 계속돼요.' },
      { q: '<code>while True:</code> 반복문을 끝내는 방법은?', opts: ['break', '아무것도 안 해도 끝난다', 'continue', 'pass'], ans: 0, why: '조건이 항상 참이므로 break로 빠져나와야 해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`for i in range(1, 10):
    if i == 4:
        break
    print(i)`, ans: '1\n2\n3', wrong: ['1\n2\n3\n4', '4', '1\n2\n3\n5'], why: 'i가 4가 되면 반복을 끝내요.' },
      { t: 'predict', code: r`for i in range(1, 6):
    if i == 3:
        continue
    print(i)`, ans: '1\n2\n4\n5', wrong: ['1\n2', '1\n2\n3\n4\n5', '3'], why: '3일 때만 건너뛰어요.' },
      { t: 'predict', code: r`for i in range(5):
    if i % 2 == 1:
        continue
    print(i)`, ans: '0\n2\n4', wrong: ['1\n3', '0\n1\n2\n3\n4', '0\n2'], why: '홀수는 건너뛰어요.' },
      { t: 'predict', code: r`count = 0
while True:
    count += 1
    if count == 3:
        break
print(count)`, ans: '3', wrong: ['2', '무한 반복', '0'], why: 'count가 3이 되는 순간 반복이 끝나요.' },
      { t: 'predict', code: r`for i in range(3):
    print("A", i)
    if i == 1:
        break
    print("B", i)`, ans: 'A 0\nB 0\nA 1', wrong: ['A 0\nB 0\nA 1\nB 1', 'A 0\nA 1', 'A 0\nB 0\nA 1\nB 1\nA 2\nB 2'], why: 'i=1 에서 A를 출력한 뒤 break 로 바로 끝나요.' },
      { t: 'blank', code: r`for i in range(10):
    if i == 3:
        ___
    print(i)`, ans: ['break'], extra: ['continue', 'pass', 'stop'], out: '0\n1\n2', why: '3에서 반복을 끝내려면 break.' },
      { t: 'blank', code: r`for i in range(5):
    if i == 2:
        ___
    print(i)`, ans: ['continue'], extra: ['break', 'pass', 'skip'], out: '0\n1\n3\n4', why: '2만 건너뛰려면 continue.' },
      { t: 'parsons', lines: [r`while True:`, r`    n = int(input())`, r`    if n < 0:`, r`        break`, r`    print(n * 2)`], stdin: ['3', '5', '-1'], out: '6\n10', why: '입력 → 음수면 break → 아니면 처리 순서.' },
      { t: 'bug', code: r`for i in range(1, 6):
    if i == 3:
        break
    print(i)`, line: 3, fix: r`        continue`, out: '1\n2\n4\n5', why: '3만 건너뛰려면 break 가 아니라 continue 를 써야 해요.' },
      { t: 'bug', code: r`while True:
    n = int(input())
    if n == 0:
        stop
    print(n)`, stdin: ['5', '0'], line: 4, fix: r`        break`, out: '5', why: '반복을 끝내는 키워드는 break 예요.' },
    ],
    tasks: [
      { q: '정수를 한 줄씩 계속 입력받다가 <code>0</code>이 입력되면 멈추고, 입력된 수(0 제외)의 <b>합</b>을 출력하세요.', starter: '', tests: [{ in: ['3', '5', '2', '0'], out: '10' }, { in: ['0'], out: '0', hidden: true }, { in: ['10', '-4', '0'], out: '6' }], need: [r`\bbreak\b`], needMsg: 'break 로 반복을 끝내 보세요.', sol: r`total = 0
while True:
    n = int(input())
    if n == 0:
        break
    total += n
print(total)`, hints: ['끝나는 때를 모르니 while True 를 써요.', '0 이면 break.', '합계는 반복이 끝난 뒤 출력해요.'] },
      { q: '정수 n을 입력받아 <b>1부터 n까지 중 3의 배수를 제외하고</b> 한 줄에 하나씩 출력하세요. (continue 사용)', starter: '', tests: [{ in: ['7'], out: '1\n2\n4\n5\n7' }, { in: ['2'], out: '1\n2', hidden: true }, { in: ['10'], out: '1\n2\n4\n5\n7\n8\n10' }], need: [r`\bcontinue\b`], needMsg: 'continue 를 사용해 보세요.', sol: r`n = int(input())
for i in range(1, n + 1):
    if i % 3 == 0:
        continue
    print(i)`, hints: ['3의 배수는 i % 3 == 0.', '해당하면 continue 로 건너뛰어요.', '나머지는 print(i).'] },
      { q: '1부터 시작해 <b>처음으로 나오는, 10보다 큰 7의 배수</b>를 찾아 출력하세요. (break 사용, 입력 없음)', starter: '', tests: [{ out: '14' }], need: [r`\bbreak\b`], needMsg: 'break 를 사용해 보세요.', sol: r`for i in range(1, 100):
    if i > 10 and i % 7 == 0:
        print(i)
        break`, hints: ['조건 두 개를 and 로 묶어요.', '찾으면 출력하고 break.', '<code>if i > 10 and i % 7 == 0:</code>'] },
    ],
    boss: { q: '단어를 한 줄씩 계속 입력받다가 <code>quit</code>이 입력되면 멈추고, 입력된 단어의 <b>개수</b>(quit 제외)를 <code>○개</code> 형태로 출력하세요.', starter: '', tests: [{ in: ['apple', 'banana', 'quit'], out: '2개' }, { in: ['quit'], out: '0개', hidden: true }, { in: ['a', 'b', 'c', 'd', 'quit'], out: '4개' }], need: [r`\bbreak\b`], needMsg: 'break 로 반복을 끝내 보세요.', sol: r`count = 0
while True:
    w = input()
    if w == "quit":
        break
    count += 1
print(f"{count}개")`, hints: ['개수를 세는 변수를 0으로 시작해요.', 'quit 이면 break, 아니면 count += 1.', '<code>print(f"{count}개")</code>'] },
    sum: ['<code>break</code> 반복문을 즉시 끝냄', '<code>continue</code> 이번 차례만 건너뛰고 다음 반복으로', '<code>while True:</code> + <code>break</code> — 끝나는 시점을 모를 때', '입력 반복: 종료 신호(0, "quit")를 정해 두기', 'break 는 가장 안쪽 반복문만 끝낸다'],
  },
  {
    id: 16, emoji: '🧱', title: '중첩 반복문', goal: '반복문 안의 반복문으로 구구단, 별 모양, 좌표 같은 2차원 패턴을 만들어요',
    tips: '중첩 반복은 <b>바깥이 한 번 돌 때 안쪽이 처음부터 끝까지</b> 돌아요. 시계의 시침과 분침처럼요!',
    learn: [
      { h: '안쪽 반복이 바깥 한 번마다 다 돈다', b: '<p>for 안에 for를 쓰면 바깥이 1번 도는 동안 안쪽은 <b>전부</b> 한 바퀴 돌아요. 아래 출력을 보며 순서를 확인해 보세요.</p>', code: r`for i in range(1, 4):
    for j in range(1, 3):
        print(i, j)` },
      { h: '줄바꿈 없이 이어 출력: end=""', b: '<p>한 줄 안에서 여러 값을 이어 출력하려면 <code>print(..., end="")</code>로 줄바꿈을 막고, 줄이 끝날 때 빈 <code>print()</code>로 줄을 바꿔요. 사각형 모양에 자주 써요.</p>', code: r`for i in range(3):
    for j in range(4):
        print("*", end="")
    print()` },
      { h: '구구단 만들기', b: '<p>바깥 반복은 단(2~3단), 안쪽 반복은 곱하는 수(1~9)예요.</p>', code: r`for dan in range(2, 4):
    for n in range(1, 10):
        print(f"{dan} x {n} = {dan * n}")
    print("-----")` },
      { h: '안쪽 반복이 바깥 변수를 사용하기', b: '<p>안쪽 범위를 바깥 변수로 정하면 줄마다 길이가 달라지는 <b>삼각형</b>도 만들 수 있어요.</p>', code: r`for i in range(1, 5):
    for j in range(i):
        print("*", end="")
    print()` },
    ],
    check: [
      { q: '<code>for i in range(2):</code> 안에 <code>for j in range(3):</code>가 있으면 안쪽 블록은 총 몇 번 실행될까요?', opts: ['6번', '5번', '3번', '2번'], ans: 0, why: '2 × 3 = 6번.' },
      { q: '줄바꿈 없이 출력하려면?', opts: ['print("*", end="")', 'print("*", sep="")', 'print("*" * 0)', 'print("*") continue'], ans: 0, why: 'end 로 줄 끝 글자를 바꿔요.' },
      { q: '줄을 바꾸기 위해 쓰는 코드는?', opts: ['print()', 'print(end="")', 'continue', 'break'], ans: 0, why: '인자 없는 print() 는 줄바꿈만 출력해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`for i in range(1, 3):
    for j in range(1, 3):
        print(i, j)`, ans: '1 1\n1 2\n2 1\n2 2', wrong: ['1 1\n2 2', '1 1\n1 2\n2 2', '1 2\n2 1'], why: '바깥이 1일 때 안쪽이 1, 2, 바깥이 2일 때 다시 1, 2.' },
      { t: 'predict', code: r`for i in range(2):
    for j in range(3):
        print("*", end="")
    print()`, ans: '***\n***', wrong: ['******', '*\n*\n*', '**\n**\n**'], why: '한 줄에 별 3개씩, 2줄.' },
      { t: 'predict', code: r`for i in range(1, 4):
    for j in range(i):
        print("#", end="")
    print()`, ans: '#\n##\n###', wrong: ['###\n##\n#', '###\n###\n###', '#\n#\n#'], why: '안쪽 반복 횟수가 i 라서 줄마다 하나씩 늘어요.' },
      { t: 'predict', code: r`count = 0
for i in range(3):
    for j in range(4):
        count += 1
print(count)`, ans: '12', wrong: ['7', '3', '4'], why: '3 × 4 = 12번.' },
      { t: 'predict', code: r`for i in range(3):
    for j in range(3):
        if i == j:
            print("O", end="")
        else:
            print(".", end="")
    print()`, ans: 'O..\n.O.\n..O', wrong: ['OOO\n...\n...', '...\n...\n...', 'O..\nO..\nO..'], why: '행과 열이 같을 때만 O 예요 (대각선).' },
      { t: 'blank', code: r`for i in range(2):
    for j in range(3):
        print("*", ___="")
    print()`, ans: ['end'], extra: ['sep', 'next', 'line'], out: '***\n***', why: 'end="" 로 줄바꿈을 막아요.' },
      { t: 'blank', code: r`for i in range(1, 4):
    for j in range(___):
        print("*", end="")
    print()`, ans: ['i'], extra: ['3', 'j', '1'], out: '*\n**\n***', why: '줄 번호만큼 별을 찍어요.' },
      { t: 'parsons', lines: [r`for i in range(2):`, r`    for j in range(2):`, r`        print("X", end="")`, r`    print()`], out: 'XX\nXX', why: '안쪽 반복이 끝나면 줄바꿈 print() 가 실행돼요 (바깥 블록 안).' },
      { t: 'bug', code: r`for i in range(3):
    for j in range(3):
        print("*", end="")
        print()`, line: 4, fix: r`    print()`, out: '***\n***\n***', why: '줄바꿈 print() 는 안쪽 반복이 끝난 뒤 바깥 블록에 있어야 해요.' },
      { t: 'bug', code: r`for dan in range(2, 4):
    for n in range(1, 4):
        print(f"{dan} x {n} = {dan + n}")`, line: 3, fix: r`        print(f"{dan} x {n} = {dan * n}")`, out: '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9', why: '구구단은 곱셈이에요. + 가 아니라 * 를 써야 해요.' },
    ],
    tasks: [
      { q: '정수 n을 입력받아 <b>n × n 별 사각형</b>을 출력하세요. (예: n=3 → 별 3개짜리 줄 3개)', starter: '', tests: [{ in: ['3'], out: '***\n***\n***' }, { in: ['1'], out: '*', hidden: true }, { in: ['4'], out: '****\n****\n****\n****' }], need: [r`\bfor\b[\s\S]*\bfor\b`], needMsg: '중첩 for 문을 사용해 주세요.', sol: r`n = int(input())
for i in range(n):
    for j in range(n):
        print("*", end="")
    print()`, hints: ['바깥은 줄, 안쪽은 칸이에요.', '안쪽에서 end="" 로 이어 찍고 줄이 끝나면 print().', '두 반복 모두 range(n).'] },
      { q: '<b>2단부터 4단</b>까지 구구단을 출력하세요. 각 줄은 <code>2 x 1 = 2</code> 형식이고 단 사이에 구분선은 없어요.', starter: '', tests: [{ out: [2, 3, 4].map((d) => lines(9, (n) => `${d} x ${n} = ${d * n}`)).join('\n') }], need: [r`\bfor\b[\s\S]*\bfor\b`], needMsg: '중첩 for 문을 사용해 주세요.', sol: r`for dan in range(2, 5):
    for n in range(1, 10):
        print(f"{dan} x {n} = {dan * n}")`, hints: ['바깥은 단, 안쪽은 곱하는 수.', 'range(2, 5)는 2, 3, 4.', '<code>print(f"{dan} x {n} = {dan * n}")</code>'] },
      { q: '정수 n을 입력받아 <b>거꾸로 줄어드는 별 삼각형</b>을 출력하세요. (예: n=3 → <code>***</code>, <code>**</code>, <code>*</code>)', starter: '', tests: [{ in: ['3'], out: '***\n**\n*' }, { in: ['1'], out: '*', hidden: true }, { in: ['4'], out: '****\n***\n**\n*' }], need: [r`\bfor\b[\s\S]*\bfor\b|\*\s*\w`], needMsg: '반복문을 사용해 주세요.', sol: r`n = int(input())
for i in range(n, 0, -1):
    for j in range(i):
        print("*", end="")
    print()`, hints: ['줄 수는 n, 줄마다 별이 하나씩 줄어요.', 'range(n, 0, -1) 로 n, n-1, ..., 1.', '안쪽 반복 횟수를 i 로 해요.'] },
    ],
    boss: { q: '정수 n을 입력받아 <b>숫자 삼각형</b>을 출력하세요. i번째 줄에는 <code>1</code>부터 <code>i</code>까지 공백으로 구분해 나열해요.<br>예: n=4 → <pre style="margin:6px 0">1\n1 2\n1 2 3\n1 2 3 4</pre>', starter: '', tests: [{ in: ['4'], out: '1\n1 2\n1 2 3\n1 2 3 4' }, { in: ['1'], out: '1', hidden: true }, { in: ['3'], out: '1\n1 2\n1 2 3' }], need: [r`\bfor\b[\s\S]*\bfor\b`], needMsg: '중첩 for 문을 사용해 주세요.', sol: r`n = int(input())
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()`, hints: ['바깥은 줄 번호 i, 안쪽은 1부터 i까지의 수.', '숫자 뒤에 공백을 붙여 이어 출력해요: print(j, end=" ")', '줄 끝에 print() 로 줄바꿈. (줄 끝 공백은 괜찮아요)'] },
    sum: ['중첩 반복: 바깥 1번 ↔ 안쪽 전부 한 바퀴', '<code>print(x, end="")</code> 이어 출력, <code>print()</code> 줄바꿈', '구구단: 바깥 단, 안쪽 곱하는 수', '안쪽 range 를 바깥 변수로 정하면 삼각형', '총 실행 횟수 = 바깥 횟수 × 안쪽 횟수'],
  },
  {
    id: 17, emoji: '📈', title: '누적과 패턴', goal: '합계·개수·최댓값·곱을 구하는 대표 반복 패턴을 익혀요',
    tips: '많은 프로그램이 “변수 하나를 만들어 두고 반복하며 갱신”하는 패턴이에요. 패턴을 외우면 응용이 쉬워져요.',
    learn: [
      { h: '패턴 1: 합계', b: '<p>합계 변수를 0으로 시작해 반복하며 더해요.</p>', code: r`total = 0
for n in range(1, 6):
    total += n
print(total)` },
      { h: '패턴 2: 개수 세기', b: '<p>조건에 맞을 때마다 <code>count += 1</code> 해요.</p>', code: r`count = 0
for n in range(1, 21):
    if n % 3 == 0:
        count += 1
print(count)` },
      { h: '패턴 3: 곱 (팩토리얼)', b: '<p>곱할 때는 시작값을 <b>1</b>로 해요(0이면 계속 0). 5! = 5×4×3×2×1.</p>', code: r`result = 1
for n in range(1, 6):
    result *= n
print(result)` },
      { h: '패턴 4: 최댓값 찾기', b: '<p>지금까지 본 가장 큰 값을 변수에 두고, 더 큰 값을 만나면 바꿔요. 첫 값으로 시작하면 음수에도 안전해요.</p>', code: r`best = 3
for n in [3, 9, 2, 7]:
    if n > best:
        best = n
print(best)` },
      { h: '패턴 5: 피보나치처럼 값 갱신', b: '<p>두 변수를 번갈아 갱신하는 패턴이에요. 동시에 대입하는 <code>a, b = b, a + b</code>가 편해요.</p>', code: r`a, b = 0, 1
for _ in range(8):
    print(a, end=" ")
    a, b = b, a + b
print()` },
    ],
    check: [
      { q: '곱을 누적할 변수의 시작값으로 알맞은 것은?', opts: ['1', '0', '-1', '아무 값'], ans: 0, why: '0으로 시작하면 계속 0이에요. 곱셈의 항등원은 1.' },
      { q: '조건에 맞는 값의 개수를 셀 때 쓰는 문장은?', opts: ['count += 1', 'count = 1', 'count -= 1', 'print(count)'], ans: 0, why: '맞을 때마다 1씩 늘려요.' },
      { q: '최댓값을 찾을 때 처음에 best 에 넣는 값으로 가장 안전한 것은?', opts: ['첫 번째 값', '0', '-1', '100'], ans: 0, why: '모든 값이 음수여도 올바르게 동작해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`total = 0
for n in range(1, 6):
    total += n
print(total)`, ans: '15', wrong: ['10', '5', '120'], why: '1+2+3+4+5 = 15' },
      { t: 'predict', code: r`count = 0
for n in range(1, 11):
    if n % 2 == 0:
        count += 1
print(count)`, ans: '5', wrong: ['10', '6', '4'], why: '2, 4, 6, 8, 10 → 5개' },
      { t: 'predict', code: r`result = 1
for n in range(1, 5):
    result *= n
print(result)`, ans: '24', wrong: ['10', '120', '4'], why: '1×2×3×4 = 24' },
      { t: 'predict', code: r`best = 3
for n in [3, 9, 2, 7]:
    if n > best:
        best = n
print(best)`, ans: '9', wrong: ['3', '7', '21'], why: '가장 큰 값 9.' },
      { t: 'predict', code: r`total = 0
for n in range(1, 4):
    total += n * n
print(total)`, ans: '14', wrong: ['6', '9', '36'], why: '1 + 4 + 9 = 14' },
      { t: 'predict', code: r`a, b = 0, 1
for _ in range(5):
    a, b = b, a + b
print(a)`, ans: '5', wrong: ['3', '8', '13'], why: 'a는 0,1,1,2,3,5 로 바뀌어요.' },
      { t: 'blank', code: r`result = ___
for n in range(1, 4):
    result *= n
print(result)`, ans: ['1'], extra: ['0', '-1', 'n'], out: '6', why: '곱의 시작값은 1.' },
      { t: 'blank', code: r`count = 0
for n in range(1, 10):
    if n % 3 == 0:
        count ___ 1
print(count)`, ans: ['+='], extra: ['=', '-=', '=='], out: '3', why: '개수를 하나씩 늘려요.' },
      { t: 'parsons', lines: [r`best = 0`, r`for n in [4, 8, 1]:`, r`    if n > best:`, r`        best = n`, r`print(best)`], out: '8', why: '최댓값 패턴이에요.' },
      { t: 'bug', code: r`total = 0
for n in range(1, 4):
    total = n
print(total)`, line: 3, fix: r`    total = total + n`, out: '6', why: '누적하려면 이전 값에 더해야 해요. total = n 은 매번 덮어써요.' },
      { t: 'bug', code: r`result = 0
for n in range(1, 5):
    result *= n
print(result)`, line: 1, fix: r`result = 1`, out: '24', why: '곱을 누적할 때 시작값이 0이면 계속 0이에요. 1로 시작해야 해요.' },
    ],
    tasks: [
      { q: '정수 n을 입력받아 <b>n! (팩토리얼)</b>을 출력하세요. (n! = 1 × 2 × ... × n, 0! = 1)', starter: '', tests: [{ in: ['5'], out: '120' }, { in: ['1'], out: '1' }, { in: ['0'], out: '1', hidden: true }, { in: ['7'], out: '5040', hidden: true }], sol: r`n = int(input())
result = 1
for i in range(1, n + 1):
    result *= i
print(result)`, hints: ['곱의 시작값은 1.', '1부터 n까지 곱해요.', 'n = 0 이면 반복이 없어서 1이 그대로 출력돼요.'] },
      { q: '정수 n을 입력받아 <b>1부터 n까지 중 짝수의 개수</b>를 출력하세요.', starter: '', tests: [{ in: ['10'], out: '5' }, { in: ['7'], out: '3' }, { in: ['1'], out: '0', hidden: true }], sol: r`n = int(input())
count = 0
for i in range(1, n + 1):
    if i % 2 == 0:
        count += 1
print(count)`, hints: ['개수 변수를 0으로 시작해요.', '짝수일 때만 count += 1.', '반복이 끝난 뒤 출력해요.'] },
      { q: '먼저 정수 n을 입력받고, 이어서 <b>n개의 정수</b>를 한 줄씩 입력받아 그중 <b>최댓값</b>을 출력하세요. (모두 양수예요)', starter: '', tests: [{ in: ['3', '5', '9', '2'], out: '9' }, { in: ['1', '7'], out: '7', hidden: true }, { in: ['4', '1', '2', '3', '4'], out: '4' }], sol: r`n = int(input())
best = 0
for _ in range(n):
    x = int(input())
    if x > best:
        best = x
print(best)`, hints: ['n번 반복하며 input() 을 받아요.', '지금까지의 최댓값을 best 에 보관해요.', 'x > best 이면 best = x.'] },
    ],
    boss: { q: '정수 n을 입력받아 <b>피보나치 수열의 처음 n개</b>를 공백으로 구분해 한 줄에 출력하세요. (0, 1, 1, 2, 3, 5, …)', starter: '', tests: [{ in: ['8'], out: '0 1 1 2 3 5 8 13' }, { in: ['1'], out: '0', hidden: true }, { in: ['5'], out: '0 1 1 2 3' }, { in: ['10'], out: '0 1 1 2 3 5 8 13 21 34', hidden: true }], sol: r`n = int(input())
a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b
print()`, hints: ['처음 두 수는 0과 1이에요.', '매번 a를 출력하고 (a, b) 를 (b, a + b) 로 바꿔요.', '<code>a, b = b, a + b</code> 한 줄로 동시에 바꿀 수 있어요.'] },
    sum: ['합계: <code>total = 0</code> → <code>total += n</code>', '개수: <code>count = 0</code> → 조건이 맞으면 <code>count += 1</code>', '곱: <code>result = 1</code> → <code>result *= n</code>', '최댓값: <code>best</code> 를 갱신 (더 크면 교체)', '<code>a, b = b, a + b</code> 동시 대입'],
  },
  {
    id: 18, emoji: '🎯', title: '미니 프로젝트: 숫자 맞히기', goal: '반복·조건·카운터를 모두 써서 숫자 맞히기 게임을 단계별로 만들어요',
    tips: '게임을 한 번에 만들려 하지 말고 <b>“정답 맞히면 끝” → “힌트 주기” → “횟수 세기” → “기회 제한”</b> 순서로 기능을 하나씩 더해요.',
    learn: [
      { h: '1단계: 정답을 맞힐 때까지 반복', b: '<p>정답(여기서는 7로 고정)을 맞힐 때까지 입력을 반복해서 받아요. 끝나는 시점을 모르므로 <code>while True</code> + <code>break</code>가 어울려요.</p>', code: r`answer = 7
while True:
    guess = int(input("숫자: "))
    if guess == answer:
        print("정답!")
        break`, stdin: ['3', '9', '7'] },
      { h: '2단계: 힌트 주기', b: '<p>틀렸을 때 정답이 더 큰지 작은지 알려 주면 게임이 재미있어져요. <code>if / elif / else</code>를 이용해요.</p>', code: r`answer = 7
while True:
    guess = int(input())
    if guess == answer:
        print("정답!")
        break
    elif guess < answer:
        print("더 커요")
    else:
        print("더 작아요")`, stdin: ['3', '9', '7'] },
      { h: '3단계: 시도 횟수 세기', b: '<p>반복마다 <code>tries += 1</code> 하면 몇 번 만에 맞혔는지 알려 줄 수 있어요.</p>', code: r`answer = 7
tries = 0
while True:
    guess = int(input())
    tries += 1
    if guess == answer:
        print(f"{tries}번 만에 맞혔어요!")
        break`, stdin: ['3', '9', '7'] },
      { h: '4단계: 기회 제한', b: '<p>횟수가 정해져 있으면 <code>for</code>가 편해요. 정답을 맞히면 <code>break</code>, 반복이 끝까지 돌았는데 못 맞혔다면 실패예요. <code>found</code> 변수(깃발)로 맞혔는지 기억해요.</p>', code: r`answer = 7
found = False
for _ in range(3):
    guess = int(input())
    if guess == answer:
        found = True
        break
if found:
    print("성공!")
else:
    print("실패! 정답은", answer)`, stdin: ['1', '2', '3'] },
    ],
    check: [
      { q: '“정답을 맞힐 때까지” 반복하기에 가장 어울리는 구조는?', opts: ['while True + break', 'for + range(100)', 'if 만 사용', 'continue만 사용'], ans: 0, why: '몇 번 걸릴지 모르면 while True 로 반복하다 맞히면 break.' },
      { q: '시도 횟수를 세려면?', opts: ['반복 안에서 tries += 1', '반복 밖에서 tries = 0 을 반복', 'print(tries)', 'break'], ans: 0, why: '반복할 때마다 1씩 늘려요 (시작값은 반복 밖에서 0).' },
      { q: '“맞혔는지 아닌지” 를 반복 후에 알 수 있게 해 주는 변수를 흔히 무엇이라 부를까요?', opts: ['깃발(flag) 변수', '상수', '반복 변수', '문자열'], ans: 0, why: 'True/False 로 상태를 기억하는 변수를 깃발이라고 해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`answer = 7
guess = 9
if guess == answer:
    print("정답!")
elif guess < answer:
    print("더 커요")
else:
    print("더 작아요")`, ans: '더 작아요', wrong: ['정답!', '더 커요', '(아무것도 출력 안 됨)'], why: '9는 정답 7보다 커서 "더 작아요"가 맞아요.' },
      { t: 'predict', code: r`answer = 5
tries = 0
for guess in [1, 9, 5, 7]:
    tries += 1
    if guess == answer:
        break
print(tries)`, ans: '3', wrong: ['4', '2', '5'], why: '세 번째 시도(5)에서 맞혀 break.' },
      { t: 'predict', code: r`found = False
for n in [2, 4, 6]:
    if n == 5:
        found = True
        break
print(found)`, ans: 'False', wrong: ['True', '5', '(아무것도 출력 안 됨)'], why: '5가 없으니 found 는 그대로 False.' },
      { t: 'predict', code: r`answer = 3
for guess in [3, 1]:
    if guess == answer:
        print("정답")
        break
    print("틀림")`, ans: '정답', wrong: ['정답\n틀림', '틀림', '틀림\n정답'], why: '첫 시도에서 맞히고 break 해서 바로 끝나요.' },
      { t: 'blank', code: r`answer = 7
while True:
    guess = int(input())
    if guess == answer:
        print("정답!")
        ___`, stdin: ['3', '7'], ans: ['break'], extra: ['continue', 'pass', 'stop'], out: '정답!', why: '맞히면 반복을 끝내요.' },
      { t: 'blank', code: r`answer = 7
guess = 3
if guess ___ answer:
    print("더 커요")`, ans: ['<'], extra: ['>', '==', '!='], out: '더 커요', why: '추측이 정답보다 작으면 “더 커요”.' },
      { t: 'parsons', lines: [r`answer = 7`, r`while True:`, r`    guess = int(input())`, r`    if guess == answer:`, r`        print("정답!")`, r`        break`], stdin: ['2', '7'], out: '정답!', why: '입력을 받는 부분은 while 안에 있어야 해요.' },
      { t: 'parsons', lines: [r`found = False`, r`for _ in range(3):`, r`    g = int(input())`, r`    if g == 7:`, r`        found = True`, r`        break`, r`print(found)`], stdin: ['1', '7', '9'], out: 'True', why: '깃발 변수를 먼저 만들고, 맞히면 True 로 바꾼 뒤 break.' },
      { t: 'bug', code: r`answer = 7
while True:
    guess = int(input())
    if guess = answer:
        print("정답!")
        break`, stdin: ['7'], line: 4, fix: r`    if guess == answer:`, out: '정답!', why: '비교는 == 예요.' },
      { t: 'bug', code: r`answer = 7
tries = 0
while True:
    tries = 0
    guess = int(input())
    tries += 1
    if guess == answer:
        print(tries)
        break`, stdin: ['3', '7'], line: 4, fix: r`    pass`, out: '2', why: '반복 안에서 매번 tries 를 0으로 만들면 횟수가 쌓이지 않아요. 이 줄을 없애야 해요.' },
    ],
    tasks: [
      { q: '정답은 <code>7</code>이에요. 숫자를 계속 입력받다가 <b>맞히면 <code>정답!</code>을 출력</b>하고 끝내세요. (틀리면 아무것도 출력하지 않아요)', starter: '', tests: [{ in: ['3', '9', '7'], out: '정답!' }, { in: ['7'], out: '정답!', hidden: true }, { in: ['1', '2', '7'], out: '정답!' }], sol: r`answer = 7
while True:
    guess = int(input())
    if guess == answer:
        print("정답!")
        break`, hints: ['while True 로 입력을 반복해요.', '맞히면 print 후 break.', '틀릴 때는 아무 코드도 필요 없어요.'] },
      { q: '정답은 <code>7</code>이에요. 입력이 <b>정답보다 작으면 <code>더 커요</code></b>, 크면 <code>더 작아요</code>를 출력하고, 맞히면 <code>정답!</code>을 출력한 뒤 끝내세요.', starter: '', tests: [{ in: ['3', '9', '7'], out: '더 커요\n더 작아요\n정답!' }, { in: ['7'], out: '정답!', hidden: true }, { in: ['10', '8', '5', '7'], out: '더 작아요\n더 작아요\n더 커요\n정답!' }], sol: r`answer = 7
while True:
    guess = int(input())
    if guess == answer:
        print("정답!")
        break
    elif guess < answer:
        print("더 커요")
    else:
        print("더 작아요")`, hints: ['세 경우로 나눠요: 같음/작음/큼.', 'if / elif / else', '맞힌 경우에만 break.'] },
      { q: '정답은 <code>7</code>이에요. 맞힐 때까지 입력을 받고, 맞히면 <code>○번 만에 맞혔어요!</code>를 출력하세요. (예: 세 번째에 맞히면 <code>3번 만에 맞혔어요!</code>)', starter: '', tests: [{ in: ['3', '9', '7'], out: '3번 만에 맞혔어요!' }, { in: ['7'], out: '1번 만에 맞혔어요!' }, { in: ['1', '2', '3', '4', '7'], out: '5번 만에 맞혔어요!', hidden: true }], sol: r`answer = 7
tries = 0
while True:
    guess = int(input())
    tries += 1
    if guess == answer:
        print(f"{tries}번 만에 맞혔어요!")
        break`, hints: ['tries 를 반복 밖에서 0으로 만들어요.', '입력 한 번 받을 때마다 tries += 1.', '<code>print(f"{tries}번 만에 맞혔어요!")</code>'] },
    ],
    boss: { q: '<b>완성판!</b> 정답은 <code>7</code>이고 기회는 <b>최대 5번</b>이에요. 입력이 틀리면 힌트(<code>더 커요</code>/<code>더 작아요</code>)를 출력하고, 맞히면 <code>성공! ○번 만에 맞혔어요</code>를 출력해요. 5번 안에 못 맞히면 <code>실패! 정답은 7</code>을 출력하세요.', starter: '', tests: [{ in: ['3', '9', '7'], out: '더 커요\n더 작아요\n성공! 3번 만에 맞혔어요' }, { in: ['7'], out: '성공! 1번 만에 맞혔어요' }, { in: ['1', '2', '3', '4', '5'], out: '더 커요\n더 커요\n더 커요\n더 커요\n더 커요\n실패! 정답은 7' }, { in: ['9', '8', '6', '5', '7'], out: '더 작아요\n더 작아요\n더 커요\n더 커요\n성공! 5번 만에 맞혔어요', hidden: true }], sol: r`answer = 7
found = False
for tries in range(1, 6):
    guess = int(input())
    if guess == answer:
        print(f"성공! {tries}번 만에 맞혔어요")
        found = True
        break
    elif guess < answer:
        print("더 커요")
    else:
        print("더 작아요")
if not found:
    print("실패! 정답은 7")`, hints: ['횟수가 정해져 있으니 for tries in range(1, 6) 이 편해요.', '맞히면 성공 메시지를 출력하고 found = True, break.', '반복이 끝난 뒤 found 가 False 이면 실패 메시지.'] },
    sum: ['끝을 모르는 반복: <code>while True</code> + <code>break</code>', '힌트: <code>if / elif / else</code> 로 같음·작음·큼', '횟수: 반복 밖에서 0으로 만들고 안에서 <code>+= 1</code>', '횟수가 정해지면 <code>for</code>, 맞혔는지는 깃발(<code>found</code>)로 기억', '기능을 한 단계씩 추가하며 매번 테스트'],
  },
];
