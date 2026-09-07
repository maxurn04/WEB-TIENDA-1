document.getElementById('f-login').addEventListener('submit', function(e) {
    e.preventDefault();

    var correoIngresado = document.getElementById('login-correo').value.trim().toLowerCase();
    var passwIngresada = document.getElementById('login-passw').value.trim();

    if (correoIngresado.length > 100){
        alert("El correo no puede superar los 100 caracteres. Prueba con otro.")
        return;
    }
    if  ((!correoIngresado.endsWith("@duoc.cl")) && (!correoIngresado.endsWith("@profesor.duoc.cl")) && (!correoIngresado.endsWith("@gmail.com"))){
        alert("Solo se permiten correos @duoc.cl - @profesor.duoc.cl y @gmail.com. Prueba con otro.")
        return;
    }

    if (passwIngresada.length < 4 || passwIngresada.length > 10) {
        alert("Error: La contraseña debe tener entre 4 y 10 caracteres.");
        return;
    }

    //CASOS ESPECIALES DE ACCESO ADMINISTRADOR/VENTAS
    if (correoIngresado === "admin@gmail.com" && passwIngresada === "admin.2026") {
        var usuarioAdmin = { nombre: "Administrador", correo: "admin@gmail.com", tipo: "Administrador" };
        localStorage.setItem('usuario_activo', JSON.stringify(usuarioAdmin));
        
        alert("¡Bienvenido, Administrador!");
        window.location.href = '../html/admin/inicioadmin.html';
        return; 
    }

    if (correoIngresado === "vendedor1@gmail.com" && passwIngresada === "vendedorEjemp") {
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

        alert("¡Bienvenido, " + usuarioEncontrado.nombre + "!");

        window.location.href = '../index.html'; 
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});