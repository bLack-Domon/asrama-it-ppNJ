// Mendapatkan semua elemen dengan class "container-item"
var containerItems = document.querySelectorAll('.container-item');

// Mendapatkan elemen modal, gambar modal, dan elemen close
var modal = document.getElementById('myModal');
var modalImage = document.getElementById('modalImage');
var closeBtn = document.querySelector('.close');
var namaMenu = document.getElementById('namaMenu')

// Loop melalui setiap elemen
containerItems.forEach(function (item) {
  // Menambahkan event click pada setiap elemen
  item.addEventListener('click', function() {
    // Mengambil src gambar yang diklik
      var srcGambar = item.querySelector('img').getAttribute('src');
    //   mengambil caption gambar
      var textMenu = item.textContent;
      
    // Menampilkan gambar dalam modal
      modalImage.src = srcGambar;
// Menampilkan nama item dalam modal
      namaMenu.textContent = textMenu
    
    // Menampilkan modal
    modal.style.display = 'block';
  });
});

// Menutup modal saat tombol close diklik
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Menutup modal saat mengklik area di luar modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});