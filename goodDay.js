const day = require('./day.js');

let i = day.length;


const goodDay = function(){
    i = i - 1
    console.log(day[i]); 

        
}
//*** Run and then cancel*/
const amazingTimer = setInterval(goodDay, 1000); //This will run every second.

const stopPlaying = function(){//This is the cancellation function
    clearInterval(amazingTimer)
}
setTimeout(stopPlaying, 12000)//This function runs the cancellation function and stops the repetition after a specified time.
    