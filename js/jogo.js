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

function pegaLetra() {
    entrada.onkeypress = function(event) {
        let letra = event.key.toUpperCase();
        if(/[A-Z]/.test(letra)) {
            console.log(letra);
            return letra
        }
    }
}

//Função para iniciar jogo: Escolhe uma nova palavra e mostra os traços

function iniciaJogo() {
    entrada.value = "";
    let palavra = sorteia(palavras);
    let caracteres = palavra.split("");
    desenhaTracos(caracteres);
    console.log(palavra); //remover depois
}

const botaoIniciar = document.querySelector(".btn-iniciar");
const botaoNovoJogo = document.querySelector(".btn-novo-jogo");
const botaoDesistir = document.querySelector(".btn-desistir");
const entrada = document.querySelector(".entrada");
const sectionBotoes = document.querySelector(".botoes-iniciar");
const sectionTabuleiro = document.querySelector(".tabuleiro");

let corForca = "#654321";
let corBoneco = "#0a3871";

let letra = pegaLetra();

botaoIniciar.onclick = function() {
    limpaTela();
    mostraTabuleiro();
    desenhaForca(corForca);
    iniciaJogo();
}

botaoNovoJogo.onclick = function() {
    limpaTela();
    desenhaForca(corForca);
    iniciaJogo();
}

botaoDesistir.onclick = function() {
    entrada.value = "";
    escondeTabuleiro();
}

window.onclick = function() {
    entrada.focus();
}