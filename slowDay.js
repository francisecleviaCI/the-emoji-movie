const day = require('./day.js');

let i = -1;


const slowDay = function(){
    i = i + 1
    console.log(day[i]); 

        
}
//*** Run and then cancel*/
const amazingTimer = setInterval(slowDay, 3000); //This will run every second.

const stopPlaying = function(){//This is the cancellation function
    clearInterval(amazingTimer)
}
setTimeout(stopPlaying, 36000)//This function runs the cancellation function and stops the repetition after a specified time..