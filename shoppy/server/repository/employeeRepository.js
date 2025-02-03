import {db} from './db.js';

export const getEmployeeAll = async () => {

    // 1. sql 쿼리 작성 
    const sql = `select * from employee`;

    // 2. db.js의 connection을 이용하여 실행한 후 결과 가져오기 
    const employees = await db.execute(sql)
                                .then(result =>  result[0])
                                .catch(error => console.log(error));
    
    // 3. 호출한 곳에 결과 리턴 
    return employees;

};
