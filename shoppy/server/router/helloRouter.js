import express from 'express';
// import {getHello, getHelloTest} from '../controller/helloConstroller/'
import  * as controller from '../controller/helloConstroller.js';

const router = express.Router();

/** router 경로 추가 */

router.get('/', controller.getHello); // /hello/hello 
router.get('/test', controller.getHelloTest); // /hello/hello 



// router.get('/', 컨트롤러 함수명);

export default router; 