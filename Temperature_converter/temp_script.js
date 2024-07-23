function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const output = document.getElementById('output');

    if (isNaN(inputValue)) {
        output.textContent = 'Please enter a valid number';
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'celsius') {
        celsius = inputValue;
        fahrenheit = (inputValue * 9/5) + 32;
        kelvin = inputValue + 273.15;
    } else if (inputUnit === 'fahrenheit') {
        celsius = (inputValue - 32) * 5/9;
        fahrenheit = inputValue;
        kelvin = celsius + 273.15;
    } else {
        celsius = inputValue - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = inputValue;
    }

    output.innerHTML = `
        ${inputValue}°${inputUnit === 'celsius' ? 'C' : inputUnit === 'fahrenheit' ? 'F' : 'K'} is equal to:<br>
        ${celsius.toFixed(2)} °C<br>
        ${fahrenheit.toFixed(2)} °F<br>
        ${kelvin.toFixed(2)} K
    `;
}
