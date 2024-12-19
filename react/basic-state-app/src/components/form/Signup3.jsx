import React, {useState, useRef} from 'react';
import { validateFormSignup2 } from '../../apis/validate.js';
import { initFormNames } from '../../apis/initial.js';


export default function Signup2() {

    const refs = {

        idRef:useRef(null),
        pwdRef:useRef(null),
        nameRef:useRef(null),
        phone1Ref:useRef(null),
        phone2Ref:useRef(null),
        phone3Ref:useRef(null),
        addressRef:useRef(null),
        birth1Ref:useRef(null),
        birth2Ref:useRef(null),
        birth3Ref:useRef(null),
        jobRef:useRef(null),
        genderRef:useRef(null),
        emailRef:useRef(null),
        introRef:useRef(null)
    
    };

    const initArray = {

        'id':'',
        'pwd':'',
        'name': '',
        'phone1': '',
        'phone2': '',
        'phone3': '',
        'address': '',
        'birth1': '',
        'birth2': '',
        'birth3': '',
        'job': '',
        'gender': '',
        'email': '',
        'intro': ''

    };

    // const init = initArray.reduce((acc, key)=> {
    //             acc[key] = '';
    //             return acc;
    // },{});

    // 배열 + reduce() 함수

    // const refArray = ['idRef', 'pwdRef', 'nameRef', 'phone1Ref'];
    
    
    //React 전용 useRef 함수는 custom hook 등을 활용
    // const refs2 = refArray.reduce((acc, key)=>{
    //             acc[key] = useRef(null)
    //             return acc;
    // }, {});

    // console.log(initFormNames(initArray));
    

    // acc = {'idRef': useRef(null)};


    // const init = {

    //     'id':'',
    //     'pwd':'',
    //     'name': '',
    //     'phone1': '',
    //     'phone2': '',
    //     'phone3': '',
    //     'address': '',
    //     'birth1': '',
    //     'birth2': '',
    //     'birth3': '',
    //     'job': '',
    //     'gender': '',
    //     'email': '',
    //     'intro': ''

        
    // }

    const [formData, setFormData] = useState(initFormNames(initArray));
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateFormSignup2(refs)) console.log(formData);
        
    }




    return (
        <div>
            
            <h1>회원가입</h1>


            <form onSubmit={handleSubmit}>


                <ul>

                    <li>
                        <label><b>아이디: </b></label>
                        <input type="text" 
                               name="id"
                               id="id"
                               value={formData.id}
                               ref={refs.idRef}
                               onChange={handleChangeForm}
                        />
                    </li>
                    
                    <li>
                        <label><b>비밀번호: </b></label>
                        <input type="password" 
                               name="pwd"
                               id="pwd"
                               value={formData.pwd}
                               ref={refs.pwdRef}
                               onChange={handleChangeForm}
                        />
                    </li>
                    
                    <li>
                        <label><b>이름: </b></label>
                        <input type="text" 
                               name="name"
                               id="name"
                               value={formData.name}
                               ref={refs.nameRef}
                               onChange={handleChangeForm}
                        />
                    </li>

                    <li>
                        <label><b>전화: </b></label>
                        <input type="text" 
                               name="phone1"
                               id="phone1"
                               value={formData.phone1}
                               ref={refs.phone1Ref}
                               onChange={handleChangeForm}
                        /> - 
                        <input type="text" 
                               name="phone2"
                               id="phone2"
                               value={formData.phone2}
                               ref={refs.phone2Ref}
                               onChange={handleChangeForm}
                        /> - 
                        <input type="text" 
                               name="phone3"
                               id="phone3"
                               value={formData.phone3}
                               ref={refs.phone3Ref}
                               onChange={handleChangeForm}
                        />
                    </li>

                    <li>
                        <label><b>주소: </b></label>
                        <input type="text" 
                               name="address"
                               id="address"
                               value={formData.address}
                               ref={refs.addressRef}
                               onChange={handleChangeForm}
                        />
                    </li>
                    
                    <li>
                        <label><b>생일: </b></label>
                        <input type="text" 
                               name="birth1"
                               id="birth1"
                               value={formData.birth1}
                               ref={refs.birth1Ref}
                               onChange={handleChangeForm}
                        /> /
                        <input type="text" 
                               name="birth2"
                               id="birth2"
                               value={formData.birth2}
                               ref={refs.birth2Ref}
                               onChange={handleChangeForm}
                        /> /
                        <input type="text" 
                               name="birth3"
                               id="birth3"
                               value={formData.birth3}
                               ref={refs.birth3Ref}
                               onChange={handleChangeForm}
                        />
                    </li>

                    <li>
                        <label htmlFor=""><b>직업: </b></label>

                        <select name="job"  
                                onChange={handleChangeForm}
                                ref={refs.jobRef}        
                        >

                            <option value="default">선택</option>
                            <option value="frontend">프론트개발자</option>
                            <option value="backend">백엔드개발자</option>
                            <option value="system">시스템관리자</option>

                        </select>
                    </li>

                    <li>
                        <label><b>성별: </b></label>
                        
                        <input type="radio" 
                               name="gender"
                               value="m"
                               ref={refs.genderRef}
                               onChange={handleChangeForm}
                        /> 남

                        <input type="radio" 
                               name="gender"
                               value="f"
                               ref={refs.genderRef}
                               onChange={handleChangeForm}
                        /> 여
                    </li>

                    <li>
                        <label><b>이메일: </b></label>
                        <input type="email" 
                               name="email"
                               id="email"
                               value={formData.email}
                               ref={refs.emailRef}
                               onChange={handleChangeForm}
                        />
                    </li>
                    
                    <li>
                        <label><b>자기소개: </b></label>
                        <textarea 
                                rows='10'
                                cols='50'
                                name="intro"
                                id="intro"
                                style={{width: 500, height: 300}}
                                value={formData.intro}
                                ref={refs.introRef}
                                onChange={handleChangeForm}                        
                        >

                        </textarea>

                    </li>


                    <li>
                        <button>가입</button>
                        <button>취소</button>
                    </li>


                </ul>



            </form>



        </div>
    );
}

