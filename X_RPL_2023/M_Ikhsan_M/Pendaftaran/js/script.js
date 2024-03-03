function submitForm() {
    // Ambil nilai dari form
    var nama = document.getElementById("nama").value;
    var tempatLahir = document.getElementById("tempatLahir").value;
    var tanggalLahir = document.getElementById("tanggalLahir").value;
    var asalSekolah = document.getElementById("asalSekolah").value;

    if (nama == '' || tempatLahir == '' || tanggalLahir == '' || asalSekolah == '') {
        
        alert('Form Tolong di isi');
    } else {
        alert('Nama: ' + nama + '\n' +
        'Tempat Tanggal Lahir: ' + tempatLahir + '\n' +
        'Tanggal Lahir: ' + tanggalLahir + '\n' +
        'Asal Sekolah: ' + asalSekolah)
}
  
};