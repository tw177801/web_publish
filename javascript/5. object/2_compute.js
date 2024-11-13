

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.job);

// person 객체를 CRUD로 관리하는 함수를 정의 
// C(Create), R(Read), U(Update), D(Delete)
// (생성(Create), 읽기(Read), 갱신(Update), 삭제(Delete))
// 저장된 데이터에 대해 작업할 수 있는 방법의 약어
// setValue(), getValue(), updateValue(), deleteValue()

// function setValue(object, key, value) {
//     object[newkey] = value;
// }

console.clear();

const person = {
    name: "홍길동",
    age: 20,
    job: "개발자",
}

const fruits = {
    name: "사과",
    emoji: "🍎"
}


// 화살표(Arrow) 함수 표현식
// const 함수명 = (파라미터..) => { 실행문; }
const setValue = (object, newkey, value) => object[newkey] = value;
const getValue = (object, key) => object[key]; 
const updateValue = (object, key, newValue) => object[key] = newValue;
const deleteValue = (object, key) => delete object[key];


setValue(person, "address", "서울시");
setValue(fruits, "color", "Red");
console.log(person);
console.log(fruits);


getValue(person, "name");
getValue(fruits, color);

console.log(getValue(person, "name"));
console.log(getValue(fruits, color));

// updateValue(person, "name", "김철수");
// updateValue(fruits, "color", "Green");
// console.log(person);
// console.log(fruits);

// deleteValue(person, "age");
// deleteValue(fruits, "name");

// console.log(person);
// console.log(fruits);