// Definir clase datos
const datos = {
  methods: {
    // Método para encontrar un item por su ID
    find: (id) => {
      return datos.items.find((item) => item.id === id); // Devuelve el item con el ID buscado
    },
    // Método para eliminar items de la base de datos
    remove: (items) => {
      items.forEach((item) => {
        const product = datos.methods.find(item.id); // Encuentra el producto correspondiente
        product.cantidad = product.cantidad - item.cantidad; // Reduce la cantidad del producto
      });
      console.log(datos); // Imprime el objeto datos en la consola
    },
  },
  // Arreglo de items disponibles
  items: [
    {
      id: 0,
      titulo: "Aceites y tinturas",
      descripcion: "MARIHUANITA GOTAS", // Descripción del producto
      precio: 250, // Precio del producto
      cantidad: 6, // Cantidad disponible
    },
    {
      id: 1,
      descripcion: "Pelotas",
      precio: 345,
      cantidad: 50,
    },
    {
      id: 2,
      descripcion: "Buzos Hue",
      precio: 1300,
      cantidad: 80,
    },
  ],
};

// Definir clase carrocompras
const carrocompras = {
  items: [], // Inicializa el carrito vacío
  methods: {
    // Método para agregar un item al carrito
    add: (id, cantidad) => {
      const cartItem = carrocompras.methods.get(id); // Intenta obtener el item del carrito
      if (cartItem) { // Si ya existe en el carrito
        // Verifica si hay suficiente inventario
        if (carrocompras.methods.hasInventory(id, cantidad + cartItem.cantidad)) {
          cartItem.cantidad++; // Aumenta la cantidad en el carrito
        } else {
          Swal.fire("No hay más inventario"); // Alerta si no hay inventario suficiente
        }
      } else {
        // Si no existe, lo agrega al carrito
        carrocompras.items.push({ id, cantidad });
      }
    },
    // Método para eliminar un item del carrito
    remove: (id, cantidad) => {
      const cartItem = carrocompras.methods.get(id); // Obtiene el item del carrito
      if (cartItem.cantidad - 1 > 0) {
        cartItem.cantidad--; // Reduce la cantidad si hay más de uno
      } else {
        // Si no hay más, lo elimina del carrito
        carrocompras.items = carrocompras.items.filter(
          (item) => item.id !== id // Filtra el item que se va a eliminar
        );
      }
    },
    // Método para contar la cantidad total de items en el carrito
    count: () => {
      return carrocompras.items.reduce((acc, item) => acc + item.cantidad, 0); // Suma la cantidad de cada item
    },
    // Método para obtener un item del carrito por ID
    get: (id) => {
      const index = carrocompras.items.findIndex((item) => item.id === id); // Encuentra el índice del item
      return index >= 0 ? carrocompras.items[index] : null; // Devuelve el item o null si no existe
    },
    // Método para calcular el total del carrito
    getTotal: () => {
      let total = 0; // Inicializa total a 0
      carrocompras.items.forEach((item) => {
        const found = datos.methods.find(item.id); // Encuentra el item en datos
        total += found.precio * item.cantidad; // Calcula subtotal para cada item
      });
      return total; // Devuelve el total
    },
    // Método para verificar si hay suficiente inventario
    hasInventory: (id, cantidad) => {
      return datos.items.find((item) => item.id === id).cantidad - cantidad >= 0; // Verifica disponibilidad
    },
    // Método para procesar la compra
    purchase: () => {
      datos.methods.remove(carrocompras.items); // Llama al método remove de datos
    },
  },
};

// Presentación de la página
renderStore(); // Llama a la función para renderizar la tienda

