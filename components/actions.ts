'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

export async function generateContent(prompt: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API key is missing in the environment.");
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content on the server:", error);
    throw new Error(`Failed to generate content: ${error}`);
  }
}