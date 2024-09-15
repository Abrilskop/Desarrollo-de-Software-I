const formulario = document.querySelector("#formulario");
//crear el evento
formulario.addEventListener( "submit", validarFormulario )
// funcion
function validarFormulario(e){
    e.preventDefault();
    // Obtener los valores del formulario
    const nombre1 = document.querySelector("#vnombre").value;
    const apellido1 = document.querySelector("#vapellido").value;
    const nacionalidad1 = document.querySelector("#vnacionalidad").value;
    // Mostrar el resultado en el mismo documento
    const respuesta1 = document.getElementById("respuesta1");
    respuesta1.textContent = `Hola ${nombre1}, tu apellido es ${apellido1} y tu nacionalidad es ${nacionalidad1}`;
    // Construir la URL para abrir en una nueva pestaña
    const url1 = `paginas/Pagina1.html?nombre1=${encodeURIComponent(nombre1)}&apellido1=${encodeURIComponent(apellido1)}&nacionalidad1=${encodeURIComponent(nacionalidad1)}`;
    window.open(url1, '_blank');
}