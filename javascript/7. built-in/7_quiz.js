// 1. 'Hello~ Java Scirpt!!!' 문자열을 한 문자씩 출력해주세요


// built-in 함수 -> 리엑트 적용 가능


let str = 'Hello~ Java Scirpt!!!';
for(let i=0; i<str.length; i++) {
    console.log(str[i]);    
}

// 2. '독서, 수영, 영화, 게임, 사이클'

let hobbys = '독서, 수영, 영화, 게임, 사이클';
hobbys = hobbys.split(',');
console.log(hobbys);

for(let i=0; i<hobbys.length; i++) {
    console.log(hobbys[i].trim());    
}

hobbys.forEach((hobby) => console.log(hobby.trim()));

