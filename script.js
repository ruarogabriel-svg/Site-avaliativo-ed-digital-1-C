function toggle(card) {
  const text = card.querySelector(".hidden");
  text.style.display = text.style.display === "block" ? "none" : "block";
}

function calcular() {
  let horas = document.getElementById("horas").value;

  if (horas <= 0) {
    document.getElementById("resultado").innerText = "Digite um valor válido.";
    return;
  }

  let energia = horas * 1.8;

  document.getElementById("resultado").innerText =
    "Energia estimada: " + energia.toFixed(2) + " kWh/dia";
}

function scrollToSection() {
  document.getElementById("sobre").scrollIntoView({
    behavior: "smooth"
  });
}

/* animação ao rolar */
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
