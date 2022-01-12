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

let paintColor = "black";
const items = document.querySelectorAll(".item");

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

//clear the screen

function activateButton(e) {
    deactivateButtons();
    e.target.classList.add("active");
};

const btns = document.querySelectorAll(".btn");

function deactivateButtons() {
    btns.forEach((button) => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        }
    });
};


const btnClear = document.querySelector(".btn-clear");

btnClear.addEventListener("click", function() {
    items.forEach((item) => {
        item.style.backgroundColor = "white";
    })
    deactivateButtons();
    changeColor("black");
});

function changeColor(newColor) {
    paintColor = newColor;
}

const btnEraser = document.querySelector(".btn-eraser");

btnEraser.addEventListener("click", (e) => {
    changeColor("white");
    activateButton(e);
});



const btnUnicorn = document.querySelector(".btn-unicorn");

btnUnicorn.addEventListener("click", (e) => {
    changeColor("unicorn");
    activateButton(e);
});




const btnMerica = document.querySelector(".btn-merica");

btnMerica.addEventListener("click", (e) => {
    changeColor("merica");
    activateButton(e);
})


const btnRandom = document.querySelector(".btn-random");

btnRandom.addEventListener("click", (e) => {
    changeColor("random");
    activateButton(e);
})