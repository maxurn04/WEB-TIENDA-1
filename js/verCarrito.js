document.addEventListener('DOMContentLoaded', () => {
    renderizarPaginaCarrito();
});

function renderizarPaginaCarrito() {

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('cuerpo-carrito');
    const totalElement = document.getElementById('total-carrito');

    if (!contenedor) return;


    contenedor.innerHTML = '';
    let totalVenta = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-white py-5 fuente-palabras-slim">
                    Tu carrito está vacio.
                </td>
            </tr>
        `;
        totalElement.textContent = 'CLP$0';
        return;
    }

    carrito.forEach(producto => {

        const subtotal = producto.precio * producto.cantidad;
        totalVenta += subtotal; 
        contenedor.innerHTML += `
            <div class="row align-items-center text-white mb-3 pb-3" style="border-bottom: 1px solid #bca624;">
    
    <div class="col-3 col-md-2 text-center">
        <img src="${producto.img}" alt="${producto.nombre}" class="imagen-productos img-fluid" style="border-radius: 8px;">
    </div>

    <div class="col-7 col-md-3">
        <div class="fuente-palabras text-truncate">${producto.nombre}</div>
        <div class="fuente-palabras-slim">CLP$${producto.precio}</div>
    </div>

    <div class="col-2 col-md-1 text-end order-md-last">
        <button onclick="eliminarDelCarrito(${producto.id})" class="btn btn-sm fw-bold fuente-palabras" style = "background-color: #dc3545;">X</button>
    </div>

    <div class="col-6 col-md-3 text-center mt-3 mt-md-0">
        <button onclick="cambiarCantidad(${producto.id}, -1)" class="btn btn-sm fuente-palabras fw-bold " style = "font-size: 20px; background-color: #bca624;">-</button>
        <span class="mx-2 fuente-palabras">${producto.cantidad}</span>
        <button onclick="cambiarCantidad(${producto.id}, 1)" class="btn btn-sm fuente-palabras fw-bold " style = "font-size: 20px; background-color: #bca624;">+</button>
    </div>

    <div class="col-6 col-md-3 text-warning fw-bold text-end text-md-center mt-3 mt-md-0">
        CLP$${subtotal}
    </div>

</div>
        `;
    });
    totalElement.textContent = `CLP$${totalVenta}`;
}

function cambiarCantidad(idProducto, modificador) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(item => item.id === idProducto);

    if (index !== -1) {
        carrito[index].cantidad += modificador;

        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1); 
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderizarPaginaCarrito();
        if (typeof actualizarContadorCarrito === 'function') actualizarContadorCarrito();
    }
}

function eliminarDelCarrito(idProducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    carrito = carrito.filter(item => item.id !== idProducto);
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarPaginaCarrito();
    if (typeof actualizarContadorCarrito === 'function') actualizarContadorCarrito();
}