function validaPalavra(palavra) {
    let erros = [];
    let invalido = ["*", "/", "-", "+", "§", "=", "_", ")", "(", "&", "¨", "¬", "¢", "%", "£", "$", "³", "#", "°", 
    "²", "@", "¹", "!", "|", "₢", "<", ">", ",", ".", ";", ":", "~", "^", "`", "[", "{", "ª", "º", "}", "]", "?", 
    "\"", "\'", "\´", "\\", " "];
    
    for(let i = 0; i < invalido.length; i++) {
        if(palavra.includes(invalido[i])) erros.push(" Caracteres inválidos detectados!");
    }

    if(palavra.length == 0) erros.push(" Digite algum texto!");

    if(palavra.length < 3 || palavra.length > 8) erros.push(" As palavras devem ter entre 3 e 8 letras!");

    if(/[À-Ú-à-ú]/.test(palavra)) erros.push(" Apenas letras sem acento!");

    if(/[0-9]/.test(palavra)) erros.push(" Digite apenas letras!");
    
    return erros;
}

function mostraErros(erros) {
    let ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}