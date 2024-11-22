
import { kobisBoxOffice as boxOffice } from './kobisCommons.js';


initForm();

function initForm() {
    const output = `
        <h1>일별 박스 오피스</h1>
        <div id="search">
            <select id="type">
                <option value="default">선택</option>
                <option value="Daily">일별</option>
                <option value="Weekly">주간/주말</option>
            </select>
            <input type="text" id="searchDt" placeholder="예시)20241122">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result"></div>
    `;

    document.querySelector("body").innerHTML = output;

    // 기본 박스 오피스 화면 출력 : 20240101
    searchBoxOffice('Daily', '20240101');


    /** Search button event add */
    let searchButton =  document.querySelector("#searchBtn");
    searchButton.addEventListener('click', ()=>{
        // alert('검색버튼 클릭');
        //searchDt 입력창, 박스 오피스 타입의 유효성 체크
        let type = document.querySelector("#type");
        let searchDt = document.querySelector('#searchDt');

        alert(type.value + searchDt.value);

        if(type.value === 'default') {
            alert('박스오피스 타입을 선택해주세요');
            type.focus();
        } else if(searchDt === '') {
            
            alert('검색일자를 입력해주세요');
            searchDt.focus();
        } else {
            // 일별&주간/주말 박스오피스 정보 출력
            searchBoxOffice(type.value, searchDt.value);
        }
    });
} // end of initForm



/**
 * 일별 박스오피스 정보 화면 출력
 */

function searchBoxOffice(ktype, searchDt) {

    boxOffice(ktype, searchDt) // Promise 객체로 리턴
        .then((result) => {
            // console.log(`result=>${result}`);
            // const rankType = ktype.toLowerCase();
            
            
            const type = result.boxOfficeResult.boxofficeType;
            const range = result.boxOfficeResult.showRange;
            
            //ktype을 체크하여 Daily, Weekly
            let rankList = null;
            if(ktype === 'Daily') {
                rankList = result.boxOfficeResult.dailyBoxOfficeList;
                
            } else if(ktype === 'Weekly') {
                rankList = result.boxOfficeResult.weeklyBoxOfficeList;

            }
            

            // let rankList = `result.boxOfficeResult.${rankType}BoxOfficeList`;
            // "{name: '홍길동'}"
            // rankList = JSON.parse(rankList);

            let output = `

   
                <h3>박스오피스 타입 : ${type}</h3>
                <h3>박스오피스 일자 : ${range}</h3>
    
                    <table border=1>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일관객</th>
                            <th>누적관객</th>
                        </tr>

            `;

            rankList.forEach((element) => {
                output += `
                        <tr>
                            <td>${element.rank}</td>
                            <td>${element.movieNm}</td>
                            <td>${element.openDt}</td>
                            <td>${element.audiCnt}</td>
                            <td>${element.audiAcc}</td>
                        </tr>
                `;
            });
            
            
            output += `</table>`;
            // 테이블 화면 출력

            document.querySelector("#result").innerHTML = output;

            // console.log(output);
            

            // console.log(result.boxOfficeResult.boxofficeType);
            // console.log(result.boxOfficeResult.showRange);
            // console.log(result.boxOfficeResult.dailyBoxOfficeList.length);
            
            // let rankList = result.boxOfficeResult.dailyBoxOfficeList;
            // rankList.forEach(element => {
            //     console.log(element.movieNm);
                
            // });


            // let div = document.querySelector("#search");
            // div.insertAdjacentHTML('afterend', output);
            
            // let resultOutPut = document.querySelector("#result");
            // resultOutPut.remove();
            // console.log(typeof resultOutPut);
            

        })

        .catch();    
} 


// function searchBoxOffice(searchDt) {
//     const key = `0040f1f2d9faa21c2ea60d7d441943f9`;
//     const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${searchDt}`
//     let kobis = await fetch(url);
//     let daily = await kobis.json();
// } 