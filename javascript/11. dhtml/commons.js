/**
 * 
 * 공통 모듈 저장
 */

/** sum() */
export default function sum(number1, number2) {
    return parseInt(number1) + parseInt(number2); 
}

/** sub() */
export function sub(number1, number2) {
    return parseInt(number1) - parseInt(number2); 
}

/** mul() */
export function mul(number1, number2) {
    return parseInt(number1) * parseInt(number2); 
}

/** div() */
export function div(number1, number2) {
    return parseInt(number1) / parseInt(number2); 
}