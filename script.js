const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');




function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}



function encriptar(stringEncriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],
    ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}



function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],
    ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}
// console.table(matrizCodigo);                         

/////////////////////////////////////////////////////////////////////////////////////

// Obtener referencias a los elementos fuera de la función
let mensajeTextarea = document.querySelector('.mensaje');
let textAreaDestino = document.querySelector('.text-area');

function copiarTexto() {
    // Obtener el valor del textarea "mensaje"
    let mensajeTexto = mensajeTextarea.value;

    // Pegar el texto copiado en el textarea "text-area"
    textAreaDestino.value = mensajeTexto;

    // Limpiar el textarea "mensaje" después de copiar
    mensajeTextarea.value = "";

    // Mostrar un mensaje de confirmación
    // alert('Texto copiado al textarea de destino y el campo de origen ha sido limpiado.');
}