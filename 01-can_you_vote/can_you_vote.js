// define a function that will check if I can vote or not
// define a variable legalAge

// create if else statement that console.log() if you can vote or not
 const canIVote = age => {
     age = 18;
     legalAge = Math.ceil(Math.random()*100)
    if (age<=legalAge) {
       return(console.log(`hai ${legalAge} anni, e sei maggiorene. Puoi votare`));
    } else {
       return(console.log(`hai ${legalAge} anni, quindi sei minorenne. Non puoi votare`));
    }
}

canIVote(10);
// define a variable for your age

// call the function and see if you can vote