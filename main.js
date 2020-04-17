let grid = document.getElementById("grid");
let width = 10;
let height = 10;

for (let w = 0; w < width; w++) {
    for (let h = 0; h < height; h++) {
        let newCell = document.createElement("div");
        newCell.classList.add("grid-element");
        grid.appendChild(newCell);
    }
}