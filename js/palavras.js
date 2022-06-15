//Palavras

var palavras = ["ZERO", "AMARELO", "CANECA", "ELEFANTE", "ESCOLA", "LIMONADA", "UMBIGO", "PIJAMA", 
"AFILHADO", "AMENDOIM", "BASQUETE", "FUTEBOL", "CAMINHO", "SISTEMA", "CHICLETE", "CHUVEIRO", "COELHO", 
"CONTEXTO", "BANHEIRO", "EMPENHO", "DINHEIRO", "SERENATA", "PEDESTRE", "ADVOGADO", "CACTO", "GNOMO", 
"RITMO", "JOGO", "QUADRO", "FORCA", "CEUTA", "NAU", "INFANTE", "BRASIL", "DAMASCO", "CARAVELA", "DOM"];

//Botões, input, section

const btnAdicionar = document.querySelector(".btn-adicionar")
const btnSalvar = document.querySelector(".btn-salvar");
const btnVoltar = document.querySelector(".btn-voltar");
const sectionAdicionar = document.querySelector(".adicionar-palavra");
let inputAddPalavra = document.querySelector(".add-palavra");
let mensagensErro = document.querySelector(".mensagens-erro");


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

    if(erros.length > 0) {
        mostraErros(erros);
        return;
    }

    mensagensErro.innerHTML = "";
    if(/[a-zA-Z]/.test(novaPalavra)) {
        palavras.push(novaPalavra);
        console.log("Sucesso! Palavas disponíveis agora: " + palavras.length);
        inputAddPalavra.value = "";
        inputAddPalavra.focus();
    } else mostraErros([" Caracteres inválidos detectados!"]);
});

//Função para retornar ao menu inicial

btnVoltar.addEventListener("click", function() {
    inputAddPalavra.value = "";
    mensagensErro.innerHTML = "";
    sectionAdicionar.classList.add("invisivel");
    sectionBotoes.classList.remove("invisivel");
});