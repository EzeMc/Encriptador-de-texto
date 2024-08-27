document.getElementById('encriptar').addEventListener('click', function() {
    let texto = document.getElementById('texto').value;
    let mensajeEncriptado = encriptarTexto(texto);

    document.getElementById('imagen-contenedor').style.display = 'none';
    document.getElementById('mensaje').style.display = 'block';
    document.getElementById('copiar').style.display = 'block';

    document.getElementById('mensaje').value = mensajeEncriptado;
});

document.getElementById('desencriptar').addEventListener('click', function() {
    let texto = document.getElementById('mensaje').value;
    let mensajeDesencriptado = desencriptarTexto(texto);
    document.getElementById('mensaje').value = mensajeDesencriptado;
});

document.getElementById('copiar').addEventListener('click', function() {
    let mensaje = document.getElementById('mensaje');
    mensaje.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

const validarTexto = (texto) => {
    const regex = /^[a-z\s]*$/; // Expresión regular que permite solo letras minúsculas y espacios
    return regex.test(texto);
};

const encriptarTexto = (texto) => {
    if (!validarTexto(texto)) {
        return "El texto contiene caracteres no válidos. Solo se permiten letras minúsculas sin acentos ni caracteres especiales.";
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
};

const desencriptarTexto = (texto) => {
    if (!validarTexto(texto)) {
        return "El texto contiene caracteres no válidos. Solo se permiten letras minúsculas sin acentos ni caracteres especiales.";
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
};

