// Evitar números en el input
document.getElementById("nombre").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "");
});

function mostrarMensaje() {
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre.length > 0) {
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}
    let mensaje = document.getElementById("mensaje");

    if (nombre === "") {
        mensaje.textContent = "Por favor ingrese un nombre .";
        mensaje.className = "";
        return;
    }

    // Preguntar sexo de la persoan
    let genero = prompt("Ingrese H para Hombre o M para Mujer:");

    if (genero === null) return;

    genero = genero.toUpperCase();

    if (genero === "H") {
        mensaje.textContent = "Bienvenido, " + nombre +". Usted es un caballero super elegante.";
        mensaje.className = "azul";
        imagen.src = "caballero.png";
        imagen.style.display = "block";
    } else if (genero === "M") {
        mensaje.textContent = "Bienvenida, " + nombre +". Usted es una dama super elegante.";
        mensaje.className = "rosado";
        imagen.src = "dama elegante.png";
        imagen.style.display = "block";
    } else {
        mensaje.textContent = "Opción inválida.";
        mensaje.className = "";
        imagen.style.display = "none";
    }
}

function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").textContent = "";

    let imagen = document.getElementById("imagen");
    imagen.style.display = "none";
    imagen.src = "";
}