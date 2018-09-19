var  HEIGHT, WIDTH;
var CANVAS, CTX;
var size, resolution;

//Tamanho da tela do usuario
HEIGHT = screen.height;
WIDTH = screen.width;


//Tamanho de cada quadrado
size = 120;


//Teste
alert(HEIGHT+" "+WIDTH);


//Configuração do Canvas
CANVAS = document.createElement("canvas");
CANVAS.widht = WIDTH;
CANVAS.height = HEIGHT;
CTX = canvas.getContext("2d");

//Adiciona o canvas no HTML
document.body.appendChild(canvas);



//Desenha todos os elementos na tela
function draw(){


};


//Atualiza o estado dos elementos
function update(){

}

function loop(){


	window.requestAnimationFrame(loop);
}