var canvas, ctx;
var HEIGHT, WIDTH;

HEIGHT = 800;
WIDTH = 800;

canvas = document.createElement("canvas"); 
canvas.width = WIDTH;
canvas.height = HEIGHT;

ctx = canvas.getContext("2d");

document.body.appendChild(canvas);


var n = 0;
var c = 10;
var dots = {};
var angle = 137.5;

var dot = {
	x:0,
	y:0,
	radius:10,
	color:"#fff",
	draw: function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = this.color;
		ctx.noStroke;
		ctx.fill();
		ctx.closePath();
	}
};


update = function(){

	dots[n] = null;

	var a = n * angle;
	var r = c * Math.sqrt(n);
	dots[n] = dot;
	dots[n].x = r * Math.cos(a) + WIDTH/2;
	dots[n].y = r * Math.sin(a) + HEIGHT/2;
	dots[n].color = "hsl("+(n%360)+", 100%, 50%)";

	n++;
	
}

draw = function(){

	for(var i = 0; i < n; ++i){
		console.log(dots[i]);
		dots[i].draw();

	}


}

loop = function(){
	
	window.requestAnimationFrame(loop);
	
	update();

	draw();
	
}

loop();