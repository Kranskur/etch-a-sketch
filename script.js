const container = document.querySelector("div.container");

function makeGrid(grid){
    let squared = grid*grid;
  for(let i=0; i < squared; i++){
    const container = document.querySelector("div.container");
    const div = document.createElement("div");
    div.classList.add("grid")
    container.appendChild(div)
    }
}

function defaultGrid(){
  makeGrid(16);
}

defaultGrid()