// 1~6 까지 출력

// for(let i=1; i<=6; i++) {
//     console.log(`i = ${i}`);
// }

// 3인 경우 for문 빠져나오기

for(let i=1; i<=6; i++) {
    if(i === 3) {
        // break;
        i = 10;
    }  else {
        console.log(`i = ${i}`);
    }
}