const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Gagal mengambil data.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Gagal mengambil data: ' + error.message);
  }
}

function displayUsers(users) {
  const userList = document.getElementById('user-list');
  userList.innerHTML = ''; // Clear existing data

  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.innerText = `User: ${user.name}, Email: ${user.email}`;
    userList.appendChild(listItem);
  });
}

function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = ''; // Clear existing data

  posts.forEach(post => {
    const listItem = document.createElement('li');
    listItem.innerText = `Post ID: ${post.id}, Title: ${post.title}`;
    postList.appendChild(listItem);
  });
}

Promise.all([fetchData(usersUrl), fetchData(postsUrl)])
  .then(([users, posts]) => {
    displayUsers(users);
    displayPosts(posts);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });
