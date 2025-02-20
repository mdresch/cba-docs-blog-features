import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const docsDirectory = path.join(process.cwd(), "docs");

export async function getAllDocs() {
  try {
    const categories = await fs.readdir(docsDirectory);
    const allDocsData = [];

    for (const category of categories) {
      const categoryPath = path.join(docsDirectory, category);
      const stat = await fs.stat(categoryPath);

      if (stat.isDirectory()) {
        const fileNames = await fs.readdir(categoryPath);

        for (const fileName of fileNames) {
          const slug = fileName.replace(/\.mdx$/, "");
          const fullPath = path.join(categoryPath, fileName);
          const fileContents = await fs.readFile(fullPath, "utf8");
          const { data } = matter(fileContents);

          allDocsData.push({
            slug,
            title: data.title,
            category,
          });
        }
      }
    }

    return allDocsData;
  } catch (error) {
    console.error("Error reading docs directory", error);
    return [];
  }
}

export async function getDocBySlug(slug: string) {
  try {
    const categories = await fs.readdir(docsDirectory);

    for (const category of categories) {
      const categoryPath = path.join(docsDirectory, category);
      const fileNames = await fs.readdir(categoryPath);

      if (fileNames.includes(`${slug}.mdx`)) {
        const fullPath = path.join(categoryPath, `${slug}.mdx`);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const mdxSource = await serialize(content);

        return {
          slug,
          title: data.title,
          content: mdxSource,
          category,
        };
      }
    }

    return null;
  } catch (error) {
    console.error(`Error reading doc file for slug: ${slug}`, error);
    return null;
  }
}