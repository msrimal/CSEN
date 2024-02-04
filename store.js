"using strict;"
//window.alert("connected");
//Maya Srimal
//create array of objects 
//each product is an object with item and price 
//{item: "itemname": price: 10}
var products = [

    {item: "Croissant", price: 10.00},
    {item: "Cheese croissant", price: 11.99},
    {item: "Strawberry danish", price: 11.00},
    {item: "Coffee", price: 10.00},
    {item: "Baguette", price: 12.00}
];


//declare any global variables
var receipt = document.getElementById("receipt").value;
var grandtotal = 0;
console.log("length is " + products.length);
//console.log(products[0]);
//console.log("item is " + products[3].item);
//console.log("price is " + products[3].price);

//display the inventory in a table on the webpage
var tableHTML = "<table>" +
                "<caption>MENU:</caption>" +
                "<tr><th>Item</th><th>Price</th></tr>";
//console.log(tableHTML);
for (var i = 0; i < products.length; i++){
   tableHTML += "<tr><td>" + products[i].item + "</td><td>" + products[i].price + "</td></tr>";
    }
tableHTML = tableHTML + "</table>";
//console.log(tableHTML);
document.getElementById("menu1").innerHTML = tableHTML;




function addItem()
{
    console.log("adding item");
   //function to add items to order
var item = document.getElementById("item").value;
console.log("item is " + item);
var qty = document.getElementById("qty").value;
if(qty == 0)
    {
        alert("Qty can not be 0.\n");
        return 0;
        
    }

console.log("qty is " + qty);
//console.log
//console.log("item is" )
var itemprice = findPrice(item);
console.log("price is " + itemprice);
//check if item is found
    if(itemprice== -1) {
        window.alert("item not found");
    }
       
else{
    //calculate the item total
var itemtotal = qty * itemprice;
    console.log("itemtotal is " + itemtotal);
//add item total to grand total
    grandtotal = grandtotal + itemtotal; 
    
document.getElementById("invoiceTotal").innerHTML = "Invoice Total $" + grandtotal;

document.getElementById("receipt").value += qty + " " + item + " at " + itemprice + " each = " + itemtotal + "\n";

}


}

function clearData()
{
document.getElementById("item").value = "";
document.getElementById("qty").value = "";
document.getElementById("invoiceTotal").innerHTML = "Invoice Total $";
document.getElementById("receipt").value = "";
    
}

//this function searches for a product and returns the price
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (var i = 0; i < products.length; i++)
    {
        if (products[i].item == useritem)
            return products[i].price;
    }
    //not found, return -1
    return -1;
    
}
