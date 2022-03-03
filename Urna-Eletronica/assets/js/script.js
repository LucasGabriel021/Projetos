//Variáveis de manipulação
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1--right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0; //Variável de inicio da primeira etapa
let numero = '';    //Variável de preenchimento de números da tela

function comecarEtapa() {
     let etapa = etapas[etapaAtual];    // Variável de acesso ao script etapa

     let numeroHtml = '';

     for(let count = 0; count < etapa.numeros; count++) {
          if(count == 0) {
               numeroHtml += '<div class="numero pisca"></div>';
          }
          else {
               numeroHtml += '<div class="numero"></div>';
          }
     }

     seuVotoPara.style.display = 'none';
     cargo.innerHTML = etapa.titulo;
     descricao.innerHTML = '';
     aviso.style.display = 'none';
     lateral.innerHTML = '';
     numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
     alert('finalizou')
}

function clicou(n) {
     let elNumero = document.querySelector('.numero.pisca');
     if(elNumero != null) {
          elNumero.innerHTML = n;
          numero = `${numero}${n}`;
     }

     elNumero.classList.remove('pisca');
     if(elNumero.nextElementSibling != null) {
          elNumero.nextElementSibling.classList.add('pisca');
     }
     else {
          atualizaInterface();
     }
}

function branco() {
     alert('clicou em branco');
}

function corrige() {
     alert('clicou em corrige');
}

function confirma() {
     alert('clicou em confirma');
}

comecarEtapa();