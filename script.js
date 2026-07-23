let numberOfSquares = 16;

// initially the contianer will be a 16 x 16 grid
const container = document.querySelector("#container");

function createSquares(numberOfSquares) {
    const totalSquares = numberOfSquares * numberOfSquares;
    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        newSquare.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
        // hovering effect
        newSquare.addEventListener('mouseenter', () => {
            const newRed = Math.floor(Math.random() * 256);
            const newGreen = Math.floor(Math.random() * 256);
            const newBlue = Math.floor(Math.random() * 256);
            // darken by 10% 
            newAlpha = window.getComputedStyle(newSquare).getPropertyValue("background-color");
            newAlpha = parseFloat(newAlpha.split(",")[3]);
            if (newAlpha !== 1)
                newAlpha += 0.1;
            newSquare.style.backgroundColor = `rgba(${newRed}, ${newGreen}, ${newBlue}, ${newAlpha})`;
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