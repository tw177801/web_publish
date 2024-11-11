/*
    함수 정의 ::
    function 함수명(파라미터(=매개변수)) {
        실행 로직;
    }

    함수 호출 :: 함수명(파라미터 형식 일치):

    내장(Built-in) 함수 : 자주 사용하는 기능을 함수로 구현하여 엔진에서 제공함
    - parseInt(문자열); 문자열을 숫자로 변환하는 함수
    ... 
*/

console.clear();

//빌트인 함수 parsenInt() 호출

let a = '100';
console.log(a, typeof a);
console.log(parseInt(a), typeof parseInt(a));
console.log(a+100);
console.log(parseInt(a)+100);

// 2개의 숫자를 입력받아, 합계를 출력하는 로직 작성
let num1 = 10;
let num2 = 20;

console.log(`sum ==> (${num1 + num2})`);
