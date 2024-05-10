const container = document.querySelector(".container");

function makeGrid(row) {

    for (let i = 0; i < row; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        container.appendChild(div);
        for (let j = 0; j < row; j++) {
            const square = document.createElement("div");
            div.appendChild(square);
            square.classList.add("grid");
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "blue";
            });
        }
    }
}
function deleteGrid(){
    const removeRow = document.querySelectorAll(".row")
    for(let i = 0; i < removeRow.length ; i++){
        removeRow[i].remove();
    }
}

function defaultGrid() {
    makeGrid(16); // 
}

defaultGrid();

function changeGridSize(times){
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.style.width = `${494/times}px`);
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => grid.style.height = `${344/times}px`);
}
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    deleteGrid()
    let size = prompt("Pick a number for the number of squares per side (max 100):")
    makeGrid(size);
    changeGridSize(size);
})
