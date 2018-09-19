var HEIGHT, WIDTH;
var CTX, CANVAS;

//Indica a quantidade de pontos na tela
var qtde;
var dots = {};
var bgcolor = null;





//Calcula a distancia entre dois pontos dados as coordenadas
distance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

//Cada ponto é um objeto dessa classe
function dot() {
    //Gera a posição Inicial
    this.level = Math.floor((Math.random() * 2) + 1);
    this.x = Math.random() * (WIDTH - 10) + 10;
    this.y = Math.random() * (HEIGHT - 10) + 10;
    this.size = 2.5 * this.level;
    this.xspeed = (Math.random() * 2 - 1) * 0.4 * -this.level;
    this.yspeed = (Math.random() * 2 - 1) * 0.4 * -this.level;
    this.color = "rgba( 255, 255, 255, " + this.level * 0.5 + ")";


    //Atualiza a função do ponto
    this.update = function () {
        if (this.xspeed > 0) {
            if (this.xspeed + this.x + this.size >= WIDTH) {
                this.xspeed *= -1;
            };
        } 

        if (this.x + this.xspeed - this.size <= 0) {
            this.xspeed *= -1;
        }

        if (this.yspeed > 0) {
            if (this.yspeed + this.y + this.size >= HEIGHT) {
                this.yspeed *= -1;
            };
        }

        if (this.y + this.yspeed - this.size <= 0) {
            this.yspeed *= -1;
        }

        this.x += this.xspeed;
        this.y += this.yspeed;

        this.linhas();
    };

    //Desenha o ponto no canvas
    this.draw = function () {

        CTX.beginPath();
        CTX.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        CTX.fillStyle = this.color;
        CTX.fill();
        CTX.closePath();
    };

    this.linhas = function () {
        for (var i = 0; i < qtde; ++i) {
            if ((distance(this.x, this.y, dots[i].x, dots[i].y) < 70 * (4 - this.level) * 0.5) && (this.level === dots[i].level)) {
                CTX.beginPath();
                CTX.moveTo(this.x, this.y);
                CTX.lineTo(dots[i].x, dots[i].y);
                CTX.lineWidth = 1 * this.level;
                CTX.strokeStyle = "rgba( 255, 255, 255, " + this.level * 0.2 + ")";
                CTX.stroke();
                CTX.closePath();

            }
        }
    }

}



update = function () {
    for (var i = 0; i < qtde; ++i) {
        dots[i].update();
    }
};




draw = function () {


   

    
    CTX.beginPath();
    CTX.fillStyle = bgcolor;
    CTX.fillRect(0, 0, WIDTH, HEIGHT);
    CTX.closePath();
    

    for (var i = 0; i < qtde; ++i) {
        dots[i].draw();
        dots[i].linhas();
    }
};

loop = function () {
    CTX.clearRect(0, 0, WIDTH, HEIGHT);
    window.requestAnimationFrame(loop);
    update();
    draw();
};

setup = function(){
	
	
	// Ajusta ao tamanho da tela
	HEIGHT = document.documentElement.clientHeight;
	WIDTH = document.documentElement.clientWidth;
	
	qtde = (HEIGHT * WIDTH) / 4000;	
	
	CANVAS = document.createElement("canvas");
	CANVAS.height = HEIGHT;
	CANVAS.width = WIDTH;
	CTX = CANVAS.getContext("2d");

	document.body.appendChild(CANVAS);
	
	for (var i = 0; i < qtde; ++i) {
    dots[i] = null;
    dots[i] = new dot();
	}
	
	//Cria o gradiente de fundo
	bgcolor = CTX.createLinearGradient(WIDTH / 2, 0, WIDTH / 2, HEIGHT);
	bgcolor.addColorStop(0, "#e53935");
	bgcolor.addColorStop(0.7, "#d50000");
	bgcolor.addColorStop(1, "#b71c1c");

	loop();

}


setup();



