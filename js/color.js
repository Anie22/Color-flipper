const colors = ["green", "red", "blue", "yellow", "orange", "purple", "pink", "black", "white", "violet", "royalblue", "brown", "gray", "gold", "silver", "indigo", "teal", "navy", "maroon", "lime", "olive", "aqua", "teal", "aquamarine", "coral", "crimson", "fuchsia", "lavender", "plum", "salmon", "sandybrown", "seagreen", "sienna", "tan", "tomato", "turquoise", "wheat", "yellowgreen"];

let hamTweet = document.getElementById('ham');
let open = document.querySelector('.nav-holder')
let bgColor = document.querySelector(".color");

hamTweet.addEventListener('click', openHamburger)

setInterval(bgChange, 1000);

function bgChange(){
    let randomNumber = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomNumber];
    bgColor.innerHTML = randomColor;
    document.body.style.backgroundColor = randomColor;

    if (randomColor === "black"){
        document.body.style.color = "white"
    } else {
        document.body.style.color = "black"
    }
}

function openHamburger(){
    open.classList.toggle('hidden');
}



