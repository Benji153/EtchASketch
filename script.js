var cont = document.querySelector('#gridContainer');
let colorMode = 'shade';

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

var shade = document.querySelector('#shade');
shade.addEventListener('click', (e) => {
    colorMode = 'shade';
});

function generateGrid(num) {
    for (let x = 0; x < num; x++) {
        let row = document.createElement('div');
        row.classList.add("row");

        for (let y = 0; y < num; y++) {
            let square = document.createElement('div');
            square.classList.add("square");
            square.style.backgroundColor = 'rgb(255, 255, 255)';
            square.addEventListener('mouseover', colorSquare);
            row.appendChild(square);
        }
        cont.appendChild(row);
    }
}

function colorSquare(e) {
    if (e.target.matches('.square')) {
        if (colorMode === 'black') e.target.style.backgroundColor = "#000";
        if (colorMode === 'random') e.target.style.backgroundColor = colorRandom();
        if (colorMode === 'shade') e.target.style.backgroundColor = shadeIn(e.target.style.backgroundColor);
    }
}

function colorRandom() {
    const r = getRandomInteger(0, 256);
    const g = getRandomInteger(0, 256);
    const b = getRandomInteger(0, 256);
    return `rgb(${r},${g},${b})`;
}

function shadeIn(c){
    let r = c.substring(4,c.indexOf(","));
    let g = c.substring(c.indexOf(",")+2,c.indexOf(",",c.indexOf(",")+2));
    let b = c.substring(c.indexOf(",",c.indexOf(",")+2) + 2,c.indexOf(")"));
    let rgb = `rgb(${r-(255/10)},${g-(255/10)},${b-(255/10)})`
    return rgb;
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