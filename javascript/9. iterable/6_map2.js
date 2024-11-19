// Map 클래스 생성

console.clear();
const fList = new Map([[1, 'one'], [2, 'two']]);

console.log(fList);
console.log(fList.get(1));
console.log(fList.get(2));

// 사이즈 확인
console.log(`size ==> ${fList.size}`);

// 데이터 추가
fList.set(3, 'three');
// fList.set([[4, 'four'], [5, 'five']]); // set은 key, value
console.log(fList);

// 데이터 확인
if(fList.has(3)) console.log(fList.get(3));

// console.log(fList.has(3));
// console.log(fList.has(5));

// 모든 키값 출력
console.log(fList.keys());

// 모든 value 출력
console.log(fList.values());

// key, value를 입력된 순서대로 배열 형태로 반환
let iteratorObj = fList.entries();
console.log(iteratorObj);
// { [ 1 , 'one' ] , [ 2, 'two' ], [3, 'three'] }

console.log(iteratorObj.next().value);
// { value: [1, 'one'], done: false}


// 순회: forEach
fList.forEach((element) => console.log(element));

// fList.forEach((key) => 
//     console.log(key));
// // value 값이 나온다 -> 기억

fList.forEach((value, key, map) => 
    console.log((value, key, map)));

// 순회: for...of
// [key, value]
for(let element of fList) console.log(element);
    
console.log(fList.keys());

// key 출력
for(let key of fList.keys()) console.log(`key => ${key}`);

// value 출력
for(let values of fList.values()) console.log(`values => ${values}`);

// entries: 1, one
// for(let entry of fList.entries()) console.log(`entry => ${entry.values}`);
for(let entry of fList.entries()) console.log(`entry => ${entry}`);

// 데이터 삭제
if(fList.has(1)) fList.delete(1);
console.log(fList);

// 전체 삭제
fList.clear();
console.log(fList);

