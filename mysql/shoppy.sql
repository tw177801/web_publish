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
         
CREATE TABLE SHOPPY_MEMBER(
	ID					VARCHAR(30) PRIMARY KEY,
    PWD					VARCHAR(50) NOT NULL,	
    NAME				VARCHAR(10) NOT NULL,
    PHONE				CHAR(13)	NOT NULL,
    EMAILNAME 			VARCHAR(20) NOT NULL,
    EMAILDOMAIN 		VARCHAR(20) NOT NULL,
    ZIPCODE 			CHAR(5),
    ADDRESS 			VARCHAR(80),
    MDATE				DATETIME
);

DESC SHOPPY_MEMBER;
SELECT * FROM SHOPPY_MEMBER;

-- 'test1' 중복체크 : 결과를 count 함수 반환 
select count(id) as result from shoppy_member where id = 'test1';

use hrdb2019;
select database();

-- login 
select count(*) as result_rows from shoppy_member
	where id = 'test1' and pwd = '1234';

USE HRDB2019;
drop table shoppy_product;
SELECT * FROM INFORMATION_SCHEMA.TABLES
	WHERE TABLE_NAME LIKE 'shoppy%';

-- SHOPPY_PRODUCT
CREATE TABLE SHOPPY_PRODUCT(
	PID		INT		PRIMARY KEY AUTO_INCREMENT,
    PNAME 	VARCHAR(50)		NOT NULL, 
    PRICE 	INT,
    DESCRIPTION 	VARCHAR(200),
    UPLOAD_FILE		json,
    SOURCE_FILE		json,
	PDATE			DATETIME
);

DESC SHOPPY_PRODUCT;
SELECT * FROM SHOPPY_PRODUCT;

SET SQL_SAFE_UPDATES = 0;
delete from shoppy_product;
commit;
select * from shoppy_product;
select source_file from shoppy_product;

select pid,
	   pname as name,
	   price,
	   description as info,
	   concat('http://localhost:9000', upload_file) as image, 
	   source_file,
	   pdate        
			from shoppy_product;

select pid,
	   pname as name,
	   price,
	   concat('http://localhost:9000/', upload_file->>'$[0]') as image,
	   description as info,
	   source_file,
	   pdate        
from shoppy_product;

select pid,
	   pname,
       price,
       description,
       upload_file as uploadFile,
       source_file as sourceFile,
       pdate,
       concat('http://localhost:9000/', upload_file->>'$[0]') as image,
       json_array(
			concat('http://localhost:9000/', upload_file->>'$[0]'),
			concat('http://localhost:9000/', upload_file->>'$[1]'),
            concat('http://localhost:9000/', upload_file->>'$[2]')
       ) as imgList
	from shoppy_product
    where pid = 4;
