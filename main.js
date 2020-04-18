let grid = document.getElementById("grid");
let start = document.getElementById("start");
const width = 100;
const height = 50;
intializeGrid();
let children = grid.childNodes; 
initNext(); 
initStart(); 
initClear(); 

function randomActive() {
    const RANDOMS = 50;
    for (let i = 0; i < RANDOMS; i++) {
        let rand = Math.floor(Math.random() * (width * height));
        children[rand].classList.add("active");
    }
}

function initStart() {
    this.on = false; 
    start = document.getElementById("Start");
    start.addEventListener("click", function() {
        console.log(this.on); 
        if (this.on) {
            console.log(1); 
            clearInterval(this.interval);
            this.on = false; 
            start.textContent = "Start"; 
        } else {
            console.log(2); 
            this.interval = setInterval(step, 100);
            this.on = true; 
            start.textContent = "Stop"; 
        }
    })
}

function initClear() {
    clear = document.getElementById("Clear");
    clear.addEventListener("click", function() {
        for (let i = 0; i < children.length; i++) {
            if (children[i].classList.contains("active")) {
                children[i].classList.remove("active"); 
            }
        }
    })
}

function initNext() {
    next = document.getElementById("Next")
    next.addEventListener("click", function() { step(); })
}

function shouldBeActive(index) {
    if (index > 0 && index < width * height) {
        return prevState[index];
    }
    return false;
}

function activeNeighbors(index) {
    let count = 0;
    if (shouldBeActive(index - 1)) {
        count++;
    }
    if (shouldBeActive(index + 1)) {
        count++;
    }
    if (shouldBeActive(index - width)) {
        count++;
    }
    if (shouldBeActive(index - width + 1)) {
        count++;
    }
    if (shouldBeActive(index - width - 1)) {
        count++;
    }
    if (shouldBeActive(index + width)) {
        count++;
    }
    if (shouldBeActive(index + width + 1)) {
        count++;
    }
    if (shouldBeActive(index + width - 1)) {
        count++;
    }
    return count; 
}



function step() {
    this.prevState = []; 
    for (let i = 0; i < width * height; i++) {
        if (children[i].classList.contains("active")) {
            prevState.push(true); 
        } else {
            prevState.push(false); 
        }
    }
    for (let i = 0; i < children.length; i++) {
        let current = children[i];
        let isActive = this.prevState[i]; 
        let countNeighbors = activeNeighbors(i);

        if (isActive) {
            if ((countNeighbors < 2) || (countNeighbors >= 4)) {
                current.classList.remove("active");
            } 
        } else {
            if (countNeighbors == 3) {
                current.classList.add("active"); 
            }
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
