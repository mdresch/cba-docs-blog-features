"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { getAllDocs } from "@/lib/docs"
import { useEffect, useState } from "react"

export function DocsNavigation() {
  const pathname = usePathname()
  const [docs, setDocs] = useState([])

  useEffect(() => {
    getAllDocs().then(setDocs)
  }, [])

  return (
    <nav>
      <ul className="space-y-2">
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link
              href={`/docs/${doc.slug}`}
              className={`block py-1 ${
                pathname === `/docs/${doc.slug}` ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

