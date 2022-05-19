function desenhaForca() {
    pincel.fillstyle = "black";
    pincel.fillRect(450, 435, 295, 5); //parte de baixo
    pincel.fillRect(530, 80, 5, 360); //"mastro"
    pincel.fillRect(530, 80, 180, 5); //parte de cima
    pincel.fillRect(710, 80, 5, 50); //"corda"
}

const canvas = document.querySelector("#tabuleiro");
const pincel = canvas.getContext("2d");
