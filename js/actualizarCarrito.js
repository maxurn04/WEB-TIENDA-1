function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let itemsTotales = 0;
    
    carrito.forEach(producto => {itemsTotales += producto.cantidad});

    const contadorHTML = document.getElementById('contador-carrito');
    if (contadorHTML) {
        contadorHTML.textContent = itemsTotales;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {actualizarContadorCarrito()});