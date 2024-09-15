const formulario9 = document.querySelector("#formulario9");

// Crear el evento
formulario9.addEventListener("submit", validarFormulario9);

// Función para validar y procesar el formulario
function validarFormulario9(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre9 = document.querySelector("#vnombre9").value;
    const apellido9 = document.querySelector("#vapellido9").value;
    const nacionalidad9 = document.querySelector("#vnacionalidad9").value;

    // Mostrar el resultado en el mismo documento
    const respuesta9 = document.getElementById("respuesta9");
    respuesta9.textContent = `Hola ${nombre9}, tu apellido es ${apellido9} y tu nacionalidad es ${nacionalidad9}`;

    // Construir la URL para abrir en una nueva pestaña
    const url9 = `paginas/Pagina9.html?nombre9=${encodeURIComponent(nombre9)}&apellido9=${encodeURIComponent(apellido9)}&nacionalidad9=${encodeURIComponent(nacionalidad9)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url9, '_blank');
}
