const STORAGE_KEY = 'usuariosRegistrados';

async function inicializarUsuarios() {
    if (localStorage.getItem(STORAGE_KEY) !== null) {
        return;
    }

    const response = await fetch('./.vscode/profesores.json');
    if (!response.ok) {
        throw new Error(`No se pudo cargar profesores.json (HTTP ${response.status}).`);
    }

    const profesores = await response.json();
    if (!Array.isArray(profesores)) {
        throw new Error('profesores.json debe contener un array de usuarios.');
    }

    const usuariosIniciales = profesores.map(profesor => ({
        id: profesor.id,
        nombre: profesor.nombre,
        email: profesor.email,
        contraseña: profesor.password,
        rol: 'profesor'
    }));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuariosIniciales));
}

function obtenerUsuariosRegistrados() {
    const usuarios = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(usuarios)) {
        throw new Error('Los usuarios guardados no tienen un formato válido.');
    }
    return usuarios;
}

function guardarUsuariosRegistrados(usuarios) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
}

const usuariosListos = inicializarUsuarios();
