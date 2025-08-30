const botonGuardar = document.getElementById("buttonText");
const inputText = document.getElementById("inputText");

botonGuardar.addEventListener("click", () => {
    localStorage.setItem("palabra", inputText.value);
});