let horas = 0;
let minutos = 0;
let segundos = 0;
let milesimos = 0;
let iniciarCron;

let btn_pause = document.querySelector('#btn-pause');
let btn_iniciar = document.querySelector('#btn-iniciar');

function Cronometro() {
    let exibirTime = document.querySelector(".exibir-cronometro");
    let formatTime = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + 
    (segundos < 10 ? '0' + segundos : segundos) + ',' + (milesimos < 10 ? '0' + milesimos : milesimos);

    milesimos++;
    if(milesimos == 90) {
        milesimos = 0;
        segundos++;
        if(segundos == 60) {
            segundos = 0;
            minutos++;
            if(minutos == 60) {
                minutos = 0;
                horas++;
            }
        }
    }
    exibirTime.innerHTML = formatTime;
}

function iniciar() {
    iniciarCron = setInterval(Cronometro, 10);
    clearAtivo();
    btn_iniciar.classList.add('ativado');
    
}

function pause() {
    clearInterval(iniciarCron);
    clearAtivo();
    btn_pause.classList.add('ativado');
}

function redefinir() {
    clearInterval(iniciarCron);
    horas = 0;
    minutos = 0;
    segundos = 0;
    milesimos = 0;
    clearAtivo();
    document.querySelector(".exibir-cronometro").innerHTML = '00:00:00,00';
}

function clearAtivo() {
    btn_iniciar.classList.remove('ativado');
    btn_pause.classList.remove('ativado');
}