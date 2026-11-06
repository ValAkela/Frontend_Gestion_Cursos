const formulario = document.querySelector('#registerForm');
const inputName = document.querySelector('#regName');
const inputEmail = document.querySelector('#regEmail');
const selectFacultad = document.querySelector('#regFaculty');
const inputId = document.querySelector('#regId');
const inputPassword = document.querySelector('#regPassword');
const selectRole = document.querySelector('#regRole');

const STORAGE_KEY = 'usuariosRegistrados';

function usuariosRegistrados() {
    const datos = localStorage.getItem(STORAGE_KEY);
    return datos ? JSON.parse(datos) : [];
}

function guardarUsuarios(usuarios) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    

    const nombre = inputName.value.trim();
    const email = inputEmail.value.trim();
    const facultad = selectFacultad.value;
    const documento = inputId.value.trim();
    const contraseña = inputPassword.value.trim(); 
    const rol = selectRole.value;

    const nuevoUsuario = {
        nombre: nombre,
        email: email,
        facultad: facultad, 
        documento: documento,
        contraseña: contraseña,
        rol: rol
    };

    const usuarios = usuariosRegistrados();
    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);

    inputName.value = '';
    inputEmail.value = '';
    selectFacultad.value = '';
    inputId.value = '';
    inputPassword.value = '';
    selectRole.value = '';


    alert('Registro exitoso. ¡Bienvenido!');

    
})