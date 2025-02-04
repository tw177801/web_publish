import express from 'express';
import testRouter from './router/testRouter.js';


// node.js -> 확장자 반드시 작성 (에러 방지)

const server = express();
const port = 9000;

/** 요청 처리 미들웨어 */
/** /test 요청시 --> Hello~ Test!! 브라우저에 출력 후 종료 */
server.use('/test', testRouter); // test로 시작하는 모든 경로 routing

// server.use('/test', (req, res)=>{
//     res.send('<h1>Hello~ Test!!</h1>');
//     res.end();
// });

// http://localhost:9000/test/product

server.listen(port, ()=>{
    console.log(`server start ===>> ${port}`);
});


/**
 * import express from 'express';
 import mainRouter from './router/mainRouter.js';
 import helloRouter from './router/helloRouter.js';
 import employeeRouter from './router/employeeRouter.js';
 import cors from 'cors';
 
 // 서버 생성 및 포트 정의
 const server = express();
 const port = 9000;
 
 /** 서버의 공통적인 작업 */
//  server.use(express.json());
//  server.use(express.urlencoded());
//  server.use(cors());  
 
 
 /** 서버의 요청처리를 위한 미들웨어 정의 */
//  server.use('/', mainRouter);
//  server.use('/hello', helloRouter); 
//  server.use('/employee', employeeRouter);
 // server.use('/member', 라우터);
 
 
 
//  server.listen(port, ()=>{
//      console.log(`server port ===>> ${port}`);    
//  });