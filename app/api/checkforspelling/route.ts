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
    
    console.log(inputString);
    // replace /n with empty string then trim the string
    const outputString = inputString.replace(/\n/g, "").trim();
    
    return NextResponse.json({
      outputString,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
};
