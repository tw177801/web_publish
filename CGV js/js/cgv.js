import { kobisBoxOffice } from "./kobis.js";

createMovieChartList();

/**
 * 
 * index -> 무비차트 리스트 생성 함수
 */

function createMovieChartList() {
    const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth()+1;
    // const day = date.getDate()-1;

    const searchDt = date.getFullYear().toString()
                        .concat(date.getMonth()+1,date.getDate()-1);

    console.log(searchDt);
    

    kobisBoxOffice('Daily', searchDt);
        .then()
        .catch();
}