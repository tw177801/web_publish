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
       ) as imgList,
       json_arrayagg(
			concat('http://localhost:9000/', jt.filename)
       ) as detailImgList
	from shoppy_product, 
		json_table(shoppy_product.upload_file, '$[*]' 
					columns( filename varchar(100) path '$' )) as jt
    where pid = 4
    group by pid;
    
-- 
show tables;
select * from shoppy_member;
select * from shoppy_product;

-- 어떤 회원(pk:id)이 어떤 상품(pk:pid)을 장바구니에 넣었는지 명확하게 정의

-- shoppy_cart 
-- 컬럼 리스트 : cid(pk), id(shoppy_member:fk), pid(shoppy_product:fk), size, qty, cdate(장바구니 등록 날짜)
desc shoppy_member;
desc shoppy_product;

create table SHOPPY_CART(
	CID 	INT PRIMARY KEY AUTO_INCREMENT,
    SIZE 	VARCHAR(10) NOT NULL,
    QTY 	INT NOT NULL, 
    CDATE 	DATETIME,
    ID		VARCHAR(30) NOT NULL,
    PID		INT NOT NULL,
    CONSTRAINT FK_ID_SHOPPY_MEMBER_ID FOREIGN KEY(ID)
					  REFERENCES SHOPPY_MEMBER(ID),
	CONSTRAINT FK_PID_SHOPPY_PRODUCT_PID FOREIGN KEY(PID)
					  REFERENCES SHOPPY_PRODUCT(PID)
);

SHOW TABLES;
DESC SHOPPY_CART;
SELECT * FROM SHOPPY_CART;
DROP TABLE SHOPPY_CART;
-- 

truncate table shoppy_cart;


-- 
select * from shoppy_cart;

insert into shoppy_cart(size, qty, cdate, id, pid)
	values('XS', 2, now(), 'test2', 10);

select * from shoppy_product where pid=3;

-- shoppy_cart, shoppy_member, shoppy_product 조인 

SELECT * FROM SHOPPY_MEMBER; 

SELECT SC.CID,
	   SC.SIZE,
       SC.QTY,
       SM.ID,
       SM.ZIPCODE,
       SM.ADDRESS,
       SP.PID,
       SP.PNAME,
       SP.PRICE,
       SP.DESCRIPTION as info,
       CONCAT('http://localhost:9000/', SP.UPLOAD_FILE->>'$[0]') as image
	FROM SHOPPY_CART SC, 
		 SHOPPY_MEMBER SM,
         SHOPPY_PRODUCT SP
	WHERE SC.ID = SM.ID 
			AND SC.PID = SP.PID
            AND SM.ID = 'TEST1';

-- 
use hrdb2019;
select * from shoppy_cart;
truncate table shoppy_cart;

-- select count(*) as count from shoppy_cart
select * from shoppy_cart
where id='test1';
-- [{count: 4}] [count 필드 정보]

select * from shoppy_cart
	where id='test1' and pid=4 and size='M';

select * from shoppy_cart
	where cid='1';































    
