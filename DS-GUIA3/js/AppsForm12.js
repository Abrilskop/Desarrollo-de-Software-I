const formulario12 = document.querySelector("#formulario12");

// Crear el evento
formulario12.addEventListener("submit", validarFormulario12);

// Función para validar y procesar el formulario
function validarFormulario12(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre12 = document.querySelector("#vnombre12").value;
    const apellido12 = document.querySelector("#vapellido12").value;
    const nacionalidad12 = document.querySelector("#vnacionalidad12").value;

    // Mostrar el resultado en el mismo documento
    const respuesta12 = document.getElementById("respuesta12");
    respuesta12.textContent = `Hola ${nombre12}, tu apellido es ${apellido12} y tu nacionalidad es ${nacionalidad12}`;

    // Construir la URL para abrir en una nueva pestaña
    const url12 = `paginas/Pagina12.html?nombre12=${encodeURIComponent(nombre12)}&apellido12=${encodeURIComponent(apellido12)}&nacionalidad12=${encodeURIComponent(nacionalidad12)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url12, '_blank');
}
