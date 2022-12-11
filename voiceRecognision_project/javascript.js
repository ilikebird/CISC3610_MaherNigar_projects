window.addEventListener("load", () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
  
 //sizing the height and width
 canvas.height = window.innerHeight;
 canvas.width = window.innerWidth;

//This is for the circle
ctx.beginPath();
ctx.fillStyle = "black"
ctx.lineWidth = 5;
circle2 = ctx.arc(700, 200, 120, 3, 9 * Math.PI);
ctx.fill(circle2)
 });





  //End