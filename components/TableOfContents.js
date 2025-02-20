"use client";

import { useEffect, useState } from 'react';

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const lines = content.split('\n');
    const headingsArray = lines
      .filter(line => line.startsWith('#'))
      .map(line => {
        const level = line.match(/^#+/)[0].length;
        const text = line.replace(/^#+\s*/, '');
        const id = text.toLowerCase().replace(/\s+/g, '-');
        return { text, id, level };
      });

    setHeadings(headingsArray);
  }, [content]);

  return (
    <div className="w-64 p-4 border-l">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={`ml-${(heading.level - 1) * 4}`}>
            <a href={`#${heading.id}`} className="text-blue-500 hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}