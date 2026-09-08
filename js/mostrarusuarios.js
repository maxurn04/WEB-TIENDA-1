document.addEventListener('DOMContentLoaded', function() {
    const usuarios = JSON.parse(localStorage.getItem('lista_usuarios')) || [];
    const contenedor = document.getElementById('tabla-productos-admin');
    
    const run = document.getElementById('r-run')
    const nombre = document.getElementById('r-nombre')
    const apellidos = document.getElementById('r-apellidos')
    const correo = document.getElementById('r-correo')
    const passw = document.getElementById('r-passw')
    const telefono = document.getElementById('r-telf')
    const fecha = document.getElementById('r-fecha')
    const direccion = document.getElementById('r-direccion')
    
    const Region = document.getElementById('r-reg')
    const comuna = document.getElementById('r-comu')

    const id = document.getElementById('r-id')
    const botoneditar = document.getElementById('adminboton1')
    const botonborrar = document.getElementById('adminboton2')

    botoneditar.addEventListener("click", function(){
        const list = JSON.parse(localStorage.getItem('lista_usuarios')) || [];
        const usuarioeditado = {
        run: run.value,
        nombre: nombre.value,
        apellidos: apellidos.value,
        correo: correo.value,
        contra: passw.value,
        telefono: telefono.value,
        fechaNacimiento: fecha.value,
        direccion: direccion.value,
        region: Region.value,
        comuna: comuna.value,
        tipo: "Cliente"
    };
        if(id.value < list){
            list[id.value] = usuarioeditado 
            localStorage.setItem('lista_usuarios', JSON.stringify(list));
            alert('Usuario editado')
        }

    })

        botonborrar.addEventListener("click", function(){
        const list = JSON.parse(localStorage.getItem('lista_usuarios')) || [];

        if(id.value < list){
            list.splice(id.value,1)
            localStorage.setItem('lista_usuarios', JSON.stringify(list))
            alert ('Usuario borrado')

        }

    })
    
    usuarios.forEach(function(user, index) {
        const fila = document.createElement('div');
        fila.className = 'row mb-2 pb-2';

        fila.innerHTML = `
            <div class="col-2">${user.run}</div>
            <div class="col-3">${user.nombre} ${user.apellidos}</div>
            <div class="col-2">${user.correo}</div>
            <div class="col-3">${user.telefono}</div>
            <div class="col-2">${user.direccion}</div>
        `;

        fila.addEventListener("click", function(){
            run.value = user.run
            nombre.value =user.nombre
            apellidos.value = user.apellidos
            correo.value = user.correo
            passw.value = user.contra
            telefono.value = user.telefono
            fecha.value = user.fechaNacimiento
            direccion.value = user.direccion
            Region.value = user.region
            comuna.value = user.comuna
            id.value = index
        })

        contenedor.appendChild(fila);
    });
});