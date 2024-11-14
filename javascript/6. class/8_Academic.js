// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ==> Member 부모 클래스 (name, age, address)

console.clear();


class Member {
    #name;
    #age;
    #address;
    constructor(name, age, address) { // 자식의 클래스 생성자 함수에서 super 호출
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }

    get name() { return this.#name; }
    get age() { return this.#age; }
    get address() { return this.#address; }

}


/*Student class */

class Student extends Member {
    #sno; //학번
    constructor(sno, name, age, address) {
        super(name, age, address);
        this.#sno = sno;
    }

    get sno() { return this.#sno; }

}

/** Professor class */
class Professor extends Member {
    #subject; // 강의 과목
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() { return this.#subject; }

}

/** Parent class */
class Parent extends Member {
    #cname; //자녀명
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.#cname = cname;
    }

    get cname() { return this.#cname; }

}


/** Employee class */
class Employee extends Member {
    #department; // 소속부서
    constructor(name, age, address, department) {
        super(name, age, address);
        this.#department = department;
    }

    get department() { return this.#department; }

}

// signup 버튼 클릭시 호출되는 함수
const signupCheck = () => {
    let type1 = document.querySelector(".type1");
    let type2 = document.querySelector(".type2");
    let type3 = document.querySelector(".type3");
    let type4 = document.querySelector(".type4");


    let sno = document.querySelector("#sno");
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let address = document.querySelector("#address");

    //  type에 따라서 각각의 클래스 생성
    switch(type1) {
        case 1: Student(sno, name, age, address); break;
    }

} 

// const hong = new Student('1234', '홍길동', 20, '서울시 강남구'); // 학생
// const smith = new Professor('smith', 40, '서울시 서초구', 'JavaScript'); // 교수
// const hongP = new Parent('홍길순', 60, '서울시 강남구', '홍길동');
// const lee = new Employee('이철수', 30, '부산시 해운대구', '개발1팀');

// console.log(`*** 학생 정보 ***\n`);
// console.log(`${hong.sno}\n${hong.name}\n${hong.age}\n${hong.address}`);
// console.log(`\n`);

// console.log(`*** 교수 정보 ***\n`);
// console.log(`${smith.name}\n${smith.age}\n${smith.address}`);


// console.log(`*** 학부모 정보 ***\n`);
// console.log(`${hongP.name}\n${hongP.age}\n${hongP.address}`);

// console.log(`*** 직원 정보 ***\n`);
// console.log(`${lee.name}\n${lee.age}\n${lee.address}`);