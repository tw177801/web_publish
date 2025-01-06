
/*


	* 데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다.
	
	SQL(Structured Query Language): 데이터 베이스에서 사용하는 구조화된 언어
    --> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어
    
    (1) DDL(Data Defintion Langauge): 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어
        - CREATE, ALTER, TRUNCATE, DROP
        
	(2) DML(Data Manipulation Langauge): 데이터 조작어 
		- 데이터를 CRUD 작업을 수행하는 언어
        - insert(C), select(R), update(U), delete(D)
        
	(3) DCL (Data Control Langauge): 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어
        - GRANT(부여), DEVOKE(해제)
        
	(4) DTL (Data Transaction Language): 데이터 트랜잭션 제어어
		- 데이터베이스의 작업 처리 단위인 트랜잭션을 관리하는 언어
        - commit(완료), rollback(취소), savepoint(작업구간별 저장)..
    
*/

/*

	데이터베이스 선택 및 조회
    show databases;				-- 모든 데이터베이스 목록 출력 
    use [선택한 데이터베이스명]; 		-- 사용할 데이터베이스 선택
    select database()			-- 데이터베이스 선택
    show tables; 				-- 데이터베이스에 저장된 테이블 전체 조회 
    
*/

show databases;
use hrdb2019;
select database();
show tables;

/*
	테이블 구조 확인: DESC(DESCRIBE)
    형식 - DESC [테이블명];
*/

SHOW TABLES;
DESC DEPARTMENT;
DESC EMPLOYEE;
DESC UNIT;
DESC VACATION;

/*

	테이블 조회(단순): SELECT ~ FROM ~ WHERE 
    - 조건절을 추가하여 다양한 쿼리를 실행 
    형식 - SELECT [컬럼리스트, *] 
			FROM [테이블명]
            WHERE [조건절];
		  SELECT [*(전체컬럼리스트)] FROM [테이블명];

*/

-- 사원테이블에서 SYS 부서에 근무하는 모든 사원을 조회
SELECT * FROM EMPLOYEE
	WHERE DEPT_ID = 'SYS';
 

-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회 
SELECT * FROM EMPLOYEE
	WHERE EMP_NAME ='정주고';

-- 사원 테이블에서 사원 아이디가 S0011인 사원의 정보를 모두 조회
SELECT * FROM EMPLOYEE
	WHERE EMP_ID ='S0011';
    
-- 사원 테이블에서 연봉이 5800인 사원의 모든 정보 조회
SELECT * FROM EMPLOYEE
	WHERE SALARY = '5800';
    
-- 사원 테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회 
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE, EMAIL FROM EMPLOYEE
	WHERE GENDER = 'F';
    
-- 사원 테이블에서 부서명이 SYS인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원 번호' 별칭 사용
SELECT EMP_ID '사원 번호', EMP_NAME, HIRE_DATE
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';
    
-- WHERE절 조건에 별칭으로 조회가 가능할까요???
SELECT EMP_ID '사원 번호', EMP_NAME, HIRE_DATE, DEPT_ID '부서 번호'
	FROM EMPLOYEE
    -- WHERE '부서 번호' = 'SYS';
    WHERE DEPT_ID = 'SYS';
    
    
-- 사원 테이블에서 마케팅 부서의 모든 사원 정보를 조회
SELECT * FROM EMPLOYEE
	WHERE DEPT_ID = 'MKT';


-- 사원 테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회 
SELECT * FROM EMPLOYEE
	WHERE HIRE_DATE = '2014-08-01';
-- DATE 타입은 표현은 문자처럼, 처리는 숫자

-- 연봉이 5000인 사원 정보 조회
SELECT * FROM EMPLOYEE
	WHERE SALARY = 5000;

SELECT * FROM EMPLOYEE;

-- NULL 타입 정리 :: 미지수
-- 숫자 컬럼에서는 가장 큰 숫자로 인식, 문자 컬럼에서는 작은 문자로 인식 
-- NULL은 논리적인 의미를 가지므로 IS 키워드를 비교 연산을 수행

-- 사원 테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
SELECT * FROM EMPLOYEE
	WHERE ENG_NAME IS NULL;
	-- WHERE ENG_NAME = NULL;

-- 연봉이 정해지지 않은 사원 조회
SELECT * FROM EMPLOYEE
	WHERE SALARY IS NULL;
    
-- IFNULL(): NULL 값을 다른 값은 대체해주는 함수 
-- 형식: IFNULL(대체해야할 컬럼명, 대체할 값);
-- 컬럼리스트에서 호출 

SELECT EMP_NAME, SALARY, IFNULL(SALARY, 0) AS SALARY2
	FROM EMPLOYEE;
    
-- ENG_NAME이 NULL인 사원들은 'SMITH' 이름으로 변경 후 조회 
-- 출력되는 컬럼명은 ENG_NAME으로 변경
SELECT 
	ENG_ID, 
    IFNULL(ENG_NAME, SMITH) AS 'ENG_NAME2',
    HIRE_DATE 
	FROM EMPLOYEE;

-- 모든 사원의 아이디, 사원명, 입사일, 퇴사일을 조회
-- 현재 근무중인 사원인 퇴사일에 현재의 날짜를 출력




-- 사원테이블에서 사원아이디, 사원명, 서열, 입사일을 조회 
/*
SHOW TABLES;
DESC EMPLOYEE;
select database();
select * from employee;
*/


-- 사원테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉 조회


    
-- 부서테이블의 모든 컬럼을 조회
-- 전체 -> *(아스타)


-- [조회한 컬럼명을 ALIAS(별칭)으로 출력]
-- 형식 : SELECT [컬럼명 AS '별칭', 컬럼명 AS '별칭'...] FROM [테이블명];
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 조회 컬럼을 출력 




-- 사원 테이블에서 사원명, 부서, 연봉을 조회 
-- 별칭으로 컬럼명을 수정
-- 기존 컬럼을 이용하여 가상컬럼 생성 - 연봉 10% 인센티브 컬럼(가상 컬럼, 물리적 X) 추가 생성
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
 

    
-- 현재의 날짜를 조회, 컬럼명을 'DATE'로 변경 (DB 대소문자 구별 X) 





show databases; -- 모든 데이터베이스 목록을 출력
use hrdb2019;
select database();
show tables;
select * from employee;
select * from department;
select * from unit;
select * from vacation;

-- 1
/*
	DISTINCT: 데이터 중복 배제, 중복된 데이터 하나만 출력
    형식 - SELECT [DISTINCT 컬럼리스트(중복데이터 포함)] 
			FROM [테이블명]
            WHERE [조건절];
*/

-- 사원테이블의 부서 컬럼을 조회
SELECT DISTINCT EMP_ID
	FROM EMPLOYEE;
    
/*
	ORDER BY: 데이터 정렬 (오름차순, 내림차순)
    형식: SELECT ~ 
			FROM ~
            WHERE ~
            ORDER BY [ASC/DESC] 컬럼리스트 
*/

-- 사원아이디, 사원명, 입사일, 연봉을 조회
SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY FROM EMPLOYEE;
	


-- 사원아이디 기준 오름차순으로 정렬 
SELECT EMP_ID, EMP_NAME,HIRE_DATE, SALARY
	FROM EMPLOYEE
    ORDER BY EMP_ID DESC;

-- 사원아이디 기준 오름차순, 입사일 기준 내림차순 
SELECT EMP_ID, EMP_NAME,HIRE_DATE, SALARY
	FROM EMPLOYEE
    ORDER BY EMP_ID DESC,
			HIRE_DATE DESC;
    
-- 급여를 기준으로 오름차순 정렬 후 조회 
SELECT * FROM EMPLOYEE
	ORDER BY SALARY DESC;

