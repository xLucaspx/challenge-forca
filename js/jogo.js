//Funções para mostrar e esconder tabuleiro

function mostraTabuleiro() {
    sectionBotoes.classList.add("invisivel");
    sectionTabuleiro.classList.remove("invisivel");
}

function escondeTabuleiro() {
    sectionBotoes.classList.remove("invisivel");
    sectionTabuleiro.classList.add("invisivel");
}

//Função para sortear elemento de um array

function sorteia(array) {
    let maximo = array.length;
    
    let i = Math.floor(Math.random() * maximo);

    return array[i];
}

//Função para pegar letra pressionada

function pegaLetra(e) {
    e = e || window.event || entrada.onkeydown;
    let letra = e.keyCode || e.which;
    return String.fromCharCode(letra);
}

//Função para jogar

function validaLetra(letra, caracteres) {
    for(let i = 0; i < usadas.length; i++) {
        if(letra == usadas[i]) {
            return;
        }
    }
    for(let i = 0; i < acertos.length; i++) {
        if(letra == acertos[i]) {
            return;
        }
    }
    
    if(caracteres.length == 3 && letra != caracteres[0] && letra != caracteres[1] && letra != caracteres[2]) {
        usadas.push(letra);
        pincel.font = "32px Arial";
        pincel.fillStyle = "black";
        pincel.fillText(usadas, 525, 585);
    }
    if(caracteres.length == 4 && letra != caracteres[0] && letra != caracteres[1] && letra != caracteres[2] && letra != caracteres[3]) {
        usadas.push(letra);
        pincel.font = "32px Arial";
        pincel.fillStyle = "black";
        pincel.fillText(usadas, 525, 585);
    }
    if(caracteres.length == 5 && letra != caracteres[0] && letra != caracteres[1] && letra != caracteres[2]
        && letra != caracteres[3] && letra != caracteres[4]) {
        usadas.push(letra);
        pincel.font = "32px Arial";
        pincel.fillStyle = "black";
        pincel.fillText(usadas, 525, 585);
    }
    if(caracteres.length == 6 && letra != caracteres[0] && letra != caracteres[1] && letra != caracteres[2]
        && letra != caracteres[3] && letra != caracteres[4] && letra != caracteres[5]) {
        usadas.push(letra);
        pincel.font = "32px Arial";
        pincel.fillStyle = "black";
        pincel.fillText(usadas, 525, 585);
    }
    if(caracteres.length == 7 && letra != caracteres[0] && letra != caracteres[1] && letra != caracteres[2]
        && letra != caracteres[3] && letra != caracteres[4] && letra != caracteres[5] && letra != caracteres[6]) {
        usadas.push(letra);
        pincel.font = "32px Arial";
        pincel.fillStyle = "black";
        pincel.fillText(usadas, 525, 585);
    }
    if(caracteres.length == 8 && letra != caracteres[0] && letra != caracteres[1] && letra != caracteres[2] && letra != caracteres[3] 
        && letra != caracteres[4] && letra != caracteres[5] && letra != caracteres[6] && letra != caracteres[7]) {
        usadas.push(letra);
        pincel.font = "32px Arial";
        pincel.fillStyle = "black";
        pincel.fillText(usadas, 525, 585);
    }
    
    let erros = usadas.length;
    
    if(erros == 1) desenhaCabeca();
    if(erros == 2) desenhaCorpo();
    if(erros == 3) desenhaBracoEsq();
    if(erros == 4) desenhaBracoDir();
    if(erros == 5) desenhaPernaEsq();
    if(erros == 6) {
        desenhaPernaDir();
        setTimeout(limpaTela, 500);
        setTimeout(desenhaPerdeu, 550);
        setTimeout(function() {
            pincel.font = "65px Arial";
            pincel.fillStyle = "black";
            pincel.fillText("A PALAVRA ERA: " + caracteres.join(""), 215, 500);
        }, 550);
    }

    if(caracteres.length == 3) {
        if(letra == caracteres[0]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 485, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[1]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 575, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[2]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 665, 525);
            acertos.push(letra);
        }
    } if(caracteres.length == 4) {
        if(letra == caracteres[0]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 440, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[1]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 530, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[2]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 620, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[3]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 710, 525);
            acertos.push(letra);
        }
    } if(caracteres.length == 5) {
        if(letra == caracteres[0]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 395, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[1]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 485, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[2]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 575, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[3]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 665, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[4]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 755, 525);
            acertos.push(letra);
        }
    } if(caracteres.length == 6) {
        if(letra == caracteres[0]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 350, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[1]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 440, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[2]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 530, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[3]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 620, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[4]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 710, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[5]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 800, 525);
            acertos.push(letra);
        }
    } if(caracteres.length == 7) {
        if(letra == caracteres[0]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 305, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[1]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 395, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[2]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 485, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[3]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 575, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[4]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 665, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[5]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 755, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[6]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 845, 525);
            acertos.push(letra);
        }
    } if(caracteres.length == 8) {
        if(letra == caracteres[0]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 260, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[1]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 350, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[2]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 440, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[3]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 530, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[4]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 620, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[5]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 710, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[6]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 800, 525);
            acertos.push(letra);
        }
        if(letra == caracteres[7]) {
            pincel.font = "55px Arial";
            pincel.strokeStyle = "black";
            pincel.lineWidth = 1;
            pincel.strokeText(letra, 890, 525);
            acertos.push(letra);
        }
    }
    if(acertos.length == caracteres.length) {
        setTimeout(limpaTela, 500);
        setTimeout(desenhaGanhou, 550);
    }
}

