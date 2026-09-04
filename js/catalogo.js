
//colocar minimo 12 productos (recordar)
const catalogo = [
    { id: 1, nombre: "PlayStation 2", precio: 60000, img: "../img/ps2.jpg", img2: "../img/ps2-2.jpg", categoria: "Consolas", desc:"La PlayStation 2 (PS2) es una consola de videojuegos de sexta generación desarrollada por Sony Computer Entertainment. Fue lanzada en marzo de 2000 y se convirtió en una de las consolas más exitosas de todos los tiempos, con una amplia biblioteca de juegos y compatibilidad con juegos de la PlayStation original."},
    { id: 2, nombre: "Zelda 64", precio: 30000, img: "../img/zelda64.webp", img2: "../img/zelda64-2.webp", categoria: "Juegos", desc:"Zelda 64 es un videojuego de acción y aventura desarrollado por Nintendo. Fue lanzado en 1998 para la Nintendo 64 y se considera uno de los mejores juegos de la serie."},
    { id: 3, nombre: "Bolso Cartier", precio: 50000, img: "../img/bolsoEjemplo.webp", img2: "../img/bolsoEjemplo-2.webp", categoria: "Accesorios", desc:"Bolso Cartier es un accesorio de lujo fabricado por la prestigiosa marca francesa Cartier. Es conocido por su diseño elegante y su calidad excepcional."},
    { id: 4, nombre: "PlayStation 3", precio: 85000, img: "../img/ps3.jpg", img2: "../img/ps3-2.jpg", categoria: "Consolas", desc:"La PlayStation 3 (PS3) es una consola de videojuegos de séptima generación desarrollada por Sony Computer Entertainment. Fue lanzada en 2006 y se caracterizó por su potente hardware y soporte para el formato Blu-ray."},
    { id: 5, nombre: "Zeebo", precio: 35000, img: "../img/zeebo.jpeg", img2: "../img/zeebo-2.jpeg", categoria: "Consolas", desc:"Zeebo es una consola de videojuegos diseñada para ser utilizada con un televisor estándar. Fue desarrollada por Activision y lanzada en 2011."},
    { id: 6, nombre: "GameCube", precio: 40000, img: "../img/gamecub.jpg", img2: "../img/gamecub-2.webp", img3: "../img/gamecub-3.jpg", categoria: "Consolas", desc:"El GameCube es una consola de videojuegos desarrollada por Nintendo. Fue lanzada en 2001 y se caracterizó por su diseño compacto y su control innovador."}
];


function renderizarProductos() {
    var conte = document.getElementById('productos-tod');
    if(!conte) return;

    catalogo.forEach(prod => {conte.innerHTML += 
            `<div class="col-12 col-sm-6 col-lg-3 mb-4">
                <div class="caja-peque">
                    <div>
                        <a href="detalleprod.html?id=${prod.id}">
                            <img src="${prod.img}" alt="${prod.nombre}" class="img-fluid imagen-productos">
                        </a>
                        <p class="fuente-palabras" style="padding-top: 6px; font-size: 14px;">
                            ${prod.nombre}
                        </p>
                    </div>
                    <div class="container mt-3">  
                        <div class="row">
                            <div class="col-6">
                                <p class="ajuste-letras-bloque fuente-palabras-slim click-efecto" onclick="agregarAlCarrito(${prod.id})" title="Añadir al carrito">
                                    + Añadir 1
                                </p>
                            </div>
                            <div class="col-6">
                                <p class="ajuste-letras-bloque-der fuente-palabras-slim">
                                    CLP$${prod.precio}
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

