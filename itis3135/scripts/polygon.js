var number = prompt("The Macho Yankee Salamanders would like you to enter a number between 1-10");
validateEntry();    
 

function validateEntry(){
    number = Math.round(number);
    number = Math.abs(number);
    return this;
}

     

 while(number > 10 || number < 0){
    var number = prompt("Error: The Macho Yankee Salamanders would like you to enter a number between 1-10");
    validateEntry();
    }


function getShape(){
    if(number == 1){
        alert("Hexagon");
    } else if(number == 2){
        alert("Digon");
    } else if(number == 3){
        alert("Trigon");
    } else if(number == 4){
        alert("Tetragon");
    } else if (number == 5){
        alert("Pentagon");
    } else if (number == 6){
        alert("Hexagon");
    } else if(number == 7){
        alert("Heptagon");
    } else if(number == 8){
        alert("Octagon");
    } else if(number == 9){
        alert("Enneagon");
    } else if(number == 10){
        alert("Decagon");
    }
        
    }

   //refrences
   
   //https://www.w3schools.com/js/js_function_invocation.asp
   