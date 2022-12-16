/*
countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value 
and console.logs it. Once the value is 0 it should log “DONE!” and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"

*/

function countDown(sec){
    let intervalId = setInterval(function(){
      sec--;
      if(sec <= 0){
        console.log('DONE!');
        clearInterval(intervalId);
      }
      else {
        console.log(sec);
      }
  
    },1000)
  }

/*
randomGame
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time 
that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log 
the number of tries it took before we found a number greater than .75.
*/


function randomGame(){
    let randomNum = 0;
    let runCount = 0;

    let intervalId = setInterval(function (){
        runCount++;
        randomNum = Math.random();
        if(randomNum > .75){
            console.log(`It took ${runCount} tries to get a random number over .75`);
            clearInterval(intervalId);
        }
    },1000)
}
