// pages/api/generate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

type Data = {
  result?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt, documentContent } = req.body;

  if (!prompt || !documentContent) {
    return res.status(400).json({ error: 'Missing prompt or document content' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set in environment variables.");
    return res.status(500).json({ error: 'GEMINI_API_KEY not found' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getModel({ model: "gemini-pro" });

    const fullPrompt = `Given the following document content:\n\n${documentContent}\n\n${prompt}`;

    const result = await model.generateContent(fullPrompt);
    const responseText = result.response.text();

    res.status(200).json({ result: responseText });

  } catch (error: any) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: error.message || 'Failed to generate content' });
  }
}