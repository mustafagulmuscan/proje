const input = document.querySelector(".calculator-input")
const keys = document.querySelector(".wrapper-keys")

let displayValue = "0";

updatedisplay()

function updatedisplay() {
    input.value = displayValue;
}

keys.addEventListener("click", function (e) {
    const element = e.target
    if (!element.matches("button")) return;
    if (element.classList.contains("operator")) {
        console.log("operator", element.value);
        return;
    }
    if (element.classList.contains("decimal")) {
        // console.log("decimal",element.value);
        inputdecimal()
        updatedisplay()
        return;
    }
    if (element.classList.contains("clear")) {
        // console.log("clear", element.value);
        clear()
        updatedisplay()
        return;
    }
    inputNumber(element.value)
    updatedisplay()
});
function inputNumber(num) {
    displayValue = displayValue === "0" ? num : displayValue + num
}
function inputdecimal() {
    if (!displayValue.includes(".")) {
        displayValue += "."
    }
}
function clear() {
    displayValue = "0"
}