const calculator = document.getElementById("calculator");
const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    });
});

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += " " + button.textContent + " ";
    });
});

const clearButton = document.getElementById("clear"); // Corrected id
clearButton.addEventListener("click", () => {
    display.textContent = "";
});

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", () => {
    const expression = display.textContent;

    try {
        const result = eval(expression); // Using eval, but consider alternatives for security
        display.textContent = result;
    } catch (error) {
        display.textContent = "Error";
    }
});
