// 함수의 값 전달 인자  
// parameter (파라미터), argument, 매개변수, 

console.clear();

function add(a, b, ...numbers) {
    return a + b;
}

function add2(...numbers) { // Spread operator(전개 구문)
    return numbers;
}

function add3(a, b, ...datas) {
    console.log(a);
    console.log(b);
    console.log(datas);
    
}

// 함수 호출
let sum = add(100, 200, 22);
let sum2 = add2(100, 3, 22, 2435, 5645, 4);


console.log(`sum = ${sum}`);
console.log(`sum2 = ${sum2}`);

add3(1,2,3,4,5,6,7);