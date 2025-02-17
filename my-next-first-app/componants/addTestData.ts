"use server"
import { revalidatePath } from "next/cache"
import prisma from "../lib/prisma"
export default async function addTestData( formData: FormData) {
    await prisma.test.create({
        data: {
            title: formData.get('title') as string,
            color: formData.get('color') as string,
        }
    })
 
    revalidatePath('/test-data');
}
