//Palavras

var palavras = ["ZERO", "AMARELO", "CANECA", "ELEFANTE", "ESCOLA", 
"LIMONADA", "UMBIGO", "PIJAMA", "AFILHADO", "AMENDOIM", "BASQUETE", 
"FUTEBOL", "CAMINHO", "SISTEMA", "CHICLETE", "CHUVEIRO", "COELHO", 
"CONTEXTO", "BANHEIRO", "EMPENHO", "DINHEIRO", "SERENATA", "PEDESTRE", 
"ADVOGADO", "CACTO", "GNOMO", "RITMO", "JOGO", "QUADRO", "FORCA"];

//Botões, input, section

const btnAdicionar = document.querySelector(".btn-adicionar")
const btnSalvar = document.querySelector(".btn-salvar");
const btnVoltar = document.querySelector(".btn-voltar");
const sectionAdicionar = document.querySelector(".adicionar-palavra");
let inputAddPalavra = document.querySelector(".add-palavra");


//Função para mostrar campo de adicionar palavra

btnAdicionar.addEventListener("click", function() {
    sectionBotoes.classList.add("invisivel");
    sectionAdicionar.classList.remove("invisivel");
    inputAddPalavra.value = "";
    inputAddPalavra.focus();
});

//Função para salvar nova palavra

btnSalvar.addEventListener("click", function(){
    let novaPalavra = inputAddPalavra.value.toUpperCase();

    let erros = validaPalavra(novaPalavra);
    let mensagensErro = document.querySelector(".mensagens-erro");

    if(erros.length > 0) {
        mostraErros(erros);
        return;
    }

    mensagensErro.innerHTML = "";
    palavras.push(novaPalavra);
    console.log("Sucesso! Palavas disponíveis agora: " + palavras.length);
    inputAddPalavra.value = "";
    inputAddPalavra.focus();
});

//Função para retornar ao menu inicial

btnVoltar.addEventListener("click", function() {
    inputAddPalavra.value = "";
    sectionAdicionar.classList.add("invisivel");
    sectionBotoes.classList.remove("invisivel");
});