/*
	SHOPPY 테이블 정의 
*/

-- shoppy_member 테이블 생성
use hrdb2019;
select database();

show tables;


-- shoppy로 시작하는 모든 테이블 조회 
select * from information_schema.tables
		 where table_name like 'shoppy%';
         
