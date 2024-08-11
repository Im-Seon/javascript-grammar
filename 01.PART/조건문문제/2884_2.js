let fs = require('fs');
let input = fs.readFileSync('dev/stdin2884').toString().split('\n');

let line = input[0].split(" ");

const hour = Number(line[0]);
const minute = Number(line[1]);

function getSettingTime(hour, minute){
    if(minute < 45){ // 분이 45분 미만이라면
        hour -= 1;
        minute += 15;
        
        if(hour < 0){ // 시가 0시 보다 작아지면
            hour = 23;
        }
    }
    else {
        minute -= 45;
    }

    return {
        settingHour : hour,
        settingMinute : minute
    }
}
let {settingHour, settingMinute} = getSettingTime(hour, minute);

console.log(settingHour + " " + settingMinute);