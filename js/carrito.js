
function agregarAlCarrito(idProducto) {
    const productoSeleccionado = catalogo.find(item => item.id === idProducto);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    const productoExistente = carrito.find(item => item.id === idProducto);
    
    if (productoExistente) {
        productoExistente.cantidad += 1; 
    } else {
        productoSeleccionado.cantidad = 1;
        carrito.push(productoSeleccionado);
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    alert(`${productoSeleccionado.nombre} fue añadido a tu carrito.`);
}

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let itemsTotales = 0;
    
    carrito.forEach(producto => {
        itemsTotales += producto.cantidad;
    });

    const contadorHTML = document.getElementById('contador-carrito');
    if (contadorHTML) {
        contadorHTML.textContent = itemsTotales;
    }
}