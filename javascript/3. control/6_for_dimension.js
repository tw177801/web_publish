// 중첩 for문 : 이차원 형태의 저장소 데이터 출력

/*
    1(1,1) 2(1,2) 3(1,3)
    4(2,1) 5(2,2) 6(2,3)
    
    for() { //행
        for() { //열
        }
    }

*/

// for(let i= 1; i<3; i++) {
//     // console.log('ddd');
//     for(let j=1; j<4; j++) {
//         console.log(j);
        
//     }
// }



// rows += `${j}\t`;


// for(let i= 1; i<3; i++) {
   
//     let rows = '';
//     for(let j=1; j<4; j++) {
//         rows += `${j}\t`;
        
//     }
//     console.log(rows);
    
// }

/*************************************************/
/*
    1(1,1) 2(1,2) 3(1,3)
    4(2,1) 5(2,2) 6(2,3)
    
    중에서 4 5 6 구간만 출력하세요.
*/

// i
// for(let i= 4; i<6; i++) {

//     let rows = '';
//     for(let j=4; j<7; j++) {
//         rows += `${j}\t`;
//     }
//     console.log(rows);

// }

//풀이 과정
//i = 1, [] [] []
//i = 2, [] [] []

// let count = 1;
// for(let i= 1; i<6; i++) {

//     let rows = '';
//     for(let j=1; j<4; j++) {
//         rows += `${count += 2}\t`;       
//     }
//     console.log(rows);

// }

// console.clear();

/*************************************************/

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

for(let i= 1; i<10; i++) {
    console.log(`2 * ${i} = ${i*2}`);
}