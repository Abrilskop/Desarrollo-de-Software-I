const formulario8 = document.querySelector("#formulario8");

// Crear el evento
formulario8.addEventListener("submit", validarFormulario8);

// Función para validar y procesar el formulario
function validarFormulario8(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre8 = document.querySelector("#vnombre8").value;
    const apellido8 = document.querySelector("#vapellido8").value;
    const nacionalidad8 = document.querySelector("#vnacionalidad8").value;

    // Mostrar el resultado en el mismo documento
    const respuesta8 = document.getElementById("respuesta8");
    respuesta8.textContent = `Hola ${nombre8}, tu apellido es ${apellido8} y tu nacionalidad es ${nacionalidad8}`;

    // Construir la URL para abrir en una nueva pestaña
    const url8 = `paginas/Pagina8.html?nombre8=${encodeURIComponent(nombre8)}&apellido8=${encodeURIComponent(apellido8)}&nacionalidad8=${encodeURIComponent(nacionalidad8)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url8, '_blank');
}
