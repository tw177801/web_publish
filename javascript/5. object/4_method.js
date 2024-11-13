// 객체에서 기능을 구현하는 메소드  (객체 리터럴 안 포함)
console.clear();

let name = "ddd";


const apple = {
    name : "사과", // 프로퍼티
    emoji : "🍊",
    color : "Red",
    display : function () {console.log("🍊");}, //메소드
    getName: function () {console.log(this.name);}, // call stack 저장 
    getColor: function () {console.log(this.color);},
    getEmoji: function () {console.log(this.emoji);}
}


console.log(apple);
apple.getName();
apple.getColor();
apple.getEmoji();