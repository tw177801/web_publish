/*
    1. Primitive DataType : 기본 데이터 타입 
        - string, number, boolean
        ex) 100, "홍길동", '홍길동', true...
        let number = 100;

    2. Reference DataType : 참조 데이터 타입
        - object literal({}), class, array([])..
        ex) let obj = {name: "홍길동", ...}
            let arr = [1, 2, 3 ..]
            let arrObj = [{..}, {..}, {..}]

    ** Array(배열) **
    개념 : 동일한 데이터 타입의 요소를 여러개 저장하는 공간
            인덱스 주소를 통해 요소를 저장하고 관리함, 인덱스 주소는 0부터!!

    let array1 = new Array(크기); // 크기 정의
    let array2 = [1, 2, 3, 4];    // 크기와 요소의 초기화
    let array3 = ['1', '2', '3']; 
    let array4 = [{name: "홍길동"}, {name: "김철수"}, ...]
    
    let obj1 = {key: value, key: value..}
    let obj2 = {key: value, key: value..}
    let array5 = {obj1, obj2}
    
    !! 배열의 생성은 [], new 2개를 이용하여 생성, CRUD 작업은 Array의 메소드
        사용 권장 (데이터를 배열에 넣고 삭제..)
    
    !! for문의 구문을 사용하여 데이터를 가져옴
    !! 배열의 인덱스는 전체 크기보다 1 작음!! (기억하기)



*/

console.clear();

// 배열 생성
let array1 = new Array(2); // 크기 할당
console.log(array1.length);
console.log(array1[0]);
console.log(typeof array1);

let array2 = new Array(1,2,3); // 크기할당 및 초기화
// let array2 = new Array([1,2,3]);

console.log(array2[0]);

let array3 = ['🍎', '🍊', '🍋', '🍏'];
console.log(array3[2]); // 마지막 요소 출력
console.log(array3[array3.length-1]); // 마지막 요소 출력

let obj1 = { name: "홍길동", age: 20 }
let obj2 = { name: "김철수", age: 21 }
let objList = [obj1, obj2];

console.log(objList[0]);
console.log(objList[0].name); // 홍길동 출력
console.log(objList[1].name); // 김철수 출력




