// 클래스간의 상속관계
// E 동물원에서 동물관리 프로그램을 생성
// 흰색 사자, 회색 사자, 흰색 호랑이, 회색 호랑이, 푸들, 말티즈
// 객체 모델링 ==> Lion, Tiger, Dog 클래스

// Lion 클래스
// 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat

// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ==> Animal
// Animal 클래스 속성 : name, color, emoji, taste
// Animal 클래스 메소드 : display, sleep, eat

console.clear();

class Animal {
    constructor(name, color, emoji, taste) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
    }
    display = () => console.log(`${this.name} : ${this.emoji}`);
    sleep = () => console.log(`${this.name} 가(이) 잔다.`);
    eat = () => console.log(`${this.name} 가(이) 먹는다.`);


}

    // lion 생략
    // this.name = name;
    // this.color = color;
    // this.emoji = emoji;
    // this.taste = taste;



class Lion extends Animal { // Lion 클래스는 Animal 클래스의 자식이다!
    // memoryheap에 2가지 영역으로 저장됨 부모, 자식
    constructor(name, color, emoji, taste) {
        super(name, color, emoji, taste); // 객체 지향 개념

    }

    // display = () => console.log(`${this.name} : ${this.emoji}`);
    // sleep = () => console.log(`${this.name} 가(이) 잔다.`);
    // eat = () => console.log(`${this.name} 가(이) 먹는다.`);
}

// const a = new Lion();

const tom = new Lion("tom", "white", "🦁", "meat");

tom.display();
tom.sleep();
tom.eat();



// Tiger 클래스
// 속성 : name, color, emoji, taste(식성), age
// 메소드 : display(이모지), sleep, eat

class Tiger{
    constructor(name, color, emoji, taste, age) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
        this.age = age;
    }

    display = () => console.log(`${this.name} : ${this.emoji}`);
    sleep = () => console.log(`${this.name} 가(이) 잔다.`);
    eat = () => console.log(`${this.name} 가(이) 먹는다.`);
}

const jerry = new Tiger("jerry", "orange", "🐱", "meat", 3);

jerry.display();
jerry.sleep();
jerry.eat();

// Dog 클래스
// 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat

class Dog{
    constructor(name, color, emoji, taste, type) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    this.taste = taste;
    this.type = type;
    }

    display = () => console.log(`${this.name} : ${this.emoji}`);
    sleep = () => console.log(`${this.name} 가(이) 잔다.`);
    eat = () => console.log(`${this.name} 가(이) 먹는다.`);
}

// 도식화 그림 => 다이어그램

const Lucky = new Dog("Lucky", "graywhite", "")
