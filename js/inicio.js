document.getElementById('f-login').addEventListener('submit', function(e) {
    e.preventDefault();

    const correoIngresado = document.getElementById('login-correo').value.trim().toLowerCase();
    const passwIngresada = document.getElementById('login-passw').value.trim();

    let usuarios = JSON.parse(localStorage.getItem('lista_usuarios')) || [];

    const usuarioEncontrado = usuarios.find(user => 
        user.correo.toLowerCase() === correoIngresado && user.contra === passwIngresada
    );

    if (usuarioEncontrado) {
        localStorage.setItem('usuario_activo', JSON.stringify(usuarioEncontrado));

        alert(`¡Bienvenido de nuevo, ${usuarioEncontrado.nombre}!`);

        window.location.href = 'index.html'; 
    }else{
        alert("Correo o contraseña incorrectos.");
    }
});