const ativarTeclado = document.querySelector(".ativar-teclado");
const desativarTeclado = document.querySelector(".desativar-teclado");
const teclado = document.querySelector(".teclado");

var letraQ = document.querySelector(".letra-q");
var letraW = document.querySelector(".letra-w");
var letraE = document.querySelector(".letra-e");
var letraR = document.querySelector(".letra-r");
var letraT = document.querySelector(".letra-t");
var letraY = document.querySelector(".letra-y");
var letraU = document.querySelector(".letra-u");
var letraI = document.querySelector(".letra-i");
var letraO = document.querySelector(".letra-o");
var letraP = document.querySelector(".letra-p");
var letraA = document.querySelector(".letra-a");
var letraS = document.querySelector(".letra-s");
var letraD = document.querySelector(".letra-d");
var letraF = document.querySelector(".letra-f");
var letraG = document.querySelector(".letra-g");
var letraH = document.querySelector(".letra-h");
var letraJ = document.querySelector(".letra-j");
var letraK = document.querySelector(".letra-k");
var letraL = document.querySelector(".letra-l");
var letraZ = document.querySelector(".letra-z");
var letraX = document.querySelector(".letra-x");
var letraC = document.querySelector(".letra-c");
var letraV = document.querySelector(".letra-v");
var letraB = document.querySelector(".letra-b");
var letraN = document.querySelector(".letra-n");
var letraM = document.querySelector(".letra-m");

ativarTeclado.onclick = function() {
    ativarTeclado.classList.add("invisivel");
    desativarTeclado.classList.remove("invisivel");
    teclado.classList.remove("invisivel");
}

desativarTeclado.onclick = function() {
    ativarTeclado.classList.remove("invisivel");
    desativarTeclado.classList.add("invisivel");
    teclado.classList.add("invisivel");
}

function limpaTeclado() {
    letraQ.classList.remove("clicadas");
    letraW.classList.remove("clicadas");
    letraE.classList.remove("clicadas");
    letraR.classList.remove("clicadas");
    letraT.classList.remove("clicadas");
    letraY.classList.remove("clicadas");
    letraU.classList.remove("clicadas");
    letraI.classList.remove("clicadas");
    letraO.classList.remove("clicadas");
    letraP.classList.remove("clicadas");
    letraA.classList.remove("clicadas");
    letraS.classList.remove("clicadas");
    letraD.classList.remove("clicadas");
    letraF.classList.remove("clicadas");
    letraG.classList.remove("clicadas");
    letraH.classList.remove("clicadas");
    letraJ.classList.remove("clicadas");
    letraK.classList.remove("clicadas");
    letraL.classList.remove("clicadas");
    letraZ.classList.remove("clicadas");
    letraX.classList.remove("clicadas");
    letraC.classList.remove("clicadas");
    letraV.classList.remove("clicadas");
    letraB.classList.remove("clicadas");
    letraN.classList.remove("clicadas");
    letraM.classList.remove("clicadas");
}