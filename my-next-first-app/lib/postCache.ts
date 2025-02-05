import prisma from "./prisma";
import { unstable_cache } from "next/cache";

async function getPost() {
    const post = await prisma.post.findMany();
    return post;
}

export const getPostCached = unstable_cache(getPost)