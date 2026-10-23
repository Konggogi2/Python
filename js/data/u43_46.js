const r = String.raw;

export const U43 = [
  {
    id: 43, emoji: '🐞', title: '오류 읽기와 디버깅', goal: '오류 메시지를 읽고, 오류 종류를 구분하고, 버그를 체계적으로 찾아 고쳐요',
    tips: '디버깅의 첫 걸음은 <b>오류 메시지의 마지막 줄을 읽는 것</b>이에요. “오류 이름: 설명”과 “몇 번째 줄”이 답의 90%를 알려 줘요.',
    learn: [
      { h: '오류 메시지 읽는 법', b: '<p>오류가 나면 파이썬은 <b>어느 줄에서 어떤 오류</b>가 났는지 알려 줘요. 우리 앱은 오류 이름과 줄 번호를 보여 줘요. 먼저 <b>줄 번호</b>의 코드를 보고, <b>오류 이름과 설명</b>을 읽으세요.</p>', code: r`nums = [1, 2, 3]
total = 0
for i in range(4):
    total += nums[i]
print(total)`, err: true },
      { h: '자주 만나는 오류 이름', b: '<table><tr><th>오류</th><th>보통 이런 때</th></tr><tr><td>SyntaxError</td><td>괄호·따옴표·콜론 빠짐, 문법 틀림</td></tr><tr><td>IndentationError</td><td>들여쓰기가 맞지 않음</td></tr><tr><td>NameError</td><td>정의하지 않은 이름 사용, 철자 오타</td></tr><tr><td>TypeError</td><td>맞지 않는 자료형 연산 (<code>"3" + 4</code>)</td></tr><tr><td>ValueError</td><td>값이 맞지 않음 (<code>int("abc")</code>)</td></tr><tr><td>IndexError</td><td>리스트 번호 범위 초과</td></tr><tr><td>KeyError</td><td>딕셔너리에 없는 키</td></tr><tr><td>ZeroDivisionError</td><td>0으로 나눔</td></tr></table>', code: r`print("3" + 4)`, err: true },
      { h: '프린트 디버깅', b: '<p>결과가 이상하면 <b>중간 값을 print로 찍어</b> 어디서부터 틀어지는지 찾아요. 이 방법이 가장 단순하고 강력해요.</p>', code: r`total = 0
for n in [1, 2, 3]:
    total += n
    print("n =", n, "total =", total)
print(total)` },
      { h: '오류가 없는데 결과가 틀릴 때: 논리 오류', b: '<p>가장 어려운 버그는 <b>오류 메시지 없이 틀린 답</b>을 내는 논리 오류예요. 아래는 1부터 5까지 합을 구하려는 코드인데…? 경계값(<code>range</code>의 끝, <code>&lt;</code> vs <code>&lt;=</code>)을 항상 의심해 보세요.</p>', code: r`total = 0
for i in range(1, 5):
    total += i
print(total)` },
      { h: '디버깅 체크리스트', b: '<ol><li>오류 메시지(이름·줄 번호)를 읽는다</li><li>그 줄과 바로 윗줄을 살핀다</li><li>변수 값을 print 로 찍어 본다</li><li>작은 입력으로 직접 손으로 따라가 본다</li><li>고치고 다시 실행한다 — 한 번에 하나씩!</li></ol>', code: r`def average(a):
    return sum(a) / len(a)

print(average([1, 2, 3]))
print(average([]))`, err: true },
    ],
    check: [
      { q: '오류가 났을 때 가장 먼저 읽어야 할 것은?', opts: ['마지막 줄의 오류 이름과 줄 번호', '코드 전체를 다시 쓰기', '컴퓨터 재부팅', '첫 줄'], ans: 0, why: '오류 이름과 줄 번호가 단서예요.' },
      { q: '오류 메시지는 없는데 결과가 틀린 경우는?', opts: ['논리 오류', '문법 오류', '이름 오류', '인덱스 오류'], ans: 0, why: '문법은 맞지만 의도와 다르게 동작해요.' },
      { q: '중간 값을 확인하기 위해 가장 먼저 쓸 수 있는 도구는?', opts: ['print()', 'del', 'break', 'import'], ans: 0, why: 'print 로 값의 변화를 눈으로 확인해요.' },
    ],
    puzzles: [
      { t: 'mc', q: '다음 코드를 실행하면 어떤 오류가 날까요?<br><code>print(Hello)</code>', opts: ['NameError', 'SyntaxError', 'TypeError', 'ValueError'], ans: 0, why: '따옴표가 없어서 Hello 가 변수 이름으로 해석돼요.', code: r`print(Hello)`, errType: 'NameError' },
      { t: 'mc', q: '다음 코드를 실행하면 어떤 오류가 날까요?', code: r`print("3" + 4)`, opts: ['TypeError', 'ValueError', 'NameError', 'SyntaxError'], ans: 0, why: '문자열과 정수는 + 할 수 없어요.', errType: 'TypeError' },
      { t: 'mc', q: '다음 코드를 실행하면 어떤 오류가 날까요?', code: r`n = int("abc")`, opts: ['ValueError', 'TypeError', 'NameError', 'IndexError'], ans: 0, why: '형태는 맞지만 숫자로 바꿀 수 없는 값이에요.', errType: 'ValueError' },
      { t: 'mc', q: '다음 코드를 실행하면 어떤 오류가 날까요?', code: r`a = [1, 2, 3]
print(a[3])`, opts: ['IndexError', 'KeyError', 'ValueError', 'NameError'], ans: 0, why: '번호는 0, 1, 2 까지예요.', errType: 'IndexError' },
      { t: 'mc', q: '다음 코드를 실행하면 어떤 오류가 날까요?', code: r`d = {"a": 1}
print(d["b"])`, opts: ['KeyError', 'IndexError', 'NameError', 'TypeError'], ans: 0, why: '없는 키예요.', errType: 'KeyError' },
      { t: 'mc', q: '다음 코드를 실행하면 어떤 오류가 날까요?', code: r`print(10 / 0)`, opts: ['ZeroDivisionError', 'ValueError', 'TypeError', 'OverflowError'], ans: 0, why: '0으로 나눌 수 없어요.', errType: 'ZeroDivisionError' },
      { t: 'predict', code: r`total = 0
for i in range(1, 5):
    total += i
print(total)`, ans: '10', wrong: ['15', '5', '4'], why: 'range(1, 5)는 1~4. 5는 포함되지 않아 합이 10이에요 (논리 오류의 대표 예).' },
      { t: 'predict', code: r`def f(a, b):
    print(a + b)

x = f(2, 3)
print(x)`, ans: '5\nNone', wrong: ['5\n5', '5', 'None\n5'], why: 'return 이 없어서 x 는 None.' },
      { t: 'bug', code: r`nums = [1, 2, 3]
total = 0
for i in range(4):
    total += nums[i]
print(total)`, line: 3, fix: r`for i in range(3):`, out: '6', why: '원소가 3개인데 4번 돌아서 IndexError. 길이에 맞추세요 (range(len(nums))가 더 안전).' },
      { t: 'bug', code: r`age = input("나이: ")
if age >= 20:
    print("성인")`, stdin: ['25'], line: 2, fix: r`if int(age) >= 20:`, out: '나이: 성인', why: 'input 은 문자열이라 숫자와 비교할 수 없어요 (TypeError).' },
      { t: 'bug', code: r`total = 0
for i in range(1, 5):
    total += i
print("1부터 5까지의 합:", total)`, line: 2, fix: r`for i in range(1, 6):`, out: '1부터 5까지의 합: 15', why: '5까지 포함하려면 range 의 끝은 6.' },
      { t: 'bug', code: r`def average(a):
    return sum(a) / len(a)

print(average([1, 2, 3])
print("끝")`, line: 4, fix: r`print(average([1, 2, 3]))`, out: '2.0\n끝', why: '괄호가 닫히지 않았어요. 오류는 다음 줄에서 보일 수도 있어서 윗줄을 확인해야 해요.' },
    ],
    tasks: [
      { q: '아래 코드에는 <b>문법 오류</b>가 있어요. 고쳐서 <code>안녕하세요</code>와 <code>3</code>이 한 줄씩 출력되게 하세요.', starter: 'name = "파이썬"\nprint("안녕하세요)\nprint(len(name)\n', tests: [{ out: '안녕하세요\n3' }], sol: r`name = "파이썬"
print("안녕하세요")
print(len(name))`, hints: ['따옴표가 짝이 맞는지 확인해요.', '괄호가 닫혔는지 확인해요.', '두 줄 모두 닫는 기호가 빠져 있어요.'] },
      { q: '아래 코드는 이름·타입 오류가 있어요. 고쳐서 <code>나이: 21</code>이 출력되게 하세요.', starter: 'age = 20\nage = age + 1\nprint("나이: " + age)\n', tests: [{ out: '나이: 21' }], sol: r`age = 20
age = age + 1
print("나이: " + str(age))`, hints: ['문자열과 숫자를 + 로 바로 이을 수 없어요.', 'str() 로 숫자를 문자열로 바꿔요.', '<code>str(age)</code>'] },
      { q: '아래는 <b>1부터 n까지의 합</b>을 구하려는 코드인데 결과가 틀려요(논리 오류). 고쳐서 입력 <code>5</code>일 때 <code>15</code>가 나오게 하세요.', starter: 'n = int(input())\ntotal = 0\nfor i in range(1, n):\n    total += i\nprint(total)\n', tests: [{ in: ['5'], out: '15' }, { in: ['10'], out: '55' }, { in: ['1'], out: '1', hidden: true }], sol: r`n = int(input())
total = 0
for i in range(1, n + 1):
    total += i
print(total)`, hints: ['n 이 5일 때 range(1, n)은 1~4 까지예요.', '끝 값은 포함되지 않아요.', 'range(1, n + 1)'] },
    ],
    boss: { q: '<b>버그 3개</b>를 모두 찾아 고치세요! 숫자 리스트에서 <b>짝수의 합</b>과 <b>평균</b>을 출력하는 프로그램인데, 기대 출력은 아래와 같아요.<pre style="margin:6px 0">짝수의 합: 12\n평균: 3.5</pre>', starter: 'nums = [1, 2, 3, 4, 5, 6]\neven_sum = 0\nfor n in nums:\n    if n % 2 = 0:\n        even_sum =+ n\nprint("짝수의 합:" even_sum)\nprint("평균:", sum(nums) // len(nums))\n', tests: [{ out: '짝수의 합: 12\n평균: 3.5' }], sol: r`nums = [1, 2, 3, 4, 5, 6]
even_sum = 0
for n in nums:
    if n % 2 == 0:
        even_sum += n
print("짝수의 합:", even_sum)
print("평균:", sum(nums) / len(nums))`, hints: ['오류 메시지가 알려 주는 문법 오류부터 하나씩 고쳐요: 비교는 ==.', '누적은 += (=+ 는 양수 부호를 붙인 대입이에요).', '평균에는 // (몫) 이 아니라 / 를 써요. print 안의 쉼표도 확인!'] },
    sum: ['오류 메시지: <b>마지막 줄(오류 이름)</b> + <b>줄 번호</b> 먼저', 'SyntaxError · IndentationError · NameError · TypeError · ValueError · IndexError · KeyError · ZeroDivisionError', '논리 오류: 오류 없이 틀린 결과 → print 로 중간 값 확인', '경계값(range 끝, &lt; vs &lt;=)을 의심', '한 번에 하나씩 고치고 다시 실행'],
  },
  {
    id: 44, emoji: '🛡️', title: '예외 처리: try/except', goal: '오류가 나도 프로그램이 멈추지 않게 try/except로 대처하고, 입력 검사 반복을 만들어요',
    tips: '예외 처리는 “오류를 숨기는 것”이 아니라 <b>예상 가능한 문제에 대비하는 것</b>이에요. except 뒤에는 <b>구체적인 오류 이름</b>을 쓰세요.',
    learn: [
      { h: 'try / except 기본', b: '<p><code>try:</code> 블록의 코드를 실행하다가 오류가 나면 프로그램이 멈추지 않고 <code>except</code> 블록으로 가요.</p>', code: r`try:
    n = int("abc")
    print("변환 성공", n)
except ValueError:
    print("숫자가 아니에요")
print("계속 실행돼요")` },
      { h: '오류 종류별로 처리하기', b: '<p><code>except</code>를 여러 개 쓰면 오류 종류별로 다른 대처를 할 수 있어요. 오류 객체를 <code>as e</code>로 받으면 메시지도 볼 수 있어요.</p>', code: r`def safe_div(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "0으로 나눌 수 없어요"
    except TypeError as e:
        return "타입 오류"

print(safe_div(6, 3))
print(safe_div(1, 0))
print(safe_div("a", 2))` },
      { h: 'else와 finally', b: '<ul><li><code>else:</code> 오류가 <b>나지 않았을 때</b>만 실행</li><li><code>finally:</code> 오류 여부와 상관없이 <b>항상</b> 실행 (정리 작업)</li></ul>', code: r`try:
    n = int("12")
except ValueError:
    print("실패")
else:
    print("성공:", n)
finally:
    print("끝 (항상)")` },
      { h: '입력이 올바를 때까지 반복', b: '<p>사용자 입력 검사의 대표 패턴이에요: <code>while True</code> + <code>try</code> + 성공하면 <code>break</code>.</p>', code: r`while True:
    try:
        n = int(input("숫자: "))
        break
    except ValueError:
        print("숫자만 입력하세요")
print(n * 2)`, stdin: ['abc', 'x', '21'] },
      { h: 'raise: 직접 오류 일으키기', b: '<p>잘못된 값이 들어오면 <code>raise 오류종류("메시지")</code>로 직접 오류를 일으킬 수 있어요. 함수가 약속을 지키게 만들 때 써요.</p>', code: r`def set_age(age):
    if age < 0:
        raise ValueError("나이는 0 이상이어야 해요")
    return age

try:
    set_age(-5)
except ValueError as e:
    print("오류:", e)` },
    ],
    check: [
      { q: '<code>try</code> 안에서 오류가 나면 실행되는 블록은?', opts: ['except', 'else', 'finally 만', 'if'], ans: 0, why: '오류가 나면 해당하는 except 로 가요.' },
      { q: '<code>finally</code> 블록은 언제 실행될까요?', opts: ['오류 여부와 상관없이 항상', '오류가 났을 때만', '오류가 안 났을 때만', '실행되지 않는다'], ans: 0, why: '정리 작업에 써요.' },
      { q: '<code>except Exception:</code> 보다 <code>except ValueError:</code> 가 권장되는 이유는?', opts: ['예상한 오류만 처리하고 다른 버그는 드러나게 하려고', '더 빠르다', '문법이 달라서', '짧다'], ans: 0, why: '모든 오류를 삼키면 진짜 버그를 놓쳐요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`try:
    n = int("abc")
    print("성공")
except ValueError:
    print("실패")
print("끝")`, ans: '실패\n끝', wrong: ['성공\n끝', '실패', '끝'], why: '오류가 나면 except 가 실행되고 그 뒤 코드는 계속 실행돼요.' },
      { t: 'predict', code: r`try:
    n = int("12")
except ValueError:
    print("실패")
else:
    print("성공", n)
finally:
    print("정리")`, ans: '성공 12\n정리', wrong: ['실패\n정리', '성공 12', '정리\n성공 12'], why: '오류가 없으면 else, finally 는 항상.' },
      { t: 'predict', code: r`def safe_div(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return -1

print(safe_div(6, 3), safe_div(1, 0))`, ans: '2.0 -1', wrong: ['2 -1', '2.0 0', '오류'], why: '0으로 나누면 except 에서 -1 을 반환.' },
      { t: 'predict', code: r`a = [1, 2, 3]
try:
    print(a[5])
except IndexError:
    print("범위 밖")`, ans: '범위 밖', wrong: ['3', 'None', '(아무것도 출력 안 됨)'], why: 'IndexError 가 처리돼요.' },
      { t: 'predict', code: r`def check(n):
    if n < 0:
        raise ValueError("음수")
    return n

try:
    check(-1)
except ValueError as e:
    print("오류:", e)`, ans: '오류: 음수', wrong: ['오류: ValueError', '-1', '음수'], why: 'raise 한 메시지를 e 로 받아 출력.' },
      { t: 'predict', code: r`for s in ["1", "x", "3"]:
    try:
        print(int(s) * 2)
    except ValueError:
        print("건너뜀")`, ans: '2\n건너뜀\n6', wrong: ['2\n6', '2\n건너뜀', '1\nx\n3'], why: '오류가 난 항목만 건너뛰고 반복은 계속돼요.' },
      { t: 'blank', code: r`try:
    n = int("abc")
___ ValueError:
    print("숫자 아님")`, ans: ['except'], extra: ['catch', 'else', 'finally'], out: '숫자 아님', why: '오류를 받는 블록은 except.' },
      { t: 'blank', code: r`try:
    print(10 / 0)
except ___:
    print("0으로 나눔")`, ans: ['ZeroDivisionError'], extra: ['ValueError', 'TypeError', 'NameError'], out: '0으로 나눔', why: '0으로 나눌 때의 오류 이름.' },
      { t: 'parsons', lines: [r`try:`, r`    n = int(input())`, r`    print(n * 2)`, r`except ValueError:`, r`    print("숫자가 아니에요")`], stdin: ['abc'], out: '숫자가 아니에요', why: 'try 블록 → except 블록 순서.' },
      { t: 'bug', noRun: true, code: r`try:
    n = int("abc")
except:
    print("모든 오류를 잡았어요")
print("끝")`, line: 3, fix: r`except ValueError:`, out: '모든 오류를 잡았어요\n끝', why: '모든 오류를 삼키는 except: 는 진짜 버그를 숨겨요. 예상하는 오류만 지정하세요.' },
      { t: 'bug', code: r`try:
    n = int("abc")
except ValueError
    print("숫자 아님")`, line: 3, fix: r`except ValueError:`, out: '숫자 아님', why: 'except 줄 끝에도 콜론이 필요해요.' },
    ],
    tasks: [
      { q: '문자열을 입력받아 정수로 바꿀 수 있으면 <b>2배한 값</b>을, 바꿀 수 없으면 <code>숫자가 아닙니다</code>를 출력하세요. (try/except 사용)', starter: '', tests: [{ in: ['21'], out: '42' }, { in: ['abc'], out: '숫자가 아닙니다' }, { in: ['-3'], out: '-6', hidden: true }, { in: ['3.5'], out: '숫자가 아닙니다', hidden: true }], need: [r`\btry\b`, r`\bexcept\b`], needMsg: 'try/except 를 사용해 주세요.', sol: r`s = input()
try:
    n = int(s)
    print(n * 2)
except ValueError:
    print("숫자가 아닙니다")`, hints: ['int(s) 가 오류를 낼 수 있어요.', 'try 안에서 변환하고, 실패하면 except ValueError.', '<code>try: ... except ValueError: ...</code>'] },
      { q: '두 정수를 한 줄씩 입력받아 <b>a ÷ b</b>를 출력하세요. b가 0이면 <code>0으로 나눌 수 없어요</code>를 출력하세요. (ZeroDivisionError 처리)', starter: '', tests: [{ in: ['6', '3'], out: '2.0' }, { in: ['1', '0'], out: '0으로 나눌 수 없어요' }, { in: ['7', '2'], out: '3.5', hidden: true }], need: [r`\bexcept\b`], needMsg: 'except 를 사용해 주세요.', sol: r`a = int(input())
b = int(input())
try:
    print(a / b)
except ZeroDivisionError:
    print("0으로 나눌 수 없어요")`, hints: ['a / b 를 try 안에 넣어요.', 'except ZeroDivisionError 를 써요.', '출력은 각각 print.'] },
      { q: '리스트 <code>items = ["a", "b", "c"]</code>가 있어요. 번호를 입력받아 해당 항목을 출력하고, <b>범위를 벗어나면</b> <code>없는 번호예요</code>를 출력하세요.', starter: 'items = ["a", "b", "c"]\n', tests: [{ in: ['1'], out: 'b' }, { in: ['5'], out: '없는 번호예요' }, { in: ['0'], out: 'a', hidden: true }, { in: ['3'], out: '없는 번호예요', hidden: true }], need: [r`\bexcept\b`], needMsg: 'except 를 사용해 주세요.', sol: r`items = ["a", "b", "c"]
i = int(input())
try:
    print(items[i])
except IndexError:
    print("없는 번호예요")`, hints: ['items[i] 가 IndexError 를 낼 수 있어요.', 'try / except IndexError.', '입력은 int 로 바꿔요.'] },
    ],
    boss: { q: '<b>올바른 숫자를 받을 때까지 반복</b>하세요. 정수를 입력받아 변환이 실패하면 <code>숫자를 입력하세요</code>를 출력하고 다시 입력받아요. 올바른 정수가 들어오면 그 수의 <b>2배</b>를 출력하고 끝내요.', starter: '', tests: [{ in: ['abc', 'x', '7'], out: '숫자를 입력하세요\n숫자를 입력하세요\n14' }, { in: ['5'], out: '10', hidden: true }, { in: ['1.5', '3'], out: '숫자를 입력하세요\n6' }], need: [r`\bwhile\b`, r`\btry\b`], needMsg: 'while 과 try 를 함께 사용해 주세요.', sol: r`while True:
    try:
        n = int(input())
        break
    except ValueError:
        print("숫자를 입력하세요")
print(n * 2)`, hints: ['끝나는 때를 모르니 while True.', 'try 안에서 int(input()) 이 성공하면 break.', '실패하면 except 에서 안내 메시지를 출력하면 반복이 계속돼요.'] },
    sum: ['<code>try:</code> … <code>except 오류이름:</code> …', '<code>else:</code> 오류 없을 때 · <code>finally:</code> 항상', '<code>except ValueError as e:</code> 메시지 받기', '입력 검사: <code>while True</code> + <code>try</code> + 성공 시 <code>break</code>', '<code>raise ValueError("메시지")</code> 로 직접 오류 · 모든 오류를 삼키는 <code>except:</code> 지양'],
  },
  {
    id: 45, emoji: '📦', title: '모듈 사용하기', goal: 'import로 math, random, collections 같은 표준 모듈의 도구를 가져와 써요',
    tips: '파이썬에는 <b>이미 만들어진 도구 모음(모듈)</b>이 아주 많아요. 바퀴를 다시 만들지 말고 <code>import</code>로 가져다 쓰세요!',
    learn: [
      { h: 'import: 모듈 가져오기', b: '<p><code>import 모듈</code> 후 <code>모듈.이름</code>으로 써요. <code>math</code> 모듈에는 제곱근, 올림·내림, 원주율 등이 있어요.</p>', code: r`import math
print(math.sqrt(16))
print(math.pi)
print(math.ceil(2.1), math.floor(2.9))
print(math.gcd(12, 18))` },
      { h: 'from … import, as', b: '<p><code>from 모듈 import 이름</code>은 모듈 이름 없이 바로 쓸 수 있게 하고, <code>import 모듈 as 별명</code>으로 짧은 별명을 붙일 수 있어요.</p>', code: r`from math import sqrt, pi
print(sqrt(25))
print(f"{pi:.2f}")

import math as m
print(m.floor(3.7))` },
      { h: 'random: 무작위', b: '<p><code>random.randint(a, b)</code>는 a~b 사이 정수(양끝 포함), <code>random.choice(리스트)</code>는 하나 고르기, <code>random.shuffle(리스트)</code>는 섞기예요. <code>random.seed(숫자)</code>로 <b>시작점을 고정</b>하면 같은 결과가 재현돼요(테스트할 때 유용!).</p>', code: r`import random
random.seed(42)
print([random.randint(1, 6) for _ in range(5)])
a = [1, 2, 3, 4, 5]
random.seed(3)
random.shuffle(a)
print(a)` },
      { h: 'collections.Counter: 개수 세기 끝판왕', b: '<p>유닛 33에서 직접 만든 빈도수 세기를 <code>Counter</code>가 한 줄로 해 줘요. <code>most_common(n)</code>은 가장 많은 n개를 (값, 횟수) 쌍으로 돌려줘요.</p>', code: r`from collections import Counter
c = Counter("banana")
print(c)
print(c["a"])
print(c.most_common(2))` },
      { h: '모듈이 없으면?', b: '<p>이름을 잘못 쓰거나 없는 모듈을 부르면 <b>ModuleNotFoundError</b>예요. 모듈 이름과 대소문자를 확인하세요. 표준 모듈은 따로 설치하지 않아도 돼요.</p>', code: r`import mathh`, err: true },
    ],
    check: [
      { q: '<code>random.seed(1)</code>을 쓰는 이유는?', opts: ['같은 “무작위” 결과를 재현하려고', '더 빠르게 하려고', '숫자를 크게 하려고', '오류를 막으려고'], ans: 0, why: '시작점을 고정하면 같은 순서의 수가 나와요.' },
      { q: '<code>math.sqrt(9)</code>의 결과는?', opts: ['3.0', '3', '81', '4.5'], ans: 0, why: '제곱근은 실수(float).' },
      { q: '<code>random.randint(1, 6)</code>이 돌려줄 수 있는 값의 범위는?', opts: ['1~6 (양끝 포함)', '1~5', '0~6', '2~6'], ans: 0, why: 'randint 는 끝 값도 포함해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`import math
print(math.sqrt(16))`, ans: '4.0', wrong: ['4', '16', '256'], why: 'sqrt 는 실수를 돌려줘요.' },
      { t: 'predict', code: r`import math
print(math.ceil(2.1), math.floor(2.9))`, ans: '3 2', wrong: ['2 3', '3 3', '2 2'], why: 'ceil 올림, floor 내림.' },
      { t: 'predict', code: r`import math
print(f"{math.pi:.2f}")`, ans: '3.14', wrong: ['3.1', '3.142', '3'], why: '원주율을 둘째 자리까지.' },
      { t: 'predict', code: r`from math import gcd
print(gcd(12, 18))`, ans: '6', wrong: ['36', '2', '3'], why: '최대공약수.' },
      { t: 'predict', code: r`import random
random.seed(42)
print([random.randint(1, 6) for _ in range(5)])`, ans: '[6, 1, 1, 6, 3]', wrong: ['[1, 2, 3, 4, 5]', '[6, 6, 6, 6, 6]', '[3, 6, 1, 1, 6]'], why: 'seed 가 같으면 항상 같은 수열이 나와요.' },
      { t: 'predict', code: r`from collections import Counter
c = Counter("banana")
print(c["a"], c["z"])`, ans: '3 0', wrong: ['3 None', '2 0', '3 오류'], why: '없는 글자는 0 으로 세요.' },
      { t: 'predict', code: r`from collections import Counter
print(Counter([1, 1, 2, 3, 3, 3]).most_common(1))`, ans: '[(3, 3)]', wrong: ['[3]', '[(1, 2)]', '[(3, 1)]'], why: '가장 많은 값 3 이 세 번.' },
      { t: 'blank', code: r`___ math
print(math.sqrt(49))`, ans: ['import'], extra: ['include', 'using', 'from'], out: '7.0', why: '모듈을 가져오는 키워드.' },
      { t: 'blank', code: r`from math ___ sqrt
print(sqrt(9))`, ans: ['import'], extra: ['as', 'in', 'use'], out: '3.0', why: 'from 모듈 import 이름.' },
      { t: 'parsons', lines: [r`import random`, r`random.seed(1)`, r`n = random.randint(1, 10)`, r`print(1 <= n <= 10)`], out: 'True', why: 'import → seed → 사용.' },
      { t: 'bug', code: r`import math
print(sqrt(16))`, line: 2, fix: r`print(math.sqrt(16))`, out: '4.0', why: 'import math 로 가져왔으면 math. 를 붙여야 해요.' },
      { t: 'bug', code: r`import random
print(random.randint(6, 1))`, line: 2, fix: r`print(1 <= random.randint(1, 6) <= 6)`, out: 'True', why: 'randint(작은 수, 큰 수) 순서여야 해요 (ValueError).' },
    ],
    tasks: [
      { q: '양의 실수를 입력받아 <b>제곱근을 소수 셋째 자리까지</b> 출력하세요. (<code>math</code> 사용)', starter: '', tests: [{ in: ['2'], out: '1.414' }, { in: ['16'], out: '4.000' }, { in: ['10'], out: '3.162', hidden: true }], need: [r`math`], needMsg: 'math 모듈을 사용해 주세요.', sol: r`import math
x = float(input())
print(f"{math.sqrt(x):.3f}")`, hints: ['import math 로 시작해요.', 'math.sqrt(x) 로 제곱근.', 'f-string 의 :.3f 로 소수 셋째 자리까지.'] },
      { q: '<code>random.seed(42)</code>로 시작해 주사위(<code>1~6</code>)를 <b>5번</b> 굴린 결과를 리스트로 출력하세요. (같은 결과가 재현돼야 해요)', starter: '', tests: [{ out: '[6, 1, 1, 6, 3]' }], need: [r`random`], needMsg: 'random 모듈을 사용해 주세요.', sol: r`import random
random.seed(42)
rolls = [random.randint(1, 6) for _ in range(5)]
print(rolls)`, hints: ['import random 후 random.seed(42).', 'random.randint(1, 6) 를 5번 모아요.', '컴프리헨션이 간단해요.'] },
      { q: '문자열을 입력받아 <b>가장 많이 나온 글자와 횟수</b>를 <code>글자: 횟수</code>로 출력하세요. (<code>Counter.most_common</code> 사용, 횟수가 같으면 먼저 나온 글자)', starter: '', tests: [{ in: ['banana'], out: 'a: 3' }, { in: ['hello'], out: 'l: 2' }, { in: ['abc'], out: 'a: 1', hidden: true }], need: [r`Counter`], needMsg: 'Counter 를 사용해 주세요.', sol: r`from collections import Counter
s = input()
ch, n = Counter(s).most_common(1)[0]
print(f"{ch}: {n}")`, hints: ['from collections import Counter', 'Counter(s).most_common(1) 은 [(글자, 횟수)] 리스트예요.', '[0] 으로 첫 쌍을 꺼내 언패킹해요.'] },
    ],
    boss: { q: '<b>주사위 게임</b>: <code>random.seed(5)</code>로 시작해 주사위를 <b>10번</b> 굴려서 <b>합계</b>와 <b>가장 많이 나온 눈</b>(Counter 사용)을 아래 형태로 출력하세요.<pre style="margin:6px 0">합계: ○\n최다: ○</pre>(굴린 값은 <code>random.randint(1, 6)</code>을 쓰세요)', starter: '', tests: [{ out: '합계: 45\n최다: 6' }], need: [r`random`, r`Counter`], needMsg: 'random 과 Counter 를 사용해 주세요.', sol: r`import random
from collections import Counter
random.seed(5)
rolls = [random.randint(1, 6) for _ in range(10)]
print(f"합계: {sum(rolls)}")
print(f"최다: {Counter(rolls).most_common(1)[0][0]}")`, hints: ['seed 를 먼저 설정한 뒤 10번 굴려 리스트로 모아요.', '합계는 sum(rolls).', 'Counter(rolls).most_common(1)[0][0] 가 가장 많이 나온 눈이에요.'] },
    sum: ['<code>import math</code> → <code>math.sqrt</code> <code>math.pi</code> <code>math.ceil</code> <code>math.floor</code> <code>math.gcd</code>', '<code>from math import sqrt</code> · <code>import math as m</code>', '<code>random.randint(a, b)</code> 양끝 포함 · <code>choice</code> · <code>shuffle</code> · <code>seed(n)</code> 재현', '<code>Counter(x).most_common(n)</code> 개수 세기', '없는 모듈 → ModuleNotFoundError'],
  },
  {
    id: 46, emoji: '📁', title: '파일 읽고 쓰기', goal: '텍스트 파일에 저장하고 다시 읽어 오는 방법과 with 문을 익혀요',
    tips: '파일을 열면 <b>반드시 닫아야</b> 해요. <code>with open(...) as f:</code>를 쓰면 블록이 끝날 때 자동으로 닫혀서 안전해요. (이 앱에서는 파일이 한 번 실행하는 동안만 임시로 만들어져요)',
    learn: [
      { h: '파일에 쓰기: "w"', b: '<p><code>open(파일이름, "w")</code>는 쓰기 모드예요. 같은 이름의 파일이 있으면 <b>내용을 지우고 새로 써요</b>. <code>f.write(글자)</code>로 쓰고, 줄바꿈은 <code>\\n</code>을 직접 넣어야 해요.</p>', code: r`with open("memo.txt", "w", encoding="utf-8") as f:
    f.write("안녕\n")
    f.write("파이썬\n")
print("저장 완료")` },
      { h: '파일 읽기: "r"', b: '<p><code>f.read()</code>는 전체를 한 번에, <code>for line in f:</code>는 한 줄씩 읽어요. 줄 끝에는 <code>\\n</code>이 붙어 있어서 <code>strip()</code>으로 지워요.</p>', code: r`with open("memo.txt", "w", encoding="utf-8") as f:
    f.write("안녕\n파이썬\n")

with open("memo.txt", "r", encoding="utf-8") as f:
    text = f.read()
print(repr(text))

with open("memo.txt", encoding="utf-8") as f:
    for line in f:
        print(line.strip())` },
      { h: '이어 쓰기: "a"', b: '<p><code>"a"</code>(append)는 기존 내용을 <b>지우지 않고 뒤에 이어서</b> 써요. 로그나 기록을 쌓을 때 좋아요.</p>', code: r`with open("log.txt", "w", encoding="utf-8") as f:
    f.write("1줄\n")
with open("log.txt", "a", encoding="utf-8") as f:
    f.write("2줄\n")
with open("log.txt", encoding="utf-8") as f:
    print(f.read().splitlines())` },
      { h: '파일이 없을 때', b: '<p>없는 파일을 읽으려 하면 <b>FileNotFoundError</b>예요. try/except로 대처하거나 파일 이름을 확인하세요.</p>', code: r`try:
    with open("없는파일.txt") as f:
        print(f.read())
except FileNotFoundError:
    print("파일이 없어요")` },
      { h: '한 줄씩 리스트로: splitlines', b: '<p><code>f.read().splitlines()</code>는 파일 내용을 <b>줄바꿈 없는 줄 리스트</b>로 줘요. 숫자 목록을 읽어 합계를 구할 때 편해요.</p>', code: r`with open("nums.txt", "w") as f:
    f.write("10\n20\n30\n")
with open("nums.txt") as f:
    nums = [int(x) for x in f.read().splitlines()]
print(nums, sum(nums))` },
    ],
    check: [
      { q: '기존 내용을 지우고 새로 쓰는 파일 모드는?', opts: ['"w"', '"r"', '"a"', '"x"'], ans: 0, why: 'w 는 write, 기존 내용을 덮어써요.' },
      { q: '기존 내용 뒤에 이어서 쓰는 모드는?', opts: ['"a"', '"w"', '"r"', '"b"'], ans: 0, why: 'a 는 append.' },
      { q: '<code>with open(...) as f:</code>를 쓰는 이유는?', opts: ['블록이 끝나면 파일을 자동으로 닫아서', '파일이 더 빨라서', '문법이 필수라서', '파일이 암호화돼서'], ans: 0, why: '닫는 것을 잊어도 안전해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`with open("a.txt", "w") as f:
    f.write("hi\n")
with open("a.txt") as f:
    print(repr(f.read()))`, ans: "'hi\\n'", wrong: ["'hi'", "hi", "'hi\\\\n'"], why: '줄바꿈 글자 \\n 이 파일에 함께 저장돼요.' },
      { t: 'predict', code: r`with open("a.txt", "w") as f:
    f.write("a\nb\n")
with open("a.txt") as f:
    for line in f:
        print(line.strip())`, ans: 'a\nb', wrong: ['a b', 'a\n\nb\n', 'a\\nb'], why: 'strip 으로 줄 끝 줄바꿈을 지워요.' },
      { t: 'predict', code: r`with open("a.txt", "w") as f:
    f.write("1\n")
with open("a.txt", "w") as f:
    f.write("2\n")
with open("a.txt") as f:
    print(f.read().strip())`, ans: '2', wrong: ['1', '1\n2', '12'], why: '"w" 는 기존 내용을 지워요.' },
      { t: 'predict', code: r`with open("a.txt", "w") as f:
    f.write("1\n")
with open("a.txt", "a") as f:
    f.write("2\n")
with open("a.txt") as f:
    print(f.read().splitlines())`, ans: "['1', '2']", wrong: ["['2']", "['1']", "['1\\n', '2\\n']"], why: '"a" 는 이어 쓰기.' },
      { t: 'predict', code: r`with open("n.txt", "w") as f:
    f.write("10\n20\n30\n")
with open("n.txt") as f:
    nums = [int(x) for x in f.read().splitlines()]
print(sum(nums))`, ans: '60', wrong: ['102030', '3', '30'], why: '줄을 숫자로 바꿔 합해요.' },
      { t: 'predict', code: r`try:
    with open("nofile.txt") as f:
        print(f.read())
except FileNotFoundError:
    print("없음")`, ans: '없음', wrong: ['(빈 줄)', 'None', '오류'], why: '없는 파일은 FileNotFoundError.' },
      { t: 'blank', code: r`with open("a.txt", "___") as f:
    f.write("hello")
with open("a.txt") as f:
    print(f.read())`, ans: ['w'], extra: ['r', 'a', 'x'], out: 'hello', why: '쓰려면 w 모드.' },
      { t: 'blank', code: r`with open("a.txt", "w") as f:
    f.write("x\n")
with open("a.txt") as f:
    text = f.___()
print(text.strip())`, ans: ['read'], extra: ['write', 'open', 'close'], out: 'x', why: '전체 읽기는 read().' },
      { t: 'parsons', lines: [r`with open("a.txt", "w") as f:`, r`    f.write("ok")`, r`with open("a.txt") as f:`, r`    print(f.read())`], out: 'ok', why: '쓰고 → 읽기 순서.' },
      { t: 'bug', code: r`with open("a.txt", "r") as f:
    f.write("hi")`, line: 1, fix: r`with open("a.txt", "w") as f:`, out: '', why: '"r" 모드(읽기)로 열고 쓰려면 오류가 나요. 쓰기에는 "w".' },
      { t: 'bug', code: r`with open("a.txt", "w") as f:
    f.write("1")
    f.write("2")
    f.write("3")
with open("a.txt") as f:
    print(f.read())`, line: 3, fix: r`    f.write("2\n")`, out: '12\n3', why: '줄바꿈은 자동으로 들어가지 않아요. 필요한 곳에 \\n 을 직접 넣어요.' },
    ],
    tasks: [
      { q: '<code>memo.txt</code>에 <code>안녕하세요</code>를 쓰고 다시 읽어서 내용을 출력하세요. (줄바꿈 없이 한 줄만 써요)', starter: '', tests: [{ out: '안녕하세요' }], need: [r`\bopen\b`], needMsg: 'open 으로 파일을 열어 주세요.', sol: r`with open("memo.txt", "w", encoding="utf-8") as f:
    f.write("안녕하세요")
with open("memo.txt", encoding="utf-8") as f:
    print(f.read())`, hints: ['먼저 "w" 모드로 열어 write.', '그다음 기본(읽기) 모드로 열어 read.', 'with 문을 두 번 써요.'] },
      { q: '파일 <code>nums.txt</code>에 <code>1</code>부터 <code>5</code>까지를 한 줄에 하나씩 쓰고, 다시 읽어서 <b>합계</b>를 출력하세요.', starter: '', tests: [{ out: '15' }], need: [r`\bopen\b`], needMsg: 'open 으로 파일을 열어 주세요.', sol: r`with open("nums.txt", "w") as f:
    for i in range(1, 6):
        f.write(f"{i}\n")
with open("nums.txt") as f:
    nums = [int(x) for x in f.read().splitlines()]
print(sum(nums))`, hints: ['반복문 안에서 write 를 해요 (줄바꿈 \\n 포함).', '읽을 때 splitlines() 로 줄 리스트를 얻어요.', '문자열을 int 로 바꿔 합해요.'] },
      { q: '<code>log.txt</code>에 <code>첫째</code>를 쓴 뒤, <b>이어쓰기 모드</b>로 <code>둘째</code>를 추가하고, 파일의 <b>줄 수</b>를 출력하세요. (각 줄 끝에 줄바꿈을 넣어요)', starter: '', tests: [{ out: '2' }], need: [r`"a"|'a'`], needMsg: '이어쓰기 모드 "a" 를 사용해 주세요.', sol: r`with open("log.txt", "w", encoding="utf-8") as f:
    f.write("첫째\n")
with open("log.txt", "a", encoding="utf-8") as f:
    f.write("둘째\n")
with open("log.txt", encoding="utf-8") as f:
    print(len(f.read().splitlines()))`, hints: ['처음에는 "w", 두 번째는 "a" 모드.', '각 줄 끝에 \\n.', '줄 수는 splitlines() 의 길이.'] },
    ],
    boss: { q: '<b>메모장</b>: 세 줄을 입력받아 <code>notes.txt</code>에 저장한 뒤, 파일을 다시 읽어 <code>1: 내용</code>, <code>2: 내용</code>, <code>3: 내용</code> 형태로 번호를 붙여 출력하세요.', starter: '', tests: [{ in: ['우유 사기', '숙제 하기', '운동'], out: '1: 우유 사기\n2: 숙제 하기\n3: 운동' }, { in: ['a', 'b', 'c'], out: '1: a\n2: b\n3: c', hidden: true }], need: [r`\bopen\b`], needMsg: 'open 으로 파일을 열어 주세요.', sol: r`lines = [input() for _ in range(3)]
with open("notes.txt", "w", encoding="utf-8") as f:
    for line in lines:
        f.write(line + "\n")
with open("notes.txt", encoding="utf-8") as f:
    for i, line in enumerate(f.read().splitlines(), 1):
        print(f"{i}: {line}")`, hints: ['입력 세 줄을 먼저 리스트로 받아요.', '파일에 쓸 때 줄마다 "\\n" 을 붙여요.', '읽을 때 splitlines + enumerate(…, 1) 로 번호를 붙여요.'] },
    sum: ['<code>with open(이름, 모드, encoding="utf-8") as f:</code> — 끝나면 자동으로 닫힘', '모드: <code>"r"</code> 읽기 · <code>"w"</code> 덮어쓰기 · <code>"a"</code> 이어쓰기', '<code>f.write(글)</code> (줄바꿈은 <code>\\n</code> 직접) · <code>f.read()</code> · <code>for line in f</code>', '<code>f.read().splitlines()</code> → 줄 리스트', '없는 파일 → FileNotFoundError (try/except)'],
  },
];
