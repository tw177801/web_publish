/**
 * 
 * CgvLoginForm 유효성 체크 함수
 * @returns 
 * 
 * 자바 스크립트와 컴포넌트 구분을 잘해야 한다
 * 
 * props 사용 금지
 */



export const validationFormCheck = (param) => {

    let result = true;

    if(param.refs.idRef.current.value === '') {

        param.setErrors({...param.errors, ['id']:'아이디를 입력해주세요'});
        param.refs.idRef.current.focus();
        result = false;
        
    } else if (param.pwdRef.current.value ==='') {
        param.setErrors({...param.errors, ['pwd']:'패스워드를 입력해주세요'});
        param.refs.pwdRef.current.focus();
        result = false;
        
    }

    return result;
}



/**
 * 
 * Login2 컴포넌트 유효성 체크 함수
 * 
 * 
 */

export const validateLogin2 = (param) => {

    let result = true;
    if(param.idRef.current.value === '') {
        // alert('아이디를 입력해주세요');
        param.setErrorMsg({...param.errorMsg, ['id']:'아이디를 입력해주세요'});
        param.idRef.current.focus();
        result = false;
    } else if(param.passwordRef.current.value === '') {
        // alert('비밀번호를 입력해주세요');
        param.setErrorMsg({...param.errorMsg, ['pass']:'패스워드를 입력해주세요'});
        param.passwordRef.current.focus();
        result = false;
    }
    return result;
}


/**
 * UserInfo 컴포넌트의 유효성 체크 함수
 * 
 */


export const validateForm2 = (refs) => {

    let result = true;

    if(refs.nameRef.current.value === '') {
        // alert('이름을 입력해주세요');
        refs.nameRef.current.focus();
        result = false;
    } else if (refs.addressRef.current.value === '') {
        // alert('주소를 입력해주세요');
        refs.addressRef.current.focus();
        result = false;
    } else if (refs.ageRef.current.value === '') {
        // alert('나이를 입력해주세요');
        refs.ageRef.current.focus();
        result = false;
    }

    return result;
}


/**
 * Signup 컴포넌트의 유효성체크 함수
 */

export const validateSignup = (refs, errors, setErrors) => {

    // console.log(refs);
    let checkResult = true;
    if(refs.idRef.current.value === '') {
        // alert("아이디 입력");
        setErrors({...errors, ['id']:'아이디를 입력해주세요'});
        // refs.idRef.current.style.setProperty('color', 'red');
        refs.idRef.current.focus();
        checkResult = false;
        
        
    } else if (refs.pwdRef.current.value === '') {
        setErrors({...errors, ['pwd']:'패스워드를 입력해주세요'});
        // alert("패스워드 입력");
        refs.pwdRef.current.focus();
        checkResult = false;
        
        
    } else if (refs.cpwdRef.current.value === '') {
        setErrors({...errors, ['cpwd']:'패스워드 확인을 입력해주세요'});
        // alert("패스워드 확인 입력");
        refs.cpwdRef.current.focus();
        checkResult = false;
        
        
    } else if (refs.nameRef.current.value === '') {
        setErrors({...errors, ['name']:'이름을 입력해주세요'});
        // alert("이름 입력");
        refs.nameRef.current.focus();
        checkResult = false;
        
        
    } else if (refs.phoneRef.current.value === '') {
        setErrors({...errors, ['phone']:'휴대폰 번호를 입력해주세요'});
        // alert("휴대폰 번호 입력");
        refs.phoneRef.current.focus();
        checkResult = false;
        
        
    }  else if (refs.emailNameRef.current.value === '') {
        setErrors({...errors, ['emailName']:'이메일을 입력해주세요'});
        // alert("email 입력");
        refs.emailNameRef.current.focus();
        checkResult = false;


    }  else if (refs.emailDomainRef.current.value === 'default') {
        // alert("emailDomain 입력");
        refs.emailDomainRef.current.focus();
        checkResult = false;
    } 


    return checkResult;

}