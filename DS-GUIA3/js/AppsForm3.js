const formulario3 = document.querySelector("#formulario3");

// Crear el evento
formulario3.addEventListener("submit", validarFormulario3);

// Función para validar y procesar el formulario
function validarFormulario3(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre3 = document.querySelector("#vnombre3").value;
    const apellido3 = document.querySelector("#vapellido3").value;
    const nacionalidad3 = document.querySelector("#vnacionalidad3").value;

    // Mostrar el resultado en el mismo documento
    const respuesta3 = document.getElementById("respuesta3");
    respuesta3.textContent = `Hola ${nombre3}, tu apellido es ${apellido3} y tu nacionalidad es ${nacionalidad3}`;

    // Construir la URL para abrir en una nueva pestaña
    const url3 = `paginas/Pagina3.html?nombre3=${encodeURIComponent(nombre3)}&apellido3=${encodeURIComponent(apellido3)}&nacionalidad3=${encodeURIComponent(nacionalidad3)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url3, '_blank');
}
