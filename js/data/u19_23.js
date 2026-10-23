const r = String.raw;

export const U19 = [
  {
    id: 19, emoji: '🔢', title: '문자열 인덱싱', goal: '문자열의 글자를 번호(인덱스)로 꺼내고, 길이를 재요',
    tips: '번호는 <b>0부터</b> 시작해요! 마지막 글자는 <code>-1</code>번으로 꺼낼 수 있어요.',
    learn: [
      { h: '글자마다 번호가 있어요', b: '<p>문자열은 글자가 줄지어 있는 것이고, 글자마다 <b>0부터 시작하는 번호(인덱스)</b>가 있어요. <code>s[번호]</code>로 그 글자를 꺼내요.</p><table><tr><th>글자</th><td>P</td><td>y</td><td>t</td><td>h</td><td>o</td><td>n</td></tr><tr><th>번호</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr></table>', code: r`s = "Python"
print(s[0])
print(s[3])
print(s[5])` },
      { h: '음수 번호: 뒤에서부터', b: '<p><code>-1</code>은 마지막 글자, <code>-2</code>는 끝에서 두 번째예요. 끝 글자를 꺼낼 때 길이를 몰라도 돼서 편해요.</p>', code: r`s = "Python"
print(s[-1])
print(s[-2])` },
      { h: 'len(): 글자 수', b: '<p><code>len(s)</code>는 글자 수를 돌려줘요. 마지막 번호는 <code>len(s) - 1</code>이에요. 범위를 벗어난 번호를 쓰면 <b>IndexError</b>가 나요.</p>', code: r`s = "Python"
print(len(s))
print(s[len(s) - 1])
print(len("안녕하세요"))` },
      { h: '문자열은 바꿀 수 없어요', b: '<p>문자열의 글자를 직접 바꾸는 <code>s[0] = "J"</code> 같은 코드는 오류예요(<b>불변</b>). 바꾸려면 새 문자열을 만들어야 해요.</p>', code: r`s = "Python"
s[0] = "J"`, err: true },
    ],
    check: [
      { q: '<code>s = "Python"</code>에서 <code>s[1]</code>은?', opts: ['y', 'P', 't', 'h'], ans: 0, why: '번호는 0부터라 1번은 두 번째 글자 y.' },
      { q: '<code>s[-1]</code>은 어떤 글자일까요?', opts: ['마지막 글자', '첫 글자', '오류', '빈 문자열'], ans: 0, why: '-1 은 끝에서 첫 번째 글자예요.' },
      { q: '<code>len("abc")</code>의 값은?', opts: ['3', '2', '4', 'abc'], ans: 0, why: '글자 수는 3개.' },
    ],
    puzzles: [
      { t: 'predict', code: r`s = "Python"
print(s[0])`, ans: 'P', wrong: ['y', 'Python', 'n'], why: '0번이 첫 글자.' },
      { t: 'predict', code: r`s = "Python"
print(s[3])`, ans: 'h', wrong: ['t', 'o', 'y'], why: 'P0 y1 t2 h3' },
      { t: 'predict', code: r`s = "Python"
print(s[-1])`, ans: 'n', wrong: ['P', 'o', '오류'], why: '-1은 마지막 글자.' },
      { t: 'predict', code: r`print(len("안녕하세요"))`, ans: '5', wrong: ['4', '6', '10'], why: '글자 수 5개.' },
      { t: 'predict', code: r`s = "hello"
print(s[0] + s[-1])`, ans: 'ho', wrong: ['he', 'ol', 'oh'], why: '첫 글자 h + 마지막 글자 o' },
      { t: 'predict', code: r`s = "abc"
print(s[len(s) - 1])`, ans: 'c', wrong: ['b', 'a', '3'], why: '마지막 번호는 길이 - 1.' },
      { t: 'predict', code: r`s = "cat"
print(s[1] * 3)`, ans: 'aaa', wrong: ['catcatcat', 'ccc', 'tttt'], why: 's[1]은 a, 3번 반복.' },
      { t: 'blank', code: r`s = "Python"
print(s[___])`, ans: ['2'], extra: ['3', '1', '6'], out: 't', why: 't 는 2번.' },
      { t: 'blank', code: r`s = "hello"
print(s[___])`, ans: ['-1'], extra: ['0', '5', '-0'], out: 'o', why: '마지막 글자는 -1.' },
      { t: 'parsons', lines: [r`word = "banana"`, r`print(word[0])`, r`print(word[-1])`, r`print(len(word))`], out: 'b\na\n6', why: '위에서 아래로 차례로 실행돼요.' },
      { t: 'bug', code: r`s = "abc"
print(s[3])`, line: 2, fix: r`print(s[2])`, out: 'c', why: 'abc는 0, 1, 2번까지만 있어요. 3번은 범위 밖(IndexError).' },
      { t: 'bug', code: r`s = "cat"
s[0] = "b"
print(s)`, line: 2, fix: r`s = "b" + s[1:]`, out: 'bat', why: '문자열은 직접 바꿀 수 없어요. 새 문자열을 만들어요.' },
    ],
    tasks: [
      { q: '문자열을 입력받아 <b>마지막 글자</b>를 출력하세요.', starter: '', tests: [{ in: ['Python'], out: 'n' }, { in: ['a'], out: 'a', hidden: true }, { in: ['안녕'], out: '녕' }], sol: r`s = input()
print(s[-1])`, hints: ['음수 번호를 쓰면 편해요.', '마지막은 -1번.', '<code>print(s[-1])</code>'] },
      { q: '문자열을 입력받아 <b>첫 글자와 마지막 글자</b>를 이어서 출력하세요. (예: <code>hello</code> → <code>ho</code>)', starter: '', tests: [{ in: ['hello'], out: 'ho' }, { in: ['ab'], out: 'ab', hidden: true }, { in: ['Python'], out: 'Pn' }], sol: r`s = input()
print(s[0] + s[-1])`, hints: ['첫 글자는 0번, 마지막은 -1번.', '두 글자를 + 로 이어요.', '<code>s[0] + s[-1]</code>'] },
      { q: '문자열을 입력받아 <code>○○ 글자입니다</code> 형태로 <b>글자 수</b>를 출력하세요. (예: <code>안녕하세요</code> → <code>5 글자입니다</code>)', starter: '', tests: [{ in: ['안녕하세요'], out: '5 글자입니다' }, { in: ['a'], out: '1 글자입니다', hidden: true }, { in: ['Python'], out: '6 글자입니다' }], sol: r`s = input()
print(f"{len(s)} 글자입니다")`, hints: ['글자 수는 len().', 'f-string 안에서 {len(s)} 를 쓸 수 있어요.', '<code>print(f"{len(s)} 글자입니다")</code>'] },
    ],
    boss: { q: '<b>홀수 길이</b>의 문자열을 입력받아 <b>가운데 글자</b>를 출력하세요. (예: <code>abcde</code> → <code>c</code>, <code>a</code> → <code>a</code>)<br>힌트: 가운데 번호는 길이를 2로 나눈 몫이에요.', starter: '', tests: [{ in: ['abcde'], out: 'c' }, { in: ['a'], out: 'a', hidden: true }, { in: ['파이썬'], out: '이' }, { in: ['1234567'], out: '4', hidden: true }], sol: r`s = input()
print(s[len(s) // 2])`, hints: ['길이가 5이면 가운데는 2번 글자예요.', '번호는 len(s) // 2.', '<code>print(s[len(s) // 2])</code>'] },
    sum: ['인덱스는 0부터 · <code>s[0]</code> 첫 글자, <code>s[-1]</code> 마지막', '<code>len(s)</code> 글자 수 · 마지막 번호는 <code>len(s) - 1</code>', '범위 밖 번호 → IndexError', '문자열은 불변 — <code>s[0] = "x"</code> 는 오류', '가운데 글자: <code>s[len(s) // 2]</code>'],
  },
  {
    id: 20, emoji: '✂️', title: '문자열 슬라이싱', goal: '문자열의 일부를 [시작:끝:간격]으로 잘라 내요',
    tips: '슬라이싱의 <b>끝 번호는 포함되지 않아요</b>. <code>s[1:3]</code>은 1번, 2번 글자예요. range와 똑같은 규칙이에요.',
    learn: [
      { h: 's[시작:끝]', b: '<p><code>s[a:b]</code>는 a번부터 <b>b번 직전</b>까지 잘라 새 문자열을 만들어요.</p>', code: r`s = "Python"
print(s[0:2])
print(s[2:5])
print(s[1:4])` },
      { h: '생략해도 돼요', b: '<p>시작을 생략하면 처음부터, 끝을 생략하면 끝까지예요. 음수 번호도 쓸 수 있어요.</p>', code: r`s = "Python"
print(s[:3])
print(s[3:])
print(s[-2:])
print(s[:])` },
      { h: '간격(step)과 뒤집기', b: '<p><code>s[::2]</code>는 2칸씩 건너뛰고, <code>s[::-1]</code>은 <b>거꾸로</b> 읽어요. 문자열 뒤집기의 대표 방법이에요!</p>', code: r`s = "Python"
print(s[::2])
print(s[::-1])
print(s[1::2])` },
      { h: '범위를 넘어가도 오류가 나지 않아요', b: '<p>슬라이싱은 번호가 범위를 벗어나도 <b>가능한 부분만</b> 돌려줘요. 인덱싱(<code>s[10]</code>)과 다른 점이에요.</p>', code: r`s = "abc"
print(s[1:100])
print(s[5:])
print(repr(s[5:]))` },
    ],
    check: [
      { q: '<code>"Python"[1:3]</code>의 결과는?', opts: ['yt', 'yth', 'Py', 'th'], ans: 0, why: '1번, 2번 글자 (3번은 제외).' },
      { q: '문자열을 뒤집는 슬라이싱은?', opts: ['s[::-1]', 's[-1]', 's[1::]', 's[:-1]'], ans: 0, why: '간격을 -1로 하면 거꾸로 읽어요.' },
      { q: '<code>s[:3]</code>은 무엇일까요?', opts: ['앞 세 글자', '3번 글자', '뒤 세 글자', '3글자 건너뛰기'], ans: 0, why: '시작 생략 → 처음부터 3번 직전까지.' },
    ],
    puzzles: [
      { t: 'predict', code: r`s = "Python"
print(s[0:2])`, ans: 'Py', wrong: ['Pyt', 'yt', 'P'], why: '0, 1번 글자.' },
      { t: 'predict', code: r`s = "Python"
print(s[2:5])`, ans: 'tho', wrong: ['thon', 'yth', 'th'], why: '2, 3, 4번 글자.' },
      { t: 'predict', code: r`s = "Python"
print(s[:3])`, ans: 'Pyt', wrong: ['Pyth', 'yth', 'hon'], why: '처음부터 3번 직전까지.' },
      { t: 'predict', code: r`s = "Python"
print(s[-2:])`, ans: 'on', wrong: ['Py', 'o', 'n'], why: '끝에서 두 번째부터 끝까지.' },
      { t: 'predict', code: r`print("abcdef"[::2])`, ans: 'ace', wrong: ['bdf', 'abcdef', 'fdb'], why: '0, 2, 4번 글자.' },
      { t: 'predict', code: r`print("abc"[::-1])`, ans: 'cba', wrong: ['abc', 'bca', 'cab'], why: '거꾸로.' },
      { t: 'predict', code: r`s = "abc"
print(s[1:100])`, ans: 'bc', wrong: ['오류', 'b', 'abc'], why: '슬라이싱은 범위를 넘어도 가능한 부분만 돌려줘요.' },
      { t: 'blank', code: r`s = "Python"
print(s[___:3])`, ans: ['1'], extra: ['0', '3', '2'], out: 'yt', why: '1번부터 3번 직전까지 → yt' },
      { t: 'blank', code: r`s = "hello"
print(s[___])`, ans: ['::-1'], extra: ['-1', '1::', ':-1'], out: 'olleh', why: '뒤집기는 [::-1]' },
      { t: 'parsons', lines: [r`s = "2024-05-30"`, r`print(s[:4])`, r`print(s[5:7])`, r`print(s[8:])`], out: '2024\n05\n30', why: '연, 월, 일을 차례로 잘라 내요.' },
      { t: 'bug', code: r`s = "Python"
print(s[1,3])`, line: 2, fix: r`print(s[1:3])`, out: 'yt', why: '슬라이싱은 쉼표가 아니라 콜론(:)을 써요.' },
      { t: 'bug', code: r`s = "Python"
print(s[2:5])  # 'thon' 전체를 출력하고 싶어요`, line: 2, fix: r`print(s[2:])`, out: 'thon', why: '끝까지 가려면 끝 번호를 생략해요. s[2:5]는 5번 직전까지만이에요.' },
    ],
    tasks: [
      { q: '문자열을 입력받아 <b>앞의 세 글자</b>를 출력하세요.', starter: '', tests: [{ in: ['Python'], out: 'Pyt' }, { in: ['ab'], out: 'ab', hidden: true }, { in: ['안녕하세요'], out: '안녕하' }], sol: r`s = input()
print(s[:3])`, hints: ['처음부터 3번 직전까지.', '시작 번호는 생략할 수 있어요.', '<code>s[:3]</code>'] },
      { q: '문자열을 입력받아 <b>거꾸로 뒤집어</b> 출력하세요.', starter: '', tests: [{ in: ['hello'], out: 'olleh' }, { in: ['a'], out: 'a', hidden: true }, { in: ['파이썬'], out: '썬이파' }], sol: r`s = input()
print(s[::-1])`, hints: ['간격에 음수를 쓰면 거꾸로 가요.', '시작과 끝은 생략해요.', '<code>s[::-1]</code>'] },
      { q: '문자열을 입력받아 <b>0, 2, 4번째 …(짝수 번호) 글자</b>만 이어서 출력하세요. (예: <code>abcdef</code> → <code>ace</code>)', starter: '', tests: [{ in: ['abcdef'], out: 'ace' }, { in: ['a'], out: 'a', hidden: true }, { in: ['012345678'], out: '02468' }], sol: r`s = input()
print(s[::2])`, hints: ['한 칸 건너뛰며 가져와요.', '간격(step)이 2.', '<code>s[::2]</code>'] },
    ],
    boss: { q: '<code>990101-1234567</code> 처럼 <b>생년월일6자리-숫자7자리</b> 형태의 문자열을 입력받아 <code>99년 01월 01일</code> 형태로 출력하세요. (슬라이싱 사용)', starter: '', tests: [{ in: ['990101-1234567'], out: '99년 01월 01일' }, { in: ['050315-4567890'], out: '05년 03월 15일' }, { in: ['001231-1111111'], out: '00년 12월 31일', hidden: true }], need: [r`\[[^\]]*:[^\]]*\]`], needMsg: '슬라이싱([a:b])을 사용해 주세요.', sol: r`s = input()
print(f"{s[0:2]}년 {s[2:4]}월 {s[4:6]}일")`, hints: ['연도는 0~2번, 월은 2~4번, 일은 4~6번 글자예요.', '각각 s[0:2], s[2:4], s[4:6] 으로 잘라요.', 'f-string으로 "년", "월", "일"을 붙여 줘요.'] },
    sum: ['<code>s[a:b]</code> a번 ~ b번 <b>직전</b>', '<code>s[:3]</code> 앞 3개 · <code>s[3:]</code> 3번부터 끝 · <code>s[-2:]</code> 뒤 2개', '<code>s[::2]</code> 2칸 간격 · <code>s[::-1]</code> 뒤집기', '슬라이싱은 범위를 넘어도 오류 없음', '인덱싱은 0부터, 끝 번호는 제외'],
  },
  {
    id: 21, emoji: '🛠️', title: '문자열 메서드', goal: '대소문자 변환, 공백 제거, 바꾸기, 찾기, 개수 세기 등 문자열 도구를 사용해요',
    tips: '메서드는 <code>값.이름()</code>으로 쓰는 기능이에요. 문자열 메서드는 <b>원본을 바꾸지 않고 새 문자열을 돌려줘요</b>. 결과를 변수에 담아야 해요!',
    learn: [
      { h: '대소문자와 공백 정리', b: '<ul><li><code>s.upper()</code> 모두 대문자 · <code>s.lower()</code> 모두 소문자</li><li><code>s.strip()</code> 앞뒤 공백 제거</li></ul>', code: r`s = "  Hello World  "
print(s.upper())
print(s.lower())
print("[" + s.strip() + "]")` },
      { h: '바꾸기와 개수 세기', b: '<ul><li><code>s.replace("옛", "새")</code> 글자 바꾸기</li><li><code>s.count("x")</code> x가 몇 번 나오는지</li><li><code>s.find("x")</code> 처음 나오는 번호(없으면 -1)</li></ul>', code: r`s = "banana"
print(s.replace("a", "o"))
print(s.count("a"))
print(s.find("n"))
print(s.find("z"))` },
      { h: '시작·끝·종류 검사', b: '<ul><li><code>s.startswith("ab")</code> / <code>s.endswith("z")</code></li><li><code>s.isdigit()</code> 숫자로만 이루어졌는지</li><li><code>s.isalpha()</code> 글자로만 이루어졌는지</li></ul>', code: r`print("python".startswith("py"))
print("python".endswith("on"))
print("123".isdigit(), "12a".isdigit())
print("abc".isalpha())` },
      { h: '원본은 그대로예요', b: '<p>문자열 메서드는 새 값을 <b>돌려줄 뿐</b> 원본을 바꾸지 않아요. 바뀐 결과를 쓰려면 변수에 다시 저장해요.</p>', code: r`s = "hello"
s.upper()
print(s)
s = s.upper()
print(s)` },
    ],
    check: [
      { q: '<code>"hello".upper()</code>의 결과는?', opts: ['HELLO', 'Hello', 'hello', 'hELLO'], ans: 0, why: 'upper는 모두 대문자로 바꿔요.' },
      { q: '<code>s = "abc"</code> 다음 <code>s.upper()</code>만 실행하면 s는?', opts: ['여전히 "abc"', '"ABC"', '오류', 'None'], ans: 0, why: '새 값을 돌려줄 뿐 원본은 바뀌지 않아요.' },
      { q: '<code>"banana".count("a")</code>의 결과는?', opts: ['3', '2', '1', '6'], ans: 0, why: 'banana 에는 a가 3개.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print("Hello".upper())`, ans: 'HELLO', wrong: ['hello', 'Hello', 'hELLO'], why: '모두 대문자.' },
      { t: 'predict', code: r`print("  hi  ".strip() + "!")`, ans: 'hi!', wrong: ['  hi  !', 'hi !', ' hi!'], why: '앞뒤 공백이 제거돼요.' },
      { t: 'predict', code: r`print("banana".replace("a", "o"))`, ans: 'bonono', wrong: ['banana', 'bonana', 'bnn'], why: '모든 a를 o로 바꿔요.' },
      { t: 'predict', code: r`print("banana".count("an"))`, ans: '2', wrong: ['3', '1', '0'], why: '"an"이 2번 나와요: b-an-an-a.' },
      { t: 'predict', code: r`print("banana".find("n"), "banana".find("z"))`, ans: '2 -1', wrong: ['3 -1', '2 0', '2 None'], why: 'find는 처음 번호, 없으면 -1.' },
      { t: 'predict', code: r`s = "hello"
s.upper()
print(s)`, ans: 'hello', wrong: ['HELLO', 'Hello', 'None'], why: '결과를 변수에 저장하지 않아서 원본은 그대로예요.' },
      { t: 'predict', code: r`print("123".isdigit(), "12a".isdigit())`, ans: 'True False', wrong: ['False True', 'True True', '123 12a'], why: '"12a"에는 숫자가 아닌 글자가 있어요.' },
      { t: 'blank', code: r`s = "Python"
print(s.___())`, ans: ['lower'], extra: ['upper', 'strip', 'low'], out: 'python', why: '소문자로 바꾸는 메서드는 lower.' },
      { t: 'blank', code: r`s = "I like cats"
print(s.___("cats", "dogs"))`, ans: ['replace'], extra: ['count', 'find', 'change'], out: 'I like dogs', why: '바꾸는 메서드는 replace.' },
      { t: 'parsons', lines: [r`s = "  Python  "`, r`s = s.strip()`, r`s = s.upper()`, r`print(s)`], out: 'PYTHON', why: '결과를 변수에 다시 저장하며 이어 가요.' },
      { t: 'bug', code: r`s = "hello"
s.upper()
print(s)`, line: 2, fix: r`s = s.upper()`, out: 'HELLO', why: '메서드의 결과를 변수에 저장해야 바뀐 값을 쓸 수 있어요.' },
      { t: 'bug', code: r`s = "hello"
print(s.Upper())`, line: 2, fix: r`print(s.upper())`, out: 'HELLO', why: '메서드 이름도 대소문자를 구분해요: upper.' },
    ],
    tasks: [
      { q: '문자열을 입력받아 <b>모두 대문자</b>로 바꿔 출력하세요.', starter: '', tests: [{ in: ['hello'], out: 'HELLO' }, { in: ['Python 3'], out: 'PYTHON 3' }, { in: ['ABC'], out: 'ABC', hidden: true }], sol: r`s = input()
print(s.upper())`, hints: ['문자열 메서드를 써요.', '대문자로 바꾸는 메서드는 upper().', '<code>print(s.upper())</code>'] },
      { q: '앞뒤에 공백이 있을 수 있는 문자열을 입력받아 <b>공백을 제거한 글자 수</b>를 출력하세요.', starter: '', tests: [{ in: ['  hi  '], out: '2' }, { in: ['hello'], out: '5' }, { in: ['   a'], out: '1', hidden: true }], sol: r`s = input()
print(len(s.strip()))`, hints: ['앞뒤 공백 제거는 strip().', 'strip() 결과의 길이를 len() 으로.', '<code>len(s.strip())</code>'] },
      { q: '문장 s와 글자 c를 한 줄씩 입력받아 s 안에 c가 <b>몇 번</b> 나오는지 출력하세요.', starter: '', tests: [{ in: ['banana', 'a'], out: '3' }, { in: ['hello world', 'o'], out: '2' }, { in: ['abc', 'z'], out: '0', hidden: true }], sol: r`s = input()
c = input()
print(s.count(c))`, hints: ['세는 메서드는 count.', '입력은 두 번 받아요.', '<code>s.count(c)</code>'] },
    ],
    boss: { q: '문장을 입력받아 다음 순서로 정리해 출력하세요.<br>① 앞뒤 공백 제거 ② 모두 소문자로 ③ 단어 <code>bad</code>를 <code>***</code>로 바꾸기<br>예: <code>  This is BAD  </code> → <code>this is ***</code>', starter: '', tests: [{ in: ['  This is BAD  '], out: 'this is ***' }, { in: ['Bad bad BAD'], out: '*** *** ***' }, { in: ['all good'], out: 'all good', hidden: true }], sol: r`s = input()
s = s.strip()
s = s.lower()
s = s.replace("bad", "***")
print(s)`, hints: ['메서드를 차례로 적용하고 매번 변수에 저장해요.', '순서가 중요해요: lower() 를 한 뒤에 replace().', '<code>s = s.strip().lower().replace("bad", "***")</code> 처럼 이어 쓸 수도 있어요.'] },
    sum: ['<code>upper()</code> <code>lower()</code> <code>strip()</code> — 대소문자·공백', '<code>replace(옛, 새)</code> <code>count(x)</code> <code>find(x)</code> (없으면 -1)', '<code>startswith</code> <code>endswith</code> <code>isdigit</code> <code>isalpha</code>', '메서드는 새 값을 돌려줄 뿐 원본은 그대로 → 변수에 저장', '메서드는 이어 쓸 수 있다: <code>s.strip().lower()</code>'],
  },
  {
    id: 22, emoji: '🔍', title: '문자열 순회와 검사', goal: 'for로 글자를 하나씩 검사해 개수를 세거나 새 문자열을 만들어요',
    tips: '문자열을 <b>한 글자씩 훑으며</b> 조건을 검사하고, 결과 문자열에 <code>+=</code>로 이어 붙이는 것이 핵심 패턴이에요.',
    learn: [
      { h: '글자 순회와 개수 세기', b: '<p><code>for ch in s:</code>로 글자를 하나씩 보며 조건이 맞을 때 <code>count += 1</code> 해요.</p>', code: r`s = "programming"
count = 0
for ch in s:
    if ch in "aeiou":
        count += 1
print(count)` },
      { h: '새 문자열 만들기', b: '<p>빈 문자열 <code>""</code>로 시작해 조건에 맞는 글자를 <code>+=</code>로 이어 붙여 새 문자열을 만들어요.</p>', code: r`s = "Hello World"
result = ""
for ch in s:
    if ch.isupper():
        result += ch
print(result)` },
      { h: '글자 종류 검사', b: '<ul><li><code>ch.isupper()</code> / <code>ch.islower()</code> 대·소문자</li><li><code>ch.isdigit()</code> 숫자</li><li><code>ch.isalpha()</code> 글자</li><li><code>ch.isspace()</code> 공백</li></ul>', code: r`for ch in "a1 B":
    print(repr(ch), ch.isalpha(), ch.isdigit(), ch.isspace())` },
      { h: 'ord()와 chr(): 글자 ↔ 번호', b: '<p>컴퓨터는 글자마다 번호를 매겨 둬요. <code>ord("a")</code>는 글자의 번호(97), <code>chr(97)</code>은 번호의 글자예요. 암호나 글자 계산에 써요.</p>', code: r`print(ord("a"), ord("b"))
print(chr(65), chr(66))
print(chr(ord("a") + 2))` },
    ],
    check: [
      { q: '조건에 맞는 글자만 모아 새 문자열을 만들 때 시작값은?', opts: ['빈 문자열 ""', '0', 'None', '첫 글자'], ans: 0, why: '"" 에 글자를 이어 붙여 가요.' },
      { q: '<code>"a".isdigit()</code>의 결과는?', opts: ['False', 'True', 'a', '오류'], ans: 0, why: 'a는 숫자가 아니에요.' },
      { q: '<code>ord("a")</code>는 무엇을 돌려줄까요?', opts: ['글자 a의 번호(97)', 'a의 위치', 'a의 개수', '"A"'], ans: 0, why: 'ord는 글자 → 번호.' },
    ],
    puzzles: [
      { t: 'predict', code: r`count = 0
for ch in "hello":
    if ch == "l":
        count += 1
print(count)`, ans: '2', wrong: ['1', '3', '5'], why: 'l 은 두 번 나와요.' },
      { t: 'predict', code: r`result = ""
for ch in "Hello World":
    if ch.isupper():
        result += ch
print(result)`, ans: 'HW', wrong: ['Hello', 'World', 'H W'], why: '대문자 H, W만 모아요.' },
      { t: 'predict', code: r`s = ""
for ch in "abc":
    s = ch + s
print(s)`, ans: 'cba', wrong: ['abc', 'bca', 'acb'], why: '새 글자를 앞에 붙이면 뒤집혀요.' },
      { t: 'predict', code: r`n = 0
for ch in "a1b2c3":
    if ch.isdigit():
        n += int(ch)
print(n)`, ans: '6', wrong: ['123', '3', '0'], why: '숫자 1+2+3 = 6' },
      { t: 'predict', code: r`print(ord("a"), chr(66))`, ans: '97 B', wrong: ['a B', '97 66', 'a 66'], why: 'ord("a") = 97, chr(66) = "B".' },
      { t: 'predict', code: r`print(chr(ord("a") + 3))`, ans: 'd', wrong: ['c', 'a3', '100'], why: 'a에서 3칸 뒤 글자는 d.' },
      { t: 'blank', code: r`count = 0
for ch in "banana":
    if ch ___ "a":
        count += 1
print(count)`, ans: ['=='], extra: ['=', 'in', '!='], out: '3', why: '같은 글자인지 ==.' },
      { t: 'blank', code: r`s = ""
for ch in "abc":
    s ___ ch.upper()
print(s)`, ans: ['+='], extra: ['=', '-=', '=='], out: 'ABC', why: '글자를 이어 붙여 가요.' },
      { t: 'parsons', lines: [r`result = ""`, r`for ch in "a1b2":`, r`    if ch.isalpha():`, r`        result += ch`, r`print(result)`], out: 'ab', why: '빈 문자열 → 반복 → 조건 → 이어 붙이기 → 출력.' },
      { t: 'bug', code: r`count = 0
for ch in "banana":
    if ch == "a":
        count = 1
print(count)`, line: 4, fix: r`        count += 1`, out: '3', why: '개수를 셀 때는 count = 1 이 아니라 count += 1.' },
      { t: 'bug', code: r`result = ""
for ch in "abc":
    result = ch.upper()
print(result)`, line: 3, fix: r`    result += ch.upper()`, out: 'ABC', why: '이어 붙이려면 += 예요. = 은 매번 덮어써요.' },
    ],
    tasks: [
      { q: '문자열(소문자)을 입력받아 <b>모음(a, e, i, o, u)의 개수</b>를 출력하세요.', starter: '', tests: [{ in: ['programming'], out: '3' }, { in: ['sky'], out: '0', hidden: true }, { in: ['education'], out: '5' }], sol: r`s = input()
count = 0
for ch in s:
    if ch in "aeiou":
        count += 1
print(count)`, hints: ['글자를 하나씩 순회해요.', '모음이면 count 를 늘려요.', '<code>if ch in "aeiou":</code>'] },
      { q: '문자열을 입력받아 <b>대문자만 모아서</b> 이어 붙인 문자열을 출력하세요.', starter: '', tests: [{ in: ['Hello World'], out: 'HW' }, { in: ['python'], out: '', hidden: true }, { in: ['ABCdef'], out: 'ABC' }], sol: r`s = input()
result = ""
for ch in s:
    if ch.isupper():
        result += ch
print(result)`, hints: ['빈 문자열 result 로 시작해요.', '대문자인지 ch.isupper().', '맞으면 result += ch.'] },
      { q: '문자열을 입력받아 <b>숫자 글자만 골라 그 합</b>을 출력하세요. (예: <code>a1b2c3</code> → <code>6</code>)', starter: '', tests: [{ in: ['a1b2c3'], out: '6' }, { in: ['abc'], out: '0', hidden: true }, { in: ['9x9'], out: '18' }], sol: r`s = input()
total = 0
for ch in s:
    if ch.isdigit():
        total += int(ch)
print(total)`, hints: ['숫자 글자는 ch.isdigit().', '글자를 숫자로 바꾸려면 int(ch).', '합계 변수를 0으로 시작해요.'] },
    ],
    boss: { q: '<b>시저 암호</b>: 소문자 문자열을 입력받아 각 글자를 알파벳에서 <b>3칸 뒤</b>로 밀어 출력하세요. (x→a, y→b, z→c로 돌아가요) 알파벳이 아닌 글자는 그대로 둬요.<br>예: <code>abc xyz</code> → <code>def abc</code>', starter: '', tests: [{ in: ['abc xyz'], out: 'def abc' }, { in: ['hello'], out: 'khoor' }, { in: ['a b!'], out: 'd e!', hidden: true }, { in: ['zzz'], out: 'ccc', hidden: true }], sol: r`s = input()
result = ""
for ch in s:
    if ch.isalpha():
        result += chr((ord(ch) - ord("a") + 3) % 26 + ord("a"))
    else:
        result += ch
print(result)`, hints: ['글자 번호는 ord(ch), 알파벳 순서는 ord(ch) - ord("a").', '3을 더하고 26으로 나눈 나머지(%)를 쓰면 z 다음에 a로 돌아가요.', '<code>chr((ord(ch) - ord("a") + 3) % 26 + ord("a"))</code>'] },
    sum: ['<code>for ch in s:</code> 글자 순회 + 조건으로 개수 세기·모으기', '새 문자열: <code>result = ""</code> → <code>result += ch</code>', '<code>isupper</code> <code>islower</code> <code>isdigit</code> <code>isalpha</code> <code>isspace</code>', '<code>ord(글자)</code> 번호 · <code>chr(번호)</code> 글자', '앞에 붙이면 뒤집힘: <code>s = ch + s</code>'],
  },
  {
    id: 23, emoji: '🔠', title: '미니 프로젝트: 문자열 도구상자', goal: '회문, 단어 세기, 애너그램, 단어 뒤집기 같은 문자열 도구를 만들어요',
    tips: '여러 기능을 <b>조합</b>하면 쓸모 있는 도구가 돼요. strip, lower, replace, split, 슬라이싱을 어떻게 이어 붙일지 생각해 보세요.',
    learn: [
      { h: '회문(Palindrome)', b: '<p>거꾸로 읽어도 같은 말이에요(기러기, level). <code>s == s[::-1]</code> 한 줄이면 판별할 수 있어요. 대소문자·공백을 무시하려면 먼저 정리해요.</p>', code: r`s = "level"
print(s == s[::-1])

t = "A man a plan a canal Panama"
clean = t.replace(" ", "").lower()
print(clean == clean[::-1])` },
      { h: '단어 쪼개기: split()', b: '<p><code>s.split()</code>은 공백 기준으로 단어를 쪼개 <b>리스트</b>를 돌려줘요. <code>len()</code>으로 단어 수를 셀 수 있어요. (리스트는 유닛 24에서 자세히 배워요)</p>', code: r`s = "I love python programming"
words = s.split()
print(words)
print(len(words))` },
      { h: '단어를 하나씩 처리하기', b: '<p>쪼갠 단어도 <code>for</code>로 순회할 수 있어요. 각 단어를 처리한 뒤 이어 붙여 새 문장을 만들 수 있어요.</p>', code: r`s = "hello world"
result = ""
for w in s.split():
    result += w[0].upper() + w[1:] + " "
print(result.strip())` },
      { h: '글자 구성 비교: sorted()', b: '<p><code>sorted(s)</code>는 글자를 정렬해 리스트로 돌려줘요. 두 문자열의 정렬 결과가 같으면 같은 글자들로 이뤄진 <b>애너그램</b>이에요(listen ↔ silent).</p>', code: r`print(sorted("listen"))
print(sorted("listen") == sorted("silent"))` },
    ],
    check: [
      { q: '문자열 s가 회문인지 판별하는 가장 간단한 식은?', opts: ['s == s[::-1]', 's == s[-1]', 's[0] == s[1]', 's in s'], ans: 0, why: '뒤집은 것과 같으면 회문.' },
      { q: '<code>"a b c".split()</code>의 결과는?', opts: ['["a", "b", "c"]', '"abc"', '3', '"a b c"'], ans: 0, why: '공백 기준으로 쪼갠 단어 리스트.' },
      { q: '<code>sorted("cab")</code>의 결과는?', opts: ["['a', 'b', 'c']", '"abc"', '"cab"', '3'], ans: 0, why: '정렬한 글자들의 리스트예요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`s = "level"
print(s == s[::-1])`, ans: 'True', wrong: ['False', 'level', '오류'], why: 'level 은 거꾸로 읽어도 level.' },
      { t: 'predict', code: r`s = "hello"
print(s == s[::-1])`, ans: 'False', wrong: ['True', 'olleh', '오류'], why: '뒤집으면 olleh.' },
      { t: 'predict', code: r`print(len("I love python".split()))`, ans: '3', wrong: ['13', '2', '4'], why: '단어 3개.' },
      { t: 'predict', code: r`print("a-b-c".split("-"))`, ans: "['a', 'b', 'c']", wrong: ['a b c', "['a-b-c']", "('a', 'b', 'c')"], why: 'split의 인자로 구분 글자를 정할 수 있어요.' },
      { t: 'predict', code: r`print(sorted("cab"))`, ans: "['a', 'b', 'c']", wrong: ['abc', "['c', 'a', 'b']", "['b', 'a', 'c']"], why: '정렬된 글자 리스트.' },
      { t: 'predict', code: r`print(sorted("listen") == sorted("silent"))`, ans: 'True', wrong: ['False', 'listen', '오류'], why: '같은 글자로 이뤄져 있어요.' },
      { t: 'predict', code: r`result = ""
for w in "ab cd".split():
    result += w[::-1] + " "
print(result.strip())`, ans: 'ba dc', wrong: ['dc ba', 'ab cd', 'badc'], why: '단어 안에서만 뒤집혀요.' },
      { t: 'blank', code: r`s = "Level"
t = s.___()
print(t == t[::-1])`, ans: ['lower'], extra: ['upper', 'strip', 'split'], out: 'True', why: '소문자로 맞춘 뒤 비교.' },
      { t: 'blank', code: r`s = "I love python"
print(len(s.___()))`, ans: ['split'], extra: ['strip', 'upper', 'find'], out: '3', why: '단어로 쪼개는 메서드는 split.' },
      { t: 'parsons', lines: [r`s = "Never odd or even"`, r`clean = s.replace(" ", "").lower()`, r`print(clean == clean[::-1])`], out: 'True', why: '정리한 뒤 비교해요.' },
      { t: 'bug', code: r`s = "hello world"
print(s.split)`, line: 2, fix: r`print(len(s.split()))`, out: '2', why: '메서드를 부르려면 괄호 () 가 필요해요: split().' },
    ],
    tasks: [
      { q: '문자열을 입력받아 <b>회문이면 <code>회문입니다</code></b>, 아니면 <code>회문이 아닙니다</code>를 출력하세요. (대소문자는 구분하지 않아요)', starter: '', tests: [{ in: ['level'], out: '회문입니다' }, { in: ['hello'], out: '회문이 아닙니다' }, { in: ['Madam'], out: '회문입니다', hidden: true }, { in: ['a'], out: '회문입니다', hidden: true }], sol: r`s = input().lower()
if s == s[::-1]:
    print("회문입니다")
else:
    print("회문이 아닙니다")`, hints: ['먼저 lower() 로 소문자로 맞춰요.', '뒤집은 것과 같은지 비교해요.', '<code>s == s[::-1]</code>'] },
      { q: '문장을 입력받아 <b>단어의 개수</b>를 출력하세요. (단어는 공백으로 구분돼요)', starter: '', tests: [{ in: ['I love python'], out: '3' }, { in: ['hello'], out: '1' }, { in: ['a b c d e'], out: '5', hidden: true }], sol: r`s = input()
print(len(s.split()))`, hints: ['공백으로 쪼개는 split().', '쪼갠 결과의 길이를 len() 으로.', '<code>len(s.split())</code>'] },
      { q: '두 단어를 한 줄씩 입력받아 <b>글자 구성이 같으면(애너그램) <code>애너그램</code></b>, 아니면 <code>아님</code>을 출력하세요.', starter: '', tests: [{ in: ['listen', 'silent'], out: '애너그램' }, { in: ['apple', 'apply'], out: '아님' }, { in: ['abc', 'cab'], out: '애너그램', hidden: true }, { in: ['aab', 'abb'], out: '아님', hidden: true }], sol: r`a = input()
b = input()
if sorted(a) == sorted(b):
    print("애너그램")
else:
    print("아님")`, hints: ['글자를 정렬해 비교하면 구성이 같은지 알 수 있어요.', 'sorted(a) == sorted(b)', '같으면 애너그램, 아니면 아님.'] },
    ],
    boss: { q: '문장을 입력받아 <b>각 단어를 뒤집되 단어 순서는 그대로</b> 출력하세요.<br>예: <code>hello world</code> → <code>olleh dlrow</code>', starter: '', tests: [{ in: ['hello world'], out: 'olleh dlrow' }, { in: ['abc'], out: 'cba', hidden: true }, { in: ['I love you'], out: 'I evol uoy' }], sol: r`s = input()
result = ""
for w in s.split():
    result += w[::-1] + " "
print(result.strip())`, hints: ['문장을 split() 으로 단어로 쪼개요.', '단어마다 [::-1] 로 뒤집어 이어 붙여요.', '마지막의 불필요한 공백은 strip() 으로 지워요.'] },
    sum: ['회문: <code>s == s[::-1]</code> (정리: <code>lower()</code>, <code>replace(" ", "")</code>)', '<code>s.split()</code> 단어 리스트 → <code>len()</code> 으로 단어 수', '단어별 처리: <code>for w in s.split():</code>', '애너그램: <code>sorted(a) == sorted(b)</code>', '기능을 조합해 도구 만들기'],
  },
];
