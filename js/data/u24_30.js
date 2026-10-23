const r = String.raw;

export const U24 = [
  {
    id: 24, emoji: '📋', title: '리스트 기초', goal: '여러 값을 한 변수에 담는 리스트를 만들고, 꺼내고, 바꾸고, 순회해요',
    tips: '리스트는 <b>대괄호 [ ]</b>에 쉼표로 값을 나열해요. 문자열처럼 번호(0부터)로 꺼내지만, 문자열과 달리 <b>값을 바꿀 수 있어요</b>!',
    learn: [
      { h: '리스트 만들기', b: '<p>값 여러 개를 <code>[ ]</code> 안에 쉼표로 나열하면 <b>리스트(list)</b>가 돼요. 숫자, 글자를 섞어도 되고, 빈 리스트 <code>[]</code>도 만들 수 있어요.</p>', code: r`fruits = ["사과", "바나나", "딸기"]
nums = [10, 20, 30]
mixed = [1, "둘", 3.0, True]
empty = []
print(fruits)
print(nums, len(nums))
print(empty)` },
      { h: '번호로 꺼내기', b: '<p>문자열과 똑같이 <b>0부터 시작하는 번호</b>로 꺼내고, 음수는 뒤에서부터예요. <code>len()</code>은 원소 수를 알려 줘요.</p>', code: r`fruits = ["사과", "바나나", "딸기"]
print(fruits[0])
print(fruits[2])
print(fruits[-1])
print(len(fruits))` },
      { h: '값 바꾸기: 리스트는 가변', b: '<p>리스트는 번호로 원소를 <b>바꿀 수 있어요</b>(<code>가변, mutable</code>). 문자열은 못 바꿨죠? 이게 큰 차이예요.</p>', code: r`nums = [10, 20, 30]
nums[1] = 99
print(nums)
nums[-1] = nums[-1] + 1
print(nums)` },
      { h: '순회와 포함 검사', b: '<p><code>for 변수 in 리스트:</code>로 원소를 하나씩 꺼내고, <code>값 in 리스트</code>로 들어 있는지 확인해요.</p>', code: r`fruits = ["사과", "바나나", "딸기"]
for f in fruits:
    print(f + " 맛있다")
print("딸기" in fruits)
print("포도" in fruits)` },
    ],
    check: [
      { q: '<code>a = [5, 6, 7]</code>에서 <code>a[1]</code>은?', opts: ['6', '5', '7', '1'], ans: 0, why: '번호는 0부터라 1번은 두 번째 원소.' },
      { q: '리스트와 문자열의 가장 큰 차이는?', opts: ['리스트는 원소를 바꿀 수 있다', '리스트는 번호를 쓸 수 없다', '문자열은 for를 못 쓴다', '차이가 없다'], ans: 0, why: '리스트는 가변, 문자열은 불변.' },
      { q: '<code>len([1, 2, 3, 4])</code>의 값은?', opts: ['4', '3', '5', '[1, 2, 3, 4]'], ans: 0, why: '원소가 4개.' },
    ],
    puzzles: [
      { t: 'predict', code: r`a = [5, 6, 7]
print(a[1])`, ans: '6', wrong: ['5', '7', '[6]'], why: '1번은 두 번째 원소.' },
      { t: 'predict', code: r`a = [5, 6, 7]
print(a[-1], len(a))`, ans: '7 3', wrong: ['5 3', '7 2', '6 3'], why: '-1은 마지막 원소, len은 3.' },
      { t: 'predict', code: r`a = [1, 2, 3]
a[0] = 10
print(a)`, ans: '[10, 2, 3]', wrong: ['[1, 2, 3]', '[10, 1, 2, 3]', '[10]'], why: '0번 원소를 10으로 바꿔요.' },
      { t: 'predict', code: r`a = ["a", "b"]
print(a)`, ans: "['a', 'b']", wrong: ['a b', '[a, b]', '("a", "b")'], why: '리스트를 출력하면 대괄호와 따옴표 모양이 그대로 나와요.' },
      { t: 'predict', code: r`a = [3, 1, 2]
total = 0
for x in a:
    total += x
print(total)`, ans: '6', wrong: ['3', '123', '5'], why: '3+1+2 = 6' },
      { t: 'predict', code: r`a = [1, 2, 3]
print(2 in a, 5 in a)`, ans: 'True False', wrong: ['False True', 'True True', '2 5'], why: '2는 있고 5는 없어요.' },
      { t: 'predict', code: r`a = [10, 20, 30]
a[1] = a[0] + a[2]
print(a)`, ans: '[10, 40, 30]', wrong: ['[10, 20, 30]', '[10, 50, 30]', '[40]'], why: '1번을 10 + 30 = 40 으로 바꿔요.' },
      { t: 'blank', code: r`fruits = ["사과", "배", "감"]
print(fruits[___])`, ans: ['1'], extra: ['0', '2', '3'], out: '배', why: '배는 1번.' },
      { t: 'blank', code: r`nums = [1, 2, 3]
___ x in nums:
    print(x * 2)`, ans: ['for'], extra: ['if', 'while', 'in'], out: '2\n4\n6', why: '원소를 하나씩 꺼내는 반복.' },
      { t: 'parsons', lines: [r`a = [1, 2, 3]`, r`a[0] = 100`, r`print(a)`], out: '[100, 2, 3]', why: '만들고 → 바꾸고 → 출력.' },
      { t: 'bug', code: r`a = [1, 2, 3]
print(a[3])`, line: 2, fix: r`print(a[2])`, out: '3', why: '원소가 3개면 번호는 0, 1, 2 까지예요. (IndexError)' },
      { t: 'bug', code: r`a = (1, 2, 3)
a[0] = 10
print(a)`, line: 1, fix: r`a = [1, 2, 3]`, out: '[10, 2, 3]', why: '소괄호 ( ) 는 바꿀 수 없는 튜플이에요. 대괄호 [ ] 리스트를 써야 해요.' },
    ],
    tasks: [
      { q: '리스트 <code>nums</code>의 <b>첫 번째와 마지막 원소</b>를 각각 한 줄씩 출력하세요.', starter: 'nums = [3, 1, 4, 1, 5]\n', tests: [{ out: '3\n5' }], sol: r`nums = [3, 1, 4, 1, 5]
print(nums[0])
print(nums[-1])`, hints: ['첫 원소는 0번, 마지막은 -1번.', 'print 를 두 번 써요.', '<code>print(nums[0])</code>, <code>print(nums[-1])</code>'] },
      { q: '리스트 <code>nums</code>의 모든 원소의 <b>합</b>을 for 문으로 구해 출력하세요.', starter: 'nums = [3, 1, 4, 1, 5]\n', tests: [{ out: '14' }], need: [r`\bfor\b`], needMsg: 'for 문을 사용해 주세요.', sol: r`nums = [3, 1, 4, 1, 5]
total = 0
for x in nums:
    total += x
print(total)`, hints: ['합계 변수를 0으로 시작해요.', 'for x in nums: 로 하나씩 더해요.', '반복이 끝난 뒤 출력.'] },
      { q: '리스트 <code>nums</code>의 <b>두 번째 원소</b>를 <code>99</code>로 바꾼 뒤 리스트 전체를 출력하세요.', starter: 'nums = [3, 1, 4, 1, 5]\n', tests: [{ out: '[3, 99, 4, 1, 5]' }], sol: r`nums = [3, 1, 4, 1, 5]
nums[1] = 99
print(nums)`, hints: ['두 번째 원소의 번호는 1.', '번호로 값을 바꿀 수 있어요: nums[1] = 99', '마지막에 print(nums).'] },
    ],
    boss: { q: '점수 리스트 <code>scores</code>가 주어져 있어요. <b>① 최고점</b>을 반복문으로 찾아 출력하고, <b>② 70점 이상인 사람 수</b>를 출력하세요. (max() 없이 반복으로 해 보세요)', starter: 'scores = [88, 92, 79, 95, 60]\n', tests: [{ out: '95\n4' }], ban: [r`\bmax\s*\(`], banMsg: 'max() 없이 반복문으로 최고점을 찾아 보세요.', sol: r`scores = [88, 92, 79, 95, 60]
best = scores[0]
count = 0
for s in scores:
    if s > best:
        best = s
    if s >= 70:
        count += 1
print(best)
print(count)`, hints: ['최고점은 첫 점수로 시작해 더 큰 값을 만나면 교체해요.', '70점 이상일 때마다 count += 1.', '두 값을 반복이 끝난 뒤 차례로 출력해요.'] },
    sum: ['<code>[1, 2, 3]</code> 리스트 · 빈 리스트 <code>[]</code>', '<code>a[0]</code> 첫 원소 · <code>a[-1]</code> 마지막 · <code>len(a)</code>', '리스트는 가변: <code>a[1] = 99</code> 가능 (문자열은 불가)', '<code>for x in a:</code> 순회 · <code>x in a</code> 포함 검사', '번호 범위를 벗어나면 IndexError'],
  },
  {
    id: 25, emoji: '🍰', title: '리스트 슬라이싱과 연산', goal: '리스트도 문자열처럼 자르고, 합치고, 반복하고, 위치를 찾아요',
    tips: '문자열에서 배운 슬라이싱이 리스트에서도 <b>똑같이</b> 동작해요. 하나를 알면 둘을 아는 셈이에요!',
    learn: [
      { h: '슬라이싱', b: '<p><code>a[시작:끝:간격]</code>은 문자열과 같아요. 결과는 <b>새 리스트</b>예요.</p>', code: r`a = [10, 20, 30, 40, 50]
print(a[1:4])
print(a[:2])
print(a[-2:])
print(a[::2])
print(a[::-1])` },
      { h: '합치기와 반복', b: '<p><code>+</code>는 리스트를 이어 붙이고 <code>*</code>는 반복해요.</p>', code: r`a = [1, 2]
b = [3, 4]
print(a + b)
print(a * 3)
print([0] * 5)` },
      { h: '위치와 횟수 찾기', b: '<ul><li><code>a.index(x)</code> x가 처음 나오는 번호 (없으면 오류)</li><li><code>a.count(x)</code> x가 나오는 횟수</li></ul>', code: r`a = [5, 3, 5, 7, 5]
print(a.index(3))
print(a.count(5))
print(a.index(5))` },
      { h: '슬라이스는 복사본', b: '<p>슬라이싱 결과는 <b>새 리스트</b>라서 바꿔도 원본에 영향이 없어요. <code>a[:]</code>는 리스트 전체를 복사하는 관용구예요.</p>', code: r`a = [1, 2, 3]
b = a[:]
b[0] = 99
print(a)
print(b)` },
    ],
    check: [
      { q: '<code>[1, 2, 3, 4][1:3]</code>의 결과는?', opts: ['[2, 3]', '[2, 3, 4]', '[1, 2]', '[1, 2, 3]'], ans: 0, why: '1번부터 3번 직전까지.' },
      { q: '<code>[1, 2] + [3]</code>의 결과는?', opts: ['[1, 2, 3]', '[4, 5]', '[1, 2, [3]]', '오류'], ans: 0, why: '+ 는 리스트를 이어 붙여요.' },
      { q: '<code>[1, 2, 1].count(1)</code>의 결과는?', opts: ['2', '1', '3', '0'], ans: 0, why: '1이 두 번 나와요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`a = [10, 20, 30, 40, 50]
print(a[1:4])`, ans: '[20, 30, 40]', wrong: ['[20, 30, 40, 50]', '[10, 20, 30]', '[20, 30]'], why: '1, 2, 3번.' },
      { t: 'predict', code: r`a = [10, 20, 30, 40, 50]
print(a[-2:])`, ans: '[40, 50]', wrong: ['[30, 40]', '[50]', '[10, 20]'], why: '뒤에서 두 개.' },
      { t: 'predict', code: r`a = [1, 2, 3]
print(a[::-1])`, ans: '[3, 2, 1]', wrong: ['[1, 2, 3]', '[3, 1, 2]', '[2, 1]'], why: '뒤집기.' },
      { t: 'predict', code: r`print([1, 2] + [3, 4])`, ans: '[1, 2, 3, 4]', wrong: ['[4, 6]', '[[1, 2], [3, 4]]', '[1, 2][3, 4]'], why: '이어 붙이기.' },
      { t: 'predict', code: r`print([0] * 4)`, ans: '[0, 0, 0, 0]', wrong: ['[0]', '0000', '[0, 4]'], why: '반복.' },
      { t: 'predict', code: r`a = [5, 3, 5, 7, 5]
print(a.index(3), a.count(5))`, ans: '1 3', wrong: ['3 1', '1 5', '2 3'], why: '3은 1번에 있고 5는 세 번 나와요.' },
      { t: 'predict', code: r`a = [1, 2, 3]
b = a[:]
b[0] = 99
print(a, b)`, ans: '[1, 2, 3] [99, 2, 3]', wrong: ['[99, 2, 3] [99, 2, 3]', '[1, 2, 3] [1, 2, 3]', '[99, 2, 3] [1, 2, 3]'], why: '슬라이스 복사본을 바꿔도 원본은 그대로.' },
      { t: 'blank', code: r`a = [1, 2, 3, 4, 5]
print(a[___:3])`, ans: ['1'], extra: ['0', '2', '3'], out: '[2, 3]', why: '1번부터 3번 직전.' },
      { t: 'blank', code: r`a = [1, 2]
b = [3]
print(a ___ b)`, ans: ['+'], extra: ['*', '-', ','], out: '[1, 2, 3]', why: '이어 붙이기는 +.' },
      { t: 'parsons', lines: [r`a = [1, 2, 3, 4]`, r`first = a[:2]`, r`last = a[2:]`, r`print(last + first)`], out: '[3, 4, 1, 2]', why: '앞뒤로 잘라 순서를 바꿔 합쳐요.' },
      { t: 'bug', code: r`a = [1, 2, 3]
b = [4, 5]
print(a.append(b))`, line: 3, fix: r`print(a + b)`, out: '[1, 2, 3, 4, 5]', why: '두 리스트를 이어 붙이려면 + 를 써요 (append 는 값을 반환하지 않고 한 개를 추가해요).' },
    ],
    tasks: [
      { q: '리스트 <code>a</code>의 <b>1번부터 3번까지</b> 원소를 잘라 출력하세요. (끝 번호는 제외)', starter: 'a = [1, 2, 3, 4, 5, 6]\n', tests: [{ out: '[2, 3, 4]' }], sol: r`a = [1, 2, 3, 4, 5, 6]
print(a[1:4])`, hints: ['1번부터 4번 직전까지가 1~3번이에요.', 'a[시작:끝] 형식.', '<code>a[1:4]</code>'] },
      { q: '리스트 <code>a</code>를 <b>거꾸로 뒤집은 새 리스트</b>를 출력하세요.', starter: 'a = [1, 2, 3, 4, 5, 6]\n', tests: [{ out: '[6, 5, 4, 3, 2, 1]' }], sol: r`a = [1, 2, 3, 4, 5, 6]
print(a[::-1])`, hints: ['문자열 뒤집기와 같은 방법이에요.', '간격 -1.', '<code>a[::-1]</code>'] },
      { q: '리스트 <code>a</code>와 <code>b</code>를 이어 붙인 뒤 <b>세 번 반복</b>한 리스트를 출력하세요.', starter: 'a = [1, 2]\nb = [3]\n', tests: [{ out: '[1, 2, 3, 1, 2, 3, 1, 2, 3]' }], sol: r`a = [1, 2]
b = [3]
print((a + b) * 3)`, hints: ['먼저 이어 붙이고 그 결과를 반복해요.', '덧셈을 먼저 하려면 괄호.', '<code>(a + b) * 3</code>'] },
    ],
    boss: { q: '리스트 <code>a</code>에서 <b>앞의 두 개와 뒤의 두 개</b>만 이어 붙인 새 리스트를 출력하세요. (가운데는 버려요)', starter: 'a = [1, 2, 3, 4, 5, 6, 7, 8]\n', tests: [{ out: '[1, 2, 7, 8]' }], sol: r`a = [1, 2, 3, 4, 5, 6, 7, 8]
print(a[:2] + a[-2:])`, hints: ['앞 두 개는 a[:2].', '뒤 두 개는 a[-2:].', '두 슬라이스를 + 로 이어요.'] },
    sum: ['<code>a[a:b:c]</code> — 문자열과 같은 슬라이싱, 결과는 새 리스트', '<code>a + b</code> 이어 붙이기 · <code>a * n</code> 반복', '<code>a.index(x)</code> 번호 · <code>a.count(x)</code> 횟수', '<code>a[:]</code> 복사본 — 바꿔도 원본 영향 없음', '<code>[0] * 5</code> → 0이 5개인 리스트'],
  },
  {
    id: 26, emoji: '🧰', title: '리스트 메서드', goal: '원소 추가·삽입·삭제·확장 같은 리스트를 바꾸는 메서드를 익혀요',
    tips: '리스트 메서드는 문자열과 달리 <b>원본을 직접 바꿔요</b>. 결과를 변수에 저장할 필요가 없고, 오히려 <code>a = a.append(1)</code> 처럼 쓰면 <code>None</code>이 돼요!',
    learn: [
      { h: 'append와 extend', b: '<ul><li><code>a.append(x)</code> 맨 뒤에 x <b>한 개</b> 추가</li><li><code>a.extend(리스트)</code> 맨 뒤에 여러 개를 이어 붙임</li></ul>', code: r`a = [1, 2]
a.append(3)
print(a)
a.extend([4, 5])
print(a)
a.append([6, 7])
print(a)` },
      { h: 'insert와 remove', b: '<ul><li><code>a.insert(번호, x)</code> 그 번호에 끼워 넣기</li><li><code>a.remove(x)</code> x를 <b>처음 만나는 하나</b> 삭제 (없으면 오류)</li></ul>', code: r`a = [10, 20, 30]
a.insert(1, 15)
print(a)
a.remove(30)
print(a)
b = [1, 2, 1, 2]
b.remove(2)
print(b)` },
      { h: 'pop: 꺼내면서 삭제', b: '<p><code>a.pop()</code>은 맨 뒤 원소를 <b>꺼내서 돌려주고 삭제</b>해요. <code>a.pop(번호)</code>는 그 번호의 원소를 꺼내요. <code>del a[번호]</code>도 삭제예요.</p>', code: r`a = [1, 2, 3, 4]
x = a.pop()
print(x, a)
y = a.pop(0)
print(y, a)
del a[0]
print(a)` },
      { h: '입력으로 리스트 채우기', b: '<p>빈 리스트로 시작해 반복하며 <code>append</code>하는 것이 가장 흔한 패턴이에요.</p>', code: r`nums = []
for _ in range(3):
    nums.append(int(input()))
print(nums)`, stdin: ['5', '3', '8'] },
    ],
    check: [
      { q: '<code>a = [1, 2]</code>, <code>a.append(3)</code> 후 a는?', opts: ['[1, 2, 3]', '[3]', '[1, 2]', 'None'], ans: 0, why: '맨 뒤에 추가돼요.' },
      { q: '<code>a = a.append(5)</code> 를 하면 a는?', opts: ['None', '[..., 5]', '5', '오류'], ans: 0, why: 'append는 None을 돌려줘요. 원본을 직접 바꾸니 그냥 a.append(5)만 쓰세요.' },
      { q: '<code>a.pop()</code>이 하는 일은?', opts: ['마지막 원소를 꺼내 돌려주고 삭제', '첫 원소를 삭제', '리스트를 비움', '마지막 원소만 확인'], ans: 0, why: '꺼내면서(return) 삭제해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`a = [1, 2]
a.append(3)
print(a)`, ans: '[1, 2, 3]', wrong: ['[3]', '[1, 2]', '[1, 2, [3]]'], why: '맨 뒤에 추가.' },
      { t: 'predict', code: r`a = [1, 2]
a.extend([3, 4])
print(a)`, ans: '[1, 2, 3, 4]', wrong: ['[1, 2, [3, 4]]', '[3, 4]', '[1, 2, 3]'], why: 'extend는 원소를 풀어서 붙여요.' },
      { t: 'predict', code: r`a = [1, 2]
a.append([3, 4])
print(a)`, ans: '[1, 2, [3, 4]]', wrong: ['[1, 2, 3, 4]', '[3, 4]', '[1, 2, 3]'], why: 'append는 리스트도 한 개의 원소로 넣어요.' },
      { t: 'predict', code: r`a = [10, 20, 30]
a.insert(1, 15)
print(a)`, ans: '[10, 15, 20, 30]', wrong: ['[10, 20, 15, 30]', '[15, 10, 20, 30]', '[10, 15, 30]'], why: '1번 자리에 끼워 넣어요.' },
      { t: 'predict', code: r`b = [1, 2, 1, 2]
b.remove(2)
print(b)`, ans: '[1, 1, 2]', wrong: ['[1, 1]', '[1, 2, 1]', '[2, 2]'], why: '처음 만나는 2 하나만 삭제.' },
      { t: 'predict', code: r`a = [1, 2, 3, 4]
x = a.pop()
print(x, a)`, ans: '4 [1, 2, 3]', wrong: ['1 [2, 3, 4]', '4 [1, 2, 3, 4]', '[4] [1, 2, 3]'], why: '마지막 원소 4를 꺼내요.' },
      { t: 'predict', code: r`a = [1, 2, 3]
a = a.append(4)
print(a)`, ans: 'None', wrong: ['[1, 2, 3, 4]', '[4]', '오류'], why: 'append의 반환값은 None.' },
      { t: 'blank', code: r`a = []
for i in range(3):
    a.___(i * 2)
print(a)`, ans: ['append'], extra: ['add', 'push', 'insert'], out: '[0, 2, 4]', why: '뒤에 하나씩 추가.' },
      { t: 'blank', code: r`a = [5, 3, 8]
a.___(3)
print(a)`, ans: ['remove'], extra: ['pop', 'delete', 'append'], out: '[5, 8]', why: '값을 지우는 메서드는 remove.' },
      { t: 'parsons', lines: [r`a = [1, 2, 3]`, r`a.append(4)`, r`a.remove(1)`, r`print(a)`], out: '[2, 3, 4]', why: '순서대로 실행하며 리스트가 바뀌어요.' },
      { t: 'bug', code: r`a = [1, 2, 3]
a.remove(5)
print(a)`, line: 2, fix: r`a.remove(2)`, out: '[1, 3]', why: '리스트에 없는 값을 remove 하면 오류(ValueError)예요.' },
      { t: 'bug', code: r`nums = [1, 2]
nums.add(3)
print(nums)`, line: 2, fix: r`nums.append(3)`, out: '[1, 2, 3]', why: '리스트에 추가하는 메서드는 add 가 아니라 append.' },
    ],
    tasks: [
      { q: '먼저 정수 n을 입력받고, 이어서 <b>n개의 정수</b>를 입력받아 리스트에 담은 뒤 리스트를 출력하세요. (<code>append</code> 사용)', starter: '', tests: [{ in: ['3', '5', '3', '8'], out: '[5, 3, 8]' }, { in: ['1', '7'], out: '[7]', hidden: true }, { in: ['4', '1', '2', '3', '4'], out: '[1, 2, 3, 4]' }], need: [r`\.append\(`], needMsg: 'append 를 사용해 주세요.', sol: r`n = int(input())
nums = []
for _ in range(n):
    nums.append(int(input()))
print(nums)`, hints: ['빈 리스트 nums = [] 로 시작해요.', 'n번 반복하며 입력을 받아 append.', '숫자로 담으려면 int(input()).'] },
      { q: '리스트 <code>a</code>에서 <code>3</code>을 <b>삭제</b>하고, 맨 뒤에 <code>10</code>을 <b>추가</b>한 뒤 리스트를 출력하세요.', starter: 'a = [5, 3, 8]\n', tests: [{ out: '[5, 8, 10]' }], need: [r`\.remove\(`, r`\.append\(`], needMsg: 'remove 와 append 를 사용해 주세요.', sol: r`a = [5, 3, 8]
a.remove(3)
a.append(10)
print(a)`, hints: ['값을 지우는 메서드는 remove.', '뒤에 추가는 append.', '마지막에 print(a).'] },
      { q: '리스트 <code>a</code>의 <b>마지막 원소를 꺼내서</b>(pop) 그 값과 남은 리스트를 각각 한 줄씩 출력하세요.', starter: 'a = [4, 5, 6]\n', tests: [{ out: '6\n[4, 5]' }], need: [r`\.pop\(`], needMsg: 'pop 을 사용해 주세요.', sol: r`a = [4, 5, 6]
x = a.pop()
print(x)
print(a)`, hints: ['pop() 은 꺼낸 값을 돌려줘요.', '변수에 받아서 출력해요.', '그다음 리스트를 출력.'] },
    ],
    boss: { q: '정수를 한 줄씩 계속 입력받다가 <code>0</code>이 입력되면 멈추고, 입력된 수(0 제외)가 담긴 <b>리스트</b>와 <b>개수</b>를 각각 한 줄씩 출력하세요.<br>예: <code>3, 5, 0</code> → <code>[3, 5]</code> / <code>2</code>', starter: '', tests: [{ in: ['3', '5', '0'], out: '[3, 5]\n2' }, { in: ['0'], out: '[]\n0', hidden: true }, { in: ['9', '8', '7', '6', '0'], out: '[9, 8, 7, 6]\n4' }], need: [r`\.append\(`], needMsg: 'append 를 사용해 주세요.', sol: r`nums = []
while True:
    n = int(input())
    if n == 0:
        break
    nums.append(n)
print(nums)
print(len(nums))`, hints: ['빈 리스트로 시작하고 while True 로 입력을 반복해요.', '0이면 break, 아니면 append.', '반복이 끝난 뒤 리스트와 len() 을 출력해요.'] },
    sum: ['<code>a.append(x)</code> 뒤에 1개 · <code>a.extend(리스트)</code> 뒤에 여러 개', '<code>a.insert(번호, x)</code> 끼워 넣기 · <code>a.remove(x)</code> 값 삭제(처음 하나)', '<code>a.pop()</code> 마지막 꺼내기 · <code>a.pop(i)</code> · <code>del a[i]</code>', '리스트 메서드는 원본을 직접 변경 (반환값 None)', '입력 채우기: <code>nums = []</code> + 반복 + <code>append</code>'],
  },
  {
    id: 27, emoji: '🔄', title: '리스트와 반복', goal: '번호와 값을 함께 순회하고, 조건에 맞는 원소로 새 리스트를 만들고, 두 리스트를 짝지어요',
    tips: '<b>순회 중인 리스트를 같은 반복 안에서 지우지 마세요</b>. 새 리스트에 담는 방식이 안전해요.',
    learn: [
      { h: '번호로 순회: range(len(a))', b: '<p>번호가 필요할 때는 <code>range(len(a))</code>로 번호를 만들어 <code>a[i]</code>로 접근해요. 이웃한 원소를 비교할 때 편해요.</p>', code: r`a = [3, 7, 2, 9]
for i in range(len(a)):
    print(i, a[i])` },
      { h: 'enumerate: 번호와 값을 함께', b: '<p><code>for i, x in enumerate(a):</code>는 번호(i)와 값(x)을 동시에 줘요. 훨씬 읽기 쉬워요. <code>enumerate(a, 1)</code>은 1부터 세요.</p>', code: r`names = ["민수", "지영", "철수"]
for i, name in enumerate(names):
    print(i, name)
for rank, name in enumerate(names, 1):
    print(f"{rank}등: {name}")` },
      { h: '조건에 맞는 원소로 새 리스트', b: '<p>빈 리스트를 만들어 두고, 조건에 맞으면 <code>append</code>해요. 원본은 그대로 남아요.</p>', code: r`nums = [1, 2, 3, 4, 5, 6]
evens = []
for n in nums:
    if n % 2 == 0:
        evens.append(n)
print(evens)
print(nums)` },
      { h: 'zip: 두 리스트를 짝지어 순회', b: '<p><code>zip(a, b)</code>는 같은 번호의 원소끼리 짝지어 줘요.</p>', code: r`names = ["민수", "지영"]
scores = [80, 95]
for name, score in zip(names, scores):
    print(f"{name}: {score}점")` },
    ],
    check: [
      { q: '번호와 값을 동시에 얻는 함수는?', opts: ['enumerate()', 'range()', 'zip()', 'len()'], ans: 0, why: 'enumerate는 (번호, 값) 쌍을 줘요.' },
      { q: '<code>zip([1, 2], ["a", "b"])</code>는 무엇을 만들까요?', opts: ['(1, "a"), (2, "b") 쌍', '[1, 2, "a", "b"]', '[[1, 2], ["a", "b"]]', '오류'], ans: 0, why: '같은 번호끼리 짝을 지어요.' },
      { q: '조건에 맞는 값만 모은 새 리스트를 만들려면?', opts: ['빈 리스트에 append', 'remove 로 지우기', 'insert 로 끼우기', 'del 로 삭제'], ans: 0, why: '새 리스트에 담는 것이 안전해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`a = [3, 7, 2]
for i in range(len(a)):
    print(i, a[i])`, ans: '0 3\n1 7\n2 2', wrong: ['3 0\n7 1\n2 2', '0 3\n1 7', '3\n7\n2'], why: '번호와 값이 함께 출력돼요.' },
      { t: 'predict', code: r`for i, x in enumerate(["a", "b", "c"]):
    print(i, x)`, ans: '0 a\n1 b\n2 c', wrong: ['1 a\n2 b\n3 c', 'a 0\nb 1\nc 2', 'a\nb\nc'], why: 'enumerate 는 0부터 세요.' },
      { t: 'predict', code: r`for i, x in enumerate(["a", "b"], 1):
    print(i, x)`, ans: '1 a\n2 b', wrong: ['0 a\n1 b', 'a 1\nb 2', '1 a'], why: '두 번째 인자로 시작 번호를 정해요.' },
      { t: 'predict', code: r`nums = [1, 2, 3, 4, 5, 6]
evens = []
for n in nums:
    if n % 2 == 0:
        evens.append(n)
print(evens)`, ans: '[2, 4, 6]', wrong: ['[1, 3, 5]', '[1, 2, 3, 4, 5, 6]', '[6]'], why: '짝수만 모아요.' },
      { t: 'predict', code: r`for a, b in zip([1, 2, 3], [10, 20, 30]):
    print(a + b)`, ans: '11\n22\n33', wrong: ['11\n22', '10\n20\n30', '6'], why: '같은 번호끼리 더해요.' },
      { t: 'predict', code: r`a = [1, 5, 2, 8]
count = 0
for i in range(len(a) - 1):
    if a[i] < a[i + 1]:
        count += 1
print(count)`, ans: '2', wrong: ['3', '1', '0'], why: '(1<5) 참, (5<2) 거짓, (2<8) 참 → 2번.' },
      { t: 'blank', code: r`names = ["민수", "지영"]
for i, n in ___(names):
    print(i, n)`, ans: ['enumerate'], extra: ['range', 'zip', 'list'], out: '0 민수\n1 지영', why: '번호와 값을 함께.' },
      { t: 'blank', code: r`result = []
for n in [1, 2, 3, 4]:
    if n > 2:
        result.___(n)
print(result)`, ans: ['append'], extra: ['remove', 'pop', 'insert'], out: '[3, 4]', why: '조건에 맞으면 추가.' },
      { t: 'parsons', lines: [r`names = ["a", "b"]`, r`nums = [1, 2]`, r`for n, k in zip(names, nums):`, r`    print(n * k)`], out: 'a\nbb', why: '두 리스트를 짝지어 순회해요.' },
      { t: 'bug', code: r`nums = [1, 2, 2, 3]
for n in nums:
    if n == 2:
        nums.remove(n)
print(nums)`, line: 2, fix: r`for n in nums[:]:`, out: '[1, 3]', why: '순회 중인 리스트에서 원소를 지우면 일부를 건너뛰어요. 복사본(nums[:])을 순회하면 안전해요.' },
      { t: 'bug', code: r`names = ["민수", "지영"]
for i, n in enumerate(names)
    print(i, n)`, line: 2, fix: r`for i, n in enumerate(names):`, out: '0 민수\n1 지영', why: 'for 줄 끝의 콜론이 빠졌어요.' },
    ],
    tasks: [
      { q: '리스트 <code>nums</code>에서 <b>짝수만 모아 새 리스트</b>를 만들어 출력하세요.', starter: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]\n', tests: [{ out: '[2, 4, 6, 8]' }], need: [r`\.append\(`], needMsg: 'append 로 새 리스트에 담아 보세요.', sol: r`nums = [1, 2, 3, 4, 5, 6, 7, 8]
evens = []
for n in nums:
    if n % 2 == 0:
        evens.append(n)
print(evens)`, hints: ['빈 리스트 evens = [] 를 만들어요.', '짝수일 때 append.', '반복이 끝난 뒤 evens 를 출력.'] },
      { q: '<code>names</code> 리스트를 <b>1부터 번호를 붙여</b> <code>1. 민수</code> 형태로 한 줄씩 출력하세요. (enumerate 사용)', starter: 'names = ["민수", "지영", "철수"]\n', tests: [{ out: '1. 민수\n2. 지영\n3. 철수' }], need: [r`enumerate`], needMsg: 'enumerate 를 사용해 주세요.', sol: r`names = ["민수", "지영", "철수"]
for i, name in enumerate(names, 1):
    print(f"{i}. {name}")`, hints: ['enumerate 의 두 번째 인자로 시작 번호를 정해요.', 'for i, name in enumerate(names, 1):', '<code>print(f"{i}. {name}")</code>'] },
      { q: '두 리스트 <code>a</code>, <code>b</code>의 <b>같은 번호끼리 더한 새 리스트</b>를 출력하세요. (zip 사용)', starter: 'a = [1, 2, 3]\nb = [4, 5, 6]\n', tests: [{ out: '[5, 7, 9]' }], need: [r`zip`], needMsg: 'zip 을 사용해 주세요.', sol: r`a = [1, 2, 3]
b = [4, 5, 6]
result = []
for x, y in zip(a, b):
    result.append(x + y)
print(result)`, hints: ['빈 리스트를 만들어요.', 'for x, y in zip(a, b):', '합을 append.'] },
    ],
    boss: { q: '<code>names</code>와 <code>scores</code>가 주어져 있어요. 먼저 각 학생을 <code>민수: 80점</code> 형태로 한 줄씩 출력하고, 마지막 줄에 <b>최고점 학생</b>을 <code>최고점: 지영 95점</code> 형태로 출력하세요.', starter: 'names = ["민수", "지영", "철수"]\nscores = [80, 95, 70]\n', tests: [{ out: '민수: 80점\n지영: 95점\n철수: 70점\n최고점: 지영 95점' }], need: [r`zip|enumerate|range`], needMsg: '반복 도구(zip, enumerate, range)를 사용해 주세요.', sol: r`names = ["민수", "지영", "철수"]
scores = [80, 95, 70]
best_name = names[0]
best_score = scores[0]
for name, score in zip(names, scores):
    print(f"{name}: {score}점")
    if score > best_score:
        best_name = name
        best_score = score
print(f"최고점: {best_name} {best_score}점")`, hints: ['zip 으로 이름과 점수를 함께 순회해요.', '최고점 이름과 점수를 변수에 보관하고 더 큰 점수를 만나면 갱신.', '반복이 끝난 뒤 마지막 줄을 출력해요.'] },
    sum: ['<code>range(len(a))</code> 번호로 접근 · 이웃 원소 비교', '<code>enumerate(a)</code> 번호+값 · <code>enumerate(a, 1)</code> 1부터', '조건에 맞는 값: 빈 리스트 + <code>append</code>', '<code>zip(a, b)</code> 같은 번호끼리 짝짓기', '순회 중에 같은 리스트를 지우지 않기'],
  },
  {
    id: 28, emoji: '⚡', title: '리스트 컴프리헨션', goal: '반복문으로 리스트를 만드는 코드를 한 줄로 간결하게 써요',
    tips: '컴프리헨션은 <b>“[결과 for 변수 in 반복할것 if 조건]”</b> 한 줄이에요. 처음엔 for 문으로 먼저 쓰고, 그것을 한 줄로 옮겨 보세요.',
    learn: [
      { h: '기본 모양', b: '<p>아래 두 코드는 똑같은 일을 해요. 컴프리헨션은 <b>새 리스트를 만드는 for 문</b>을 대괄호 안에 압축한 거예요.</p>', code: r`squares = []
for n in range(1, 6):
    squares.append(n * n)
print(squares)

squares2 = [n * n for n in range(1, 6)]
print(squares2)` },
      { h: '조건 붙이기', b: '<p>끝에 <code>if 조건</code>을 붙이면 조건에 맞는 원소만 골라서 변환해요.</p>', code: r`nums = [1, 2, 3, 4, 5, 6]
evens = [n for n in nums if n % 2 == 0]
print(evens)
big = [n * 10 for n in nums if n > 3]
print(big)` },
      { h: '문자열 리스트 다루기', b: '<p>각 원소에 문자열 메서드를 적용하는 데도 좋아요.</p>', code: r`words = ["apple", "kiwi", "banana"]
print([w.upper() for w in words])
print([len(w) for w in words])
print([w for w in words if len(w) > 4])` },
      { h: '입력 한 줄을 숫자 리스트로', b: '<p>공백으로 구분된 숫자를 한 줄로 받아 리스트로 만드는 대표 패턴이에요: <code>[int(x) for x in input().split()]</code></p>', code: r`nums = [int(x) for x in input().split()]
print(nums)
print(sum(nums))`, stdin: ['3 1 4 1 5'] },
    ],
    check: [
      { q: '<code>[x * 2 for x in [1, 2, 3]]</code>의 결과는?', opts: ['[2, 4, 6]', '[1, 2, 3, 1, 2, 3]', '[2, 3, 4]', '6'], ans: 0, why: '각 원소를 2배로 만든 새 리스트.' },
      { q: '<code>[x for x in range(5) if x % 2 == 0]</code>의 결과는?', opts: ['[0, 2, 4]', '[1, 3]', '[0, 1, 2, 3, 4]', '[2, 4]'], ans: 0, why: '짝수만 골라요.' },
      { q: '컴프리헨션의 결과 자료형은?', opts: ['리스트', '문자열', '튜플', '숫자'], ans: 0, why: '대괄호 안에 쓰면 리스트가 돼요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`print([x * 2 for x in [1, 2, 3]])`, ans: '[2, 4, 6]', wrong: ['[1, 2, 3, 1, 2, 3]', '[2, 3, 4]', '6'], why: '각 원소 2배.' },
      { t: 'predict', code: r`print([n for n in range(5) if n % 2 == 0])`, ans: '[0, 2, 4]', wrong: ['[1, 3]', '[0, 1, 2, 3, 4]', '[2, 4]'], why: '짝수만.' },
      { t: 'predict', code: r`print([n * n for n in range(1, 5)])`, ans: '[1, 4, 9, 16]', wrong: ['[1, 2, 3, 4]', '[1, 4, 9]', '[2, 4, 6, 8]'], why: '제곱.' },
      { t: 'predict', code: r`words = ["apple", "kiwi", "banana"]
print([len(w) for w in words])`, ans: '[5, 4, 6]', wrong: ['[3]', '[apple, kiwi, banana]', '15'], why: '각 단어의 길이.' },
      { t: 'predict', code: r`words = ["apple", "kiwi", "banana"]
print([w for w in words if len(w) > 4])`, ans: "['apple', 'banana']", wrong: ["['kiwi']", "['apple', 'kiwi', 'banana']", '[5, 6]'], why: '5글자 이상인 단어만.' },
      { t: 'predict', code: r`print([c.upper() for c in "abc"])`, ans: "['A', 'B', 'C']", wrong: ['ABC', "['abc']", "['a', 'b', 'c']"], why: '글자마다 대문자로.' },
      { t: 'predict', code: r`print(sum([x for x in range(1, 11) if x % 3 == 0]))`, ans: '18', wrong: ['3', '55', '9'], why: '3+6+9 = 18' },
      { t: 'blank', code: r`nums = [1, 2, 3]
print([x * 10 ___ x in nums])`, ans: ['for'], extra: ['in', 'if', 'while'], out: '[10, 20, 30]', why: '컴프리헨션에도 for 가 있어요.' },
      { t: 'blank', code: r`nums = [1, 2, 3, 4]
print([x for x in nums ___ x > 2])`, ans: ['if'], extra: ['for', 'when', 'and'], out: '[3, 4]', why: '조건은 끝에 if 로.' },
      { t: 'parsons', lines: [r`words = ["a", "bb", "ccc"]`, r`lengths = [len(w) for w in words]`, r`print(lengths)`], out: '[1, 2, 3]', why: '리스트를 만들고 컴프리헨션으로 변환해 출력.' },
      { t: 'bug', code: r`nums = [1, 2, 3, 4]
print([x for x in nums if x > 2 x * 2])`, line: 2, fix: r`print([x * 2 for x in nums if x > 2])`, out: '[6, 8]', why: '결과식(x * 2)은 맨 앞에 쓰고 조건 if 는 맨 뒤에 써요.' },
    ],
    tasks: [
      { q: '정수 n을 입력받아 <b>1부터 n까지의 제곱</b>을 담은 리스트를 컴프리헨션으로 만들어 출력하세요.', starter: '', tests: [{ in: ['5'], out: '[1, 4, 9, 16, 25]' }, { in: ['1'], out: '[1]', hidden: true }, { in: ['3'], out: '[1, 4, 9]' }], need: [r`\[[^\]]*\bfor\b[^\]]*\]`], needMsg: '컴프리헨션([... for ... in ...])을 사용해 주세요.', sol: r`n = int(input())
print([i * i for i in range(1, n + 1)])`, hints: ['range(1, n + 1) 로 1부터 n까지.', '결과식은 i * i.', '<code>[i * i for i in range(1, n + 1)]</code>'] },
      { q: '단어 리스트 <code>words</code>에서 <b>글자 수가 4 이상인 단어만</b> 대문자로 바꾼 리스트를 출력하세요.', starter: 'words = ["sky", "tree", "flower", "sun"]\n', tests: [{ out: "['TREE', 'FLOWER']" }], need: [r`\[[^\]]*\bfor\b[^\]]*\]`], needMsg: '컴프리헨션을 사용해 주세요.', sol: r`words = ["sky", "tree", "flower", "sun"]
print([w.upper() for w in words if len(w) >= 4])`, hints: ['변환식은 w.upper().', '조건은 len(w) >= 4.', '<code>[w.upper() for w in words if len(w) >= 4]</code>'] },
      { q: '공백으로 구분된 정수 한 줄을 입력받아 <b>각 수를 두 배로</b> 한 리스트를 출력하세요. (예: <code>1 2 3</code> → <code>[2, 4, 6]</code>)', starter: '', tests: [{ in: ['1 2 3'], out: '[2, 4, 6]' }, { in: ['5'], out: '[10]', hidden: true }, { in: ['10 20 30 40'], out: '[20, 40, 60, 80]' }], sol: r`nums = [int(x) for x in input().split()]
print([n * 2 for n in nums])`, hints: ['입력을 split() 으로 쪼개 int 로 바꿔요.', '그 리스트를 다시 컴프리헨션으로 2배.', '한 줄로도 쓸 수 있어요.'] },
    ],
    boss: { q: '정수 n을 입력받아 <b>1부터 n까지 중 3의 배수의 제곱</b>을 담은 리스트와, 그 <b>합</b>을 각각 한 줄씩 출력하세요.<br>예: n=10 → <code>[9, 36, 81]</code> / <code>126</code>', starter: '', tests: [{ in: ['10'], out: '[9, 36, 81]\n126' }, { in: ['2'], out: '[]\n0', hidden: true }, { in: ['6'], out: '[9, 36]\n45' }], need: [r`\[[^\]]*\bfor\b[^\]]*\]`], needMsg: '컴프리헨션을 사용해 주세요.', sol: r`n = int(input())
sq = [i * i for i in range(1, n + 1) if i % 3 == 0]
print(sq)
print(sum(sq))`, hints: ['조건 i % 3 == 0 인 i 만 골라 제곱해요.', 'sum() 으로 리스트의 합을 구해요.', '리스트를 변수에 담아 두 번 사용해요.'] },
    sum: ['<code>[결과 for 변수 in 반복 if 조건]</code>', '<code>[n * n for n in range(1, 6)]</code> 변환', '<code>[n for n in a if n % 2 == 0]</code> 필터', '<code>[int(x) for x in input().split()]</code> 입력 → 숫자 리스트', '복잡해지면 for 문으로 풀어 쓰는 것이 더 읽기 쉽다'],
  },
  {
    id: 29, emoji: '🏅', title: '정렬과 집계', goal: '정렬하고, 합·최대·최소·평균을 구하고, 리스트를 문자열로 합쳐요',
    tips: '<code>sorted()</code>는 <b>새 리스트</b>를 돌려주고 <code>a.sort()</code>는 <b>원본을 바꿔요</b>. 헷갈리지 않게 기억해 두세요.',
    learn: [
      { h: 'sorted와 sort', b: '<ul><li><code>sorted(a)</code> 정렬된 <b>새 리스트</b> (원본 유지)</li><li><code>a.sort()</code> 원본을 정렬 (반환값 None)</li><li><code>reverse=True</code> 로 내림차순</li></ul>', code: r`a = [3, 1, 2]
print(sorted(a))
print(a)
a.sort(reverse=True)
print(a)` },
      { h: 'min, max, sum, len', b: '<p>숫자 리스트의 최소·최대·합·개수는 내장 함수 한 번으로 구해요. 평균은 <code>sum(a) / len(a)</code>예요.</p>', code: r`a = [80, 95, 70]
print(min(a), max(a))
print(sum(a), len(a))
print(sum(a) / len(a))` },
      { h: 'key로 기준 바꾸기', b: '<p><code>key=함수</code>로 정렬·최대·최소의 기준을 정해요. 예를 들어 <code>key=len</code>이면 글자 수 기준이에요.</p>', code: r`words = ["banana", "kiwi", "apple"]
print(sorted(words))
print(sorted(words, key=len))
print(max(words, key=len))` },
      { h: 'join: 리스트 → 문자열', b: '<p><code>"구분자".join(문자열리스트)</code>는 리스트의 문자열을 한 줄로 이어요. 숫자는 먼저 문자열로 바꿔야 해요.</p>', code: r`words = ["a", "b", "c"]
print("-".join(words))
print(" ".join(words))
nums = [1, 2, 3]
print(", ".join([str(n) for n in nums]))` },
    ],
    check: [
      { q: '원본을 바꾸지 않고 정렬된 새 리스트를 돌려주는 것은?', opts: ['sorted(a)', 'a.sort()', 'a.reverse()', 'a.append()'], ans: 0, why: 'sorted 는 새 리스트, sort 는 원본 변경.' },
      { q: '<code>sum([1, 2, 3]) / len([1, 2, 3])</code>은 무엇을 구할까요?', opts: ['평균', '합계', '개수', '최댓값'], ans: 0, why: '합을 개수로 나누면 평균.' },
      { q: '<code>", ".join(["a", "b"])</code>의 결과는?', opts: ['a, b', '["a", "b"]', 'a b', 'ab'], ans: 0, why: '구분자 ", "로 이어요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`a = [3, 1, 2]
print(sorted(a))
print(a)`, ans: '[1, 2, 3]\n[3, 1, 2]', wrong: ['[1, 2, 3]\n[1, 2, 3]', '[3, 1, 2]\n[1, 2, 3]', '[1, 2, 3]'], why: 'sorted 는 원본을 바꾸지 않아요.' },
      { t: 'predict', code: r`a = [3, 1, 2]
a.sort()
print(a)`, ans: '[1, 2, 3]', wrong: ['[3, 1, 2]', 'None', '[3, 2, 1]'], why: 'sort 는 원본을 정렬해요.' },
      { t: 'predict', code: r`a = [3, 1, 2]
print(sorted(a, reverse=True))`, ans: '[3, 2, 1]', wrong: ['[1, 2, 3]', '[3, 1, 2]', 'None'], why: '내림차순.' },
      { t: 'predict', code: r`a = [80, 95, 70]
print(min(a), max(a), sum(a))`, ans: '70 95 245', wrong: ['80 95 245', '70 95 3', '95 70 245'], why: '최소, 최대, 합.' },
      { t: 'predict', code: r`a = [2, 4, 6]
print(sum(a) / len(a))`, ans: '4.0', wrong: ['4', '12', '3'], why: '12 / 3 = 4.0' },
      { t: 'predict', code: r`words = ["banana", "kiwi", "apple"]
print(sorted(words, key=len))`, ans: "['kiwi', 'apple', 'banana']", wrong: ["['apple', 'banana', 'kiwi']", "['banana', 'apple', 'kiwi']", "['kiwi', 'banana', 'apple']"], why: '글자 수가 적은 순서: 4, 5, 6.' },
      { t: 'predict', code: r`print("-".join(["a", "b", "c"]))`, ans: 'a-b-c', wrong: ['abc', 'a b c', "['a', 'b', 'c']"], why: '구분자로 이어요.' },
      { t: 'blank', code: r`a = [5, 2, 9]
print(___(a))`, ans: ['sorted'], extra: ['sort', 'order', 'min'], out: '[2, 5, 9]', why: '새 정렬 리스트를 돌려주는 함수는 sorted.' },
      { t: 'blank', code: r`a = [80, 95, 70]
print(sum(a) ___ len(a))`, ans: ['/'], extra: ['*', '-', '//'], out: '81.66666666666667', why: '평균은 합 ÷ 개수.' },
      { t: 'parsons', lines: [r`a = [4, 9, 1]`, r`a.sort()`, r`print(a[0], a[-1])`], out: '1 9', why: '정렬하면 첫 원소가 최소, 마지막이 최대예요.' },
      { t: 'bug', code: r`a = [3, 1, 2]
a = a.sort()
print(a)`, line: 2, fix: r`a.sort()`, out: '[1, 2, 3]', why: 'sort() 는 None 을 돌려줘서 a 가 None 이 돼요. 그냥 a.sort() 만 쓰거나 a = sorted(a).' },
    ],
    tasks: [
      { q: '공백으로 구분된 정수 한 줄을 입력받아 <b>오름차순으로 정렬한 리스트</b>를 출력하세요.', starter: '', tests: [{ in: ['3 1 2'], out: '[1, 2, 3]' }, { in: ['5'], out: '[5]', hidden: true }, { in: ['10 -1 7 3'], out: '[-1, 3, 7, 10]' }], sol: r`nums = [int(x) for x in input().split()]
print(sorted(nums))`, hints: ['입력을 숫자 리스트로 만들어요.', '정렬은 sorted().', '<code>print(sorted(nums))</code>'] },
      { q: '공백으로 구분된 점수 한 줄을 입력받아 <b>최고점, 최저점, 평균</b>을 각각 한 줄씩 출력하세요. 평균은 <code>sum / len</code> 그대로 출력해요.', starter: '', tests: [{ in: ['80 95 70'], out: '95\n70\n81.66666666666667' }, { in: ['10 20 30'], out: '30\n10\n20.0' }, { in: ['50'], out: '50\n50\n50.0', hidden: true }], sol: r`s = [int(x) for x in input().split()]
print(max(s))
print(min(s))
print(sum(s) / len(s))`, hints: ['max(), min(), sum(), len() 을 사용해요.', '평균은 sum(s) / len(s).', '세 줄로 출력해요.'] },
      { q: '단어들을 공백으로 구분해 한 줄에 입력받아 <b>가장 긴 단어</b>를 출력하세요. (길이가 같으면 먼저 나온 단어)', starter: '', tests: [{ in: ['apple banana kiwi'], out: 'banana' }, { in: ['a'], out: 'a', hidden: true }, { in: ['cat dog bird'], out: 'bird' }], sol: r`words = input().split()
print(max(words, key=len))`, hints: ['입력을 split() 으로 단어 리스트로 만들어요.', 'max 에 key=len 을 주면 길이가 가장 긴 것이 나와요.', '<code>max(words, key=len)</code>'] },
    ],
    boss: { q: '점수를 공백으로 구분해 한 줄에 입력받아 아래 세 줄을 출력하세요.<br>① <code>최고: ○ 최저: ○</code> ② <code>평균: ○.○</code>(소수 첫째 자리) ③ 점수를 <b>높은 순으로 정렬해 쉼표+공백으로 이은 한 줄</b><br>예: <code>80 95 70</code> → <pre style="margin:6px 0">최고: 95 최저: 70\n평균: 81.7\n95, 80, 70</pre>', starter: '', tests: [{ in: ['80 95 70'], out: '최고: 95 최저: 70\n평균: 81.7\n95, 80, 70' }, { in: ['100 100'], out: '최고: 100 최저: 100\n평균: 100.0\n100, 100' }, { in: ['60 75 90 85'], out: '최고: 90 최저: 60\n평균: 77.5\n90, 85, 75, 60', hidden: true }], sol: r`s = [int(x) for x in input().split()]
print(f"최고: {max(s)} 최저: {min(s)}")
print(f"평균: {sum(s) / len(s):.1f}")
print(", ".join([str(x) for x in sorted(s, reverse=True)]))`, hints: ['세 줄을 차례로 출력해요.', '평균은 f"{값:.1f}" 로 소수 첫째 자리까지.', '숫자 리스트는 str() 로 바꿔서 join 해요: <code>", ".join([str(x) for x in ...])</code>'] },
    sum: ['<code>sorted(a)</code> 새 리스트 · <code>a.sort()</code> 원본 정렬(반환 None) · <code>reverse=True</code>', '<code>min</code> <code>max</code> <code>sum</code> <code>len</code> · 평균 = <code>sum(a) / len(a)</code>', '<code>key=len</code> 같은 기준 함수', '<code>"구분자".join(문자열리스트)</code>', '<code>a = a.sort()</code> 는 None 이 되는 흔한 실수'],
  },
  {
    id: 30, emoji: '🎲', title: '2차원 리스트와 프로젝트', goal: '리스트 안의 리스트로 표·격자를 다루고, 틱택토 승자를 판정해요',
    tips: '2차원 리스트는 <code>grid[행][열]</code> 로 접근해요. 반복문 두 개(행, 열)로 훑는 것이 기본 패턴이에요.',
    learn: [
      { h: '리스트 안의 리스트', b: '<p>리스트의 원소가 또 리스트이면 <b>표(2차원 리스트)</b>가 돼요. 바깥 리스트의 각 원소가 <b>한 행</b>이에요.</p>', code: r`grid = [
    [1, 2, 3],
    [4, 5, 6],
]
print(grid)
print(grid[0])
print(grid[1][2])
print(len(grid), len(grid[0]))` },
      { h: '이중 for로 훑기', b: '<p>행을 바깥, 열을 안쪽 반복으로 훑어 모든 칸을 처리해요.</p>', code: r`grid = [[1, 2, 3], [4, 5, 6]]
for row in grid:
    for v in row:
        print(v, end=" ")
    print()` },
      { h: '행의 합, 열의 합', b: '<p>행의 합은 <code>sum(row)</code>, 열의 합은 번호로 모아요.</p>', code: r`grid = [[1, 2, 3], [4, 5, 6]]
for row in grid:
    print(sum(row))
col0 = 0
for row in grid:
    col0 += row[0]
print(col0)` },
      { h: '2차원 리스트 만들기 주의', b: '<p>0으로 채운 3×2 표를 만들 때 <code>[[0] * 2] * 3</code> 은 같은 행을 3번 복사 참조해서 한 칸을 바꾸면 <b>모든 행이 바뀌는 함정</b>이 있어요. 컴프리헨션으로 만드세요.</p>', code: r`good = [[0] * 2 for _ in range(3)]
good[0][0] = 9
print(good)
bad = [[0] * 2] * 3
bad[0][0] = 9
print(bad)` },
    ],
    check: [
      { q: '<code>grid = [[1, 2], [3, 4]]</code>에서 <code>grid[1][0]</code>은?', opts: ['3', '2', '1', '4'], ans: 0, why: '1번 행 [3, 4]의 0번 → 3.' },
      { q: '<code>len(grid)</code>가 알려 주는 것은? (grid는 2차원 리스트)', opts: ['행의 수', '열의 수', '전체 칸의 수', '합계'], ans: 0, why: '바깥 리스트의 원소 수 = 행의 수.' },
      { q: '3×2 표를 안전하게 만드는 방법은?', opts: ['[[0] * 2 for _ in range(3)]', '[[0] * 2] * 3', '[0] * 6', '[[0, 0]] * 3'], ans: 0, why: '행마다 새 리스트가 만들어져요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`grid = [[1, 2, 3], [4, 5, 6]]
print(grid[1][2])`, ans: '6', wrong: ['3', '5', '[4, 5, 6]'], why: '1번 행의 2번 열.' },
      { t: 'predict', code: r`grid = [[1, 2, 3], [4, 5, 6]]
print(grid[0])`, ans: '[1, 2, 3]', wrong: ['1', '[1, 4]', '[[1, 2, 3]]'], why: '첫 번째 행.' },
      { t: 'predict', code: r`grid = [[1, 2, 3], [4, 5, 6]]
print(len(grid), len(grid[0]))`, ans: '2 3', wrong: ['3 2', '6 3', '2 2'], why: '2행 3열.' },
      { t: 'predict', code: r`grid = [[1, 2], [3, 4]]
total = 0
for row in grid:
    for v in row:
        total += v
print(total)`, ans: '10', wrong: ['3', '7', '4'], why: '모든 칸의 합.' },
      { t: 'predict', code: r`grid = [[1, 2], [3, 4]]
for row in grid:
    print(sum(row))`, ans: '3\n7', wrong: ['4\n6', '10', '1\n3'], why: '각 행의 합.' },
      { t: 'predict', code: r`g = [[0] * 2 for _ in range(2)]
g[0][0] = 5
print(g)`, ans: '[[5, 0], [0, 0]]', wrong: ['[[5, 0], [5, 0]]', '[[5, 5], [0, 0]]', '[5, 0]'], why: '행마다 따로 만들었으니 한 칸만 바뀌어요.' },
      { t: 'predict', code: r`g = [[0] * 2] * 2
g[0][0] = 5
print(g)`, ans: '[[5, 0], [5, 0]]', wrong: ['[[5, 0], [0, 0]]', '[[5, 5], [0, 0]]', '[5, 0]'], why: '같은 행을 공유해서 모든 행이 바뀌어요.' },
      { t: 'blank', code: r`grid = [[1, 2], [3, 4]]
print(grid[___][1])`, ans: ['1'], extra: ['0', '2', '-2'], out: '4', why: '4는 1번 행의 1번 열.' },
      { t: 'blank', code: r`grid = [[1, 2], [3, 4]]
for row in grid:
    print(___(row))`, ans: ['sum'], extra: ['len', 'max', 'list'], out: '3\n7', why: '행의 합은 sum.' },
      { t: 'parsons', lines: [r`grid = [[1, 2], [3, 4]]`, r`d = 0`, r`for i in range(2):`, r`    d += grid[i][i]`, r`print(d)`], out: '5', why: '대각선 칸은 행번호와 열번호가 같아요.' },
      { t: 'bug', code: r`grid = [[1, 2], [3, 4]]
print(grid[2][0])`, line: 2, fix: r`print(grid[1][0])`, out: '3', why: '행이 2개면 번호는 0, 1 까지예요 (IndexError).' },
    ],
    tasks: [
      { q: '2차원 리스트 <code>grid</code>의 <b>모든 칸의 합</b>을 출력하세요.', starter: 'grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n', tests: [{ out: '45' }], need: [r`\bfor\b`], needMsg: '반복문을 사용해 주세요.', sol: r`grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
total = 0
for row in grid:
    for v in row:
        total += v
print(total)`, hints: ['행을 훑고 그 안에서 칸을 훑어요.', '합계 변수를 0으로 시작.', '이중 for 문.'] },
      { q: '<code>grid</code>의 <b>각 행의 합</b>을 한 줄에 하나씩 출력하세요.', starter: 'grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n', tests: [{ out: '6\n15\n24' }], sol: r`grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in grid:
    print(sum(row))`, hints: ['행을 하나씩 꺼내면 리스트예요.', '리스트의 합은 sum().', '<code>for row in grid: print(sum(row))</code>'] },
      { q: '<code>grid</code>의 <b>주 대각선(왼쪽 위 → 오른쪽 아래)</b> 합을 출력하세요.', starter: 'grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n', tests: [{ out: '15' }], sol: r`grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
d = 0
for i in range(3):
    d += grid[i][i]
print(d)`, hints: ['대각선 칸은 행 번호와 열 번호가 같아요.', 'grid[i][i] 를 더해요.', 'i 는 0, 1, 2.'] },
    ],
    boss: { q: '<b>틱택토 심판!</b> 3×3 판을 <b>세 줄</b>로 입력받아요 (각 줄은 <code>X</code>, <code>O</code>, <code>.</code> 세 글자). 가로·세로·대각선으로 <b>세 칸이 같은 글자(X 또는 O)</b>이면 그 글자를, 승자가 없으면 <code>무승부</code>를 출력하세요. (승자는 최대 한 명만 있어요)<br>예: <code>XOX</code>, <code>OXO</code>, <code>OOX</code> → <code>X</code>', starter: '', tests: [{ in: ['XOX', 'OXO', 'OOX'], out: 'X' }, { in: ['OOO', 'XX.', 'X..'], out: 'O' }, { in: ['XOX', 'XOO', 'OXX'], out: '무승부' }, { in: ['X.O', 'XO.', 'X.O'], out: 'X', hidden: true }, { in: ['..O', '.O.', 'OXX'], out: 'O', hidden: true }, { in: ['...', '...', '...'], out: '무승부', hidden: true }], sol: r`b = [input() for _ in range(3)]
lines = []
for i in range(3):
    lines.append(b[i])
    lines.append(b[0][i] + b[1][i] + b[2][i])
lines.append(b[0][0] + b[1][1] + b[2][2])
lines.append(b[0][2] + b[1][1] + b[2][0])
if "XXX" in lines:
    print("X")
elif "OOO" in lines:
    print("O")
else:
    print("무승부")`, hints: ['판을 세 줄 리스트로 받아요: <code>b = [input() for _ in range(3)]</code>', '검사할 세 칸짜리 줄은 가로 3 + 세로 3 + 대각선 2 = 8개예요. 각각을 문자열로 만들어 모아요.', '모은 줄 중에 "XXX" 가 있으면 X, "OOO" 가 있으면 O.'] },
    sum: ['<code>grid[행][열]</code> · <code>len(grid)</code> 행 수 · <code>len(grid[0])</code> 열 수', '이중 for: 행을 바깥, 칸을 안쪽에서', '행의 합 <code>sum(row)</code> · 대각선 <code>grid[i][i]</code>', '표 만들기: <code>[[0] * 열 for _ in range(행)]</code> (<code>[[0]*열]*행</code> 은 함정!)', '검사할 후보(가로·세로·대각선)를 리스트로 모아 한꺼번에 확인'],
  },
];
