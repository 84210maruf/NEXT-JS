// app/api/posts/[id]/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await prisma.post.delete({
      where: { id },
    });

    return new Response(null, { status: 204 }); // No content response
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to delete post' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}