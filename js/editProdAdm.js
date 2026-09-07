document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var idProducto = parseInt(urlParams.get('id'));
    var formulario = document.getElementById('form-producto');
    var catalogo = JSON.parse(localStorage.getItem('catalogo_retro')) || [];
    
    var productoActual = catalogo.find(function(p) {
        return p.id === idProducto;
    });

    if (productoActual !== undefined) {
        document.getElementById('admin-nombre').value = productoActual.nombre;
        document.getElementById('admin-codigo').value = productoActual.codigo || '';
        document.getElementById('admin-precio').value = productoActual.precio;
        document.getElementById('admin-stock').value = productoActual.stock || 0;
        document.getElementById('admin-stock-critico').value = productoActual.stockCritico || '';
        document.getElementById('admin-desc').value = productoActual.desc || '';
        document.getElementById('admin-categoria').value = productoActual.categoria || '';
        document.getElementById('admin-img').value = productoActual.img || '';
    } else {
        alert("Producto no encontrado.");
        window.location.href = "mostrarproductos.html";
    }

    if (formulario !== null) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();

            var codigo = document.getElementById('admin-codigo').value.trim();
            var nombre = document.getElementById('admin-nombre').value.trim();
            var desc = document.getElementById('admin-desc').value.trim();
            var precio = parseFloat(document.getElementById('admin-precio').value);
            var stock = parseInt(document.getElementById('admin-stock').value);
            var stockCriticoInput = document.getElementById('admin-stock-critico').value.trim();
            var stockCritico = stockCriticoInput === "" ? 0 : parseInt(stockCriticoInput);
            var categoria = document.getElementById('admin-categoria').value;
            var img = document.getElementById('admin-img').value.trim();

            if (img === "") {
                img = "../img/tiandaplaceholde.png";
            }

            if (codigo.length < 3) {
                alert("Error: El código debe tener un mínimo de 3 caracteres.");
                return;
            }

            if (nombre === "" || nombre.length > 100) {
                alert("Error: El nombre es obligatorio y máximo 100 caracteres.");
                return;
            }

            if (desc.length > 500) {
                alert("Error: La descripción máximo 500 caracteres.");
                return;
            }

            if (isNaN(precio) || precio < 0) {
                alert("Error: El precio debe ser mayor o igual a 0.");
                return;
            }

            if (isNaN(stock) || stock < 0 || !Number.isInteger(stock)) {
                alert("Error: El stock debe ser un número entero y mayor o igual a 0.");
                return;
            }

            if (stockCriticoInput !== "" && (isNaN(stockCritico) || stockCritico < 0 || !Number.isInteger(stockCritico))) {
                alert("Error: El stock crítico debe ser un número entero válido.");
                return;
            }

            productoActual.codigo = codigo;
            productoActual.nombre = nombre;
            productoActual.desc = desc;
            productoActual.precio = precio;
            productoActual.stock = stock;
            productoActual.stockCritico = stockCritico;
            productoActual.categoria = categoria;
            productoActual.img = img;

            localStorage.setItem('catalogo_retro', JSON.stringify(catalogo));
            alert("¡Producto actualizado con éxito!");
            window.location.href = "mostrarproductos.html";
        });
    }
});