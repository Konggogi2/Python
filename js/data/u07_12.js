const r = String.raw;

export const U07 = [
  {
    id: 7, emoji: '⚖️', title: '참과 거짓: 비교 연산', goal: '값을 비교해 True/False를 얻고, 거짓으로 취급되는 값을 이해해요',
    tips: '<code>=</code>는 “저장”, <code>==</code>는 “같은지 비교”예요. 둘을 헷갈리는 게 초보자 실수 1위예요!',
    learn: [
      { h: '참(True)과 거짓(False)', b: '<p>비교의 결과는 <b>True</b> 또는 <b>False</b> 둘 중 하나예요. 이런 값을 <b>불리언(bool)</b>이라고 해요. 대문자로 시작하는 점에 주의하세요.</p>', code: r`print(3 > 2)
print(3 < 2)
print(type(True))` },
      { h: '비교 연산자 여섯 가지', b: '<table><tr><th>기호</th><th>뜻</th></tr><tr><td><code>==</code></td><td>같다</td></tr><tr><td><code>!=</code></td><td>다르다</td></tr><tr><td><code>&gt;</code> <code>&lt;</code></td><td>크다 / 작다</td></tr><tr><td><code>&gt;=</code> <code>&lt;=</code></td><td>크거나 같다 / 작거나 같다</td></tr></table>', code: r`print(3 == 3)
print(3 != 4)
print(5 >= 5)
print(5 <= 4)` },
      { h: '문자열도 비교할 수 있어요', b: '<p>문자열도 <code>==</code>로 같은지 비교해요. <b>대소문자를 구분</b>해요. 크기 비교는 사전 순서예요.</p>', code: r`print("a" == "a")
print("a" == "A")
print("apple" < "banana")` },
      { h: '비교 결과를 변수에 저장', b: '<p>비교한 결과도 값이라서 변수에 담아 둘 수 있어요. 나중에 조건문에서 아주 유용해요.</p>', code: r`age = 17
adult = age >= 20
print(adult)
print(age == 17)` },
      { h: '거짓으로 취급되는 값 (Falsy)', b: '<p><code>bool(값)</code>은 값을 참/거짓으로 바꿔요. <b>0, 0.0, 빈 문자열 ""</b>, 빈 리스트 등은 거짓이고 나머지는 참이에요. <code>"0"</code>은 비어 있지 않은 글자라서 참이에요!</p>', code: r`print(bool(0), bool(1))
print(bool(""), bool("0"))
print(bool(-5))` },
    ],
    check: [
      { q: '두 값이 <b>같은지</b> 비교하는 연산자는?', opts: ['==', '=', '!=', '=>'], ans: 0, why: '= 는 저장, == 가 같은지 비교예요.' },
      { q: '<code>5 != 3</code>의 결과는?', opts: ['True', 'False', '2', '오류'], ans: 0, why: '5와 3은 다르니까 참이에요.' },
      { q: '<code>bool("")</code>의 결과는?', opts: ['False', 'True', '""', '오류'], ans: 0, why: '빈 문자열은 거짓으로 취급돼요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print(5 > 3)`, ans: 'True', wrong: ['False', '5', 'true'], why: '5는 3보다 커요.' },
      { t: 'predict', code: r`print(5 == 5.0)`, ans: 'True', wrong: ['False', '오류', '5.0'], why: '정수 5와 실수 5.0은 값이 같아요.' },
      { t: 'predict', code: r`print("a" == "A")`, ans: 'False', wrong: ['True', 'a', '오류'], why: '대소문자가 다르면 같지 않아요.' },
      { t: 'predict', code: r`print(10 != 10)`, ans: 'False', wrong: ['True', '0', '오류'], why: '10과 10은 같으니 "다르다"는 거짓.' },
      { t: 'predict', code: r`print("apple" < "banana")`, ans: 'True', wrong: ['False', 'apple', '오류'], why: '사전 순서로 apple이 먼저예요.' },
      { t: 'predict', code: r`x = 7
print(x >= 7)`, ans: 'True', wrong: ['False', '7', '오류'], why: '7은 7 이상이에요.' },
      { t: 'predict', code: r`print(bool(0), bool(1))`, ans: 'False True', wrong: ['True False', '0 1', 'False False'], why: '0은 거짓, 0이 아닌 수는 참.' },
      { t: 'predict', code: r`print(bool(""), bool("0"))`, ans: 'False True', wrong: ['False False', 'True True', 'True False'], why: '"0"은 글자가 있는 문자열이라 참이에요.' },
      { t: 'blank', code: r`print(3 ___ 3)`, ans: ['=='], extra: ['=', '!=', '=>'], out: 'True', why: '같은지 비교는 == 예요.' },
      { t: 'blank', code: r`x = 5
print(x ___ 5)`, ans: ['<='], extra: ['<', '>', '!='], out: 'True', why: '5 <= 5 는 참이에요 (같아도 참).' },
      { t: 'parsons', lines: [r`age = 17`, r`adult = age >= 20`, r`print(adult)`], out: 'False', why: '변수를 만들고 비교 결과를 저장한 뒤 출력해요.' },
      { t: 'bug', code: r`x = 3
print(x = 3)`, line: 2, fix: r`print(x == 3)`, out: 'True', why: '같은지 비교하려면 = 가 아니라 == 를 써야 해요.' },
    ],
    tasks: [
      { q: '정수를 입력받아 <b>10보다 큰지</b> <code>True</code>/<code>False</code>로 출력하세요.', starter: '', tests: [{ in: ['11'], out: 'True' }, { in: ['5'], out: 'False' }, { in: ['10'], out: 'False', hidden: true }], sol: r`n = int(input())
print(n > 10)`, hints: ['입력은 int()로 바꿔요.', '비교 결과를 바로 print 할 수 있어요.', '<code>print(n > 10)</code>'] },
      { q: '문자열 두 개를 한 줄씩 입력받아 <b>같은지</b> 출력하세요.', starter: '', tests: [{ in: ['cat', 'cat'], out: 'True' }, { in: ['cat', 'Cat'], out: 'False' }, { in: ['a', 'b'], out: 'False', hidden: true }], sol: r`a = input()
b = input()
print(a == b)`, hints: ['input()을 두 번 써요.', '같은지는 == 예요.', '<code>print(a == b)</code>'] },
      { q: '정수를 입력받아 <b>짝수인지</b> 출력하세요. (짝수는 2로 나눈 나머지가 0이에요)', starter: '', tests: [{ in: ['4'], out: 'True' }, { in: ['7'], out: 'False' }, { in: ['0'], out: 'True', hidden: true }], sol: r`n = int(input())
print(n % 2 == 0)`, hints: ['나머지 연산자는 % 예요.', 'n % 2 의 결과가 0 인지 비교해요.', '<code>print(n % 2 == 0)</code>'] },
    ],
    boss: { q: '점수(정수)를 입력받아 두 줄을 출력하세요.<br>첫째 줄: 합격(<b>60점 이상</b>)인지 True/False<br>둘째 줄: <b>만점(100점)</b>인지 True/False', starter: '', tests: [{ in: ['100'], out: 'True\nTrue' }, { in: ['75'], out: 'True\nFalse' }, { in: ['40'], out: 'False\nFalse', hidden: true }], sol: r`score = int(input())
print(score >= 60)
print(score == 100)`, hints: ['점수를 int()로 입력받아 변수에 저장해요.', '첫 줄은 score >= 60, 둘째 줄은 score == 100.', '두 번의 print()를 사용해요.'] },
    sum: ['<code>==</code> 같다 · <code>!=</code> 다르다 · <code>&gt; &lt; &gt;= &lt;=</code>', '결과는 <code>True</code> / <code>False</code> (bool)', '문자열 비교는 대소문자 구분, 크기는 사전 순서', '거짓 값: <code>0</code>, <code>0.0</code>, <code>""</code>, 빈 리스트 등', '<code>=</code> 저장 ≠ <code>==</code> 비교'],
  },
  {
    id: 8, emoji: '🚦', title: 'if 조건문', goal: '조건이 참일 때만 실행되는 코드를 만들고, 들여쓰기 규칙을 익혀요',
    tips: '<code>if 조건:</code> 끝의 <b>콜론(:)</b>과 아래 줄의 <b>들여쓰기(공백 4칸)</b>가 핵심이에요. 이 두 가지가 파이썬의 문법이에요!',
    learn: [
      { h: 'if: 조건이 참이면 실행', b: '<p><code>if 조건:</code> 아래에 <b>들여쓴</b> 줄들은 조건이 참일 때만 실행돼요. 거짓이면 통째로 건너뛰어요.</p>', code: r`x = 10
if x > 5:
    print("x는 5보다 커요")
print("끝")` },
      { h: '조건이 거짓이면 건너뛰기', b: '<p>같은 코드에서 값만 바꿔 볼게요. 조건이 거짓이면 들여쓴 줄은 실행되지 않고, 들여쓰지 않은 줄만 실행돼요.</p>', code: r`x = 3
if x > 5:
    print("x는 5보다 커요")
print("끝")` },
      { h: '들여쓰기 = 블록', b: '<p>들여쓴 줄들은 하나의 <b>블록</b>이에요. 같은 블록은 <b>같은 칸 수</b>로 맞춰요(공백 4칸 권장). 아래 코드에서 두 줄 모두 if가 참일 때만 실행돼요.</p>', code: r`temp = 31
if temp >= 30:
    print("덥다")
    print("물을 마시세요")
print("프로그램 끝")` },
      { h: '자주 하는 실수', b: '<p>콜론을 빼먹거나 들여쓰기를 안 하면 오류가 나요. 오류 메시지는 <code>SyntaxError</code>나 <code>IndentationError</code>예요.</p>', code: r`x = 3
if x > 1
    print("크다")`, err: true },
    ],
    check: [
      { q: '<code>if x > 3:</code> 뒤에 꼭 필요한 기호는?', opts: [': (콜론)', '; (세미콜론)', '{ }', '. (점)'], ans: 0, why: '파이썬 if 문은 콜론으로 끝나요.' },
      { q: 'if 블록에 속하는 줄은 어떻게 표시할까요?', opts: ['들여쓰기(공백 4칸)', '중괄호 { }', 'begin / end', '줄 앞에 #'], ans: 0, why: '파이썬은 들여쓰기로 블록을 구분해요.' },
      { q: '조건이 <b>거짓</b>이면 if 블록은?', opts: ['실행하지 않고 건너뛴다', '오류가 난다', '한 번 실행된다', '프로그램이 끝난다'], ans: 0, why: '거짓이면 블록을 건너뛰고 다음 줄로 가요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`x = 10
if x > 5:
    print("크다")
print("끝")`, ans: '크다\n끝', wrong: ['끝', '크다', '크다 끝'], why: '조건이 참이라 블록이 실행되고, 마지막 줄은 항상 실행돼요.' },
      { t: 'predict', code: r`x = 3
if x > 5:
    print("크다")
print("끝")`, ans: '끝', wrong: ['크다\n끝', '크다', '오류'], why: '조건이 거짓이라 "크다"는 건너뛰어요.' },
      { t: 'predict', code: r`n = 4
if n % 2 == 0:
    print("짝수")`, ans: '짝수', wrong: ['홀수', '4', '(아무것도 출력 안 됨)'], why: '4 % 2 는 0 이에요.' },
      { t: 'predict', code: r`a = 1
if a == 1:
    print("A")
if a == 2:
    print("B")
if a < 5:
    print("C")`, ans: 'A\nC', wrong: ['A', 'A\nB\nC', 'C'], why: '각 if는 따로 검사돼요. 첫째와 셋째가 참이에요.' },
      { t: 'blank', code: r`x = 8
if x ___ 5:
    print("5보다 큼")`, ans: ['>'], extra: ['<', '==', '!='], out: '5보다 큼', why: '8 > 5 가 참이에요.' },
      { t: 'blank', code: r`age = 20
if age >= 20___
    print("성인")`, ans: [':'], extra: [';', '.', ','], out: '성인', why: 'if 줄은 콜론으로 끝나야 해요.' },
      { t: 'parsons', lines: [r`age = 20`, r`if age >= 20:`, r`    print("성인")`], out: '성인', why: '변수 → if 조건 → 들여쓴 블록 순서예요.' },
      { t: 'parsons', lines: [r`score = 90`, r`if score >= 60:`, r`    print("합격")`, r`print("끝")`], out: '합격\n끝', why: '들여쓰지 않은 마지막 줄은 if 밖이라 항상 실행돼요.' },
      { t: 'bug', code: r`x = 5
if x > 3
    print("ok")`, line: 2, fix: r`if x > 3:`, out: 'ok', why: '조건 끝의 콜론(:)이 빠졌어요.' },
      { t: 'bug', code: r`x = 5
if x > 3:
print("ok")`, line: 3, fix: r`    print("ok")`, out: 'ok', why: 'if 블록 안의 줄은 들여써야 해요.' },
    ],
    tasks: [
      { q: '정수를 입력받아 <b>양수</b>이면 <code>양수입니다</code>를 출력하세요. (양수가 아니면 아무것도 출력하지 않아요)', starter: '', tests: [{ in: ['5'], out: '양수입니다' }, { in: ['-3'], out: '' }, { in: ['0'], out: '', hidden: true }], sol: r`n = int(input())
if n > 0:
    print("양수입니다")`, hints: ['양수는 0보다 큰 수예요.', 'if n > 0: 아래에 들여써서 출력해요.', '<code>if n > 0:</code> 다음 줄은 공백 4칸으로 시작해요.'] },
      { q: '온도(정수)를 입력받아 <b>30 이상</b>이면 두 줄을 출력하세요.<br><code>덥다</code><br><code>물을 마시세요</code>', starter: '', tests: [{ in: ['31'], out: '덥다\n물을 마시세요' }, { in: ['20'], out: '' }, { in: ['30'], out: '덥다\n물을 마시세요', hidden: true }], sol: r`t = int(input())
if t >= 30:
    print("덥다")
    print("물을 마시세요")`, hints: ['30 이상은 >= 30 이에요.', '두 줄 모두 if 블록 안에 들여써요.', '두 print 모두 공백 4칸으로 시작!'] },
      { q: '문자열을 입력받아 <code>yes</code>와 같으면 <code>동의했어요</code>를 출력하세요.', starter: '', tests: [{ in: ['yes'], out: '동의했어요' }, { in: ['no'], out: '' }, { in: ['Yes'], out: '', hidden: true }], sol: r`ans = input()
if ans == "yes":
    print("동의했어요")`, hints: ['문자열이 같은지는 == 로 비교해요.', '비교할 글자는 따옴표로 감싸요.', '<code>if ans == "yes":</code>'] },
    ],
    boss: { q: '나이(정수)를 입력받아 <b>19세 이상</b>이면 <code>성인입니다</code>를 출력하세요. 그리고 나이와 상관없이 <b>항상 마지막에</b> <code>프로그램 종료</code>를 출력하세요.', starter: '', tests: [{ in: ['20'], out: '성인입니다\n프로그램 종료' }, { in: ['15'], out: '프로그램 종료' }, { in: ['19'], out: '성인입니다\n프로그램 종료', hidden: true }], sol: r`age = int(input())
if age >= 19:
    print("성인입니다")
print("프로그램 종료")`, hints: ['if 문 아래 들여쓴 줄은 조건이 참일 때만 실행돼요.', '항상 출력하려면 들여쓰지 않아야 해요.', 'print("프로그램 종료")는 if 문 밖(들여쓰기 없음)에 써요.'] },
    sum: ['<code>if 조건:</code> + 들여쓴 블록 (공백 4칸)', '조건이 참일 때만 블록 실행, 거짓이면 건너뜀', '들여쓰지 않은 줄은 항상 실행', '콜론 누락 → SyntaxError, 들여쓰기 누락 → IndentationError', '조건에는 비교식(<code>x > 3</code>)을 써요'],
  },
  {
    id: 9, emoji: '🔀', title: 'else와 elif', goal: '둘 중 하나, 여러 갈래 중 하나를 선택하는 조건문을 만들어요',
    tips: 'elif는 위에서부터 차례로 검사하다가 <b>처음으로 참인 곳 하나만</b> 실행해요. 조건의 순서가 결과를 바꿀 수 있어요!',
    learn: [
      { h: 'else: 아니면 이것', b: '<p><code>if</code>의 조건이 거짓일 때 실행할 코드를 <code>else:</code> 뒤에 써요. else는 조건이 없고 콜론만 붙여요.</p>', code: r`n = 7
if n % 2 == 0:
    print("짝수")
else:
    print("홀수")` },
      { h: 'elif: 여러 갈래', b: '<p>갈래가 셋 이상이면 <code>elif 조건:</code>을 이어 써요. 위에서부터 검사하다 <b>처음 참인 블록 하나만</b> 실행하고 나머지는 건너뛰어요.</p>', code: r`score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")` },
      { h: '조건의 순서가 중요해요', b: '<p>점수 95가 아래 코드에서 어떻게 될지 생각해 보세요. 첫 조건 <code>score >= 60</code>이 이미 참이라 아래 조건은 검사하지도 않아요. 범위가 <b>좁은 조건을 위에</b> 두어야 해요.</p>', code: r`score = 95
if score >= 60:
    print("합격")
elif score >= 90:
    print("우수")` },
      { h: '문법 주의', b: '<p><code>else</code>와 <code>elif</code>는 짝이 되는 <code>if</code>와 <b>같은 들여쓰기 위치</b>에 써야 해요. else 뒤에는 조건을 쓰지 않아요.</p>', code: r`x = 5
if x > 3:
    print("크다")
else x <= 3:
    print("작다")`, err: true },
    ],
    check: [
      { q: '<code>if</code> 조건이 거짓일 때 실행되는 것은?', opts: ['else 블록', 'elif 조건이 참이면 해당 블록, 없으면 else', '아무것도', '오류'], ans: 1, why: 'if가 거짓이면 elif를 차례로 검사하고, 모두 거짓이면 else가 실행돼요.' },
      { q: '<code>if / elif / else</code> 묶음에서 실행되는 블록은 최대 몇 개일까요?', opts: ['1개', '2개', '모든 참인 블록', '항상 3개'], ans: 0, why: '처음으로 참인 블록 하나만 실행돼요.' },
      { q: '<code>else</code> 뒤에 쓰는 것은?', opts: [':', '조건식 :', '(조건)', '아무것도 안 씀'], ans: 0, why: 'else는 조건 없이 콜론만 붙여요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`n = 7
if n % 2 == 0:
    print("짝수")
else:
    print("홀수")`, ans: '홀수', wrong: ['짝수', '짝수\n홀수', '7'], why: '7은 홀수예요.' },
      { t: 'predict', code: r`score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")`, ans: 'B', wrong: ['A', 'C', 'A\nB'], why: '85는 90 미만이고 80 이상이에요.' },
      { t: 'predict', code: r`score = 95
if score >= 60:
    print("합격")
elif score >= 90:
    print("우수")`, ans: '합격', wrong: ['우수', '합격\n우수', '(아무것도 출력 안 됨)'], why: '첫 조건이 참이라 elif는 검사하지 않아요.' },
      { t: 'predict', code: r`x = 5
if x > 3:
    print("A")
if x > 4:
    print("B")
else:
    print("C")`, ans: 'A\nB', wrong: ['A', 'A\nC', 'A\nB\nC'], why: '첫 if와 두 번째 if는 별개예요. 두 번째 묶음에서 x > 4 가 참이라 B.' },
      { t: 'blank', code: r`n = 3
if n > 5:
    print("크다")
___:
    print("작거나 같다")`, ans: ['else'], extra: ['elif', 'if', 'else:'], out: '작거나 같다', why: '나머지 모든 경우는 else.' },
      { t: 'blank', code: r`x = 0
if x > 0:
    print("양수")
___ x == 0:
    print("영")
else:
    print("음수")`, ans: ['elif'], extra: ['else', 'if', 'elseif'], out: '영', why: '또 다른 조건은 elif.' },
      { t: 'parsons', lines: [r`n = 10`, r`if n > 5:`, r`    print("큼")`, r`else:`, r`    print("작음")`], out: '큼', why: 'else는 if와 같은 들여쓰기 위치에 와요.' },
      { t: 'parsons', lines: [r`s = 75`, r`if s >= 90:`, r`    print("A")`, r`elif s >= 70:`, r`    print("B")`, r`else:`, r`    print("C")`], out: 'B', why: 'if → elif → else 순서로 놓아요.' },
      { t: 'bug', code: r`x = 5
if x > 3:
    print("크다")
else x <= 3:
    print("작다")`, line: 4, fix: r`else:`, out: '크다', why: 'else 뒤에는 조건을 쓰지 않아요.' },
      { t: 'bug', code: r`x = 5
if x > 3:
    print("크다")
  else:
    print("작다")`, line: 4, fix: r`else:`, out: '크다', why: 'else는 if와 같은 위치에서 시작해야 해요(들여쓰기 어긋남).' },
    ],
    tasks: [
      { q: '정수를 입력받아 <b>짝수</b>면 <code>짝수</code>, 아니면 <code>홀수</code>를 출력하세요.', starter: '', tests: [{ in: ['4'], out: '짝수' }, { in: ['7'], out: '홀수' }, { in: ['0'], out: '짝수', hidden: true }], sol: r`n = int(input())
if n % 2 == 0:
    print("짝수")
else:
    print("홀수")`, hints: ['2로 나눈 나머지로 판단해요.', 'if n % 2 == 0: ... else: ...', '두 print 모두 들여써요.'] },
      { q: '점수를 입력받아 <b>학점</b>을 출력하세요. 90 이상 <code>A</code>, 80 이상 <code>B</code>, 70 이상 <code>C</code>, 그 외 <code>F</code>', starter: '', tests: [{ in: ['95'], out: 'A' }, { in: ['85'], out: 'B' }, { in: ['70'], out: 'C' }, { in: ['69'], out: 'F', hidden: true }, { in: ['90'], out: 'A', hidden: true }], sol: r`s = int(input())
if s >= 90:
    print("A")
elif s >= 80:
    print("B")
elif s >= 70:
    print("C")
else:
    print("F")`, hints: ['높은 점수 조건부터 위에 써요.', 'if / elif / elif / else 구조예요.', '<code>if s >= 90:</code> 로 시작해요.'] },
      { q: '신호등 색을 입력받아 출력하세요. <code>red</code> → <code>멈춰</code>, <code>yellow</code> → <code>조심</code>, <code>green</code> → <code>가</code>, 그 외 → <code>잘못된 입력</code>', starter: '', tests: [{ in: ['red'], out: '멈춰' }, { in: ['yellow'], out: '조심' }, { in: ['green'], out: '가' }, { in: ['blue'], out: '잘못된 입력', hidden: true }], sol: r`c = input()
if c == "red":
    print("멈춰")
elif c == "yellow":
    print("조심")
elif c == "green":
    print("가")
else:
    print("잘못된 입력")`, hints: ['색마다 elif 를 하나씩 써요.', '문자열 비교는 == 예요.', '모두 아닐 때는 else.'] },
    ],
    boss: { q: '기온(정수)을 입력받아 옷차림을 출력하세요.<br>28 이상 <code>반팔</code> / 20 이상 <code>얇은 긴팔</code> / 10 이상 <code>자켓</code> / 그 외 <code>패딩</code>', starter: '', tests: [{ in: ['30'], out: '반팔' }, { in: ['28'], out: '반팔', hidden: true }, { in: ['22'], out: '얇은 긴팔' }, { in: ['10'], out: '자켓' }, { in: ['9'], out: '패딩', hidden: true }, { in: ['-5'], out: '패딩' }], sol: r`t = int(input())
if t >= 28:
    print("반팔")
elif t >= 20:
    print("얇은 긴팔")
elif t >= 10:
    print("자켓")
else:
    print("패딩")`, hints: ['큰 기준부터 차례로 검사해요.', '경계값(28, 20, 10)을 꼭 확인해요: 이상은 >=.', 'if → elif → elif → else'] },
    sum: ['<code>else:</code> — 조건이 모두 거짓일 때 (조건 없음)', '<code>elif 조건:</code> — 여러 갈래, 처음 참인 블록 하나만 실행', '조건 순서가 결과를 바꾼다 (좁은 범위 먼저)', '<code>else</code>/<code>elif</code> 는 짝 <code>if</code> 와 같은 들여쓰기', '경계값(이상/초과)에 주의'],
  },
  {
    id: 10, emoji: '🧠', title: '논리 연산: and · or · not', goal: '여러 조건을 하나로 묶는 and, or, not과 범위 비교를 익혀요',
    tips: '<code>and</code>는 “모두 참”, <code>or</code>는 “하나라도 참”, <code>not</code>은 “뒤집기”예요. 괄호로 묶어 읽으면 편해요.',
    learn: [
      { h: 'and: 둘 다 참이어야 참', b: '<table><tr><th>A</th><th>B</th><th>A and B</th></tr><tr><td>True</td><td>True</td><td>True</td></tr><tr><td>True</td><td>False</td><td>False</td></tr><tr><td>False</td><td>True</td><td>False</td></tr><tr><td>False</td><td>False</td><td>False</td></tr></table>', code: r`age = 25
height = 170
print(age >= 20 and height >= 160)
print(age >= 30 and height >= 160)` },
      { h: 'or: 하나라도 참이면 참', b: '<p><code>A or B</code>는 둘 중 <b>하나라도 참</b>이면 참이에요. 둘 다 거짓일 때만 거짓이에요.</p>', code: r`day = "일"
print(day == "토" or day == "일")
print(day == "월" or day == "화")` },
      { h: 'not: 뒤집기', b: '<p><code>not</code>은 참을 거짓으로, 거짓을 참으로 바꿔요. 우선순위는 <b>not → and → or</b> 순이라서 헷갈리면 괄호를 써요.</p>', code: r`print(not True)
print(not 3 > 5)
print(True or False and False)
print((True or False) and False)` },
      { h: '범위 비교와 if에서의 활용', b: '<p>수학처럼 <code>10 <= x <= 20</code>이라고 쓰면 범위 비교가 돼요. 조건문에서 논리 연산자와 함께 쓰면 복잡한 규칙도 표현할 수 있어요.</p>', code: r`x = 15
print(10 <= x <= 20)
if x > 10 and x % 5 == 0:
    print("10보다 크고 5의 배수")` },
    ],
    check: [
      { q: '<code>True and False</code>의 결과는?', opts: ['False', 'True', 'None', '오류'], ans: 0, why: 'and는 둘 다 참일 때만 참이에요.' },
      { q: '<code>False or True</code>의 결과는?', opts: ['True', 'False', 'None', '오류'], ans: 0, why: 'or는 하나라도 참이면 참이에요.' },
      { q: '<code>not (3 > 5)</code>의 결과는?', opts: ['True', 'False', '3', '오류'], ans: 0, why: '3 > 5 는 False, not 으로 뒤집으면 True.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print(True and False)`, ans: 'False', wrong: ['True', 'None', '오류'], why: 'and는 둘 다 참이어야 참.' },
      { t: 'predict', code: r`print(False or True)`, ans: 'True', wrong: ['False', 'None', '오류'], why: 'or는 하나라도 참이면 참.' },
      { t: 'predict', code: r`print(not False)`, ans: 'True', wrong: ['False', 'None', '오류'], why: 'not 은 뒤집어요.' },
      { t: 'predict', code: r`x = 15
print(10 <= x <= 20)`, ans: 'True', wrong: ['False', '15', '오류'], why: '10 이상이고 20 이하예요.' },
      { t: 'predict', code: r`print(True or False and False)`, ans: 'True', wrong: ['False', 'None', '오류'], why: 'and가 먼저 계산돼요: False and False = False, True or False = True.' },
      { t: 'predict', code: r`print((True or False) and False)`, ans: 'False', wrong: ['True', 'None', '오류'], why: '괄호 안이 먼저: True, 그다음 True and False = False.' },
      { t: 'predict', code: r`a = 4
b = 7
print(a > 3 and b > 10)`, ans: 'False', wrong: ['True', '4', '오류'], why: 'b > 10 이 거짓이라 and 전체가 거짓.' },
      { t: 'blank', code: r`age = 25
if age >= 20 ___ age < 30:
    print("20대")`, ans: ['and'], extra: ['or', 'not', '&&'], out: '20대', why: '두 조건을 모두 만족해야 하니 and.' },
      { t: 'blank', code: r`day = "일"
if day == "토" ___ day == "일":
    print("주말")`, ans: ['or'], extra: ['and', 'not', '||'], out: '주말', why: '토요일이거나 일요일이면 주말이니 or.' },
      { t: 'parsons', lines: [r`age = 15`, r`has_ticket = True`, r`if age >= 10 and has_ticket:`, r`    print("입장 가능")`], out: '입장 가능', why: '변수를 먼저 만들고 조건문을 써요.' },
      { t: 'bug', code: r`x = 5
if x > 3 && x < 10:
    print("범위 안")`, line: 2, fix: r`if x > 3 and x < 10:`, out: '범위 안', why: '파이썬에서는 && 대신 and 를 써요.' },
    ],
    tasks: [
      { q: '나이와 키를 한 줄씩 입력받아(정수) <b>나이 10 이상 그리고 키 140 이상</b>이면 <code>탑승 가능</code>, 아니면 <code>탑승 불가</code>를 출력하세요.', starter: '', tests: [{ in: ['12', '150'], out: '탑승 가능' }, { in: ['9', '150'], out: '탑승 불가' }, { in: ['12', '130'], out: '탑승 불가', hidden: true }, { in: ['10', '140'], out: '탑승 가능', hidden: true }], sol: r`age = int(input())
height = int(input())
if age >= 10 and height >= 140:
    print("탑승 가능")
else:
    print("탑승 불가")`, hints: ['입력을 두 번 받아 int()로 바꿔요.', '두 조건 모두 참이어야 하니 and.', 'else 로 불가 처리.'] },
      { q: '연도(정수)를 입력받아 <b>윤년</b>이면 <code>윤년</code>, 아니면 <code>평년</code>을 출력하세요.<br>윤년: 4의 배수이면서 100의 배수가 아니거나, 400의 배수인 해', starter: '', tests: [{ in: ['2024'], out: '윤년' }, { in: ['1900'], out: '평년' }, { in: ['2000'], out: '윤년' }, { in: ['2023'], out: '평년', hidden: true }, { in: ['2100'], out: '평년', hidden: true }], sol: r`y = int(input())
if (y % 4 == 0 and y % 100 != 0) or y % 400 == 0:
    print("윤년")
else:
    print("평년")`, hints: ['조건은 (4의 배수 and 100의 배수 아님) or 400의 배수 예요.', '배수 확인은 y % 4 == 0 처럼 해요.', '<code>(y % 4 == 0 and y % 100 != 0) or y % 400 == 0</code>'] },
      { q: '요일 한 글자(<code>토</code>, <code>일</code>, <code>월</code> …)를 입력받아 토 또는 일이면 <code>주말</code>, 아니면 <code>평일</code>을 출력하세요.', starter: '', tests: [{ in: ['토'], out: '주말' }, { in: ['일'], out: '주말' }, { in: ['월'], out: '평일' }, { in: ['수'], out: '평일', hidden: true }], sol: r`d = input()
if d == "토" or d == "일":
    print("주말")
else:
    print("평일")`, hints: ['토요일이거나 일요일이면 주말이에요.', 'or 로 두 비교를 이어요.', 'd == "토" or d == "일"'] },
    ],
    boss: { q: '아이디와 비밀번호를 한 줄씩 입력받아, 아이디가 <code>admin</code> <b>그리고</b> 비밀번호가 <code>1234</code>이면 <code>로그인 성공</code>, 아니면 <code>로그인 실패</code>를 출력하세요.', starter: '', tests: [{ in: ['admin', '1234'], out: '로그인 성공' }, { in: ['admin', '0000'], out: '로그인 실패' }, { in: ['guest', '1234'], out: '로그인 실패', hidden: true }, { in: ['guest', '0000'], out: '로그인 실패', hidden: true }], sol: r`uid = input()
pw = input()
if uid == "admin" and pw == "1234":
    print("로그인 성공")
else:
    print("로그인 실패")`, hints: ['입력은 모두 문자열 그대로 비교해요 (int 변환 불필요).', '두 조건 모두 참이어야 해서 and.', '그렇지 않으면 else.'] },
    sum: ['<code>A and B</code> 모두 참 · <code>A or B</code> 하나라도 참 · <code>not A</code> 뒤집기', '우선순위: <code>not</code> → <code>and</code> → <code>or</code> (헷갈리면 괄호)', '<code>10 &lt;= x &lt;= 20</code> 범위 비교', '파이썬은 <code>&amp;&amp;</code>, <code>||</code> 가 아니라 <code>and</code>, <code>or</code>', '윤년: <code>(y%4==0 and y%100!=0) or y%400==0</code>'],
  },
  {
    id: 11, emoji: '🪆', title: '중첩 조건과 in 연산자', goal: 'if 안의 if, 포함 여부를 검사하는 in, 한 줄 조건식을 익혀요',
    tips: '조건이 복잡해지면 <b>중첩 if</b>보다 <b>and/elif</b>로 풀 수 있는지 먼저 생각해 보세요. 읽기 쉬운 코드가 좋은 코드예요.',
    learn: [
      { h: '중첩 if', b: '<p>if 블록 안에 또 if를 쓸 수 있어요. 바깥 조건이 참일 때만 안쪽 조건을 검사해요. 들여쓰기가 한 단계 더 깊어져요.</p>', code: r`age = 25
member = True
if age >= 20:
    if member:
        print("회원 할인 적용")
    else:
        print("정가")
else:
    print("미성년자")` },
      { h: 'in 연산자: 포함 검사', b: '<p><code>A in B</code>는 B 안에 A가 들어 있는지 검사해서 <code>True/False</code>를 돌려줘요. 문자열에서는 <b>부분 글자</b>를 찾고, 리스트(<code>[ ]</code>)에서는 <b>원소</b>를 찾아요. 반대는 <code>not in</code>이에요.</p>', code: r`print("a" in "apple")
print("pp" in "apple")
print("z" not in "apple")
print(3 in [1, 2, 3])` },
      { h: 'in으로 여러 값 한 번에 비교', b: '<p><code>x == "토" or x == "일"</code>은 <code>x in ["토", "일"]</code>처럼 줄일 수 있어요. 비교할 값이 많을수록 읽기 쉬워져요.</p>', code: r`day = "일"
if day in ["토", "일"]:
    print("주말")
else:
    print("평일")` },
      { h: '한 줄 조건식', b: '<p><code>값1 if 조건 else 값2</code> — 조건이 참이면 값1, 거짓이면 값2를 돌려줘요. 간단한 선택에 편리해요.</p>', code: r`n = 7
msg = "짝수" if n % 2 == 0 else "홀수"
print(msg)
print("합격" if 65 >= 60 else "불합격")` },
    ],
    check: [
      { q: '<code>"cat" in "concatenate"</code>의 결과는?', opts: ['True', 'False', '3', '오류'], ans: 0, why: '"concatenate" 안에 "cat"이 들어 있어요.' },
      { q: '<code>x in ["a", "b"]</code>는 무엇을 검사할까요?', opts: ['x가 리스트의 원소 중 하나인지', 'x가 리스트와 같은지', 'x의 길이', 'x를 리스트에 추가'], ans: 0, why: 'in은 포함 여부를 검사해요.' },
      { q: '<code>"A" if 3 > 5 else "B"</code>의 값은?', opts: ['B', 'A', 'True', '오류'], ans: 0, why: '3 > 5 가 거짓이라 else 쪽 값이에요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print("a" in "apple")`, ans: 'True', wrong: ['False', 'a', '오류'], why: 'apple 안에 a가 있어요.' },
      { t: 'predict', code: r`print("z" not in "apple")`, ans: 'True', wrong: ['False', 'z', '오류'], why: 'z는 apple에 없으니 not in 이 참.' },
      { t: 'predict', code: r`print(3 in [1, 2, 3])`, ans: 'True', wrong: ['False', '3', '오류'], why: '리스트에 3이 있어요.' },
      { t: 'predict', code: r`vowels = "aeiou"
print("e" in vowels, "x" in vowels)`, ans: 'True False', wrong: ['False True', 'True True', 'e x'], why: 'e는 모음이고 x는 모음이 아니에요.' },
      { t: 'predict', code: r`age = 25
member = False
if age >= 20:
    if member:
        print("할인")
    else:
        print("정가")
else:
    print("미성년자")`, ans: '정가', wrong: ['할인', '미성년자', '정가\n할인'], why: '바깥 조건은 참이지만 안쪽에서 member가 거짓이라 else.' },
      { t: 'predict', code: r`n = 4
print("짝수" if n % 2 == 0 else "홀수")`, ans: '짝수', wrong: ['홀수', 'True', '4'], why: '조건이 참이라 앞의 값이 선택돼요.' },
      { t: 'blank', code: r`c = "e"
if c ___ "aeiou":
    print("모음")`, ans: ['in'], extra: ['==', 'is', 'has'], out: '모음', why: '"aeiou" 안에 들어 있는지는 in.' },
      { t: 'blank', code: r`d = "월"
if d ___ ["토", "일"]:
    print("주말")
else:
    print("평일")`, ans: ['in'], extra: ['not in', '==', 'is'], out: '평일', why: '"월"은 ["토", "일"]에 없으니 else.' },
      { t: 'parsons', lines: [r`n = 8`, r`if n > 0:`, r`    if n % 2 == 0:`, r`        print("양의 짝수")`], out: '양의 짝수', why: '안쪽 if 는 한 단계 더 들여써요.' },
      { t: 'bug', code: r`n = 8
if n > 0:
if n % 2 == 0:
        print("양의 짝수")`, line: 3, fix: r`    if n % 2 == 0:`, out: '양의 짝수', why: '중첩 if 는 바깥 if 보다 한 단계 더 들여써야 해요.' },
    ],
    tasks: [
      { q: '글자 한 개를 입력받아 <b>모음</b>(a, e, i, o, u)이면 <code>모음</code>, 아니면 <code>자음</code>을 출력하세요. <code>in</code>을 사용해 보세요. (입력은 소문자만 들어와요)', starter: '', tests: [{ in: ['a'], out: '모음' }, { in: ['k'], out: '자음' }, { in: ['u'], out: '모음', hidden: true }, { in: ['z'], out: '자음', hidden: true }], need: [r`\bin\b`], needMsg: 'in 연산자를 사용해 주세요.', sol: r`c = input()
if c in "aeiou":
    print("모음")
else:
    print("자음")`, hints: ['모음 글자들을 하나의 문자열로 만들어요.', 'c in "aeiou" 로 포함 여부를 검사해요.', '참이면 모음, 아니면 자음.'] },
      { q: '과일 이름을 입력받아 <code>사과</code>, <code>딸기</code>, <code>체리</code> 중 하나면 <code>빨간 과일</code>, 아니면 <code>다른 과일</code>을 출력하세요. (리스트와 in 사용)', starter: '', tests: [{ in: ['사과'], out: '빨간 과일' }, { in: ['바나나'], out: '다른 과일' }, { in: ['체리'], out: '빨간 과일', hidden: true }], need: [r`\bin\b`], needMsg: 'in 연산자를 사용해 주세요.', sol: r`f = input()
if f in ["사과", "딸기", "체리"]:
    print("빨간 과일")
else:
    print("다른 과일")`, hints: ['여러 값을 대괄호 [ ] 안에 쉼표로 나열해요.', 'f in [...] 로 검사해요.', '<code>if f in ["사과", "딸기", "체리"]:</code>'] },
      { q: '정수를 입력받아 <b>양수이면서 짝수</b>이면 <code>양의 짝수</code>, <b>양수이지만 홀수</b>이면 <code>양의 홀수</code>, 양수가 아니면 <code>양수 아님</code>을 출력하세요. (중첩 if를 써 보세요)', starter: '', tests: [{ in: ['4'], out: '양의 짝수' }, { in: ['7'], out: '양의 홀수' }, { in: ['-2'], out: '양수 아님' }, { in: ['0'], out: '양수 아님', hidden: true }], sol: r`n = int(input())
if n > 0:
    if n % 2 == 0:
        print("양의 짝수")
    else:
        print("양의 홀수")
else:
    print("양수 아님")`, hints: ['먼저 양수인지 검사해요.', '양수일 때 안쪽에서 짝수/홀수를 나눠요.', '바깥 else 는 양수가 아닐 때예요.'] },
    ],
    boss: { q: '나이(정수)를 입력받아 놀이공원 입장료를 출력하세요.<br>3세 미만 <code>0</code> / 13세 미만 <code>5000</code> / 65세 미만 <code>10000</code> / 그 외 <code>3000</code> (숫자만 출력)', starter: '', tests: [{ in: ['2'], out: '0' }, { in: ['3'], out: '5000', hidden: true }, { in: ['12'], out: '5000' }, { in: ['13'], out: '10000', hidden: true }, { in: ['30'], out: '10000' }, { in: ['65'], out: '3000' }, { in: ['80'], out: '3000', hidden: true }], sol: r`age = int(input())
if age < 3:
    print(0)
elif age < 13:
    print(5000)
elif age < 65:
    print(10000)
else:
    print(3000)`, hints: ['작은 나이부터 차례로 검사해요.', '경계: 3세는 0이 아니라 5000, 13세는 10000이에요.', 'if age < 3 / elif age < 13 / elif age < 65 / else'] },
    sum: ['중첩 if: 안쪽 if 는 한 단계 더 들여쓰기', '<code>A in B</code> / <code>A not in B</code> — 포함 검사', '<code>x in ["a", "b"]</code> — 여러 값 중 하나인지', '<code>값1 if 조건 else 값2</code> — 한 줄 조건식', '경계값(미만/이하)을 꼼꼼히'],
  },
  {
    id: 12, emoji: '✌️', title: '미니 프로젝트: 가위바위보 심판', goal: '지금까지 배운 조건문으로 가위바위보 심판 프로그램을 단계별로 만들어요',
    tips: '큰 문제는 <b>작은 문제로 쪼개서</b> 하나씩 해결해요. 먼저 말로 순서를 적어 보고(의사 코드), 그다음 코드로 바꿔요.',
    learn: [
      { h: '1단계: 문제 쪼개기', b: '<p>두 사람의 선택(<code>가위</code>, <code>바위</code>, <code>보</code>)을 입력받아 결과를 알려 주는 심판 프로그램을 만들어요. 말로 먼저 정리해 볼게요.</p><ol><li>두 사람의 선택을 입력받는다</li><li>같으면 <b>비김</b></li><li>이기는 조합이면 <b>1번 승리</b></li><li>그 외에는 <b>2번 승리</b></li></ol>', code: r`a = input()
b = input()
print(a, b)`, stdin: ['가위', '보'] },
      { h: '2단계: 비기는 경우', b: '<p>두 선택이 같으면 비겨요. 같은지는 <code>==</code>로 비교해요.</p>', code: r`a = input()
b = input()
if a == b:
    print("비김")`, stdin: ['바위', '바위'] },
      { h: '3단계: 1번이 이기는 경우', b: '<p>1번이 이기는 조합은 세 가지예요: (가위 vs 보), (바위 vs 가위), (보 vs 바위). 하나라도 맞으면 되니 <code>or</code>로 묶어요.</p>', code: r`a = input()
b = input()
if a == b:
    print("비김")
elif (a == "가위" and b == "보") or (a == "바위" and b == "가위") or (a == "보" and b == "바위"):
    print("1번 승리")
else:
    print("2번 승리")`, stdin: ['가위', '보'] },
      { h: '4단계: 테스트하고 고치기', b: '<p>프로그램을 만들면 <b>여러 경우로 테스트</b>해요. 비길 때, 이길 때, 질 때 모두 시험해 보세요. 입력값을 바꿔 가며 <b>✏️ 고쳐서 실행</b>으로 직접 해 보세요!</p>', code: r`a = input()
b = input()
if a == b:
    print("비김")
elif (a == "가위" and b == "보") or (a == "바위" and b == "가위") or (a == "보" and b == "바위"):
    print("1번 승리")
else:
    print("2번 승리")`, stdin: ['보', '가위'] },
    ],
    check: [
      { q: '비기는 조건을 가장 간단하게 쓰는 방법은?', opts: ['a == b', 'a = b', 'a and b', 'a in b'], ans: 0, why: '두 선택이 같으면 비겨요.' },
      { q: '이기는 조합이 세 가지일 때 이를 묶는 연산자는?', opts: ['or', 'and', 'not', 'in'], ans: 0, why: '세 조합 중 하나라도 해당하면 이기니 or.' },
      { q: '프로그램을 완성한 뒤 꼭 해야 할 일은?', opts: ['여러 입력으로 테스트하기', '한 번만 실행해 보기', '주석 지우기', '변수 이름 바꾸기'], ans: 0, why: '경우를 바꿔 가며 테스트해야 숨은 버그를 찾아요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`a = "가위"
b = "가위"
if a == b:
    print("비김")
else:
    print("승부")`, ans: '비김', wrong: ['승부', '가위', '비김\n승부'], why: '두 선택이 같아요.' },
      { t: 'predict', code: r`a = "바위"
b = "가위"
if a == b:
    print("비김")
elif (a == "가위" and b == "보") or (a == "바위" and b == "가위"):
    print("1번 승리")
else:
    print("2번 승리")`, ans: '1번 승리', wrong: ['비김', '2번 승리', '1번 승리\n2번 승리'], why: '바위는 가위를 이겨요.' },
      { t: 'predict', code: r`a = "보"
b = "가위"
if a == b:
    print("비김")
elif (a == "가위" and b == "보") or (a == "바위" and b == "가위") or (a == "보" and b == "바위"):
    print("1번 승리")
else:
    print("2번 승리")`, ans: '2번 승리', wrong: ['비김', '1번 승리', '오류'], why: '가위는 보를 이기니까 2번(가위)이 이겨요.' },
      { t: 'blank', code: r`a = "가위"
b = "보"
if a ___ b:
    print("비김")
else:
    print("승부")`, ans: ['=='], extra: ['=', '!=', 'in'], out: '승부', why: '같은지 비교는 ==.' },
      { t: 'blank', code: r`a = "보"
b = "바위"
if (a == "가위" and b == "보") ___ (a == "보" and b == "바위"):
    print("1번 승리")`, ans: ['or'], extra: ['and', 'not', 'in'], out: '1번 승리', why: '이기는 조합 중 하나라도 맞으면 되니 or.' },
      { t: 'parsons', lines: [r`a = input()`, r`b = input()`, r`if a == b:`, r`    print("비김")`, r`else:`, r`    print("승부")`], stdin: ['보', '보'], out: '비김', why: '입력 → 비교 → 결과 순서예요.' },
      { t: 'bug', code: r`a = "가위"
b = "보"
if a = b:
    print("비김")
else:
    print("승부")`, line: 3, fix: r`if a == b:`, out: '승부', why: '비교는 == 예요. = 는 저장이라 문법 오류가 나요.' },
      { t: 'bug', code: r`a = "바위"
b = "가위"
if a == b:
    print("비김")
elif (a == "바위" and b == "가위"):
    print("1번 승리")
else
    print("2번 승리")`, line: 7, fix: r`else:`, out: '1번 승리', why: 'else 뒤의 콜론이 빠졌어요.' },
    ],
    tasks: [
      { q: '선택 두 개를 한 줄씩 입력받아 <b>같으면 <code>비김</code></b>, 다르면 <code>승부</code>를 출력하세요.', starter: '', tests: [{ in: ['가위', '가위'], out: '비김' }, { in: ['가위', '보'], out: '승부' }, { in: ['보', '바위'], out: '승부', hidden: true }], sol: r`a = input()
b = input()
if a == b:
    print("비김")
else:
    print("승부")`, hints: ['두 번 input()을 받아요.', 'if a == b: / else:', '두 결과 모두 print.'] },
      { q: '1번 선택, 2번 선택을 입력받아 <code>1번 승리</code>, <code>2번 승리</code>, <code>비김</code> 중 하나를 출력하세요. (가위=<code>가위</code>, 바위=<code>바위</code>, 보=<code>보</code>)', starter: '', tests: [{ in: ['가위', '보'], out: '1번 승리' }, { in: ['바위', '가위'], out: '1번 승리' }, { in: ['보', '바위'], out: '1번 승리' }, { in: ['보', '가위'], out: '2번 승리' }, { in: ['가위', '바위'], out: '2번 승리', hidden: true }, { in: ['바위', '바위'], out: '비김' }], sol: r`a = input()
b = input()
if a == b:
    print("비김")
elif (a == "가위" and b == "보") or (a == "바위" and b == "가위") or (a == "보" and b == "바위"):
    print("1번 승리")
else:
    print("2번 승리")`, hints: ['먼저 비김을 처리해요.', '이기는 조합 세 가지를 or 로 묶어요.', '남은 경우는 else 로 2번 승리.'] },
      { q: '이번에는 <b>영어 입력</b>도 받아 보세요. 선택이 <code>rock</code>, <code>paper</code>, <code>scissors</code> 중 하나로 들어와요. 결과로 <code>이김</code>(1번), <code>짐</code>(1번), <code>비김</code>을 <b>1번 입장</b>에서 출력하세요.', starter: '', tests: [{ in: ['rock', 'scissors'], out: '이김' }, { in: ['paper', 'rock'], out: '이김' }, { in: ['scissors', 'paper'], out: '이김' }, { in: ['rock', 'paper'], out: '짐' }, { in: ['scissors', 'rock'], out: '짐', hidden: true }, { in: ['paper', 'paper'], out: '비김' }], sol: r`a = input()
b = input()
if a == b:
    print("비김")
elif (a == "rock" and b == "scissors") or (a == "paper" and b == "rock") or (a == "scissors" and b == "paper"):
    print("이김")
else:
    print("짐")`, hints: ['한국어 버전과 구조는 같아요.', '이기는 조합: rock>scissors, paper>rock, scissors>paper.', '나머지는 짐.'] },
    ],
    boss: { q: '두 사람의 <b>이름</b>과 <b>선택</b>을 입력받아 최종 결과를 출력하세요. 입력은 순서대로 <b>1번 이름, 1번 선택, 2번 이름, 2번 선택</b>이에요.<br>이긴 사람이 있으면 <code>○○ 승리</code>, 비기면 <code>무승부</code>를 출력해요. (선택은 가위/바위/보)', starter: '', tests: [{ in: ['민수', '가위', '지영', '보'], out: '민수 승리' }, { in: ['민수', '바위', '지영', '보'], out: '지영 승리' }, { in: ['민수', '보', '지영', '보'], out: '무승부' }, { in: ['철수', '보', '영희', '바위'], out: '철수 승리', hidden: true }, { in: ['철수', '가위', '영희', '바위'], out: '영희 승리', hidden: true }], sol: r`n1 = input()
c1 = input()
n2 = input()
c2 = input()
if c1 == c2:
    print("무승부")
elif (c1 == "가위" and c2 == "보") or (c1 == "바위" and c2 == "가위") or (c1 == "보" and c2 == "바위"):
    print(n1 + " 승리")
else:
    print(n2 + " 승리")`, hints: ['입력 네 번: 이름1, 선택1, 이름2, 선택2.', '무승부 → 1번 이기는 조합 → 나머지(2번 승리).', '승자 이름을 문자열 + 로 붙여서 출력해요: <code>print(n1 + " 승리")</code>'] },
    sum: ['큰 문제는 작게 쪼개서 단계별로', '비김: <code>a == b</code> → 이기는 조합들을 <code>or</code> 로 → 나머지는 else', '조건을 괄호로 묶으면 읽기 쉬움', '여러 입력으로 테스트하기 (비김/승/패 모두)', '입력 순서와 변수 이름을 정확히'],
  },
];
