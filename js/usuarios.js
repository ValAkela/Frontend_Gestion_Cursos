const STORAGE_KEY = 'usuariosRegistrados';

console.log("Se está ejecutando el archivo de usuarios");


async function inicializarUsuarios() {

    if (localStorage.getItem(STORAGE_KEY) !== null) {
        return;
    }

    const archivos = [
        { ruta: "./.vscode/profesores.json", rol: "profesor" },
        { ruta: "./.vscode/estudiantes.json", rol: "estudiante" },
        { ruta: "./.vscode/administradores.json", rol: "administrador" }
    ];

    const usuariosIniciales = [];

    for (const archivo of archivos) {

        const response = await fetch(archivo.ruta);

        if (!response.ok) {
            throw new Error("No se pudo cargar " + archivo.ruta);
        }

        const usuarios = await response.json();

        if (!Array.isArray(usuarios)) {
            throw new Error("El archivo debe contener un arreglo.");
        }

        const usuariosConRol = usuarios.map(usuario => ({
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            contraseña: usuario.password,
            rol: archivo.rol
        }));

        usuariosIniciales.push(...usuariosConRol);
    }

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(usuariosIniciales)
    );
}

// Obtener usuarios registrados
function obtenerUsuariosRegistrados() {

    const usuarios = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || '[]'
    );

    if (!Array.isArray(usuarios)) {
        throw new Error('Los usuarios guardados no tienen un formato válido.');
    }

    return usuarios;
}

// Guardar usuarios registrados
function guardarUsuariosRegistrados(usuarios) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(usuarios)
    );
}



// Inicializar usuarios
const usuariosListos = inicializarUsuarios();

usuariosListos
    .then(() => {
        console.log("Usuarios inicializados correctamente");
        console.log(obtenerUsuariosRegistrados());
    })
    .catch(error => {
        console.error("Error al inicializar usuarios:", error);
    });

function mostrarMensaje(formulario, texto, tipo = 'error') {
    let mensaje = formulario.querySelector('.mensaje-form');
    if (!mensaje) {
        mensaje = document.createElement('div');
        mensaje.className = 'mensaje-form';
        formulario.insertBefore(mensaje, formulario.querySelector('button[type="submit"]'));
    }
    mensaje.textContent = texto;
    mensaje.className = `mensaje-form visible ${tipo}`;
}

