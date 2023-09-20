const targetNumber = Math.floor(Math.random() * 100) + 1;
const hintElement = document.getElementById('hint');

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Masukkan angka antara 1 hingga 100.');
    return;
  }

  if (guess === targetNumber) {
    hintElement.innerText = `Selamat! Anda menebak angka ${targetNumber}.`;
  } else if (guess < targetNumber) {
    hintElement.innerText = 'Angka terlalu rendah, coba lagi.';
  } else {
    hintElement.innerText = 'Angka terlalu tinggi, coba lagi.';
  }
}
