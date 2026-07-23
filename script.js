// initially, there will be 256 squares i.e a grid of 16x16 squares
let numberOfSquares = 256;

const container = document.querySelector("#container");

// creating the squares
function createSquares(numberOfSqaures) {
    for (let i = 0; i < numberOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        // hovering effect
        newSquare.addEventListener('mouseenter', () => {
            newSquare.style.backgroundColor = "red";
        })
        container.appendChild(newSquare);
    }
}

createSquares(numberOfSquares); 

// button handling
const squaresBtn = document.querySelector("#sqInputBtn");
squaresBtn.addEventListener('click', () => {
    do {
        numberOfSquares = window.prompt("How many squares do you want per side?", numberOfSquares);
    } while (numberOfSquares > 100 || numberOfSquares < 0);
    // erase the current squares
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createSquares(numberOfSquares);

})