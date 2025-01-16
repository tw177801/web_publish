 
 
 
 /**********************************
  *     title : 로그인 폼 체크 
  **********************************/
 
 /**validate 함수 */
 export const validateLogin = (idRef, pwdRef) => {
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
