const container = document.querySelector(".container");


function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < size ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("item");
        container.appendChild(div);
    }
}
createGrid(16);


function clearGrid() {
    container.innerHTML = "";
}

const slider = document.querySelector(".slider");

function changeSize() {
    let newSize = slider.value;

}


//change the background color on all the divs when hovered
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "black";
    })
})

//clear the screen
const btnClear = document.querySelector(".btn-clear");

btnClear.addEventListener("click", function() {
    items.forEach((item) => {
        item.style.backgroundColor = "white";
    })
})