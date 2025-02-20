// components/MDXContent.js
"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";

const MDXContent = ({ source }) => (
  <MDXProvider>
    <MDXRemote {...source} />
  </MDXProvider>
);

export default MDXContent;