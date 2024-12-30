
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

    
-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000이상인 사원들을 조회
-- AND(~이고): 2개의 조건이 모두 만족한 데이터만 조회


-- 입사일이 2015년 1월 1일 이후이거나 또는, 급여가 6000 이상인 사원들을 조회
-- OR(~또는): 2개의 조건 중 1개만 만족해도 데이터 조회

    
-- 입사일이 2015년 1월 1일부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회

        
        
-- 연봉 구간이 5000 이상부터 7000미만의 사원들을 모두 조회

        
/*

	BETWEEN ~ AND: 특정 구간 조회시 사용
    형식 - SELECT []
		FROM []
        WHERE  BETEEN AND
*/

-- 2016년 입사자들을 조회
-- 2016-01-01 ~ 2016-12-31

    
-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회

    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회

        
/*
	IN 연산자: 한 컬럼에 추가되는 OR 연산식을 대체하는 IN 연산자 
    형식: SELECT [컬럼리스트]
		FROM [테이블명]
        WHERE 컬럼명 IN (조건1, 조건2, 조건3...);
*/
-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회

    
-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회


/*
	와일드 카드 문자: 특정 문자열 검색 + LIKE
    종류: %(전체), _(한문자)
    사용법: LIKE 연산자와 함께 조건식을 추가하여 사용됨 
    형식 - SELECT [컬럼리스트]
		FROM [테이블명]
        WHERE 컬럼명 [와일드 카드 문자를 이용한 특정문자열 검색 조건]
*/

-- 영어 이름이 'f'로 시작하는 모든 사원들을 조회

    
-- '한'씨 성을 가진 모든 사원들을 조회


-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회 

    
-- 이메일 주소가 4자리인 모든 사원을 조회

    
-- 이름에 '삼'이 들어가는 모든 사원을 조회


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

-- (2) SUBSTRING(문자열, 위치, 추출 자릿수): 문자열 추출 함수
SELECT SUBSTRING('대한민국 홍길동 만세 1234!!', 1, 4) 대한민국,
	   SUBSTRING('대한민국 홍길동 만세 1234!!', 6, 3) 홍길동,
       SUBSTRING('대한민국 홍길동 만세 1234!!', 10, 2) 만세,
       SUBSTRING('대한민국 홍길동 만세 1234!!', 17, 2) '!!'
	FROM DUAL;
    
-- 사원 테이블에서 사원 아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
SELECT HIRE_DATE FROM EMPLOYEE;

SELECT EMP_ID, 
		EMP_NAME, 
		substring(HIRE_DATE, 1, 4) YEAR,
        SUBSTRING(HIRE_DATE, 6, 2) MONTH,
        SUBSTRING(HIRE_DATE, 7, 3)
        FROM EMPLOYEE;
        
-- 2015년도 입사한 모든 사원들을 조회
SELECT * 
	FROM EMPLOYEE
	WHERE SUBSTRING(HIRE_DATE, 1, 4) = '2015';
	
-- 2018년도에 정보시스템 부서에 입사한 모든 사원들을 조회 
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID='SYS'
    AND
	SUBSTRING(HIRE_DATE, 1, 4) = '2018';

-- (3) LEFT (문자열, 추출 숫자), RIGHT(문자열, 추출 숫자)
SELECT LEFT('대한민국 홍길동 만세 1234!!', 4) 대한민국,
		RIGHT('대한민국 홍길동 만세 1234!!', 2) '!!'
        FROM DUAL;
        
-- 2015년도에 입사한 모든 사원들을 조회
SELECT * 
	FROM EMPLOYEE
    WHERE LEFT(HIRE_DATE, 4) = '2015';

-- 사원들의 폰번호 마지막 4자리를 조회 
-- 사원명, 부서 아이디, 입사년도, 폰번호 (마지막 4자리) 조회
SELECT EMP_NAME, DEPT_ID,
	RIGHT(PHONE, 4) PHONE
    FROM EMPLOYEE;
    
-- (4) UPPER(대문자), LOWER(소문자)
SELECT * FROM EMPLOYEE
	WHERE UPPER(DEPT_ID) = UPPER('sys');
    
-- 사원들의 영어 이름과 이메일 주소를 모두 대문자로 조회
SELECT 
	EMP_ID, 
    EMP_NAME,
	UPPER(ENG_NAME),
    UPPER(EMAIL)
    FROM EMPLOYEE;
    
SELECT 
	EMP_ID,
    EMP_NAME,
    LOWER(ENG_NAME) ENG_NAME,
    LOWER(EMAIL) EMAIL
    FROM EMPLOYEE;
    
-- (5) TRIM(): 공백 제거 
SELECT TRIM('            MYSQL 84') AS TRIM1,
		TRIM('MYSQL 84           ') AS TRIM2,
        TRIM('           MYSQL        84') AS TRIM3
        FROM DUAL;
    
-- (6) FORMAT(문자열 또는 숫자, 소수점자리 ): 문자열의 포맷 수정     
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
SELECT FORMAT(123456, 0) FORMAT1, 
	   FORMAT(123456, 2) FORMAT2 FROM DUAL; 
       
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
	





    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

        


    



    













