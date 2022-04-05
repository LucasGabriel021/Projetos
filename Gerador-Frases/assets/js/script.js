async function loadFrases() {
     let requisicaoApi = await fetch('https://api.adviceslip.com/advice');
     let json = await requisicaoApi.json();
     imprimirFrase(json);
}

function imprimirFrase(item) {
     let frase = item.slip.advice;
     let areaTexto = document.querySelector('.text-caixa');
     areaTexto.innerHTML = frase;
}

/**/