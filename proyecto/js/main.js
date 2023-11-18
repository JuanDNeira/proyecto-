const productos = [
{
    id: "Uso personal-01",
    titulo: "uso personal 01",
   imagen: "./img/Uso personal/1.jpg",
   categoria: {
        nombre: "Uso personal",
        id: "Uso personal"
    },
    "precio": 19500
},
{
    id: "Uso personal-02",
    titulo: "uso personal 02",
   imagen: "./img/Uso personal/2.jpg",
   categoria: {
        nombre: "Uso personal",
        id: "Uso personal"
    },
    "precio": 10000
},
{
    id: "Uso personal-03",
    titulo: "uso personal 03",
   imagen: "./img/Uso personal/3.jpg",
   categoria: {
        nombre: "Uso personal",
        id: "Uso personal"
    },
    "precio": 9000
},
{
    id: "Uso personal-04",
    titulo: "uso personal 04",
   imagen: "./img/Uso personal/4.jpg",
   categoria: {
        nombre: "Uso personal",
        id: "Uso personal"
    },
    "precio": 84000
},
{
    id: "Medicamentos-01",
    titulo: "Medicamentos 1",
   imagen: "./img/Medicamentos/1.jpg",
   categoria: {
        nombre: "Medicamentos",
        id: "Medicamentos"
    },
    "precio": 18000
},
{
    id: "Medicamentos-02",
    titulo: "Medicamentos 2",
   imagen: "./img/Medicamentos/2.jpg",
   categoria: {
        nombre: "Medicamentos",
        id: "Medicamentos"
    },
    "precio": 20000
},
{
    id: "Medicamentos-05",
    titulo: "Medicamentos 3",
   imagen: "./img/Medicamentos/5.jpg",
   categoria: {
        nombre: "Medicamentos",
        id: "Medicamentos"
    },
    "precio": 6200
},
{
    id: "Medicamentos-06",
    titulo: "Medicamentos 4",
   imagen: "./img/Medicamentos/6.jpg",
   categoria: {
        nombre: "Medicamentos",
        id: "Medicamentos"
    },
    "precio": 13600
},
{
    id: "Medicamentos-07",
    titulo: "Medicamentos 5",
   imagen: "./img/Medicamentos/7.jpg",
   categoria: {
        nombre: "Medicamentos",
        id: "Medicamentos"
    },
    "precio": 8900
},
{
    id: "Medicamentos-08",
    titulo: "Medicamentos 6",
   imagen: "./img/Medicamentos/8.jpg",
   categoria: {
        nombre: "Medicamentos",
        id: "Medicamentos"
    },
    "precio": 10000
},
{
    id: "Cosmeticos-01",
    titulo: "Cosmeticos_01",
   imagen: "./img/Cosmeticos/1.jpg",
   categoria: {
        nombre: "Cosmeticos",
        id: "Cosmeticos"
    },
    "precio": 19900
},
{
    id: "Cosmeticos-02",
    titulo: "Cosmeticos_02",
   imagen: "./img/Cosmeticos/2.jpg",
   categoria: {
        nombre: "Cosmeticos",
        id: "Cosmeticos"
    },
    "precio": 18300
},
{
    id: "Cosmeticos-03",
    titulo: "Cosmeticos_03",
   imagen: "./img/Cosmeticos/3.jpg",
   categoria: {
        nombre: "Cosmeticos",
        id: "Cosmeticos"
    },
    "precio": 11000
},
{
    id: "Cosmeticos-04",
    titulo: "Cosmeticos_04",
   imagen: "./img/Cosmeticos/4.jpg",
   categoria: {
        nombre: "Cosmeticos",
        id: "Cosmeticos"
    },
    "precio": 14000
},
{
    id: "Cosmeticos-05",
    titulo: "Cosmeticos_05",
   imagen: "./img/Cosmeticos/5.jpg",
   categoria: {
        nombre: "Cosmeticos",
        id: "Cosmeticos"
    },
    "precio": 9000
},
{
    id: "Cosmeticos-06",
    titulo: "Cosmeticos_06",
   imagen: "./img/Cosmeticos/6.jpg",
   categoria: {
        nombre: "Cosmeticos",
        id: "Cosmeticos"
    },
    "precio": 9000
}
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
          },
        onClick: function(){} 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}