import { getDocBySlug, getAllDocs } from "@/lib/docs";
import MainLayout from "../../main-layout";
import DocsSidebar from "@/components/DocsSidebar";
import TableOfContents from "@/components/TableOfContents";
import MDXContent from "@/components/MDXContent";

export default async function DocPage({ params }: { params: { slug: string } }) {
  const doc = await getDocBySlug(params.slug);
  const docs = await getAllDocs();

  console.log(TableOfContents); // Should not be undefined or null
  
  if (!doc) {
    return (
      <MainLayout>
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Document not found</h1>
          <p>The document you are looking for does not exist. Please check the URL or select a different document from the list.</p>
        </div>
      </MainLayout>
    );
  }

  const editUrl = `https://github.com/mdresch/cba-docs-blog-features/edit/main/docs/${doc.category}/${params.slug}.mdx`;

  return (
    <MainLayout>
      <div className="flex">
        <DocsSidebar docs={docs} />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">{doc.title}</h1>
          <div className="prose max-w-none">
            <MDXContent source={doc.content} />
          </div>
          <div className="mt-8">
            <a href={editUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Edit this document
            </a>
          </div>
        </div>
        <TableOfContents content={doc.content} />
        
      </div>
    </MainLayout>
  );
}