'use client';
import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react';
import MainLayout from '@/app/main-layout';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Import the RichTextEditor component dynamically
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { 
  ssr: false 
});

// Define the RichTextEditorHandle type
type RichTextEditorHandle = {
  getContent: () => string;
  setContent: (html: string) => void;
};

// Import the Google Generative AI package
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Home() {
  const editorRef = useRef<RichTextEditorHandle>(null); // Ref for RichTextEditor
  const [contentHtml, setContentHtml] = useState<string>(''); // State to store the editor content
  const [editorContent, setEditorContent] = useState<string>(''); // State to store the editor content

  const [aiResponse, setAiResponse] = useState<string>(''); // State to store the AI response
  const [content, setContent] = useState("");
  const [aiContent, setAIContent] = useState("");
  const [isContentLoading, setIsConentLoading] = useState(false);
  const [isAIContentLoading, setIsAIContentLoading] = useState(false);

  const handleGetContent = async () => {
    setIsConentLoading(true);
    setContent("Loading Content..."); // Indicate loading text
    // Simulate fetching content - replace with actual logic
    if (editorRef.current) {
      const content = editorRef.current.getContent(); // Get the editor content
      setEditorContent(content); // Update the state with the content
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsConentLoading(false);
    setContent("Content Loaded"); // Indicate loading text
  };

  const handleSetContent = () => {
    if (editorRef.current) {
      editorRef.current.setContent('<p>This is <strong>programmatically set</strong> content.</p>'); // Set the editor content
    }
  };

  const handleGetAIcontent = async () => {
    setIsAIContentLoading(true);
    setAIContent("Loading AI Content..."); // Indicate loading text
    // Fetching AI content using Google Generative AI
    if (editorRef.current) {
      editorRef.current.setContent(aiContent); // Set the editor content
      const content = editorRef.current.getContent();
      const genAI = new GoogleGenerativeAI("AIzaSyA2NzjDfzOCrincuCgbOvzw82i1fw1jGhk");
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      // TODO: Set the contetn to pickup the editorRef.current data and provide the details as prompt to generate AI response
      try {
        const result = await model.generateContent(content); // Use the editor content as the prompt
        const aiTextResponse = result.response.text();
        setAiResponse(aiTextResponse); // Store AI response in state
        if (editorRef.current) {
          editorRef.current.setContent(aiTextResponse); // Set the editor content
        }
      } catch (error) {
        console.error("Error fetching AI response:", error);
        setAiResponse("Error fetching AI content."); // Update AI response state with error message
        if (editorRef.current) {
          editorRef.current.setContent("Error fetching AI content."); // Set the editor content
        }
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAIContentLoading(false);
    setAIContent("AI Content Loaded"); // Indicate loading text
  };

  const handleContentChange = (html: string) => {
    console.log("Content changed:", html);
    // You can use this to update state or perform other actions when content changes
    setContentHtml(html);
  };
 
  return (
        <>
        <MainLayout>
          <div>
            <RichTextEditor
              ref={editorRef}
              placeholder="Enter your text here..."
              theme="snow"
              //initialContent=""
              //onChange={handleContentChange}
              toolbarModules={[
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['link']
              ]}
              />
              <div className="mt-2">
                <Button variant="outline" onClick={handleGetContent}>Get Content</Button>
                <Button variant="outline" onClick={handleSetContent} className="ml-2">Set Content</Button>
              </div>
              {contentHtml && (
            <div className="mt-4 border p-2">
              <h3>Content HTML:</h3>
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
          )}
        </div>
    {/* --- REMOVE THIS ENTIRE BLOCK BELOW --- */}
        {/* <div>
           <Button
            onClick={handleGetContent}
            variant="outline" // Example Shadcn button variant
            disabled={isContentLoading} // Disable the button when content is loading
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show Content
            {isContentLoading && <span className="ml-2">Loading...</span>} // Loading text indicator
          </Button>
          {isContentLoading && <Progress className="mt-2" value={50} />} // Progress bar
        </div> */}
    {/* --- REMOVE THIS ENTIRE BLOCK ABOVE --- */}
    
        <div className="mt-4">
            <Button
              onClick={handleGetAIcontent}
              variant="outline" // Example Shadcn button variant
              disabled={isAIContentLoading} // Disable button while loading
            >
              Show AI Content
              {isAIContentLoading && <span className="ml-2">Loading...</span>} // Loading text indicator
            </Button>
            {isAIContentLoading && <Progress className="mt-2" value={50} />} // Progress bar
          </div>
          {aiContent && <p className="mt-2">{aiContent}</p>}
    
    
          <div className="mt-4">
            <h2 className="font-bold text-lg">Editor Content:</h2>
            <div
              className="border p-4 rounded bg-gray-50"
              dangerouslySetInnerHTML={{ __html: editorContent }}
            />
          </div>
          <div className="mt-4">
                <h2 className="font-bold text-lg">AI Response:</h2>
                <div className="border p-4 rounded bg-gray-50">
                  {aiResponse}
                </div>
              </div>
    
        </MainLayout>
        </>
      );
    }