import { kobisBoxOffice, searchMoviePoster } from "./kobis.js";

createMovieChartList();

/**
 * 
 * index -> 무비차트 리스트 생성 함수
 */

function createMovieChartList() {
    const date = new Date();
    const searchDt = date.getFullYear().toString()
                        .concat(date.getMonth()+1,date.getDate()-1);

    console.log(searchDt);
    

    kobisBoxOffice('Daily', searchDt)
        .then((result) => {
            // console.log(result);
            const rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let posterList = []; // promise 객체 타입 10개의 이미지 poster 저장

            rankList.forEach((element) => {
                posterList.push(getPoster(element.movieNm, element.openDt.replaceAll('-', '')));
            });

            Promise.all(posterList) //비동기식 처리를 묶어서 한번에 실행 및 관리
            .then((poster) => {
                let output = `<ul>`;
                rankList.forEach((movie, i) => {
                    output += `
                        <li>
                            <div>
                                <img src="${poster[i]}"   
                                alt="Movie-chart1"
                                width="200px" >
                            </div>                            
                            <div><h3>${movie.movieNm}</h3></div>
                            <div><h5>${movie.audiAcc}</h5></div>
                        </li>
                    `;


                });
                output += `</ul>`;
                document.querySelector(".content-moviechart-list").innerHTML = output;

            })
            .catch(error => console.log(error));



        })
        .catch();
}

/** kobis.js 파일의 
 *  searchMoviePoster 비동기식 함수를 순서대로 호출하는 getPoster 함수 생성 */

async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}

// async, await 기억. 순서대로 호출 

