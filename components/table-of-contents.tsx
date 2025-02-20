"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

type Heading = {
  id: string
  title: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const pathname = usePathname()

  useEffect(() => {
    if (!content) {
      console.error("No content provided to TableOfContents")
      return
    }

    try {
      const extractedHeadings = content.match(/^#{2,4}\s+.+$/gm) || []
      const parsedHeadings = extractedHeadings.map((heading) => {
        const match = heading.match(/^(#{2,4})\s+(.+)$/)
        if (!match) {
          throw new Error(`Invalid heading format: ${heading}`)
        }
        const [, hashes, title] = match
        const level = hashes.length - 1
        const id = title.toLowerCase().replace(/\s+/g, "-")
        return { id, title, level }
      })
      setHeadings(parsedHeadings)
    } catch (error) {
      console.error("Error parsing content for TableOfContents:", error)
      setHeadings([])
    }
  }, [content])

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className="sticky top-8">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index} className={`pl-${Math.max(0, (heading.level - 2) * 4)}`}>
            <Link href={`${pathname}#${heading.id}`} className="text-blue-600 hover:underline">
              {heading.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

