import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {

    const formData = new FormData();

    // 파일 업로드 이벤트 함수
    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]);

        // for(const [key, value] of formData.entries()) {
        //     console.log(`key---> ${JSON.stringify(key)}`);
        //     console.log('value--->', value);
        // }
        
        // 서버 전송 
        
        axios  
            .post('http://localhost:9000/uploads', formData)
            .then(res => {
                console.log('res -> ', res.data);
                getFileName(res.data);
            })
            .catch(error => console.log(error));

    }

    return (
        <div>
            <Form.Control 
                    type = "file"
                    accept= "image/*" 
                    onChange = {(e) => {handleFileUpload(e)}}        
            />
        </div>
    );
}

