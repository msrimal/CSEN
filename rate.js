// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the form
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Validate the form before submitting
        if (validateForm()) {
            alert('Form submitted successfully!');
            // You can add additional logic here to handle the form submission
        } else {
            alert('Please fill in all required fields.');
        }
    });
});

function validateForm() {
    var requiredFields = document.querySelectorAll('.required input, .required textarea, .required select');
    var isValid = true;

    // Check if all required fields are filled
    requiredFields.forEach(function (field) {
        if (field.value.trim() === '') {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}
