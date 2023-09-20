const elem = document.getElementById('myElement');

elem.addEventListener('click', function() {
    console.log('Elemen telah diklik!');
});

elem.addEventListener('mouseover', function() {
    console.log('Mouse masuk ke dalam elemen!');
});

document.addEventListener('keypress', function(event) {
    console.log('Tombol keyboard ditekan:', event.key);
});
