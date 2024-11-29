/*****************************************
 *       회원가입 폼 체크
 ******************************************/

function joinFormCheck() {
    const id = document.querySelector("#id");
    const pwd = document.querySelector("#pwd");
    const cpwd = document.querySelector("#cpwd");

    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");

    if(id.value === "") {
        idMsg.style.fontWeight = "bold"
        id.focus();
    }
}

/*****************************************
 *       회원가입 실시간 체크
 ******************************************/


function handleChangeJoin(event) {
    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");

    if(event.target.id === "id") {
        (event.target.value.trim().length !== 0)
            ? idMsg.style.color = "green"
            : idMsg.style.color = "red";
    } else if(pwd.value === "") {
        pwdMsg.style.color = "red";
        pwd.focus();
    } else if(cpwd.value === "") {
        cpwdMsg.style.color = "red";
        cpwd.focus();
    }
}


/*****************************************
 *       아이디, 패스워드 실시간 체크
 ******************************************/

function handleChange(event) {

    const idMsg = document.querySelector("#error-msg-id")
    const pwdMsg = document.querySelector("#error-msg-pwd")
    
    if(event.target.id === "id") {
        (event.target.value.trim().length !==0)?
        idMsg.style.color="green"
        : idMsg.style.color="red";
    } else {
        (event.target.value.trim().length !==0)?
        pwdMsg.style.color="green"
        : pwdMsg.style.color="red";

    }
}









/*****************************************
 *          로그인 폼 체크
 ******************************************/

function loginFormCheck() {
    const id = document.querySelector("#id");
    const pwd = document.querySelector("#pwd");
    const msgId = document.querySelector("#error-msg-id")
    const msgPwd = document.querySelector("#error-msg-pwd")

    if(id.value === '') {
        // alert('아이디를 입력해주세요')
        msgId.textContent = '아이디를 입력해주세요';
        msgId.style.fontSize = '12px';
        msgId.style.color = 'red';
        msgId.style.paddingTop = '10px';
        id.focus();
    } else if (pwd.value === '') {
            msgPwd.textContent = '패스워드를 입력해주세요';
            msgPwd.style.fontSize = '12px';
            msgPwd.style.color = 'red';
            msgPwd.style.paddingTop = '10px';
            pwd.focus();
        } else {
            alert('입력완료!!');
        }
    }

