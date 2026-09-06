document.getElementById('f-login').addEventListener('submit', function(e) {
    e.preventDefault();

    var correoIngresado = document.getElementById('login-correo').value.trim().toLowerCase();
    var passwIngresada = document.getElementById('login-passw').value.trim();

    // CASOS ESPECIALES DE ACCESO ADMINISTRADOR/VENTAS
    if (correoIngresado === "admin@gmail.com" && passwIngresada === "admin") {
        var usuarioAdmin = { nombre: "Administrador", correo: "admin@gmail.com", tipo: "Administrador" };
        localStorage.setItem('usuario_activo', JSON.stringify(usuarioAdmin));
        
        alert("¡Bienvenido, Administrador!");
        window.location.href = '../html/admin/inicioadmin.html';
        return; 
    }

    if (correoIngresado === "vendedor1@gmail.com" && passwIngresada === "vendedor2026") {
        var usuarioVendedor = { nombre: "Vendedor", correo: "vendedor1@gmail.com", tipo: "Vendedor" };
        localStorage.setItem('usuario_activo', JSON.stringify(usuarioVendedor));
        
        alert("¡Bienvenido, Vendedor!");
        window.location.href = '../html/admin/inicioadmin.html';
        return; 
    }

    // BUSQUEDA NORMAL (user o cliente)
    var usuarios = JSON.parse(localStorage.getItem('lista_usuarios')) || [];

    var usuarioEncontrado = usuarios.find(function(user) {
        return user.correo.toLowerCase() === correoIngresado && user.contra === passwIngresada;
    });

    if (usuarioEncontrado !== undefined) {
        localStorage.setItem('usuario_activo', JSON.stringify(usuarioEncontrado));

        alert("¡Bienvenido de nuevo, " + usuarioEncontrado.nombre + "!");

        window.location.href = '../index.html'; 
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});