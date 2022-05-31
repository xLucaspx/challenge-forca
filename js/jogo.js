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
    e = e || window.event;
    let letra = e.keyCode || e.which;
    return String.fromCharCode(letra);
}

//Função para jogar

function jogar(caracteres) {
    entrada.onkeypress = function(e) {
        let letra = pegaLetra(e).toUpperCase();
        for(let i = 0; i < usadas.length; i++) {
            if(letra == usadas[i]) {
                return;
            }
        }
        usadas.push(letra);
        console.log(usadas);
        if(/[A-Z]/.test(letra)) {
            if(caracteres.length == 3) {
                if(letra == caracteres[0]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 485, 525);
                }
                if(letra == caracteres[1]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 575, 525);
                }
                if(letra == caracteres[2]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 665, 525);
                }
            } if(caracteres.length == 4) {
                if(letra == caracteres[0]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 440, 525);
                }
                if(letra == caracteres[1]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 530, 525);
                }
                if(letra == caracteres[2]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 620, 525);
                }
                if(letra == caracteres[3]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 710, 525);
                }
            } if(caracteres.length == 5) {
                if(letra == caracteres[0]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 395, 525);
                }
                if(letra == caracteres[1]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 485, 525);
                }
                if(letra == caracteres[2]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 575, 525);
                }
                if(letra == caracteres[3]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 665, 525);
                }
                if(letra == caracteres[4]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 755, 525);
                }
            } if(caracteres.length == 6) {
                if(letra == caracteres[0]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 350, 525);
                }
                if(letra == caracteres[1]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 440, 525);
                }
                if(letra == caracteres[2]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 530, 525);
                }
                if(letra == caracteres[3]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 620, 525);
                }
                if(letra == caracteres[4]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 710, 525);
                }
                if(letra == caracteres[5]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 800, 525);
                }
            } if(caracteres.length == 7) {
                if(letra == caracteres[0]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 305, 525);
                }
                if(letra == caracteres[1]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 395, 525);
                }
                if(letra == caracteres[2]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 485, 525);
                }
                if(letra == caracteres[3]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 575, 525);
                }
                if(letra == caracteres[4]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 665, 525);
                }
                if(letra == caracteres[5]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 755, 525);
                }
                if(letra == caracteres[6]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 845, 525);
                }
            } if(caracteres.length == 8) {
                if(letra == caracteres[0]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 260, 525);
                }
                if(letra == caracteres[1]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 350, 525);
                }
                if(letra == caracteres[2]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 440, 525);
                }
                if(letra == caracteres[3]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 530, 525);
                }
                if(letra == caracteres[4]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 620, 525);
                }
                if(letra == caracteres[5]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 710, 525);
                }
                if(letra == caracteres[6]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 800, 525);
                }
                if(letra == caracteres[7]) {
                    pincel.font = "55px Arial";
                    pincel.strokeText(letra, 890, 525);
                }
            }
        }
    }
}

const botaoIniciar = document.querySelector(".btn-iniciar");
const botaoNovoJogo = document.querySelector(".btn-novo-jogo");
const botaoDesistir = document.querySelector(".btn-desistir");
const entrada = document.querySelector(".entrada");
const sectionBotoes = document.querySelector(".botoes-iniciar");
const sectionTabuleiro = document.querySelector(".tabuleiro");

let corForca = "#654321";
let corBoneco = "#0a3871";
let usadas = [];

botaoIniciar.onclick = function() {
    usadas = [];
    limpaTela();
    mostraTabuleiro();
    entrada.value = "";
    desenhaForca(corForca);

    let palavra = sorteia(palavras);
    let caracteres = palavra.split("");

    desenhaTracos(caracteres);
    console.log(palavra);
    jogar(caracteres);
}

botaoNovoJogo.onclick = function() {
    usadas = [];
    limpaTela();
    entrada.value = "";
    desenhaForca(corForca);

    let palavra = sorteia(palavras);
    let caracteres = palavra.split("");

    desenhaTracos(caracteres);
    console.log(palavra);
    jogar(caracteres);
}

botaoDesistir.onclick = function() {
    entrada.value = "";
    escondeTabuleiro();
}

window.onclick = function() {
    entrada.focus();
}