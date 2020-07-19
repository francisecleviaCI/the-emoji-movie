const day = require('./day.js');

const intervalTimer = process.argv[2] 


let i = -1;


const timeMaster = function(){
    i = i + 1
    console.log(day[i]); 

        
}
//*** Run and then cancel*/
const amazingTimer = setInterval(timeMaster, intervalTimer); //This will run every second.

const stopPlaying = function(){//This is the cancellation function
    clearInterval(amazingTimer)
}
setTimeout(stopPlaying, intervalTimer * 12)//This function runs the cancellation function and stops the repetition after 12 seconds.
