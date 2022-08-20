function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const generatedPin = Math.round(Math.random() * 10000);
    return generatedPin;
}

document.getElementById('btn-generate').addEventListener('click', function () {
    const pin = getPin();
    const displayElement = document.getElementById('display');
    displayElement.value = pin;
})

document.getElementById('buttons').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const numberDisplay = document.getElementById('number-display');
    const previousNumber = numberDisplay.value;
    if (isNaN(number)) {
        if (number === 'C') {
            numberDisplay.value = '';
        } else if (number === '<') {
            const digits = previousNumber.split('');
            digits.pop();
            const digit = digits.join('');
            numberDisplay.value = digit;
        }
    } else {
        const currentNumber = previousNumber + number;
        numberDisplay.value = currentNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const displayText = document.getElementById('display');
    const display = displayText.value;

    const numberText = document.getElementById('number-display');
    const numberDisplay = numberText.value;

    const success = document.getElementById('success');
    const fail = document.getElementById('fail');
    if (display === numberDisplay) {

        success.style.display = 'block';
        fail.style.display = 'none';

    } else {

        fail.style.display = 'block';
        success.style.display = 'none';

    }
})