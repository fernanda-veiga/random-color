let color = document.querySelector("#color");
let text = document.querySelector("#hex-code-text");
let button = document.querySelector("#button");

function hexCodeMaker() {
    let digitsArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexCode = "";

    for (let i = 0; i <= 6 ; i++) {
        let randomIndex = Math.floor(Math.random() * (digitsArray.length));
        hexCode = hexCode + digitsArray[randomIndex];
    }
    return hexCode;
}

button.addEventListener("click", hexCodeMaker());