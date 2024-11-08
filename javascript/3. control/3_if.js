// 임의의 숫자를 입력받아 
// 짝수이면 빨간 사과, 홀수이면 초록 사과를 출력해주세요.
// 1. 숫자 입력받기
// let number = 101;
// let result = undefined;

// // 2. 숫자 체크하기 (짝수인지, 홀수인지)
// //    결과에 따라 값 입력
// if((number % 2) === 0) result = '🍎';
// else result = '🍏'; 


// // 3. 값 출력 
// console.log(result);



// 1: true, 0: false
let number = 100;
let result = undefined;
if(number % 2) result = '🍏';
else result = '🍎'; 
console.log(result);

// 삼항 연산자 : () ? : ;
let choice = undefined;
(!(number%2))? choice='🍎': choice='🍏';
console.log(choice);

// let choice = undefined;
// (number%2 === 0)? choice='🍎': choice='🍏';
// console.log(choice);


// 삼항 연산자 -> 암기, 단축 코드 많이 활용하기
let emoji = (!(number%2))? '🍎': '🍏';
console.log(emoji);
