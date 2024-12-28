// Productos
const productos = [
    {
        id: 1, 
        nombre: "Blusa Blanca",
        descripcion: "Blusa Blanca",
        imagen: "1BlusaBlanca.jpg",
        precio: 25.900,
        stock: 5,
    }, 
    {
        id: 2, 
        nombre: "Blusa Celeste",
        descripcion: "Blusa Celeste",
        imagen: "2BlusaCeleste.jpg",
        precio: 25.900,
        stock: 5,
    },
    {
        id: 3, 
        nombre: "Blusa Cuadriculada Celeste",
        descripcion: "Blusa Cuadriculada Celeste",
        imagen: "3BlusaCuadriculadaCeleste.jpg",
        precio: 25.900,
        stock: 5,
    },
    {
        id: 4, 
        nombre: "Body Camaleon Celeste",
        descripcion: "Body Camaleon Celeste",
        imagen: "4BodyCamaleonCeleste.jpg",
        precio: 16.850,
        stock: 5,
    },
    {
        id: 5, 
        nombre: "Body Colibri Blanco",
        descripcion: "Body Colibri Blanco",
        imagen: "5BodyColibriBlanco.jpg",
        precio: 16.850,
        stock: 5,
    },
    {
        id: 6, 
        nombre: "Body Crema Rosa",
        descripcion: "Body Crema Rosa",
        imagen: "6BodyCremaRosa.jpg",
        precio: 16.850,
        stock: 5,
    },
    {
        id: 7, 
        nombre: "Body Gris",
        descripcion: "Body Gris",
        imagen: "7BodyGris.jpg",
        precio: 16.850,
        stock: 5,
    },
    {
        id: 8, 
        nombre: "Body Marino",
        descripcion: "Body Marino",
        imagen: "8BodyMarino.jpg",
        precio: 16.850,
        stock: 5,
    },
    {
        id: 9, 
        nombre: "Body Mariposa Blanco",
        descripcion: "Body Mariposa Blanco",
        imagen: "9BodyMariposaBlanco.jpg",
        precio: 16.850,
        stock: 5,
    },
    {
        id: 10, 
        nombre: "Body Rayas Negras",
        descripcion: "Body Rayas Negras",
        imagen: "10BodyRayasNegras.jpg",
        precio: 16.850,
        stock: 5,
    },
    {
        id: 11, 
        nombre: "Body Vainilla Lino",
        descripcion: "Body Vainilla Lino",
        imagen: "11BodyVainillaLino.jpg",
        precio: 16.850,
        stock: 5,
    },
    {
        id: 12, 
        nombre: "Bombachudo Broderie",
        descripcion: "Bombachudo Broderie",
        imagen: "12BombachudoBroderie.jpg",
        precio: 15.700,
        stock: 5,
    },
    {
        id: 13, 
        nombre: "Bombachudo Celeste Rayado",
        descripcion: "Bombachudo Celeste Rayado",
        imagen: "13BombachudoCelesteRayasBlancasLino.jpg",
        precio: 15.700,
        stock: 5,
    },
    {
        id: 14, 
        nombre: "Bombachudo Maiz Lino",
        descripcion: "Bombachudo Maiz Lino",
        imagen: "14BombachudoMaizLino.jpg",
        precio: 15.700,
        stock: 5,
    },
    {
        id: 15, 
        nombre: "Bombachudo Rosa Lino",
        descripcion: "Bombachudo Rosa Lino",
        imagen: "15BombachudoRosaLino.jpg",
        precio: 15.700,
        stock: 5,
    },
    {
        id: 16, 
        nombre: "Camisa Azul Rayas Rojas",
        descripcion: "Camisa Azul Rayas Rojas",
        imagen: "16CamisaAzulRayasRojas.jpg",
        precio: 28.600,
        stock: 5,
    },
    {
        id: 17, 
        nombre: "Camisa Cuadriculada Camel",
        descripcion: "Camisa Cuadriculada Camel",
        imagen: "17CamisaCuadriculadaCamelAzul.jpg",
        precio: 28.600,
        stock: 5,
    },
    {
        id: 18, 
        nombre: "Camisa Rayada Blanco Negro",
        descripcion: "Camisa Rayada Blanco Negro",
        imagen: "18CamisaRayadaBlancoNegro.jpg",
        precio: 28.600,
        stock: 5,
    },
    {
        id: 19, 
        nombre: "Musculosa Aguamarina",
        descripcion: "Musculosa Aguamarina",
        imagen: "19MusculosaAguamarina.jpg",
        precio: 16.600,
        stock: 5,
    },
    {
        id: 20, 
        nombre: "Musculosa Amarilla",
        descripcion: "Musculosa Amarilla",
        imagen: "20MusculosaAmarilla.jpg",
        precio: 16.600,
        stock: 5,
    },
    {
        id: 21, 
        nombre: "Musculosa Celeste",
        descripcion: "Musculosa Celeste",
        imagen: "21MusculosaCeleste.jpg",
        precio: 16.600,
        stock: 5,
    },
    {
        id: 22, 
        nombre: "Musculosa Gris",
        descripcion: "Musculosa Gris",
        imagen: "22MusculosaGris.jpg",
        precio: 16.600,
        stock: 5,
    },
    {
        id: 23, 
        nombre: "Musculosa Kale",
        descripcion: "Musculosa Kale",
        imagen: "23MusculosaKale.jpg",
        precio: 16.600,
        stock: 5,
    },
    {
        id: 24, 
        nombre: "Musculosa Rosa",
        descripcion: "Musculosa Rosa",
        imagen: "24MusculosaRosa.jpg",
        precio: 16.600,
        stock: 5,
    },
    {
        id: 25, 
        nombre: "Remera Arena",
        descripcion: "Remera Arena",
        imagen: "25RemeraArena.jpg",
        precio: 16.990,
        stock: 5,
    },
    {
        id: 26, 
        nombre: "Remera Gris",
        descripcion: "Remera Gris",
        imagen: "26RemeraGris.jpg",
        precio: 16.990,
        stock: 5,
    },
    {
        id: 27, 
        nombre: "Remera Marino",
        descripcion: "Remera Marino",
        imagen: "27RemeraMarino.jpg",
        precio: 16.990,
        stock: 5,
    },
    {
        id: 28, 
        nombre: "Remera Verde",
        descripcion: "Remera Verde",
        imagen: "28RemeraVerde.jpg",
        precio: 16.990,
        stock: 5,
    },
    {
        id: 29, 
        nombre: "Short Arena Lino",
        descripcion: "Short Arena Lino",
        imagen: "29ShortArenaLino.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 30, 
        nombre: "Short Blanco Lino",
        descripcion: "Short Blanco Lino",
        imagen: "30ShortBlancoLino.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 31, 
        nombre: "Short Camel",
        descripcion: "Short Camel",
        imagen: "31ShortCamel.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 32, 
        nombre: "Short Celeste Rayas Blancas",
        descripcion: "Short Celeste Rayas Blancas",
        imagen: "32ShortCelesteRayasBlancasLino.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 33, 
        nombre: "Short Ciruela",
        descripcion: "Short Ciruela",
        imagen: "33ShortCiruela.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 34, 
        nombre: "Short Gris",
        descripcion: "Short Gris",
        imagen: "34ShortGris.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 35, 
        nombre: "Short Marino",
        descripcion: "Short Marino",
        imagen: "35ShortMarino.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 36, 
        nombre: "Short Marino Rayas Blancas",
        descripcion: "Short Marino Rayas Blancas",
        imagen: "36ShortMarinoRayasBlancasLino.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 37, 
        nombre: "Short Rosa",
        descripcion: "Short Rosa",
        imagen: "37ShortRosa.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 38, 
        nombre: "Short Terracota",
        descripcion: "Short Terracota",
        imagen: "38ShortTerracota.jpg",
        precio: 23.590,
        stock: 5,
    },
    {
        id: 39, 
        nombre: "Vestido Amarillo",
        descripcion: "Vestido Amarillo",
        imagen: "39VestidoAmarillo.jpg",
        precio: 20.290,
        stock: 5,
    },
    {
        id: 40, 
        nombre: "Vestido Beige",
        descripcion: "Vestido Beige",
        imagen: "40VestidoBeige.jpg",
        precio: 20.290,
        stock: 5,
    },
    {
        id: 41, 
        nombre: "Vestido Celeste",
        descripcion: "Vestido Celeste",
        imagen: "41VestidoCeleste.jpg",
        precio: 20.290,
        stock: 5,
    },
    {
        id: 42, 
        nombre: "Vestido Lavanda",
        descripcion: "Vestido Lavanda",
        imagen: "42VestidoLavanda.jpg",
        precio: 20.290,
        stock: 5,
    },
];

