import express from 'express';
import * as constroller from '../controller/uploadController.js';
// import * as constroller from ' ../constroller/uploadController.js'; -> 철자 에러

const router = express.Router();

    router.post('/', constroller.fileUpload); 

export default router;