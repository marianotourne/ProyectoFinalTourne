let contenedorProductos = document.getElementById("contenedorProductos");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let buscador = document.getElementById("buscador");
let inputMin = document.getElementById("min");
let inputMax = document.getElementById("max");

let btnBuscar = document.getElementById("btnBuscar");
let btnOrdenarAsc = document.getElementById("ordenarAsc");
let btnOrdenarDesc = document.getElementById("ordenarDesc");

const btnRubroBebida = document.getElementById("bebidas");

btnBuscar.onclick = filtrar;
btnOrdenarAsc.onclick = ordenarCreciente;
btnRubroBebida.onclick = filtrarRubro;

renderizarProductos(productos);
// renderizarCarrito(carrito);
let carrito = [];

function renderizarProductos(array) {
  contenedorProductos.innerHTML = "";
  array.forEach((producto) => {
    let tarjetaProducto = document.createElement("div");
    tarjetaProducto.classList.add("producto");
    tarjetaProducto.id = `tarjeta${producto.id}`;
    tarjetaProducto.innerHTML = `
        <img src=${producto.img} alt=${producto.nombre}>    
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button id=${producto.id} class="btnCompra">Agregar</button>
        `;

    contenedorProductos.append(tarjetaProducto);

    let btnCarrito = document.getElementById(producto.id);
    btnCarrito.addEventListener("click", agregarAlCarrito);
  });
}

// function filtrar() {
//   if (
//     buscador.value != "" ||
//     Number(inputMin.value) > 0 ||
//     Number(inputMax.value) > 0
//   ) {
//     let productosFiltrados;
//     console.log(buscador.value);
//     console.log(Number(inputMin.value));
//     console.log(Number(inputMax.value));

//     if (buscador.value) {
//       productosFiltrados = productos.filter(
//         (producto) =>
//           producto.nombre
//             .toLowerCase()
//             .includes(buscador.value.toLowerCase()) ||
//           producto.rubro.toLowerCase().includes(buscador.value.toLowerCase())
//       );
//     } else if (inputMin.value || inputMax.value) {
//       productosFiltrados = productos.filter(
//         (producto) =>
//           producto.precio > Number(inputMin.value) &&
//           producto.precio < Number(inputMax.value)
//       );
//     }
//     renderizarProductos(productosFiltrados);
//   } else {
//     renderizarProductos(productos);
//   }
// }

function filtrar() {
  let productosFiltrados = productos;

  if (buscador.value !== "") {
    productosFiltrados = productosFiltrados.filter((producto) =>
      producto.nombre.toLowerCase().includes(buscador.value.toLowerCase())
    );
  }
  if (Number(inputMin.value) > 0) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.precio >= Number(inputMin.value)
    );
  }
  if (Number(inputMax.value) > 0) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.precio <= Number(inputMax.value)
    );
  }

  renderizarProductos(productosFiltrados);
}

function ordenarCreciente() {
  productos.sort((a, b) => {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    return 0;
  });
  renderizarProductos(productos);
}

function filtrarRubro(e) {
  console.log("E", e.target.id);
  let productosFiltrados;
  productosFiltrados = productos.filter(
    (producto) =>
      producto.rubro.toLowerCase() == e.target.innerText.toLowerCase()
  );
}

function agregarAlCarrito(e) {
  let id = e.target.id;
  let productoBuscado = productos.find((producto) => producto.id == id);
  console.log(productoBuscado.id);
}

function renderizarCarrito() {
  //clase 9 - 1:30
}
