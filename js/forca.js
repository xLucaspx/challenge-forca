function desenhaForca() {
    pincel.fillStyle = "#654321";
    pincel.fillRect(450, 435, 295, 5); //parte de baixo
    pincel.fillRect(530, 80, 5, 360); //"mastro"
    pincel.fillRect(530, 80, 180, 5); //parte de cima
    pincel.fillRect(710, 80, 5, 50); //"corda"
}

function desenhaCabeca() {
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    pincel.arc(712.5, 162, 32.5, 0, 2 * 3.14);
    pincel.fill();
    pincel.fillStyle = "#eff1fa";
    pincel.beginPath();
    pincel.arc(712.5, 162, 29, 0, 2* 3.14);
    pincel.fill();
}

function desenhaCorpo() {
    pincel.fillStyle = "#0a3871";
    pincel.fillRect(710, 194, 4, 130);
}

function desenhaBracoEsq() {
    pincel.strokeStyle = "#0a3871";
    pincel.beginPath();
    pincel.moveTo(711, 198);
    pincel.lineTo(678, 264);
    pincel.lineWidth = 4;
    pincel.stroke();
}

function desenhaBracoDir() {
    pincel.strokeStyle = "#0a3871";
    pincel.beginPath();
    pincel.moveTo(713, 198);
    pincel.lineTo(746, 264);
    pincel.lineWidth = 4;
    pincel.stroke();
}

function desenhaPernaEsq() {
    pincel.strokeStyle = "#0a3871";
    pincel.beginPath();
    pincel.moveTo(711, 323);
    pincel.lineTo(674, 403);
    pincel.lineWidth = 4;
    pincel.stroke();
}

function desenhaPernaDir() {
    pincel.strokeStyle = "#0a3871";
    pincel.beginPath();
    pincel.moveTo(713, 323);
    pincel.lineTo(750, 403);
    pincel.lineWidth = 4;
    pincel.stroke();
}

function desenhaBoneco() {
    desenhaCabeca();
    desenhaCorpo();
    desenhaBracoEsq();
    desenhaBracoDir();
    desenhaPernaEsq();
    desenhaPernaDir();
}

function limpaTela() {
    pincel.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaPerdeu() {
    pincel.font = "65px Arial";
    pincel.strokeStyle = "black";
    pincel.lineWidth = 1;
    pincel.fillStyle = "red";
    pincel.strokeText("FIM DE JOGO", 380, 325);
    pincel.fillText("VOCÊ PERDEU!", 350, 415);
}

function desenhaGanhou() {
    pincel.font = "65px Arial";
    pincel.strokeStyle = "black";
    pincel.lineWidth = 1;
    pincel.fillStyle = "darkGreen"
    pincel.strokeText("PARABÉNS", 430, 325);
    pincel.fillText("VOCÊ GANHOU!", 350, 415);
}

var canvas = document.querySelector("#tabuleiro");
var pincel = canvas.getContext("2d");