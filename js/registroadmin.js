const datosUbicacion = [
    {
        region: "Región Metropolitana",
        comunas: ["Santiago Centro", "Providencia", "Ñuñoa", "La Florida", "San Joaquin", "Macul"]
    },
    {
        region: "Región de Valparaíso",
        comunas: ["Valparaíso", "Viña del Mar", "Quilpué"]
    },
    {
        region: "Región de O'Higgins",
        comunas: ["Rancagua", "Machalí", "San Fernando"]
    },
    {
        region: "Región del Maule",
        comunas: ["Talca", "Curicó", "Linares"]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const selectReg = document.getElementById('r-reg');
    
    datosUbicacion.forEach(function(item, index) {
        const opcion = document.createElement('option');
        opcion.value = index;
        opcion.textContent = item.region;
        selectReg.appendChild(opcion);
    });
});

document.getElementById('r-reg').addEventListener('change', function() {
    const selectCom = document.getElementById('r-comu');
    const indiceRegion = this.value;
    
    selectCom.innerHTML = '<option value="">Seleccione la comuna</option>';

    if (indiceRegion !== "") {
        const comunas = datosUbicacion[indiceRegion].comunas;
        comunas.forEach(function(comuna) {
            const opcion = document.createElement('option');
            opcion.value = comuna;
            opcion.textContent = comuna;
            selectCom.appendChild(opcion);
        });
    }
});

document.getElementById('f-registro').addEventListener('submit', function(e) {
    e.preventDefault();

    const run = document.getElementById('r-run').value.trim().toUpperCase();
    const nombre = document.getElementById('r-nombre').value.trim();
    const apellidos = document.getElementById('r-apellidos').value.trim();
    const correo = document.getElementById('r-correo').value.trim().toLowerCase();
    const passw = document.getElementById('r-passw').value.trim();
    const telefono = document.getElementById('r-telf').value.trim();
    const fecha = document.getElementById('r-fecha').value;
    const direccion = document.getElementById('r-direccion').value.trim();
    
    const indiceRegion = document.getElementById('r-reg').value;
    const comunaSeleccionada = document.getElementById('r-comu').value;

    if (run.length < 7 || run.length > 9) {
        alert("El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guión.");
        return;
    }

    if (nombre.length > 50) {
        alert("El nombre no puede superar los 50 caracteres.");
        return;
    }

    if (apellidos.length > 100) {
        alert("Los apellidos no pueden superar los 100 caracteres.");
        return;
    }

    if (direccion.length > 300) {
        alert("La dirección no puede superar los 300 caracteres.");
        return;
    }

    if (!correo.endsWith("@duoc.cl") && !correo.endsWith("@profesor.duoc.cl") && !correo.endsWith("@gmail.com")) {
        alert("Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.");
        return;
    }


    if (passw.length < 4 || passw.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.");
        return;
    }


    let usuarios = JSON.parse(localStorage.getItem('lista_usuarios')) || [];

    const usuarioExiste = usuarios.find(user => user.correo.toLowerCase() === correo);

    if (usuarioExiste) {
        alert("Ya existe un usuario registrado con este correo.");
        return;
    }
    
    const regionTexto = datosUbicacion[indiceRegion].region;

    const nuevoUser = {
        run: run,
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        contra: passw,
        telefono: telefono,
        fechaNacimiento: fecha,
        direccion: direccion,
        region: regionTexto,
        comuna: comunaSeleccionada,
        tipo: "Cliente"
    };

    usuarios.push(nuevoUser);
    localStorage.setItem('lista_usuarios', JSON.stringify(usuarios));
    
    alert("Usuario creado con exito");
});