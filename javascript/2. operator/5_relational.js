// 비교 연산자 : > , <, >=, <=, !=, ==, ===
// 실행 결과 타입 : boolean 
// 제어문 if, while 문에서 사용!!!
/**
 * if (조건식: 3 > 2) {
 *      //true
 * }  else {
 *      //false
 * }
 */


//primative 값
console.log(3 > 2);
console.log(3 < 2);
console.log(3 >= 3);
console.log(3 <= 3);
console.log(3 == '2'); // 3 == 2
console.log(3 == 'A'); // 3 == 67
console.log(3 === '2'); // number === string
console.log(3 === 'A'); // number === string

let obj1 = {
    name: "홍길동"
};

let obj2 = {
    name: "홍길동"
};

console.log(obj1);
console.log(obj2);

console.log(`obj1 : ${obj1}`);
console.log(`obj2 : ${obj2}`);


