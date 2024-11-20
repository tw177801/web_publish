// java script 호출 시 HTML의 body를 DOM에 먼저 로딩 후 실행하도록 하는 함수
// window.onload(), document.ready(), DOMContentLoad()


window.addEventListener('DOMContentLoad', function() {

    initForm();

});


// counter 폼 생성 함수 
function initForm() {
    let output = `
        <h1>DHTML - Counter</h1>
        <div class="counter_container">
        <div id="number">0</div>
        <button type="button" class="button" data-operation="increment"> increment</button>
        <button type="button" class="button" data-operation="decrement"> decrement</button>
        </div>
    `;



    // counter 폼 출력
    document.querySelector("#content").innerHTML = output;

    // DHTML로 생성된 버튼 이벤트 처리
            let buttons = document.querySelectorAll(".button");
            // console.log(buttons);
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    // let a = button.dataset.operation;
                    // console.log(a);
            
            let flag = button.dataset.operation;
            let number = document.querySelector("#number").textContent;

            if(flag === 'increment') {
                document.querySelector("#number").textContent = ++number; 
            }   else {
                if(number > 0)
                        document.querySelector("#number").textContent = --number; 

            }

        });
    });
    

}

// counter 증가
// function increment(flag) {
//     // alert('증가');
//     let number = document.querySelector("#number").textContent; 
//     // let number2 = document.querySelector("#number2").value; 
//     // console.log(++number);
//     document.querySelector("#number").textContent = ++number; 
    
// }


// counter, counter2 감소
// function decrement(flag) {
//     // alert('감소');
//     let number = document.querySelector("#number").textContent; 
//     if(number > 0)
//     document.querySelector("#number").textContent = --number; 

// }