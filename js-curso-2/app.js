let numeroSecreto;
let numeroMinimo = 1;
let numeroMaximo = 10;
let tentativas;
let listaNumeroSorteado = [];

iniciarJogo();

function iniciarJogo() {
  tentativas = 0;
  numeroSecreto = gerarNumeroAleatorio(numeroMinimo,numeroMaximo);
  limparCampo();
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela("p", "Escolha um número entre " + numeroMinimo + " e " + numeroMaximo);
  document.getElementById("reiniciar").setAttribute("disabled",true);
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.0});
}

function verificarChute(){
  tentativas++;
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto){
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = "Você descobriu o número secreto com " + tentativas + " " + palavraTentativa + "!";
    exibirTextoNaTela("h1", "Você Acertou!!!");
    exibirTextoNaTela("p", mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
  else {
    limparCampo(); 
    if (chute > numeroSecreto){
      exibirTextoNaTela("p", "O número secreto é menor");
    }
    else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
  }
}

function gerarNumeroAleatorio(min, max) {
  let numeroEscolhido = parseInt(Math.random() * (max - min + 1)) + min;
  console.log(listaNumeroSorteado);
  if (listaNumeroSorteado.length == numeroMaximo) {
    listaNumeroSorteado = [];
  }
  if (listaNumeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio(min,max);
  }
  else{
    listaNumeroSorteado.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  let chute = document.querySelector("input");
  chute.value = " ";   
}