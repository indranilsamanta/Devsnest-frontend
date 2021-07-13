var main = document.querySelector("main")

for(let i = 0; i < 36; i++){
    var div = document.createElement("div")
    div.classList.add("box")
    main.appendChild(div)
}
var boxes = document.querySelectorAll(".box")
boxes.forEach((box) => {
    box.addEventListener("click",(el) => {
        box.classList.toggle("clicked")
        getCurrentLength()
    });
})

function getCurrentLength(){
    var clicked = document.querySelectorAll('.clicked').length;
    var boxes = document.querySelectorAll('.box').length;
    document.getElementById("current").innerHTML = clicked;
    document.getElementById("remaining").innerHTML = boxes-clicked;
}