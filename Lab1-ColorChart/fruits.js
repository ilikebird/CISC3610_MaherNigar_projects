
var ctx = document.getElementById("chart");
var config = {}
var canvas = new chart(canvasElement, config);

//Storing the following values in a JSON array in JavaScript
var fruit = [
	{name:"Strawberry", quantity:15, color:"green"},
	{name:"Peach", quantity:10, color:"red"},
    {name:"Banana", quantity:25, color:"pink"},
    {name:"Pear", quantity:10, color:"blue"},
    {name:"Grape", quantity:20, color:"yellow"}
];

//Creating empty arrays to store these values in sepatae values.
let fruitNames  = [];
let quantity = [];
let colors = [];

//interating through the fruit array and adding the values in our new list
for (let i = 0; i < myObj.length; i++) {
    fruitNames.push(fruit[i].name);
    quantity.push(fruit[i].quantity);
    colors.push(fruit[i].color);
   
  }

  //........

 