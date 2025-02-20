import { getAllDocs } from '../../../lib/docs';

export async function GET(req) {
  try {
    const docs = await getAllDocs();
    return new Response(JSON.stringify(docs), { status: 200 });
  } catch (error) {
    console.error("Error fetching all docs", error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
