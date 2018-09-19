
var canvas, ctx;

var HEIGHT, WIDTH;
var COLOR;

HEIGHT = 480;
WIDTH = 640;
COLOR = "#FFF";


var KEYS = {
	UP:false,
	DOWN:false
}


var KEYS_CODE = {
	UP:38,
	DOWN:40
}

canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.id = "board";
ctx = canvas.getContext("2d");

document.body.appendChild(canvas);




function setMoviment(event){


	switch(event.keyCode){
		case KEYS_CODE.UP:	

			KEYS.UP = true;
			break;
		case KEYS_CODE.DOWN:
			KEYS.DOWN = true;
			break;
		default:
			break;

	}

}

resetMoviment = function(event){


	switch (event.keyCode){
		case KEYS_CODE.UP:
			KEYS.UP = false;
			break;
		case KEYS_CODE.DOWN:
			KEYS.DOWN = false;
			break;
	}

}




document.addEventListener("keydown", setMoviment);
document.addEventListener("keyup", resetMoviment);





var player = {
	x:0,
	y:0,
	width: 20,
	height:100,
	speed: 5,
	update: function(){


		if(KEYS.UP){
			if(this.y - this.speed >= 0){
				this.y -= this.speed;
			}
		}

		if(KEYS.DOWN){
			if(this.y + this.speed + this.height <= HEIGHT){
				this.y += this.speed;
			}
		}

	},
	draw: function(){
		ctx.fillStyle = COLOR;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		
	}

}



var ai = {
	x:0,
	y:0,
	width: 20,
	height:100,
	speed: 5,
	update: function(){

		if(((ball.y + (ball.size/2)) < (this.y + this.height/2)) && (this.y >= 0)){
			this.y -= this.speed;
		}


		if(((ball.y + (ball.size/2)) > (this.y + this.height/2)) && (this.y + this.height <= HEIGHT)){
			this.y += this.speed;
		}

	},
	draw: function(){
			ctx.fillStyle = COLOR;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	
	}

}




var ball = {
	x:0, 
	y:0,
	size:20,
	dy:10,
	dx:10,
	color: "#FF5722",
	update: function(){
		

		if((this.x + this.dx + this.size > WIDTH)||(this.x + this.dx < 0)){
			this.dx = -this.dx;
		}



		if((this.y + this.dy + this.size> HEIGHT)||(this.y + this.dy < 0)){
			this.dy = -this.dy;
		}


		this.x += this.dx;
		this.y += this.dy;
	}, 
	draw: function(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.size, this.size);
		
	
	}
}


intersectsAI = function(a, b) {
	

	if(a.x <= b.x + b.width){
		if((a.y > b.y) && (a.y < b.y + b.height)){
		console.log("colides width AI");
		a.dx = -a.dx;

		}
	}
		
}







intersectsPlayer = function(a, b) {
	
}



update = function(){
	intersectsPlayer(ball, player);
	intersectsAI(ball, ai);
	ball.update();
	player.update();
	ai.update();
}


draw = function(){

	ctx.beginPath();
	ctx.moveTo(WIDTH/2, 0);
	ctx.lineTo(WIDTH/2, HEIGHT);
	ctx.lineWidth = 2;
	ctx.strokeStyle = COLOR;
	ctx.setLineDash([20,20]);
	ctx.stroke();
	ctx.closePath();


	player.draw();
	ai.draw();

	ball.draw();
}



loop = function(){

	ctx.clearRect(0,0, WIDTH, HEIGHT);

	window.requestAnimationFrame(loop);

	update();
	draw();

}



main = function(){

	ball.x = (WIDTH - ball.size)/2;
	ball.y = (HEIGHT - ball.size)/2;

	player.x = WIDTH - player.width;
	player.y = (HEIGHT - player.height)/2;

	ai.x = 0;
	ai.y = (HEIGHT - ai.height)/2;


	loop();
}

main();