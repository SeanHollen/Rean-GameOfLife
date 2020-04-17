let grid = document.getElementById("grid");
let start = document.getElementById("start");
const width = 10;
const height = 10;
intializeGrid();
let children = grid.childNodes;
randomActive();
intializeStart(); 
intializeNext(); 

function randomActive() {
    const RANDOMS = 50;
    for (let i = 0; i < RANDOMS; i++) {
        let rand = Math.floor(Math.random() * (width * height));
        children[rand].classList.add("active");
    }
}

function intializeStart() {
    start = document.getElementById("Start");
    start.addEventListener("click", function() {
        setInterval(step, 1000);
    })
}

function intializeNext() {
    next = document.getElementById("Next")
    next.addEventListener("click", function() { step(); })
}

function checkIfActive(index) {
    if (index > 0 && index < width * height) {
        return children[index].classList.contains("active");
    }
    return false;
}

function activeNeighbors(index) {
    let count = 0;
    if (checkIfActive(index - 1)) {
        count++;
    }
    if (checkIfActive(index + 1)) {
        count++;
    }
    if (checkIfActive(index - width)) {
        count++;
    }
    if (checkIfActive(index - width + 1)) {
        count++;
    }
    if (checkIfActive(index - width - 1)) {
        count++;
    }
    if (checkIfActive(index + width)) {
        count++;
    }
    if (checkIfActive(index + width + 1)) {
        count++;
    }
    if (checkIfActive(index + width - 1)) {
        count++;
    }
    return count; 
}



function step() {
    for (let i = 0; i < children.length; i++) {
        let current = children[i];
        let countNeighbors = activeNeighbors(i);
        console.log(countNeighbors); 
        if (countNeighbors => 2 && countNeighbors < 4) {
            current.classList.add("active");
        }
        else {
            current.classList.remove("active");
        }
    }
}


function intializeGrid() {
    for (let w = 0; w < width; w++) {
        for (let h = 0; h < height; h++) {
            let newCell = document.createElement("div");
            newCell.classList.add("grid-element");
            newCell.i = h * w + w;
            newCell.addEventListener("click", function() {
                newCell.classList.toggle("active");
            })
            grid.appendChild(newCell);
        }
    }
}
