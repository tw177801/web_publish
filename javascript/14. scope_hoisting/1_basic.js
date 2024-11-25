/*
    scope(스코프) : 메모리 관리, 이름의 충돌 방지, 블록단위의 개념 구분
    block(블록 : {}) :
    {
        블록단위의 실행 개념 : for, switch~case, if~else..
    }


*/

console.clear();

{

    // 전역변수, Global Variable
    // 파일 전체 어느 곳에서든지 호출이 가능
    // 변수의 초기화는 자동

    let a = 10; 
    const b = 20;

    console.log(a);
    console.log(b);


    {
        // 지역변수 Local Variable
        // 선언된 블럭안에서만 호출 가능
        // 반드시 초기화를 진행
        let ab = undefined;
        let aa = 100;
        const bb = 200;
        console.log(aa, bb);
        
    }


    // console.log(aa);

    //

    for(let i=1; i<=5; i++){ // i 로컬 변수
        console.log(i);
    }



}