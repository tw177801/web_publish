import React, {useState, useRef} from 'react';
import { validateSignup } from '../../apis/validate.js';
import { errorCheckSignup } from '../../apis/errorCheck.js';
import { initFormNames } from '../../apis/initial.js';

import './cgv.css';
import './commons.css';
import './join.css';


export default function Signup() {

    const idMsgRef = useRef(null);

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
    const names =  [
          'id', 
          'pwd', 
          'cpwd', 
          'name', 
          'phone',
          'emailName',
          'emailDomain'
     
     ];
     
     // 초기값 설정
//     {

//         'id': '',
//         'pwd': '',
//         'cpwd': '', 
//         'name': '', 
//         'phone': '', 
//         'emailName': '', 
//         'emailDomain': ''


//     }

//     const initErrors = {

//         'id': '',
//         'pwd': '',
//         'cpwd': '', 
//         'name': '', 
//         'phone': '', 
//         'emailName': '', 
//         'emailDomain': ''

//     };
    
    const [formData, setFormData] = useState(initFormNames(names));
    const [errors, setErrors] = useState(initFormNames(names));
    


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

    //아이디 중복체크
    // value 체크
    const handleIdCheck = () => {

          const id = refs.idRef.current;

          if(id.value === '') {
               // alert("아이디를 입력해주세요");
               // refs.idRef.current.focus();
               // return false;

               errorCheckSignup('id', id.value, errors, setErrors);

          } else {
               
               const did = 'test';
               if(did === id.value ) {

                    setErrors({...errors, ['id']:'이미 사용중인 아이디 입니다. 다시 입력해주세요.'});
                    id.focus();
               } else {
                    setErrors({...errors, ['id']:'사용이 가능한 아이디입니다.'});
                    idMsgRef.current.style.setProperty('color','green');
                    idMsgRef.current.setProperty('fontWeight', 'bold');

               }
          }

    }


    return (
        
          <div className="content">
               <div className="join-form center-layout"> 
                    <h1 className="center-title">회원가입</h1>
                    <form onSubmit={handleSubmitSignup}>
                         <ul>
                              <li>
                                   <label for="" className="join-title-font"><b>아이디</b></label>
                                   <span id="error"
                                        ref={idMsgRef}>{errors.id}</span>
                                   
                                   <div className="id-text">
                                        <input type="text"  
                                             name="id" 
                                             id = "id"
                                             value={formData.id}
                                             ref={refs.idRef}
                                             onChange={handleChangeSignup}
                                             placeholder="아이디 입력 (6~20자)" />
                                        <button className="check" onClick={handleIdCheck}>중복 확인</button>
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

