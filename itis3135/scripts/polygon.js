var number = prompt("The Macho Yankee Salamanders would like you to enter a number between 1-10");
validateEntry();    


function validateEntry(){
    number = Math.round(number);
    number = Math.abs(number);
    return number;
}

     


 while(number > 10 || number < -1 || Number.isInteger(number)==false){
    var number = prompt("It looks like you typed in an invalid number, The Macho Yankee Salamanders would like you to type a number between 1-10");
    validateEntry();
    }

getShape();
function getShape(){
    if(number==0){
        alert("A number with this many sides dosen't exsist");
    }else if(number == 1){
        alert("A Polygon with 1 sides is a Hexagon");
    } else if(number == 2){
        alert("A Polygon with 2 sides is a Digon");
    } else if(number == 3){
        alert("A Polygon with 3 sides is a Trigon");
    } else if(number == 4){
        alert("A Polygon with 4 sides is a Tetragon");
    } else if (number == 5){
        alert("A Polygon with 5 sides is a Pentagon");
    } else if (number == 6){
        alert("A Polygon with 6 sides is a Hexagon");
    } else if(number == 7){
        alert("A Polygon with 7 sides is a Heptagon");
    } else if(number == 8){
        alert("A Polygon with 8 sides is a Octagon");
    } else if(number == 9){
        alert("A Polygon with 9 sides is a Enneagon");
    } else if(number == 10){
        alert("A Polygon with 10 sides is a Decagon");
    }
        
    }

   //refrences
   
   //https://www.w3schools.com/js/js_function_invocation.asp
   