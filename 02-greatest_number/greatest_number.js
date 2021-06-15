// define an arrow function that return the maximum between 3 random numbers
     
    // use a conditional statement inside the function to understand wich number is the greatest one


// declare 3 variables and assign random numbers to them

// call the function passing the numbers as arguments
//call the function inside the ${...}

let number1 = Math.ceil(Math.random()*100);
let number2 = Math.ceil(Math.random()*100);
let number3 = Math.ceil(Math.random()*100);

const greatestNumber=(x,y,z) => {
    if (number1>number2){
        return(number1);
    }
    else if (number2>number1){
        return(number2);
    }
    else{
        return(number3);
    }
}
console.log(`${number1,number2,number3} is the greatest number`); 
