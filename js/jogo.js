function iniciaJogo() {
    const sectionBotoes = document.querySelector(".botoes");
    const sectionTabuleiro = document.querySelector(".tabuleiro");

    sectionBotoes.classList.add("invisivel");
    sectionTabuleiro.classList.remove("invisivel");
}

function sorteiaPalavra() {
    var maximo = palavras.length;
    
    var i = Math.floor(Math.random() * maximo);

    return palavras[i];
}

const botaoIniciar = document.querySelector(".botao-iniciar");

var corForca = "#654321";
var corBoneco = "#0a3871";

botaoIniciar.onclick = function () {
    iniciaJogo();
    desenhaForca(corForca);
}

desenhaCabeca(corBoneco);
desenhaCorpo(corBoneco);
desenhaBracoEsq(corBoneco);
desenhaBracoDir(corBoneco);
desenhaPernaEsq(corBoneco);
desenhaPernaDir(corBoneco);