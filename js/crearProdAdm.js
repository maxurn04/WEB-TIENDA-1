document.addEventListener('DOMContentLoaded', function() {
    
    var formulario = document.getElementById('form-producto');
    
    if (formulario !== null) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault(); 

            var codigo = document.getElementById('admin-codigo').value;
            var nombre = document.getElementById('admin-nombre').value;
            var desc = document.getElementById('admin-desc').value;
            var precio = parseFloat(document.getElementById('admin-precio').value);
            var stock = parseInt(document.getElementById('admin-stock').value);
            var stockCritico = parseInt(document.getElementById('admin-stock-critico').value) || 0;
            var categoria = document.getElementById('admin-categoria').value;
            var img = document.getElementById('admin-img').value;

            if (img === "") {
                img = "../img/tiandaplaceholde.png";
            }

            var catalogo = JSON.parse(localStorage.getItem('catalogo_retro')) || [];


            var nuevoId = 1;
            if (catalogo.length > 0) {
                var ultimoProducto = catalogo[catalogo.length - 1];
                nuevoId = Number(ultimoProducto.id) + 1;
            }

            var nuevoProducto = {
                id: nuevoId,
                codigo: codigo,
                nombre: nombre,
                desc: desc,
                precio: precio,
                stock: stock,
                stockCritico: stockCritico,
                categoria: categoria,
                img: img
            };

            catalogo.push(nuevoProducto);
            localStorage.setItem('catalogo_retro', JSON.stringify(catalogo));


            alert("Producto creado.");
            window.location.href = "mostrarproductos.html";
        });
    }
});