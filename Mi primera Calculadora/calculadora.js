let result = document.getElementById('result');
let expression = '';

function appendCharacter(character) {
    expression += character;
    result.value = expression;
}

function clearResult() {
    expression = '';
    result.value = '';
}

function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    result.value = expression;
}

function calculate() {
    try {
        result.value = eval(expression);
        expression = result.value;
    } catch (error) {
        result.value = 'Error';
        expression = '';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/^[0-9+\-*/.c]$/.test(key)) {
        event.preventDefault();
        if (key === 'c') {
            clearResult();
        } else {
            appendCharacter(key);
        }
    } else if (key === '=' || key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLastCharacter();
    }
});