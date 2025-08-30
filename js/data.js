document.addEventListener("DOMContentLoaded", () => {
    const campoTexto = document.getElementById("data");
    campoTexto.innerText = localStorage.getItem("palabra");
});