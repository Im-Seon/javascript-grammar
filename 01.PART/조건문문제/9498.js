let fs = require('fs');
let input = fs.readFileSync('dev/stdin9498').toString().split('\n');

const score = Number(input[0]);

function getGrade(score){
    if(90 <= score && score <= 100){
        return "A";
    } else if(80 <= score && score <= 89){
        return "B";
    } else if(70 <= score && score <= 79){
        return "C";
    } else if(60 <= score && score <= 69){
        return "D";
    } else {
        return "F";
    }
}

let grade = getGrade(score);
console.log(grade);