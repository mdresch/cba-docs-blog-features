// app/api/features/route.js (or wherever your API routes are)
import { NextResponse } from 'next/server'; // Import NextResponse

export async function GET(request) { // <-- This is the crucial change
    try {
      // 1. Fetch data (replace with your actual data source)
      // This could be a database query, fetching from an external API,
      // reading from a file, or any other way you get your features data.
  
      // Example using a mock data array:
      const features = [
        { 
          title: "AI-Powered Analysis", 
          description: "Leverage cutting-edge AI for in-depth code reviews." 
        },
        { 
          title: "Real-time Feedback", 
          description: "Get instant feedback on your code as you write." 
        },
        { 
          title: "Integrated Workflow", 
          description: "Seamlessly integrate with your existing development tools." 
        }
        // ... more features
      ];
  
      // Example fetching from an external API:
      // const response = await fetch('https://api.example.com/features');
      // if (!response.ok) {
      //   throw new Error(`Failed to fetch features: ${response.status}`);
      // }
      // const features = await response.json();
  
      // Example reading from a local JSON file (less common for dynamic data):
      // const fs = require('fs/promises'); // Use fs.promises for async file operations
      // const data = await fs.readFile('./data/features.json', 'utf8');
      // const features = JSON.parse(data);
  
      // 2. Respond with the data

      return NextResponse.json(features); // Use NextResponse.json()
  
    } catch (error) {
      console.error("Error fetching features:", error);
      return new NextResponse("Failed to fetch features", { status: 500 }); // Error response
    }
  }