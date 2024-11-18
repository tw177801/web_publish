// 배열의 데이터 출력
// for, forEach
console.clear();

let numbers =  [1, 2, 3, 4, 5];
for(let i=0; i<numbers.length; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);
}

// forEach => 순회(literable) 메소드 지원
numbers.forEach((element, i) => console.log(`numbers[${i}] = ${element}`));

// replace3 함수를 forEach 형태로 생성해주세요.
function replace3(array, origin, target) {
    //forEach
    let arrayObject = Array.from(array);
    array.forEach((element, index) => {
        // if(element === origin) array[index] = target;
        if(element === origin) arrayObject.splice(index, 1, target);
    });
    return arrayObject;
}


let fruits = ['🍎', '🍏', '🍓'];
let result = replace3(fruits, '🍎', '🍋');
console.log(result);

