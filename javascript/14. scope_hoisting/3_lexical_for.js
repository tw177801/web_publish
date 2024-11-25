// var 변수 쓰지 않는 이유 설명

console.clear();

{

for(let i=1; i<=5; i++){
    console.log(i);
}

for(var i=1; i<=5; i++){
    console.log(i);
}

for(i=1; i<=5; i++){
    console.log(i);
}


/* for 루프의 인덱스값으로 var 키워드는 권장하지 않음 */

let a = [1, 2, 3];
for(let i=0; i<a.length; i++) {
    console.log(`a[${i}] --> ${a[i]}`);
}

console.log(`a[${i}] --> ${a[0]}`);
console.log(`a[${i}] --> ${a[1]}`);
console.log(`a[${i}] --> ${a[2]}`);

}

/** for ...of */
for(let element of a) {
    console.log(element);
    
} // 레코드 별도 생성