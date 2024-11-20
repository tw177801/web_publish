// counter 증가/감소
function counter(flag) {
    if(flag === 'increment') {
        let number = document.querySelector("#number").textContent;
        document.querySelector("#number").textContent = ++number
    } else {
        let number = document.querySelector("#number").textContent;
        if(number > 0)
            document.querySelector("#number").textContent = --number

    }
}

// counter 증가
function increment() {
    // alert('증가');
    let number = document.querySelector("#number").textContent; 
    // let number2 = document.querySelector("#number2").value; 
    // console.log(++number);
    document.querySelector("#number").textContent = ++number; 
    
}


// counter, counter2 감소
function decrement() {
    // alert('감소');
    let number = document.querySelector("#number").textContent; 
    if(number > 0)
    document.querySelector("#number").textContent = --number; 

}