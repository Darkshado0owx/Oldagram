const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

var dynamic = document.querySelector('main')
for (let i=0; i<posts.length; i++) {
    var fetch = document.querySelector('main').innerHTML
    dynamic.innerHTML = 
    `<section class="post-content-1">
        <div class="user-info">
            <img class="img-avatar" src="${posts[i].avatar}" alt="avatar-vangogh" ondblclick="addLike()">
            <div class="user-info-text">
                <p><span class="bol">${posts[i].name}</span></p>
                <p>${posts[i].location}</p>
            </div>
        </div>
        <img class="img-post" src="${posts[i].post}" alt="Vangogh post">
        <div class="body">
            <img class="icons" src="images/icon-heart.png" alt="icon-heart" onclick="addLike()">
            <img class="icons" src="images/icon-comment.png" alt="icon-comment">
            <img class="icons" src="images/icon-dm.png" alt="icon-dm">

        <p class="bol"><span class="bol likes">${posts[i].likes}</span> likes</p>
            <p><span class="bol user-name">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </section>` + fetch
}

function addLike() {
    const likesEl = event.target.parentNode.querySelector('.likes');
    const likes = parseInt(likesEl.textContent) + 1;
    likesEl.textContent = likes;
}

