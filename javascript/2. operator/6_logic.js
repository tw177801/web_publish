// 논리연산자 : &&(And) , ||(OR) 
/*
    
    (논리식1) && (논리식2) = 결과값
      false         true   = true
      true         false  = false
      false        true   = false
      false        false  = false


    (논리식1) || (논리식2) = 결과값
      true         true   = true
      true         false  = true
      false        true   = true
      false        false  = false
*/

console.clear();


// let a = 1;
// let b = 2;
// console.log((a < b) && (b > a)); // true && true
// console.log((a < b) && (b < a)); // true && false
// console.log((a === b) && (b > a)); // false && true
// console.log((a === b) && (b < a)); // false && false




// console.log((a < b) || (b > a)); // true && true
// console.log((a < b) || (b < a)); // true && false
// console.log((a === b) || (b > a)); // false && true
// console.log((a === b) || (b < a)); // false && false





//임의의 숫자를 입력받아, 1~9 까지의 범위에 포함되는 숫자를 출력
// let number = 5;
// if((number> 0) && (number < 10)) { //&& 연산인 경우 false값이 앞에 오도록 함
//     //true            false         ->      false
//     //false             true         ->      false

//     //false를 앞에 두는 게 빠른 계산 출력
//     //앞에가 false이면 두번 째는 계산 skip해서 출력
//     console.log(`number는 사용가능한 숫자 [${number}]입니다.`);
    
// } else {
//     console.log(`number를 다시 입력해주세요.`);

// }



// let number = 11;
// if((number> 10) && (number < 0)) { //&& 연산인 경우 false값이 앞에 오도록 함
//     //true            false         ->      false
//     //false            true         ->      false :: shortcut 연산!!

//     //false를 앞에 두는 게 빠른 계산 출력
//     //앞에가 false이면 두번 째는 계산 skip해서 출력
//     console.log(`number는 사용가능한 숫자 [${number}]입니다.`);
    
// } else {
//     console.log(`number를 다시 입력해주세요.`);
// }


//임의의 숫자를 입력받아, 0보다 크거나 10보다 크면 출력
let number2 = 2;
if((number2 > 10) || (number2 > 50)) { // || 연산인 경우 true값이 앞에 오도록 함
//     //true            false         ->      true :: shortcut 연산!!
//     //false             true         ->     true
    console.log(`number2는 사용가능한 숫자 [${number2}]입니다.`);
    
} else {
    console.log(`number2를 다시 입력해주세요.`);
}