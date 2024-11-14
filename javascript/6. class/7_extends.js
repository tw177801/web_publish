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




// Tiger 클래스
// 속성 : name, color, emoji, taste(식성), age
// 메소드 : display(이모지), sleep, eat

class Tiger extends Animal{
    constructor(name, color, emoji, taste, age) {
        super(name, color, emoji, taste);
        this.age = age;
    }
    getAge = () => console.log(this.age);

    

    // display = () => console.log(`${this.name} : ${this.emoji}`);
    // sleep = () => console.log(`${this.name} 가(이) 잔다.`);
    // eat = () => console.log(`${this.name} 가(이) 먹는다.`);
}



// Dog 클래스
// 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat

class Dog extends Animal{
    constructor(name, color, emoji, taste, type) {
    super(name, color, emoji, taste);
    this.type = type;
    }
    getType = () => console.log(this.type);

    
}

// 도식화 그림 => 다이어그램

/**
 * 동물원에서 동물을 관리하는 클래스
 * 속성 : #type, #동물의 객체(Lion, Tiger, Dog)
 * 메소드 : setter/getter
 */

class EverZoo {
    static LION = 1;
    static TIGER = 2;
    static DOG = 3;

    #type;
    #animal;
    constructor(type, animal) {
        this.#type = type;
        this.#animal = animal;
    }

    get type()  { return this.#type; }
    get animal()  { return this.#animal; }

    set type(type) { this.#type = type; }
    set animal(animal)  { this.#animal = animal; }
}

// 클래스 생성 및 호출
const tom = new Lion("tom", "white", "🦁", "meat");
const Lucky = new Dog("Lucky", "graywhite", "🐶", "meat", "포메라니언");
const jerry = new Tiger("jerry", "orange", "🐱", "meat", 3);

// tom.display();  tom.sleep();    tom.eat();
// Lucky.display();    Lucky.getType();  
// jerry.display();    jerry.sleep();  jerry.eat(); 

const everZoo = new EverZoo(EverZoo.LION, tom);
console.log(everZoo.type, everZoo.animal);

