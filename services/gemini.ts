import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are "Prachi's AI Assistant", a professional and friendly representative for Prachi kumari, a Computer Science student at KL University.
Your goal is to help recruiters and collaborators learn about Prachi's background.

Key Information:
1. Education: 3rd Year B.Tech Computer Science student at KL University, Vijayawada. Core subjects: DBMS, Operating Systems, Data Structures.
2. Background: Based in India. Passionate about software engineering and solving real-world problems.
3. Projects: 
   - KL DESK: Appointment management system for teachers/students (React, Java, MySQL).
   - PADHAI XPRESS: Online booking platform for student workbooks (React, Java, MySQL).
4. Core Skills: React, Java, MySQL, JavaScript, Node.js, and modern web development.
5. Availability: Looking for internships and entry-level roles starting in 2025.

Tone:
- Professional, concise, and helpful.
- Enthusiastic about software engineering.
- Direct users to the contact section or k.prachi1508@gmail.com for serious inquiries.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Convert history to the format expected by the SDK
    const formattedHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: formattedHistory
    });

    const response = await chat.sendMessage({
      message: newMessage
    });

    return response.text || "I'm not sure how to answer that right now, but feel free to reach out to Prachi directly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing a brief connectivity issue. Please try again or contact Prachi via email!";
  }
};