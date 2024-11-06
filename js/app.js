console.log(axios);

rowEl = document.querySelector(".row");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((res) => {
        const posts = res.data;
        appendImgUrl(posts, rowEl);
    })
    .catch((err) => {
        console.err(err);
    });

function appendImgUrl(posts, root) {
    console.log(posts);

    posts.forEach((post) => {
        const { url, title } = post
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



























/* <div class="col-md-6 col-lg-4 mb-4">
<div class="card p-3 rounded-0">
    <img src="./img/pin.svg" class="pin">
    <img src="./img/random.jpg" class="card-img-top">
    <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk
            of the card's content.</p>
    </div>
</div>
</div> */
