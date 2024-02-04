"use strict";

// Wrap your code inside the document ready function to ensure it runs after the DOM is fully loaded
$(document).ready(function () {

    // Apply fade effect on div click
    $("div").on("click", function () {
        $(this).fadeOut(300).fadeIn(300);
    });

    // Calculate button click event
    $("#calculate").on("click", function () {
        calculateCalories();
    });

    // Clear button click event
    $("#clear").on("click", function () {
        clearInputs();
    });

});

function calculateCalories() {
    // Retrieve values from input fields
    var fatGrams = parseFloat($("#fGrams").val()) || 0;
    var carbGrams = parseFloat($("#cGrams").val()) || 0;
    var proteinGrams = parseFloat($("#pGrams").val()) || 0;

    // Calculate total calories
    var totalCalories = (fatGrams * 9) + (carbGrams * 4) + (proteinGrams * 4);

    // Calculate fat percentage
    var totalGrams = fatGrams + carbGrams + proteinGrams;
    var fatPercentage = (fatGrams / totalGrams) * 100;

    // Update the disabled input fields
    $("#tCal").val(totalCalories.toFixed(2));
    $("#fPercentage").val(fatPercentage.toFixed(2) + "%");
}

function clearInputs() {
    // Clear all input fields
    $("input[type='text']").val("");
    $("#tCal, #fPercentage").val("").attr("disabled", "disabled");
}
