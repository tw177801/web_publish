// const express = require('express');  // Node.js에서 모듈 import 가져오기
// package.json 파일에 "type":"module", 형식으로 수정하면 import 형식 사용 가능

import express from 'express';
import helloRouter from './router/helloRouter.js';
import productRouter from './router/productRouter.js';

const server = express(); // 익스프레스 서버 생성
const port = 9000;

/** 익스프레스 서버의 요청/응답 처리하는 미들웨어 
 * 요청/응답 메소드: GET, POST, PUST, DELETE, USE
 * MVC 패턴 적용 -> 작업 분리시킴 
 * --> 역할에 맞춰 작업 분리 용도 
 * --> M(Model), V(View), C(Controller)
 * --> M(Repository), V(Router), C(Controller)
*/

// server.get('/hello', (req, res)=>{
//     console.log('Hello~ NodeJS~!!!');
//     res.send('<h1>welcome~</h1>');
// });


server.use('/hello', helloRouter);  // hello 시작하는 주소는 모두 helloRouter로 매핑
// server.get('/hello/', router);
// server.get('/hello/:id', router);

server.use('/product', productRouter);
// server.get('/product/all', productRouter);
// server.get('/product/:pname', productRouter);


//test 
// server.get('/test', (req, res)=>{
//     console.log('Hello~!!!');
//     res.send(
//         '<h1>test.</h1>'
//     );
// });

//test/hong
// -> const id = 'park';
// server.get('/test/:name', (req, res)=>{ 
//     res.send(`hi~ ${req.params.name}`);
// });


server.listen(port, ()=>{
    console.log(`서버 대기중----> ${port}`);
});  // 익스프레스 서버 대기상태: 포트 설정 및 메시지 출력 // 동일 서버 금지


