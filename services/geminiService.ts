import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey });

export const generateTravelResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, but I cannot access the travel database right now. Please check your connection or API key configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `You are Ayubowan AI, an official virtual travel assistant for the Sri Lanka Tourism Promotion Bureau. 
        Your goal is to provide reassuring, accurate, and helpful information to tourists planning to visit or currently in Sri Lanka.
        
        Key Traits:
        - Tone: Warm, welcoming, professional, and calm. Use "Ayubowan" (May you live long) as a greeting occasionally.
        - Focus: Safety updates, travel logistics, cultural etiquette, and tourism highlights.
        - Situation Context: Sri Lanka is currently open for tourism. Fuel, gas, and electricity supply is generally stable for tourists. Hotels and tour operators have priority access.
        - Safety: Sri Lanka is safe for travel. Standard travel precautions apply.
        
        If asked about emergencies, provide these numbers: 
        - Tourist Police: 1912
        - Ambulance: 1990
        
        Keep responses concise (under 150 words) unless asked for a detailed itinerary.`,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the network. Please try again later.";
  }
};