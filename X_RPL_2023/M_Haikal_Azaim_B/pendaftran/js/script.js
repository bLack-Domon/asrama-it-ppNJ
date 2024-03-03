
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const tanggal_lahir = document.getElementById('tanggal_lahir').value;
    const asalSekolah = document.getElementById('asalSekolah').value;
    const foto = document.getElementById('foto').value;
    let error = false;
    if (nama === '') {
        document.getElementById('namaError').innerText = 'Nama harus diisi';
        error = true;
    } else {
        document.getElementById('namaError').innerText = '';
    }
    if (tanggal_lahir === '') {
        document.getElementById('ttlError').innerText = 'Tanggal Lahir harus diisi';
        error = true;
    } else {
        document.getElementById('ttlError').innerText = '';
    }
    if (asalSekolah === '') {
        document.getElementById('asalSekolahError').innerText = 'Asal Sekolah harus diisi';
        error = true;
    } else {
        document.getElementById('asalSekolahError').innerText = '';
    }

    if (foto === '') {
        document.getElementById('fotoError').innerText = 'Foto harus diisi';
        error = true;
    } else {
        document.getElementById('fotoError').innerText = '';
    }
    if (!error) {
        const message = `Nama: ${nama}\nTanggal Lahir: ${tanggal_lahir}\nAsal Sekolah: ${asalSekolah}`;
        alert(message);
    }
});
