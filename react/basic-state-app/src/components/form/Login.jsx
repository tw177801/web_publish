import React, { useState } from 'react';

export default function Login() {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [form, setForm] = useState({});

    const handleChangeId = (event) => {
        setId(event.target.value);
        console.log(event.target.value);
    }
    
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(event);
        //로그인폼에 입력된 값을 ---> 서버(express, WAS, ...)
        // {{"id":"test"}, {"password":"1234"}...}
        const formData = {
            {"id": ${id}}, 
            {"password":"1234"}
        };
    }

    return (
        <div>

            <h1>Login</h1>

            <form name="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input type="text" 
                           name="id" 
                           value={id} 
                           onChange={handleChangeId}/> 
                </div>
                <div>
                    <label>패스워드</label>
                    <input type="password" 
                           name="pass" 
                           value={password}
                           onChange={handleChangePassword}/> 
                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>

            </form>
        
        </div>
    );
}

// 리액트 작업 포지션 생각하기