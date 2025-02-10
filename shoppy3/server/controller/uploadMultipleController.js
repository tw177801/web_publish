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
  
  
  /**
   * 
   * 파일업로드 실행 함수 
  */
 
 
 export const fileUploadMultiple = (req, res) => {
    const maxFiles = parseInt(req.query.maxFiles);
    const upload = multer({ storage: storage }).array("files", maxFiles);

    upload(req, res, (err)=>{
        if(err) {
            console.log(err); // 삭제 하지 않기  
        } else {

            // console.log('업로드 파일 리스트 --> ', req.files);
            // console.log('업로드 삭제 파일(oldFile)-->', req.body.oldFile);
            
            // const deleteFiles = req.body.oldFile;
            // console.log(deleteFiles.length);
            // const oldFileArray = deleteFiles.split(",");
            const oldFileArray = req.body.oldFile.split(",");
            console.log(oldFileArray);
            

            // console.log('file-->',req.file); // 전달된 파일 --> multer 이용한 파일 업로드
            // console.log('oldFile-->',req.body.oldFile); // 전달된 문자 

          
            /** 이전 파일 존재시 삭제 로직 */
            // const oldFile = req.body.oldFile;

            for(const oldFile of oldFileArray) {
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
            }
            

            // res 객체를 이용한 전송 객체 생성 -> uploadController의 res 객체명과 동일하게 정의!!
            let uploadFileName = [];
            let sourceFileName = [];
            let oldFile = [];

            // req.files 배열의 파일 정보를 가져와서 위의 배열에 추가한다. 
            for(const file of req.files) {
                uploadFileName.push(file.path);
                sourceFileName.push(file.originalname);
                oldFile.push(file.filename);
            }

            res.json({
                "uploadFileName": uploadFileName,
                "sourceFileName": sourceFileName,
                "oldFile": oldFile
            });

            // 저장된 폴더의 파일명
            // 사용자가 선택한 원래 파일명

        }
    });
   
    // res.end();

}