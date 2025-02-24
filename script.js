document.getElementById("empresaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (validarFormulario()) {
        alert("Formulario enviado con éxito!");
        this.reset();
        limpiarErrores();
    }
});

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    
    let esValido = true;

    // Limpiar los mensajes de error anteriores
    limpiarErrores();

    // Validación del nombre
    if (!nombre) {
        mostrarError("nombre", "Nombre inválido.");
        esValido = false;
    }
    
    // Validación del DNI (8 números y una letra)
    const dniRegex = /^\d{8}[A-HJ-NP-TV-Z]$/i;
    if (!dniRegex.test(dni)) {
        mostrarError("dni", "DNI inválido. Debe contener 8 números seguidos de una letra válida.");
        esValido = false;
    }
    
    // Validación del teléfono (exactamente 9 dígitos)
    const telefonoRegex = /^\d{9}$/;
    if (!telefonoRegex.test(telefono)) {
        mostrarError("telefono", "Teléfono inválido. Debe contener exactamente 9 dígitos.");
        esValido = false;
    }
    
    // Validación del mensaje
    if (!mensaje) {
        mostrarError("mensaje", "Mensaje inválido.");
        esValido = false;
    }
    
    return esValido;
}

function mostrarError(campo, mensaje) {
    const errorElement = document.getElementById(`error${campo.charAt(0).toUpperCase() + campo.slice(1)}`);
    errorElement.textContent = mensaje;
}

function limpiarErrores() {
    const errores = document.querySelectorAll(".error");
    errores.forEach(error => {
        error.textContent = "";
    });
}
