// 비동기식 처리 방식에서 callback 함수 호출
// runInDelay(callback, delay)

console.clear();

function runInDelay (callback, seconds) {
    setTimeout(callback, seconds); // 
}

runInDelay(function () {console.log(`타이머 3초 경과`);} , 3000);
runInDelay(() => {console.log(`타이머 1초 경과!!`);}, 1000);

console.log(`--프로그램 종료--`);


// 결과 설명 가능해야 함
// queue 
// event roop

