//Variáveis de manipulação
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1--right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0; //Variável de inicio da primeira etapa, indice 0.
let numero = '';    //Variável de preenchimento de números da tela.
let votoBranco = false  //Variável referente ao voto em branco

//Função de limpar tela e preencher com as informações devidas a tela.
function comecarEtapa() {
     let etapa = etapas[etapaAtual];    // Variável de acesso ao script etapa.

     let numeroHtml = '';
     numero = '';
     votoBranco = false;

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

//Função que atualiza a inteface cada vez que é dedectada uma ação.
function atualizaInterface() {
     let etapa = etapas[etapaAtual];
     let candidato = etapa.candidatos.filter((item, index) => {
          if(item.numero == numero) {
               return true;
          }
          else {
               return false;
          }
     }); 
     if(candidato.length > 0){
          candidato = candidato[0];
          seuVotoPara.style.display = 'block';
          descricao.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`;
          aviso.style.display = 'block';

          let imgHtml = '';
          for(let i in candidato.fotos) {
               if(candidato.fotos[i].small) {
                    imgHtml += `<div class="d-1-image small"><img src="assets/img/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
               }
               else {
                    imgHtml += `<div class="d-1-image"><img src="assets/img/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
               }
           }
          lateral.innerHTML = imgHtml;
     }
     else {
          seuVotoPara.style.display = 'block';
          aviso.style.display = 'block';
          descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
     }
     console.log(candidato);
}

//Função de clique dos números
function clicou(n) {
     let itemNumero = document.querySelector('.numero.pisca');
     if(itemNumero != null) {   // Verificação para ver se tem algum item piscando.
          itemNumero.innerHTML = n;
          numero = `${numero}${n}`;     //!
     
          itemNumero.classList.remove('pisca');
          if(itemNumero.nextElementSibling != null) {  // nextElementSibling, propriedade retorna o próximo elemento no mesmo nível de árvore.
               itemNumero.nextElementSibling.classList.add('pisca');
          }
          else {
               atualizaInterface();
          }
     }
}

//Função do botão de voto branco
function branco() {
     if(numero == '') {
          votoBranco = true;
          seuVotoPara.style.display = 'block';
          aviso.style.display = 'block';
          numeros.innerHTML = '';
          descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
     }
     else {
          alert('Para votar em BRANCO, não informe nenhum número!')
     }
}

//Função do botão de corrige
function corrige() {
     comecarEtapa();
}

function confirma() {
     let etapa = etapas[etapaAtual];
     let votoConfirmado = false;

     if(votoBranco == true) {
          votoConfirmado = true;
     }
     else if(numero.length == etapa.numeros) {
          votoConfirmado = true;
     }

     if(votoConfirmado) {
          etapaAtual++;
          if(etapas[etapaAtual] != undefined) {
               comecarEtapa();
          }
          else {
               console.log('FIM!');
          }
     }
}

comecarEtapa();