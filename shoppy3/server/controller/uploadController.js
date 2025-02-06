import multer from 'multer';

// multer 라이브러리 파일을 업로드 폴더에 저장 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now())
        cb(null, file.originalname);
    }
  })
  
const upload = multer({ storage: storage }).single("file");



export const fileUpload = (req, res) => {

    upload(req, res, (err)=>{
        if(err) {
            console.log(err);
        } else {
            res.json({test: "파일 업로드 성공"});
        }
    });
    // res.end();


}