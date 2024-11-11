//구구단 3단 ~ 5단까지 출력

/*
    3*1 = 3 

*/ 
// rows : 1~9, col : 3~5

console.clear();

// let start = 3;
// let finish = 5;
// for (let row=1; row<10; row++) {
//     let output = '';
//     for(let col=start; col<=finish; col++) {
//         output += `${col} * ${row} = ${row*col}\t`;
//     }
//     console.log(output);
// }





/*
    *
    **
    ***
*/ 

// for(let i=1; i<9; i++) {
//     let rows = '';
//     for(let j=1; j<=1; j++) {
//         rows += `[${i}, ${j}]`;
//     }
//     console.log(rows);
// }






// 사과 이모지를 이용하여 출력
// 5번 돌리는 중(반복)
// row가 3행이 되면 빨간 사과 이모지 출력
// col과 row의 값(진행)이 같다.
/*
    🍏
    🍏🍏
    🍎🍎🍎
    🍏🍏🍏🍏
    🍏🍏🍏🍏🍏

*/


for(let row=1; row<=5; row++) {
    let output = '';
    for(let col=1; col<=row; col++){
        if(row === 3) {
            output += `🍎\t`;
        } else {
            output += `🍏\t`;
        }
        
    }
    console.log(output);
}


// * 출력
// for(let row=1; row<=5; row++) {
//     let output = '';
//     for(let col=1; col<=5; col++){
//         output += `* \t`;
//     }
//     console.log(output);
// }


// for(let i=1; i<11; i++) {
//     let rows = '';
//     for(let j=1; j<=i; j++) {
//         rows += '🍏';
//     }
//     console.log(rows);
// }