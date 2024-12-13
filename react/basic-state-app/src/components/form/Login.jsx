import React, { useState, useRef } from 'react';

export default function Login() {

    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const initForm = {'id':'', 'password':''};
    const [form, setForm] = useState(initForm); // {"id":"test"....}

    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('');


    const handleChangeForm = (event) => {
        
        
        const {name, value} = event.target;
        setForm({...form, [name]:value}); 
        
        // 아이디, 패스워드가 변경되면
        // setForm 함수를 이용하여 "id":"test" 형식으로 저장

        // console.log(event.target);
        // console.log(`name--> ${name}, value ----> ${value}`);
        

        // form = {'id':'hong', 'password':''}
        // form = {'id':'hong', 'password':'1234'}

        // form = {'id':'hong'} <-- id input
        // form = {'password':'1234'} <-- password input
        // 오브젝트 객체의 필드값을 변수로 입력하는 경우에는 []로 감싼 후 적용

    }

    // console.log(`form id --> ${form.id}`);
    // console.log(`form password --> ${form.password}`);
    


    // const handleChangeId = (event) => {
    //     setId(event.target.value);
    //     console.log(event.target.value);
    // }
    
    // const handleChangePassword = (event) => {
    //     setPassword(event.target.value);
    //     console.log(event.target.value);
    // }

    const validate = () => {

        let result = true;

        if(idRef.current.value === '') {
            alert('아이디를 입력해주세요');
            idRef.current.focus();
            result = false;
        } else if (passwordRef.current.value === '') {
            alert('비밀번호를 입력해주세요');
            passwordRef.current.focus();
            result = false;
        } 

        return result;

        // console.log(idRef.current.value);
        // console.log(passwordRef.current.value);
    
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        
        
        if(validate()) {
            console.log(form);
        } 
        
        


        //로그인폼에 입력된 값을 ---> 서버(express, WAS, ...)
        // {{"id":"test"}, {"password":"1234"}...}
        
        // const formData = {
        //     "id": "test",
        //     "password":"1234"
        // };
    
        // submit(form);

    }

    return (
        <div>

            <h1>Login</h1>

            <form name="login-form" onSubmit={handleSubmit}>
                
                <div>
                    <label>아이디</label>
                    <input type="text" 
                           name="id" // id:test
                           value={form.id} 
                           ref={idRef}
                           onChange={handleChangeForm}/> 
                </div>
                
                <div>
                    <label>패스워드</label>
                    <input type="password" 
                           name="password" 
                           value={form.password} // password:1234
                           ref={passwordRef}
                           onChange={handleChangeForm}/> 
                </div>

                <div>
                    <button type="submit">로그인</button>
                </div>

            </form>
        
        </div>
    );
}

// 리액트 작업 포지션 생각하기