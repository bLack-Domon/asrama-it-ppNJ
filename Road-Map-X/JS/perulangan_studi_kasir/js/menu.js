// Data nama dan URL foto
const data = [
  { nama: "Nasi Goreng", foto: "https://i.pinimg.com/474x/5f/c3/cd/5fc3cd756c6341865a31655344e4ffa3.jpg" },
  { nama: "Es Jeruk", foto: "https://img-global.cpcdn.com/recipes/fc2b59ceec276106/400x400cq70/photo.jpg" },
  { nama: "Mie Goreng", foto: "https://i.pinimg.com/564x/74/f9/94/74f994faa610121ec67a99f2c83249dc.jpg" },
  { nama: "Es Teh", foto: "https://img-global.cpcdn.com/recipes/8733160903937e33/400x400cq70/photo.jpg" },
  // Tambahkan data lainnya sesuai kebutuhan
];

// Ambil elemen kontainer-list
const containerList = document.getElementById("container-list");

// Loop melalui data dan buat kontainer untuk setiap elemen
data.forEach((item) => {
  // Buat elemen kontainer
  const container = document.createElement("div");
  container.classList.add("container-item");

  // Buat elemen nama
  const namaElement = document.createElement("h2");
  namaElement.textContent = item.nama;

  // Buat elemen gambar
  const fotoElement = document.createElement("img");
  fotoElement.src = item.foto;

  // Tambahkan elemen nama dan gambar ke dalam kontainer
  container.appendChild(fotoElement);
  container.appendChild(namaElement);

  // Tambahkan kontainer ke dalam kontainer-list
  containerList.appendChild(container);
});
