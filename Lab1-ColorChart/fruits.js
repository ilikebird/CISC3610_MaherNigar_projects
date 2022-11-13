
var fruit = [
	{name:"Strawberry", quantity:15, color:"red"},
	{name:"Peach", quantity:10, color:"orange"},
    {name:"Banana", quantity:25, color:"Yellow"},
    {name:"Pear", quantity:10, color:"green"},
    {name:"Grape", quantity:20, color:"black"}
];

// extracting data from json object

const names = [];

const datas = [];

const colors = [];

// for loop to fill data into respective arrays

for(let i=0;i<fruit.length;i++)

{

names.push(fruit[i].name);

datas.push(fruit[i].quantity);

colors.push(fruit[i].color);

}

// getting chart element from html into javascript

var ctx = document.getElementById("chart");

var data = {

labels: names,

datasets: [{

label: 'Fruits',

data: datas,

backgroundColor: colors}]

}

var myChart = new Chart(ctx, {

type: 'bar',

data: data,

options: {

"hover": {

"animationDuration": 0

},

"animation": {

"duration": 1,

// this function is used to display text on the bars of chart

// if want to remove the text from the bars then remove this onComplete part

"onComplete": function() {

var chartInstance = this.chart,

ctx = chartInstance.ctx;

ctx.textAlign = 'center';

ctx.font = "20px Verdana";

ctx.textBaseline = 'bottom';

ctx.fillStyle = 'black';

this.data.datasets.forEach(function(dataset, i) {

var meta = chartInstance.controller.getDatasetMeta(i);

meta.data.forEach(function(bar, index) {

var data = dataset.data[index];

ctx.fillText(data, bar._model.x, bar._model.y + 30);

});

});

}},

scales: {

yAxes: [{

ticks: {

beginAtZero: true

}

}]

}}

});

