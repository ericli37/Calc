const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const expression = display.value.replace(/(\d+)\^(\d+)/g, 'Math.pow($1, $2)');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}