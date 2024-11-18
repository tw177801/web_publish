// 1. 배열의 사과 요소를 딸기로 교체해 주세요.
console.clear();

let fruits = ['🍎', '🍏', '🍓'];

// output => ['🍓', '🍏', '🍓'];

// 1.1 for문의 index 주소 활용
for(let i=0; i<fruits.length; i++) {
    if(fruits[i] === '🍎') fruits[i] = '🍓';
    console.log(fruits[i]);
    
}