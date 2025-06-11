document.querySelector("#create-grid-button").addEventListener("click", createCanvas);

function createCanvas() {
  const canvas = document.querySelector("#canvas");
  const size = document.querySelector("#grid-input");

  canvas.innerHTML = "";

  for (let i = 0; i < size.value; i++) {
    const row = document.createElement("row")
    row.classList.add("row");

    for (let j = 0; j < size.value; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);

      square.addEventListener("mouseover", () => {
        const color = document.querySelector("#color-picker");
        square.style.backgroundColor = color.value;
      });
    }
    canvas.appendChild(row);
  }
  size.value = "";
}

document.querySelector("#reset-button").addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
      square.style.backgroundColor = "white";
  });
});