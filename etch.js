
let container = document.getElementsByClassName("container")[0];
console.log(container);

for (let i = 0; i < 4; i++) {
    let column = document.createElement('div');
    column.classList.add("gridColumn");
    /*column.setAttribute('display','flex');*/
    /*column.setAttribute('display','flex');*/
    /*column.setAttribute('flex-direction','flex-direction: row');*/
    for (let j = 0; j < 4; j++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add("square");
        gridSquare.textContent = `div ${(4 * i + j)}`;
        gridSquare.setAttribute('id', `square ${(4 * i + j)}`);
        // gridSquare.style.backgroundColor = 'rgba(10,10,10,0.2)';
        gridSquare.style.backgroundColor = '#eeeeee';
        //gridSquare.setAttribute('style', 'grid-template-rows: 4fr');
        column.appendChild(gridSquare);
    }
    container.appendChild(column);
}

let columns = document.getElementsByClassName("square");
console.log(columns);
console.log(columns[0]);

for (let i = 0; i < 16; i++) {
    let col = columns[i];
    console.log(col);
    col.addEventListener("mouseover", hover);
}

function hover() {
    let rgbIncrement = 50;
    console.log(this);
    let colorVal = this.style.backgroundColor;
    //console.log(colorVal.toString().slice(4,colorVal.toString().length-1));
    let rgb = colorVal.toString().slice(4, colorVal.toString().length - 1);
    let rgbVals = rgb.split(',');
    console.log(rgbVals);
    for (let i = 0; i < 3; i++) {
        if (rgbVals[i] - rgbIncrement < 0) {
            rgbVals[i] = 0;
        }
        else {
            rgbVals[i] -= rgbIncrement;
        }
    }
    let newColor = rgbToHex(...rgbVals);
    console.log(newColor);
    this.style.backgroundColor = newColor;
    //this.style.backgroundColor = this.style.backgroundColor + 
}

// https://learnersbucket.com/examples/interview/convert-rgb-to-hex-color-in-javascript/
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// function hover() {
//     let colorVal = parseInt(this.style.backgroundColor, 16);
//     console.log(colorVal);  
// }