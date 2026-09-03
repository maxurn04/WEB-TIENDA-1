document.addEventListener("DOMContentLoaded", function() {
    const usuarioActivo = JSON.parse(localStorage.getItem('usuario_activo'));

    const menuInvitado = document.getElementById('menu-invitado');
    const menuUsuario = document.getElementById('menu-usuario');
    const spanNombre = document.getElementById('nombre-usuario');
    const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');

    if (usuarioActivo) {
        if (menuInvitado) menuInvitado.style.display = 'none'; 
        if (menuUsuario) menuUsuario.style.display = 'block';   
        if (spanNombre) spanNombre.textContent = usuarioActivo.nombre; 
    } else {
        
        if (menuInvitado) menuInvitado.style.display = 'block';
        if (menuUsuario) menuUsuario.style.display = 'none';
    }

    
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener('click', function(e){
            e.preventDefault();
            localStorage.removeItem('usuario_activo'); 
            window.location.reload(); 
        });
    }
});