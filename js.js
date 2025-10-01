function getPixeles() {
  const valor = parseInt(document.getElementById("infoPixeles").value);
  const container = document.getElementById("container");

  // limpiamos divs
  container.innerHTML = "";

  if (valor > 100) {
    alert("Máximo 100 si no quieres que te explote el navegador, crack");
  } else if (valor < 0) {
    alert("Pórtate bien...");
  } else {
    // ajustamos las cuadrículas según el valor que nos de el usuario
    container.style.gridTemplateColumns = `repeat(${valor}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${valor}, 1fr)`;

    let array = ["#323031", "#3D3B3C", "#7F7979", "#C1BDB3", "#5F5B6B"];

    // realizamos la cuadrícula valor * valor del usuario
    for (let i = 0; i < valor * valor; i++) {
      const content = document.createElement("div");
      content.classList.add("content");
      container.appendChild(content);

      content.addEventListener("mouseenter", () => {
        content.style.backgroundColor = array[Math.floor(Math.random() * 4)];
      });
    }
  }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256); // rojo
  const g = Math.floor(Math.random() * 256); // verde
  const b = Math.floor(Math.random() * 256); // azul
  return `rgb(${r}, ${g}, ${b})`;
}
