// 제어문 - 조건문 : if, while, do~while
// if(조건식: 비교연산자 포함){ 조건식이 참인 경우 실행; }
// if(조건식){ 조건식이 참인 경우; } else { 조건식이 거짓인 경우; }
// 삼항 연산자 : (조건식) ? 참인 경우 : 거짓인 경우; -> react에서 자주 사용 // 암기
// if(조건식1) { 조건식1이 참일 때; } else if(조건식2) {조건식 2가 참일때;} 
// .... else { 모든 조건식에 해당되지 않을 때;}

// 입력되는 과일명이 apple인 경우에는 사과 이모지 출력
// 사과이외의 과일은 이름만 출력!!
// orange인 경우에는 오렌지 이모지 출력
// let fruit = "apple";
// if(fruit == "apple") {
//     console.log('🍎');
    
// }

let fruit = "orange";
if(fruit === "apple") {
    console.log('🍎');
} else {
    console.log(fruit);
}


// 위의 조건식을 삼항연산자로 작성해보세요.
