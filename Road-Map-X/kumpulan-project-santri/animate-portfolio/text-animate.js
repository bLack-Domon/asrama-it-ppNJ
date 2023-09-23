const textToType = [
 "Perkenalkan Saya M. Ja'far Ilham R",
 "Saya Seorang Programmer Spesialis untuk Web Developer. Berawal dari hobi bermain laptop dan game, saya mulai mencoba pengetahuan dan mendalami dunia programmer. jika ada hal yang ingin ditanyakan, pilih pertanyaan di bawah!"
];
const introTextElement = document.getElementById('introText');
let index = 0;
let textIndex = 0;

function typeText() {
 if (index < textToType.length) {
   const currentText = textToType[index];
   if (textIndex < currentText.length) {
     introTextElement.innerHTML += currentText.charAt(textIndex);
     textIndex++;
     setTimeout(typeText, 100);  // Delay for the typing effect
   } else {
     introTextElement.innerHTML += '<br><br>';  // Add line breaks between texts
     index++;
     textIndex = 0;
     setTimeout(typeText, 500);  // Delay before typing the next text
   }
 }
}

typeText();  // Start typing the text
