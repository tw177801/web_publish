import React, { useState } from 'react';
import './cgv.css';
import './commons.css';
import './login.css';



export default function CgvLoginForm() {

    const initFormData = {'id':'', 'pwd':''};
    const [formData, setFormData] = useState(initFormData);


    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        
    }


    return (
        <div className='content'>
            <div className="login-form center-layout">
                <h1 className="center-title">로그인</h1>
                    <form action="#" method="post">
                    <form onSubmit= {handleSubmit} />
                    <ul className='cgv-login-content'>
                        <li>
                            <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                        </li>

                        <div className="login-content-window">


                            <li>
                                <div className="login-form-input">
                                <i className="fa-regular fa-user"></i>
                                <input type="text" name="id" placeholder="아이디를 입력해주세요" className="input-text"
                                onChange={handleChangeForm} />
                                </div>
                            </li>
                        
                            <li>
                                <div className="login-form-input">
                                <i className="fa-solid fa-lock"></i>
                                <input type="password" name="pwd" placeholder="비밀번호를 입력해주세요" className="input-text"
                                onChange={handleChangeForm}  />
                                </div>
                            </li>

                            <li>
                                <button type="submit" className="login-button">로그인</button>
                            </li>
                            
                        
                            <li>

                                <div className="id-pw">
                                <div>
                                    <input type="checkbox" name="status"/>
                                    <label for="">로그인 상태 유지</label>
                                </div>
                                <div>
                                        <a href="#">아이디 찾기</a> 
                                        <span>&gt;</span> 
                                        <a href="#">비밀번호 찾기</a> 
                                        <span>&gt;</span>
                                </div>
                                </div>  
                            </li>
                            

                            <li>
                                <div>
                                <button className="login-button2">네이버 로그인</button>
                                </div>
                            </li>

                        </div>

                    </ul>   


                    <div> 
                        <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" 
                        alt="loginplus"/>
                    </div>

                </form>
            </div>
    </div>
        
    );
}