function jogar(caracteres) {
    entrada.onkeydown = function(e) {
        let letra = pegaLetra(e).toUpperCase();

        if(/[A-Z]/.test(letra)) {
            validaLetra(letra, caracteres);
        }
    }
    letraQ.onclick = function() {
        validaLetra("Q", caracteres);
        this.classList.add("clicadas");
    }
    letraW.onclick = function() {
        validaLetra("W", caracteres);
        this.classList.add("clicadas");
    }
    letraE.onclick = function() {
        validaLetra("E", caracteres);
        this.classList.add("clicadas");
    }
    letraR.onclick = function() {
        validaLetra("R", caracteres);
        this.classList.add("clicadas");
    }
    letraT.onclick = function() {
        validaLetra("T", caracteres);
        this.classList.add("clicadas");
    }
    letraY.onclick = function() {
        validaLetra("Y", caracteres);
        this.classList.add("clicadas");
    }
    letraU.onclick = function() {
        validaLetra("U", caracteres);
        this.classList.add("clicadas");
    }
    letraI.onclick = function() {
        validaLetra("I", caracteres);
        this.classList.add("clicadas");
    }
    letraO.onclick = function() {
        validaLetra("O", caracteres);
        this.classList.add("clicadas");
    }
    letraP.onclick = function() {
        validaLetra("P", caracteres);
        this.classList.add("clicadas");
    }
    letraA.onclick = function() {
        validaLetra("A", caracteres);
        this.classList.add("clicadas");
    }
    letraS.onclick = function() {
        validaLetra("S", caracteres);
        this.classList.add("clicadas");
    }
    letraD.onclick = function() {
        validaLetra("D", caracteres);
        this.classList.add("clicadas");
    }
    letraF.onclick = function() {
        validaLetra("F", caracteres);
        this.classList.add("clicadas");
    }
    letraG.onclick = function() {
        validaLetra("G", caracteres);
        this.classList.add("clicadas");
    }
    letraH.onclick = function() {
        validaLetra("H", caracteres);
        this.classList.add("clicadas");
    }
    letraJ.onclick = function() {
        validaLetra("J", caracteres);
        this.classList.add("clicadas");
    }
    letraK.onclick = function() {
        validaLetra("K", caracteres);
        this.classList.add("clicadas");
    }
    letraL.onclick = function() {
        validaLetra("L", caracteres);
        this.classList.add("clicadas");
    }
    letraZ.onclick = function() {
        validaLetra("Z", caracteres);
        this.classList.add("clicadas");
    }
    letraX.onclick = function() {
        validaLetra("X", caracteres);
        this.classList.add("clicadas");
    }   
    letraC.onclick = function() {
        validaLetra("C", caracteres);
        this.classList.add("clicadas");
    }
    letraV.onclick = function() {
        validaLetra("V", caracteres);
        this.classList.add("clicadas");
    }
    letraB.onclick = function() {
        validaLetra("B", caracteres);
        this.classList.add("clicadas");
    }
    letraN.onclick = function() {
        validaLetra("N", caracteres);
        this.classList.add("clicadas");
    }
    letraM.onclick = function() {
        validaLetra("M", caracteres);
        this.classList.add("clicadas");
    }
}

const botaoIniciar = document.querySelector(".btn-iniciar");
const botaoNovoJogo = document.querySelector(".btn-novo-jogo");
const botaoDesistir = document.querySelector(".btn-desistir");
const entrada = document.querySelector(".entrada");
const sectionBotoes = document.querySelector(".botoes-iniciar");
const sectionTabuleiro = document.querySelector(".tabuleiro");

let usadas = [];
let acertos = [];

botaoIniciar.onclick = function() {
    usadas = [];
    acertos = [];
    limpaTela();
    mostraTabuleiro();
    limpaTeclado();
    entrada.value = "";
    desenhaForca();

    let palavra = sorteia(palavras);
    let caracteres = palavra.split("");

    desenhaTracos(caracteres);
    jogar(caracteres);
}

botaoNovoJogo.onclick = function() {
    usadas = [];
    acertos = [];
    limpaTela();
    limpaTeclado();
    entrada.value = "";
    desenhaForca();

    let palavra = sorteia(palavras);
    let caracteres = palavra.split("");

    desenhaTracos(caracteres);
    jogar(caracteres);
}

botaoDesistir.onclick = function() {
    entrada.value = "";
    escondeTabuleiro();
}

canvas.onclick = function() {
    entrada.focus();
}