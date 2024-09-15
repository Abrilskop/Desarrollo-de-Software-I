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
