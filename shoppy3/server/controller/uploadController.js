import multer from 'multer';
import fs from 'fs';
import path from 'path';

// multer 라이브러리 파일을 업로드 폴더에 저장 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now())
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

        cb(null, uniqueSuffix + "-" + file.originalname);
    }
  })
  
const upload = multer({ storage: storage }).single("file");



export const fileUpload = (req, res) => {

    upload(req, res, (err)=>{
        if(err) {
            console.log(err); // 삭제 하지 않기  
        } else {

            // console.log('업로드 파일 리스트 -->', req.files);            
            // console.log('file-->',req.file); // 전달된 파일 --> multer 이용한 파일 업로드
            // console.log('oldFile-->',req.body.oldFile); // 전달된 문자 

            const oldFile = req.body.oldFile;
            
            if(oldFile) {
                // oldFile 존재 시 업로드 폴더에서 삭제 
                const oldFilePath = path.join("upload_files/", oldFile);
                // fs -> 파일 시스템 file system
                if(fs.existsSync(oldFilePath)) {
                    try {
                        fs.unlinkSync(oldFilePath);
                        console.log("이전 파일 삭제 완료:", oldFilePath);                        
                    } catch (error) {
                        console.error("이전 파일 삭제 실패:", error);                        
                    }
                }
            }
            
            res.json({
                "uploadFileName": res.req.file.path,
                "sourceFileName": req.file.originalname,
                "oldFile": res.req.file.filename
            });
            // 저장된 폴더의 파일명
            // 사용자가 선택한 원래 파일명
        }
    });
    // res.end();


}