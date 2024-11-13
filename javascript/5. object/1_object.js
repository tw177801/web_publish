// object는 다양한 타입의 데이터들을 저장하는 방식
// object literal: { property(key): value, property: value... }
// 배열의 객체 for문
// 학생관리 프로그램: 홍길동(name, age, address, gender), 홍길순, 공유, 김철수...
// 학생성적관리 프로그램: 홍길동(name, kor, eng, math)

console.clear();

const obj = {   // obj의 주소값은 재할당 불가!!
    name: "홍길동", //프로퍼티 주소값 변경 가능
    age: 20
}


//1. obj 데이터 출력
console.log(obj);
console.log(obj.name, typeof obj.name);
console.log(obj.name);
console.log(obj.age, typeof obj.age);

//2. name을 '김철수'로 변경
obj.name = "김철수";

console.log(obj.name);
//obj = '111'; 변하지 않는 상수 const로 변경 불가

//3. age를 삭제
delete obj.age;

console.log(obj);
console.log(obj.age);

