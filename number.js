"using strict;"
//window.alert('connected');
//declare variables
var fact = document.getElementById("fact");
var factText = document.getElementById("factText");

var number = document.getElementById("num");

number.addEventListener('input', getData);

function getData() 
{
    //console.log("getdata");
    //clear out display section
    fact.style.display = "none";
    factText.innerHTML = "";
    //get the number
    var mynum = number.value;
    console.log(mynum);
    if (mynum != ""){
        //make a request with mynum
        //set up url
        var url = "http://numbersapi.com/" +mynum;
        console.log("url is " + url);
        //create AJAX object
        var xhr = new XMLHttpRequest();
        //set up response handler
        xhr.addEventListener("load", responseReceivedHandler);
        //open the connection
        xhr.open('GET', url); 
        //send the data
        xhr.send();
    }//end if
}//end getData

function responseReceivedHandler(){
    //check status
    if(this.status == 200){
        console.log(this.responseText);
        factText.innerHTML = this.responseText;
        fact.style.display = "block";
    }
    
    
}