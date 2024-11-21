// 빌트인 클래스인 Promise를 통해 비동기식 처리

console.clear();

let promise1 = new Promise((resolve, reject) => {
    // 실행한 비동기식 로직
    setTimeout(()=>{
        resolve('success');
        // reject('fail');

    }, 3000);
});

// promise1
//     .then(성공한 경우)
//     .catch(실패한 경우)

promise1
    .then((result) => {console.log('3초 경과!!');}) // 시간 경과후 callback queue에 들어가는 실행 함수 정의
    .catch((error) => {console.log(error);});
