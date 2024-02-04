"use strict";
 /*
Maya Srimal
Lab2Task 1
This program calculates the future value.
*/
// get investment amount - loop until user enters a number
let investment = null;
let again = "y";
 do{   
    do {
    investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx" + "(Must be valid positive number)", 10000));
    }
    while ( isNaN(investment) || investment <= 0 );
    // get interest rate - loop until user enters a number
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x" + "(Must be valid positive number, and must be between 1 and 14)", 7.5));
    }
    while ( isNaN(rate) || rate <= 0 || rate >= 15);
     
    // get number of years - loop until user enters a number
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years" + "(Must be valid positive number)", 10));
    }
    while ( isNaN(years) || years <= 0 );
     
     document.write("<p><strong>Investment amount = " + investment + " Interest rate = " + rate + " Years = " + years + "</strong></p>");
     
     let d = 0;
     let interest = investment * rate / 100;
     d += interest;
     let value = interest + investment;
     let i = 1;
 document.write("Year=1 Interest=" + interest.toFixed(2) + " Value=" + value.toFixed(2) + "<br>");
     
    // calulate future value
    for (let i = 2; i <= years; i++ ) {
        interest = value * rate / 100;
        d += interest;
        value = interest + value;
        document.write("Year=" + (i) + " Interest=" + interest.toFixed(2) + " Value=" + value.toFixed(2) + "<br>");
    }

    // display results

    
                   
    again = prompt("Repeat entries? (y/n)", "y");
 }
while (again == "y");
