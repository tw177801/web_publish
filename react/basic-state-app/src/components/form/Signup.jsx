import React, {useState, useRef} from 'react';
import { validateSignup } from '../../apis/validate.js';
import { errorCheckSignup } from '../../apis/errorCheck.js';

import './cgv.css';
import './commons.css';
import './join.css';


export default function Signup() {

    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailNameRef: useRef(null),
        emailDomainRef: useRef(null)
    };

    //폼데이터 저장소
    const init = {

        'id': '',
        'pwd': '',
        'cpwd': '', 
        'name': '', 
        'phone': '', 
        'emailName': '', 
        'emailDomain': ''

        // 초기값 설정

    };

    const initErrors = {

        'id': '',
        'pwd': '',
        'cpwd': '', 
        'name': '', 
        'phone': '', 
        'emailName': '', 
        'emailDomain': ''

    };
    
    const [formData, setFormData] = useState(init);
    const [errors, setErrors] = useState(initErrors);
    
    // 폼의 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup = (event) => {

        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
        errorCheckSignup(name, value, errors, setErrors);
        // if(name === 'id') {
        //     (value === '') ? setErrors({...errors, ['id']:'아이디를 입력해주세요'}) 
        //     : setErrors({...errors, ['id']:''});
        // }
        

    }
    
    // 폼의 입력이 종료된 후 Submit 함수
    const handleSubmitSignup = (event) => {
        
        event.preventDefault();
        if(validateSignup(refs, errors, setErrors)) console.log(formData);



    }


    return (
        
    <div className="content">
        <div className="join-form center-layout"> 
          <h1 className="center-title">회원가입</h1>
          <form onSubmit={handleSubmitSignup}>
               <ul>
                    <li>
                         <label for="" className="join-title-font"><b>아이디</b></label>
                         <span>{errors.id}</span>
                         
                         <div className="id-text">
                              <input type="text"  
                                     name="id" 
                                     id = "id"
                                     value={formData.id}
                                     ref={refs.idRef}
                                     onChange={handleChangeSignup}
                                     placeholder="아이디 입력 (6~20자)" />
                              <button className="check">중복 확인</button>
                         </div>
                    </li>
 
                    <li>
                         <label for="" ><b>패스워드</b></label>
                         <span>{errors.pwd}</span>
                         <div>
                         <input type="password" 
                                name="pwd" 
                                id = "pwd"
                                value={formData.pwd}
                                ref={refs.pwdRef}
                                onChange={handleChangeSignup}
                                placeholder="패스워드 입력 (문자, 숫자, 특수문자 포함 8~20자)"/>
                         </div>
                    </li>
 
                    <li>
                         <label for=""><b>패스워드 확인</b></label>
                         <span>{errors.cpwd}</span>
                         <div>
                         <input type="password" 
                                name="cpwd"
                                id = "cpwd"
                                value={formData.cpwd}
                                ref={refs.cpwdRef}
                                onChange={handleChangeSignup}
                                placeholder="패스워드 재입력"/>
                         </div>
                    </li>
 
                    <li>
                         <label for=""><b>이름</b></label>
                         <span>{errors.name}</span>
                         <div>
                         <input type= "text" 
                                name= "name" 
                                id = "name"
                                value={formData.name}
                                ref={refs.nameRef}
                                onChange={handleChangeSignup}
                                placeholder="이름을 입력해주세요"/>
                         </div>
                    </li>
 
                    <li>
                         <label for=""><b>전화번호</b></label> 
                         <span>{errors.phone}</span>
                         <div>
                         <input type="text" 
                                name="phone" 
                                id = "phone"
                                value={formData.phone}
                                ref={refs.phoneRef}
                                onChange={handleChangeSignup}
                                placeholder="휴대폰 번호 입력('-'제외 11자리 입력)"/>
                         </div>
                    </li>
 
                    <li>
                         <label for=""><b>이메일 주소</b></label> 
                        <span>{errors.emailName}</span>
                         <div>
                         <input type="text" 
                                name="emailName"
                                id = "emailname"
                                value= {formData.emailName}
                                ref={refs.emailNameRef}
                                onChange={handleChangeSignup}
                                placeholder="이메일 주소"/>
                          <span> @ </span>
                          <select name="emailDomain"
                                  id = "emailname"
                                  value= {formData.emailDomain}
                                  ref={refs.emailDomainRef}
                                  onChange={handleChangeSignup}
                          >
                              <option value="default">선택</option>
                              <option value="naver.com">naver.com</option>
                              <option value="gmail.com">gmail.com</option>
                              <option value="daum.net">daum.net</option>

                          </select>  
                         </div>
                    </li>

                    <li>
                         <button>가입하기</button>
                         <button>가입취소</button>
                    </li>
               </ul>
          </form>


        </div>
    </div>

    );
}

