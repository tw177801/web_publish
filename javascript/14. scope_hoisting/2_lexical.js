// lexical(렉시컬) - 실행 컨텍스트 안에 포함된 개념으로 스코프별로 메모리를 효율성
// 있게 관리하는 영역, 변수 선언, 실행코드, 외부호출 코드
// 콜스택(Call Stack) - 호출되는 코드(함수)를 순서대로 실행
// 스코프 체이닝
// js 에러 원인 파악
// 콜스택, 메모리 힙, 실행 컨텍스트 동작 원리 그림 그려서 설명

//변수의 선언시 let, const를 활용하여 정확한 스코프 범위 설정 중요




console.clear();


{
    let a = 10;
    console.log(`a--> ${a}`);
    console.log(`aa--> ${aa}`); //? -> 에러 뜨지 않는 거 기억
    
    {
        let b = 20;
        var aa = 100; // var는 전역으로 선언됨
        console.log(`b--> ${b}`);
        console.log(`aa--> ${aa}`);
        
        {
            let c = 30;
            console.log(`c--> ${c}`);
            console.log(`a--> ${a}`);
            console.log(`b--> ${b}`);
            
        } // level 3

    } // level 2
} // level 1