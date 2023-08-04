const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// const btn = document.getElementById('btn');
let hamTweet = document.getElementById('ham');
let open = document.querySelector('.nav-holder')
const color = document.querySelector('.color');

hamTweet.addEventListener('click', openHamburger)

setInterval(bgChange, 1000);

function bgChange() {
    let hexColor = '#';

    for(let i=0; i < 6; i++){
        hexColor += hex[getRandomNum(hex)];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

    if (hexColor === "#000000"){
        document.body.style.color = "#ffffff"
    } else {
        document.body.style.color = "#000000"
    }
};

function getRandomNum( array) {
    return Math.floor(Math.random() * array.length)
}

function openHamburger(){
    open.classList.toggle('hidden');
}