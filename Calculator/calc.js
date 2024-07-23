document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const acButton = document.getElementById('ac');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.textContent);
        });
    });

    document.addEventListener('keydown', (event) => {1
        handleKeyPress(event.key);
    });

    acButton.addEventListener('click', () => {
        input.value = '';
    });

    clearButton.addEventListener('click', () => {
        input.value = input.value.slice(0, -1);
    });

    function handleButtonClick(value) {
        if (value === '=') {
            calculate();
        } else if (value !== 'AC' && value !== 'C') {
            input.value += value;
        }
    }

    function handleKeyPress(key) {
        if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            input.value = input.value.slice(0, -1);
        } else if (key === 'Delete') {
            input.value = '';
        } else if (isValidKey(key)) {
            input.value += key;
        }
    }

    function calculate() {
        try {
            input.value = eval(input.value.replace('X', '*').replace('^', '**'));
        } catch {
            input.value = 'Error';
        }
    }

    function isValidKey(key) {
        return '0123456789+-*/().'.includes(key);
    }
});