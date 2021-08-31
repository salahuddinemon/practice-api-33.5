const loadCommnets = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
};
loadCommnets();
const displayComments = comments => {
    console.log(comments);
    for (const comment of comments) {
        const showComments = document.getElementById('showComments');
        const div = document.createElement('div');
        div.classList.add('comments');
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <h5>${comment.email}</h5>
        <p>${comment.body}</p>
        `
        showComments.appendChild(div);
    };
};
