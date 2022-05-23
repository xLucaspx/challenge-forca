var palavras = ["ZERO", "AMARELO", "CANECA", "ELEFANTE", "ESCOLA", 
"LIMONADA", "UMBIGO", "PIJAMA", "AFILHADO", "AMENDOIM", "BASQUETE", 
"FUTEBOL", "CAMINHO", "SISTEMA", "CHICLETE", "CHUVEIRO", "COELHO", 
"CONTEXTO", "BANHEIRO", "EMPENHO", "DINHEIRO", "SERENATA", "PEDESTRE", 
"ADVOGADO", "CACTO", "GNOMO", "RITMO", "JOGO", "QUADRO", "FORCA"];

const btnAdicionar = document.querySelector(".btn-adicionar")
const btnSalvar = document.querySelector(".btn-salvar");
const btnVoltar = document.querySelector(".btn-voltar");

btnAdicionar.addEventListener("click", function() {
    let sectionBotoes = document.querySelector(".botoes");
    let sectionAdicionar = document.querySelector(".adicionar-palavra");

    sectionBotoes.classList.add("invisivel");
    sectionAdicionar.classList.remove("invisivel");
});

btnSalvar.addEventListener("click", function(){
    let inputAddPalavra = document.querySelector(".add-palavra");
    let novaPalavra = inputAddPalavra.value.toUpperCase();
    
    if(novaPalavra.length >=3 && novaPalavra.length <= 8) {
        palavras.push(novaPalavra);
        console.log("Sucesso! Palavas disponíveis agora: " + palavras.length);
    }
});

btnVoltar.addEventListener("click", function() {
    let inputAddPalavra = document.querySelector(".add-palavra");
    inputAddPalavra.value = "";

    let sectionBotoes = document.querySelector(".botoes");
    let sectionAdicionar = document.querySelector(".adicionar-palavra");

    sectionAdicionar.classList.add("invisivel");
    sectionBotoes.classList.remove("invisivel");
});