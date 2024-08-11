let fs = require('fs');
let input = fs.readFileSync("dev/stdin2525").toString().split('\n');

let [hour, minute] = input[0].split(" ").map(Number);
let cookingTime = Number(input[1]);

function getCookigTime(hour, minute, cookingTime){
    let totalMinute = hour * 60 + minute + cookingTime;
    totalMinute %= 1440;

    return {
        endHour : parseInt(totalMinute / 60),
        endMinute : totalMinute % 60
    }
}

let {endHour, endMinute} = getCookigTime(hour, minute, cookingTime);
console.log(endHour, endMinute);