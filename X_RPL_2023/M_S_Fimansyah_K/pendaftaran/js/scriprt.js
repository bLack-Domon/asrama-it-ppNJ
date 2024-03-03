document.getElementById("registrationForm").addEventListener("submit", function(event) {
 event.preventDefault(); // Prevent default form submission
 // Get form values
 var firstName = document.getElementById("firstName").value;
 var lastName = document.getElementById("lastName").value;
 var email = document.getElementById("email").value;
 var placeOfBirth = document.getElementById("placeOfBirth").value;
 var dateOfBirth = document.getElementById("dateOfBirth").value;
 var address = document.getElementById("address").value;

 // Construct message
 var message = "Nama Depan: " + firstName + "\n";
 message += "Nama Belakang: " + lastName + "\n";
 message += "Email: " + email + "\n";
 message += "Tempat Lahir: " + placeOfBirth + "\n";
 message += "Tanggal Lahir: " + dateOfBirth + "\n";
 message += "Alamat: " + address;

 // Show alert with form data
 alert("Pendaftaran telah berhasil:\n\n" + message);

 // Reset form after submission (optional)
 document.getElementById("registrationForm").reset();
});
