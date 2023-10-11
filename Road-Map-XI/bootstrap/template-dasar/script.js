function showAll() {
 const items = document.querySelectorAll('.item');
 items.forEach(item => {
   item.style.display = 'block';
 });
}

function filterCategory(category) {
 const items = document.querySelectorAll('.item');
 items.forEach(item => {
   const itemCategory = parseInt(item.getAttribute('data-category'));
   if (itemCategory === category) {
     item.style.display = 'block';
   } else {
     item.style.display = 'none';
   }
 });
}
