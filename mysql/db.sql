use hrdb2019;
select database();

show tables;

-- employee 테이블 전체 정보 출력 
desc employee;
select * from employee
	where emp_id = 's0001';

-- sys 부서에 속한 사원들만 출력
select * from employee
	where dept_id = 'sys';
    
-- 
select row_number() over(order by emp_id) as no,
	   emp_id as id,
	   emp_name as name,
       eng_name as emane,
       gender,
       hire_date as hiredate,
       concat(format(salary,0), '만원') as salary
from employee
where emp_id = 's0002';
       
-- 홍길동 
select * from employee where emp_id = 's0001';

-- 일지매
select * from employee where emp_id = 's0002';
    
    
    
