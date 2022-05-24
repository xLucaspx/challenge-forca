function mostraTabuleiro() {
    let sectionBotoes = document.querySelector(".botoes-iniciar");
    let sectionTabuleiro = document.querySelector(".tabuleiro");

    sectionBotoes.classList.add("invisivel");
    sectionTabuleiro.classList.remove("invisivel");
}

function sorteia(array) {
    let maximo = array.length;
    
    let i = Math.floor(Math.random() * maximo);

    return array[i];
}

function iniciaJogo() {
    let palavra = sorteia(palavras);
    let caracteres = palavra.split("");
    desenhaTracos(caracteres);
    console.log(palavra); //remover depois
}

const botaoIniciar = document.querySelector(".btn-iniciar");
const botaoNovoJogo = document.querySelector(".btn-novo-jogo");
const botaoDesistir = document.querySelector(".btn-desistir");

let corForca = "#654321";
let corBoneco = "#0a3871";

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
    let sectionBotoes = document.querySelector(".botoes-iniciar");
    let sectionTabuleiro = document.querySelector(".tabuleiro");

    sectionBotoes.classList.remove("invisivel");
    sectionTabuleiro.classList.add("invisivel");
}