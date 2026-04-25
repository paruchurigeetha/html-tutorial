let screen = document.getElementById("screen");

function addtoDisplay(value) {
    screen.value += value;
}

function clearDisplay() {
    screen.value = "";
}

function compute() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = "Error";
    }
}