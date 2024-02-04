//comment header
/*
    Maya Srimal
    lab4task2
    This program determines the name and scores of students
    Age: 16
*/
"use strict";
//arrays for student data
const names = [];
const scores = [];

const $ = selector => document.querySelector(selector); 
const name = $("#name");
const score = $("#score");
let spanName = $("#required");
let spanScore = $("#required2");
let table = $("#scores_table");

//create addStudent function
function addStudent() 
{
    //valid values for both scores and names
    if (name.value == "") {
       spanName.textContent = "Missing name";
    }
    if (score.value <= 0 || score.value >= 100) {
        spanScore.textContent = "Invalid score";
    }
    else {
        //build table for titles
        let tableHTML = "<table>" + "<tr><th>Name</th><th>Score</th></tr>";
        console.log(tableHTML);
   names[names.length] = name.value;
        console.log(name.value);
   scores[scores.length] = score.value;
        console.log(score.value);
        
for (let i = 0; i < names.length; i++){
tableHTML += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    console.log(score.value);
};
        tableHTML = tableHTML;
            //console.log(tableHTML);
table.innerHTML = tableHTML;
    

    name.value = "";
    score.value = "";
    }

};
let results = $("#results");
let total = 0;
let i = 0;


//create displayResults function
function displayResults () {
let highestScore = 0;
let highestScorename = "";
    for (let i in scores) {
        total = total + parseFloat(scores[i]);

        if(highestScore < scores[i]){
            highestScore = scores[i];
            highestScorename = names[i];
        }
    }  
let averageScore = 0;
    
    averageScore = parseFloat(total/scores.length);
averageScore = "Average score = " + averageScore.toFixed(1);
    
    results.innerHTML = averageScore;
    
    highestScore = "<p>" + highestScorename + " has highest score of " + highestScore + "</p>";
    
    results.innerHTML += highestScore;
}


function clearData() {
    //restore table 
    let tableHTML = "<table>" + "<tr><th>Name</th><th>Score</th></tr>";
    table.innerHTML = "";
    //clear results
    let results = $("#results");
    results.innerHTML = "";
    //clear names and score
    names.length = 0;
    scores.length = 0;
    total = 0;
    
}
document.addEventListener("DOMContentLoaded", () => {	

$("#add_student").addEventListener("click",addStudent);

$("#statistics").addEventListener("click",displayResults);

$("#clear").addEventListener("click",clearData);
    

});



