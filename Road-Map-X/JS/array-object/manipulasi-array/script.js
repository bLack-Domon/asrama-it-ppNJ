let inputArray = [];

function createArray() {
  let input = document.getElementById('inputArray').value;
  inputArray = input.split(',').map(item => parseInt(item.trim(), 10));
  displayArray();
}

function displayArray() {
  let table = document.getElementById('outputTable');
  table.innerHTML = '<tr><th>Index</th><th>Value</th></tr>';

  for (let i = 0; i < inputArray.length; i++) {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = i;
    cell2.innerHTML = inputArray[i];
  }
}

function reverseArray() {
  inputArray.reverse();
  displayArray();
}

function sortArray() {
  inputArray.sort((a, b) => a - b);
  displayArray();
}

function sumArray() {
  let sum = inputArray.reduce((acc, val) => acc + val, 0);
  alert('Sum of Array elements: ' + sum);
}
