const formulario = document.querySelector('#registerForm');
const inputName = document.querySelector('#regName');
const inputEmail = document.querySelector('#regEmail');
const selectFacultad = document.querySelector('#regFaculty');
const inputId = document.querySelector('#regId');
const inputPassword = document.querySelector('#regPassword');
const inputConfirmPassword = document.querySelector('#regConfirmPassword');
const selectRole = document.querySelector('#regRole');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        await usuariosListos;
    } catch (error) {
        console.error('Error al cargar los usuarios iniciales:', error);
        mostrarMensaje(formulario, 'No se pudieron cargar los usuarios. Comprueba que estás usando Live Server y que existe .vscode/profesores.json.');
        return;
    }

    const nombre = inputName.value.trim();
    const email = inputEmail.value.trim().toLowerCase();
    const facultad = selectFacultad.value;
    const documento = inputId.value.trim();
    const contraseña = inputPassword.value;
    const confirmarContraseña = inputConfirmPassword.value;
    const rol = selectRole.value;

    if (contraseña !== confirmarContraseña) {
        mostrarMensaje(formulario, 'Las contraseñas no coinciden.');
        return;
    }

    let usuarios;
    try {
        usuarios = obtenerUsuariosRegistrados();
    } catch (error) {
        console.error('Error al leer los usuarios guardados:', error);
        mostrarMensaje(formulario, 'No se pudieron leer los usuarios guardados.');
        return;
    }

    if (usuarios.some(usuario => usuario.email.toLowerCase() === email)) {
        mostrarMensaje(formulario, 'Ya existe una cuenta con ese correo electrónico.');
        return;
    }

    const nuevoUsuario = {
        id: Date.now(),
        nombre: nombre,
        email: email,
        facultad: facultad, 
        documento: documento,
        contraseña: contraseña,
        rol: rol
    };

    usuarios.push(nuevoUsuario);
    guardarUsuariosRegistrados(usuarios);

    inputName.value = '';
    inputEmail.value = '';
    selectFacultad.value = '';
    inputId.value = '';
    inputPassword.value = '';
    inputConfirmPassword.value = '';
    selectRole.value = '';


    mostrarMensaje(formulario, 'Registro exitoso. ¡Bienvenido, ' + nombre + '!', 'exito');

    
})

const encabezadoRegistro = document.querySelector('.login-header');
const descripcionRegistro = document.createElement('p');

descripcionRegistro.textContent = 'Únete a Monsters University y accede a todos nuestros servicios';
encabezadoRegistro.appendChild(descripcionRegistro);