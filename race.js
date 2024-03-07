let raceNum= Math.floor(Math.random() * 1000);
const registeredEarly = false;
let runnerAge = 18;
if (runnerAge > 18 && registeredEarly ) {
   raceNum += 1000;
}
if(runnerAge > 18 && registeredEarly ){
    console.log(`Racer number: ${raceNum} will race at 9:30 am.`);
}
else if(runnerAge > 18 && !(registeredEarly)){
    console.log(`Racer number: ${raceNum} will race at 11:00 am.`);
}
 else if(runnerAge < 18 ){
    console.log(`Racer number: ${raceNum} will race at 12:30 pm.`);
}
else{
    console.log('You should see the registration desk.');
}