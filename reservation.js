"use strict";
/*
Maya Srimal
Lab7task2
This program creates a reservation
*/
// create handler for the submit event of the form
$(document).ready( () => {
$("#tabs").tabs();
    
$("#policies").button();
    $("#policies").click( () => 
    $("#dialog").dialog({ modal:true })
                         
    );
    
let isValid = true;
    
$("#arrival_date").datepicker({
        minDate: new Date(),
        maxDate: +90,
        showButtonPanel: true
    });

$("#reservation_form").submit((evt)=>{
    
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
	
	// move the focus to the first text box
	const date = document.getElementById("arrival_date").focus();
        
    const nights = document.getElementById("nights");
        nights.value = nights.value.trim();
        if(nights.value == "" || isNaN(nights.value))
        {
            //console.log("this if statement is running.");
             $("#nights").next().text("This field is required.");
            evt.preventDefault();
        }
        else{
            $("#nights").next().text("");
        }
        
         const name = document.getElementById("name");
        name.value = name.value.trim();
        if(name.value == "")
        {
            $("#name").next().text("This field is required.");
            evt.preventDefault();
        }
        else{
             $("#name").next().text("");
        }
        const email = document.getElementById("email");
        email.value = email.value.trim();
        if(email.value == "")
        {
            $("#email").next().text("This field is required.");
            evt.preventDefault();
        }  
       else if(!emailPattern.test(email.value))
       {
            $("#email").next().text("Must be valid email address.");
            evt.preventDefault();
        }
        else{
            $("#email").next().text("");
        }
    
        
        const phone = document.getElementById("phone");
        phone.value = phone.value.trim();
        if(phone.value == "")
        {
             $("#phone").next().text("This field is required.");
            evt.preventDefault();
        }
        else if(!phonePattern.test(phone.value))
        {
             $("#phone").next().text("Must be in format xxx-xxx-xxxx.");
            evt.preventDefault();
        }
        else{
        }
    
        
    });
    //remember to cancel if any errors
	if (isValid == false) {
            evt.preventDefault();
		}
});
// end submit

// end ready
