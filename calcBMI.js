function calcBMI() {
    var feet = parseFloat(document.getElementById("feet").value) || 0;
    var height = parseFloat(document.getElementById("inches").value) || 0;
    var weight = parseFloat(document.getElementById("weight").value) || 0;
    console.log(height);
    console.log(feet);
    console.log(weight);

    weight = parseFloat(weight) * 0.453592;
    height = (parseFloat(feet) * 0.3048) + (parseFloat(height) *0.0254);
    
    var BMI = weight/(height**2);
    console.log("BMI is: ", BMI);
    var string;
    if (BMI < 18.5 || BMI == 18.5)
        {
            var string = "Your BMI says you are underweight.";
        }
    else if((18.5 < BMI) && (BMI < 24.9) || (BMI == 24.9))
        {
            var string = "You are a healthy BMI!";
        }
    else if((25 < BMI) && (BMI < 29.9) || (BMI == 29.9))
        {
            var string = "Your BMI says you are overweight.";
        }
    else if ((BMI > 30) || (BMI == 30))
        {
            var string = "You are obese!";
        }
    
    document.getElementById("result").innerHTML = "BMI: " + BMI.toFixed(2) + "<br>" + string;
}
function reset() {
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "BMI: ";
}
