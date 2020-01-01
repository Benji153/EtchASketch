var cont = document.querySelector('#gridContainer');
let colorMode = 'black';

generateGrid(16);



var clear = document.querySelector('#clear');
clear.addEventListener('click', (e) => {
    let rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.parentNode.removeChild(row);
    });
    let num = prompt("Enter a number of rows and colums:");
    generateGrid(num);
});

var black = document.querySelector('#black');
black.addEventListener('click', (e) => {
    colorMode = 'black';
});

var color = document.querySelector('#color');
color.addEventListener('click', (e) => {
    colorMode = 'random';
});

function generateGrid(num) {
    for (let x = 0; x < num; x++) {
        let row = document.createElement('div');
        row.classList.add("row");

        for (let y = 0; y < num; y++) {
            let square = document.createElement('div');
            square.classList.add("square");
            square.addEventListener('mouseover', colorSquare);
            row.appendChild(square);
        }
        cont.appendChild(row);
    }
}

function colorSquare(e) {
    if (e.target.matches('.square')) {
        if (colorMode === 'black') e.target.style.backgroundColor = "black";
        if (colorMode === 'random') e.target.style.backgroundColor = colorRandom();
        if (colorMode === 'shade')
            e.target.style.backgroundColor = colorShade(
                e.target.style.backgroundColor
            );
    }
}

function colorRandom() {
    const r = getRandomInteger(0, 256);
    const g = getRandomInteger(0, 256);
    const b = getRandomInteger(0, 256);
    return `rgb(${r},${g},${b})`;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/*
function addMouseOver() {
    var squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = "black";
        });
    });
}
*/