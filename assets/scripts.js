function actualizarContador() {
    var fechaEvento = new Date("2026-03-20T21:30:00"); // CAMBIA ESTA FECHA
    var ahora = new Date();
    var diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("reloj").innerHTML = "¡El evento ha comenzado!";
        return;
    }

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").querySelector(".number").textContent = dias;
    document.getElementById("horas").querySelector(".number").textContent = horas;
    document.getElementById("minutos").querySelector(".number").textContent = minutos;
    document.getElementById("segundos").querySelector(".number").textContent = segundos;
}

// Iniciar contador
setInterval(actualizarContador, 1000);
actualizarContador(); // Primera ejecución
