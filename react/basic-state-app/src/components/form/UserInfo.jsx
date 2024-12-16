import React, {useState, useRef} from 'react';
import { validateForm2 } from '../../apis/validate.js';

export default function UserInfo() {


    // const nameRef = useRef(null);
    // const addressRef = useRef(null);
    // const ageRef = useRef(null);


    const refs = {
        nameRef : useRef(null),
        addressRef : useRef(null),
        ageRef : useRef(null)

    };


    // const [name, setName] = useState('');
    // const [address, setAddress] = useState('');

    // const handleChangeName = (event) => {setName(event.target.value);}
    // const handleChangeAddress = (event) => {setAddress(event.target.value);}
    
    
    //Form data 저장소
    const init = {'name':'', 'address': '', 'age': ''};
    const [formData, setFormData] = useState(init);
    
    const handleChangeForm = (event) => {
        
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});

    }

    // const validateForm = () => {

    //     let result = true;

    //     if(nameRef.current.value === '') {
    //         alert('이름을 입력해주세요');
    //         nameRef.current.focus();
    //         result = false;
    //     } else if (addressRef.current.value === '') {
    //         alert('주소를 입력해주세요');
    //         addressRef.current.focus();
    //         result = false;
    //     } else if (ageRef.current.value === '') {
    //         alert('나이를 입력해주세요');
    //         ageRef.current.focus();
    //         result = false;
    //     }

    //     return result;
    // }
    
    
    const handleSubmit = (event) => {
            event.preventDefault();
            // if(validateForm()) console.log(formData);

            // const refs = {
            //     'nameRef' : nameRef,
            //     'addressRef' : addressRef,
            //     'ageRef' : ageRef
            // };

            if(validateForm2(refs)){
                console.log(formData);
            }

    }

    /********************************* */

    return (
        
        <div>

            <h1>UserInfo</h1>

            <form onSubmit={handleSubmit}>

                <ul>
                    
                    <li>
                        <label htmlFor="">Name</label>
                        <input type="text" 
                               name="name"
                               ref={refs.nameRef}
                               value={formData.name}
                               onChange={handleChangeForm}
                               />
                    </li>


                    <li>
                        <label htmlFor="">Address</label>
                        <input type="text" 
                               name="address"
                               ref={refs.addressRef}
                               value={formData.address}
                               onChange={handleChangeForm}
                               />
                    </li>
                    
                    <li>
                        <label htmlFor="">Age</label>
                        <input type="text" 
                               name="age"
                               ref={refs.ageRef}
                               value={formData.age}
                               onChange={handleChangeForm}
                               />
                    </li>
                    
                    
                    <li>
                        <button type="submit">Send</button>
                    </li>
                
                </ul>
            
            </form>



        </div>
    );
}