-- EGN_NAME이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
SELECT * FROM EMPLOYEE
	WHERE ENG_NAME; 




-- 퇴직한 사원들을 급여가 높은 순으로 조회 

    

-- 정보 시스템 부서의 사원들 중 급여가 높은 순으로 조회




-- 정보 시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회 

    
/*
	특정 범위의 데이터 검색: WHERE [조건절 + 비교연산자]
    형식 - SELECT [컬럼리스트] 
		  FROM [테이블명]
          WHERE 컬럼명 [비교연산자 조건절]
*/


-- 사원중에서 연봉이 5000 이상인 사원들을 조회 

    
-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원을 조회
-- DATE 타입은 표현은 문자처럼, 처리방식은 숫자처럼 
SELECT * FROM EMPLOYEE
	WHERE HIRE_DATE <= '2016-01-01';
    
-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000이상인 사원들을 조회
-- AND(~이고): 2개의 조건이 모두 만족한 데이터만 조회
SELECT * FROM EMPLOYEE
	WHERE HIRE_DATE >= '2015-01-01'
    AND SALARY >= 6000;


-- 입사일이 2015년 1월 1일 이후이거나 또는, 급여가 6000 이상인 사원들을 조회
-- OR(~또는): 2개의 조건 중 1개만 만족해도 데이터 조회
SELECT * FROM EMPLOYEE
	WHERE HIRE_DATE >= '2015-01-01'
    OR SALARY >= 6000;

    
-- 입사일이 2015년 1월 1일부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회
SELECT * FROM EMPLOYEE
			WHERE SINCE;
        
-- 연봉 구간이 5000 이상부터 7000미만의 사원들을 모두 조회

        
/*

	BETWEEN ~ AND: 특정 구간 조회시 사용
    형식 - SELECT []
		FROM []
        WHERE  BETEEN AND
*/

-- 2016년 입사자들을 조회
-- 2016-01-01 ~ 2016-12-31
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE BETWEEN '2016-01-01' AND '2016-12-31'; 

    
-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회

    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회

        
/*
	IN 연산자: 한 컬럼에 추가되는 OR 연산식을 대체하는 IN 연산자 
    형식: SELECT [컬럼리스트]
		FROM [테이블명]
        WHERE 컬럼명 IN (조건1, 조건2, 조건3...);
*/
-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회
SELECT * FROM EMPLOYEE
	WHERE EMP_ID IN ('S0001', 'S0010', 'S0020');
    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회
SELECT * FROM EMPLOYEE
	WHERE DEPT_ID IN ('MKT', 'GEN', 'HRD');

/*
	와일드 카드 문자: 특정 문자열 검색 + LIKE
    종류: %(전체), _(한문자)
    사용법: LIKE 연산자와 함께 조건식을 추가하여 사용됨 
    형식 - SELECT [컬럼리스트]
		FROM [테이블명]
        WHERE 컬럼명 [와일드 카드 문자를 이용한 특정문자열 검색 조건]
*/

-- 영어 이름이 'f'로 시작하는 모든 사원들을 조회
SELECT * FROM EMPLOYEE
	WHERE ENG_NAME LIKE 'f%';
    
-- '한'씨 성을 가진 모든 사원들을 조회


-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회 
SELECT * FROM EMPLOYEE
		WHERE EMAIL LIKE '_a%';
    
-- 이메일 주소가 4자리인 모든 사원을 조회
SELECT * FROM EMPLOYEE
	WHERE EMAIL LIKE '____@%';
    
-- 이름에 '삼'이 들어가는 모든 사원을 조회
SELECT * FROM EMPLOYEE
	WHERE EMP_NAME LIKE '%삼%';

/************************************
	내장함수(Built-in): 숫자, 문자, 날짜 함수
    - 함수 테스트를 위한 테이블 DUAL 
    - SELECT [함수 실행] FROM DUAL; 
*************************************/

-- 1. 숫자 함수: abs(), rand(), truc()... 
-- (1) abs 함수: 절댓값 표현 함수 
SELECT 100, -100, ABS(100), ABS(-100)
	FROM DUAL;

-- (2) FLOOR 함수: 소수점을 버리는(삭제) 함수
/*
	TRUNCATE: 소수점을 삭제하는 함수 - TURNCATE(데이터, 자릿수)
    
    
    
*/	 
SELECT 123.456, FLOOR(123.456) FROM DUAL;
SELECT 123.456, 
	TRUNCATE(123.456, 0) AS '소수점0', 
    TRUNCATE(123.456, 2) AS '소수점2' FROM DUAL;

-- (3) RAND 함수: 임의의 수를 생성
SELECT RAND(),
		RAND()*1000 AS RS,
        RAND()*10000 AS II
		FROM DUAL;
        
--
SELECT  FLOOR(RAND()) RAND1,
		TRUNCATE(RAND()*1000, 0) RAND2, 
        TRUNCATE(RAND()*10000, 0) AS RAND3,
        TRUNCATE(RAND()*10000, 2) AS RAND4
		FROM DUAL;
        
-- 정수만 출력하는 쿼리 실행
SELECT  RAND(),
		RAND()*1000, 
        RAND()*10000
		FROM DUAL;
        
-- (4) MOD 함수: 모듈러 연산을 실행하는 함수 - MOD(숫자데이터, 연산 숫자)
SELECT MOD(100, 2) 짝수, MOD(101, 2) 홀수 FROM DUAL;

-- 1~3 자리의 정수를 생성하고, 생성한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요
SELECT 
	MOD(TRUNCATE(RAND()*1000, 0), 2) RESULT
	FROM DUAL;

SELECT MOD(100, 2) FROM DUAL;
    
-- 사원테이블에서 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 인센티브 (연봉 20%)를 조회
-- 인센티브의 소수점 생략
-- 연봉 협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함 
-- 5000 미만의 사원들 정보만 출력 

SELECT EMP_ID, 
		EMP_NAME, 
        DEPT_ID, 
        HIRE_DATE,
        IFNULL(SALARY,0) AS SALARY,
        IFNULL(TRUNCATE(SALARY*0.2, 0),0) INCENTIVE
	FROM EMPLOYEE
	WHERE SALARY < 5000 OR SALARY IS NULL;
    
    
-- 2. 문자 함수: CONCAT(), SUBSTRING()...
-- (1) CONCAT(문자열, 문자열...): 문자열 결합    
SELECT CONCAT('MY', 'SQL', '-84') NAME
	FROM DUAL;
    

-- 사원테이블의 사원명과 영어 이름을 결합과 새로운 컬럼을 생성하고 컬럼명은 TEST_NAME으로 조회
-- 예시) 홍길동/HONG
-- 영어 이름이 정해지지 않은 사원은 빈문자열로 치환해서 실행
SELECT EMP_NAME, 
	   ENG_NAME,
	   CONCAT(EMP_NAME, '/', IFNULL(ENG_NAME, '')) AS TEST_NAME
    FROM EMPLOYEE;
    
-- 사원 테이블의 사원 아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을
-- 생성하고 조회
-- 사원 아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼리스트를 조회
-- 현재 근무 중인 사원은 현재 날짜를 출력

SELECT EMP_ID,
	   CONCAT(EMP_ID, '_', TRUNCATE(RANDOM()*10000,0)) EMP_NUMBER, 
       EMP_NAME,
       HIRE_DATE,
       SALARY,
       IFNULL(RETIRE_DATE, CURDATE()) RETIRE_DATE,
       IFNULL(RETIRE_DATE, NOW()) RETIRE_DATE
	   FROM EMPLOYEE;
       
