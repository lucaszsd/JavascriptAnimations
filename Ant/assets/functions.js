var canvas, ctx;
var HEIGHT, WIDTH;
var x, y;
var dir;

HEIGHT = 400;
WIDTH = 400;
RESOLUTION = 20;
size = WIDTH/RESOLUTION;

cell = new Array(size);

canvas = document.createElement("canvas"); 
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx = canvas.getContext("2d");
document.body.appendChild(canvas);


setup = function(){

	for(var i = 0; i < size; ++i){
		cell[i] = new Array(size);
		for(var j = 0; j < size; ++j){
			cell[i][j] = 0;
		}
	}
	
	x = Math.round(Math.random() * size);
	y = Math.round(Math.random() * size);
	
}

setup();

draw = function(){
	
	for(var i = 0; i <  size; ++i){
		for(var j = 0; j < size; ++j){
			if(cell[i][j] == 1){
				ctx.fillStyle = "#fff";
			}else{
				ctx.fillStyle = "#000";
			}
			if((i != x) && (j != y)){

			}
			ctx.fillRect(i * size, j * size, (i + 1) * size, (j + 1) * size);
		}
	}	

if(cell[x][y] == 1){
		cell[x][y] = 0;
	}else{
		cell[x][y] = 1;
		ctx.fillStyle = "#1C5D99";
		ctx.fillRect(x * size, y * size, size, size);
	}	

}



toUp = function(){
	y--;
	if(y < 0){
		y = 0;
	}
}

toDown = function(){
	
	y++;
	y = y % size;
	
}

toLeft = function(){
	
	x--;
	if(x < 0){
		x = 0;
	}
}

toRight = function(){
	
	x++;	
	x = x % size;
}

generateMoviment = function(){
	dir = Math.round(Math.random() * 4);

	if (dir == 0 ){
		toUp();
	}else if(dir == 1){
		toRight();
	}else if(dir == 2){
		toDown();
	}else if(dir == 3){
		toLeft();
	}

}

delay = function(){
	for(var i = 0; i < 100000000; ++i){
		//Pra melhorar a visualização, coloquei essa "Gambiarra"
	}
	console.log(x + " " + y);
}

loop = function(){
	draw();
	generateMoviment();
	delay();
	window.requestAnimationFrame(loop);
}

loop();