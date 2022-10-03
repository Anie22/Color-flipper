const colors = ["green", "red", "blue", "yellow", "orange", "purple", "pink", "black", "white", "violet", "royalblue", "brown", "gray", "gold", "silver", "indigo", "teal", "navy", "maroon", "lime", "olive", "aqua", "teal", "aquamarine", "coral", "crimson", "fuchsia", "lavender", "plum", "salmon", "sandybrown", "seagreen", "sienna", "tan", "tomato", "turquoise", "wheat", "yellowgreen"];
const bright = ["green", "red", "blue", "yellow", "orange", "purple", "pink", "black", "white", "violet", "royalblue", "gold", "silver", "brown", "gray", "aqua", "teal", "navy", "maroon", "lime", "olive", "aquamarine", "coral", "crimson", "fuchsia", "lavender", "plum", "salmon", "sandybrown", "seagreen", "sienna", "tan", "tomato", "turquoise", "wheat", "yellowgreen"];

let flipButton = document.querySelector('.btn');
let bgColor = document.querySelector(".color");


flipButton.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    bgColor.innerHTML = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})


