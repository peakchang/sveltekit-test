export const createPost = async ({ title, body, userId }) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title, body, userId
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    return await resp.json()
}

export const getPost = async(id) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await post.json();
}