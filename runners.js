/*
CodeCademy JS syntax pt 1 / conditionals 

background:
Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
Else:
Those exactly 18 yrs see registration desk (regardless of timing)
*/

let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true
let runnerAge = 19

if (runnerAge > 18 && earlyReg === true){
  raceNumber+=1000
}

if (runnerAge > 18 && earlyReg === true){
  console.log(`Start time for early registration adult runner #${raceNumber} is 9:30AM.`)
}
else if (runnerAge > 18 && earlyReg === false){
  console.log(`Start time for late registration adult runner #${raceNumber} is 11:00AM.`)
}
else if (runnerAge < 18){
  console.log(`Start time for youth runner #${raceNumber} is 12:30PM.`)
}
else {
  console.log(`Please see the registration desk.`)
}
