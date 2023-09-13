function hitung_nilai() {
 var nilai1 = parseFloat(document.getElementById("html").value);
 var nilai2 = parseFloat(document.getElementById("css").value);
 var nilai3 = parseFloat(document.getElementById("js").value);

 var hasil = nilai1 + nilai2 + nilai3;
 var rata2 = hasil / 3 ;

 document.getElementById("total-nilai").innerText = hasil;
 document.getElementById("rata-rata").innerText = rata2;

 if (rata2 >= 90) {
 document.getElementById("hasil").textContent = "Nilai Rapot A Semangat dan Pertahankan Prestasi Anda";
 }else if (rata2 >=80) {
 document.getElementById("hasil").textContent = "Nilai Rapot B Semangat dan Tingkatkan Lagi Belajarnya";
 }else {
 document.getElementById("hasil").textContent = "Nilai Rapot C Jangan Putus Asa Dan Terus Belajar";
 }
}