SELECT EMP_ID,
	   EMP_NAME,
       IFNULL(HIRE_DATE, CURDATE())
       FROM EMPLOYEE;

-- (2) SUBSTRING(문자열, 위치, 추출 자릿수): 문자열 추출 함수
SELECT SUBSTRING('대한민국 홍길동 만세 1234!!', 1, 4) 대한민국,
	   SUBSTRING('대한민국 홍길동 만세 1234!!', 6, 3) 홍길동,
       SUBSTRING('대한민국 홍길동 만세 1234!!', 10, 2) 만세,
       SUBSTRING('대한민국 홍길동 만세 1234!!', 17, 2) '!!'
	FROM DUAL;
    
-- 사원 테이블에서 사원 아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회

        
-- 2015년도 입사한 모든 사원들을 조회

	
-- 2018년도에 정보시스템 부서에 입사한 모든 사원들을 조회 


-- (3) LEFT (문자열, 추출 숫자), RIGHT(문자열, 추출 숫자)

        
-- 2015년도에 입사한 모든 사원들을 조회


-- 사원들의 폰번호 마지막 4자리를 조회 
-- 사원명, 부서 아이디, 입사년도, 폰번호 (마지막 4자리) 조회

    
-- (4) UPPER(대문자), LOWER(소문자)

    
-- 사원들의 영어 이름과 이메일 주소를 모두 대문자로 조회


    
-- (5) TRIM(): 공백 제거 
SELECT TRIM('MY            SQL      ') FROM DUAL;

    
-- (6) FORMAT(문자열 또는 숫자, 소수점자리 ): 문자열의 포맷 수정     
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
SELECT FORMAT(12345678, 2) FROM DUAL;
       
-- 사원 테이블의 사원 아이디, 사원명, 입사일, 연봉을 조회
-- 연봉 협상 전인 사원은 0으로 변환 후 조회 
-- 연봉은 3자리씩 콤마로 구분하여 출력
SELECT EMP_ID,
		EMP_NAME,
		HIRE_DATE,
        CONCAT(FORMAT(IFNULL(SALARY, 0),0),'만원') SALARY
        FROM EMPLOYEE;
        
-- 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 보너스 연봉(0.05%) 컬럼들을 조회
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력 후 '만원' 추가
-- 보너스 컬럼은 소수점 1자리까지 출력

SELECT EMP_ID,
	   EMP_NAME,
       DEPT_ID,
       HIRE_DATE,
       FORMAT(IFNULL(SALARY, 0),0) SALARY,
       FORMAT(IFNULL(SALARY * 0.05,0), 1) BONUS
       FROM EMPLOYEE;
       
-- 3. 날짜 함수: CURDATE(), NOW(), SYSDATE()
-- (1) CURDATE(): (0: 현재 시스템 날짜를 출력, 년월일 만 출력)
SELECT CURDATE() FROM DUAL;

-- (2) NOW(), SYSDATE(): 현재 시스템 날짜를 출력, 년월일 시분초 출력 
SELECT NOW(), SYSDATE() FROM DUAL;

-- 4. 형변환 함수: CAST(), CONVERT()
-- CAST(변경데이터 AS 데이터타입)
SELECT 12345 숫자, CAST(12345 AS CHAR) 문자 
	FROM DUAL;
    
SELECT '12345' 문자, CAST('12345' AS UNSIGNED INTEGER) 정수 FROM DUAL;

-- 입력폼에서 '20150101' 데이터 날짜를 가진 사원을 조회
SELECT * 
	FROM EMPLOYEE
    WHERE HIRE_DATE = CAST('20150101' AS DATE);
    
-- FLOOR 함수를 적용한 CAST 함수 
SELECT FLOOR('12-34-5') 문자,
	   FLOOR(CAST('12-34-5' AS UNSIGNED INTEGER)) 정수
 FROM DUAL;
 
-- 5. 문자열 치환 함수 : REPLACE(문자열, OLD, NEW)
 SELECT '123,456' 문자,
		REPLACE('123,456', ',', '') 문자,
        CAST(REPLACE('123,456', ',', '') AS UNSIGNED INTEGER) 숫자
	FROM DUAL;

-- 사원테이블의 입사일 포맷을 변경 '2015-01-01' --> '2015/01/01'
SELECT EMP_NAME,
		HIRE_DATE,
		REPLACE(HIRE_DATE, '-', '/') HIRE_DATE
        FROM EMPLOYEE;


/**************************
	그룹(집계)함수: SUM(), AVG(), MIN(), MAX(), COUNT()...
	GROUP BY: 그룹함수를 적용하기 위해 일반컬럼을 그룹핑하는 단위 
    HAVING: 그룹함수의 조건절을 적용하는 구문 
***************************/
-- 1. SUM(숫자, 숫자컬럼)
-- 사원테이블에서 모든 사원의 연봉 총합을 조회 
-- 3자리 구분, '만원' 단위 추가 
SELECT SUM(SALARY) 총연봉,
       CONCAT(FORMAT(SUM(SALARY), 0), '만원') 총연봉
	FROM EMPLOYEE;

-- 2. AVG(숫자, 숫자컬럼)
-- 사원들의 총 연봉, 평균 연봉 조회 
-- 3자리 구분, '만원' 단위 추가
-- 소수점 1자리까지 유지 
SELECT CONCAT(FORMAT(SUM(SALARY), 0), ' 만원') 총연봉,
	   CONCAT(FORMAT(AVG(SALARY), 0), ' 만원') 평균연봉 
	FROM EMPLOYEE;
    
-- 3. MIN(숫자, 숫자컬럼)
-- 가장 작은 값을 출력 
-- 사원들의 총연봉, 평균 연봉, 최소 연봉을 출력 
SELECT 
	CONCAT(FORMAT(SUM(SALARY), 0), '만원') 총연봉,
    CONCAT(FORMAT(AVG(SALARY), 0), '만원') 평균연봉,
    CONCAT(FORMAT(MIN(SALARY), 0), '만원') 최소연봉,
    CONCAT(FORMAT(MAX(SALARY), 0), '만원') 최대연봉
	FROM EMPLOYEE;

-- 4. MAX

-- 5. COUNT(컬럼명)
-- 테이블의 ROW COUNT를 출력
-- NULL을 포함한 데이터의 COUNT를 계산하지 X
SELECT COUNT(*) 총사원수,
		COUNT(SALARY) 연봉협상완료사원수
       FROM EMPLOYEE;
SELECT *
	FROM EMPLOYEE
    WHERE SALARY IS NULL;
    
-- 총사원수, 퇴직한 사원수, 현재 사원수를 조회 
SELECT CONCAT(CAST(COUNT(*)AS CHAR), '명') 총사원수,
	   CONCAT(COUNT(RETIRE_DATE), '명') 퇴직사원수,
       CONCAT(COUNT(*) - COUNT(RETIRE_DATE), '명') 재직사원수
		FROM EMPLOYEE;
                
-- 사원테이블에서 정보시스템 부서의 사원수를 조회
SELECT COUNT(*) FROM EMPLOYEE
		WHERE DEPT_ID = 'SYS';
        
-- 2015년도에 입사한 사원수를 조회
SELECT * FROM EMPLOYEE
		WHERE HIRE_DATE BETWEEN '2015-01-01' AND '2015-12-31';

        
-- 가장 최근 입사자와 오래된 입사자의 입사일 조회
SELECT COUNT(*) '2015입사자(명)',
	   SUM(SALARY) 총연봉,
       AVG(SALARY) 평균연봉,
       MIN(SALARY) 최소연봉,
       MAX(SALARY) 최대연봉
	FROM EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) = '2015';


