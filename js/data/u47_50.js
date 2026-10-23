const r = String.raw;

export const U47 = [
  {
    id: 47, emoji: '🏗️', title: '클래스와 객체', goal: '나만의 자료형인 클래스를 만들고, 객체(인스턴스)에 속성과 메서드를 붙여요',
    tips: '클래스는 <b>설계도</b>, 객체는 그 설계도로 만든 <b>물건</b>이에요. 같은 설계도로 여러 개를 만들 수 있고, 각각은 서로 독립적이에요.',
    learn: [
      { h: '객체는 이미 쓰고 있었어요', b: '<p>문자열, 리스트, 딕셔너리도 모두 <b>객체</b>예요. <code>"abc".upper()</code>처럼 <b>값.메서드()</b>로 쓰는 것이 객체의 기능이에요. 이제 우리만의 객체 종류를 만들어 봐요.</p>', code: r`s = "hello"
print(type(s), s.upper())
a = [3, 1, 2]
a.sort()
print(type(a), a)` },
      { h: 'class와 객체 만들기', b: '<p><code>class 이름:</code>으로 설계도(클래스)를 만들고, <code>이름()</code>으로 객체를 만들어요. 클래스 이름은 <b>대문자로 시작</b>하는 것이 관례예요.</p>', code: r`class Dog:
    pass

d = Dog()
print(type(d))
print(isinstance(d, Dog))` },
      { h: '속성: 객체가 가진 값', b: '<p>객체에는 <code>객체.이름 = 값</code>으로 <b>속성</b>을 붙일 수 있어요. 객체마다 값이 달라요.</p>', code: r`class Dog:
    pass

a = Dog()
a.name = "초코"
a.age = 3
b = Dog()
b.name = "몽이"
print(a.name, a.age)
print(b.name)` },
      { h: '메서드: 객체가 하는 일', b: '<p>클래스 안에 <code>def</code>로 만든 함수를 <b>메서드</b>라고 해요. 첫 번째 매개변수는 항상 <code>self</code>(객체 자기 자신)이고, 호출할 때는 쓰지 않아요.</p>', code: r`class Dog:
    def bark(self):
        print("멍멍!")

    def intro(self):
        print("내 이름은", self.name)

d = Dog()
d.name = "초코"
d.bark()
d.intro()` },
    ],
    check: [
      { q: '클래스와 객체의 관계로 알맞은 것은?', opts: ['클래스는 설계도, 객체는 그것으로 만든 실체', '클래스는 변수, 객체는 함수', '둘은 같은 말', '객체가 클래스를 만든다'], ans: 0, why: '붕어빵 틀(클래스)과 붕어빵(객체)처럼요.' },
      { q: '메서드의 첫 번째 매개변수 이름으로 관례적으로 쓰는 것은?', opts: ['self', 'this', 'me', 'obj'], ans: 0, why: '파이썬에서는 self 예요.' },
      { q: '<code>Dog()</code>이 하는 일은?', opts: ['Dog 클래스의 새 객체를 만든다', 'Dog 를 삭제한다', 'Dog 를 출력한다', 'Dog 함수를 정의한다'], ans: 0, why: '클래스 이름에 괄호를 붙이면 객체가 만들어져요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`class Dog:
    def bark(self):
        print("멍멍!")

d = Dog()
d.bark()`, ans: '멍멍!', wrong: ['(아무것도 출력 안 됨)', 'Dog', 'bark'], why: '객체의 메서드를 호출해요.' },
      { t: 'predict', code: r`class Dog:
    pass

a = Dog()
a.name = "초코"
b = Dog()
b.name = "몽이"
print(a.name, b.name)`, ans: '초코 몽이', wrong: ['몽이 몽이', '초코 초코', 'name name'], why: '객체마다 속성이 따로 있어요.' },
      { t: 'predict', code: r`class Counter:
    def show(self):
        print(self.n)

c = Counter()
c.n = 5
c.show()`, ans: '5', wrong: ['n', 'None', '오류'], why: 'self 는 호출한 객체 c 를 가리켜요.' },
      { t: 'predict', code: r`class A:
    pass

x = A()
y = A()
x.v = 1
print(hasattr(x, "v"), hasattr(y, "v"))`, ans: 'True False', wrong: ['True True', 'False False', 'False True'], why: '속성은 그 객체에만 붙어요.' },
      { t: 'predict', code: r`class Dog:
    pass

print(isinstance(Dog(), Dog), isinstance(5, Dog))`, ans: 'True False', wrong: ['True True', 'False False', 'False True'], why: 'isinstance 는 그 클래스의 객체인지 확인해요.' },
      { t: 'predict', code: r`class Cat:
    def speak(self):
        return "야옹"

print(Cat().speak())`, ans: '야옹', wrong: ['Cat', 'speak', 'None'], why: '객체를 만들자마자 메서드를 호출했어요.' },
      { t: 'blank', code: r`___ Dog:
    def bark(self):
        print("멍멍!")

Dog().bark()`, ans: ['class'], extra: ['def', 'object', 'new'], out: '멍멍!', why: '클래스를 만드는 키워드.' },
      { t: 'blank', code: r`class Dog:
    def bark(___):
        print("멍멍!")

Dog().bark()`, ans: ['self'], extra: ['this', 'me', 'dog'], out: '멍멍!', why: '메서드의 첫 번째 매개변수는 self.' },
      { t: 'parsons', lines: [r`class Cat:`, r`    def speak(self):`, r`        print("야옹")`, r`Cat().speak()`], out: '야옹', why: '클래스 정의 → 메서드 → 객체 만들어 호출.' },
      { t: 'bug', code: r`class Dog:
    def bark():
        print("멍멍!")

Dog().bark()`, line: 2, fix: r`    def bark(self):`, out: '멍멍!', why: '메서드는 self 매개변수가 필요해요 (호출하면 객체가 자동으로 넘어가요).' },
      { t: 'bug', code: r`class Dog:
    def bark(self):
print("멍멍!")

Dog().bark()`, line: 3, fix: r`        print("멍멍!")`, out: '멍멍!', why: '메서드 본문은 한 단계 더 들여써야 해요.' },
    ],
    tasks: [
      { q: '<code>Dog</code> 클래스를 만들고, <b>메서드 <code>bark(self)</code>가 <code>멍멍!</code>을 돌려주게(return)</b> 하세요.', starter: 'class Dog:\n    pass\n', check: 'd = Dog()\nassert d.bark() == "멍멍!"', sol: r`class Dog:
    def bark(self):
        return "멍멍!"`, hints: ['클래스 안에 def bark(self): 를 써요.', '출력(print)이 아니라 return 이에요.', '<code>return "멍멍!"</code>'] },
      { q: '<code>Cat</code> 클래스를 만들고, 객체의 <code>name</code> 속성을 사용해 <code>이름 야옹</code> 형태의 문자열을 돌려주는 메서드 <code>speak(self)</code>를 만드세요. (예: <code>name</code>이 <code>나비</code>면 <code>나비 야옹</code>)', starter: 'class Cat:\n    pass\n', check: 'c = Cat()\nc.name = "나비"\nassert c.speak() == "나비 야옹"\nd = Cat()\nd.name = "치즈"\nassert d.speak() == "치즈 야옹"', sol: r`class Cat:
    def speak(self):
        return self.name + " 야옹"`, hints: ['객체의 속성은 self.name 으로 접근해요.', '문자열을 이어 붙여 return.', '<code>return self.name + " 야옹"</code>'] },
      { q: '<code>Rectangle</code> 클래스를 만들고, <code>width</code>와 <code>height</code> 속성을 이용해 <b>넓이</b>를 돌려주는 메서드 <code>area(self)</code>를 만드세요.', starter: 'class Rectangle:\n    pass\n', check: 'r = Rectangle()\nr.width = 3\nr.height = 4\nassert r.area() == 12\nr.width = 10\nassert r.area() == 40', sol: r`class Rectangle:
    def area(self):
        return self.width * self.height`, hints: ['self.width 와 self.height 를 곱해요.', '결과를 return.', '속성은 객체를 만든 뒤 바깥에서 붙일 거예요.'] },
    ],
    boss: { q: '<code>Light</code> 클래스를 만드세요. 객체의 속성 <code>on</code>(켜짐 여부 True/False)을 이용해 <b>메서드 <code>toggle(self)</code>는 켜진 상태를 반대로 바꾸고</b>, <b><code>status(self)</code>는 켜져 있으면 <code>"ON"</code>, 꺼져 있으면 <code>"OFF"</code>를 돌려줘요.</b> (객체를 만든 뒤 <code>on</code>은 바깥에서 지정해요)', starter: 'class Light:\n    pass\n', check: 'a = Light()\na.on = False\nassert a.status() == "OFF"\na.toggle()\nassert a.status() == "ON"\na.toggle()\nassert a.status() == "OFF"\nb = Light()\nb.on = True\nassert b.status() == "ON"\nassert a.status() == "OFF"', sol: r`class Light:
    def toggle(self):
        self.on = not self.on

    def status(self):
        if self.on:
            return "ON"
        return "OFF"`, hints: ['toggle 은 self.on = not self.on 으로 뒤집어요.', 'status 는 self.on 이 True 인지에 따라 문자열을 돌려줘요.', '두 메서드 모두 self 를 첫 매개변수로 써요.'] },
    sum: ['<code>class 이름:</code> 설계도 · <code>이름()</code> 객체 만들기', '속성: <code>객체.이름 = 값</code> (객체마다 따로)', '메서드: 클래스 안의 <code>def f(self, …):</code> · 호출은 <code>객체.f()</code>', '<code>self</code> = 호출한 객체 자신', '<code>isinstance(x, 클래스)</code> · <code>type(x)</code>'],
  },
  {
    id: 48, emoji: '⚙️', title: '__init__과 객체의 상태', goal: '객체를 만들 때 속성을 자동으로 준비하는 __init__과 상태를 바꾸는 메서드를 만들어요',
    tips: '<code>__init__</code>은 객체가 만들어질 때 <b>자동으로 한 번</b> 실행되는 준비 메서드예요. 속성을 모두 여기서 만들어 두면 안전해요.',
    learn: [
      { h: '__init__: 객체를 만들 때 자동 실행', b: '<p><code>Dog("초코", 3)</code>처럼 객체를 만들 때 넘긴 값이 <code>__init__</code>의 매개변수로 들어가요. <code>self.이름 = 값</code>으로 속성을 저장해요. (밑줄 두 개씩!)</p>', code: r`class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def intro(self):
        return f"{self.name}, {self.age}살"

d = Dog("초코", 3)
print(d.intro())
print(Dog("몽이", 5).intro())` },
      { h: '상태를 바꾸는 메서드', b: '<p>객체는 <b>자신의 상태</b>(속성)를 기억하고, 메서드로 그 상태를 바꿔요. 통장, 점수판, 장바구니가 대표적이에요.</p>', code: r`class Account:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            return False
        self.balance -= amount
        return True

a = Account(1000)
a.deposit(500)
print(a.balance)
print(a.withdraw(2000), a.balance)
print(a.withdraw(300), a.balance)` },
      { h: '__str__: 객체를 글자로', b: '<p><code>__str__</code>을 만들면 <code>print(객체)</code>가 예쁜 문장을 보여 줘요. 만들지 않으면 알아보기 힘든 주소가 나와요.</p>', code: r`class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

p = Point(3, 4)
print(p)` },
      { h: '객체는 서로 독립적이에요', b: '<p>같은 클래스로 만든 객체라도 속성은 <b>각자</b> 가져요. 한 객체를 바꿔도 다른 객체는 그대로예요.</p>', code: r`class Counter:
    def __init__(self):
        self.n = 0
    def up(self):
        self.n += 1

a = Counter()
b = Counter()
a.up()
a.up()
b.up()
print(a.n, b.n)` },
    ],
    check: [
      { q: '<code>__init__</code> 메서드는 언제 실행될까요?', opts: ['객체를 만들 때 자동으로', '객체를 지울 때', '출력할 때', '직접 호출해야만'], ans: 0, why: '생성자 역할이에요.' },
      { q: '<code>self.name = name</code>이 하는 일은?', opts: ['받은 값을 객체의 속성으로 저장', '변수 name 을 삭제', 'name 을 출력', '클래스 이름을 바꿈'], ans: 0, why: '객체가 값을 기억하게 해요.' },
      { q: '<code>print(객체)</code> 했을 때 보기 좋은 글자가 나오게 하려면 만드는 메서드는?', opts: ['__str__', '__init__', '__print__', 'show'], ans: 0, why: '__str__ 이 객체의 글자 표현을 정해요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`class Dog:
    def __init__(self, name):
        self.name = name

d = Dog("초코")
print(d.name)`, ans: '초코', wrong: ['name', 'Dog', '오류'], why: '__init__ 이 name 을 저장했어요.' },
      { t: 'predict', code: r`class Counter:
    def __init__(self):
        self.n = 0
    def up(self):
        self.n += 1

a = Counter()
b = Counter()
a.up()
a.up()
b.up()
print(a.n, b.n)`, ans: '2 1', wrong: ['3 3', '1 1', '2 2'], why: '객체마다 n 이 따로.' },
      { t: 'predict', code: r`class Account:
    def __init__(self, balance=0):
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount

a = Account(100)
a.deposit(50)
a.deposit(25)
print(a.balance)`, ans: '175', wrong: ['100', '75', '50'], why: '100 + 50 + 25.' },
      { t: 'predict', code: r`class Account:
    def __init__(self, balance=0):
        self.balance = balance
    def withdraw(self, amount):
        if amount > self.balance:
            return False
        self.balance -= amount
        return True

a = Account(100)
print(a.withdraw(500), a.balance)
print(a.withdraw(30), a.balance)`, ans: 'False 100\nTrue 70', wrong: ['True 100\nTrue 70', 'False 100\nFalse 70', 'False -400\nTrue 70'], why: '잔액이 모자라면 False 를 돌려주고 바꾸지 않아요.' },
      { t: 'predict', code: r`class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __str__(self):
        return f"({self.x}, {self.y})"

print(Point(1, 2))`, ans: '(1, 2)', wrong: ['Point(1, 2)', '1 2', '<Point object>'], why: '__str__ 이 정한 글자가 출력돼요.' },
      { t: 'predict', code: r`class Person:
    def __init__(self, name, age=20):
        self.name = name
        self.age = age

p = Person("민수")
print(p.name, p.age)`, ans: '민수 20', wrong: ['민수 None', '민수', 'name 20'], why: '기본값이 쓰여요.' },
      { t: 'blank', code: r`class Dog:
    def ___(self, name):
        self.name = name

print(Dog("초코").name)`, ans: ['__init__'], extra: ['init', '_init_', '__new__'], out: '초코', why: '밑줄 두 개씩 init.' },
      { t: 'blank', code: r`class Dog:
    def __init__(self, name):
        ___.name = name

print(Dog("초코").name)`, ans: ['self'], extra: ['this', 'Dog', 'name'], out: '초코', why: '객체 자신에게 속성을 저장해요.' },
      { t: 'parsons', lines: [r`class Counter:`, r`    def __init__(self):`, r`        self.n = 0`, r`    def up(self):`, r`        self.n += 1`, r`c = Counter()`, r`c.up()`, r`print(c.n)`], out: '1', why: '클래스 정의 → 객체 생성 → 호출 → 출력.' },
      { t: 'bug', code: r`class Dog:
    def __init__(self, name):
        name = name

d = Dog("초코")
print(d.name)`, line: 3, fix: r`        self.name = name`, out: '초코', why: 'self. 를 붙여야 객체의 속성으로 저장돼요.' },
      { t: 'bug', code: r`class Counter:
    def __init__(self):
        self.n = 0
    def up(self):
        n += 1

c = Counter()
c.up()
print(c.n)`, line: 5, fix: r`        self.n += 1`, out: '1', why: '속성은 self.n 이라고 써야 해요 (n 은 아직 정의되지 않은 지역 변수).' },
    ],
    tasks: [
      { q: '<code>Person</code> 클래스를 만드세요. <code>__init__(self, name, age)</code>로 저장하고, <code>intro(self)</code>는 <code>이름, ○세</code> 형태의 문자열을 돌려줘요. (예: <code>민수, 20세</code>)', starter: 'class Person:\n    pass\n', check: 'p = Person("민수", 20)\nassert p.intro() == "민수, 20세"\nq = Person("지영", 31)\nassert q.intro() == "지영, 31세"\nassert p.intro() == "민수, 20세"', sol: r`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def intro(self):
        return f"{self.name}, {self.age}세"`, hints: ['__init__ 에서 self.name, self.age 를 저장해요.', 'intro 에서 f-string 으로 만들어 return.', '<code>return f"{self.name}, {self.age}세"</code>'] },
      { q: '<code>BankAccount</code> 클래스를 만드세요. <code>__init__(self, balance=0)</code>, <code>deposit(self, amount)</code>(입금), <code>withdraw(self, amount)</code>(출금: 잔액이 모자라면 <code>False</code>를 돌려주고 바꾸지 않음, 성공하면 <code>True</code>)를 만들어요. 잔액은 <code>balance</code> 속성이에요.', starter: 'class BankAccount:\n    pass\n', check: 'a = BankAccount(100)\na.deposit(50)\nassert a.balance == 150\nassert a.withdraw(500) == False\nassert a.balance == 150\nassert a.withdraw(150) == True\nassert a.balance == 0\nb = BankAccount()\nassert b.balance == 0', sol: r`class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            return False
        self.balance -= amount
        return True`, hints: ['balance 기본값은 0.', '출금은 먼저 잔액이 충분한지 검사해요.', '충분하면 빼고 True, 아니면 False.'] },
      { q: '<code>Counter</code> 클래스를 만드세요. <code>count</code>는 <code>0</code>으로 시작하고, <code>up(self)</code>는 1 증가, <code>reset(self)</code>은 0으로 되돌려요. <code>__str__</code>은 <code>카운트: ○</code> 형태를 돌려줘요.', starter: 'class Counter:\n    pass\n', check: 'c = Counter()\nassert str(c) == "카운트: 0"\nc.up()\nc.up()\nassert str(c) == "카운트: 2"\nd = Counter()\nassert d.count == 0\nc.reset()\nassert c.count == 0', sol: r`class Counter:
    def __init__(self):
        self.count = 0

    def up(self):
        self.count += 1

    def reset(self):
        self.count = 0

    def __str__(self):
        return f"카운트: {self.count}"`, hints: ['__init__ 에서 self.count = 0.', 'up 과 reset 은 self.count 를 바꿔요.', '__str__ 은 문자열을 return 해야 해요.'] },
    ],
    boss: { q: '<code>Student</code> 클래스를 만드세요. <code>__init__(self, name)</code>은 이름과 빈 점수 리스트 <code>scores</code>를 만들고, <code>add_score(self, s)</code>로 점수를 추가하고, <code>average(self)</code>는 평균(점수가 없으면 <code>0.0</code>)을 돌려주고, <code>__str__</code>은 <code>이름: 평균 ○.○</code>(소수 첫째 자리) 형태를 돌려줘요.', starter: 'class Student:\n    pass\n', check: 's = Student("민수")\nassert s.average() == 0.0\ns.add_score(80)\ns.add_score(90)\nassert s.average() == 85.0\nassert str(s) == "민수: 평균 85.0"\nt = Student("지영")\nassert t.scores == []\nt.add_score(95)\nassert str(t) == "지영: 평균 95.0"\nassert s.scores == [80, 90]', sol: r`class Student:
    def __init__(self, name):
        self.name = name
        self.scores = []

    def add_score(self, s):
        self.scores.append(s)

    def average(self):
        if not self.scores:
            return 0.0
        return sum(self.scores) / len(self.scores)

    def __str__(self):
        return f"{self.name}: 평균 {self.average():.1f}"`, hints: ['scores 는 __init__ 에서 새 리스트로 만들어야 객체마다 따로예요.', '평균은 점수가 없을 때를 먼저 처리해요.', '__str__ 은 f"{self.name}: 평균 {self.average():.1f}"'] },
    sum: ['<code>def __init__(self, 값들):</code> — 객체 생성 시 자동 실행, 속성 준비', '<code>self.이름 = 값</code> 으로 객체의 상태 저장', '상태를 바꾸는 메서드: <code>self.balance += amount</code>', '<code>__str__(self)</code> — <code>print(객체)</code> 모양 정하기', '객체끼리 속성은 독립 · 리스트는 <code>__init__</code> 에서 새로 만들기'],
  },
  {
    id: 49, emoji: '🧬', title: '상속과 다형성', goal: '기존 클래스를 물려받아 확장하고, 같은 이름의 메서드를 다르게 동작시켜요',
    tips: '상속은 <b>“A는 B의 한 종류다(is-a)”</b>일 때 써요. 강아지는 동물의 한 종류이니 상속이 어울려요. 공통 기능은 부모에, 다른 부분은 자식에서 <b>덮어써요(오버라이드)</b>.',
    learn: [
      { h: '상속: 부모의 기능 물려받기', b: '<p><code>class 자식(부모):</code>로 쓰면 자식은 부모의 속성·메서드를 <b>그대로 물려받고</b>, 필요한 것만 더해요.</p>', code: r`class Animal:
    def __init__(self, name):
        self.name = name
    def eat(self):
        return f"{self.name}이(가) 먹어요"

class Dog(Animal):
    def bark(self):
        return "멍멍!"

d = Dog("초코")
print(d.eat())
print(d.bark())` },
      { h: '오버라이드: 자식에서 다시 정의', b: '<p>자식이 부모와 <b>같은 이름의 메서드</b>를 만들면 자식의 것이 우선해요. 같은 호출이라도 객체에 따라 다르게 동작하는 것이 <b>다형성</b>이에요.</p>', code: r`class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "멍멍"

class Cat(Animal):
    def speak(self):
        return "야옹"

for a in [Animal(), Dog(), Cat()]:
    print(a.speak())` },
      { h: 'super(): 부모의 __init__ 부르기', b: '<p>자식의 <code>__init__</code>에서 부모가 하던 준비를 이어서 하려면 <code>super().__init__(...)</code>를 호출해요.</p>', code: r`class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

d = Dog("초코", "푸들")
print(d.name, d.breed)` },
      { h: 'isinstance와 상속 관계', b: '<p>자식 객체는 부모 클래스의 객체로도 인정돼요. <code>isinstance(d, Animal)</code>은 True예요.</p>', code: r`class Animal:
    pass
class Dog(Animal):
    pass

d = Dog()
print(isinstance(d, Dog), isinstance(d, Animal))
print(isinstance(Animal(), Dog))` },
    ],
    check: [
      { q: '<code>class Dog(Animal):</code>에서 Dog가 하는 일은?', opts: ['Animal의 기능을 물려받는다', 'Animal을 삭제한다', 'Animal에 값을 넘긴다', '아무 일도 없다'], ans: 0, why: '상속이에요.' },
      { q: '자식이 부모와 같은 이름의 메서드를 정의하면?', opts: ['자식의 메서드가 사용된다 (오버라이드)', '부모의 것이 사용된다', '오류가 난다', '둘 다 실행된다'], ans: 0, why: '자식의 정의가 우선해요.' },
      { q: '자식 클래스의 <code>__init__</code>에서 부모의 준비를 이어서 할 때 쓰는 것은?', opts: ['super().__init__(…)', 'parent()', 'self.super()', 'inherit()'], ans: 0, why: 'super() 가 부모를 가리켜요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "멍멍"

print(Dog().speak(), Animal().speak())`, ans: '멍멍 ...', wrong: ['... ...', '멍멍 멍멍', '... 멍멍'], why: 'Dog 는 오버라이드했어요.' },
      { t: 'predict', code: r`class Animal:
    def eat(self):
        return "먹는다"

class Dog(Animal):
    pass

print(Dog().eat())`, ans: '먹는다', wrong: ['오류', 'None', '(아무것도 출력 안 됨)'], why: '부모의 메서드를 물려받아요.' },
      { t: 'predict', code: r`class A:
    def hi(self):
        return "A"
class B(A):
    def hi(self):
        return "B"
class C(A):
    pass

print(B().hi(), C().hi())`, ans: 'B A', wrong: ['A A', 'B B', 'A B'], why: 'C 는 오버라이드하지 않아 부모의 것.' },
      { t: 'predict', code: r`class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

d = Dog("초코", "푸들")
print(d.name, d.breed)`, ans: '초코 푸들', wrong: ['초코 초코', '푸들 초코', '오류'], why: 'super 로 부모 준비를 마치고 breed 를 저장.' },
      { t: 'predict', code: r`class Animal:
    pass
class Dog(Animal):
    pass

print(isinstance(Dog(), Animal), isinstance(Animal(), Dog))`, ans: 'True False', wrong: ['True True', 'False False', 'False True'], why: '자식은 부모의 한 종류이지만 반대는 아니에요.' },
      { t: 'predict', code: r`class Shape:
    def area(self):
        return 0
class Square(Shape):
    def __init__(self, s):
        self.s = s
    def area(self):
        return self.s * self.s

shapes = [Square(2), Shape(), Square(3)]
print(sum(x.area() for x in shapes))`, ans: '13', wrong: ['5', '9', '0'], why: '4 + 0 + 9.' },
      { t: 'blank', code: r`class Animal:
    def speak(self):
        return "..."

class Dog(___):
    def speak(self):
        return "멍멍"

print(Dog().speak())`, ans: ['Animal'], extra: ['Dog', 'object', 'self'], out: '멍멍', why: '괄호 안에 부모 클래스.' },
      { t: 'blank', code: r`class A:
    def __init__(self, x):
        self.x = x
class B(A):
    def __init__(self, x, y):
        ___().__init__(x)
        self.y = y

b = B(1, 2)
print(b.x, b.y)`, ans: ['super'], extra: ['self', 'A', 'parent'], out: '1 2', why: '부모를 부르는 super().' },
      { t: 'parsons', lines: [r`class Animal:`, r`    def speak(self):`, r`        return "..."`, r`class Cat(Animal):`, r`    def speak(self):`, r`        return "야옹"`, r`print(Cat().speak())`], out: '야옹', why: '부모 정의 → 자식 정의 → 호출.' },
      { t: 'bug', code: r`class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        self.breed = breed

d = Dog("초코", "푸들")
print(d.name)`, line: 7, fix: r`        super().__init__(name); self.breed = breed`, out: '초코', why: '자식의 __init__ 이 부모의 __init__ 을 덮어써서 name 이 저장되지 않았어요. super().__init__(name) 을 호출해야 해요.' },
    ],
    tasks: [
      { q: '<code>Animal</code>(메서드 <code>speak(self)</code>는 <code>"..."</code>를 돌려줌)을 부모로, <code>Dog</code>는 <code>"멍멍"</code>, <code>Cat</code>은 <code>"야옹"</code>을 돌려주도록 <b>오버라이드</b>하세요.', starter: 'class Animal:\n    def speak(self):\n        return "..."\n\n# 여기에 Dog 와 Cat 을 만드세요\n', check: 'assert Animal().speak() == "..."\nassert Dog().speak() == "멍멍"\nassert Cat().speak() == "야옹"\nassert isinstance(Dog(), Animal) and isinstance(Cat(), Animal)', sol: r`class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "멍멍"

class Cat(Animal):
    def speak(self):
        return "야옹"`, hints: ['class Dog(Animal): 로 상속해요.', '자식에서 같은 이름의 speak 를 다시 정의해요.', 'Cat 도 똑같이 만들어요.'] },
      { q: '<code>Shape</code> 부모 클래스(<code>area(self)</code>는 <code>0</code>)를 상속해 <code>Rectangle(w, h)</code>와 <code>Square(s)</code>를 만드세요. 둘 다 <code>area()</code>로 넓이를 돌려줘요. <code>Square</code>는 <code>Rectangle</code>을 상속하고 <code>super().__init__</code>을 사용하세요.', starter: 'class Shape:\n    def area(self):\n        return 0\n\n# Rectangle(Shape), Square(Rectangle) 를 만드세요\n', check: 'assert Shape().area() == 0\nassert Rectangle(3, 4).area() == 12\nassert Square(5).area() == 25\nassert isinstance(Square(2), Rectangle) and isinstance(Square(2), Shape)', need: [r`super\(\)`], needMsg: 'super() 를 사용해 주세요.', sol: r`class Shape:
    def area(self):
        return 0

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h

class Square(Rectangle):
    def __init__(self, s):
        super().__init__(s, s)`, hints: ['Rectangle 은 __init__ 에서 w, h 를 저장하고 area 를 오버라이드해요.', 'Square 는 정사각형이니 가로 세로가 같아요.', '<code>super().__init__(s, s)</code>'] },
      { q: '<code>Employee</code>(<code>name</code>, <code>salary</code>, <code>pay()</code>는 salary를 돌려줌)와 그 자식 <code>Manager</code>를 만드세요. Manager는 추가로 <code>bonus</code>를 받고 <code>pay()</code>는 <b>salary + bonus</b>를 돌려줘요. (<code>Manager("이름", 급여, 보너스)</code>)', starter: 'class Employee:\n    pass\n', check: 'e = Employee("민수", 300)\nassert e.pay() == 300\nm = Manager("지영", 500, 100)\nassert m.pay() == 600\nassert m.name == "지영"\nassert isinstance(m, Employee)', sol: r`class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def pay(self):
        return self.salary

class Manager(Employee):
    def __init__(self, name, salary, bonus):
        super().__init__(name, salary)
        self.bonus = bonus

    def pay(self):
        return self.salary + self.bonus`, hints: ['Manager 의 __init__ 은 super().__init__(name, salary) 로 부모 준비를 해요.', 'bonus 는 자식에서 추가로 저장해요.', 'pay 를 오버라이드해 salary + bonus.'] },
    ],
    boss: { q: '도형 클래스 계층을 만들어 <b>다형성</b>을 체험해요. <code>Shape</code>(부모, <code>area()</code>는 0), <code>Rectangle(w, h)</code>, <code>Triangle(base, height)</code>(넓이 = base × height ÷ 2)를 만들고, 도형 리스트를 받아 <b>넓이 합계</b>를 돌려주는 함수 <code>total_area(shapes)</code>도 만드세요.', starter: 'class Shape:\n    def area(self):\n        return 0\n\n# Rectangle, Triangle, total_area 를 만드세요\n', check: 'shapes = [Rectangle(3, 4), Triangle(6, 5), Rectangle(2, 2)]\nassert total_area(shapes) == 31\nassert total_area([]) == 0\nassert Triangle(4, 3).area() == 6', sol: r`class Shape:
    def area(self):
        return 0

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return self.base * self.height / 2

def total_area(shapes):
    total = 0
    for s in shapes:
        total += s.area()
    return total`, hints: ['도형마다 area() 를 다르게 정의해요 (오버라이드).', 'total_area 는 도형 종류를 신경 쓰지 않고 s.area() 만 부르면 돼요 (다형성).', '삼각형 넓이는 base * height / 2.'] },
    sum: ['<code>class 자식(부모):</code> — 부모의 속성·메서드를 물려받음', '오버라이드: 자식에서 같은 이름의 메서드를 다시 정의', '<code>super().__init__(…)</code> — 부모의 준비 호출', '다형성: 같은 호출 <code>obj.area()</code> 가 객체에 따라 다르게 동작', '<code>isinstance(자식객체, 부모)</code> → True'],
  },
  {
    id: 50, emoji: '🏛️', title: '종합 프로젝트: 도서관 시스템', goal: '클래스·딕셔너리·조건문·반복을 모두 써서 책 대출 관리 프로그램을 단계별로 완성해요',
    tips: '마지막 프로젝트예요! 큰 프로그램은 <b>작은 클래스부터</b> 만들어 하나씩 합쳐요: Book → Library → 명령어 처리 순서로요. 지금까지 배운 모든 것을 총동원해 봐요. 🎓',
    learn: [
      { h: '설계: 무엇이 필요할까?', b: '<p>도서관은 책 여러 권을 보관하고, <b>대출·반납</b>을 처리하고, <b>대출 가능한 책 목록</b>을 보여 줘요.</p><ul><li><code>Book</code>: 제목(<code>title</code>)과 대출 가능 여부(<code>available</code>)</li><li><code>Library</code>: 책을 담는 딕셔너리 <code>{제목: Book}</code>과 기능(add, borrow, return_book, list_available)</li></ul>', code: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = True

b = Book("파이썬")
print(b.title, b.available)` },
      { h: 'Library: 책을 관리하는 클래스', b: '<p>책 저장소로는 <b>딕셔너리</b>가 좋아요. 제목으로 바로 찾을 수 있으니까요. 메서드는 결과 문자열을 <b>돌려주는</b> 방식으로 만들면 테스트하기 쉬워요.</p>', code: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = True

class Library:
    def __init__(self):
        self.books = {}

    def add(self, title):
        self.books[title] = Book(title)
        return f"등록: {title}"

    def borrow(self, title):
        if title not in self.books:
            return f"없는 책: {title}"
        book = self.books[title]
        if not book.available:
            return f"이미 대출 중: {title}"
        book.available = False
        return f"대출: {title}"

lib = Library()
print(lib.add("파이썬"))
print(lib.borrow("파이썬"))
print(lib.borrow("파이썬"))
print(lib.borrow("자바"))` },
      { h: '반납과 목록', b: '<p>반납은 대출의 반대예요. 목록은 <code>available</code>이 True인 책의 제목을 <b>정렬해서</b> 모아요.</p>', code: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = True

class Library:
    def __init__(self):
        self.books = {}
    def add(self, title):
        self.books[title] = Book(title)
    def return_book(self, title):
        if title not in self.books:
            return f"없는 책: {title}"
        book = self.books[title]
        if book.available:
            return f"대출 중이 아님: {title}"
        book.available = True
        return f"반납: {title}"
    def list_available(self):
        names = sorted(t for t, b in self.books.items() if b.available)
        return "대출 가능: " + (", ".join(names) if names else "없음")

lib = Library()
lib.add("b")
lib.add("a")
print(lib.list_available())
print(lib.return_book("a"))` },
      { h: '명령어를 읽어 처리하기', b: '<p>마지막으로 입력된 명령 문자열(<code>add 제목</code>, <code>borrow 제목</code>, …)을 <code>split()</code>으로 쪼개 해당 메서드를 호출해요. 첫 줄은 명령 개수 n이에요. 이것이 최종 보스 문제의 뼈대예요!</p>', code: r`n = int(input())
for _ in range(n):
    parts = input().split()
    cmd = parts[0]
    if cmd == "list":
        print("목록 요청")
    else:
        print(cmd, "→", parts[1])`, stdin: ['3', 'add 파이썬', 'borrow 파이썬', 'list'] },
    ],
    check: [
      { q: '제목으로 책을 바로 찾기에 가장 어울리는 자료구조는?', opts: ['딕셔너리', '튜플', '집합', '문자열'], ans: 0, why: '제목(키)으로 Book(값)을 찾아요.' },
      { q: '책이 이미 대출 중인데 또 빌리려 할 때 처리 방법은?', opts: ['안내 메시지를 돌려주고 상태를 바꾸지 않는다', '그냥 덮어쓴다', '프로그램을 종료한다', '책을 삭제한다'], ans: 0, why: '예외 상황을 먼저 확인해야 해요.' },
      { q: '<code>"borrow 파이썬".split()</code>의 결과는?', opts: ["['borrow', '파이썬']", "'borrowpython'", '2', "['borrow파이썬']"], ans: 0, why: '공백으로 쪼개 명령과 제목을 나눠요.' },
    ],
    puzzles: [
      { t: 'predict', code: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = True

b = Book("파이썬")
print(b.title, b.available)`, ans: '파이썬 True', wrong: ['파이썬 False', 'title available', '오류'], why: '처음에는 대출 가능(True).' },
      { t: 'predict', code: r`class Book:
    def __init__(self, t):
        self.t = t
        self.available = True

books = {"a": Book("a"), "b": Book("b")}
books["a"].available = False
print([k for k, v in books.items() if v.available])`, ans: "['b']", wrong: ["['a']", "['a', 'b']", '[]'], why: 'a 는 대출 중이라 빠져요.' },
      { t: 'predict', code: r`class Library:
    def __init__(self):
        self.books = {}
    def add(self, t):
        self.books[t] = True
        return f"등록: {t}"

lib = Library()
print(lib.add("x"))
print(len(lib.books))`, ans: '등록: x\n1', wrong: ['등록: x\n0', 'x\n1', '등록: x'], why: '책이 하나 담겼어요.' },
      { t: 'predict', code: r`cmd = "borrow 파이썬".split()
print(cmd[0], len(cmd))`, ans: 'borrow 2', wrong: ['파이썬 2', 'borrow 1', 'borrow 파이썬'], why: '명령과 제목 두 조각.' },
      { t: 'predict', code: r`names = ["b", "a", "c"]
print("대기: " + (", ".join(sorted(names)) if names else "없음"))`, ans: '대기: a, b, c', wrong: ['대기: b, a, c', '대기: 없음', '대기: a b c'], why: '정렬한 뒤 쉼표로 이어요.' },
      { t: 'predict', code: r`names = []
print("대기: " + (", ".join(sorted(names)) if names else "없음"))`, ans: '대기: 없음', wrong: ['대기: ', '대기: []', '대기: None'], why: '비어 있으면 "없음".' },
      { t: 'blank', code: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = ___

print(Book("a").available)`, ans: ['True'], extra: ['False', 'None', '"True"'], out: 'True', why: '처음엔 대출 가능.' },
      { t: 'blank', code: r`books = {"a": 1}
if "b" ___ books:
    print("있음")
else:
    print("없음")`, ans: ['in'], extra: ['is', '==', 'has'], out: '없음', why: '키 존재 검사는 in.' },
      { t: 'parsons', lines: [r`class Library:`, r`    def __init__(self):`, r`        self.books = {}`, r`    def add(self, title):`, r`        self.books[title] = True`, r`lib = Library()`, r`lib.add("a")`, r`print(len(lib.books))`], out: '1', why: '클래스 → 객체 생성 → 호출 → 확인.' },
      { t: 'bug', code: r`class Library:
    def __init__(self):
        self.books = {}
    def add(self, title):
        books[title] = True

lib = Library()
lib.add("a")
print(len(lib.books))`, line: 5, fix: r`        self.books[title] = True`, out: '1', why: '메서드 안에서 객체의 속성은 self. 를 붙여야 해요. books 만 쓰면 정의되지 않은 지역 이름이에요 (NameError).' },
    ],
    tasks: [
      { q: '<code>Book</code> 클래스를 만드세요. <code>__init__(self, title)</code>은 <code>title</code>을 저장하고 <code>available</code>을 <code>True</code>로 시작해요. <code>__str__</code>은 <code>제목 (대출 가능)</code> 또는 <code>제목 (대출 중)</code>을 돌려줘요.', starter: 'class Book:\n    pass\n', check: 'b = Book("파이썬")\nassert b.available is True\nassert str(b) == "파이썬 (대출 가능)"\nb.available = False\nassert str(b) == "파이썬 (대출 중)"', sol: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = True

    def __str__(self):
        status = "대출 가능" if self.available else "대출 중"
        return f"{self.title} ({status})"`, hints: ['__init__ 에서 title 과 available 을 저장해요.', '__str__ 에서 available 에 따라 문구를 골라요.', '한 줄 조건식도 쓸 수 있어요: <code>"대출 가능" if self.available else "대출 중"</code>'] },
      { q: '<code>Library</code> 클래스를 만드세요. 아래 <code>Book</code>을 사용해 <code>add(title)</code>, <code>borrow(title)</code>, <code>return_book(title)</code>를 구현하고, 각 메서드는 결과 문자열을 돌려줘요.<br>add → <code>등록: 제목</code><br>borrow → 성공 <code>대출: 제목</code> / 없는 책 <code>없는 책: 제목</code> / 이미 빌린 책 <code>이미 대출 중: 제목</code><br>return_book → 성공 <code>반납: 제목</code> / 없는 책 <code>없는 책: 제목</code> / 대출 중이 아닌 책 <code>대출 중이 아님: 제목</code>', starter: 'class Book:\n    def __init__(self, title):\n        self.title = title\n        self.available = True\n\nclass Library:\n    pass\n', check: 'lib = Library()\nassert lib.add("a") == "등록: a"\nassert lib.borrow("a") == "대출: a"\nassert lib.borrow("a") == "이미 대출 중: a"\nassert lib.borrow("z") == "없는 책: z"\nassert lib.return_book("a") == "반납: a"\nassert lib.return_book("a") == "대출 중이 아님: a"\nassert lib.return_book("z") == "없는 책: z"', sol: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = True

class Library:
    def __init__(self):
        self.books = {}

    def add(self, title):
        self.books[title] = Book(title)
        return f"등록: {title}"

    def borrow(self, title):
        if title not in self.books:
            return f"없는 책: {title}"
        book = self.books[title]
        if not book.available:
            return f"이미 대출 중: {title}"
        book.available = False
        return f"대출: {title}"

    def return_book(self, title):
        if title not in self.books:
            return f"없는 책: {title}"
        book = self.books[title]
        if book.available:
            return f"대출 중이 아님: {title}"
        book.available = True
        return f"반납: {title}"`, hints: ['책 보관은 딕셔너리 {제목: Book} 이 좋아요.', '먼저 “없는 책”인지, 그다음 상태를 확인해요.', '성공하면 available 을 바꾸고 안내 문자열을 return.'] },
      { q: '앞의 <code>Library</code>에 <code>list_available()</code> 메서드를 추가하세요. <b>대출 가능한 책의 제목을 정렬</b>해 <code>대출 가능: a, b</code> 형태로 돌려주고, 없으면 <code>대출 가능: 없음</code>을 돌려줘요.', starter: 'class Book:\n    def __init__(self, title):\n        self.title = title\n        self.available = True\n\nclass Library:\n    def __init__(self):\n        self.books = {}\n    def add(self, title):\n        self.books[title] = Book(title)\n    # list_available 를 추가하세요\n', check: 'lib = Library()\nassert lib.list_available() == "대출 가능: 없음"\nlib.add("b")\nlib.add("a")\nlib.add("c")\nassert lib.list_available() == "대출 가능: a, b, c"\nlib.books["a"].available = False\nassert lib.list_available() == "대출 가능: b, c"', sol: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = True

class Library:
    def __init__(self):
        self.books = {}
    def add(self, title):
        self.books[title] = Book(title)

    def list_available(self):
        names = sorted([t for t, b in self.books.items() if b.available])
        if not names:
            return "대출 가능: 없음"
        return "대출 가능: " + ", ".join(names)`, hints: ['대출 가능한 제목만 리스트로 모아 sorted().', '리스트가 비면 "없음".', '", ".join(names) 로 이어요.'] },
    ],
    boss: { q: '<b>최종 보스! 도서관 명령 처리기.</b> 첫 줄에 명령 개수 <code>n</code>이 주어지고, 이어서 <code>n</code>줄의 명령이 입력돼요. 각 명령의 결과를 한 줄씩 출력하세요.<br>• <code>add 제목</code> → <code>등록: 제목</code><br>• <code>borrow 제목</code> → <code>대출: 제목</code> / <code>없는 책: 제목</code> / <code>이미 대출 중: 제목</code><br>• <code>return 제목</code> → <code>반납: 제목</code> / <code>없는 책: 제목</code> / <code>대출 중이 아님: 제목</code><br>• <code>list</code> → <code>대출 가능: a, b</code> (제목 정렬, 없으면 <code>대출 가능: 없음</code>)<br>(제목에는 공백이 없어요. <code>class</code>를 사용해 만들어 보세요)', starter: '', tests: [{ in: ['7', 'add 파이썬', 'add 자바', 'borrow 파이썬', 'borrow 파이썬', 'list', 'return 파이썬', 'list'], out: '등록: 파이썬\n등록: 자바\n대출: 파이썬\n이미 대출 중: 파이썬\n대출 가능: 자바\n반납: 파이썬\n대출 가능: 자바, 파이썬' }, { in: ['4', 'borrow x', 'return x', 'list', 'add x'], out: '없는 책: x\n없는 책: x\n대출 가능: 없음\n등록: x', hidden: true }, { in: ['5', 'add b', 'add a', 'borrow a', 'return b', 'list'], out: '등록: b\n등록: a\n대출: a\n대출 중이 아님: b\n대출 가능: b', hidden: true }], need: [r`\bclass\b`], needMsg: 'class 를 사용해 만들어 주세요.', sol: r`class Book:
    def __init__(self, title):
        self.title = title
        self.available = True

class Library:
    def __init__(self):
        self.books = {}

    def add(self, title):
        self.books[title] = Book(title)
        return f"등록: {title}"

    def borrow(self, title):
        if title not in self.books:
            return f"없는 책: {title}"
        book = self.books[title]
        if not book.available:
            return f"이미 대출 중: {title}"
        book.available = False
        return f"대출: {title}"

    def return_book(self, title):
        if title not in self.books:
            return f"없는 책: {title}"
        book = self.books[title]
        if book.available:
            return f"대출 중이 아님: {title}"
        book.available = True
        return f"반납: {title}"

    def list_available(self):
        names = sorted([t for t, b in self.books.items() if b.available])
        if not names:
            return "대출 가능: 없음"
        return "대출 가능: " + ", ".join(names)

lib = Library()
n = int(input())
for _ in range(n):
    parts = input().split()
    cmd = parts[0]
    if cmd == "add":
        print(lib.add(parts[1]))
    elif cmd == "borrow":
        print(lib.borrow(parts[1]))
    elif cmd == "return":
        print(lib.return_book(parts[1]))
    elif cmd == "list":
        print(lib.list_available())`, hints: ['Book 과 Library 클래스를 먼저 완성해요 (앞의 세 과제를 합치면 돼요).', '명령은 input().split() 으로 쪼개 첫 단어로 분기해요.', 'list 명령은 단어가 하나뿐이니 parts[1] 에 접근하지 않도록 주의!'] },
    sum: ['설계 → 작은 클래스부터: <code>Book</code> → <code>Library</code> → 명령 처리', '저장소는 딕셔너리 <code>{제목: Book}</code> · 예외 상황(없음/이미 대출)을 먼저 검사', '메서드는 결과 문자열을 <b>return</b> 하면 테스트하기 쉽다', '명령 처리: <code>parts = input().split()</code> → <code>parts[0]</code> 로 분기', '축하해요! 파이썬 기초 50유닛 완주 🎓'],
  },
];
