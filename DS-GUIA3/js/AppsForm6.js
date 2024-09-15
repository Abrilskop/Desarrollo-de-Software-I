// formulario.js
const formulario6 = document.querySelector("#formulario6");

// Crear el evento
formulario6.addEventListener("submit", validarFormulario6);

// Función para validar y procesar el formulario
function validarFormulario6(e) {
    e.preventDefault(); // Previene el envío del formulario

    // Obtener los valores del formulario
    const nombre6 = document.querySelector("#vnombre6").value;
    const apellido6 = document.querySelector("#vapellido6").value;
    const fecha6 = document.querySelector("#vfecha6").value;

    // Formatear la fecha
    const fecha = new Date(fecha6);
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    // Mostrar el resultado en el mismo documento
    const respuesta6 = document.getElementById("respuesta6");
    respuesta6.textContent = `Hola ${nombre6}, tu apellido es ${apellido6} y la fecha es ${fechaFormateada}`;

    // Construir la URL para abrir en una nueva pestaña
    const url6 = `paginas/Pagina6.html?nombre6=${encodeURIComponent(nombre6)}&apellido6=${encodeURIComponent(apellido6)}&fecha6=${encodeURIComponent(fechaFormateada)}`;

    // Abrir la nueva pestaña con la URL construida
    window.open(url6, '_blank');
}
