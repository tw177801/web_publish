// static 메소드 : 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능함
console.clear();

// class Fruit {
//     constructor(name, color, emoji) {
//         //filed
//         this.name = name;
//         this.color = color;
//         this.emoji = emoji;
//     }

//     static makeFruit = () => {console.log(`makeFruit 호출완료!!!`); // 논리적 이해 필요 static 메모리 공간 별도 저장
//     }
//     display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
    
// }

// let apple = new Fruit('apple', 'red', '🍎');
// apple.display();
// Fruit.makeFruit();
// // apple.makeFruit(); 에러


//리엑트 할 때 사용 안 함 


class Fruit {
    constructor(name, color, emoji) {
        //filed (외부 값)
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }

    static makeFruit = () => {
        return new Fruit('orange', 'coral', '🍊'); //파라미터
    }
    display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
    
}

let apple = new Fruit('apple', 'red', '🍎');
apple.display();
let orange = Fruit.makeFruit();
console.log(orange);
orange.display();

// Fruit Heap 저장
// 호이스팅 이용 

// 인스턴스 메소드