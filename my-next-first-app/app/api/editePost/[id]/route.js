// app/api/posts/[id]/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  const { id } = params;

  try {
    const { title, content, published } = await request.json();

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        published,
      },
    });

    return new Response(JSON.stringify(updatedPost), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to update post' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}