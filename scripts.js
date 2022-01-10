const container = document.querySelector(".container");


function createGrid() {
    const gridSize = Number(prompt("Choose grid size. (Must be less than 100.)"));
    if (gridSize < 100) {
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        for (i = 0; i < gridSize ** 2; i++) {
            const div = document.createElement("div");
            div.classList.add("item");
            container.appendChild(div);
        }
    } else {
        location.reload();
    }
}
createGrid();



//change the background color on all the divs when hovered
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "black";
    })
})

//clear the screen
const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    items.forEach((item) => {
        item.style.backgroundColor = "white";
    })
})