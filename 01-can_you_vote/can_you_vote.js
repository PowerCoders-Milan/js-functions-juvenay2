// define a function that will check if I can vote or not
// define a variable legalAge

// create if else statement that console.log() if you can vote or not
age = Math.ceil(Math.random()*100);

 const canIVote = age => { 
     legalAge = 18;
    if (age>=legalAge) {
       return console.log(`hai ${age} anni, e sei maggiorene. Puoi votare`);
    } else {
       return console.log(`hai ${age} anni, quindi sei minorenne. Non puoi votare`);
    }
}

canIVote(age);
// define a variable for your age

// call the function and see if you can vote