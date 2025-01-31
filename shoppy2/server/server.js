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
