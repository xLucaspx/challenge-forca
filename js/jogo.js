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


botaoIniciar.onclick = iniciaJogo;
