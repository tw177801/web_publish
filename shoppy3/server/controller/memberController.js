import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';



/**
 * 로그인: checkLogin
 */

export const checkLogin = async (req, res) => {
    let result = await repository.checkLogin(req.body); // result_rows=1

    // let token = '';

    if(result.result_rows === 1) {
        // jwt 토큰 생성 및 result 객체에 추가 및 전송: { result_rows: 1, token: ~~~        
        const token = jwt.sign({"userId": req.body.id}, '495a7237cf3301837c0c574e28401b1ec2a37bbc7514eebbef06a2c9a94aff5fdf26adb463bdf78d18749d42cd848cd6b901392bb6b1e1d0444193fdfacbc430ea1c55ba2abb28db4d356fa0e8db4abb71ad2bec99339346ab6d965ce392855b2b9ca88037b20bc9bc4a2a69ca5073a17f8a6017ea102591a30d09dd22f5d61e4f57f589034006feaa36e2b2f5e54cb5b30f41ff6ca9a0a40763f81d989e72934d75877c96696bb0868dbec25f5a3cbfb3a0788b7c15c6a9983815b752ba679c23738c15921d944d95162f4f8956c2839541b490272b2bb39b3e16a7a9692fb78e0755a0dac748a33ca4f07478ca090e55ae3bfef28642f75cff57f9d69c726a');
        result = {...result, "token": token};
    }

    res.json(result);
    res.end();
} 



// 5KldLlOVja



/**
 * 아이디 중복 체크: getIdCheck
 */

export const getIdCheck = async(req, res) => {
    // console.log('id--->> ', req.body);

    let token = '';
    
    const {result_rows} = await repository.getIdCheck(req.body); // result = {result_rows:1}
    if(result_rows === 1) {
        // jwt 토큰 생성 및 result 객체에 추가 및 전송: { result_rows: 1, token: ~~~        
        token = jwt.sign({"userId": req.body.id}, '495a7237cf3301837c0c574e28401b1ec2a37bbc7514eebbef06a2c9a94aff5fdf26adb463bdf78d18749d42cd848cd6b901392bb6b1e1d0444193fdfacbc430ea1c55ba2abb28db4d356fa0e8db4abb71ad2bec99339346ab6d965ce392855b2b9ca88037b20bc9bc4a2a69ca5073a17f8a6017ea102591a30d09dd22f5d61e4f57f589034006feaa36e2b2f5e54cb5b30f41ff6ca9a0a40763f81d989e72934d75877c96696bb0868dbec25f5a3cbfb3a0788b7c15c6a9983815b752ba679c23738c15921d944d95162f4f8956c2839541b490272b2bb39b3e16a7a9692fb78e0755a0dac748a33ca4f07478ca090e55ae3bfef28642f75cff57f9d69c726a');
    }
    res.json({"result_rows": result_rows, "token": token});
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


