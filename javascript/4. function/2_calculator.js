// 계산기 기능 구현
// 브라우저 캐쉬에 function만 저장되어 있다.
console.clear();


function calculator(a, b, op) {
    a = parseInt(a);
    b = parseInt(b);

    switch(op) {
        case '+' : console.log(`sum = ${a + b}`); break;
        case '-' : console.log(a - b); break;
        case '*' : console.log(a * b); break;
        case '/' : console.log(a / b); break;
        case '%' : console.log(a % b); break;
        default : console.log('처리할 수 없는 연산자 입니다.');
    }
}

// calculator(1, 2, '+');
// calculator(10, 2, '-');
// calculator(10, 2, '*');
// calculator(10, 2, '/');
// calculator(10, 2, '%');


