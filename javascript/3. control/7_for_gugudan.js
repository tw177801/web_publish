// 구구단 2단을 출력
/**
 *      2 * 1 = 2
 *      2 * 2 = 4
 *      2 * 3 = 6
 *      2 * 4 = 8
 *      2 * 5 = 10
 *      2 * 6 = 12
 *      2 * 7 = 14
 *      2 * 8 = 16
 *      2 * 9 = 18
 */
// 2단 ~ 9단 출력
// console.clear();


// for(let i=1; i<10; i++) {
//     console.log(`2 * ${i} = ${i*2}`);
// }

// for(let i=1; i<=9; i++) { //1~9
    
//     let rows = '';
    
//     for(let j=2; j<=9; j++) { //2~9
//         rows += `${j} * ${i} = ${j*i}`; //2*1=2 3*1=3 ....
//     }
//     console.log(rows);
// }



//2차원 배열

// for(let i=1; i<6; i++) {
//     let rows = '';
//     for(let j=1; j<=i; j++) {
//         rows += `[${i}, ${j}]`;
//     }
//     console.log(rows);
    
// }

//별찍기
// for(let i=1; i<11; i++) {
//     let rows = '';
//     for(let j=1; j<=i; j++) {
//         rows += `*`;
//     }
//     console.log(rows);
// }


// console.clear();

//거꾸로
for(let i=11; i>=1; i--) {
    let rows = '';
    for(let j=i; j>=1; j--) {
        rows += `*`;
    }
    console.log(rows);
}