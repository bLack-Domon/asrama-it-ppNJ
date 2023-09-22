let intervalID;

function startTimeout() {
  const output = document.getElementById('output');
  output.innerText = 'Timeout will occur after 3 seconds...';

  setTimeout(() => {
    output.innerText = 'Timeout occurred!';
  }, 3000);
}

function startInterval() {
  const output = document.getElementById('output');
  output.innerText = 'Interval started. Running every 2 seconds...';

  intervalID = setInterval(() => {
    output.innerText += '\nInterval task executed!';
  }, 2000);
}

function stopIntervalTask() {
  const output = document.getElementById('output');
  output.innerText = 'Interval stopped!';
  clearInterval(intervalID);
}
