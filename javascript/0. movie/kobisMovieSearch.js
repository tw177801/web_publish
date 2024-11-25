import { kobisBoxOffice, kobisMovieList, kobisMovieDetail } from './kobisCommons.js'

let mlist = null; // 영화 리스트 전역 변수

initForm();

/** 영화 리스트 100개 준비 */
function createMovieList() {
    kobisMovieList()
        .then((list) => {
            // const tcount = list.movieListResult.totCnt;
            // const movieList = list.movieListResult.movieList;
            const length = list.movieListResult.movieList.length;
            // console.log(`tcount --> ${tcount}`);
            // console.log(`movieList --> ${movieList}`);
            console.log(`length --> ${length}`);

            mlist = movieList;
            // for(let movie of mlist) {
            //     console.log(movie.movieNm);  
            // }
            // console.log(`length --> ${length}`);
            // console.log(`list.movieListResult.totCnt --> 
            //         ${list.movieListResult.totCnt}`);
        })
        .catch((error) => console.log(error));
}






function initForm() {
    // KOBIS 영화 리스트 데이터 가져오기
    createMovieList();

    let output = `
        <h1>KOBIS 영화 검색</h1>
        <div>
            <input type="text" id="search_title" placeholder="제목을 입력해주세요">
            <button type="button" id="search_button">Search</button>
        </div>
        <div id="result"></div>
    `;
    document.querySelector("body").innerHTML = output;

    // Search 버튼 이벤트 추가 및 유효성 체크
    document.querySelector("#search_button")
        .addEventListener('click', () => {
            let title = document.querySelector("#search_title");
            if(title.value.trim === '') {
                alert('영화 제목을 입력해주세요');
                title.foucs();
            } else {
                // 영화 리스트 출력 함수 호출
                // alert(title.value);

                searchMovieList(title.value.trim());
            }
        });
} // initForm()

/**
 * 영화 코드 검색 함수
 */

function searchMovieCd(title) {

    let movieCd = '';

    if(mlist !== null) {
        // 1. 필터링
        let filterMovie = mlist.filter((movie) => movie.movieNm === title);
        // console.log(`title --> ${filterMovie[0].movieNm}`);
        // console.log(`code --> ${filterMovie[0].movieCd}`);

        movieCd = filterMovie[0].movieCd;

    } 

    return movieCd;

}



/**
 * 영화 상세 검색 함수
 */
function searchMovieList(title) {

    let movieCd = searchMovieCd(title);
    console.log(`code ==>> ${movieCd}`);
    
    kobisMovieDetail(movieCd)
        .then((result) => {
            let info = result.movieInfoResult.movieInfo;
            
            let output = `
                <ul>
                    <li>
                        <label>movieCd :: </label>
                        <span>${info.movieCd}</span>
                    </li>
                    <li>
                        <label>movieNm :: </label>
                        <span>${info.movieNm}</span>
                    </li>
                    <li>
                        <label>movieNmEn :: </label>
                        <span>${info.movieNmEn}</span>
                    </li>

                    `;

                        info.directors.forEach((director) => {
                            output += `<span> ${director.peopleNm} || </span>`;
                            output += `<span> ${director.peopleNmEn} </span>`;
                        });
                        output += ` <li>
                                    <label>actors :: </label>
                                    <ul>
                                    `;

                        info.actors.forEach((actor) => {
                            output += `<li><span>${actor.peopleNm} | </span>`;
                            output += `<span> ${actor.peopleNmEn}</span>  </li>`;
                        });

                        output += `
                
                                </li>



                            </ul>
                        `;

            document.querySelector("#result").innerHTML = output;

        })
        .catch((error) => console.log(error));

    // console.log(`mlist --> ${mlist}`);
    // mlist.forEach((movie) => {
    //     console.log(movie.movieCd);
    //     console.log(movie.movieNm);
        
    // });
    

} //searchMovieList