// let titulo = document.querySelector('h1');

// titulo.innerHTML = 'Acerte a palavra correta';

// let paragrafo = document.querySelector('p');

// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

let tentativa = 1;
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (chute == numeroSecreto){
        let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';
        let textoTentativas = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', textoTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);

    }
    else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'Maior que o número secreto');
        limpaCampo();
        tentativa ++;
    }
    else {
        exibirTextoNaTela('p', 'Menor que o número secreto');
        limpaCampo();
        tentativa ++;
    }

    // else {
    //     if (chute > numeroSecreto){
    //         exibirTextoNaTela('p', 'Maior que o número secreto');
    //     }
    //     else{
    //         exibirTextoNaTela('p', 'Menor que o número secreto');
    //     }
            // tentativa ++
            //document.querySelector('input').value = null
    // }
}

function exibirTelaPadrao(){
    exibirTextoNaTela('h1', 'Acerte a palavra correta');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativa = 1;
    exibirTelaPadrao();
    document.getElementById('reiniciar').removeAttribute('enabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
}

function limpaCampo(){
    document.querySelector('input').value = null
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTelaPadrao();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}




