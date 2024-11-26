/** KMDB API 호출 */


export async function kmdb(type, value, title) {
const serviceKey = `I56WH5ND32XBK64E5N41`;
let url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;

url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;    
url += `&${type}=${value}&title=${title}`;
url += `&ServiceKey=${serviceKey}`;

let api = await fetch(url);
let jsonData = await api.json();

return jsonData;

}

// https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=I56WH5ND32XBK64E5N41