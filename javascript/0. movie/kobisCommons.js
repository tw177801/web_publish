

/**
 * KOBIS 영화 리스크 호출 함수
 */

export async function kobisMovieList () {

    const key = `0040f1f2d9faa21c2ea60d7d441943f9`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}`

    const movieList = await fetch(url);
    const jsonData = await movieList.json();

    return jsonData;

}


/**
 * KOBIS 박스오피스 정보 호출 함수
 */

export async function kobisBoxOffice()  {

    
    const key = `0040f1f2d9faa21c2ea60d7d441943f9`;
    const curPage = 1;
    const itemPerPage = 100;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`

    
    let kobis = await fetch(url);
    let jsonData = await kobis.json();

    return jsonData;
}


/**
 * KOBIS 영화 정보 상세 호출 함수
 */

export async function kobisMovieDetail (movieCd) {

    const key = `0040f1f2d9faa21c2ea60d7d441943f9`;
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;

    const movie = await fetch(url);
    const jsonData = await movie.json();

    return jsonData;

}
