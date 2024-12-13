import React, {useState} from 'react';

export default function UserInfo() {


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleChangeName = (event) => {setName(event.target.value);}
    const handleChangeAddress = (event) => {setAddress(event.target.value);}
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`UserInfo --> ${name}, ${address}`);
        
    
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">Name</label>
                        <input type="text" 
                               name="name"
                               value={name}
                               onChange={handleChangeName}
                               />
                    </li>
                    <li>
                        <label htmlFor="">Address</label>
                        <input type="text" 
                               name="address"
                               value={address}
                               onChange={handleChangeAddress}
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

