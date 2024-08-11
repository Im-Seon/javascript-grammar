let fs = require('fs');
let input = fs.readFileSync('dev/stdin8393').toString().split('\n');

const num = Number(input[0]);

/**
 * 등차수열의 합 공식: S = (n/2) * (a + l)
 * @param {*} number 항의 개수
 * @param {*} first 첫째 항
 * @param {*} last  마지막 항
 * @returns 
 */
function getSumOfArithmeticSequence(number, first, last){
    return (number / 2) * (first + last);
}

console.log(getSumOfArithmeticSequence(num, 1, num));