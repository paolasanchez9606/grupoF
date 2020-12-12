function validar_formulario(cual) {
    //si cual = 0 es para validar recuperar clave
    if (cual == 0) {
        var correo = document.getElementById("correo").value;
        if (correo == "") {
            alert("Debe digitar el correo.");
            document.getElementById("correo").focus();
            return false;
        }
    }
    //si cual = 1 es para validar login
    if (cual == 1) {
        var usuario = document.getElementById("usuario").value;
        var clave = document.getElementById("clave").value;
        if ((usuario == "") || (usuario.length < 8)) {
            alert("El usuario debe tener mínimo 8 caracteres.");
            document.getElementById("usuario").focus();
            return false;
        }
        if ((clave == "") || (clave.length < 8)) {
            alert("La clave debe tener mínimo 8 caracteres.");
            document.getElementById("clave").focus();
            return false;
        }
    }
    //si cual = 2 es para validar registro
    if (cual == 2) {
        var correo = document.getElementById("correo").value;
        var usuario = document.getElementById("usuario").value;
        var clave = document.getElementById("clave").value;
        var repetirclave = document.getElementById("repetirclave").value;
        if (correo == "") {
            alert("Debe digitar el correo.");
            document.getElementById("correo").focus();
            return false;
        }
        if ((usuario == "") || (usuario.length < 8)) {
            alert("El usuario debe tener mínimo 8 caracteres.");
            document.getElementById("usuario").focus();
            return false;
        }
        if ((clave == "") || (clave.length < 8)) {
            alert("La clave debe tener mínimo 8 caracteres.");
            document.getElementById("clave").focus();
            return false;
        }
        if (repetirclave == "") {
            alert("No debe haber campos vacíos.");
            document.getElementById("clave").focus();
            return false;
        }
        if (clave != repetirclave) {
            alert("No coinciden las claves.");
            document.getElementById("clave").focus();
            return false;
        }
    }
    return true;
}






function mostrarPassword() {
    document.getElementById("clave").type = "text";
}

function ocultarPassword() {
    document.getElementById("clave").type = "password";
}