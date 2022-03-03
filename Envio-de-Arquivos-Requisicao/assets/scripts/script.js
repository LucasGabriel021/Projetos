async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0];      // < ----- Files 0 é referente a quantidade de arquivos que serão enviados
    let body = new FormData();      // <------- Classe FormData.
    body.append('title', 'Imagem de Lucas');
    body.append('arquivo', arquivo);
    let req = await fetch('https://lucasgabriel021.github.io/Blog-Lucas/', {
        method: 'POST',
        body: body,     // <------ Diferente de envios de dados!
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

//Metódo Sincrono
function mostrar() {
    let imagem = document.getElementById('arquivo').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);

    document.getElementById('visao').appendChild(img);
}
 
// Ou temos essa forma para mostrar a imagem
//Metódo Assincrono
function mostrar() {
    let reader = new FileReader();
    let imagem = document.getElementById('arquivo').files[0];

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;

        document.getElementById('visao').appendChild(img);
    }

    reader.readAsDataURL(imagem);
}

class Carros {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
};

let ex = new Carros('Camaro', 20);
console.log(ex);