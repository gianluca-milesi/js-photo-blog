const rowEl = document.querySelector(".row");
const previewEl = document.querySelector(".preview");
const BtnClose = document.getElementById("btn-close");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then((res) => {
        const posts = res.data;
        appendPosts(posts);
    })
    .catch((err) => {
        console.error(err);
    });


function appendPosts(post) {
    console.log(post);

    post.forEach((array) => {
        let { url, title } = array
        title = title.charAt(0).toUpperCase() + title.slice(1);

        generateCards(url, title);

        // removeDisplayNone();

    });
};


function generateCards(surce, description) {
    const postCard = `
    <div class="col-md-6 col-lg-4 mb-4">
        <div class="card p-3 rounded-0 h-100">
            <img src="./img/pin.svg" class="pin">
            <img src="${surce}" class="card-img-top">
            <div class="card-body">
                    <p class="card-text">${description}</p>
            </div>
        </div>
    </div>`

    rowEl.innerHTML += postCard;

    
    const cardsEl = document.querySelectorAll(".card");
    cardsEl.forEach((card) => {
        card.addEventListener("click", function () {
            previewEl.classList.remove("d-none");
        });
    });

};


BtnClose.addEventListener("click", function () {
    previewEl.classList.add("d-none");
});