SELECT MAX(HIRE_DATE) '최근 입사일',
		MIN(HIRE_DATE) '최초 입사일'
		FROM EMPLOYEE;


SELECT * FROM EMPLOYEE
	WHERE HIRE_DATE = '2013-01-01';
    
SELECT * FROM EMPLOYEE
	ORDER BY HIRE_DATE DESC;

SELECT * FROM EMPLOYEE
	WHERE HIRE_DATE = '2018-04-01';

-- HRD 부서 기준 최근 입사자와 오래된 입사자의 입사일 조회 
SELECT MIN(HIRE_DATE), MAX(HIRE_DATE)
	FROM EMPLOYEE
	WHERE DEPT_ID = 'HRD';

-- 마케팅 부서 기준 가장 낮은 연봉과 높은 연봉 
SELECT MIN(SALARY) 'MKT-최소연봉', 
	   MAX(SALARY) 'MKT-최대연봉'
	FROM EMPLOYEE
    WHERE DEPT_ID = 'MKT';
    
SELECT * FROM EMPLOYEE
		WHERE DEPT_ID = 'MKT'
        AND SALARY;


-- 6. GROUP BY ~ 적용: ~~별 그룹함수를 적용해야 하는 경우 
-- 사원테이블에서 부서별 사원수를 조회
-- GROUP BY에 사용된 일반컬럼은 그룹함수와 함께 조회 가능 
SELECT DEPT_ID, COUNT(*) 부서별사원수
	FROM EMPLOYEE
    GROUP BY DEPT_ID;
    
    
-- 입사년도별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
SELECT * FROM EMPLOYEE;

SELECT 	
	   LEFT(HIRE_DATE, 4) 입사년도,
	   SUM(SALARY) 총연봉,
	   FORMAT(AVG(SALARY),0) 평균연봉,
	   CONCAT(MIN(SALARY), ' 만원') 최저연봉,
       MAX(SALARY) 최고연봉,
       CONCAT(COUNT(*), '명') 사원수
       FROM EMPLOYEE
       GROUP BY LEFT(HIRE_DATE, 4);


SELECT 	DEPT_ID 부서아이디,
	   CONCAT(FORMAT(SUM(IFNULL(SALARY, 0)),0), '만원') 총연봉,
	   FORMAT(AVG(SALARY),0) 평균연봉,
	   CONCAT(MIN(SALARY), ' 만원') 최저연봉,
       MAX(SALARY) 최고연봉,
       CONCAT(COUNT(*), '명') 사원수
       FROM EMPLOYEE
       GROUP BY DEPT_ID;
       
-- 7. HAVING 절: 
-- GROUP BY를 통해 그룹핑한 결과에 조건절을 추가하는 구문
-- 부서별 평균 연봉을 조회
-- NULL값이 포함된 경우 0으로 변환
-- 소수점 자리는 절삭 
-- 부서 아이디 함께 출력 
-- 부서 평균 연봉이 6000이상인 부서만 출력  
-- 평균연봉 기준 오름차순으로 정렬 
/*
SELECT SUM() *
	FROM EMPLOYEE
    GROUP BY
    HAVING 
*/

SELECT 
	DEPT_ID 부서ID,
	TRUNCATE(AVG(IFNULL(SALARY,0)),0) 평균연봉 -- 오라클 NVL(컬럼명, 값)
	FROM EMPLOYEE
    GROUP BY DEPT_ID
    HAVING 평균연봉 >= 6000 -- HAVING 절에서는 별칭컬럼명을 조건으로 사용가능함
    ORDER BY 평균연봉 ASC; 
    
 -- 입사년도 기준 총연봉, 평균연봉을 조회
 -- 총연봉이 2500 이상인 사원들만 출력 
 -- NULL 값을 포함한 경우 0으로 초기화 
 SELECT
	LEFT(HIRE_DATE,4),
    SUM(SALARY),
    AVG(SALARY)
    FROM EMPLOYEE
    GROUP BY LEFT(HIRE_DATE, 4)
    HAVING SUM(SALARY) >= 2500;

-- 부서별 남녀사원의 사원수를 조회
SELECT 
	DEPT_ID 부서ID,
    GENDER,
    COUNT(*) 사원수
	FROM EMPLOYEE
	GROUP BY DEPT_ID, GENDER;
        
-- 8. ROLLUP 함수: REPORTING을 위한 함수 
-- 형식: SELECT [컬럼리스트] FROM [테이블명]
-- 		WHERE [조건절]
-- 		GROUP BY [그룹핑 컬럼] WITH ROLLUP;
-- 부서별 총연봉을 조회, 연봉이 정해지지 않는 부서는 포함하지 않음 
SELECT
		IF(GROUPING(DEPT_ID), '부서총합계', IFNULL(DEPT_ID, '-')) 부서ID,
		CONCAT(FORMAT(SUM(SALARY),0), ' 만원') 총연봉 
    FROM EMPLOYEE
    WHERE SALARY IS NOT NULL
    GROUP BY DEPT_ID WITH ROLLUP;
    
-- 입사년도별 평균연봉을 조회 
-- 연봉이 정해지지 않는 부서는 포함하지 않음
-- 평균연봉이 4000 이상되는 입사년도만 출력 
-- 3자리 구분, '만원' 단위 추가 
-- 리포팅 함수 ROLLUP 사용 , '연도별 총합계' 컬럼명 추가 
SELECT	IF(GROUPING(YEAR), 
			'연도별평균연봉', IFNULL(YEAR, '-')) 연도별,
		CONCAT(FORMAT(AVG(SALARY),0), '만원') 평균연봉
	FROM (SELECT LEFT(HIRE_DATE, 4) YEAR,
					SALARY
			FROM EMPLOYEE) T -- 서브 쿼리 가상 임시 테이블 
    WHERE SALARY IS NOT NULL
    GROUP BY YEAR WITH ROLLUP;
    -- HAVING AVG(SALARY) >= 6000;

SELECT LEFT(HIRE_DATE, 4) HIRE_DATE,
	SALARY
    FROM EMPLOYEE;


SHOW TABLES;

-- 사원들의 휴가사용 내역을 조회 
SELECT * FROM VACATION;

-- 사원 아이디별 휴가 사용 횟수 조회 
-- 총휴가사용일 기준으로 내림차순 정렬 
SELECT *
	FROM VACATION;
    
SELECT 	EMP_ID 사원아이디,
		COUNT(*) 휴가상신횟수,
        SUM(DURATION)총휴가사용일자 
	FROM VACATION
    GROUP BY EMP_ID
    ORDER BY 총휴가사용일자 DESC;
    
SELECT * FROM EMPLOYEE;


SELECT 
		ENG_NAME,
        CONCAT(FORMAT(AVG(SALARY),0), ' 만원') 평균연봉
        FROM EMPLOYEE
        GROUP BY ENG_NAME;


SELECT EMP_ID,
		CONCAT(SUM(SALARY), ' 만원') 총연봉
        FROM EMPLOYEE
        GROUP BY EMP_ID
        ORDER BY 총연봉 DESC;
        

-- 2016 ~ 2017년도 사이에 사원아이디별 휴가사용 횟수 조회
-- 총휴가사용일 기준으로 내림차순 정렬
SELECT*FROM VACATION;


SELECT 
		IF(GROUPING(EMP_ID), '총휴가사용내역', IFNULL(EMP_ID, '-')) 사원ID,
		COUNT(*) 휴가상신횟수,
		SUM(DURATION) 총사용일수 
    FROM VACATION
    WHERE LEFT(BEGIN_DATE, 4) BETWEEN 2016 AND 2017
    GROUP BY EMP_ID WITH ROLLUP
    ORDER BY 총사용일수;
	
	
