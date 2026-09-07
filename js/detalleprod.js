document.addEventListener('DOMContentLoaded', () => {
    const parametrosURL = new URLSearchParams(window.location.search);
    const idProductoUrl = parseInt(parametrosURL.get('id'));
    const catalogoActualizado = JSON.parse(localStorage.getItem('catalogo_retro')) || [];
    const prod = catalogoActualizado.find(item => item.id === idProductoUrl);

    if (prod) {
        document.getElementById('detalle-img').src = prod.img;
        document.getElementById('detalle-img2').src = prod.img2;
        document.getElementById('detalle-img3').src = prod.img3;
        document.getElementById('codigo-prod').textContent = prod.codigo;
        document.getElementById('detalle-nombre').textContent = prod.nombre;
        document.getElementById('detalle-precio').textContent = `CLP$${prod.precio}`;
        document.getElementById('nombre-producto').textContent = prod.nombre;
        if (prod.stock <= prod.stockCritico){
            document.getElementById('stock-producto').innerHTML = `Stock: ${prod.stock} <p class= "fuente-palabras marcar-efecto">¡Quedan pocos!</p>`;
        }else{
            document.getElementById('stock-producto').textContent = `Stock: ${prod.stock}`;
        }
        document.getElementById('detalle-desc').textContent = prod.desc || "No hay descripcion del articulo";

        document.getElementById('btn-agregar-detalle').addEventListener('click', () => {const cantidadSeleccionada = parseInt(document.getElementById('detalle-cantidad').value);
            agregarAlCarritoVariable(prod, cantidadSeleccionada);
        });

    } else {
        document.getElementById('detalle-nombre').textContent = "Producto No Encontrado";
        document.getElementById('detalle-img').alt = "Error";
    }
});

function agregarAlCarritoVariable(producto, cantidad) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; //traemos el carrito del local storage (o se crea si no existe)
    const i = carrito.findIndex(item => item.id === producto.id);
    
    if (i !== -1) {
        carrito[i].cantidad += cantidad; 
    } else if (i === -1){
        const nuevoItem = { ...producto, cantidad: cantidad };
        carrito.push(nuevoItem);
    }else {
        const nuevoItem = { ...producto, cantidad: cantidad };
        carrito.push(nuevoItem);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    if (typeof actualizarContadorCarrito === 'function') {
        actualizarContadorCarrito();
    }
    
    alert(`¡Se añadieron ${cantidad} ${producto.nombre} a tu carrito!`);
}