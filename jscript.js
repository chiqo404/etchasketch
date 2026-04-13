const container = document.querySelector("#container");
function createGrid(size){
    for(let i = 0; i < size*size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
                square.style.width = `calc(100%/${size})`;
        container.appendChild(square);
    }
}
function deleteGrid(size){
    for(let i = 0; i < size*size; i++){
        const square = document.querySelector(".square");
        square.remove();
    }
}



let size = 16;
createGrid(size);
const rgb = document.querySelector("#rgb");
const b = document.querySelector("#black");
const e = document.querySelector("#eraser");
let k = 0;
rgb.addEventListener("click", () => {k=1});
b.addEventListener("click", () => {k=0});
e.addEventListener("click", () => {k=2});
const squares = document.querySelectorAll('.square');
let ind = false;
window.addEventListener("mousedown", () => ind = true);
window.addEventListener("mouseup", () => ind = false);
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if(ind == true){
        if(k == 0) square.style.backgroundColor = "black";
        else if(k == 1) square.style.backgroundColor =  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        else square.style.backgroundColor="white";
        }
    });
});

const btn = document.querySelector("button");
 btn.addEventListener("click", () =>{
    deleteGrid(size);
    size = prompt("pick your grid size");
    if(size > 100) size = 100;
    createGrid(size);
    const squares = document.querySelectorAll('.square');
    let k = 0;
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            if(ind == true){
        if(k == 0) square.style.backgroundColor = "black";
        else if(k == 1) square.style.backgroundColor =  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        else square.style.backgroundColor="white";
        }
    });
 });
 
});

