import React, {useState, useRef} from 'react';
import { validateLogin2 } from '../../apis/validate.js';

export default function Login2() {

    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const initForm = {'id':'', 'password':''};
    const [form, setForm] = useState(initForm);
    const [errorMsg, setErrorMsg] = useState({'id': 'e', 'pass':'e'});

    const handleChangeForm = (event) => {

        
        const {name, value} = event.target;
        setForm({...form, [name]:value});

        if(name === 'id' && value !== '') {
            (value === '') ?
            setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'})
            : setErrorMsg({...errorMsg, ['id']: ''})

        } else if (name === 'pass' && value !== '' ){
            (value === '') ?
            setErrorMsg({...errorMsg, ['pass']:'패스워드를 입력해주세요'})
            : setErrorMsg({...errorMsg, ['pass']: ''})
        };
        

    }


    // const validate = () => {

    //     let result = true;
    //     if(idRef.current.value === '') {

    //         // alert('아이디를 입력해주세요');
    //         setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'});
    //         idRef.current.focus();
    //         result = false;

    //     } else if (passwordRef.current.value === '') {

    //         // alert('비밀번호를 입력해주세요');
    //         setErrorMsg({...errorMsg, ['pass']:'패스워드를 입력해주세요'});
    //         passwordRef.current.focus();
    //         result = false;
    //     }
    //     return result;
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        const param = {

            'idRef': idRef,
            'passwordRef': passwordRef,
            'errorMsg': errorMsg,
            'setErrorMsg' : setErrorMsg  
        };

        if(validateLogin2()) {
            console.log(form);
        }

    }


    return (
        <div>
            
            <h1>Login</h1>

            <form action="login-form" onSubmit={handleSubmit} >

                <div>

                    <li>

                        <label>아이디</label>
                        <input type="text" 
                            name="id"
                            value={form.id}
                            ref={idRef}
                            onChange={handleChangeForm}
                                    />
                        <span style={{'color':'red'}}>{errorMsg.id}</span>
                    </li>

                </div>


                <div>

                    <li>
                        <label>패스워드</label>
                        <input type="password" 
                            name="password"
                            value={form.password}
                            ref={passwordRef}
                            onChange={handleChangeForm}
                        />
                        <span style={{'color':'red'}}>{errorMsg.pass}</span>
                    </li>
                    
                </div>

                <div>
                    <button type='submit'>로그인</button>
                </div>

            </form>

        </div>
    );
}

