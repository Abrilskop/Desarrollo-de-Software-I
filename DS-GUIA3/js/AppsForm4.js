const formulario4 = document.querySelector("#formulario4");

// Crear el evento
formulario4.addEventListener("submit", validarFormulario4);

// Función para validar y procesar el formulario
function validarFormulario4(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre4 = document.querySelector("#vnombre4").value;
    const apellido4 = document.querySelector("#vapellido4").value;
    const contraseña4 = document.querySelector("#vcontraseña4").value;

    // Mostrar el resultado en el mismo documento
    const respuesta4 = document.getElementById("respuesta4");
    respuesta4.textContent = `Hola ${nombre4}, tu apellido es ${apellido4} y tu contraseña es ${contraseña4}`;

    // Construir la URL para abrir en una nueva pestaña
    const url4 = `paginas/Pagina4.html?nombre4=${encodeURIComponent(nombre4)}&apellido4=${encodeURIComponent(apellido4)}&contraseña4=${encodeURIComponent(contraseña4)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url4, '_blank');
}
