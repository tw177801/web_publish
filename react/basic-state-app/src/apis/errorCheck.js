/**
 * Signup 에러 체크 함수
 */


export const errorCheckSignup = (name, value, errors, setErrors) => {

    const names = [
        {'name': 'id', 'msg': '아이디를 입력해주세요' },
        {'name': 'pwd', 'msg': '패스워드를 입력해주세요' },
        {'name': 'cpwd', 'msg': '패스워드 확인을 입력해주세요' },
        {'name': 'name', 'msg': '이름을 입력해주세요' },
        {'name': 'phone', 'msg': '휴대폰 번호를 입력해주세요' },
        {'name': 'emailName', 'msg': '이메일 주소를 입력해주세요' }
    ];


    names.map(item => 
        (item.name === name) ? (
            (value === '') ? setErrors({...errors, [item.name]: item.msg}) 
            : setErrors({...errors, [item.name]:''})
        ) : ''

    );


// 코드 단축 연습


    // if(name === 'id') {
    //     (value === '') ? setErrors({...errors, ['id']:'아이디를 입력해주세요'}) 
    //     : setErrors({...errors, ['id']:''});
    // } else if ( name === 'pwd') {
    //     (value === '') ? setErrors({...errors, ['pwd']:'패스워드를 입력해주세요'}) 
    //     : setErrors({...errors, ['pwd']:''});
    // } else if ( name === 'cpwd') {
    //     (value === '') ? setErrors({...errors, ['cpwd']:'패스워드 확인을 입력해주세요'}) 
    //     : setErrors({...errors, ['cpwd']:''});
    // } else if ( name === 'name') {
    //     (value === '') ? setErrors({...errors, ['name']:'이름을 입력해주세요'}) 
    //     : setErrors({...errors, ['name']:''});
    // } else if ( name === 'phone') {
    //     (value === '') ? setErrors({...errors, ['phone']:'휴대폰 번호를 입력해주세요'}) 
    //     : setErrors({...errors, ['phone']:''});
    // } else if ( name === 'emailName') {
    //     (value === '') ? setErrors({...errors, ['emailName']:'이메일 주소를 입력해주세요'}) 
    //     : setErrors({...errors, ['emailName']:''});
    // }





}