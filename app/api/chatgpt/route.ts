import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (request: Request) => {
  const { question } = await request.json();

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = question;

    const result = await model.generateContent([prompt]);
    const inputString = result.response.text();
    const cleanedString = inputString
      .replace(/^\s*```json\s*/, "")
      .replace(/\s*```\s*$/, "");
    
    return NextResponse.json({
      cleanedString,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
};
