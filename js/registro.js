document.getElementById('f-registro').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('r-nombre').value.trim();
    const correo = document.getElementById('r-correo').value.trim().toLowerCase();
    const confirmarCorreo = document.getElementById('r-correo-conf').value.trim().toLowerCase();
    const passw = document.getElementById('r-passw').value.trim();
    const confirmarPassw = document.getElementById('r-passw-conf').value.trim();
    const telefono = document.getElementById('r-telf').value.trim();
    const region = document.getElementById('r-reg').value.trim();
    const comuna = document.getElementById('r-comu').value.trim();

    if (correo != confirmarCorreo){
        alert("Los correos no coinciden.");
        return;
    }

    if (passw != confirmarPassw){
        alert("Las contraseñas no coinciden.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('lista_usuarios')) || [];

    const usuarioExiste = usuarios.find(user => user.correo.toLowerCase() === correo);

    if (usuarioExiste){
        alert("El usuario ya existe.")  
        return;
    }

    const nuevoUser = {
        nombre: nombre,
        correo: correo,
        contra: passw,
        telefono: telefono,
        region: region,
        comuna: comuna
    };

    usuarios.push(nuevoUser);
    localStorage.setItem('lista_usuarios', JSON.stringify(usuarios));
    alert("Registro exitoso. Ahora puedes iniciar sesion con tu correo!")

    window.location.href = 'inicio.html'
})