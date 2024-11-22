/**
 * KOBIS 박스오피스 정보 호출 함수
 */

export async function kobisBoxOffice(type, searchDt)  {

    
    const key = `0040f1f2d9faa21c2ea60d7d441943f9`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`
    
    console.log(url);
    
    let kobis = await fetch(url);
    let jsonData = await kobis.json();

    return jsonData;
}
