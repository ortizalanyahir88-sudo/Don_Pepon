document.addEventListener("DOMContentLoaded", function() {

    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("¡REGISTRO EXITOSO!");

    });

});
let carrito = [];

/**
 * Agrega un producto al carrito o incrementa su cantidad si ya existe.
 * @param {string} nombre - Nombre del producto.
 * @param {number} precio - Precio individual del producto.
 */
function agregarAlCarrito(nombre, precio) {
  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find(item => item.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      cantidad: 1
    });
  }

  // Actualizar la interfaz del carrito
  actualizarCarritoUI();
}

/**
 * Renderiza los elementos del carrito y calcula el total de la compra.
 */
function actualizarCarritoUI() {
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCompraEl = document.getElementById('total-compra');

  // Si el carrito está vacío
  if (carrito.length === 0) {
    listaCarrito.innerHTML = '<p>El carrito está vacío.</p>';
    totalCompraEl.textContent = '0.00';
    return;
  }

  // Limpiar el contenido actual
  listaCarrito.innerHTML = '';

  let totalGeneral = 0;

  // Recorrer los productos del carrito y renderizarlos
  carrito.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    totalGeneral += subtotal;

    const elementoProducto = document.createElement('div');
    elementoProducto.classList.add('item-carrito');
    
    elementoProducto.innerHTML = `
      <span><strong>${producto.nombre}</strong></span>
      <span>Precio unitario: $${producto.precio.toFixed(2)}</span>
      <span>Cantidad: ${producto.cantidad}</span>
      <span>Subtotal: $${subtotal.toFixed(2)}</span>
    `;

    listaCarrito.appendChild(elementoProducto);
  });

  // Mostrar el total general con dos decimales
  totalCompraEl.textContent = totalGeneral.toFixed(2);
}
