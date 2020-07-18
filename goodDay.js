const day = require('./day.js');


for (let i = day.length -1; i >= 0; i--){

    const goodDay = function(){
        console.log(day[i]); 
    }
    setInterval(goodDay, 1000);
    
}
    
    
    