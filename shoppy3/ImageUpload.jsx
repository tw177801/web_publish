import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';

export default function ImageUpload() {

    const formData = new formData();

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]);

        // 서버 전송 
        axios
            .post('http://localhost:9000/uploads', formData)
            .then(res => console.log('res -->', res.data))
            .catch(error => console.log(error));
    }


    return (
        <div>
            <Form.Control 
                type= "file"
                onChange={(e)=>{handleFileUpload(e)}}
            />
        </div>
    );
}

