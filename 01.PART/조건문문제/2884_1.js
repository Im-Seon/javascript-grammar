let fs = require('fs');
let input = fs.readFileSync('dev/stdin2884').toString().split('\n');

let line = input[0].split(" ");

const hour = Number(line[0]);
const minute = Number(line[1]);

function getSettingTime(hour, minute){
    minute -= 45;
    
    if(minute < 0){
        hour -= 1;
        minute += 60;
    } 

    if(hour < 0){
        hour += 24;
    }
    return {
        settingHour : hour,
        settingMinute : minute
    }
}
let {settingHour, settingMinute} = getSettingTime(hour, minute);

console.log(settingHour + " " + settingMinute);