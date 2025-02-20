import { getDocBySlug } from '../../../../lib/docs';

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const doc = await getDocBySlug(slug);
    if (doc) {
      return new Response(JSON.stringify(doc), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Document not found' }), { status: 404 });
    }
  } catch (error) {
    console.error(`Error fetching doc with slug: ${slug}`, error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}