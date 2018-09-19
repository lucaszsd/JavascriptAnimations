/*
@LucasZSD
Cin UFPE
2017
*/

//Setup------------------------>

var canvas, ctx;
var HEIGHT, WIDTH;
var data_1, data_2;
var resolution, size;
HEIGHT = 600;
WIDTH = 600;

canvas = document.createElement("canvas"); 
canvas.width = WIDTH;
canvas.height = HEIGHT;

ctx = canvas.getContext("2d");

document.getElementById("gameoflife").appendChild(canvas);


//Resolution define o tamanho dos blocos, quanto maior a resolução, menor são as celulas
resolution = 60;
size = WIDTH/resolution;


setup = function(){

	data_1 = new Array(resolution);
	data_2 = new Array(resolution);

	
	for(var i = 0; i < resolution; ++i){
		data_1[i] = new Array(resolution);
		data_2[i] = new Array(resolution);
	}

	for(var i = 0; i < resolution ; ++i){
		for(var j = 0; j < resolution ; ++j){
			data_1[i][j] = Math.round(Math.random() * 10);
			data_2[i][j] = 0;
		}
	}

}


draw = function(){

	for(var i = 0; i < resolution ; ++i){
		for(var j = 0; j < resolution ; ++j){
			
			if(data_1[i][j] == 1){
				ctx.fillStyle = "#fff";
			}else{
				ctx.fillStyle = "#000";
			}
			ctx.strokeStyle = "#fff";
			ctx.fillRect(i * size, j * size, i * size + size, j * size + size);
		
		}
	}
}





check = function(){
	//Para cada elemento é checado os vizinhos
	for(var i = 0; i < resolution; ++i){
		for(var j = 0; j < resolution ; ++j){
			checkNeighborhood(i, j);
		}
	}

	data_1 = data_2;

}




//A quantidade de vizinhos define o estado na próxima geração
checkNeighborhood = function(x, y){

	var cont = 0;
	
	for(var i = -1; i <2; ++i){
		for(var j = -1; j < 2 ; ++j){
			if((x + i >= 0 && y + j >= 0) && (x + i < resolution && y + j < resolution) &&!(i == 0 && j == 0)){
				if(data_1[x + i][y + j] == 1){
					cont++;
				}	
			}
			
		}
	}

	
	if(cont < 2){
		data_2[x][y] = 0;
	}else if(cont >3){
		data_2[x][y]= 0;
	}else if(cont == 3){
		data_2[x][y] = 1;
	}else{
		data_2[x][y] = data_1[x][y];
	}

}

function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
}

loop = function(){

	ctx.clearRect(0, 0, WIDTH, HEIGHT);

	draw();

	check();
	//sleep(50);

	
	window.requestAnimationFrame(loop);
}

setup();

loop();