"use client";

import { useEffect, useState } from 'react';

const addHeadingIds = (content) => {
  let headingCount = 0;
  return content.split('\n').map(line => {
    if (line.startsWith('#')) {
      const level = line.match(/^#+/)[0].length;
      const text = line.replace(/^#+\s*/, '');
      const id = text.toLowerCase().replace(/\s+/g, '-') + '-' + headingCount++;
      return `${'#'.repeat(level)} ${text} {#${id}}`;
    } else if (line.match(/<h[1-6]>/)) {
      const level = parseInt(line.match(/<h([1-6])>/)[1]);
      const text = line.replace(/<\/?h[1-6]>/g, '');
      const id = text.toLowerCase().replace(/\s+/g, '-') + '-' + headingCount++;
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
    return line;
  }).join('\n');
};

const generateNumbering = (headings) => {
  const numbering = [];
  const levels = [0, 0, 0, 0, 0, 0];

  headings.forEach((heading, index) => {
    levels[heading.level - 1]++;
    for (let i = heading.level; i < levels.length; i++) {
      levels[i] = 0;
    }
    numbering[index] = levels.slice(0, heading.level).join('.');
  });

  return numbering;
};

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [numbering, setNumbering] = useState([]);

  useEffect(() => {
    if (typeof content !== 'string') {
      content = content.toString();
    }

    console.log('Content:', content); // Debugging line

    const processedContent = addHeadingIds(content);
    const lines = processedContent.split('\n');
    const headingsArray = lines
      .filter(line => line.startsWith('#') || line.match(/<h[1-6] id="/))
      .map(line => {
        let level, text, id;
        if (line.startsWith('#')) {
          level = line.match(/^#+/)[0].length;
          text = line.replace(/^#+\s*/, '').replace(/\s*\{#.*\}$/, '');
          id = line.match(/\{#(.*)\}$/)[1];
        } else {
          level = parseInt(line.match(/<h([1-6]) id="/)[1]);
          text = line.replace(/<\/?h[1-6] id=".*">/g, '');
          id = line.match(/id="(.*)"/)[1];
        }
        return { level, text, id };
      });

    console.log('Headings:', headingsArray); // Debugging line

    setHeadings(headingsArray);
    setNumbering(generateNumbering(headingsArray));
  }, [content]);

  return (
    <nav aria-label="Table of contents" style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading, index) => (
          <li key={index} style={{ marginLeft: (heading.level - 1) * 20 }}>
            <a href={`#${heading.id}`}>
              {numbering[index]} {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;