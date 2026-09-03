
//colocar minimo 12 productos (recordar)
const catalogo = [
    { id: 1, nombre: "PlayStation 2", precio: 60000, img: "../img/ps2.jpg", categoria: "Consolas"},
    { id: 2, nombre: "Zelda 64", precio: 30000, img: "../img/zelda64.webp", categoria: "Juegos"},
    { id: 3, nombre: "Bolso Cartier", precio: 50000, img: "../img/bolsoEjemplo.webp", categoria: "Accesorios"},
    { id: 4, nombre: "PlayStation 3", precio: 85000, img: "../img/ps3.jpg", categoria: "Consolas"},
    { id: 5, nombre: "Zeebo", precio: 35000, img: "../img/zeebo.jpeg", categoria: "Consolas"},
    { id: 6, nombre: "GameCube", precio: 40000, img: "../img/gamecub.jpg", categoria: "Consolas"}
];


function renderizarProductos() {
    var conte = document.getElementById('grilla-productos');
    if(!conte) return;

    catalogo.filter(pro => pro.categoria === "Consolas" || pro.categoria === "Juegos").forEach(pro => {
        conte.innerHTML += 
            `<div class="col-12 col-sm-6 col-lg-3 mb-4">
                <div class="caja-peque">
                    <div>
                        <a href="detalleprod.html?id=${pro.id}">
                            <img src="${pro.img}" alt="${pro.nombre}" class="img-fluid imagen-productos">
                        </a>
                        <p class="fuente-palabras" style="padding-top: 6px; font-size: 14px;">
                            ${pro.nombre}
                        </p>
                    </div>
                    <div class="container mt-3">  
                        <div class="row">
                            <div class="col-6">
                                <p class="ajuste-letras-bloque fuente-palabras-slim click-efecto" onclick="agregarAlCarrito(${pro.id})" title="Añadir al carrito">
                                    + Añadir 1
                                </p>
                            </div>
                            <div class="col-6">
                                <p class="ajuste-letras-bloque-der fuente-palabras-slim">
                                    CLP$${pro.precio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
document.addEventListener('DOMContentLoaded', renderizarProductos);

