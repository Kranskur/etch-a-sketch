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

function defaultGrid() {
    makeGrid(16); // 
}

defaultGrid();