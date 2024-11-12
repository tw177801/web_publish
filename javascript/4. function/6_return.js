//함수의 실행결과 반환 키워드 :: return
// function add(a, b) {
//     //a = parseInt(a);
//     //console.log(parseInt(a) + parseInt(b));
//     return (parseInt(a) + parseInt(b)); 
// }

// let result = add(1, 2);
// console.log(`result = ${result}`);

console.clear();

// 이름, 나이를 매개변수로 입력하여, 객체를 생성한 후
// 반환하는 함수를 정의해주세요.

// function createObject(name, age) {
//     //객체 생성
//     let obj = {
//         //프로퍼티name: 값name, //obj.name
//         name: name, 
//         age: age
//     };
//     return obj; //obj의 주소값 반환
//     // return 객체;
// }

// let resultObj = createObject("홍길동", 30); // 순서 변경 안 됨
// console.log(resultObj);
// console.log(resultObj.name);
// console.log(resultObj.age);


// function이 어떤 위치에 있어도 실행된다.

// let resultObj = createObject("홍길동", 30); // 순서 변경 안 됨

// function createObject(name, age) {
//     //객체 생성
//     let obj = {
//         //프로퍼티name: 값name, //obj.name
//         name: name, 
//         age: age
//     };
//     return obj; //obj의 주소값 반환
//     // return 객체;
// }

// console.log(resultObj);
// console.log(resultObj.name);
// console.log(resultObj.age);

//arrow function

// 실행 범위 밖에서도 사용하기 위해 return 사용
// { }블레이스 = 스코프 범위
// 리엑트 = 함수 


// 2개의 수를 입력받아 곱한 값을 반환하는 함수를 작성해주세요.
// 2개의 수는 0보다 커야 함. 

// function multi(a, b) {
//     let on {
//         (a * b)
//     };
//     let in (parseInt(a) * parseInt(b));
//     return in;
// }

// let on = multi(10,20);


function multi(a, b) {

    
    let result = undefined;
    if(a>0 && b>0) {
        result = a * b;
    } else {
        result = "a와 b는 0보다 커야 합니다.";      
    }
    return result;
}

let result2 = multi(-1,2);
console.log(result2);

//function aa
//기능을 구현하는 작업진행
//변수 선언시 반드시 초기화!!
//로컬 변수는 반드시 초기화
// 전역 변수 (Global variable) -> const START_COUNT = 0; 
// 지역 변수, 로컬 변수 (Local variable) -> 블레이스 안에 있는 값;
// result = 0;

