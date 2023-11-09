let intervalId;
let rowNumber = 1;

const getColor = (number) => {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};

const getNumber = () => {
    const number = Math.random().toFixed(4);
    return Math.ceil(number * 10000);
};

function generateRandomData() {
    const dataRows = document.getElementById('dataRows');

    const newRow = document.createElement('tr');
    const number = getNumber();
    newRow.className = getColor(number);
    newRow.innerHTML = `<td>${rowNumber}</td><td>${number}</td>`;
    dataRows.appendChild(newRow);

    rowNumber++;
}

document.getElementById('startButton').addEventListener('click', () => {
    const interval = parseInt(document.getElementById('interval').value);

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(generateRandomData, interval);
});

document.getElementById('stopButton').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});