let currentPage = 1;
const itemsPerPage = 10; // Jumlah item per halaman

async function fetchData(page) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Gagal mengambil data: ' + error.message);
  }
}

function displayData(page) {
  const dataTableBody = document.getElementById('data-list');
  dataTableBody.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

  fetchData(page)
    .then(data => {
      dataTableBody.innerHTML = ''; // Clear loading message

      data.forEach(item => {
        const row = `<tr><td>${item.id}</td><td>${item.title}</td></tr>`;
        dataTableBody.innerHTML += row;
      });
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
      dataTableBody.innerHTML = '<tr><td colspan="2">Gagal mengambil data.</td></tr>';
    });
}

function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

document.getElementById('next-page').addEventListener('click', () => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayData(currentPage);
    updatePagination(totalItems);
  }
});

document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayData(currentPage);
    updatePagination(totalItems);
  }
});

// Fetch total items to update pagination
let totalItems = 0;

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Gagal mengambil data.');
    }
    return response.json();
  })
  .then(data => {
    totalItems = data.length;
    updatePagination(totalItems);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });

displayData(currentPage);
