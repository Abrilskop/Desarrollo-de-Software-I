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

// formualario 3
const formulario3 = document.querySelector("#formulario3");
formulario3.addEventListener("submit", validarFormulario3);
function validarFormulario3(e) {
    e.preventDefault();

    const nombre3 = document.querySelector("#vnombre3").value;
    const apellido3 = document.querySelector("#vapellido3").value;
    const nacionalidad3 = document.querySelector("#vnacionalidad3").value;

    const respuesta3 = document.getElementById("respuesta3");
    respuesta3.textContent = `Hola ${nombre3}, tu apellido es ${apellido3} y tu nacionalidad es ${nacionalidad3}`;

    const url3 = `paginas/Pagina3.html?nombre3=${encodeURIComponent(nombre3)}&apellido3=${encodeURIComponent(apellido3)}&nacionalidad3=${encodeURIComponent(nacionalidad3)}`;

    window.open(url3, '_blank');
}

// formulario 4
const formulario4 = document.querySelector("#formulario4");

formulario4.addEventListener("submit", validarFormulario4);
function validarFormulario4(e) {
    e.preventDefault();

    const nombre4 = document.querySelector("#vnombre4").value;
    const apellido4 = document.querySelector("#vapellido4").value;
    const contraseña4 = document.querySelector("#vcontraseña4").value;

    const respuesta4 = document.getElementById("respuesta4");
    respuesta4.textContent = `Hola ${nombre4}, tu apellido es ${apellido4} y tu contraseña es ${contraseña4}`;

    const url4 = `paginas/Pagina4.html?nombre4=${encodeURIComponent(nombre4)}&apellido4=${encodeURIComponent(apellido4)}&contraseña4=${encodeURIComponent(contraseña4)}`;

    window.open(url4, '_blank');
}

// formulario 5