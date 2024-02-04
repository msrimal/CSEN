"use strict";
/*
Maya Srimal
Lab7Task1
This program creates an email list
*/

$(document).ready( () => {

    // handle click on Join List button
    $("#email_form").submit( evt => {
        let isValid = true;

        // validate the first email address
        const emailPattern = 
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email1 = $("#email_1").val().trim();
        if (email1 == "") { 
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email1) ) {
            $("#email_1").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        }
        $("#email_1").val(email1);

        // validate the second email address
        const email2 = $("#email_2").val().trim();
        if (email2 == "") { 
            $("#email_2").next().text("This field is required.");
            isValid = false; 
        } else if (email1 != email2) { 
            $("#email_2").next().text("The email addresses must match.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }
        $("#email_2").val(email2);
        
        // validate the first name entry 
        const firstName = $("#first_name").val().trim(); 
        if (firstName == "") 
        {
            $("#first_name").next().text("This field is required.");
            isValid = false;
            console.log("This is" + firstName);
        } else 
        {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);

        // validate the last name entry
        const lastName = 
        $("#last_name").val().trim();
        if (lastName == "") 
        {
            $("#last_name").next().text("This field is required.");
            isValid = false;
            console.log("This is" + lastName);
        } else 
        {
            $("#last_name").next().text("");
        }
         $("#last_name").val(lastName);
        
        // validate the state entry
		const state = $("#state").val().trim();
		if (state == "") {
			$("#state").next().text("This field is required.");
			isValid = false;
		} else if ( state.length != 2 ) {
			$("#state").next().text("Use 2-character code.");
			isValid = false;
		} else {
			$("#state").next().text("");
		}
		$("#state").val(state);
			
		// validate the zip-code entry
        const zipCode = $("#zip_code").val().trim();
        if (zipCode == "") {
			$("#zip_code").next().text("This field is required.");
			isValid = false;
        }
        else if (zipCode.length != 5){
            $("#zip_code").next().text("Use a 5 digit code.");
            isValid = false;
        }
        else if (isNaN(zipCode)){
            $("#zip_code").next().text("Must be numbers.");
            isValid = false;
        }
        else {
            $("#zip_code").next().text("");
        }
        $("#zip_code").val(zipCode);
        
    
     if(!$("input[name='web']:checked").val() && !$("input[name='java']:checked").val() && !$("input[name='net']:checked").val())
     {
         
            console.log("no checked boxes");
         
         $("#net").next().text("One checkbox must be selected.");
         
         isValid = 0;
     }
                else if($("input[name='java']:checked").val() || $("input[name='net']:checked").val() || $("input[name='web']:checked").val()){
                    console.log("checked.");
                
            $("#net").next().text("*");
                }

        
        
		// prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
            evt.preventDefault();
		}
    });

    // handle click on Reset Form button
    $("#reset").click( () => {
        // clear text boxes
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");

        // reset span elements
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#first_name").next().text("*");
        $("#zip_code").next().text("*");
        $("#state").next().text("*");
        $("#net").next().text("*");
        $("#email_1").focus();
    });

    // move focus to first text box
});