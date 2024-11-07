/*
    primitive 데이터 타입
    - 정수형(Integer) : 100, 1, ...
    - 실수형(Float, Double) : 0.123, 234.2 ...
    - 문자형(Character) : '', ""
    - 불린형(Boolean) : true, false
        ex) let flag = true;    // flag = 1

    Reference 데이터 타입
    - 객체형 (Object) : 배열([]), JSON({}) ...
    
*/

// 정수형 변수
let number = 100;
number = 100.234;
console.log(number);


// 실수형 변수
let fnumber = 10.234;
fnumber = 200;
console.log(fnumber);

// 불린형 변수
let flag = true; //not (!) -> 반댓값 표현
flag = !true;

let flagTest = flag; //현재 flag값의 반댓값


// 객체형 변수
let nameList = ['홍길동', '홍길순', '홍길남'];
console.log(nameList);

/*주소값을 갖고 있다. 레퍼런스 변수*/

// primitive, reference 데이터 타입 초기화
let address = undefined; //primitive 변수 위주
/* 아무 값도 들어가 있지 않다. */
let addressList = null; //reference 실행 시 객체 주소 빠졌을 때 (주소 할당 안될 때)



// 데이터 타입 비교 : typeof()
let x = 10;
let xx = 10;
let y = "10";
let obj = {name: '홍길동'};

console.log(x, typeof x);
console.log(y, typeof y);
console.log(x == y); //값만 비교 결과
console.log(x === y); //데이터 타입 비교 결과
console.log(xx, typeof xx); 
console.log(x === xx);

console.log(obj, typeof obj);
console.log(y === obj);







