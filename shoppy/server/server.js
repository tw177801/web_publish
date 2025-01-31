// const express = require('express');
import express from 'express';

const server = express(); // 익스프레스 서버 생성


/** 익스프레스 서버의 요청/응답 처리하는 미들웨어 
 *  요청/응담 메소드: GET, POST, PUST, DELETE
 * 
*/


server.listen(9000, ()=>{
    console.log("서버 대기중~");
    
});  // 익스프레스 서버 대기상태: 포트 설정 및 메시지 출력 // 동일 서버 금지


