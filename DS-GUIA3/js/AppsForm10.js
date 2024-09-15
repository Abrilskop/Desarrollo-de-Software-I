const formulario10 = document.querySelector("#formulario10");

// Crear el evento
formulario10.addEventListener("submit", validarFormulario10);

// Función para validar y procesar el formulario
function validarFormulario10(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre10 = document.querySelector("#vnombre10").value;
    const apellido10 = document.querySelector("#vapellido10").value;
    const nacionalidad10 = document.querySelector("#vnacionalidad10").value;

    // Mostrar el resultado en el mismo documento
    const respuesta10 = document.getElementById("respuesta10");
    respuesta10.textContent = `Hola ${nombre10}, tu apellido es ${apellido10} y tu nacionalidad es ${nacionalidad10}`;

    // Construir la URL para abrir en una nueva pestaña
    const url10 = `paginas/Pagina10.html?nombre10=${encodeURIComponent(nombre10)}&apellido10=${encodeURIComponent(apellido10)}&nacionalidad10=${encodeURIComponent(nacionalidad10)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url10, '_blank');
}
