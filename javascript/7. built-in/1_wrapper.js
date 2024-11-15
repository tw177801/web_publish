// 기본 데이터 타입 (primitive Data Type) - number, string, boolean...
// 기본 데이터 타입을 클래스로 정의한 것을 wrapper 클래스라 함.

console.clear();

/**Number  */

let a = "123";
if ( typeof a === "string") a = parseInt(a);
if(a === 123) console.log(a);

if(Number("123") === 123) console.log(`a=> ${a}`);

// let aa = new Number(100);
// console.log(Number.isNan(aa));


let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;

console.log(maxValue);
console.log(minValue);

let x = 100;
let y = new Number(100);
// new의 값 y에 넣는다.

console.log(typeof x);
console.log(typeof y);
console.log(x === y); // false가 나오는 이유 정리!!
console.log(x === y.valueOf());


/** String class + TEMPLETE LITERAL (``) */

let str = "hello~";

let str2 = new String("hello~");
console.log(typeof str);
console.log(typeof str2);
console.log(str === str2.valueOf());


/**Boolean class */
let flag = true;
let flag2 = new Boolean(true);
console.log(typeof flag);
console.log(typeof flag2);
console.log(flag === flag2);
console.log(flag === flag2.valueOf());
