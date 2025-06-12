function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

document.querySelector("#create-grid-button").addEventListener("click", createCanvas);

function createCanvas() {
  const canvas = document.querySelector("#canvas");
  const size = document.querySelector("#grid-input");

  canvas.innerHTML = "";

  for (let i = 0; i < size.value; i++) {
    const row = document.createElement("div")
    row.classList.add("row");

    for (let j = 0; j < size.value; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.dataset.r = 255;
      square.dataset.g = 255;
      square.dataset.b = 255;
      square.dataset.a = 0;

      square.addEventListener("mouseover", () => {
        const hex = document.querySelector("#color-picker").value;
        const { r: newR, g: newG, b: newB } = hexToRGB(hex);
        const newA = 0.1;

        let oldR = parseFloat(square.dataset.r);
        let oldG = parseFloat(square.dataset.g);
        let oldB = parseFloat(square.dataset.b);
        let oldA = parseFloat(square.dataset.a);

        const blendedA = Math.min(oldA + newA * (1 - oldA), 1);

        let blendedR, blendedG, blendedB;

        if (blendedA === 0) {
          blendedR = blendedG = blendedB = 255;
        } else {
          blendedR = Math.round((oldR * oldA * (1 - newA) + newR * newA) / blendedA);
          blendedG = Math.round((oldG * oldA * (1 - newA) + newG * newA) / blendedA);
          blendedB = Math.round((oldB * oldA * (1 - newA) + newB * newA) / blendedA);
        }

        square.dataset.r = blendedR;
        square.dataset.g = blendedG;
        square.dataset.b = blendedB;
        square.dataset.a = blendedA;

        square.style.backgroundColor = `rgba(${blendedR}, ${blendedG}, ${blendedB}, ${blendedA})`;
      });

      row.appendChild(square);
    }
    canvas.appendChild(row);
  }
  size.value = "";
}

document.querySelector("#reset-button").addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
    square.dataset.r = 255;
    square.dataset.g = 255;
    square.dataset.b = 255;
    square.dataset.a = 0;
    square.style.backgroundColor = "rgba(255, 255, 255, 0)";
  });
});