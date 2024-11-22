
initForm();

function initForm() {
    const output = `
        <h1>일별 박스 오피스</h1>
        <div>
            <label>검색일자</label>
            <input type="text" id="searchDt" placeholder="예시)20241122">

            <button type="button" id="searchBtn">Search</button>
        </div>
    `;

    document.querySelector("body").innerHTML = output;

    /** Search button event add */
    let searchButton =  document.querySelector("#searchBtn");
    searchButton.addEventListener('click', ()=>{
        // alert('검색버튼 클릭');
        //searchDt 입력창의 유효성 체크

        let searchDt = document.querySelector('#searchDt');
        if(searchDt === '') {
            
            alert('검색일자를 입력해주세요');
            searchDt.focus();
        }
        
        // 일별 박스오피스 정보 출력
        searchBoxOffice(searchDt.value);
        

    });

} // end of initForm

/**
 * KOBIS 박스오피스 정보 호출 함수
 */

async function kobsBoxOffice(searchDt) {
    const key = `0040f1f2d9faa21c2ea60d7d441943f9`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${searchDt}`
    
    let kobis = await fetch(url);
    let daily = await kobis.json();

    return daily;
}


/**
 * 일별 박스오피스 정보 화면 출력
 */

function searchBoxOffice(searchDt) {

    kobsBoxOffice(searchDt) // Promise 객체로 리턴
        .then((result) => {
            
            
            console.log(result.boxOfficeResult.boxofficeType);
            console.log(result.boxOfficeResult.showRange);
            console.log(result.boxOfficeResult.dailyBoxOfficeList.length);

        })

        .catch();

    

    
} 
// function searchBoxOffice(searchDt) {
//     const key = `0040f1f2d9faa21c2ea60d7d441943f9`;
//     const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${searchDt}`
//     let kobis = await fetch(url);
//     let daily = await kobis.json();
// } 