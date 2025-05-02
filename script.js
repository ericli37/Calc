const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // EXPONENTIATION
        let expression = display.value.replace(/(\d+)\^(\d+)/g, 'Math.pow($1, $2)');
        
        // TRIGONOMETRIC FUNCTIONS
        expression = expression.replace(/sin\(([^)]+)\)/g, (_, angle) => Math.sin(toRadians(eval(angle))));
        expression = expression.replace(/cos\(([^)]+)\)/g, (_, angle) => Math.cos(toRadians(eval(angle))));
        expression = expression.replace(/cos\(([^)]+)\)/g, (_, angle) => Math.tan(toRadians(eval(angle))));

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}