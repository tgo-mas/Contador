var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener ("click",
    function increment(){
        if(currentNumber < 10){
            currentNumber++;
            currentNumberWrapper.innerHTML = currentNumber;
        }
        if(currentNumber >= 0){
            currentNumberWrapper.classList.remove("negative");
        }
    }
)

decrement.addEventListener ("click", 
    function decrement(){
        if(currentNumber > -10){
            currentNumber--;
            currentNumberWrapper.innerHTML = currentNumber;
        }
        if(currentNumber < 0){
            currentNumberWrapper.classList.add("negative");
        }
    }
)