document.getElementById('loadDataButton').addEventListener('click', function () {
    loadData();
});

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dataContainer');
            container.innerHTML = '';
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                container.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error:', error));
}
