
let container = document.getElementsByClassName("container")[0];
//console.log(container);

function createGrid(length) {
    for (let i = 0; i < length; i++) {
        let column = document.createElement('div');
        column.classList.add("gridColumn");
        for (let j = 0; j < length; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add("square");
            //gridSquare.textContent = `div ${(length * i + j)}`;
            gridSquare.setAttribute('id', `square ${(length * i + j)}`);
            gridSquare.style.backgroundColor = '#ffffff';
            gridSquare.addEventListener("mouseover", hover);
            column.appendChild(gridSquare);
        }
        container.appendChild(column);
    }
}

function removeGrid() {
    let columns = document.getElementsByClassName("gridColumn");
    for (let i = columns.length - 1; i >= 0; i--) {
        columns[i].remove();
    }
}

//initial
let gridSize = 5;
createGrid(gridSize);

let columns = document.getElementsByClassName("square");

function hover() {
    let colorVal = this.style.backgroundColor;
    let rgb = colorVal.toString().slice(4, -1);
    let rgbVals = rgb.split(',');

    let rgbIncrement = 25;
    for (let i = 0; i < 3; i++) {
        // ~10% blacker
        /*
        if (rgbVals[i] - rgbIncrement < 0) {
            rgbVals[i] = 0;
        }
        else {
            rgbVals[i] -= rgbIncrement;
        }
        */

        // random
        rgbVals[i] = Math.floor(Math.random() * 255);
    }

    let newColor = rgbToHex(...rgbVals);
    this.style.backgroundColor = newColor;
}

// https://learnersbucket.com/examples/interview/convert-rgb-to-hex-color-in-javascript/
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

let resetButton = document.getElementById('reset');

const buttonPressed = () => {
    let gridSize = parseInt(prompt("How long do you want the grid to be?"));
    if (gridSize > 100 || gridSize < 1) {
        alert("Please enter an integer value less than 101 and greater than 0.");
    }
    else {
        removeGrid();
        createGrid(gridSize);
    }
}

resetButton.addEventListener("click", buttonPressed);

