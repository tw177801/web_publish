console.clear();
// 동기식
// 중요. 설명 가능해야 함

function a() {
    c(); // return address(복귀 주소)
    console.log(`-----> a function!!`);
    
}

function b() {
    // setTimeout(function() {}, 1000);
    // setTimeout(() => {}, 1000);
    setTimeout(() =>  {console.log(`1초후 setTimeout 함수 실행!!`);}); // -> background에 저장, 비동기식
    console.log(`-----> b function!!`);
    
}

function c() {
    b();
    console.log(`-----> c function!!`);
    
}

a();
// b();
// c();