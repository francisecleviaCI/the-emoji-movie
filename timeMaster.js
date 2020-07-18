const day = require('./day.js');

const intervalTimer = process.argv[2] 


for (let i = 0; i < day.length; i++){
    


const timeMaster = function(){
    console.log(day[i]); 
    
}
setInterval(timeMaster, intervalTimer);
}
    

