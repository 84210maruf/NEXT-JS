import prisma from "./prisma";
import { unstable_cache } from "next/cache";

async function getUser() {
    const user = await prisma.user.findMany();
    return user;
}

export const getUserCached = unstable_cache(getUser)