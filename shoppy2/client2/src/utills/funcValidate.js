 
 
 
 /**********************************
  *     title : 로그인 폼 체크 
  **********************************/
 
 /**validate 함수 */
 export const validateLogin = ({idRef, pwdRef}, {msgRef}) => {
    let result = true;

    if(idRef.current.value === '') {
        // alert('아이디를 입력해주세요');
        msgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === '') {
        // alert('비밀번호를 입력해주세요');
        msgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        result = false;
    }  else {
        msgRef.current.style.setProperty('color', 'red');

    }
    return result;

}


export const validateSignup = (refs, msgRefs) => {


    // console.log('f-refs-->>', refs);
    // console.log('f-msgRefs --->>', msgRefs);

    
        const refEntries = Object.entries(refs.current);    // {idRef:xxx,...}
        const msgRefEntries = Object.entries(msgRefs.current);


        console.log(refEntries);    // []
        console.log(msgRefEntries);
        
        // refEntries 배열 객체와 msgRefEntries 배열 객체의 인덱스를 동일하게 체크한다!

        for(let i=0; i<refEntries.length; i++) {
            const item = refEntries[i];
            // const msgItem = msgRefEntries[i];
            const name = item[0];
            const ref = item[1];    // 데이터 입력폼 객체 주소 
            
            let msgItem, msgRef = null;
            // let msgItem, msgName, msgRef = null;

            if(i<refEntries.length-1) {
                    msgItem = msgRefEntries[i];
                    // msgName = msgItem[0];
                    msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소 
            }
            

            if(name !== 'emaildomainRef') { //  ''
                if(ref.current.value === '') {
                    // alert('이메일 주소를 선택해주세요')
                    msgRef.current.style.setProperty('color', 'red');
                    ref.current.focus();
                    return false;
                } else if(name === 'emaildomainRef') {   // default
                    if(ref.current.value === 'default') {
                        ref.current.focus();
                        return false;
                    }
                }
            }
        }
        return true;
        }
    
        // map, forEach 

        // let result = true;
        // if(refs.idRef.current.value === '') {
        //     alert("아이디를 입력해주세요");
        //     refs.idRef.current.focus();
        //     result = false;
        // } else if(refs.pwdRef.current.value === '') {
        //     alert("패스워드 입력해주세요");
        //     refs.pwdRef.current.focus();
        //     result = false;
        // }

        // return result;


 
 /**********************************
  *     Signup : 아이디 중복 체크 
  **********************************/

export const handleDuplicateIdCheck = (idRef, idMsgRef, pwdRef, setIdCheckResult) => {

    if(idRef.current.value === '') {
        idMsgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        return false;
    } else {
        const did = "test";
        
        if(idRef.current.value === did) {
            alert("이미 사용중인 아이디입니다. 새로운 아이디를 입력해주세요.");
            idRef.current.focus();
            return false;

        } else {
            alert("사용이 가능한 아이디입니다");
            // idCheckResultRef.current.value = "complete";
            setIdCheckResult.current.value ="complete";
            pwdRef.current.focus();
            return false;

        }
    }
}

 /**********************************
  *     Signup : 비밀번호&비밀번호 확인 체크 
  **********************************/


export const handlePasswordCheck = (pwdRef, cpwdRef, nameRef, pwdMsgRef, cpwdMsgRef) => {
    // const pwdRef = refs.current["pwdRef"];
    // const cpwdRef = refs.current["cpwdRef"];
    // const pwdMsgRef = refs.current["pwdMsgRef"];
    // const cpwdMsgRef = msgRefs.current["cpwdMsgRef"];

    // 객체 선언

    if (pwdRef.current.value === "" ) {
        pwdMsgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        return false;
    } else if(cpwdRef.current.value === "") {
        cpwdMsgRef.current.style.setProperty('color', 'red');
        cpwdRef.current.focus();
        return false;

    } else {
        // alert('비밀번호 체크');
        if(pwdRef.current.value === cpwdRef.current.value) {
            alert("비밀번호가 동일합니다.");
            nameRef.current.focus();
            return false; 

        } else {
            
            alert("비밀번호가 다릅니다. 다시 입력해주세요.");
            pwdRef.current.value = "";
            cpwdRef.current.value = "";
            pwdRef.current.focus();
            return false;

        }
    }
}