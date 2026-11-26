document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleccionar botones y elementos de la interfaz
    const botones = document.querySelectorAll("button");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalPrecio = document.getElementById("total-precio");
    const mensaje = document.getElementById("mensaje-confirmacion");

    let total = 0;

    // 2. Escuchar el clic en cada botón de compra
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            // Leer el nombre y el precio desde los atributos data-* del HTML
            const nombre = e.target.getAttribute("data-nombre");
            const precio = parseFloat(e.target.getAttribute("data-precio"));

            if (nombre && !isNaN(precio)) {
                // Agregar producto a la lista del carrito (Nombre y Precio)
                const itemCarrito = document.createElement("li");
                itemCarrito.style.display = "flex";
                itemCarrito.style.justifyContent = "space-between";
                itemCarrito.style.margin = "8px 0";
                itemCarrito.innerHTML = `<span>${nombre}</span><span>$${precio}</span>`;
                listaCarrito.appendChild(itemCarrito);

                // Sumar al total acumulado
                total += precio;
                totalPrecio.textContent = total;

                // Mostrar el aviso de que se agregó correctamente
                mostrarNotificacion(`El producto "${nombre}" se agregó correctamente`);
            }
        });
    });

    // 3. Función para mostrar y ocultar el mensaje de confirmación
    function mostrarNotificacion(texto) {
        mensaje.textContent = texto;
        mensaje.classList.add("mostrar");

        // Ocultar automáticamente después de 2.5 segundos
        setTimeout(() => {
            mensaje.classList.remove("mostrar");
        }, 2500);
    }
});