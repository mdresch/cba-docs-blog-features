"use client";

import { useState, useEffect } from "react";
import MainLayout from "../main-layout";
import { PageSkeleton } from "@/components/page-skeleton";

export default function DocsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchDocs() {
      try {
        const response = await fetch('/api/docs');
        const data = await response.json();
        setDocs(data);
      } catch (error) {
        console.error("Error fetching docs:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDocs();
  }, []);

  const categories = docs.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {});

  return (
    <MainLayout>
      <div className="flex-1 p-8">
        {isLoading ? (
          <PageSkeleton />
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">Documentation</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.keys(categories).map((category) => (
                <div key={category} className="p-4 border rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{category}</h3>
                  <ul>
                    {categories[category].map((doc) => (
                      <li key={doc.slug} className="mb-2">
                        <a href={`/docs/${doc.slug}`} className="text-blue-500 hover:underline">
                          {doc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}