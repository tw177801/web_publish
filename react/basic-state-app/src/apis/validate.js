/**
 * 
 * Signup2 유효성 체크
 */


export function validateFormSignup2(refs) {

    // const refValues = Object.values(refs);
    // const refKeys = Object.Keys(refs);
    const refEntries = Object.entries(refs);

    // console.log(refValues);
    // console.log(refKeys);
    console.log(refEntries);
    
    const msgs = {'idRef':'아이디', 'pwdRef':'패스워드'};

    /**!!! 배열.map() or 배열.forEach() 함수는 배열 객체를 순회하는 것이
     * 목적이므로 if 체크 후 focus가 적용되지 않음!!!
     */

    // refEntries.forEach((item, index) => {
    //     const name = item[0];
    //     const ref = item[1];
    
    //     if(ref.current.value === '') {
    //         alert(`${msgs[name]}를 입력해주세요`);
    //         ref.current.focus();

    //         return false;
    //     }

    // });


    for(const item of refEntries) {
        const name = item[0];
        const ref = item[1];

        if(ref && ref.current.value === '') {
            alert(`${msgs[name]}입력`);
            ref.current.focus();
            return false;
        } 

    }

    // let checkResult = true;


    // if(refs.idRef.current.value === '') {
    //     alert('아이디 입력');
    //     refs.idRef.current.focus();
    //     checkResult = false;
    // } else if (refs.pwdRef.current.value === '') {
    //     alert('패스워드 입력');
    //     refs.pwdRef.current.focus();
    //     checkResult = false;
    // } else if (refs.nameRef.current.value === '') {
    //     alert('이름 입력');
    //     refs.nameRef.current.focus();
    //     checkResult = false;
    // } else if (refs.phone1Ref.current.value === '') {
    //     alert('휴대폰 번호 입력');
    //     refs.phone1Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.phone2Ref.current.value === '') {
    //     alert('휴대폰 번호 입력');
    //     refs.phone2Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.phone3Ref.current.value === '') {
    //     alert('휴대폰 번호 입력');
    //     refs.phone3Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.addressRef.current.value === '') {
    //     alert('주소 입력');
    //     refs.addressRef.current.focus();
    //     checkResult = false;
    // } else if (refs.birth1Ref.current.value === '') {
    //     alert('생일 입력');
    //     refs.birth1Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.birth2Ref.current.value === '') {
    //     alert('생일 입력');
    //     refs.birth2Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.birth3Ref.current.value === '') {
    //     alert('생일 입력');
    //     refs.birth3Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.jobRef.current.value === '') {
    //     alert('직업 입력');
    //     refs.jobRef.current.focus();
    //     checkResult = false;
    // } else if (refs.genderRef.current.value === '') {
    //     alert('성별 입력');
    //     refs.genderRef.current.focus();
    //     checkResult = false;
    // } else if (refs.emailRef.current.value === '') {
    //     alert('이메일 입력');
    //     refs.emailRef.current.focus();
    //     checkResult = false;
    // } else if (refs.introRef.current.value === '') {
    //     alert('자기소개 입력');
    //     refs.introRef.current.focus();
    //     checkResult = false;
    // }



    // return checkResult;

}






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



