let fs = require('fs');
let input = fs.readFileSync("dev/stdin2525").toString().split('\n');

let [hour, minute] = input[0].split(" ").map(Number);
let cookingTime = Number(input[1]);

function getCookigTime(hour, minute, cookingTime){
    hour += parseInt(cookingTime / 60);
    minute += cookingTime % 60;

    if(minute >= 60){
        hour += 1;
        minute -= 60;
    }

    if(hour >= 24){
        hour -= 24;
    }

    return {
        endHour : hour,
        endMinute : minute
    }
}

let {endHour, endMinute} = getCookigTime(hour, minute, cookingTime);
console.log(endHour, endMinute);