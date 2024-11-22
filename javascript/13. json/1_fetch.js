// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
// KOBIS - 일별 박스오피스 

console.clear();

let key = `0040f1f2d9faa21c2ea60d7d441943f9`;
let target = `20241121`;
// let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0040f1f2d9faa21c2ea60d7d441943f9&targetDt=20241121`;

// 1. Response 객체
fetch(url)
    .then((response) => { console.log(console.log(response))})
    .catch((error) => {console.log(error)});


// 2. JSON 데이터 가져오기

    let result = await fetch(url); // JSON 객체가 문자열 데이터 타입으로 가져옴 
    let jsonData = await result.json(); // .json() 함수를 통해 JSON 객체 타입 변환 -> 외우기
    console.log(`type => ${jsonData.boxOfficeResult.boxofficeType}`);
    console.log(`range => ${jsonData.boxOfficeResult.showRange}`);
    console.log(`rankList => 
            ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`);
    console.log(`rankList => 
            ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm}`);


// let jsonData2 = {
//     boxOfficeResult: {   //대소문자 섞어서 넣어야 함 기억하기, 객체 구분 연습
//       boxofficeType: '일별 박스오피스',
//       showRange: '20241121~20241121',  
//       dailyBoxOfficeList: [          
//         [Object], [Object],
//         [Object], [Object],
//         [Object], [Object],
//         [Object], [Object],                                                               
//         [Object], [Object]
//       ]
//     }
//   };



// function async test() {
//     let result = await fetch(url); // JSON 객체가 문자열 데이터 타입으로 가져옴 
//     let jsonData = await result.json(); // .json() 함수를 통해 JSON 객체 타입 변환 -> 외우기
//     console.log(jsonData);
// }

// fetch 함수 특징
/**
 * 비동기식
 * fetch는 json 함수 꼭 들어가야 함.
 * json 객체 변환
 * xos -> react
 * 문자열 타입
 * 
 * 
 */