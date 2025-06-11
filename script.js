document.querySelector("#create-grid-button").addEventListener("click", createCanvas);

function createCanvas() {
  const canvas = document.querySelector("#canvas");
  const size = document.querySelector("#grid-input").value;
  canvas.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("row")
    row.id = "row";

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.id = "square";
      row.appendChild(square);
    }
    canvas.appendChild(row);
  }
}

