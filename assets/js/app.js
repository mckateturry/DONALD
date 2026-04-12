const btnTop = document.getElementById("btnTop");
const footer = document.getElementById("footer");

// Deteccta el scroll :D
window.addEventListener("scroll", function () {

  // Posición del footer respecto a la pantalla
  const posicionFooter = footer.getBoundingClientRect().top;

  // Altura de la pantalla
  const alturaPantalla = window.innerHeight;

  // Si el footer está visible
  if (posicionFooter < alturaPantalla) {
    btnTop.style.display = "none";
  } else {
    btnTop.style.display = "block";
  }

});

// Click = subir arriba
btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});