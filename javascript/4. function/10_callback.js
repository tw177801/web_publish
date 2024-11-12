// 콜백함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함
// 인터뷰 질문 많이 나옴
// 비동기식 처리 프로미스에 많이 사용

// const add = (a, callback) => {
//         callback(a);
    
// }


// const add2 = (x) => {
//     console.log(x);
    

// }

// add(100, add2());



const job = (a, callback) => {
    callback(a);
}

const job2 = (a, b, callback) => {
    callback(a, b);
}

const print = (a) => console.log(a);
const printSum = (a, b) => {
    console.log(a+b);
}


job(100, print);
job2(100, 200, printSum);

//setTimeout 함수 호출 

console.clear();
//setTimeout(함수 주소);

setTimeout((second) => console.log(`${second}초 후 실행!!!`), "3000", 3);

//webAPI(백그라운드 영역)에 잠깐 있다가 등장