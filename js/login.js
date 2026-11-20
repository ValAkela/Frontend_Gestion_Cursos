/*const usuario = "adrian@cesde.net";
const password = "1234";
*/



let intentos = 0;
const maxIntentos = 3;

function iniciarSesion() {
    
    const usuarioIngresado = document.querySelector("#username").value.trim().toLowerCase();
    const passwordIngresado = document.querySelector("#password").value;
    const rolSeleccionado = document.querySelector("#role").value;
    const usuariosGuardados = obtenerUsuariosRegistrados();

    if (intentos >= maxIntentos) {
        mostrarMensaje(document.querySelector("#loginForm"), "Cuenta bloqueada. Has superado los intentos permitidos.");
        return;
    }

    if (usuariosGuardados.length === 0) {
        mostrarMensaje(document.querySelector("#loginForm"), "No hay usuarios registrados.");
        return;
    }    

    const usuarioValido = usuariosGuardados.find(usuario => 
        usuario.email.toLowerCase() === usuarioIngresado &&
        usuario.contraseña === passwordIngresado &&
        usuario.rol === rolSeleccionado
    );

    if (usuarioValido) {
        intentos = 0;
        sessionStorage.setItem('usuarioActivo', JSON.stringify(usuarioValido));

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
                mostrarMensaje(document.querySelector("#loginForm"), "Por favor selecciona un rol válido.");
                break;
        }

    } else {

        intentos++;

        mostrarMensaje(document.querySelector("#loginForm"), "Usuario o contraseña incorrectos. Intento " +
              intentos + " de " + maxIntentos);

    }
}

document.addEventListener("DOMContentLoaded", function() {

const formularioLogin = document.querySelector("#loginForm");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", async function(event) {
        event.preventDefault();

        try {
            await usuariosListos;
            iniciarSesion();
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            mostrarMensaje(formularioLogin, "No se pudieron cargar los usuarios.");
        }

    });
} else {
        console.error("No se encontró el formulario loginForm");
    }

});