rowEl = document.querySelector(".row");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((res) => {
        const posts = res.data;
        appendPosts(posts, rowEl);
    })
    .catch((err) => {
        console.err(err);
    });

function appendPosts(posts, root) {
    console.log(posts);

    posts.forEach((post) => {
        let { url, title } = post
        title = title.charAt(0).toUpperCase() + title.slice(1);
        
        const postCard = `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card p-3 rounded-0 h-100">
                <img src="./img/pin.svg" class="pin">
                <img src="${url}" class="card-img-top">
                <div class="card-body">
                        <p class="card-text">${title}</p>
                </div>
            </div>
        </div>`

        root.innerHTML += postCard
    });
};