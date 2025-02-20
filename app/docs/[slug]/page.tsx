import { getDocBySlug, getAllDocs } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";
import MainLayout from "../../main-layout";
import DocsSidebar from "@/components/DocsSidebar";
import TableOfContents from "@/components/TableOfContents";

export default async function DocPage({ params }: { params: { slug: string } }) {
  const doc = await getDocBySlug(params.slug);
  const docs = await getAllDocs();

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

  return (
    <MainLayout>
      <div className="flex">
        <DocsSidebar docs={docs} />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">{doc.title}</h1>
          <div className="prose max-w-none">
            <MDXRemote source={doc.content} />
          </div>
        </div>
        <TableOfContents content={doc.content} />
      </div>
    </MainLayout>
  );
}