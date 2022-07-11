var dato_original = document.querySelector('#textodato');
var cajatexto = document.querySelector('.textfinal');
var alerta = document.querySelector("#alert");
var lenPalabra;
var concatenacion = " ";

const dato = {
    palabra: ''
}

dato_original.addEventListener('input', function(event) {
    dato.palabra = event.target.value;
})

function encriptador(ingreso) {

    ingreso = ingreso.toLowerCase()

    for (var posicion = 0; posicion < lenPalabra; posicion++) {

        switch (ingreso[posicion]) {
            case 'a':
                concatenacion = concatenacion + "ai";
                break;
            case 'e':
                concatenacion = concatenacion + "enter";
                break;
            case 'i':
                concatenacion = concatenacion + "imes";
                break;

            case 'o':
                concatenacion = concatenacion + "ober";
                break;

            case 'u':
                concatenacion = concatenacion + "ufat";
                break;

            default:
                concatenacion = concatenacion + ingreso[posicion];
                break;
        }

    }
    return concatenacion
}

function desencriptar(ingreso) {

    ingreso = ingreso.toLowerCase()

    var palabra = " ";

    for (var posicion = 0; posicion < ingreso.length; posicion++) {

        if (ingreso[posicion] == 'a') {
            palabra = palabra + 'a';
            posicion = posicion + 1;
        } else if (ingreso[posicion] == 'e') {
            palabra = palabra + 'e';
            posicion = posicion + 4;
        } else if (ingreso[posicion] == 'i') {
            palabra = palabra + 'i';
            posicion = posicion + 2;
        } else if (ingreso[posicion] == 'o') {
            palabra = palabra + 'o';
            posicion = posicion + 3;
        } else if (ingreso[posicion] == 'u') {
            palabra = palabra + 'u';
            posicion = posicion + 3;
        } else {
            palabra = palabra + ingreso[posicion];
        }

    }

    return palabra;
}

function encriptar() {
    lenPalabra = dato.palabra.length;
    var resultado = encriptador(dato.palabra);
    cajatexto.textContent = resultado;
    dato.palabra = " ";
    resultado = " ";
    concatenacion = " ";
}

function inversa() {
    lenPalabra = dato.palabra.length;
    var resultado = desencriptar(dato.palabra);
    cajatexto.textContent = resultado;
    dato.palabra = " ";
    resultado = " ";
    palabra = " ";
}

function borrar() {

    dato_original.value = " ";
    cajatexto.textContent = " ";
}

function copyToClickBoard() {

    navigator.clipboard.writeText(cajatexto.innerHTML);

    alerta.textContent = "Copiado al portapapeles de forma exitosa!";

    setTimeout(function reset() {
        alerta.textContent = " ";
    }, 3000);

}