/***********************************
	DDL : 테이블 생성, 수정, 삭제 
    명령어 : CREACT, ALTER, DROP, TRUNCATE
************************************/
-- 1. 테이블 생성: CREATE
-- 형식: CREATE TABLE [생성할 테이블명] ( 
--  	 컬럼명 	데이터타입(크기) [제약사항], 
-- 			... 
-- 		)

SHOW DATABASES;
USE HRDB2019;
SELECT DATABASE();
show tables;

-- TEST 테이블 생성 및 제거 
CREATE TABLE TEST(
	ID CHAR(4)	NOT NULL
);

SHOW TABLES;
DESC TEST;
SELECT * FROM TEST;
DROP TABLE TEST;
SHOW TABLES;

-- DATA TYPE(데이터 타입): 숫자, 문자, 날짜(시간)
-- (1) 숫자 데이터 타입
-- 1) 정수: SMALLINT(2), INT(4), BIGINT(8)
-- 2) 실수: FLOAT(4), DOUBLE(8)
-- 3) 문자: CHAR(크기:고정형), VARCHAR(크기:가변형) 
-- 			예) NAME CHAR(20), NAME VARCHAR(20)
-- 4) 텍스트: TEXT - 긴 문장을 저장하는 데이터 타입 
-- 5) BLOB 타입: BLOB - 큰 바이너리 타입의 데이터 저장  
-- 6) 날짜: DATE - 년, 월, 일, DATETIME - 년, 월, 일, 시, 분, 초
-- 			데이터타입에 맞는 날짜 함수 호출필요 

DESC EMPLOYEE;
SELECT * FROM EMPLOYEE;

-- EMP 테이블 생성
-- 컬럼리스트 : EMP_ID 고정형(4), EMP_NAME 가변형(10), HIRE_DATE 날짜/시간, SALARY 정수(5)
CREATE TABLE EMP(
	EMP_ID	    CHAR(4),
    EMP_NAME	VARCHAR(10),
    HIRE_DATE	DATETIME,
    SALARY		INT(5)
);

SHOW TABLES;
DESC EMP;

DESC DEPARTMENT;
-- DEPT 테이블 생성: DEPT_ID 고정형(3),	
-- DEPT_NAME 가변형(10), LOC 가변형(20)

CREATE TABLE DEPT (
	DEPT_ID CHAR(3),
    DEPT_NAME VARCHAR(10),
    LOC VARCHAR(20)
);

SHOW TABLES;
DESC DEPT;
    
-- EMP, DEPT 테이블의 모든 데이터 조회
SELECT * FROM EMP;
SELECT * FROM DEPT;

-- 2. 테이블 생성(복제): CREATE TABLE ~ AS ~ SELECT 
-- 물리적으로 메모리 생성 
-- 기본키, 참조키 등의 제약사항은 복제가 불가능, 복제 후 ALTER TABLE 명령으로 제약사항 추가 
/*
	형식: CREATE TABLE [생성(복제)할 테이블명]
		 AS
		 SELECT [컬럼리스트] 
			FROM [테이블명]
            WHERE [조건절] 
*/ 
-- 정보시스템 부서의 사원들만 별도로 테이블 복제
-- EMPLOYEE_SYS 
CREATE TABLE EMPLOYEE_SYS
AS 
SELECT *
	FROM EMPLOYEE
	WHERE DEPT_ID = 'SYS';
   
SHOW TABLES;
SELECT * FROM EMPLOYEE_SYS;
DESC EMPLOYEE_SYS;
-- emp_id	char(5)	NO
-- emp_name	varchar(4)	NO
-- eng_name	varchar(20)	YES

DESC EMPLOYEE;
-- emp_id	char(5)	NO
-- emp_name	varchar(4)	NO
-- eng_name	varchar(20)	YES
    
-- 퇴직한 사원들을 복제하여 EMPLOYEE_RETIRE 테이블로 관리
SELECT * FROM EMPLOYEE;
	

SHOW DATABASES;
SHOW TABLES;
SELECT * FROM EMPLOYEE_RETIRE;

-- 2015년, 2017년 입사자들을 복제하여 별도로 관리
-- 테이블명: EMPLOYEE_2015_2017
CREATE TABLE EMPLOYEE_2015_2017
AS
SELECT EMP_ID, EMP_NAME, HIRE_DATE, PHONE, SALARY
	FROM EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) IN ('2015', '2017');
SHOW TABLES;
SELECT * FROM EMPLOYEE_2015_2017;

/*******************************
	테이블 제거: DROP TABLE
    형식: DROP TABLE [제거할 테이블명]
    명령 즉시 메모리에서 바로 테이블 삭제하므로 주의
    복원 불가능 
********************************/

SHOW TABLES;
-- EMPLOYEE_2015_2017 테이블 제거
DROP TABLE EMPLOYEE_2015_2017;
SHOW TABLES;


-- EMPLOYEE_RETIRE 테이블 제거 
DROP TABLE EMPLOYEE_RETIRE;
SHOW TABLES;

-- 재직 중인 사원테이블 생성 (복제)
-- EMPLOYEE_WORKING 
SELECT * FROM EMPLOYEE;
CREATE TABLE EMPLOYEE_WORKING
AS 
SELECT *
	FROM EMPLOYEE
    WHERE RETIRE_DATE IS NULL;
    
CREATE TABLE GENDER_1234
AS
SELECT *
	FROM EMPLOYEE
    WHERE GENDER='M';
    
DROP TABLE GENDER_1234;

/*******************************
	테이블 데이터 제거: TRUNCATE TABLE
    형식: TRUNCATE TABLE [제거할 데이터를 가진 테이블명]
    명령 즉시 메모리에서 바로 테이블의 데이터 모두 삭제하므로 주의
    복구 불가능 
********************************/

SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;
-- EMPLOYEE_WORKING 테이블의 모든 데이터(ROW)를 제거
TRUNCATE TABLE EMPLOYEE_WORKING;

/*******************************
	테이블 구조 변경: ALTER TABLE
    형식: ALTER TABLE [변경할 테이블명]
    1) 컬럼 추가: ADD COLUMN [NEW 컬럼명 데이터타입(크기) 제약사항] 
    2) 컬럼 변경: MODIFY COLUMN [변경할 컬럼명 데이터타입(크기) 제약사항]
    3) 컬럼 삭제: DROP COLUMN [삭제할 컬럼명]

	*데이터명 늘리는 건 가능, 줄이는 건 불가 
********************************/

SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;
SELECT * FROM EMPLOYEE;
DESC EMPLOYEE_WORKING;

-- BOUNS 컬럼을 추가, 데이터타입 정수형 4자리, NULL값 허용 
ALTER TABLE EMPLOYEE_WORKING
	ADD column BONUS INT(4);

-- EMPLOYEE_WORKING 테이블에 DNAME(부서명) 추가, 데이터타입 가변형(10), NULL 값 허용
ALTER TABLE EMPLOYEE_WORKING
	ADD COLUMN DNAME VARCHAR(10);

-- EMPLOYEE_WORKING 이메일 주소 컬럼 크기를 30으로 수정
ALTER TABLE EMPLOYEE_WORKING
	MODIFY COLUMN EMAIL VARCHAR(30); 
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING SALARY 컬럼을 실수타입(DOUBLE)로 수정 
ALTER TABLE EMPLOYEE_WORKING
	MODIFY COLUMN SALARY DOUBLE;

