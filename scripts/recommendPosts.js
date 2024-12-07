const recommendedPostContainer = document.getElementById("recommendedPostsContainer");
const refreshPostsButton = document.getElementById('refreshPosts')
const dataSource = '././data/posts.json'

async function recommendPosts() {
    const response = await fetch(dataSource, {
        method: 'GET'
    });

    const data = await response.json()

    //prevents the refreshes piling over eachother
    if ( recommendedPostsContainer.innerHTML !== "" ) {
        recommendedPostsContainer.innerHTML = ""
    }

    let selectedIndexes = new Set();

    for(var i = 1; i <= 3; i++) {
        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * data.length)
        } while (selectedIndexes.has(randomIndex));

        selectedIndexes.add(randomIndex);

        var post = data[randomIndex];

        var postDiv = document.createElement('div');
        postDiv.id = 'postContainer'
        postDiv.className = 'inline container'
        postDiv.innerHTML = `
            <h1 id="title" style="margin-top: 5px;">${post.title}</h1>
            <h3 id="author" style="margin-top: -20px; margin-bottom: 0px;">${post.author}</h3>
            <hr>
            <p id="content" style="margin-top: 0px;">${post.content}</p>
        `;

        recommendedPostContainer.appendChild(postDiv);
    } 

    console.log('recommended posts, appended to container div')
}

recommendPosts();

refreshPostsButton.addEventListener('click', () => { recommendPosts(); })