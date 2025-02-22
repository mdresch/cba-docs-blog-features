'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface QuillEditorProps {
  apiKey: string;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ apiKey }) => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [editor, setEditor] = useState<Quill | null>(null);
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    if (quillRef.current && !editor) {
      setEditor(quillRef.current.getEditor());
    }
  }, []); // Empty dependency array is generally preferred

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleGenerateClick = async () => {
    if (!apiKey) return;

    try {
      const response = await fetch(
        `https://api.generativeai.google.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: {
              text: `Continue the following text:\n${prompt}`,
            },
            temperature: 0.7,
            maxOutputTokens: 256,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.candidates && data.candidates.length > 0) {
        const aiOutput = data.candidates[0].output;

        if (editor) {
          const currentLength = editor.getLength();
          editor.insertText(currentLength, aiOutput, 'api');
          setGeneratedText(editor.getContents()); // Or editor.getText() for plain text
        }
      } else {
        console.error('Error generating text:', data);
        // Handle error (e.g., display message to user)
      }
    } catch (error) {
      console.error('Error calling generative AI API:', error);
      // Handle error
    }
  };

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
    ],
  };

  return (
    <div>
      <div>
        <label htmlFor="prompt">Enter your prompt:</label><br />
        <textarea
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
          rows={5}
          cols={50}
        />
        <button onClick={handleGenerateClick}>Generate</button>
      </div>
      <div>
        <label>Generated Text:</label><br />
        <ReactQuill
          ref={quillRef}
          theme="snow"
          modules={{ toolbar: modules.toolbar }}
          value={generatedText}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default QuillEditor;