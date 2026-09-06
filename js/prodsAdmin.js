// 1. CARGAMOS LOS DATOS DESDE EL NAVEGADOR
var catalogoAdmin = JSON.parse(localStorage.getItem('catalogo_retro'));

// Si está vacío, creamos un arreglo de seguridad
if (catalogoAdmin === null) {
    catalogoAdmin = [];
}

// 2. EVENTO: CUANDO LA PÁGINA TERMINA DE CARGAR
document.addEventListener('DOMContentLoaded', function() {
    renderizarTablaAdmin();
});

// 3. FUNCIÓN PARA DIBUJAR LA LISTA DE PRODUCTOS
function renderizarTablaAdmin() {
    var contenedorLista = document.getElementById('tabla-productos-admin');
    
    // Si no encuentra el contenedor, detiene la función para evitar errores
    if (contenedorLista === null) return; 

    contenedorLista.innerHTML = ''; // Limpiamos el contenedor

    // Recorremos la lista de productos
    catalogoAdmin.forEach(function(producto) {
        
        var fila = `
            <div class="row align-items-center mb-2 pb-2" style="border-bottom: 1px solid #cccccc; color: #333333;">
                <div class="col-1">${producto.id}</div>
                <div class="col-2">
                    <img src="../../img/${producto.img}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                </div>
                <div class="col-4">${producto.nombre}</div>
                <div class="col-3">CLP$${producto.precio}</div>
                <div class="col-2 text-center">
                    <a href="editarprod.html?id=${producto.id}" class="btn btn-sm w-100" style="background-color: transparent; border: 1px solid #999999; color: #333333; text-decoration: none;">
                        Editar
                    </a>
                </div>
            </div>
        `;
        
        contenedorLista.innerHTML += fila;
    });
}