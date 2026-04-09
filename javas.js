// Evitar números en el input
document.getElementById("nombre").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "");
});

function mostrarMensaje() {
    let nombre = document.getElementById("nombre").value.trim();
    let mensaje = document.getElementById("mensaje");

    if (nombre === "") {
        mensaje.textContent = "Por favor ingrese un nombre.";
        mensaje.className = "";
        return;
    }

    // Preguntar género
    let genero = prompt("Ingrese H para Hombre o M para Mujer:");

    if (genero === null) return;

    genero = genero.toUpperCase();

    if (genero === "H") {
        mensaje.textContent = "Bienvenido, " + nombre;
        mensaje.className = "azul";
    } else if (genero === "M") {
        mensaje.textContent = "Bienvenida, " + nombre;
        mensaje.className = "rosado";
    } else {
        mensaje.textContent = "Opción inválida.";
        mensaje.className = "";
    }
}

function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").textContent = "";
}