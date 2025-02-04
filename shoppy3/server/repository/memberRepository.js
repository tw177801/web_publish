import {db} from './db.js';


/**
 * 아이디 중복 체크 - select 
 */

export const getIdCheck = async({id}) => { // idData = {id: 'test'}
    // idData = {id: 'test'}

    // 암기 -> 결과값을 count 값으로 받는다. 
    const sql = `
        select count(id) as result from shoppy_member where id = ?
    `;


    const [result, fields] = await db.execute(sql, [id]);
    // console.log('result --->>>', result[0]);
    
    return result[0]; 
}




/**
 * 회원가입 - insert 
 */

export const registerMember = async(formData) => {
    // 1. SQL 생성 
        const sql = `
                        insert into shoppy_member(id, 
                                                pwd, 
                                                name, 
                                                phone, 
                                                emailname, 
                                                emaildomain,
                                                zipcode,
                                                address,
                                                mdate)
                                            values(?,?,?,?,?,?,?,?, now())    
                    `;

        const values = [
            formData.id,
            formData.pwd,
            formData.name,
            formData.phone,
            formData.emailname,
            formData.emaildomain,
            null,
            null
        ];

    // 2. db 객체 이용하여 SQL 실행 후 결과 가져오기 
        const [result, fields] = await db.execute(sql, values)
        // console.log(result);
        // console.log(fields);
        
    // 3. 결과값 리턴
        return {"result_rows": result.affectedRows};
}