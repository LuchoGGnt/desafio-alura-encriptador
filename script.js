// Selecciona los elementos necesarios
const btnEncriptar = document.querySelector('.boton-izquierdo');
const btnDesencriptar = document.querySelector('.boton-derecho');
const btnCopiar = document.getElementById('copiar');
const imagenRelleno = document.querySelector('.imagen-relleno');
const parrafos = document.querySelectorAll('.informacion-adicional p');
const textoEncriptado = document.getElementById('texto-encriptado');
const inputText = document.getElementById('input_text');
const contenidoPredeterminado = document.getElementById('contenido-predeterminado');

// Función para encriptar el texto
function encriptar() {
    let texto = inputText.value.toLowerCase();

    // Reemplaza las letras según las reglas de encriptación
    let textoEncriptadoStr = texto.replace(/a/g, "ai")
                                  .replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");

    // Actualiza el contenido del párrafo
    textoEncriptado.textContent = textoEncriptadoStr;

    // Oculta los elementos predeterminados y muestra el botón "Copiar"
    ocultarContenidoPredeterminado();
    btnCopiar.style.display = 'block';
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = inputText.value.toLowerCase();

    // Reemplaza los patrones encriptados por las letras originales
    let textoDesencriptadoStr = texto.replace(/ufat/g, "u")
                                     .replace(/ober/g, "o")
                                     .replace(/imes/g, "i")
                                     .replace(/enter/g, "e")
                                     .replace(/ai/g, "a");

    // Actualiza el contenido del párrafo
    textoEncriptado.textContent = textoDesencriptadoStr;

    // Oculta los elementos predeterminados y muestra el botón "Copiar"
    ocultarContenidoPredeterminado();
    btnCopiar.style.display = 'block';
}

// Función para ocultar la imagen y los párrafos
function ocultarContenidoPredeterminado() {
    imagenRelleno.style.display = 'none';
    parrafos.forEach(parrafo => parrafo.style.display = 'none');
}

// Asocia las funciones a los botones
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
