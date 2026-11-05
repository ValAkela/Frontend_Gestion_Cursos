const usuario = "adrian@cesde.net";
const password = "1234";
let intentos = 0;
const maxIntentos = 3;
let acceso = false;

function iniciarSesion() {

    const usuarioIngresado = document.querySelector("#username").value;
    const passwordIngresado = document.querySelector("#password").value;
    const rolSeleccionado = document.querySelector("#role").value;

    if (intentos >= maxIntentos) {
        alert("Cuenta bloqueada. Has superado los intentos permitidos.");
        return;
    }

    if (usuarioIngresado === usuario && passwordIngresado === password) {

        acceso = true;


        switch (rolSeleccionado) {

            case "estudiante":
                window.location.href = "estudiante.html";
                break;

            case "profesor":
                window.location.href = "profesor.html";
                break;

            case "administrador":
                window.location.href = "administrador.html";
                break;

            default:
                alert("Por favor selecciona un rol válido.");
                break;
        }

    } else {

        intentos++;

        alert("Usuario o contraseña incorrectos. Intento " +
              intentos + " de " + maxIntentos);

    }
}

document.addEventListener("DOMContentLoaded", function() {

const formularioLogin = document.querySelector("#loginForm");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function(event) {
        event.preventDefault();

         console.log("Formulario de login detectado");

        iniciarSesion();
    });
} else {
        console.error("No se encontró el formulario loginForm");
    }

});