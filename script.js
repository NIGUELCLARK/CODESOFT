// Initialize variables
let expression = '';
const textField = document.querySelector('.text-field');
const buttons = document.querySelectorAll('button');
let acButton = document.querySelector('.clear-grey');

function toggleSign() {
    let currentInput = textField.value;

    
    if (!isNaN(parseFloat(currentInput))) {
        
        textField.value = (parseFloat(currentInput) * -1).toString();
        expression = textField.value;
    }
}


function handleButtonClick(button) {
    const buttonText = button.textContent;

    if (buttonText === 'AC') {
        
        textField.value = '';
        expression = '';
    } else if (buttonText === 'C') {
        
        textField.value = textField.value.slice(0, -1);
        expression = expression.slice(0, -1);
    } else if (buttonText === '=') {
        
        try {
            expression = eval(expression).toString();
            textField.value = expression;
        } catch (error) {
            
            textField.value = 'Error';
            expression = '';
        }

        
        acButton.textContent = 'AC';
    } else if (buttonText === 'x') {
        
        expression += '*';
        textField.value += buttonText;
    } else if (buttonText === '+/-') {
        
        toggleSign();
    } else if (buttonText === '%') {
        
        expression += '%';
        textField.value += buttonText;
    } 
    else if (buttonText === '÷') {
        
        expression += '/';
        textField.value += buttonText;
    }
    else {
        
        expression += buttonText;
        textField.value += buttonText;

        
        acButton.textContent = 'C';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        handleButtonClick(this);
    });
});
