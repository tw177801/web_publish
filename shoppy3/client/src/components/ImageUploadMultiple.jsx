import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUploadMultiple() {

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;

        console.log(files.length);
        
        
        // if(files.length < 6) {

            // formData에 append - file 개별로 append 되어야 함

            for(const file of files) formData.append("files", file);
            // for(let i=0; i<files.length; i++) formData.append("files", files[i]);
            // files.forEach((file)=> formData.append("files", file)); -> iterable 호출로 인해 사용 불가

            // for(const [key, value] of formData) console.log(key, value);
            

            // 서버전송 
            // 파일 업로드 제한 없이 사용자가 선택한 갯수 만큼 전송 ==> ? 
            axios  
                .post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData)
                .then(res => console.log(res.data))
                .catch(error => console.log(error));

        // } else {
        //     alert("파일 업로드는 최대 5개까지 가능합니다.");
        // }
    }
    

    return (
        <div>
            <Form.Control 
                        type="file"
                        onChange={(e)=>{handleFileUploadMultiple(e)}}
                        multiple 
            />
        </div>
    );
}

