document.getElementById('formContacto').addEventListener('submit', function (e) {
    e.preventDefault();

    let esValido = true;

    const nombre = document.getElementById('nombreId').value.trim();
    const correo = document.getElementById('correoContacto').value.trim();
    const mensaje = document.getElementById('mensajeContacto').value.trim();

    const errorNombre = document.getElementById('errorNombre');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorMensaje = document.getElementById('errorMensaje');

    errorNombre.textContent = '';
    errorCorreo.textContent = '';
    errorMensaje.textContent = '';

    if (nombre === '') {
        errorNombre.textContent = 'El nombre es requerido.';
        esValido = false;
    } else if (nombre.length > 100) {
        errorNombre.textContent = 'El nombre no puede superar los 100 caracteres.';
        esValido = false;
    }

    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === '') {
        errorCorreo.textContent = 'El correo es requerido.';
        esValido = false;
    } else if (correo.length > 100) {
        errorCorreo.textContent = 'El correo no puede superar los 100 caracteres.';
        esValido = false;
    } else if (!correoRegex.test(correo)) {
        errorCorreo.textContent = 'Ingresa un correo válido.';
        esValido = false;
    } else if (!dominiosPermitidos.some(dominio => correo.toLowerCase().endsWith(dominio))) {
        errorCorreo.textContent = 'Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com.';
        esValido = false;
    }

    if (mensaje === '') {
        errorMensaje.textContent = 'El comentario es requerido.';
        esValido = false;
    } else if (mensaje.length > 500) {
        errorMensaje.textContent = 'El comentario no puede superar los 500 caracteres.';
        esValido = false;
    }

    if (esValido) {
        console.log('Formulario válido, listo para enviar.');
        alert("Mensaje enviado con exito!!")
    }
});