SELECT * FROM EMPLOYEE_SYS;
DESC EMPLOYEE_SYS;
-- EMPLOYEE_SYS 테이블의 이메일 주소 컬럼 크기를 가변형 10 크기로 수정 
ALTER TABLE EMPLOYEE_SYS
	MODIFY COLUMN EMAIL VARCHAR(10); -- 1개의 데이터가 유실될 가능성이 있으므로 에러 발생 
SELECT COUNT(*) FROM EMPLOYEE_SYS;

-- EMPLOYEE_WORKING 테이블의 BONUS 컬럼 삭제
ALTER TABLE EMPLOYEE_WORKING
	DROP COLUMN BONUS;
DESC EMPLOYEE_WORKING;
SELECT * FROM EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING 테이블의 EMAIL 컬럼 삭제
ALTER TABLE EMPLOYEE_WORKING
	DROP COLUMN EMAIL;
    
-- EMPLOYEE_WORKING 테이블의 DNAME 컬럼 삭제
ALTER TABLE EMPLOYEE_WORKING
	DROP COLUMN DNAME;
    
-- EMPLOYEE_WORKING 테이블 제거 
DROP TABLE EMPLOYEE_WORKING;
SHOW TABLES;    

-- EMPLOYEE 테이블에서 HRD 부서에 속한 사원들의 사원아이디, 사원명, 입사일, 연봉, 보너스 (연봉10%)
-- 정보를 별칭을 사용하여 조회한 후 
-- EMPLOYEE_HRD 이름으로 복제

SELECT * FROM EMPLOYEE
		WHERE DEPT_ID = 'HRD';

CREATE TABLE EMPLOYEE_HRD
AS
SELECT EMP_ID 사원아이디,
	   EMP_NAME 사원명,
       HIRE_DATE 입사일,
       SALARY 연봉,
       FORMAT(SALARY*0.1) 보너스 
	FROM EMPLOYEE
    WHERE DEPT_ID = 'HRD';
SHOW TABLES;
SELECT * FROM EMPLOYEE_HRD;

/****************************************************
	DML: INSERT(C), SELECT(R), UPDATE(U), DELETE(D) 
*****************************************************/
-- 1. INSERT: 데이터 추가 
-- 형식: INSERT INTO [테이블명] (컬럼리스트)
-- 			VALUES(데이터리스트.....);
SHOW TABLES;
DESC EMP;
SELECT * FROM EMP;
-- S001, 홍길동, 현재날짜, 1000 데이터 추가 
INSERT EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S001', '홍길동', CURDATE(), 1000); 

SELECT * FROM EMP;

-- S002, 홍길순, 현재날짜(NOW, SYSDATE), 2000 데이터 추가
INSERT EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S002','홍길순',NOW(),2000);

INSERT INTO EMP(SALARY, HIRE_DATE, EMP_NAME, EMP_ID)
		VALUES(2500, NOW(), '홍길성', 'S003');
        
-- S004, 김철수, 현재날짜(NOW, SYSDATE), 3000 데이터 추가
-- 컬럼리스트 생략시에는 생성시 컬럼순서대로 INSERT 실행됨
DESC EMP;

INSERT INTO EMP
	VALUES('S004', '김철수', SYSDATE(), 3000);
SELECT * FROM EMP;

-- S005, 이영희, 현재날짜(NOW, SYSDATE), 연봉협상전 데이터 추가 
INSERT INTO EMP(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S005','이영희', SYSDATE(), NULL);

-- EMPLOYEE 테이블의 정보시스템 부서의 사원들 정보 중 
-- 사원 아이디, 사원명, 입사일, 부서 아이디, 연봉 
-- 2016년 이전에 입사한 사원들 
-- 복제하여 EMPLOYEE_SYS 테이블 생성 
CREATE TABLE EMPLOYEE_SYS 
AS
SELECT EMP_ID,
		EMP_NAME,
		HIRE_DATE,
        DEPT_ID,
        SALARY
        FROM EMPLOYEE
        WHERE DEPT_ID = 'SYS'
        AND LEFT(HIRE_DATE,4) < '2016';
        
SELECT * FROM EMPLOYEE_SYS;
DROP TABLE EMPLOYEE_SYS;
SHOW TABLES;    
    
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'SYS';
    
DESC EMPLOYEE_SYS;

-- EMPLOYEE_SYS 테이블에 2016년도 이후에 입사한 정보시스템 부서 사원 추가 
-- 서브쿼리를 이용한 데이터 추가  
INSERT INTO EMPLOYEE_SYS(EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY)
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY
	FROM EMPLOYEE
	WHERE DEPT_ID='SYS' AND LEFT(HIRE_DATE,4)>='2016';

-- DEPT 테이블 구조 확인 및 데이터 추가 
SHOW TABLES;
DESC DEPT;
-- SYS, 정보시스템, 서울
-- MKT, 마케팅, 뉴욕
-- HRD, 인사, 부산 
-- ACC, 회계, NULL

SELECT * FROM DEPT;
INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)
	VALUES ('SYS','정보시스템','서울');

INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)
	VALUES ('MKT','마케팅','뉴욕');

INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)
	VALUES ('HRD','인사','부산');
   
INSERT INTO DEPT(DEPT_ID, DEPT_NAME, LOC)
	VALUES ('ACC','회계','NULL');
DESC DEPT;
INSERT INTO DEPT VALUES('영업', NULL, 'SALES');
SELECT * FROM DEPT;

-- 에러 발생 - 컬럼리스트와 매칭 카운트가 다름 
INSERT INTO DEPT(DEPT_NAME, LOC, DEPT_ID) VALUES('영업', NULL, 'SALES');

-- 에러 발생 - 컬럼리스트 DEPT_ID 컬럼 사이즈보다 큰 데이터 입력 
INSERT INTO DEPT(DEPT_NAME, LOC, DEPT_ID) VALUES('영업', NULL, 'SALES');
INSERT INTO DEPT(DEPT_NAME, LOC, DEPT_ID) VALUES('영업', NULL, 'SAL');
SELECT * FROM DEPT;

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	CONSTRAINT(제약사항): 데이터 무결성의 원칙을 적용하기 위한 규칙
		- UNIQUE: 유니크 (중복방지) 제약 사항
        - NOT NULL: NULL값을 허용하지 않는 제약 
        - PRIMARY KEY(기본키): UNIQUE + NOT NULL 제약을 지정
        - FOREIGN KEY(참조키): 타 테이블을 참조하기 위한 제약  
		- DEFAULT: 디폴트로 저장되는 데이터 정의하는 제약 

		사용 형식: CREATE TABLE + 제약사항 
				 ALTER TABLE + 제약사항 
	
		CONSTRAINT_TYPE 기억 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
-- DB의 스키마 구조를 통해 각 테이블의 제약사항 확인 
-- INFORMATION_SCHEMA.TABLE_CONSTRAINTS
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
		WHERE TABLE_NAME = 'EMPLOYEE';

DESC EMPLOYEE;
SHOW TABLES;
DESC EMP;

-- EMP_CONST 테이블 생성 
-- 기본키 제약: EMP_ID 
-- 유니크 제약: EMP_NAME 
-- NOT NULL 제약: SALARY 

CREATE TABLE EMP_CONST(
	EMP_ID	CHAR(4)		PRIMARY KEY, 
	EMP_NAME VARCHAR(10) UNIQUE,
    HIRE_DATE DATETIME,
    SALARY 	  INT	NOT NULL
);

SHOW TABLES;
DESC EMP_CONST;

SELECT * 
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'EMP_CONST';
    
-- S001, 홍길동, 현재날짜, 1000 데이터 추가 
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY) 
		VALUES('S001','홍길동', NOW(), 1000);

