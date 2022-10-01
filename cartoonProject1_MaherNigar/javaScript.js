window.addEventListener("load", () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
  
 //sizing the height and width
 canvas.height = window.innerHeight;
 canvas.width = window.innerWidth;
  
  
 //cloud
 ctx.beginPath();
 ctx.fillStyle = "#D6EAF8"
 ctx.arc(150, 155, 155, 3, 2 * Math.PI);
 ctx.fill();
  
 ctx.beginPath();
 ctx.fillStyle = "#D6EAF8"
 ctx.arc(300, 155, 155, 3, 2 * Math.PI);
 ctx.fill();
  
 ctx.beginPath();
 ctx.fillStyle = "#D6EAF8"
 ctx.arc(440, 155, 155, 3, 2 * Math.PI);
 ctx.fill();
  
 ctx.beginPath();
 ctx.fillStyle = "#D6EAF8"
 ctx.arc(440, 155, 155, 3, 2 * Math.PI);
 ctx.fill();
  
 //sun
 //This is the sun
 //This is for the circle
 ctx.beginPath();
 ctx.fillStyle = "#E67E22"
 ctx.lineWidth = 5;
 circle = ctx.arc(60, 160, 100, 1, 5 * Math.PI);
 ctx.fill(circle)
  
 //moon
 //This is the sun
 //This is for the circle
 ctx.beginPath();
 ctx.fillStyle = "#FAE5D3"
 ctx.lineWidth = 5;
 circle = ctx.arc(900, 50, 100, 1, 5 * Math.PI);
 ctx.fill(circle)
  
 //loop
 ctx.beginPath();
 ctx.lineWidth = 2
 for (var y = 500; y < 1300; y += 18) {
  ctx.strokeStyle = '#ff3547'
    addLineSubPath(ctx, y);
 }
 ctx.stroke();
  
 function addLineSubPath(ctx, y) {
  ctx.strokeStyle = '#ff3547'
    ctx.moveTo(1450, y);
    ctx.lineTo(300, y);
}
 
//Drawing a tree
ctx.beginPath();
ctx.strokeStyle = "brown"
ctx.lineWidth = 40;
ctx.moveTo(1135, 80);//length and width
ctx.lineTo(1135, 450);//width and length
ctx.stroke();
 
//this is for mountain
ctx.beginPath();
ctx.strokeStyle = "green"
ctx.lineWidth = 40;
ctx.moveTo(0, 450);//length and width
ctx.lineTo(1440, 450);//width and length
ctx.stroke();
 
//this is for mountain
ctx.beginPath();
ctx.strokeStyle = "green"
ctx.lineWidth = 40;
ctx.moveTo(0, 450);//length and width
ctx.lineTo(1440, 450);//width and length
ctx.stroke();
 
//this is for mountain
ctx.beginPath();
ctx.strokeStyle = "green"
ctx.lineWidth = 40;
ctx.moveTo(0, 450);//length and width
ctx.lineTo(1440, 450);//width and length
ctx.stroke();
 
//half circle for mountain
ctx.beginPath();
ctx.fillStyle = "green"
ctx.arc(250, 450, 150, 3, 2 * Math.PI);
ctx.fill();
 
//half circle for mountain
ctx.beginPath();
ctx.fillStyle = "green"
ctx.arc(542, 450, 150, 3, 2 * Math.PI);
ctx.fill();
 
//half circle for mountain
ctx.beginPath();
ctx.fillStyle = "green"
ctx.arc(960, 435, 155, 3, 2 * Math.PI);
ctx.fill();
 
//half circle for mountain
ctx.beginPath();
ctx.fillStyle = "green"
ctx.arc(1270, 435, 155, 3, 2 * Math.PI);
ctx.fill();
 
// circle for tree
ctx.beginPath();
ctx.fillStyle = "green"
ctx.arc(1135, 155, 155, 3, 2 * Math.PI);
ctx.fill();
 
//This is for the circle
ctx.beginPath();
ctx.fillStyle = "black"
ctx.lineWidth = 1;
circle = ctx.arc(700, 200, 131, 1, 9 * Math.PI);
ctx.fill(circle)
 
//This is for the circle
ctx.beginPath();
ctx.fillStyle = "hotpink"
ctx.lineWidth = 5;
circle2 = ctx.arc(700, 200, 120, 3, 9 * Math.PI);
ctx.fill(circle2)
 
//This is for the circle
ctx.beginPath();
ctx.fillStyle = "black"
ctx.lineWidth = 5;
circle = ctx.arc(700, 200, 100, 2, 9 * Math.PI);
ctx.fill(circle)
 
//This is for rectengle
ctx.strokeStyle = "white"
ctx.lineWidth = 8;
rec = ctx.strokeRect(672,140,55,55);
 
//This is for line   
   ctx.strokeStyle = "gray"
   ctx.moveTo(600, 220);
   ctx.lineTo(798, 220);
   ctx.stroke();
   ctx.moveTo(700, 300);
   ctx.lineTo(700, 220);
   ctx.stroke();
 
//This is for body rectengle
ctx.strokeStyle = "hotpink"
ctx.lineWidth = 8;
ctx.fillStyle = "hotpink"
rec2 = ctx.fillRect(600,308,210,205);
ctx.stroke();
 
// right hand
ctx.beginPath();
ctx.strokeStyle = "hotpink"
ctx.lineWidth = 40;
ctx.moveTo(900, 500);//length and width
ctx.lineTo(800, 310);//width and length
ctx.stroke();
//left hand
ctx.beginPath();
ctx.strokeStyle = "hotpink"
ctx.lineWidth = 40;
ctx.moveTo(380, 315);//length and width
ctx.lineTo(610, 317);//width and length
ctx.stroke();
 
//right leg
ctx.beginPath();
ctx.strokeStyle = "hotpink"
ctx.lineWidth = 80;
ctx.moveTo(760, 500);//length and width
ctx.lineTo(785, 850);//width and length
ctx.stroke();
 
//right leg
ctx.beginPath();
ctx.strokeStyle = "hotpink"
ctx.lineWidth = 80;
ctx.moveTo(650, 500);//length and width
ctx.lineTo(640, 850);//width and length
ctx.stroke();
 
//This is for the circle shoes
ctx.beginPath();
ctx.fillStyle = "black"
ctx.lineWidth = 5;
circle = ctx.arc(640, 825, 45, 2, 9 * Math.PI);
circle = ctx.arc(785, 820, 45, 2, 9 * Math.PI);
ctx.fill(circle)
 
//This is for the circle hand
ctx.beginPath();
ctx.fillStyle = "black"
ctx.lineWidth = 5;
circle = ctx.arc(905, 510, 25, 2, 9 * Math.PI);
circle = ctx.arc(370, 315, 25, 2, 9 * Math.PI);
ctx.fill(circle)
 
//This is for water
ctx.beginPath();
ctx.fillStyle = "#87CEEB"
//ctx.lineWidth = 2000
ctx.moveTo(0,300);
water = ctx.bezierCurveTo(900, 800, 800, 800, 20, 11050);
ctx.fill(water);
 
 
//house
ctx.beginPath();
ctx.fillStyle = '#d89967'
ctx.rect(1150, 600, 270, 210);
ctx.fill();
//door
ctx.beginPath();
ctx.fillStyle = '058085'
ctx.rect(1200, 700, 175, 110);
ctx.fill();
 
ctx.beginPath();
ctx.strokeStyle = "#058085"
ctx.lineWidth = 30;
ctx.moveTo(1420, 600);//length and width
ctx.lineTo(1275, 480);//width and length
ctx.stroke();
 
ctx.beginPath();
ctx.strokeStyle = "#058085"
ctx.lineWidth = 30;
ctx.moveTo(1150, 600);//length and width
ctx.lineTo(1280, 480);//width and length
ctx.stroke();
});
 
 
 