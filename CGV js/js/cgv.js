import { kobisBoxOffice, searchMoviePoster } from "./kobis.js";

createMovieChartList(1);

/**
 * 
 * index -> 무비차트 리스트 생성 함수
 */

function createMovieChartList(page) {
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
                (page === 2)? output += `<li><span class="movie-chart" id="arrow-left">&lt;&lt;</span></li>`
                                : output += '';

                let idx = 0;
                (page !== 1)? idx +=5 : idx = 0;
                
                rankList.forEach((movie, i) => {
                    i += idx;
                    if(i < page * 5) {
                        output += `
                            <li>
                                <div>
                                    <img src="${poster[i]}"   
                                    alt="Movie-chart1"
                                    width="200px" >
                                </div>                            
                                <div><h3>${rankList[i].movieNm}</h3></div>
                                <div><h5>${rankList[i].audiAcc}</h5></div>
                            </li>
                        `;
                    } // i가 10개라면? 확장 사고
                }); // rankList.forEach

                (page === 1)? output += `<li><span class="movie-chart" id="arrow-right">&gt;&gt;</span></li>`
                                : output += '</ul>';

                document.querySelector(".content-moviechart-list").innerHTML = output;
                
                
                
                // arrow-right :: click event
                // 공식 외우기!!
                const arrows = document.querySelectorAll(".movie-chart");
                arrows.forEach((arrow) => {
                    arrow.addEventListener('click', (event) => {
                        (event.target.id === 'arrow-right')? 
                            createMovieChartList(2) : createMovieChartList(1) ;                        
                    });
                });



                /*
                try {
                    document.querySelector("#arrow-right")
                            .addEventListener('click', ()=>{
                                createMovieChartList(2);
                    });
                    
                }   catch (error) {
                    
                }

                // arrow-left :: click event
                try {
                    document.querySelector("#arrow-left")
                            .addEventListener('click', ()=>{
                                createMovieChartList(1);
                    });
                    
                }   catch (error) {

                }
                // click event-end
                */
                
            }) //then
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