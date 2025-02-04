import * as repository from '../repository/memberRepository.js';

/**
 * 아이디 중복 체크: getIdCheck
 */

export const getIdCheck = async(req, res) => {
    // console.log('id--->> ', req.body);
    const result = await repository.getIdCheck(req.body);
    res.json(result);
    res.end();
}







/**
 * 
 * js 결과값
 * -> 오브젝트 리터럴 json으로 받는다
 * 
 * 회원가입: registerMember()
 * 
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


