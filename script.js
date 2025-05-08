const display = document.getElementById('display');

function appendToDisplay(input) {
    if (input === 'x⁻¹') {
        display.value += '^-1'; // Append reciprocal operation
    } else if (input === 'x²') {
        display.value += '^2'; // Append square operation
    } else {
        display.value += input; // Append other inputs
    }
}

function clearDisplay() {
    display.value = '';
}
let isRadians = true; // Default mode is radians

function toggleMode() {
    isRadians = !isRadians; // Toggle the mode
    const modeIndicator = document.getElementById('mode-indicator');
    modeIndicator.textContent = isRadians ? 'rad' : 'deg';
}

function calculate() {
    try {
        // EXPONENTIATION
        let expression = display.value.replace(/(\d+)\^(-?\d+)/g, 'Math.pow($1, $2)');
        
        // Handle numbers directly before log (e.g., 2log(10) -> 2 * log(10))
        expression = expression.replace(/(\d+)(log\([^)]+\))/g, '$1 * $2');

        // Handle trigonometric functions
        expression = expression.replace(/sin\(([^)]+)\)/g, (_, angle) => Math.sin(toRadians(eval(angle))));
        expression = expression.replace(/cos\(([^)]+)\)/g, (_, angle) => Math.cos(toRadians(eval(angle))));
        expression = expression.replace(/tan\(([^)]+)\)/g, (_, angle) => Math.tan(toRadians(eval(angle))));

        // Handle natural logarithm (ln)
        expression = expression.replace(/ln\(([^)]+)\)/g, (_, value) => Math.log(eval(value)));

        // Handle base-10 logarithm (log)
        expression = expression.replace(/log\(([^)]+)\)/g, (_, value) => Math.log10(eval(value)));

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}