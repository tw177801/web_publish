// function은 데이터 타입?? object
// 주소값 heap 저장
// 호출 시 주소값 불러옴

console.clear();


function add(a, b) {
    console.log(a + b);
}


let sum = add; //call by reference 
console.log(add);
console.log(sum);
// console.log(add(1, 2));
add(1,3);
sum(1,2);
console.log('---프로그램 종료---');
