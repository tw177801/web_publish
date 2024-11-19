// iterable(이터러블) object - Iteration Protocol : 순회를 위한 규칙, 조약 
// for...of, ...(Spread: 전개구문), 구조분해할당(destructing object) ->ecma6에서만 사용 가능
// String, Array, Map, Set ...

// "Hello~ Java Script~!!!"

console.clear();

const text = new String("Hello~ Java Script~!!!");

for(let element of text) {
    console.log(`element = ${element}`);
}

// [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];

for(let number of numbers) {
    console.log(number);
}

// Number 클래스 생성 및 실행
const numberClass = new Number(12345);

// for( n of numberClass) console.log(n);
// TypeError: numberClass is not iterable
