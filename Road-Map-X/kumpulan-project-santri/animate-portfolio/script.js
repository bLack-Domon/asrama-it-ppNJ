const tombolPertama = document.getElementById("tombol-pertama");
const audio = document.getElementById("linkmp3");
const body = document.body;

tombolPertama.addEventListener("click", () => {
  // Sembunyikan tombol pertama
  tombolPertama.style.display = "none";

  // Tambahkan kelas animasi
  body.classList.add("change-background");
  
  // Tampilkan kotak dengan animasi
  const box = document.getElementById("menuKedua");
  box.style.display = "block";
  box.classList.add("show-box");

  // Ganti background
  body.style.background =
    "url('img/bg2.jpg') no-repeat center center fixed";
  body.style.backgroundSize = "cover";

  // Mainkan audio
  audio.play();
});
