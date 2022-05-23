function iniciaJogo() {
    let sectionBotoes = document.querySelector(".botoes");
    let sectionTabuleiro = document.querySelector(".tabuleiro");

    sectionBotoes.classList.add("invisivel");
    sectionTabuleiro.classList.remove("invisivel");
}

function sorteiaPalavra() {
    let maximo = palavras.length;
    
    let i = Math.floor(Math.random() * maximo);

    return palavras[i];
}

const botaoIniciar = document.querySelector(".btn-iniciar");
const botaoNovoJogo = document.querySelector(".btn-novo-jogo");
const botaoDesistir = document.querySelector(".btn-desistir");

let corForca = "#654321";
let corBoneco = "#0a3871";

botaoIniciar.onclick = function() {
    limpaTela();
    iniciaJogo();
    desenhaForca(corForca);

    var palavra = sorteiaPalavra();
    var caracteres = palavra.split("");
    console.log(palavra);

    desenhaTracos(caracteres);
}

botaoNovoJogo.onclick = function() {
    limpaTela();
    desenhaForca(corForca);
    var palavra = sorteiaPalavra();
    var caracteres = palavra.split("");
    console.log(palavra);
    desenhaTracos(caracteres);
}

botaoDesistir.onclick = function() {
    let sectionBotoes = document.querySelector(".botoes");
    let sectionTabuleiro = document.querySelector(".tabuleiro");

    sectionBotoes.classList.remove("invisivel");
    sectionTabuleiro.classList.add("invisivel");
}