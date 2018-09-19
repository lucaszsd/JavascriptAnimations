var canvas, ctx;
var HEIGHT, WIDTH;

HEIGHT = 400;
WIDTH = 400;

canvas = document.createElement("canvas"); 
canvas.width = WIDTH;
canvas.height = HEIGHT;

ctx = canvas.getContext("2d");

document.body.appendChild(canvas);

var colors_sky = ["#C6C013","#EF8A17","#EF2917", "#008148", "#80CED7", "#279AF1"];

var size = 60;

/*while(size > 10){

	size--;

}
*/

ctx.translate(WIDTH/2, HEIGHT);


var angle = Math.PI/6;

angulo = function(e){
	angle += e.wheelDelta;
}

document.addEventListener("wheel", angulo);



linha = function(size){

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(0, -size);
	ctx.strokeStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.closePath();


	ctx.translate(0, -size);

	size = size * 0.8;

	if(size > 10){
		ctx.save();
		ctx.rotate(angle);
		linha(size);
		ctx.restore();
		ctx.save();
		ctx.rotate(-angle);
		linha(size);
		ctx.restore();
	}

	

}

linha(size);

loop = function(){
	ctx.clearRect(0,0, WIDTH, HEIGHT);

	window.requestAnimationFrame(loop);
	

}