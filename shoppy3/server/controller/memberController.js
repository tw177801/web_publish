import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';

/**
 * 로그인: checkLogin
 */

export const checkLogin = async (req, res) => {
    let result = await repository.checkLogin(req.body); // result_rows=1

    // let token = '';

    if(result.result_rows === 1) {
        // keygen 사이트: https://randomkeygen.com/ 
        // jwt 토큰 생성 및 result 객체에 추가 및 전송: { result_rows: 1, token: ~~~        
        const token = jwt.sign({"userId": req.body.id}, '5pGkYR090r');
        result = {...result, "token": token};
    }

    res.json(result);
    res.end();
} 


// 5KldLlOVja
// export const checkLogin = async (req, res) => {
//     let result = await repository.checkLogin(req.body); // result_rows=1
//     // let token = '';
//     if(result.result_rows === 1) {
//         // jwt 토큰 생성 및 result 객체에 추가 및 전송: { result_rows: 1, token: ~~~        
//         const token = jwt.sign({"userId": req.body.id}, '5KldLlOVja');
//         result = {...result, "token": token};
//     }
//     res.json(result);
//     res.end();
// } 



/**
 * 아이디 중복 체크: getIdCheck
 */

export const getIdCheck = async(req, res) => {
    // console.log('id--->> ', req.body);
    // jwt 토큰 생성 및 result 객체에 추가 및 전송: { result_rows: 1, token: ~~~        

    const result = await repository.getIdCheck(req.body);
    res.json(result);
    res.end();
}



/**
 * js 결과값
 * -> 오브젝트 리터럴 json으로 받는다
 * 회원가입: registerMember()
 * DB 방식: 비동기
 */

export const registerMember = async (req, res) => {
       const formData = req.body;
       const result = await repository.registerMember(formData);
       res.json(result);
       res.end();
}

// result = null -> await, async 사용 안 하면
// export async function registerMember() {}


