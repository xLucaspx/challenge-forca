function desenhaForca(cor) {
    pincel.fillStyle = cor;
    pincel.fillRect(450, 435, 295, 5); //parte de baixo
    pincel.fillRect(530, 80, 5, 360); //"mastro"
    pincel.fillRect(530, 80, 180, 5); //parte de cima
    pincel.fillRect(710, 80, 5, 50); //"corda"
}

function desenhaCabeca(cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(712.5, 162, 32.5, 0, 2 * 3.14);
    pincel.fill();
    pincel.fillStyle = "azure";
    pincel.beginPath();
    pincel.arc(712.5, 162, 29, 0, 2* 3.14);
    pincel.fill();
}

function desenhaCorpo(cor) {
    pincel.fillStyle = cor;
    pincel.fillRect(710, 194, 4, 130);
}

function desenhaBracoEsq(cor) {
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.moveTo(710, 194);
    pincel.lineTo(678, 264);
    pincel.lineWidth = 4;
    pincel.stroke();
}

function desenhaBracoDir(cor) {
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.moveTo(714, 194);
    pincel.lineTo(746, 264);
    pincel.lineWidth = 4;
    pincel.stroke();
}

function desenhaPernaEsq(cor) {
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.moveTo(711, 323);
    pincel.lineTo(674, 403);
    pincel.lineWidth = 4;
    pincel.stroke();
}

function desenhaPernaDir(cor) {
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.moveTo(713, 323);
    pincel.lineTo(750, 403);
    pincel.lineWidth = 4;
    pincel.stroke();
}

function desenhaTracos(caracteres) {
    var x = 0;

    if(caracteres.length == 3) {

        x = 470;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 4) {

        x = 425;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 5) {

        x = 380;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 6) {

        x = 335;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 7) {

        x = 290;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } else if(caracteres.length == 8) {

        x = 245;
        for(var i = 0; i < caracteres.length; i++) {

            pincel.fillStyle = "black";
            pincel.fillRect(x, 530, 70, 4);
            x = x + 90;
        }
    } 
}
   
var canvas = document.querySelector("#tabuleiro");
var pincel = canvas.getContext("2d");