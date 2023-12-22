//mostrar u ocultar el botón para subir
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("btnSubir").style.display = "block";
    } else {
        document.getElementById("btnSubir").style.display = "none";
    }
};