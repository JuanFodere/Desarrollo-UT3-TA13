const boton = document.getElementById("b1");
const texto = document.getElementById("parrafo");

let texto2 = "Texto cambiado";
boton.addEventListener("click", () => {texto.innerHTML = texto2});

