 
 
 
 /**********************************
  *     title : 로그인 폼 체크 
  **********************************/
 
 /**validate 함수 */
 export const validateLogin = ({idRef, pwdRef}) => {
    let result = true;

    if(idRef.current.value === '') {
        alert('아이디를 입력해주세요');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === '') {
        alert('비밀번호를 입력해주세요');
        pwdRef.current.focus();
        result = false;
    }
    return result;

}


export const validateSignup = (refs, msgRefs) => {


        const refEntries = Object.entries(refs);    // {idRef:xxx,...}
        const msgRefEntries = Object.entries(msgRefs);


        console.log(refEntries);    // []
        console.log(msgRefEntries);
        
        // refEntries 배열 객체와 msgRefEntries 배열 객체의 인덱스를 동일하게 체크한다!

        for(let i=0; i<refEntries.length; i++) {
            const item = refEntries[i];
            const msgItem = msgRefEntries[i];
            const name = item[0];
            const ref = item[1];    // 데이터 입력폼 객체 주소 
            const msgName = msgItem[0];
            const msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소 

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
    