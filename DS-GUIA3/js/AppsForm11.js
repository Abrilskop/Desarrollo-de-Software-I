const formulario11 = document.querySelector("#formulario11");

// Crear el evento
formulario11.addEventListener("submit", validarFormulario11);

// Función para validar y procesar el formulario
function validarFormulario11(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre11 = document.querySelector("#vnombre11").value;
    const apellido11 = document.querySelector("#vapellido11").value;
    const nacionalidad11 = document.querySelector("#vnacionalidad11").value;

    // Mostrar el resultado en el mismo documento
    const respuesta11 = document.getElementById("respuesta11");
    respuesta11.textContent = `Hola ${nombre11}, tu apellido es ${apellido11} y tu nacionalidad es ${nacionalidad11}`;

    // Construir la URL para abrir en una nueva pestaña
    const url11 = `paginas/Pagina11.html?nombre11=${encodeURIComponent(nombre11)}&apellido11=${encodeURIComponent(apellido11)}&nacionalidad11=${encodeURIComponent(nacionalidad11)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url11, '_blank');
}
