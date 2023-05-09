import { redirect } from "@sveltejs/kit";

// GET / POST / PATCH / PUT / DELETE

export const POST = () => {
    console.log('logging out....');
    throw redirect(303, '/login')
}