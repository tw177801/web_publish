// 호이스팅(Hoisting) : 코드 실행 전 메모리에 객체를 선언하고 할당하는 작업
console.clear();

// 함수 호출
hoist1();
// hoist2();

function hoist1() {
    console.log("호이스팅 1");
} // 메모리 미리 저장하여 출력 가능

const hoist2 = () => {
    console.log("호이스팅 2");
    
} // let, const는 먼저 선언 된 후 호출해야 출력 가능

hoist2(); // arrow 함수는 반드시 선언 후 함수 호출!!


