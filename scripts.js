const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn");
const btnClear = document.querySelector(".btn-clear");
const btnEraser = document.querySelector(".btn-eraser");
const btnUnicorn = document.querySelector(".btn-unicorn");
const btnMerica = document.querySelector(".btn-merica");
const btnRandom = document.querySelector(".btn-random");
let paintColor = "black";


////////////////////////////////////FUNCTIONS/////////////////////////////

function addEvents() {
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.addEventListener("mouseover", () => {
            if (paintColor === "unicorn") {
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);
                item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            } else if (paintColor === "merica") {
                const mericaColors = ["red", "lightgray", "blue"]
                let nextColor = mericaColors[Math.floor(Math.random() * 3)]
                item.style.backgroundColor = nextColor;
            } else if (paintColor === "random") {
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);
                paintColor = `rgb(${r}, ${g}, ${b})`;
                item.style.backgroundColor = paintColor;
            } else {
                item.style.backgroundColor = paintColor;
            }
        })
    })
}



function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < size ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("item");
        container.appendChild(div);
    }
    addEvents();
}


function activateButton(e) {
    deactivateButtons();
    e.target.classList.add("active");
};


function deactivateButtons() {
    btns.forEach((button) => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }
    });
};


function changeColor(newColor) {
    paintColor = newColor;
}






createGrid(16); //load the default grid size







////////////////////////////////////////EVENT HANDLERS///////////////////////////


btnClear.addEventListener("click", function() {
    let items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.style.backgroundColor = "white";
    })
    deactivateButtons();
    changeColor("black");
});


btnEraser.addEventListener("click", (e) => {
    changeColor("white");
    activateButton(e);
});


btnUnicorn.addEventListener("click", (e) => {
    changeColor("unicorn");
    activateButton(e);
});


btnMerica.addEventListener("click", (e) => {
    changeColor("merica");
    activateButton(e);
})


btnRandom.addEventListener("click", (e) => {
    changeColor("random");
    activateButton(e);
})