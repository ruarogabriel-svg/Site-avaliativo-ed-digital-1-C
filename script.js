function toggle(card) {
  const hidden = card.querySelector(".hidden");
  hidden.style.display =
    hidden.style.display === "block" ? "none" : "block";
}

function calcular() {
  let horas = document.getElementById("horas").value;
  let energia = horas * 1.5;

  document.getElementById("resultado").innerText =
    "Energia gerada: " + energia + " kWh (estimativa)";
}

function scrollToSection() {
  document.getElementById("sobre").scrollIntoView({
    behavior: "smooth"
  });
}
