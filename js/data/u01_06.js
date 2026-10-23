// 유닛 1~6. 코드는 String.raw 로 써서 \n 같은 역슬래시를 그대로 둔다.
const r = String.raw;

export const U01 = [
  {
    id: 1, emoji: '👋', title: '첫 코드: print', goal: '파이썬 프로그램을 처음 실행하고, 화면에 글자를 출력해요',
    tips: '코드는 위에서 아래로 한 줄씩 실행돼요. 따옴표와 괄호는 항상 짝이 맞아야 해요!',
    learn: [
      { h: '화면에 출력하기: print()', b: '<p>프로그램은 컴퓨터에게 시키는 <b>명령</b>의 모음이에요. 파이썬에서 화면에 글자를 보여 주는 명령은 <code>print()</code>예요. 괄호 안에 보여 줄 내용을 쓰고, 글자(<b>문자열</b>)는 따옴표로 감싸요.</p><p>아래 <b>▶ 실행</b>을 눌러 보세요!</p>', code: r`print("Hello, Python!")` },
      { h: '위에서 아래로 한 줄씩', b: '<p>파이썬은 코드를 <b>위에서부터 한 줄씩 차례로</b> 실행해요. <code>print()</code>를 여러 번 쓰면 줄이 바뀌며 출력돼요.</p>', code: r`print("안녕하세요")
print("저는 파이썬을 배워요")
print("재미있어요!")` },
      { h: '쉼표로 여러 값 출력', b: '<p><code>print()</code> 안에 값을 <b>쉼표(,)</b>로 나열하면 한 줄에 공백으로 이어서 출력해요. 따옴표 없이 쓴 숫자는 계산할 수 있는 <b>숫자</b>예요.</p>', code: r`print("나이:", 20)
print("파이", "썬", "최고")` },
      { h: '주석: 컴퓨터가 읽지 않는 메모', b: '<p><code>#</code> 뒤의 내용은 <b>주석</b>이에요. 컴퓨터는 무시하고, 사람이 읽는 설명으로만 써요. 코드가 무슨 일을 하는지 적어 두면 나중에 큰 도움이 돼요.</p>', code: r`# 이 줄은 실행되지 않아요
print("주석 아래 줄")  # 줄 끝에도 쓸 수 있어요` },
      { h: '실수해도 괜찮아요: 오류 읽기', b: '<p>파이썬은 <b>대소문자를 구분</b>해요. <code>Print</code>와 <code>print</code>는 달라요. 오류가 나면 마지막 줄의 <b>오류 이름</b>과 <b>몇 번째 줄</b>인지를 읽어 보세요. 오류 메시지는 해결을 도와주는 힌트예요!</p>', code: r`Print("Hello")`, err: true },
    ],
    check: [
      { q: '화면에 글자를 출력하는 파이썬 명령은?', opts: ['print()', 'show()', 'echo()', 'say()'], ans: 0, why: '<code>print()</code>가 화면 출력 명령이에요.' },
      { q: '<code>print("파이썬")</code>을 실행하면 화면에 무엇이 나올까요?', opts: ['"파이썬" (따옴표 포함)', '파이썬', 'print 파이썬', '오류'], ans: 1, why: '따옴표는 “여기부터 여기까지가 글자”라는 표시일 뿐, 출력되지 않아요.' },
      { q: '<code>#</code> 뒤에 쓴 내용은 어떻게 될까요?', opts: ['실행된다', '무시된다 (메모)', '오류가 난다', '화면에 출력된다'], ans: 1, why: '#으로 시작하는 주석은 컴퓨터가 읽지 않아요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print("가나다")
print("라마바")`, ans: '가나다\n라마바', wrong: ['가나다라마바', '"가나다"\n"라마바"', '가나다 라마바'], why: 'print()를 한 번 실행할 때마다 줄이 바뀌어요.' },
      { t: 'predict', code: r`print("A", "B")`, ans: 'A B', wrong: ['AB', 'A,B', '"A" "B"'], why: '쉼표로 나열한 값 사이에는 공백이 하나 들어가요.' },
      { t: 'predict', code: r`print(1, 2, 3)`, ans: '1 2 3', wrong: ['123', '1,2,3', '[1, 2, 3]'], why: '숫자도 쉼표로 이으면 공백으로 구분돼 출력돼요.' },
      { t: 'predict', code: r`# print("숨은 줄")
print("보이는 줄")`, ans: '보이는 줄', wrong: ['숨은 줄', '숨은 줄\n보이는 줄', '오류'], why: '#으로 시작하는 줄은 주석이라 실행되지 않아요.' },
      { t: 'blank', code: r`___("안녕")`, ans: ['print'], extra: ['Print', 'say', 'echo'], out: '안녕', why: '대소문자까지 정확히 <code>print</code>예요.' },
      { t: 'blank', code: r`print(___)`, ans: ['"파이썬"'], extra: ['파이썬', "'파이썬"], out: '파이썬', why: '글자는 따옴표로 짝을 맞춰 감싸야 해요.' },
      { t: 'parsons', lines: [r`print("1. 일어나기")`, r`print("2. 밥 먹기")`, r`print("3. 코딩하기")`], out: '1. 일어나기\n2. 밥 먹기\n3. 코딩하기', why: '코드는 위에서 아래로 실행되니 번호 순서대로 놓아요.' },
      { t: 'bug', code: r`print("첫 번째 줄"
print("두 번째 줄")`, line: 1, fix: r`print("첫 번째 줄")`, out: '첫 번째 줄\n두 번째 줄', why: '첫 줄의 닫는 괄호 <code>)</code>가 빠졌어요.' },
      { t: 'bug', code: r`Print("안녕")
print("잘 가")`, line: 1, fix: r`print("안녕")`, out: '안녕\n잘 가', why: '파이썬은 대소문자를 구분해서 <code>Print</code>는 오류예요.' },
    ],
    tasks: [
      { q: '화면에 <code>Hello, World!</code>를 출력하세요. (모든 프로그래머가 처음 해 보는 코드예요)', starter: '# 여기에 코드를 쓰세요\n', tests: [{ out: 'Hello, World!' }], sol: r`print("Hello, World!")`, hints: ['print() 를 사용해요.', '괄호 안에 따옴표로 감싼 글자를 넣어요.', '<code>print("Hello, World!")</code> — 대소문자와 느낌표까지 똑같이!'], wrongs: [r`print("hello, world!")`, r`print(Hello, World!)`] },
      { q: '아래 세 줄을 <b>세 번의 print()</b>로 출력하세요.<br><code>나는 코딩을 배워요</code><br><code>오늘부터 시작이에요</code><br><code>화이팅!</code>', starter: '', tests: [{ out: '나는 코딩을 배워요\n오늘부터 시작이에요\n화이팅!' }], sol: r`print("나는 코딩을 배워요")
print("오늘부터 시작이에요")
print("화이팅!")`, hints: ['줄마다 print()를 하나씩 써요.', 'print("나는 코딩을 배워요") 처럼 한 줄씩 적어요.', '세 줄을 순서대로 써서 위에서 아래로 실행되게 해요.'] },
      { q: '<code>print()</code> 한 번으로 <code>점수: 100</code>을 출력하세요. <b>쉼표</b>를 사용해 글자 <code>"점수:"</code>와 숫자 <code>100</code>을 따로 넣어 보세요.', starter: '', tests: [{ out: '점수: 100' }], need: [','], needMsg: '쉼표(,)로 "점수:" 와 100을 나눠서 print()에 넣어 주세요.', sol: r`print("점수:", 100)`, hints: ['쉼표로 값을 나열하면 사이에 공백이 생겨요.', 'print("점수:", ...) 의 점 세 개 자리에 숫자를 넣어요.', '<code>print("점수:", 100)</code>'] },
    ],
    boss: { q: '다음 모양을 출력하는 프로그램을 만드세요. (4줄)<pre style="margin:6px 0">*\n**\n***\n완성!</pre>', starter: '', tests: [{ out: '*\n**\n***\n완성!' }], sol: r`print("*")
print("**")
print("***")
print("완성!")`, hints: ['모두 4번의 print()가 필요해요.', '첫 줄은 print("*") 예요.', '*, **, ***, 완성! 순서로 네 줄을 써요.'] },
    sum: ['<code>print(값)</code> — 화면에 출력', '글자(문자열)는 따옴표 <code>"…"</code> 또는 <code>\'…\'</code> 로 감싼다', '쉼표로 여러 값을 한 줄에 출력 (사이에 공백)', '<code>#</code> 뒤는 주석 — 컴퓨터가 읽지 않는 메모', '대소문자를 구분한다 (<code>Print</code> ≠ <code>print</code>)'],
  },
  {
    id: 2, emoji: '🔤', title: '문자열 다루기 기초', goal: '따옴표 규칙, 특수 문자(\\n), 문자열 이어 붙이기와 반복을 익혀요',
    tips: '문자열끼리는 <code>+</code>로 이어 붙이고 <code>*</code> 숫자로 반복할 수 있어요. 숫자와 문자를 섞으면 오류가 나요 (유닛 5에서 해결해요).',
    learn: [
      { h: '문자열과 따옴표', b: '<p>따옴표로 감싼 글자를 <b>문자열(str)</b>이라고 해요. 작은따옴표 <code>\'…\'</code>와 큰따옴표 <code>"…"</code>는 똑같이 동작해요. 시작한 따옴표와 같은 종류로 닫아야 해요.</p>', code: r`print('작은따옴표')
print("큰따옴표")` },
      { h: '따옴표가 글자 안에 있을 때', b: '<p>글자 안에 따옴표를 넣고 싶으면 <b>다른 종류</b> 따옴표로 문자열을 감싸요.</p>', code: r`print("It's fine")
print('그가 "안녕"이라고 말했다')` },
      { h: '특수 문자: \\n 과 \\t', b: '<p>역슬래시(<code>\\</code>)로 시작하는 <b>이스케이프 문자</b>가 있어요. <code>\\n</code>은 줄바꿈, <code>\\t</code>는 탭(넓은 공백), <code>\\\\</code>는 역슬래시 자체예요.</p>', code: r`print("첫째 줄\n둘째 줄")
print("이름\t나이")
print("경로: C:\\temp")` },
      { h: '문자열 더하기와 곱하기', b: '<p><code>+</code>는 문자열을 <b>이어 붙이고</b>, <code>*</code> 숫자는 문자열을 <b>반복</b>해요.</p>', code: r`print("파이" + "썬")
print("ha" * 3)
print("-" * 20)` },
      { h: '여러 줄 문자열: 따옴표 세 개', b: '<p><code>"""</code>로 감싸면 <b>여러 줄</b>을 그대로 쓸 수 있어요. 시, 안내문처럼 긴 글에 좋아요.</p>', code: r`print("""첫째 줄
둘째 줄
셋째 줄""")` },
    ],
    check: [
      { q: '글자 안에 작은따옴표가 있는 <code>It\'s</code>를 안전하게 출력하는 방법은?', opts: ['큰따옴표로 문자열 감싸기: "It\'s"', '따옴표를 쓰지 않기', '작은따옴표를 세 번 쓰기', '불가능하다'], ans: 0, why: '문자열을 감싸는 따옴표와 다른 종류의 따옴표는 글자 안에 그대로 쓸 수 있어요.' },
      { q: '<code>\\n</code>은 무슨 뜻일까요?', opts: ['줄바꿈', '공백 하나', '문자 n', '프로그램 종료'], ans: 0, why: '\\n 은 새 줄(줄바꿈)을 뜻해요.' },
      { q: '<code>"ab" * 3</code>의 결과는?', opts: ['ababab', 'ab3', 'aaabbb', '오류'], ans: 0, why: '문자열에 정수를 곱하면 그만큼 반복돼요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print("가\n나")`, ans: '가\n나', wrong: ['가\\n나', '가 나', '가나'], why: '\\n 은 줄을 바꿔요.' },
      { t: 'predict', code: r`print("ab" + "cd")`, ans: 'abcd', wrong: ['ab cd', 'ab+cd', 'abab cd'], why: '+ 는 문자열을 붙여요.' },
      { t: 'predict', code: r`print("-" * 5)`, ans: '-----', wrong: ['-5', '- - - - -', '-*5'], why: '곱하기는 반복이에요.' },
      { t: 'predict', code: r`print('He said "hi"')`, ans: 'He said "hi"', wrong: ['He said hi', "He said 'hi'", '오류'], why: '바깥이 작은따옴표라서 안의 큰따옴표는 글자로 출력돼요.' },
      { t: 'predict', code: r`print("a" + "b" * 2)`, ans: 'abb', wrong: ['abab', 'aabb', 'ab2'], why: '곱하기가 먼저 계산돼요: "b" * 2 → "bb", 그다음 "a" + "bb".' },
      { t: 'blank', code: r`print("ho" ___ 3)`, ans: ['*'], extra: ['+', '-', '/'], out: 'hohoho', why: '반복에는 * 를 써요.' },
      { t: 'blank', code: r`print("첫째___둘째")`, ans: [r`\n`], extra: ['/n', r`\t`], out: '첫째\n둘째', why: '줄을 바꾸는 특수 문자는 \\n 이에요.' },
      { t: 'parsons', lines: [r`print("*" * 6)`, r`print("파이썬")`, r`print("-" * 6)`], out: '******\n파이썬\n------', why: '위에서부터 차례로 실행돼요.' },
      { t: 'bug', code: r`print("안녕" + "하세요")
print("ㅋ" x 3)`, line: 2, fix: r`print("ㅋ" * 3)`, out: '안녕하세요\nㅋㅋㅋ', why: '반복은 x 가 아니라 * 예요.' },
      { t: 'bug', code: r`print("나는 "파이썬"을 좋아해")`, line: 1, fix: r`print('나는 "파이썬"을 좋아해')`, out: '나는 "파이썬"을 좋아해', why: '글자 안에 큰따옴표가 있으니 바깥은 작은따옴표로 감싸야 해요.' },
    ],
    tasks: [
      { q: '<code>It\'s Python!</code> 을 출력하세요. 글자 안에 작은따옴표가 있어요.', starter: '', tests: [{ out: "It's Python!" }], sol: r`print("It's Python!")`, hints: ['작은따옴표가 글자 안에 있으니 바깥은?', '큰따옴표로 감싸 보세요.', '<code>print("It\'s Python!")</code>'] },
      { q: '문자열 반복(<code>*</code>)을 사용해 <code>=</code> 를 <b>20개</b> 한 줄로 출력하세요.', starter: '', tests: [{ out: '='.repeat(20) }], need: [r`\*`], needMsg: '* 로 반복해 보세요.', sol: r`print("=" * 20)`, hints: ['직접 20개를 쓰지 말고 반복 연산을 써요.', '"=" 뒤에 * 20 을 붙여요.', '<code>print("=" * 20)</code>'] },
      { q: '<b>print()를 한 번만</b> 사용해서 두 줄을 출력하세요.<br><code>안녕</code><br><code>파이썬</code><br>(힌트: 특수 문자를 써요)', starter: '', tests: [{ out: '안녕\n파이썬' }], need: [r`\\n`], needMsg: '글자 안에 \\n 을 사용해 보세요.', sol: r`print("안녕\n파이썬")`, hints: ['줄바꿈 특수 문자가 필요해요.', '"안녕" 과 "파이썬" 사이에 \\n 을 넣어요.', '<code>print("안녕\\n파이썬")</code>'] },
    ],
    boss: { q: '상자 모양을 출력하세요. 윗줄과 아랫줄은 <b>반복(*)</b>을 써서 만드세요.<pre style="margin:6px 0">##########\n# 파이썬 #\n##########</pre>', starter: '', tests: [{ out: '##########\n# 파이썬 #\n##########' }], need: [r`\*`], needMsg: '윗줄과 아랫줄은 "#" * 10 처럼 반복으로 만들어 보세요.', sol: r`print("#" * 10)
print("# 파이썬 #")
print("#" * 10)`, hints: ['세 줄을 출력해요. 첫 줄과 마지막 줄은 같아요.', '"#" * 10 으로 # 열 개를 만들어요.', '가운데 줄은 그냥 "# 파이썬 #" 이에요.'] },
    sum: ['<code>\'…\'</code> 와 <code>"…"</code> 는 같다. 안쪽에 다른 따옴표 사용 가능', '<code>\\n</code> 줄바꿈, <code>\\t</code> 탭, <code>\\\\</code> 역슬래시', '<code>"a" + "b"</code> → <code>ab</code> (이어 붙이기)', '<code>"ab" * 3</code> → <code>ababab</code> (반복)', '<code>"""…"""</code> 여러 줄 문자열'],
  },
  {
    id: 3, emoji: '🧮', title: '숫자와 계산', goal: '정수와 실수, 사칙연산과 나눗셈의 종류(/, //, %), 거듭제곱을 익혀요',
    tips: '<code>/</code>의 결과는 항상 소수(float)예요. 몫은 <code>//</code>, 나머지는 <code>%</code>를 써요.',
    learn: [
      { h: '정수와 실수', b: '<p>따옴표 없이 쓴 숫자는 계산할 수 있어요. 소수점이 없으면 <b>정수(int)</b>, 있으면 <b>실수(float)</b>예요. 파이썬은 계산기처럼 쓸 수 있어요.</p>', code: r`print(3 + 4)
print(10 - 3)
print(6 * 7)
print(2.5 + 1.5)` },
      { h: '나눗셈 세 가지', b: '<p><code>/</code>는 <b>소수 나눗셈</b>, <code>//</code>는 <b>몫</b>, <code>%</code>는 <b>나머지</b>예요. 시계 계산이나 짝수/홀수 판별에 자주 써요.</p>', code: r`print(7 / 2)
print(7 // 2)
print(7 % 2)` },
      { h: '거듭제곱과 계산 순서', b: '<p><code>**</code>는 거듭제곱이에요(<code>2 ** 3</code> = 8). 계산 순서는 수학과 같아요: <b>괄호 → 거듭제곱 → 곱셈·나눗셈 → 덧셈·뺄셈</b>.</p>', code: r`print(2 ** 10)
print(2 + 3 * 4)
print((2 + 3) * 4)` },
      { h: '문자열 "3"과 숫자 3은 달라요', b: '<p>따옴표가 있으면 글자고, 없으면 숫자예요. <code>"3" + "4"</code>는 이어 붙여서 <code>34</code>, <code>3 + 4</code>는 계산해서 <code>7</code>이에요.</p>', code: r`print("3" + "4")
print(3 + 4)
print(7 / 7)` },
    ],
    check: [
      { q: '<code>17 // 5</code>의 값은?', opts: ['3', '2', '3.4', '3.0'], ans: 0, why: '// 는 몫이에요. 17을 5로 나누면 몫 3, 나머지 2.' },
      { q: '<code>17 % 5</code>의 값은?', opts: ['2', '3', '3.4', '12'], ans: 0, why: '% 는 나머지예요.' },
      { q: '<code>2 ** 3</code>의 값은?', opts: ['8', '6', '9', '5'], ans: 0, why: '** 는 거듭제곱이라 2×2×2 = 8.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print(10 / 4)`, ans: '2.5', wrong: ['2', '2.0', '3'], why: '/ 는 소수 나눗셈이에요.' },
      { t: 'predict', code: r`print(10 // 4)`, ans: '2', wrong: ['2.5', '3', '2.0'], why: '// 는 몫만 남겨요.' },
      { t: 'predict', code: r`print(10 % 4)`, ans: '2', wrong: ['2.5', '4', '0'], why: '10을 4로 나눈 나머지는 2.' },
      { t: 'predict', code: r`print(2 + 3 * 4)`, ans: '14', wrong: ['20', '24', '9'], why: '곱셈이 먼저예요.' },
      { t: 'predict', code: r`print((2 + 3) * 4)`, ans: '20', wrong: ['14', '24', '9'], why: '괄호 안이 먼저 계산돼요.' },
      { t: 'predict', code: r`print(7 / 7)`, ans: '1.0', wrong: ['1', '0', '7'], why: '/ 의 결과는 항상 실수(float)라서 1.0 이에요.' },
      { t: 'predict', code: r`print(5 + 2.0)`, ans: '7.0', wrong: ['7', '52.0', '오류'], why: '정수와 실수를 더하면 실수가 돼요.' },
      { t: 'blank', code: r`print(17 ___ 5)`, ans: ['//'], extra: ['/', '%', '**'], out: '3', why: '몫은 // 예요.' },
      { t: 'blank', code: r`print(17 ___ 5)`, ans: ['%'], extra: ['//', '/', '**'], out: '2', why: '나머지는 % 예요.' },
      { t: 'bug', code: r`print(2 ^ 3)`, line: 1, fix: r`print(2 ** 3)`, out: '8', why: '^ 는 거듭제곱이 아니라 다른 연산(XOR)이에요. 거듭제곱은 ** 예요.' },
    ],
    tasks: [
      { q: '하루는 몇 분일까요? <code>24 * 60</code>을 계산해 출력하세요.', starter: '', tests: [{ out: '1440' }], sol: r`print(24 * 60)`, hints: ['곱셈은 * 예요.', '24 * 60 을 print 안에 넣어요.', '<code>print(24 * 60)</code>'] },
      { q: '100을 7로 나눈 <b>몫</b>과 <b>나머지</b>를 각각 한 줄씩 출력하세요.', starter: '', tests: [{ out: '14\n2' }], need: [r`//`, r`%`], needMsg: '몫(//)과 나머지(%)를 사용해 주세요.', sol: r`print(100 // 7)
print(100 % 7)`, hints: ['몫은 //, 나머지는 % 예요.', 'print를 두 번 써요.', '<code>print(100 // 7)</code> 와 <code>print(100 % 7)</code>'] },
      { q: '세 과목 점수 80, 90, 100의 <b>평균</b>을 출력하세요. (소수점이 있는 결과로 나와요)', starter: '', tests: [{ out: '90.0' }], sol: r`print((80 + 90 + 100) / 3)`, hints: ['세 수를 더한 뒤 3으로 나눠요.', '덧셈을 먼저 하려면 괄호가 필요해요.', '<code>print((80 + 90 + 100) / 3)</code>'] },
    ],
    boss: { q: '5000초는 몇 시간 몇 분 몇 초일까요? <b>시간, 분, 초</b>를 각각 한 줄씩 출력하세요. (1시간 = 3600초, 1분 = 60초)<br>힌트: 몫(//)과 나머지(%)를 함께 사용해요.', starter: '', tests: [{ out: '1\n23\n20' }], need: [r`//`, r`%`], needMsg: '몫(//)과 나머지(%)를 사용해 주세요.', sol: r`print(5000 // 3600)
print(5000 % 3600 // 60)
print(5000 % 60)`, hints: ['시간은 5000 // 3600 이에요.', '분: 남은 초(5000 % 3600)를 60으로 나눈 몫.', '초: 5000 % 60 (또는 남은 초를 60으로 나눈 나머지).'] },
    sum: ['정수 <code>3</code>, 실수 <code>3.5</code>, 문자열 <code>"3"</code> 은 서로 다르다', '<code>+ - * /</code> 와 거듭제곱 <code>**</code>', '<code>/</code> 소수 나눗셈 · <code>//</code> 몫 · <code>%</code> 나머지', '계산 순서: 괄호 → ** → * / // % → + -', '<code>/</code> 의 결과는 항상 float (<code>7 / 7</code> → <code>1.0</code>)'],
  },
  {
    id: 4, emoji: '📦', title: '변수', goal: '값에 이름표를 붙여 저장하고, 바꾸고, 계산에 사용해요',
    tips: '변수의 <code>=</code>는 수학의 “같다”가 아니라 “오른쪽 값을 왼쪽 이름에 넣어라”는 뜻이에요.',
    learn: [
      { h: '변수: 값을 담는 상자', b: '<p><code>이름 = 값</code> 으로 변수를 만들어요. 이후 이름만 쓰면 담긴 값이 쓰여요. <b>=</b>는 오른쪽을 왼쪽에 <b>저장</b>하라는 뜻이에요.</p>', code: r`name = "파이"
age = 3
print(name)
print(age)` },
      { h: '값을 바꾸기 (재할당)', b: '<p>같은 이름에 새 값을 넣으면 <b>이전 값은 사라지고</b> 새 값으로 바뀌어요. 다른 변수에 복사해 둔 값은 그대로예요.</p>', code: r`a = 5
b = a
a = 7
print(a, b)` },
      { h: '변수로 계산하기', b: '<p>변수는 숫자처럼 계산에 쓸 수 있어요. 자기 자신을 이용해 값을 바꾸는 <code>x = x + 1</code>은 매우 자주 써요. 줄여서 <code>x += 1</code>이라고도 써요.</p>', code: r`x = 10
x = x + 5
print(x)
x += 1
print(x)
price = 1200
print(price * 3)` },
      { h: '변수 이름 규칙', b: '<ul><li>영문, 숫자, 밑줄(<code>_</code>)만 (한글도 가능하지만 영문을 권장해요)</li><li><b>숫자로 시작할 수 없어요</b> (<code>1st</code> ✖)</li><li>공백 불가 → 밑줄로 연결 (<code>my_name</code>)</li><li>대소문자 구분 (<code>age</code> ≠ <code>Age</code>)</li><li><code>print</code>, <code>if</code> 같은 예약어는 이름으로 쓰지 않아요</li></ul>', code: r`my_name = "코더"
age2 = 20
print(my_name, age2)` },
    ],
    check: [
      { q: '<code>x = 3</code> 다음에 <code>x = x + 2</code>를 실행하면 x는?', opts: ['5', '3', '2', '32'], ans: 0, why: '오른쪽 계산(3 + 2 = 5)을 x에 다시 저장해요.' },
      { q: '변수 이름으로 쓸 수 <b>없는</b> 것은?', opts: ['1st', 'first', 'my_age', 'age2'], ans: 0, why: '변수 이름은 숫자로 시작할 수 없어요.' },
      { q: '<code>a = 1</code>, <code>b = a</code>, <code>a = 9</code> 다음의 b는?', opts: ['1', '9', '10', '오류'], ans: 0, why: 'b에는 그 시점의 a값(1)이 복사됐어요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`a = 5
b = a
a = 7
print(a, b)`, ans: '7 5', wrong: ['5 7', '7 7', '5 5'], why: 'b는 a의 예전 값(5)을 복사해 가졌어요.' },
      { t: 'predict', code: r`x = 3
x = x + 2
print(x)`, ans: '5', wrong: ['3', '2', '32'], why: '3 + 2 = 5 를 x에 다시 저장.' },
      { t: 'predict', code: r`n = "3"
print(n * 2)`, ans: '33', wrong: ['6', '3 3', '오류'], why: '문자열 "3"에 2를 곱하면 "3"이 두 번 반복돼요.' },
      { t: 'predict', code: r`price = 1200
print(price * 3)`, ans: '3600', wrong: ['1200 3', '12003', 'price * 3'], why: '변수 이름 자리에 값 1200이 쓰여요.' },
      { t: 'predict', code: r`score = 10
score += 5
score += 5
print(score)`, ans: '20', wrong: ['10', '15', '5'], why: '+= 는 값을 더해서 다시 저장해요.' },
      { t: 'blank', code: r`___ = 10
print(age)`, ans: ['age'], extra: ['Age', '10age', 'print'], out: '10', why: '아래에서 age 라는 이름을 쓰니 같은 이름으로 만들어야 해요.' },
      { t: 'blank', code: r`x = 5
x ___ 1
print(x)`, ans: ['+='], extra: ['=+', '++', '+'], out: '6', why: '+= 는 더해서 저장해요.' },
      { t: 'parsons', lines: [r`a = 3`, r`b = 4`, r`print(a + b)`], out: '7', why: '변수를 먼저 만든 뒤에 사용해요.' },
      { t: 'bug', code: r`first = 5
print(Frist)`, line: 2, fix: r`print(first)`, out: '5', why: '변수 이름 철자가 달라요 (first ≠ Frist).' },
      { t: 'bug', code: r`my var = 3
print(3)`, line: 1, fix: r`my_var = 3`, out: '3', why: '변수 이름에는 공백을 쓸 수 없어요. 밑줄(_)을 써요.' },
    ],
    tasks: [
      { q: '변수 <code>a</code>에 7, 변수 <code>b</code>에 3을 저장하고, 두 수의 <b>합</b>을 출력하세요.', starter: '', tests: [{ out: '10' }], need: [r`\ba\s*=\s*7`, r`\bb\s*=\s*3`], needMsg: 'a = 7 과 b = 3 변수를 만들어서 사용해 주세요.', sol: r`a = 7
b = 3
print(a + b)`, hints: ['변수는 이름 = 값 으로 만들어요.', 'a = 7 과 b = 3 을 먼저 쓰고 print(a + b).', '<code>a = 7</code> / <code>b = 3</code> / <code>print(a + b)</code>'] },
      { q: '두 변수의 값을 <b>서로 바꿔서</b> <code>2 1</code>이 출력되게 하세요. (임시 변수를 하나 쓰면 쉬워요)', starter: 'a = 1\nb = 2\n# 여기에서 a 와 b 의 값을 서로 바꾸세요\nprint(a, b)', tests: [{ out: '2 1' }], sol: r`a = 1
b = 2
temp = a
a = b
b = temp
print(a, b)`, hints: ['a의 값을 잠깐 보관할 변수가 필요해요.', 'temp = a 로 보관하고, a = b, 그다음 b = temp.', '<code>temp = a</code> → <code>a = b</code> → <code>b = temp</code>'] },
      { q: '<code>score</code>가 50점에서 시작해요. <code>+=</code>를 사용해 <b>10점</b>과 <b>20점</b>을 차례로 더한 뒤 점수를 출력하세요.', starter: 'score = 50\n', tests: [{ out: '80' }], need: [r`\+=`], needMsg: '+= 를 사용해 주세요.', sol: r`score = 50
score += 10
score += 20
print(score)`, hints: ['+= 는 더해서 다시 저장해요.', 'score += 10 한 줄, score += 20 한 줄.', '마지막에 print(score).'] },
    ],
    boss: { q: '사과 <b>5개</b>를 개당 <b>1200원</b>에 샀어요. 변수 <code>price</code>(가격), <code>count</code>(개수), <code>total</code>(총액)을 만들어서 <b>총액</b>을 출력하고, 이어서 <b>500원을 할인한 금액</b>도 출력하세요.', starter: '', tests: [{ out: '6000\n5500' }], need: [r`\bprice\b`, r`\bcount\b`, r`\btotal\b`], needMsg: 'price, count, total 세 변수를 모두 사용해 주세요.', sol: r`price = 1200
count = 5
total = price * count
print(total)
total = total - 500
print(total)`, hints: ['price = 1200, count = 5 부터 시작해요.', 'total = price * count 를 출력한 뒤, total 에서 500을 빼요.', '<code>total = total - 500</code> 또는 <code>total -= 500</code> 후 print(total).'] },
    sum: ['<code>이름 = 값</code> — 변수에 저장 (오른쪽 → 왼쪽)', '새 값을 넣으면 이전 값은 사라진다', '<code>x = x + 1</code> ≡ <code>x += 1</code>', '이름은 영문·숫자·_ 만, 숫자로 시작 불가, 대소문자 구분', '다른 변수에 복사한 값은 원본이 바뀌어도 그대로'],
  },
  {
    id: 5, emoji: '⌨️', title: '입력받기와 형변환', goal: 'input()으로 사용자 입력을 받고, int·float·str로 자료형을 바꿔요',
    tips: '<code>input()</code>은 <b>언제나 문자열</b>을 돌려줘요. 숫자로 계산하려면 <code>int()</code> 같은 변환이 필요해요.',
    learn: [
      { h: 'input(): 사용자에게 묻기', b: '<p><code>input("질문")</code>은 질문을 보여 주고 사용자가 입력한 값을 문자열로 돌려줘요. 변수에 담아 쓰는 게 보통이에요. (아래 칸의 <b>입력값</b>에 적은 줄이 입력으로 쓰여요)</p>', code: r`name = input("이름이 뭐예요? ")
print("안녕하세요,", name)`, stdin: ['파이'] },
      { h: '입력은 항상 문자열', b: '<p>숫자를 입력해도 <b>글자</b>로 들어와요. 그래서 <code>"3" + "4"</code>처럼 이어 붙게 돼요. 숫자 계산에는 <code>int()</code>(정수), <code>float()</code>(실수)로 바꿔 줘요.</p>', code: r`a = input()
b = input()
print(a + b)
print(int(a) + int(b))`, stdin: ['3', '4'] },
      { h: 'int() · float() · str()', b: '<p>자료형을 바꾸는 함수예요.</p><ul><li><code>int("12")</code> → 정수 12, <code>int(3.9)</code> → 3 (버림)</li><li><code>float("2.5")</code> → 2.5</li><li><code>str(12)</code> → 글자 "12"</li></ul><p>문자열과 숫자를 <code>+</code>로 섞으면 <b>TypeError</b>가 나므로 <code>str()</code>로 바꿔요.</p>', code: r`age = 20
print("나이: " + str(age))
print(int("12") + 1)
print(float("2.5") * 2)
print(int(3.9))` },
      { h: '유용한 습관: 한 줄로 받아서 바꾸기', b: '<p><code>int(input())</code>처럼 겹쳐 쓰면 입력과 변환을 한 줄에 끝낼 수 있어요. 가장 많이 쓰는 형태예요.</p>', code: r`n = int(input("숫자를 입력: "))
print(n * 2)
print(n + 1)`, stdin: ['21'] },
    ],
    check: [
      { q: '<code>input()</code>이 돌려주는 값의 자료형은?', opts: ['문자열(str)', '정수(int)', '실수(float)', '입력한 값에 따라 달라진다'], ans: 0, why: '숫자를 입력해도 input()은 항상 문자열을 돌려줘요.' },
      { q: '<code>int("7") + 3</code>의 결과는?', opts: ['10', '73', '"73"', '오류'], ans: 0, why: '"7"을 정수 7로 바꿨으니 7 + 3 = 10.' },
      { q: '<code>"나이: " + 20</code>을 실행하면?', opts: ['TypeError (오류)', '나이: 20', '나이: 2020', '나이:20'], ans: 0, why: '문자열과 정수는 + 로 바로 더할 수 없어요. str(20)으로 바꿔야 해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`x = input()
print(x * 2)`, stdin: ['3'], ans: '33', wrong: ['6', '3 3', '오류'], why: 'x는 문자열 "3"이라서 2번 반복돼요.' },
      { t: 'predict', code: r`x = int(input())
print(x * 2)`, stdin: ['3'], ans: '6', wrong: ['33', '3 2', '오류'], why: 'int() 로 바꿨으니 숫자 계산이에요.' },
      { t: 'predict', code: r`print(int("12") + 1)`, ans: '13', wrong: ['121', '12 1', '오류'], why: '"12"를 정수로 바꿔서 더해요.' },
      { t: 'predict', code: r`print(float("2.5") * 2)`, ans: '5.0', wrong: ['5', '2.52.5', '오류'], why: 'float 에 2를 곱하면 float 예요.' },
      { t: 'predict', code: r`print(str(12) + "3")`, ans: '123', wrong: ['15', '12 3', '오류'], why: '12를 글자로 바꿔서 "3"과 이어 붙여요.' },
      { t: 'predict', code: r`print(int(3.9))`, ans: '3', wrong: ['4', '3.9', '3.0'], why: 'int()는 반올림이 아니라 소수점 아래를 버려요.' },
      { t: 'blank', code: r`n = ___(input())
print(n + 1)`, stdin: ['4'], ans: ['int'], extra: ['str', 'input', 'print'], out: '5', why: '숫자로 더하려면 int 로 바꿔야 해요.' },
      { t: 'blank', code: r`print("나이: " + ___(20))`, ans: ['str'], extra: ['int', 'float', 'input'], out: '나이: 20', why: '숫자를 글자로 바꾸는 함수는 str 이에요.' },
      { t: 'parsons', lines: [r`a = int(input())`, r`b = int(input())`, r`print(a + b)`], stdin: ['3', '4'], out: '7', why: '입력을 받아 변수에 담은 뒤 계산해요.' },
      { t: 'bug', code: r`n = input()
print(n + 1)`, stdin: ['5'], line: 1, fix: r`n = int(input())`, out: '6', why: 'input() 은 문자열이라 숫자 1과 더할 수 없어요. int() 로 바꿔요.' },
    ],
    tasks: [
      { q: '이름을 입력받아 <code>안녕하세요, ○○님!</code> 형태로 출력하세요. (입력이 <code>파이</code>면 <code>안녕하세요, 파이님!</code>)', starter: '', tests: [{ in: ['파이'], out: '안녕하세요, 파이님!' }, { in: ['코딩'], out: '안녕하세요, 코딩님!', hidden: true }], sol: r`name = input()
print("안녕하세요, " + name + "님!")`, hints: ['input()으로 이름을 받아 변수에 저장해요.', '문자열 이어 붙이기(+)를 사용해요.', '<code>print("안녕하세요, " + name + "님!")</code>'] },
      { q: '두 정수를 한 줄에 하나씩 입력받아 <b>합</b>을 출력하세요.', starter: '', tests: [{ in: ['3', '4'], out: '7' }, { in: ['10', '20'], out: '30', hidden: true }], sol: r`a = int(input())
b = int(input())
print(a + b)`, hints: ['input() 을 두 번 써요.', '숫자로 계산하려면 int() 로 바꿔요.', '<code>a = int(input())</code>, <code>b = int(input())</code>, <code>print(a + b)</code>'] },
      { q: '섭씨 온도를 입력받아 <b>화씨</b>로 바꿔 출력하세요. (화씨 = 섭씨 × 9 / 5 + 32)<br>예: 입력 <code>100</code> → <code>212.0</code>', starter: '', tests: [{ in: ['100'], out: '212.0' }, { in: ['0'], out: '32.0' }, { in: ['10'], out: '50.0', hidden: true }], sol: r`c = int(input())
print(c * 9 / 5 + 32)`, hints: ['입력을 정수로 바꿔 변수 c 에 저장해요.', '공식을 파이썬 식으로: c * 9 / 5 + 32', '<code>print(c * 9 / 5 + 32)</code> (/ 때문에 결과는 소수로 나와요)'] },
    ],
    boss: { q: '세 개의 정수를 한 줄에 하나씩 입력받아 <b>평균</b>을 출력하세요.<br>예: <code>10, 20, 30</code> → <code>20.0</code>', starter: '', tests: [{ in: ['10', '20', '30'], out: '20.0' }, { in: ['3', '3', '3'], out: '3.0' }, { in: ['1', '2', '6'], out: '3.0', hidden: true }], sol: r`a = int(input())
b = int(input())
c = int(input())
print((a + b + c) / 3)`, hints: ['input() 을 세 번 써서 세 변수에 저장해요.', '모두 int() 로 바꿔야 해요.', '<code>(a + b + c) / 3</code> — 덧셈에는 괄호!'] },
    sum: ['<code>input("질문")</code> — 입력을 받음, <b>항상 문자열</b>', '<code>int()</code> 정수 · <code>float()</code> 실수 · <code>str()</code> 문자열', '<code>int(3.9)</code> → 3 (버림)', '문자열 + 숫자는 TypeError → <code>str()</code> 로 변환', '<code>n = int(input())</code> 는 가장 자주 쓰는 입력 패턴'],
  },
  {
    id: 6, emoji: '✨', title: 'f-string과 출력 꾸미기', goal: 'f-string으로 값을 문장에 넣고, 소수 자릿수·천 단위·sep·end로 출력을 꾸며요',
    tips: 'f-string은 따옴표 앞에 <code>f</code>를 붙이고 <code>{}</code> 안에 변수나 식을 써요. 문자열 이어 붙이기보다 훨씬 편해요!',
    learn: [
      { h: 'f-string: 문장 속에 값 넣기', b: '<p>따옴표 앞에 <code>f</code>를 붙이면 <code>{ }</code> 안의 변수·식이 값으로 바뀌어 들어가요. <code>+</code>와 <code>str()</code>보다 훨씬 간단해요.</p>', code: r`name = "파이"
age = 3
print(f"{name}는 {age}살이에요")
print(f"3 + 4 = {3 + 4}")` },
      { h: '소수 자릿수와 천 단위 쉼표', b: '<p><code>{값:형식}</code>으로 모양을 정해요.</p><ul><li><code>{x:.2f}</code> 소수 둘째 자리까지</li><li><code>{n:,}</code> 천 단위 쉼표</li></ul>', code: r`pi = 3.14159
print(f"{pi:.2f}")
print(f"{pi:.1f}")
print(f"{1234567:,}원")` },
      { h: 'print의 sep 와 end', b: '<p><code>print()</code>는 값 사이를 <code>sep</code>(기본 공백)로 잇고, 끝에 <code>end</code>(기본 줄바꿈)를 붙여요. 바꿔 쓰면 모양을 꾸밀 수 있어요.</p>', code: r`print("a", "b", "c", sep="-")
print("loading", end="...")
print("완료")` },
      { h: 'f-string 속 표현식과 이름 조합', b: '<p><code>{ }</code> 안에는 계산식이나 문자열 연산도 쓸 수 있어요. 따옴표 안에 <code>{</code> 자체를 쓰려면 <code>{{</code> 처럼 두 번 써요.</p>', code: r`w, h = 3, 4
print(f"넓이: {w * h}")
print(f"{'=' * 10}")
print(f"{{중괄호}}")` },
    ],
    check: [
      { q: '<code>name = "파이"</code> 일 때 <code>f"안녕, {name}!"</code>의 결과는?', opts: ['안녕, 파이!', '안녕, {name}!', '안녕, name!', '오류'], ans: 0, why: 'f 를 붙이면 {name} 이 값으로 바뀌어요.' },
      { q: '<code>f"{2.5:.2f}"</code>의 결과는?', opts: ['2.50', '2.5', '2.55', '2'], ans: 0, why: '.2f 는 소수 둘째 자리까지 보여 줘요.' },
      { q: '<code>print("a", "b", sep="-")</code>의 결과는?', opts: ['a-b', 'a b', 'a,b', 'ab-'], ans: 0, why: 'sep 는 값 사이에 넣는 구분 글자예요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`name = "파이"
print(f"안녕, {name}!")`, ans: '안녕, 파이!', wrong: ['안녕, {name}!', '안녕, name!', '안녕, "파이"!'], why: 'f-string 은 {} 안의 변수를 값으로 바꿔요.' },
      { t: 'predict', code: r`x = 3
print(f"{x}의 제곱은 {x * x}")`, ans: '3의 제곱은 9', wrong: ['x의 제곱은 x * x', '3의 제곱은 3 * 3', '3의 제곱은 6'], why: '{} 안에서는 계산도 돼요.' },
      { t: 'predict', code: r`print(f"{3.14159:.2f}")`, ans: '3.14', wrong: ['3.1', '3.142', '3.14159'], why: '.2f → 소수 둘째 자리 (반올림).' },
      { t: 'predict', code: r`print(f"{1234567:,}")`, ans: '1,234,567', wrong: ['1234567', '1.234.567', '1 234 567'], why: ':, 는 천 단위 쉼표예요.' },
      { t: 'predict', code: r`print("a", "b", sep="-")`, ans: 'a-b', wrong: ['a b', 'a,b', 'a-b-'], why: 'sep 가 사이에 들어가요.' },
      { t: 'predict', code: r`print("a", end="")
print("b")`, ans: 'ab', wrong: ['a b', 'a\nb', 'b'], why: 'end="" 면 줄바꿈 없이 이어서 출력해요.' },
      { t: 'blank', code: r`age = 20
print(___"나이: {age}")`, ans: ['f'], extra: ['s', 'r', 'str'], out: '나이: 20', why: 'f-string 은 따옴표 앞에 f.' },
      { t: 'blank', code: r`x = 2.5
print(f"{x:___f}")`, ans: ['.2'], extra: ['2.', '%2', ',2'], out: '2.50', why: '.2f → 소수 둘째 자리.' },
      { t: 'parsons', lines: [r`name = "파이"`, r`age = 3`, r`print(f"{name}는 {age}살")`], out: '파이는 3살', why: '변수를 먼저 만들고 출력해요.' },
      { t: 'bug', code: r`name = "파이"
print("안녕 {name}")`, line: 2, fix: r`print(f"안녕 {name}")`, out: '안녕 파이', why: '따옴표 앞에 f 가 없으면 {name} 이 그냥 글자로 출력돼요.' },
    ],
    tasks: [
      { q: '아래 변수를 사용해 <code>커피 가격: 4500원</code>이 출력되게 f-string으로 출력하세요.', starter: 'item = "커피"\nprice = 4500\n', tests: [{ out: '커피 가격: 4500원' }], need: [r`f["']`], needMsg: 'f-string(f"...")을 사용해 주세요.', sol: r`item = "커피"
price = 4500
print(f"{item} 가격: {price}원")`, hints: ['따옴표 앞에 f 를 붙여요.', '{item} 과 {price} 로 변수를 넣어요.', '<code>print(f"{item} 가격: {price}원")</code>'] },
      { q: '이름과 나이를 한 줄씩 입력받아 <code>○○님은 ○○살입니다</code>를 출력하세요.<br>예: 입력 <code>파이</code>, <code>3</code> → <code>파이님은 3살입니다</code>', starter: '', tests: [{ in: ['파이', '3'], out: '파이님은 3살입니다' }, { in: ['코딩', '10'], out: '코딩님은 10살입니다', hidden: true }], sol: r`name = input()
age = input()
print(f"{name}님은 {age}살입니다")`, hints: ['input() 을 두 번 써요.', '나이는 계산하지 않으니 문자열 그대로여도 괜찮아요.', '<code>print(f"{name}님은 {age}살입니다")</code>'] },
      { q: '<code>x = 3.14159</code>를 <b>소수 둘째 자리</b>까지 반올림해 <code>3.14</code>로 출력하세요. f-string 형식을 써 보세요.', starter: 'x = 3.14159\n', tests: [{ out: '3.14' }], need: [r`:\.2f`], needMsg: '{x:.2f} 형식을 사용해 보세요.', sol: r`x = 3.14159
print(f"{x:.2f}")`, hints: ['f-string 안에서 {x} 처럼 변수를 써요.', '변수 뒤에 :.2f 를 붙여요.', '<code>print(f"{x:.2f}")</code>'] },
    ],
    boss: { q: '아래 변수로 영수증을 출력하세요. <b>f-string</b>과 <b>천 단위 쉼표</b>를 사용해요.<pre style="margin:6px 0">커피 x 3\n합계: 13,500원</pre>', starter: 'item = "커피"\nprice = 4500\nqty = 3\n', tests: [{ out: '커피 x 3\n합계: 13,500원' }], need: [r`:,`], needMsg: '천 단위 쉼표 형식 {값:,} 을 사용해 보세요.', sol: r`item = "커피"
price = 4500
qty = 3
print(f"{item} x {qty}")
print(f"합계: {price * qty:,}원")`, hints: ['첫 줄은 {item} 과 {qty} 를 사용해요.', '합계는 price * qty 를 {} 안에서 계산해요.', '<code>{price * qty:,}</code> 처럼 쉼표 형식을 붙여요.'] },
    sum: ['<code>f"…{변수}…"</code> — 문장 속에 값 넣기', '<code>{x:.2f}</code> 소수 둘째 자리 · <code>{n:,}</code> 천 단위 쉼표', '<code>print(a, b, sep="-")</code> 값 사이 글자 바꾸기', '<code>print("x", end="")</code> 줄바꿈 없이 출력', '{ } 안에서는 계산식도 가능'],
  },
];
