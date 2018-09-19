var canvas, ctx;
var HEIGHT, WIDTH;

HEIGHT = 400;
WIDTH = 400;

canvas = document.createElement("canvas"); 
canvas.width = WIDTH;
canvas.height = HEIGHT;

ctx = canvas.getContext("2d");

document.body.appendChild(canvas);


var colors = ["#FFF","#E3F09B", "rgba(255,255,255,0.5)", "#F6AE2D"];


//-------------------------------

var radius = 100;
var grd =  ctx.createRadialGradient(WIDTH/2, HEIGHT/2, radius * 0.3, WIDTH/2, HEIGHT/2, radius);
grd.addColorStop(0, colors[0]);
grd.addColorStop(0.4, colors[1]);
grd.addColorStop(1, colors[2]);


ctx.beginPath();
ctx.arc(WIDTH/2, HEIGHT/2, radius, 0, 2 * Math.PI, false);
ctx.fillStyle = grd;
ctx.fill();
ctx.closePath();

ctx.beginPath();

ctx.closePath();



