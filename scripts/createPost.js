const createPostButton = document.getElementById("createPostButton")

const titleInput = document.getElementById("createPostTitleInput").innerText
const authorInput = document.getElementById("createPostAuthorInput").innerText
const contentInput = document.getElementById("createPostContentInput").innerText

async function createPost() {
    const url = 'data/posts.json'

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: `${titleInput}`, author: `${authorInput}`, content: `${contentInput}` })
        })
    } catch (err) {
        console.log(`error POSTing post: ` + err)
    }
}


createPostButton.addEventListener('click', () => {createPost();})