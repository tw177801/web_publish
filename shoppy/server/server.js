// const express = require('express');
import express from 'express';

const server = express(); // 익스프레스 서버 생성
const port = 9000;

/** 익스프레스 서버의 요청/응답 처리하는 미들웨어 
 *  요청/응담 메소드: GET, POST, PUST, DELETE
 * 
*/

server.get('/hello', (req, res)=>{
    console.log('Hello~ NodeJS~!!!');
    res.send('<h1>반갑습니다~ 클라이언트~</h1>');
});

//test 
server.get('/test', (req, res)=>{
    console.log('Hello~!!!');
    res.send(
        '<h1>h1 코드~ 메시지입니다.</h1>'
    );
});


server.listen(port, ()=>{
    console.log(`서버 대기중----> ${port}`);
});  // 익스프레스 서버 대기상태: 포트 설정 및 메시지 출력 // 동일 서버 금지


