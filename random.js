console.log("random.js");

window.addEventListener("click", changeArrow, true);
let arrow = document.querySelector("#arrow");

const direction = ["left", "right"];

function randomIndex(){
    let index = Math.floor(Math.random() * 2);
    return index;
};

function changeArrow() { 
    arrow.className = "";
    arrow.className = direction[randomIndex()];
}