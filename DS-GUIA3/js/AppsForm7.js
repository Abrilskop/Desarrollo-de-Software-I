const formulario7 = document.querySelector("#formulario7");

// Crear el evento
formulario7.addEventListener("submit", validarFormulario7);

// Función para validar y procesar el formulario
function validarFormulario7(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre7 = document.querySelector("#vnombre7").value;
    const apellido7 = document.querySelector("#vapellido7").value;
    const tiempo7 = document.querySelector("#vtiempo7").value;

    // Mostrar el resultado en el mismo documento
    const respuesta7 = document.getElementById("respuesta7");
    respuesta7.textContent = `Hola ${nombre7}, tu apellido es ${apellido7} y tu tiempo es ${tiempo7}`;

    // Construir la URL para abrir en una nueva pestaña
    const url7 = `paginas/Pagina7.html?nombre7=${encodeURIComponent(nombre7)}&apellido7=${encodeURIComponent(apellido7)}&tiempo7=${encodeURIComponent(tiempo7)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url7, '_blank');
}