SELECT * FROM EMP_CONST;
    
    
-- S002, 김철수, 현재날짜, 1000 데이터 추가
-- Error Code: 1062. Duplicate entry 'S001' for key 'emp_const.PRIMARY'	0.000 sec
-- PRIMARY 키로 설정되어 있는 컬럼은 입력폼에서 아이디 중복체크 기능을 통해 확인함
-- INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
-- VALUES('S001', '김철수', NOW(), 1000);

-- SOLUTION: 중복된 'S001' --> 'S002' 변경 후 실행 
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S002', '김철수', NOW(), 1000);

-- Error Code: 1048. Column 'EMP_ID' cannot be null
-- SOLUTION: NULL 또는 중복된 값을 배제하여 진행 
-- INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
-- 		VALUES(NULL, '김철수', NOW(), 1000);



-- Error Code: 1062. Duplicate entry '김철수' for key 'emp_const.EMP_NAME'
-- INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
-- 		VALUES('S003', '김철수', NOW(), 1000);

-- SOLUTION: 이미 저장된 '김철수' 대신 유니크한 이름으로 진행
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S003', '이영희', NOW(), 1000);


-- EMP_NAME 컬럼에 NULL값을 추가
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S004', NULL, NOW(), 1000);

SELECT * FROM EMP_CONST;

-- EMP_NAME 컬럼에 NULL값은 중복으로 저장 가능 
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S005', NULL, NOW(), 1000);
    
DESC EMP_CONST;

-- Error Code: 1048. Column 'SALARY' cannot be null
-- INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
-- 		VALUES('S006', '스미스', NOW(), NULL);

-- PROJECT 시 제약사항 넣기 

INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
	VALUES('S006', '스미스', NOW(), 3000);


SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	WHERE TABLE_NAME = 'EMP_CONST';
	
-- EMP_CONST2 테이블 생성 
-- EMP_ID: PRIMARY KEY 
-- EMP_NAME: UNIQUE 
CREATE TABLE EMP_CONST2(
	EMP_ID		CHAR(4),
    EMP_NAME	VARCHAR(10),
		CONSTRAINT PK_EMP_ID	PRIMARY KEY(EMP_ID),
        CONSTRAINT UK_EMP_NAME  UNIQUE(EMP_NAME)
);

DESC EMP_CONST2;
SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'EMP_CONST2';


-- 제약사항 테스트를 위한 테이블 생성: CONST_TEST
-- UID 컬럼 : CHAR 4 기본키 제약 
-- NAME 컬럼 : VARCHAR 10 NULL 허용x 
-- AGE 컬럼 : INT NULL 허용 
-- ADDR 컬럼 : VARCHAR 30 NULL 허용 

SHOW DATABASES;
USE HRDB2019;

CREATE TABLE CONST_TEST(
	UID	CHAR(4)	PRIMARY KEY,
    NAME VARCHAR(10) NOT NULL,
    AGE INT,
    ADDR VARCHAR(30)
);

SHOW TABLES;
DESC CONST_TEST;


SELECT * 
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'CONST_TEST';
    
-- DEPT_ID 컬럼 추가: CHAR(3) 디폴트 'HRD'

ALTER TABLE CONST_TEST
	ADD COLUMN DEPT_ID CHAR(3) DEFAULT('HRD');
    
ALTER TABLE CONST_TEST
		DROP HRD;

-- S001, 홍길동, 20, 서울시, SYS 
SELECT * FROM CONST_TEST;

INSERT INTO CONST_TEST
	value('S001', '홍길동', '20', '서울시', 'SYS');

-- S002, 김철수, 20, 서울시, HRD
INSERT INTO CONST_TEST
	VALUE('S002', '김철수', 20, '서울시', 'HRD');

INSERT INTO CONST_TEST(ADDR, UID, NAME, AGE)
	VALUES('부산시', 'S003', '홍길순', 25);

SELECT * FROM CONST_TEST;

-- SALARY 컬럼: INT, 3000이상인 숫자 등록할 수 있도록 CHECK 제약 
ALTER TABLE CONST_TEST
	ADD COLUMN SALARY INT 	CHECK(SALARY >= 3000);

DESC CONST_TEST;
SELECT * FROM CONST_TEST;

SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTAINTS
    WHERE TABLE_NAME = 'CONST_TEST';

-- S004, 이영희, 30, 고양시, MKT, 3000
INSERT INTO CONST_TEST
	VALUE ('S004','이영희',30,'고양시','MKT',3000);

-- Error Code: 3819. Check constraint 'const_test_chk_1' is violated.
-- INSERT INTO CONST_TEST
-- 	VALUE ('S004','이영희',30,'고양시','MKT',2000);

-- 상품 테이블 생성: PRODUCT_TEST
-- 컬럼: PID INT 기본키, 
-- 		PNAME VARCHAR 30 NULL 허용 X, 
-- 		PRICE INT NULL 허용, 
-- 		COMPANY VARCHAR 20 NULL 허용 
-- ** AUTO_INCREMENT -> 자동 번호 생성기 ==> 기본키 
-- 	  오라클: SEQUENCE 

CREATE TABLE PRODUCT_TEST(
	PID INT PRIMARY KEY	AUTO_INCREMENT,
    PNAME 	VARCHAR(30) NOT NULL,
    PRICE INT,
    COMPANY VARCHAR(20) 
);

SHOW TABLES;
DESC PRODUCT_TEST;
-- 키보드, 100, 삼성

INSERT INTO PRODUCT_TEST(PNAME, PRICE, COMPANY)
	VALUES('모니터','1200','엘지');

SELECT * FROM PRODUCT_TEST;


-- 2. UPDATE: 데이터 수정 
-- 형식: UPDATE [테이블명]	
-- 		SET [컬럼명='업데이트 데이터', ....]
-- 		WHERE [조건절];
SELECT * FROM CONST_TEST;

-- 홍길동 연봉 업데이트: 3500 

UPDATE CONST_TEST
	SET SALARY = '3500'
	WHERE UID = 'S001';
-- 김철수 연봉 업데이트: 5000

UPDATE CONST_TEST
	SET SALARY = '5000'
    WHERE UID = 'S002';

SHOW TABLES;
-- EMPLOYEE 테이블을 복제하여 CP_EMPLOYEE 테이블을 생성

CREATE TABLE CP_EMPLOYEE
AS 
	SELECT *
	FROM EMPLOYEE;
    
DESC CP_EMPLOYEE;
DESC EMPLOYEE;

ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT PK_EMP_ID 	PRIMARY KEY(EMP_ID);

SELECT * FROM CP_EMPLOYEE;
SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'CP_EMPLOYEE';
    
-- PHONE, EMAIL 컬럼에 UNIQUE 제약 추가
ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT UK_PHONE	UNIQUE(PHONE);
    
DESC CP_EMPLOYEE;
    
ALTER TABLE CP_EMPLOYEE
	ADD CONSTRAINT UK_EMAIL UNIQUE(EMAIL);

-- CP_EMPLOYEE 테이블의 PHONE에 추가된 제약 사항 삭제 
SELECT *
	FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    WHERE TABLE_NAME = 'CP_EMPLOYEE';
    
ALTER TABLE CP_EMPLOYEE
	DROP CONSTRAINT UK_PHONE;

ALTER TABLE CP_EMPLOYEE
	DROP CONSTRAINT UK_EMAIL;

SELECT * FROM CP_EMPLOYEE;
-- 부서아이디가 SYS인 부서 --> 정보
-- Error Code: 1175. You are using safe update mode
-- safe update mode 설정 변경 
SET SQL_SAFE_UPDATES = 0;	-- 해제: 0, 설정: 1
UPDATE CP_EMPLOYEE
	SET DEPT_ID = '정보'
    WHERE DEPT_ID = 'SYS';

