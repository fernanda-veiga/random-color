//SELECTORS

const color = document.getElementById('color');
const text = document.getElementById('hex-code-text');
const button = document.getElementById('button');



//FUNCTIONS

function hexCodeMaker() {
    let digitsArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexCode = "";

    for (let i = 0; i < 6 ; i++) {
        let randomIndex = Math.floor(Math.random() * (digitsArray.length));
        hexCode = hexCode + digitsArray[randomIndex];
    }

    hexCode = "#" + hexCode;
    text.innerHTML = "HEX Code: " + hexCode;
    color.style.backgroundColor = hexCode;

    return hexCode;
}

//EVENT LISTENERS

button.addEventListener("click", hexCodeMaker);