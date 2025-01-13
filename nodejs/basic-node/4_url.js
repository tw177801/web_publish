const url = require('url');

const {URL} = url;      // 구조분해 할당 
const myUrl = new URL('https://nodejs.org/en/learn/getting-started/introduction-to-nodejs');
// console.log('url ==>> ',url);
console.log('URL ==>>', URL);
console.log('myUrl', myUrl);
console.log('url.format()', url.format(myUrl));


