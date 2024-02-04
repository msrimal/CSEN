"use strict";
/*
Maya Srimal
Lab2Task 2
This program calculates average test scores, highest score, and your grade.
*/
let highestScore = 0;
const scores = [];
let total = 0;
// use do-while loop to get the scores from the user
let score = 0;
do {
    score = parseInt(
        prompt("Enter a test score, or enter -1 to end scores", -1));

    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must by a valid number from 0 through 100");
    }
}
while(score != -1);

if (scores.length > 0) {
    // use a for-in loop to add each score to total, and display score
    for (let i in scores) {
        total = total + scores[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
        if(highestScore < scores[i]){
            highestScore = scores[i];
        }
    
    }
    /*let i = 0;
    while(i < scores.length){
        if(highestScore < scores[i]){
            highestScore = scores[i];
        }
        i++;
    } */
  document.write("Highest score is " + highestScore);
        console.log(highestScore);  
   
 //calculate and display the average
    let average = parseFloat(total/scores.length);
    document.write(`<p>Average score is ${average.toFixed(1)}</p>`);
}
let grade = 0;
let average = parseFloat(total/scores.length);
if(average < 60){
   grade = "F";
    document.write("Grade is " + grade);
    console.log(grade);
}
if(average >= 60 && average < 70){
    grade = "D";
    document.write("Grade is " + grade);
    console.log(grade);
}
if(average >= 70 && average < 80){
    grade = "C";
    document.write("Grade is " + grade);
    console.log(grade);
}
if(average >= 80 && average < 90){
    grade = "B";
    document.write("Grade is " + grade);
    console.log(grade);
}
if(average >= 90 && average <= 100){
    grade = "A";
    document.write("Grade is " + grade);
    console.log(grade);
}



    //for-of loop for each score in the array
   /* for (let i = 0; i < scores.length; i++) {
        if(scores[i] > highestScore){
            highestScore = scores[i];
            document.write("Highest score is " + highestScore);
        }
    }*/