function validateForm() {
 var nama = document.getElementById("nama").value;
 var ttl = document.getElementById("ttl").value;
 var asalSekolah = document.getElementById("asalSekolah").value;
 var program = document.getElementById("program").value;
 
 if (nama == "" || ttl == "" || asalSekolah == "" || program == "") {
     alert("Mohon lengkapi semua inputan.");
     return false;
 } else {
     alert("Terima kasih! Anda telah berhasil mendaftar ke program " + program);
     return true;
 }
}