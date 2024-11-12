// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합
// export 키워드를 전역에서 사용할 수 있도록 함


// 구구단을 출력하는 함수 정의
/*
3 * 1 = 3   4 * 1 = 4   5 * 1 =5
3 * 2 = 6   
....
3 * 9 = 27
*/



/*
    기본 함수 형식 : 1 ~ 9 단 출력

*/

// function gugudan() {
//     for (let row=1; row<=9; row++) {
//         let output = '';
//         for (let col=start; col<=end; col++) {
//             output += `${col} ❌ ${row} = ${row * col}\t`;
//         }
        
//         console.log(output);
        
//     }
// }

// gugudan();
// gugudan(4, 9);
// gugudan(1, 1);


/*
    구구단 선택 함수 형식 : start ~ end 단 출력
    입력되는 start는 0보다 커야 한다.
    10단 이상은 출력되지 않도록 한다.
*/

export function selectGugudan(start, end) {
    for (let row=1; row<=9; row++) {
        let output = '';
        for (let col=1; col<=9; col++) {
            output += `${col} ❌ ${row} = ${row * col}\t`;
        }   
        console.log(output);
    }
}


/*
    구구단 싱글 함수 형식 : single 단 출력
    입력되는 매개변수는 0보다 커야 한다.
*/

export function singleGugudan(dan) {
    for (let row=1; row<=9; row++) {
            console.log(`${dan} ❌ ${row} = ${dan * row}\t`);
        }   
    }
// singleGugudan(3);// 3단 출력 
// singleGugudan(7,9);// 7~9단 출력
// singleGugudan();// 전체(1~9) 출력


// gugudan(start, end);

// 프루츠타워를 출력하는 함수 정의
const fruitsTower(emoji, floor) {
    for (let row=1; row<=floor; row++) {
        let output = '';
        for(let col=1; col<=row; col++) {
            output += emoji;

        }
        console.log(output);
        
    }
}