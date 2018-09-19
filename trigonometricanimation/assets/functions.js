var CANVAS, CTX;
var WIDTH, HEIGHT;

var angle = 0;
var x = 0;
var y = 0;
var sin = 0;
var cos = 0;
var tg = 0;

//Tamanho padrão da tela
WIDTH = 640;
HEIGHT = 640;

//Cria canvas no html
CANVAS = document.createElement("canvas");
CANVAS.width = WIDTH;
CANVAS.height = HEIGHT;
CANVAS.id = "canvas";
CTX = CANVAS.getContext("2d");

document.body.appendChild(CANVAS);

//Captura posição do mouse
document.onmousemove = function(event){
	x = event.pageX - canvas.getBoundingClientRect().left;
	y = event.pageY - canvas.getBoundingClientRect().top;
}

//Plota no canva a função
draw = function(){

	CTX.clearRect(0, 0, WIDTH, HEIGHT);

	//Circulo
	CTX.beginPath();
	CTX.arc(WIDTH/2, HEIGHT/2, 200, 0, 2 * Math.PI);
	CTX.setLineDash([]);
	CTX.fillStyle  = "#EEEEEE";
	CTX.strokeStyle = "#000";
	CTX.lineWidth = 2;
	CTX.fill();
	CTX.stroke();
	CTX.closePath();

	//Angulo
	CTX.beginPath();
	CTX.arc(WIDTH/2, HEIGHT/2, 30, angle ,  0);
	CTX.strokeStyle = "#000";
	CTX.setLineDash([]);
	CTX.stroke();
	CTX.closePath();

	//Abscissa
	CTX.beginPath();
	CTX.moveTo(0, HEIGHT/2,);
	CTX.lineTo(WIDTH, HEIGHT/2);
	CTX.setLineDash([5,5]);
	CTX.lineWidth = 1;
	CTX.strokeStyle = "#000";
	CTX.stroke();
	CTX.closePath();
	
	//Ordenada
	CTX.beginPath();
	CTX.moveTo(WIDTH/2, HEIGHT);
	CTX.setLineDash([5,5]);
	CTX.lineTo(WIDTH/2, 0);
	CTX.lineWidth = 1;
	CTX.strokeStyle = "#000";
	CTX.stroke();
	CTX.closePath();

	//Guia tangente
	CTX.beginPath();
	CTX.moveTo(WIDTH/2 + 200, HEIGHT,);
	CTX.lineTo(WIDTH/2 + 200, 0);
	CTX.lineWidth = 2;
	CTX.setLineDash([]);
	CTX.strokeStyle = "#000";
	CTX.stroke();
	CTX.closePath();
	
	//Linha Triangulo
	CTX.beginPath();
	CTX.moveTo(WIDTH/2 , HEIGHT/2);
	CTX.lineTo(WIDTH/2  - 200 * Math.sin(angle - Math.PI/2), HEIGHT/2 +200 * Math.cos(angle - Math.PI/2));
	CTX.lineWidth = 1;
	CTX.strokeStyle = "#000";
	CTX.stroke();
	CTX.closePath();

	//Linha Tangente
	CTX.beginPath();
	CTX.moveTo(WIDTH/2 , HEIGHT/2);
	CTX.lineTo(WIDTH/2 + 200 , HEIGHT/2 + 200 * tg);
	CTX.lineWidth = 1;
	CTX.strokeStyle = "#000";
	CTX.stroke();
	CTX.closePath();

	//Sen
	CTX.beginPath();
	CTX.moveTo(WIDTH/2 + 200 * cos, HEIGHT/2);
	CTX.lineTo(WIDTH/2 + 200 * cos, HEIGHT/2 + 200 * sin);
	CTX.lineWidth = 3;
	CTX.strokeStyle = "#FF3C38";
	CTX.stroke();
	CTX.closePath();

	//Cos
	CTX.beginPath();
	CTX.moveTo(WIDTH/2 , HEIGHT/2);
	CTX.lineTo(WIDTH/2 + 200 * cos, HEIGHT/2);
	CTX.lineWidth = 3;
	CTX.strokeStyle = "#6699CC";
	CTX.stroke();
	CTX.closePath();

	//tg
	CTX.beginPath();
	CTX.moveTo(WIDTH/2 + 200 , HEIGHT/2);
	CTX.lineTo(WIDTH/2 + 200, HEIGHT/2 + 200 * tg);
	CTX.lineWidth = 3;
	CTX.strokeStyle = "#7CB518";
	CTX.stroke();
	CTX.closePath();

	//box
	CTX.beginPath();
	CTX.fillStyle = "#B3E5FC";
	CTX.fillRect(20, 525, 160, 100);
	CTX.closePath();

	//text
	CTX.beginPath();
	CTX.font = "bold 20px verdana";
	CTX.fillStyle = "#424242";
	CTX.fillText("Angle " +  (360 - Math.round(angle * (180/Math.PI)))%360 + "º", 40, 560);
	CTX.fillText("Sin " + - 1 * Math.round(sin * 100 ) / 100, 40, 580);
	CTX.fillText("Cos " + Math.round(cos * 100) / 100, 40, 600);
	CTX.fillText("x" , WIDTH/2 + 15,  20) ;
	CTX.fillText("y " , WIDTH - 25,  HEIGHT/2 - 20 ) ;
	CTX.fillText("Sin ", cos * 200 + WIDTH/2 - 40, sin * 100 + HEIGHT/2);
	CTX.fillText("Cos ", WIDTH/2 + cos * 100 - 20, HEIGHT/2  + 25);
	CTX.fillText("Tg " , WIDTH/2 + 220,  HEIGHT/2 + 100 * tg ) ;
	CTX.closePath();

}

//Atrualiza os dados
update = function(){
	angle = Math.atan2( (y - HEIGHT/2) , (x - WIDTH/2));
	sin = Math.sin(angle);
	cos = Math.cos(angle);
	tg = sin/cos;
	
}

loop = function(){
	update();
	draw();
	window.requestAnimationFrame(loop);
}

loop();