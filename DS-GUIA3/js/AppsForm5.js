const formulario5 = document.querySelector("#formulario5");

// Crear el evento
formulario5.addEventListener("submit", validarFormulario5);

// Función para validar y procesar el formulario
function validarFormulario5(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre5 = document.querySelector("#vnombre5").value;
    const apellido5 = document.querySelector("#vapellido5").value;
    const numeros5 = document.querySelector("#vnumeros5").value;

    // Mostrar el resultado en el mismo documento
    const respuesta5 = document.getElementById("respuesta5");
    respuesta5.textContent = `Hola ${nombre5}, tu apellido es ${apellido5} y tu numero es ${numeros5}`;

    // Construir la URL para abrir en una nueva pestaña
    const url5 = `paginas/Pagina5.html?nombre5=${encodeURIComponent(nombre5)}&apellido5=${encodeURIComponent(apellido5)}&numeros5=${encodeURIComponent(numeros5)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url5, '_blank');
}