-- CP_EMPLOYEE 테이블에서 2016년도 입사한 사원들의 입사일 --> 현재 입사일 

UPDATE CP_EMPLOYEE
	SET HIRE_DATE = CURDATE()
	WHERE LEFT(HIRE_DATE,4)='2016';

SELECT COUNT(*)
	FROM CP_EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) = '2025';

SELECT * FROM CP_EMPLOYEE;    
DESC CP_EMPLOYEE;    

-- 강우동 사원의 영어이름 'KANG', 퇴사일을 현재날짜로, 부서는 SYS로 수정 
UPDATE CP_EMPLOYEE
	SET ENG_NAME= 'KANG',
		RETIRE_DATE = CURDATE(),
		DEPT_ID = 'SYS'
    WHERE EMP_NAME= '강우동';

-- 트랙잭션 처리방식이 auto commit이 아닌 경우 
-- 작업 완료: commit, 작업 취소: rooback
commit;

-- 3. DELETE: 데이터 삭제
-- 트랜잭션 관리법에 따라 삭제된 데이터를 복원 가능, AUTO COMMIT 상태에서 불가 
-- 형식: DELETE FROM [테이블명]
-- 		WHERE [조건절]; 
-- 현재까지 진행한 모든 작업 DB에 반영 


SELECT * FROM CP_EMPLOYEE;
DELETE FROM CP_EMPLOYEE
	WHERE EMP_ID = 'S0003';


USE HRDB2019;
SELECT DATABASE();
SELECT * FROM cp_employee;

DELETE FROM CP_EMPLOYEE
	WHERE EMP_ID = 'S0004';
commit;

SELECT * FROM CP_EMPLOYEE
	WHERE EMP_ID = 'S0005';
SELECT * FROM CP_EMPLOYEE
	WHERE EMP_ID = 'S0004';

ROLLBACK;

/**********************************************
프로그램 개발을 통해 실시간 접속시에는 AUTO COMMIT 실행됨 

트랜잭션 내부 관리 -> ATM 오류, 취소시 

수동 작업 제외 자동 오토 커밋 -> DROP, TRUNCATE  
***********************************************/

/**********************************************
	하나 이상의 테이블 생성 및 연결, 조회
    - 생성: CREATE TABLE
    - 연결: FOREIGN KEY(참조키) 제약 추가
    - 조회: JOIN, SUBQUERY
    ** 데이터베이스의 테이블 설계과정: 데이터베이스 모델링 
		-> 데이터 정규화 
        -> ERD(Entity Relationship Diagram) 
***********************************************/
USE HRDB2019;
SELECT DATABASE();
SHOW TABLES;
DESC EMPLOYEE;
-- ERD: Database > Reverse Engineer
-- 정규화: 데이터베이스 저장 효율성을 높이기 위한 방식 - 데이터 중복 배제, 테이블 분리...
-- 반정규화: 분리된 테이블을 하나로 합치는 방식 


-- [kk전자의 인사관리시스템: 사원테이블 생성 - 정규화✖] 
-- 사원 테이블의 데이터: 
-- 사원 아이디(KID, 기본키(auto)), 사원명, 주소, 입사일, 연봉, 부서번호, 부서명, 부서위치  

-- [kk전자의 인사관리시스템: 사원테이블 생성 - 정규화⚪] 
create table KK_DEPARTMENT (
	DEPT_ID char(4) PRIMARY KEY,
    DEPT_NAME char(20) NOT NULL,
    LOC varchar(30)
);

desc KK_DEPARTMENT;

select * from INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	where table_name like 'KK%';

select * from KK_DEPARTMENT;

insert into KK_DEPARTMENT
	values ('SYS','정보시스템','서울시 서초구'),
		   ('HRD','인사관리','서울시 종로구'),
		   ('ACC','회계관리','서울시 강남구');



create table KK_EMPLOYEE (
	KID			INT		PRIMARY KEY		AUTO_INCREMENT,
    KANME 		VARCHAR(10) NOT NULL,
    ADDRESS 	varchar(20),
    HIRE_DATE	DATE,
    SALARY		INT,
    DEPT_ID		CHAR(3),
    CONSTRAINT FK_KK_EMPLOYEE	FOREIGN KEY(DEPT_ID)
			   REFERENCES KK_DEPARTMENT(DEPT_ID)
);

insert into KK_EMPLOYEE (KANME,ADDRESS,HIRE_DATE,SALARY,DEPT_ID)
	value ('홍길동','서울시 강남구', CURDATE(),3000,'SYS');

-- Error Code: 1452. Cannot add or update a child row: 
-- a foreign key constraint fails (`hrdb2019`.`kk_employee`, CONSTRAINT `FK_KK_EMPLOYEE` 
-- FOREIGN KEY (`DEPT_ID`) REFERENCES `kk_department` (`DEPT_ID`))	
-- SOLUTION: 참조하는 KK_DEPARTMENT 테이블의 DEPT_ID 확인 
insert into KK_EMPLOYEE (KANME,ADDRESS,HIRE_DATE,SALARY,DEPT_ID)
	value ('스미스','뉴욕', CURDATE(),5000,'HR');

DESC KK_EMPLOYEE;
select * from INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	where table_name like 'KK%';

SELECT * FROM KK_EMPLOYEE;
SHOW TABLES;


/*
[학사관리 시스템 설계]
1. 과목(SUBJECT) 테이블은 
	컬럼명: SID(과목아이디), 
		  SNAME(과목명), 
          SDATE(등록일:년월일 시분초)
    SID는 기본키, 자동으로 생성한다.
    
2. 학생(STUDENT)테이블은 반드시 1개 이상의 과목을 수강
	컬럼: STID(학생아이디) 기본키, 자동생성
    SNAME(학생명) NOT NULL 
    GENDER(성별) 문자 1자 NOT NULL
    SID(과목 아이디),
    STDATE(등록일자) 년월일 시분초
    
3. 교수(PROFESSOR) 테이블은 반드시 1개 이상의 과목 강의
	컬럼: PID(교수아이디) 기본키, 자동생성
		NAME(교수명) NOT NULL
		SID(과목 아이디),
        PDATE(등록일자) 년월일 시분초 
*/


CREATE TABLE SUBJECT (
	SID INT PRIMARY KEY AUTO_INCREMENT,
    SNAME VARCHAR(20) NOT NULL,
    SDATE datetime
);


CREATE TABLE STUDENT (
	STID INT PRIMARY KEY AUTO_INCREMENT,
    SNAME VARCHAR(10) NOT NULL,
    GENDER CHAR(1) NOT NULL,
    SID INT,
    STDATE	DATETIME,
    CONSTRAINT FK_STUDENT_SID FOREIGN KEY(SID)
				REFERENCES SUBJECT(SID)
);

DESC STUDENT;
SELECT * FROM STUDENT;


CREATE TABLE PROFESSOR (
	PID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(10) NOT NULL,
    SID INT,
    PDATE DATETIME,
    CONSTRAINT FK_PROFESSOR_SID FOREIGN KEY(SID)
				REFERENCES SUBJECT(SID)
);

DESC PROFESSOR;
select * from INFORMATION_SCHEMA.TABLE_CONSTRAINTS
	where table_name = 'PROFESSOR';
    
-- HTML 과목의 정보를 조회 
-- HTML 과목을 수강하는 모든 학생을 조회 
-- HTML 과목을 강의하는 모든 교수를 조회 
-- HTML 과목을 수강하는 모든 학생과 강의하는 교수를 모두 조회 


-- 장바구니, 상품, 회원 
-- 주문, 상품, 회원 







    