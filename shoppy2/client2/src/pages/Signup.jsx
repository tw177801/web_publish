import React, {useState} from 'react';
import '../styles/signup.css';
import {validateSignup, 
    handlePasswordCheck,
    handleDuplicateIdCheck} from '../utills/funcValidate.js';
import { initSignup, useinitSignupRefs } from '../utills/funcInitialize.js';

export default function Signup() {

    const {names, placeholders, labels, initFormData} = initSignup();
    const {refs, msgRefs} = useinitSignupRefs(names);
    const [formData, setFormData] = useState(initFormData);

    // const names = [ 
    //     'id',
    //     'pwd',
    //     'cpwd',
    //     'name',
    //     'phone',
    //     'emailname'
    //                 ];

    // const namesKor = [ 
    //     '아이디',
    //     '비밀번호',
    //     '비밀번호 확인',
    //     '이름',
    //     '휴대폰 번호',
    //     '이메일 주소'];

    // const placeholdersKor = [ 
    //     '아이디(6~12자이내)',
    //     '비밀번호',
    //     '비밀번호 확인',
    //     '이름',
    //     '휴대폰 번호',
    //     '이메일 주소'];
                

    // const placeholders = names.reduce((acc, name, idx)=>{
    //     acc[name] = placeholdersKor[idx];
    //     return acc;     // {id:"아이디", pwd:"비밀번호"}
    // }, {});
    
    // const labels = names.reduce((acc, name, idx)=>{
    //     acc[name] = namesKor[idx];
    //     return acc;     // {id:"아이디", pwd:"비밀번호"}
    // }, {});
    // // console.log('labels --->>', labels);
    

    // // const labels = {
    // //     'id': '아이디',
    // //     'pwd': '비밀번호'
    // // }

    // // const label = labels.reduce((acc, lables)=> {
    // //     acc[lables] = "";
    // //     return acc;
    // // }, {});

    // // names.forEach((name)=>{
    // //     initFormData = {...initFormData, [name]:''};
    // // });

    // // reduce 기억
    // // 결과값 누적 함수 
    // // **배열.reduce(콜백함수, 리턴데이터 타입정의)*/
    // const initFormData = names.reduce((acc, name)=>{
    //     // 실행코드
    //     acc[name] = ""; // {"id":""} 
    //     return acc;
    // }, {});

    // // console.log('init reduce-->>', initFormData);

    // const refs = useRef(
    //     names.reduce((acc, name)=>{
    //     acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 호출 x
    //     return acc;
    // }, {})
    // );

    // refs.current.emaildomainRef = React.createRef();

    // // console.log('refs--->>', refs);
    
    
    // const msgRefs = useRef( names.reduce((acc, name)=>{
    //     acc[name.concat('MsgRef')] = React.createRef();
    //     return acc;
    //     }, {})
    // );
    

    // console.log('init reduce -->>', initFormData);
    // console.log('refs reduce -->>', refs);
    // console.log('msgRefs reduce -->>', msgRefs);
    

   /* 
    // const msgRefs = {
    //     'msgIdRef':useRef(null),
    //     'msgPwdRef':useRef(null),
    //     'msgCpwdRef':useRef(null),
    //     'msgNameRef':useRef(null),
    //     'msgPhoneRef':useRef(null),
    //     'msgEmailnameRef':useRef(null),
    //     'msgEmaildomainRef':useRef(null)
    // }

    // const refs = {
    //     'idRef':useRef(null),
    //     'pwdRef':useRef(null),
    //     'cpwdRef':useRef(null),
    //     'nameRef':useRef(null),
    //     'phoneRef':useRef(null),
    //     'emailnameRef':useRef(null),
    //     'emaildomainRef':useRef(null)
    // }


    // const initFormData = {
    //     'id':'',
    //     'pwd':'',
    //     'cpwd':'',
    //     'name':'',
    //     'phone':'',
    //     'emailname':'',
    //     'emaildomain':''
    // }

    */
    
   
   // change
   const handleChangeForm = (e) => {
       const {name, value} = e.target;
       // console.log(name, value);
       
       setFormData({...formData, [name]:value});        
   };

    //submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateSignup(refs, msgRefs)) {
            console.log('submit--->>', formData);
        }
    };







    // const handleDuplicateIdCheck = () => {
    //     // console.log('id--->',refs.current["idRef"].current.value);

    //     if(refs.current["idRef"].current.value === '') {
    //         msgRefs.current["idMsgRef"].current.style.setProperty('color', 'red');
    //         refs.current["idRef"].current.focus();
    //         return false;
    //     } else {
    //         const did = "test";
            
    //         if(refs.current["idRef"].current.value === did) {
    //             alert("이미 사용중인 아이디입니다.");
    //             refs.current["idRef"].current.focus();
    //             return false;
    //         } else {
    //             alert("사용이 가능한 아이디입니다");
    //             refs.current["pwdRef"].current.focus();
    //             return false;

    //         }
    //     }
    // }



    /************************************************************************************ */

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>

                    {
                        names && names.map((name)=>(
                            <li>
                            <label for="" ><b>{labels[name]}</b></label>
                            <span ref={msgRefs.current[name.concat("MsgRef")]}>{labels[name]}를 입력해주세요</span>
                            <div>
                                {
                                (name === "emailname") ? (
                                    <>
                                        <input type="text" 
                                        name={name}
                                        // id = "emailname"
                                        ref={refs.current[name.concat("Ref")]} //ref.idRef
                                        onChange={handleChangeForm}
                                        placeholder={placeholders[name]}/>
                                        <span>@</span>       
                                        <select name="emaildomain" 
                                                // id="emaildomain"
                                                // ref={refs.emaildomainRef}  
                                                ref={refs.current["emaildomainRef"]}
                                                // onChange={handleChangeForm}>
                                                onChange={handleDuplicateIdCheck}>
                                            <option value="default">선택</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                        </select>
                                    </>

                                ) : (
                                    <>
                                        <input type={ (name === "pwd" || name === "cpwd") ? "password" : "text" } 
                                                name={name}
                                                // id="id"
                                                ref={refs.current[name.concat("Ref")]}
                                                onChange={handleChangeForm}
                                                onBlur={ ( name === 'cpwd' ) ? () => {
                                                        handlePasswordCheck(
                                                            refs.current["pwdRef"],
                                                            refs.current["cpwdRef"],
                                                            refs.current["nameRef"],
                                                            msgRefs.current["pwdMsgRef"],
                                                            msgRefs.current["cpwdMsgRef"]
                                                        )
                                                } : null }
                                                placeholder = {placeholders[name]} />
                                        {   name === "id" &&
                                            <>
                                                <button type="button" 
                                                        onClick={()=>{
                                                            handleDuplicateIdCheck(
                                                                refs.current["idRef"],
                                                                refs.current["pwdRef"],
                                                                msgRefs.current["idMsgRef"]
                                                            )
                                                        }}
                                                        >
                                                        중복확인</button>
                                                <input type="hidden" id="idCheckResult" value="default" />
                                            </>
                                        }
                                    
                                    </>
                                )}
                                
                            </div>
                        </li>
                    ))
                    }

                        <li>
                            <button type="submit">가입하기</button>
                            <button type="reset">가입취소</button>
                        </li>

                 </ul> 
                 
             </form>
        </div>
    );
}