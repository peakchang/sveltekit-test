import { getPost } from "$lib/server/db";

export const prerender = true;

export const load = async ({params}) => {
    const post = await getPost(params.postId);
    console.log(post);
    return { post }
}