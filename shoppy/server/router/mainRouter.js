import express from 'express';
import * as controller from '../controller/mainContrloller.js';

const router = express.Router();

router.get('/', controller.getMain);
// router.get('/', 컨트롤러 함수명);

export default router; 