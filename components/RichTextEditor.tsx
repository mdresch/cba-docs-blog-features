'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles

// Define the ref type for the RichTextEditor component
export type RichTextEditorHandle = {
  getContent: () => string;
  setContent: (html: string) => void; // Add setContent to the handle
};

export interface RichTextEditorProps {
  placeholder?: string;
  toolbarModules?: Quill.StringMap[]; // Allow customization of toolbar modules
  theme?: 'snow' | 'bubble' | null; // Allow theme customization
  initialContent?: string; // Prop to set initial content
  onChange?: (html: string) => void; // Optional onChange handler
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(({
  placeholder = 'Write something...',
  toolbarModules, // Destructure toolbarModules prop
  theme = 'snow', // Destructure theme prop, default to 'snow'
  initialContent = '', // Destructure initialContent prop
  onChange, // Destructure onChange prop
}, ref) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: theme || 'snow', // Use theme prop to set the theme
        modules: {
          toolbar: toolbarModules || [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        },
        placeholder: placeholder, // use placeholder prop 'Write something...',
      });

      // Set initial content if provided
      if (initialContent) {
        quillRef.current.root.innerHTML = initialContent;
      }

      // Handle text-change event for onChange prop
      if (onChange) {
        quillRef.current.on('text-change', () => {
          onChange(quillRef.current?.root.innerHTML || '');
        });
      }
    }

    return () => {
      quillRef.current = null; // Cleanup to avoid memory leaks
    };
  }, [placeholder, toolbarModules, theme, initialContent, onChange]); // Add props to dependency array

  // Expose the getContent and setContent function to the parent component
  useImperativeHandle(ref, () => ({
    getContent: () => {
      if (quillRef.current) {
        return quillRef.current.root.innerHTML; // Return the HTML content
      }
      return '';
    },
    setContent: (html: string) => { // Implement the setContent function
      if (quillRef.current) {
        quillRef.current.root.innerHTML = html; // Set the HTML content
      }
    },
  }));

  return <div ref={editorRef} style={{ height: '300px' }} />;
});

RichTextEditor.displayName = 'RichTextEditor';
export default RichTextEditor;
