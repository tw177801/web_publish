//readme.txt 파일을 읽어서 내용을 화면에 출력하는 실습 
const fs = require('fs');
const fsp = require('fs').promises;

// console.log(fs);
// fs.readFile('파일의 경로', 파일을 읽은 후 실행 함수:: 콜백함수);

fs.readFile('./readme.txt', (err, text)=>{
    if(err) { 
        console.log('파일 읽기 실패!');
    }  else {
        console.log(text);
        console.log(text.toString());
    } 
});

fsp.readFile('./readme.txt').then(()=>{}).catch();
