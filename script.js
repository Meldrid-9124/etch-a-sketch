let numberOfSquares = 16;

// initially the contianer will be a 16 x 16 grid
const container = document.querySelector("#container");

// creating the squares
function createSquares(numberOfSqaures) {
    const totalSquares = numberOfSquares * numberOfSquares;
    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        // hovering effect
        newSquare.addEventListener('mouseenter', () => {
            newSquare.style.backgroundColor = "red";
        })
        newSquare.style.flex = `0 0 calc(100% / ${numberOfSquares}`;
        newSquare.style.height = `calc(100% / ${numberOfSquares})`;
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