const carrito = JSON.parse(localStorage.getItem("carrito")) || []; //Reviso localStorage o creo array vacio carrito.

const listadoProductos = document.querySelector(".listadoProductos");

listadoProductos.innerHTML = "";

productos.forEach(producto => {
    const html = `
        <div data-id="${producto.id}" class="card">
            <h4 class="nombre-producto">${producto.nombre}</h4>
            <img src="./img/${producto.imagen}" alt="${producto.nombre}" />
            <p class="descripcion">${producto.descripcion}</p>
            <p class="precio">${producto.precio}</p>     
            <button type="button" class="agregar">Agregar</button>       
        </div>    
    `;
    listadoProductos.innerHTML += html;
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("agregar")){
        const id = event.target.closest("div").dataset.id;

        const index = carrito.findIndex((item) => item.id == id);
        
    if (index == -1) {

        const elemento = productos.find((producto) => producto.id == id);
        console.log(elemento);

        const { nombre, precio } = elemento; //Saco los datos que necesito.

        const producto = { //Creo objeto con 4 propiedades.
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1,
        };

        carrito.push(producto); // Agrego producto al carrito.
    } else {

        const producto = carrito[index];
        producto.cantidad++;
    }

        localStorage.setItem("carrito", JSON.stringify(carrito)); //Guarda carrito en LocalStorage.

    };
})

