import Link from 'next/link';

export default function DocsSidebar({ docs }) {
  const categories = docs.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {});

  return (
    <div className="w-64 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Documentation</h2>
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-4">
          <h3 className="text-lg font-semibold">{category}</h3>
          <ul>
            {categories[category].map((doc) => (
              <li key={doc.slug} className="mb-2">
                <Link href={`/docs/${doc.slug}`} legacyBehavior>
                  <a className="text-blue-500 hover:underline">{doc.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}