import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined");
  }
  return new GoogleGenAI({ apiKey });
};

export const getEtiquetteAdvice = async (question: string): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: `You are LUMINA, a world-class etiquette and lifestyle coach. 
        Your tone is sophisticated, elegant, encouraging, and concise. 
        Provide advice on social etiquette, personal grooming, or professional presence.
        Keep answers under 100 words. Use refined vocabulary.`,
      },
    });

    return response.text || "I apologize, but I cannot provide advice at this moment. Please try again later.";
  } catch (error) {
    console.error("Error fetching etiquette advice:", error);
    throw error;
  }
};
