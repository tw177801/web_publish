import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import cors from 'cors';

// 서버 생성 및 포트 지정

const server = express();
const port = 9000;


/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

/* 서버의 요청 처리를 위한 미들 웨어 정의 */

server.use('/', mainRouter);
server.use('/hello', helloRouter); // hello/test
server.use('/employee', employeeRouter); // hello/test



/** / => Hello~ NodeJS~ */
//     server.use('/', (req, res)=> {s
//         res.send(`Hello`);
//         // res.send(`Hello2~NodeJS`); send() 함수는 1번만 전송 가능
//         res.end();
//     });

// /** /hello => welcome to Hello~ */
//     server.use('/hello', (req, res)=> {

//         // 요청

//         // DB 연동

//         // 결과 비교

//         // 결과 생성

//         res.send(`welcome to Hello~`);
//         res.end();
//     });



server.listen(port, ()=> {
    console.log(`server port ===>> ${port}`);
});