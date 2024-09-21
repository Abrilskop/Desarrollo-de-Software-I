// formulario 10
const formulario10 = document.querySelector("#formulario10");

formulario10.addEventListener("submit", validarFormulario10);

function validarFormulario10(e) {
    e.preventDefault();

    const nombre10 = document.querySelector("#vnombre10").value;
    const apellido10 = document.querySelector("#vapellido10").value;
    const nacionalidad10 = document.querySelector("#vnacionalidad10").value;

    const respuesta10 = document.getElementById("respuesta10");
    respuesta10.textContent = `Hola ${nombre10}, tu apellido es ${apellido10} y tu nacionalidad es ${nacionalidad10}`;

    const url10 = `paginas/Pagina10.html?nombre10=${encodeURIComponent(nombre10)}&apellido10=${encodeURIComponent(apellido10)}&nacionalidad10=${encodeURIComponent(nacionalidad10)}`;

    window.open(url10, '_blank');
}
// formualrio 11
const formulario11 = document.querySelector("#formulario11");

formulario11.addEventListener("submit", validarFormulario11);

function validarFormulario11(e) {
    e.preventDefault();

    const nombre11 = document.querySelector("#vnombre11").value;
    const apellido11 = document.querySelector("#vapellido11").value;
    const nacionalidad11 = document.querySelector("#vnacionalidad11").value;

    const respuesta11 = document.getElementById("respuesta11");
    respuesta11.textContent = `Hola ${nombre11}, tu apellido es ${apellido11} y tu nacionalidad es ${nacionalidad11}`;

    const url11 = `paginas/Pagina11.html?nombre11=${encodeURIComponent(nombre11)}&apellido11=${encodeURIComponent(apellido11)}&nacionalidad11=${encodeURIComponent(nacionalidad11)}`;

    window.open(url11, '_blank');
}

// formulario 12
const formulario12 = document.querySelector("#formulario12");

formulario12.addEventListener("submit", validarFormulario12);

function validarFormulario12(e) {
    e.preventDefault();

    const nombre12 = document.querySelector("#vnombre12").value;
    const apellido12 = document.querySelector("#vapellido12").value;
    const nacionalidad12 = document.querySelector("#vnacionalidad12").value;

    const respuesta12 = document.getElementById("respuesta12");
    respuesta12.textContent = `Hola ${nombre12}, tu apellido es ${apellido12} y tu nacionalidad es ${nacionalidad12}`;

    const url12 = `paginas/Pagina12.html?nombre12=${encodeURIComponent(nombre12)}&apellido12=${encodeURIComponent(apellido12)}&nacionalidad12=${encodeURIComponent(nacionalidad12)}`;

    window.open(url12, '_blank');
}
