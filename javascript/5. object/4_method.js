// 객체에서 기능을 구현하는 메소드  (객체 리터럴 안 포함)
console.clear();
const apple = {
    name : "orange",
    emoji : "🍊",
    color : "Red",
    display : function () {console.log("🍊");
    }
}


console.log(apple);
console.log(apple.name);
console.log(apple.color);
apple.display();
