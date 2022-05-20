function desenhaForca(cor) {
    pincel.fillStyle = cor;
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
    pincel.fillStyle = "azure"; //cor do bg
    pincel.beginPath();
    pincel.arc(712.5, 162, 30, 0, 2* 3.14);
    pincel.fill();
}

var canvas = document.querySelector("#tabuleiro");
var pincel = canvas.getContext("2d");