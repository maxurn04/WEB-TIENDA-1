var catalogoAdmin = JSON.parse(localStorage.getItem('catalogo_retro'));

document.addEventListener('DOMContentLoaded', function() {
    renderizarTablaAdmin();
});

function renderizarTablaAdmin() {
    var contenedorLista = document.getElementById('tabla-productos-admin');
    
    if (contenedorLista === null) return; 

    contenedorLista.innerHTML = '';


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
                    <a href="editarprod.html?id=${producto.id}" class="btn admin-btn-nuevo btn-sm w-100" style="padding: 4px 8px; font-size: 0.85rem;">
                        Editar
                    </a>
                </div>
            </div>
        `;
        
        contenedorLista.innerHTML += fila;
    });
}