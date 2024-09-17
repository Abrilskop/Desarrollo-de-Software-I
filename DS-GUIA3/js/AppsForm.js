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

// formulario 2
const formulario2 = document.querySelector("#formulario2");

if (formulario2) {
    formulario2.addEventListener("submit", validarFormulario2);
}

function validarFormulario2(e) {
    e.preventDefault();

    const nombre2 = document.querySelector("#vnombre2").value;
    const apellido2 = document.querySelector("#vapellido2").value;
    const nacionalidad2 = document.querySelector("#vnacionalidad2").value;

    const respuesta2 = document.getElementById("respuesta2");

    if (respuesta2) {
        respuesta2.textContent = `Hola ${nombre2}, tu apellido es ${apellido2} y tu nacionalidad es ${nacionalidad2}`;
    }

    const url2 = `paginas/Pagina2.html?nombre2=${encodeURIComponent(nombre2)}&apellido2=${encodeURIComponent(apellido2)}&nacionalidad2=${encodeURIComponent(nacionalidad2)}`;
    window.open(url2, '_blank');
}
