const checkboxes = document.querySelectorAll(".menu-item");
const quantities = document.querySelectorAll(".menu-quantity");
const uangInput = document.getElementById("uang");
const totalInput = document.getElementById("total");
const kembalianInput = document.getElementById("kembalian");

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", hitungTotal);
  quantities[index].addEventListener("input", hitungTotal);
});

function hitungTotal() {
  const selectedItems = Array.from(checkboxes).filter((checkbox, index) => {
    return checkbox.checked && quantities[index].value > 0;
  });

  let total = 0;

  selectedItems.forEach((item, index) => {
    const harga = parseInt(item.getAttribute("data-harga"));
    const jumlah = parseInt(quantities[index].value);
    total += harga * jumlah;
  });

  const uang = parseInt(uangInput.value);
  const kembalian = uang - total;

  if (isNaN(kembalian)) {
    kembalianInput.value = "0";
  } else if (kembalian < 0) {
    kembalianInput.value = "Maaf uang anda kurang!";
  } else {
    kembalianInput.value = kembalian.toFixed(0);
  }

  totalInput.value = total.toFixed(0);
}

document.querySelectorAll('input[name="menuType"]').forEach(function (radio) {
  radio.addEventListener("change", function () {
    const selectedValue = this.value;
    const makananMenu = document.getElementById("makananMenu");
    const minumanMenu = document.getElementById("minumanMenu");

    if (selectedValue === "makanan") {
      makananMenu.style.display = "block";
      minumanMenu.style.display = "none";
    } else if (selectedValue === "minuman") {
      makananMenu.style.display = "none";
      minumanMenu.style.display = "block";
    } else if (selectedValue === "keduanya") {
      makananMenu.style.display = "block";
      minumanMenu.style.display = "block";
    }

    // Reset total dan kembalian saat memilih menu baru
    totalInput.value = "0";
    kembalianInput.value = "0";
    uangInput.value = "";

    // Uncheck semua checkbox dan reset jumlah
    checkboxes.forEach((checkbox, index) => {
      checkbox.checked = false;
      quantities[index].value = 1;
    });
  });
});
