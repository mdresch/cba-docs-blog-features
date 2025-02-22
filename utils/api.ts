// utils/api.ts
import axios from 'axios';

const API_ENDPOINT = '@/app/api/generate'; // Your API route

export const generate = async (data: { prompt: string; documentContent: string }) => {
  try {
    const response = await axios.post(API_ENDPOINT, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Something went wrong');
  }
};