function renderStore() {
  // Crea el HTML para mostrar los items de la tienda
  const html = datos.items.map((item) => {
    return `
        <div class="item">
            <div class="titulo">${item.titulo}</div>
            <div class="descripcion">${item.descripcion}</div>
            <div class="precio">${numberToCurrency(item.precio)}</div>
            <div class="cantidad">${item.cantidad} units</div>
            <div class="actions"><button class="add" data-id="${item.id}">Add to the shopping cart</button></div>
        </div>`;
  });

  // Actualiza el contenedor de la tienda con el HTML generado
  document.querySelector("#store-container").innerHTML = html.join("");

  // Agrega eventos a los botones de agregar al carrito
  document.querySelectorAll(".item .actions .add").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(button.getAttribute("data-id")); // Obtiene el ID del producto
      const item = datos.methods.find(id); // Encuentra el item en datos

      // Verifica si hay stock disponible
      if (item && item.cantidad - 1 > 0) {
        carrocompras.methods.add(id, 1); // Agrega el item al carrito
        console.log(datos, carrocompras); // Imprime los datos y el carrito en consola
        rendercarrocompras(); // Actualiza la vista del carrito
      } else {
        Swal.fire("Ya no hay existencia de ese artículo"); // Alerta si no hay existencia
      }
    });
  });
}

function rendercarrocompras() {
  // Crea el HTML para mostrar los items del carrito
  const html = carrocompras.items.map((item) => {
    const datosItem = datos.methods.find(item.id); // Encuentra los datos del item
    return `
            <div class="item">
                <div class="descripcion">${datosItem.descripcion}</div>
                <div class="precio">${numberToCurrency(datosItem.precio)}</div>
                <div class="cantidad">${item.cantidad} units</div>
                <div class="subtotal">Subtotal: ${numberToCurrency(item.cantidad * datosItem.precio)}</div>
                <div class="actions">
                    <button class="addOne" data-id="${datosItem.id}">+</button>
                    <button class="removeOne" data-id="${datosItem.id}">-</button>
                </div>
            </div>`;
  });
  
  // Botón para cerrar el carrito
  const closeButton = `
  <div class="cart-header">
    <button id="bClose">Close</button>
  </div>`;
  
  // Botón para terminar la compra si hay items en el carrito
  const purchaseButton =
    carrocompras.items.length > 0
      ? `<div class="cart-actions">
    <button id="bPurchase">Terminar compra</button>
  </div>`
      : "";
  
  // Calcula el total y lo muestra
  const total = carrocompras.methods.getTotal();
  const totalDiv = `<div class="total">Total: ${numberToCurrency(total)}</div>`;
  
  // Actualiza el contenedor del carrito con el HTML generado
  document.querySelector("#shopping-cart-container").innerHTML =
    closeButton + html.join("") + totalDiv + purchaseButton;

  // Muestra el carrito
  document.querySelector("#shopping-cart-container").classList.remove("hide");
  document.querySelector("#shopping-cart-container").classList.add("show");

  // Agrega eventos a los botones de agregar y quitar items del carrito
  document.querySelectorAll(".addOne").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(button.getAttribute("data-id")); // Obtiene el ID del item
      carrocompras.methods.add(id, 1); // Agrega uno al carrito
      rendercarrocompras(); // Actualiza la vista del carrito
    });
  });

  document.querySelectorAll(".removeOne").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(button.getAttribute("data-id")); // Obtiene el ID del item
      carrocompras.methods.remove(id, 1); // Quita uno del carrito
      rendercarrocompras(); // Actualiza la vista del carrito
    });
  });

  // Evento para cerrar el carrito
  document.querySelector("#bClose").addEventListener("click", (e) => {
    document.querySelector("#shopping-cart-container").classList.remove("show"); // Oculta el carrito
    document.querySelector("#shopping-cart-container").classList.add("hide");
  });
  
  // Evento para realizar la compra
  const bPurchase = document.querySelector("#bPurchase");
  if (bPurchase) {
    bPurchase.addEventListener("click", (e) => {
      carrocompras.methods.purchase(); // Procesa la compra
    });
  }
}

// Función para formatear números a moneda
function numberToCurrency(n) {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 2,
    style: "currency",
    currency: "USD", // Formatea a dólares
  }).format(n); // Devuelve el número formateado
}
