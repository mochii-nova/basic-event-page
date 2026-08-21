const pageContainer = document.querySelector("#pageContainer");
const heading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

const backgroundColors = [
    "#bde68a",
    "#abf7d0",
    "#b8be00",
    "#21abf2",
    "#134abd"
]

let colorIndex = 0;

function displayGreeting() {
    const userName = nameInput.value.trim();

    if (userName === "") {
        resultMessage.textContent =
            "Please enter your name.";
    } else {
        heading.textContent = "Hello, " + userName;
        resultMessage.textContent =
            "The greeting was displayed successfully."
    }
}

function showTypedText() {
    const currentValue = nameInput.value;

    if (currentValue === "") {
        messageArea.textContent = "";
    } else {
        messageArea.textContent = "You are typing: " + currentValue;
    }
}

function changeBackground() {
    colorIndex = (colorIndex + 1) % backgroundColors.length;

    document.body.style.backgroundColor = backgroundColors[colorIndex];
    messageArea.textContent = "The background color was changed.";

    console.log("Background color change to " + backgroundColors[colorIndex]);
}

function resetPage() {
    heading.textContent = "Event-Driven Webpage";
    nameInput.value = "";
    messageArea.textContent = "";
    document.body.style.backgroundColor = "#f3f4f6";
    colorIndex = 0;
}

function handleMouseover() {
    console.log("The mouse is over the " + this.id + ".");
}

greetingButton.addEventListener("click", displayGreeting);
backgroundButton.addEventListener("click", changeBackground);
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTypedText);

greetingButton.addEventListener("mouseover", handleMouseover);
backgroundButton.addEventListener("mouseover", handleMouseover);
resetButton.addEventListener("mouseover", handleMouseover);

console.log("JavaScript file loaded successfully.");
