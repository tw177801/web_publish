import {db} from './db.js';

export const getEmployeeAll = async () => {

    // 1. sql 쿼리 작성 
    const sql = `
                    select  row_number() over(order by emp_id) as no,
                            emp_id as id,
                            emp_name as name,
                            eng_name as emane,
                            gender,
                            hire_date as hiredate,
                            salary,
                            concat(format(salary,0), '만원') as osalary
                    from employee
                    where emp_id = ?
                `;
    
    // 2. db.js의 connection을 이용하여 실행한 후 결과 가져오기 
    const [employees, field] = await db.execute(sql)
                                .then(result =>  result[0]) // [ rows: [], fields: [ ]]
                                .catch(error => console.log(error));
    
    // 3. 호출한 곳에 결과 리턴 
    return employees;

};
