import express from 'express';
import * as controller from '../controller/helloController.js';

const router = express.Router();


// router.get('라우팅 경로', 연동하는 컨트롤러 이름);

// router.get('/hello', getHello);
// router.get('/hello/:id', getHelloParam);
// router.get('/hello', controller.getHello);
// router.get('/hello:id', controller.getHelloParam);


// use 사용 하지 않기
router
    .get('/', controller.getHello)
    .get('/:id', controller.getHelloParam);

export default router;