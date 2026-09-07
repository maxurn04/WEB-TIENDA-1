var catalogo = JSON.parse(localStorage.getItem('catalogo_retro'));

if (catalogo === null) {
        catalogo = [
            { id: 1, codigo: "BAR000001", nombre: "PlayStation 2", precio: 60000, stock: 4, stockCritico: 2, img: "../img/ps2.jpg", img2: "../img/ps2-2.jpg", categoria: "Consolas", desc:"La PlayStation 2 (PS2) es una consola de videojuegos de sexta generación desarrollada por Sony Computer Entertainment. Fue lanzada en marzo de 2000 y se convirtió en una de las consolas más exitosas de todos los tiempos, con una amplia biblioteca de juegos y compatibilidad con juegos de la PlayStation original."},
            { id: 2, codigo: "BAR000002", nombre: "Zelda 64", precio: 30000, stock: 5, stockCritico: 2, img: "../img/zelda64.webp", img2: "../img/zelda64-2.webp", categoria: "Juegos", desc:"Zelda 64 es un videojuego de acción y aventura desarrollado por Nintendo. Fue lanzado en 1998 para la Nintendo 64 y se considera uno de los mejores juegos de la serie."},
            { id: 3, codigo: "BAR000003", nombre: "Bolso Cartier", precio: 50000, stock: 8, stockCritico: 3, img: "../img/bolsoEjemplo.webp", img2: "../img/bolsoEjemplo-2.webp", categoria: "Accesorios", desc:"Bolso Cartier es un accesorio de lujo fabricado por la prestigiosa marca francesa Cartier. Es conocido por su diseño elegante y su calidad excepcional."},
            { id: 4, codigo: "BAR000004", nombre: "PlayStation 3", precio: 85000, stock: 2, stockCritico: 1, img: "../img/ps3.jpg", img2: "../img/ps3-2.jpg", categoria: "Consolas", desc:"La PlayStation 3 (PS3) es una consola de videojuegos de séptima generación desarrollada por Sony Computer Entertainment. Fue lanzada en 2006 y se caracterizó por su potente hardware y soporte para el formato Blu-ray."},
            { id: 5, codigo: "BAR000005", nombre: "Zeebo", precio: 35000, stock: 2, stockCritico: 1, img: "../img/zeebo.jpeg", img2: "../img/zeebo-2.jpeg", categoria: "Consolas", desc:"Zeebo es una consola de videojuegos diseñada para ser utilizada con un televisor estándar. Fue desarrollada por Activision y lanzada en 2011."},
            { id: 6, codigo: "BAR000006", nombre: "GameCube", precio: 40000, stock: 1, stockCritico: 0, img: "../img/gamecub.jpg", img2: "../img/gamecub-2.webp", img3: "../img/gamecub-3.jpg", categoria: "Consolas", desc:"El GameCube es una consola de videojuegos desarrollada por Nintendo. Fue lanzada en 2001 y se caracterizó por su diseño compacto y su control innovador."},
            
            { id: 7, codigo: "BAR000007", nombre: "Super Mario 64", precio: 25000, stock: 10, stockCritico: 3, img: "../img/pendiente.jpg", img2: "../img/pendiente2.jpg", categoria: "Juegos", desc:"Clásico juego de plataformas 3D que definió una era. Explora el castillo de la Princesa Peach y recupera las estrellas de poder."},
            { id: 8, codigo: "BAR000008", nombre: "Mando DualShock 2", precio: 15000, stock: 15, stockCritico: 5, img: "../img/pendiente.jpg", img2: "../img/pendiente2.jpg", categoria: "Accesorios", desc:"Control original para PlayStation 2, color negro. Precisión y comodidad con vibración integrada para una mejor experiencia."},
            { id: 9, codigo: "BAR000009", nombre: "Sega Dreamcast", precio: 75000, stock: 3, stockCritico: 1, img: "../img/pendiente.jpg", img2: "../img/pendiente2.jpg", categoria: "Consolas", desc:"La última consola de Sega. Pionera en el juego en línea y con un catálogo lleno de innovadoras joyas arcade."},
            { id: 10, codigo: "BAR000010", nombre: "Tira de Luces RGB 5m", precio: 12000, stock: 20, stockCritico: 5, img: "../img/pendiente.jpg", img2: "../img/pendiente2.jpg", categoria: "Accesorios", desc:"Ilumina tu setup gamer con esta tira LED RGB de 5 metros. Control remoto incluido con múltiples modos de iluminación para darle estilo a tu pieza."},
            { id: 11, codigo: "BAR000011", nombre: "Halo: Combat Evolved", precio: 20000, stock: 7, stockCritico: 2, img: "../img/pendiente.jpg", img2: "../img/pendiente2.jpg", categoria: "Juegos", desc:"El revolucionario shooter en primera persona que lanzó al estrellato a la primera consola Xbox. Únete al Jefe Maestro en su épica lucha."},
            { id: 12, codigo: "BAR000012", nombre: "Memory Card PS2 8MB", precio: 8000, stock: 12, stockCritico: 4, img: "../img/pendiente.jpg", img2: "../img/pendiente2.jpg", categoria: "Accesorios", desc:"Tarjeta de memoria oficial de 8MB para PlayStation 2. Guarda todas tus partidas y no pierdas tu progreso en tus juegos favoritos."}
        ];
    
    localStorage.setItem('catalogo_retro', JSON.stringify(catalogo));
}
function renderizarproductos() {
    var conte = document.getElementById('productos-tod-cons');
    
    if(!conte) return;
    conte.innerHTML = '';

    catalogo.filter(prod => prod.categoria === "Consolas" || prod.categoria === "Juegos").forEach(prod => {
        conte.innerHTML += 
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
document.addEventListener('DOMContentLoaded', renderizarproductos);

