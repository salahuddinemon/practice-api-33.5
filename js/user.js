function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/2')
        .then(res => res.json())
        .then(data => displayUsers(data))
};
// loadUsers();

const displayUsers = users => {
    console.log(users)
    const ul = document.getElementById('users')
    users.forEach(user => {
        const li = document.createElement('li')
        li.innerHTML = `
       <h3>${user.name}</h3>
       <p>${user.email}</p>
        `
        ul.appendChild(li);
    });
};
