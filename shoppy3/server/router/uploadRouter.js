import express from 'express';
import * as constroller from ' ../constroller/uploadController.js';

const router = express.Router();

    router.post('/', constroller.fileUpload); 

export default router;