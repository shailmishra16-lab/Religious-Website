import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client if API key is present
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    } catch (e) {
      console.warn('Gemini client initialization warning:', e);
    }
  }

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // AI Pilgrimage Assistant Endpoint
  app.post('/api/ask-ai', async (req, res) => {
    const { message, context } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (ai) {
      try {
        const systemInstruction = `You are YatraAI, an enlightened, spiritually knowledgeable, and highly practical AI pilgrimage concierge for sacred travel in India.
Your tone is warm, respectful, serene ("Namaste"), and steeped in traditional reverence while offering logistically precise, elderly-friendly, and family-conscious advice.
Cover sacred timings (Mangala Aarti, Shringar Aarti, Sandhya Aarti), temple etiquette (dress codes, footwear, VIP queue details), spiritual significance, nearby heritage spots, and transit advice.
Keep responses beautifully structured with concise bullet points, bold highlights, and clear actionable guidance.`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.7-flash',
          contents: `Context: ${context || 'General pilgrimage planning'}\nUser Query: ${message}`,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

        return res.json({ reply: response.text });
      } catch (err: any) {
        console.error('Gemini API error:', err);
        // Fallback gracefully below
      }
    }

    // High quality intelligent fallback response
    let fallbackReply = `Namaste! Here is divine guidance for your inquiry:

✨ **Spiritual Overview & Timing:**
• Early mornings (Brahma Muhurta between 4:00 AM – 6:30 AM) offer the most peaceful atmosphere with minimal crowd and divine vibration.
• Evening Aarti is best witnessed 45 minutes prior to secure front ghat/hall seats.

🚶 **Logistical & Pacing Tip:**
• Dress Code: Traditional modest attire (dhoti/kurta for men, saree/salwar for women in orthodox sanctums).
• Keep a hydration bottle, slip-on footwear for frequent temple entries, and senior-friendly walking shoes.

🌟 Let me know if you would like me to generate a complete custom day-by-day itinerary or adjust for senior/family comfort!`;

    if (message.toLowerCase().includes('varanasi') || message.toLowerCase().includes('kashi')) {
      fallbackReply = `Namaste! Varanasi (Kashi) is the city of Lord Shiva where spirituality meets eternal tradition:

🕉️ **Key Sacred Experiences:**
• **Kashi Vishwanath Darshan:** Best visited for Mangala Aarti (3:00 AM) or Sugam Darshan (pre-booked online slots).
• **Dashashwamedh Ghat Evening Aarti:** Commences at 6:45 PM. Hire a hand-rowed wooden boat by 5:45 PM for an ethereal river view.
• **Assi Ghat Subah-e-Banaras:** Vedic chanting and classical sitar at sunrise (5:30 AM).

🛕 **Elderly & Family Guidance:**
• E-rickshaws are available up to Godowlia Crossing; walk or hire a wheelchair volunteer for the Vishwanath Corridor.
• Recommended stay: Heritage properties near Dashashwamedh or Cantonment area for quieter sleep.`;
    } else if (message.toLowerCase().includes('kedarnath')) {
      fallbackReply = `Namaste! Kedarnath Dham is among the 12 Jyotirlingas nestled in the Garhwal Himalayas (3,583m):

🏔️ **Journey Highlights:**
• **Trek Route:** 16 km from Gaurikund to Kedarnath. Pony, Doli, and Helicopter services (from Guptkashi/Phata/Sersi) are available.
• **Best Season:** May to June, and September to October (avoid peak monsoon in July-August).
• **Darshan Timing:** Morning darshan from 5:00 AM to 1:30 PM; Evening Aarti at 6:00 PM.

🧥 **Preparation:**
• Carry thermal inner layers, waterproof poncho, essential altitude medicine (Diamox after doctor consult), and valid Char Dham biometric registration.`;
    }

    res.json({ reply: fallbackReply });
  });

  // AI Custom Itinerary Generator Endpoint
  app.post('/api/plan-yatra', async (req, res) => {
    const { origin, destination, dates, travelers, preferences, seniorFriendly, familyMode, budgetTier } = req.body;

    if (ai) {
      try {
        const systemInstruction = `You are YatraAI's itinerary synthesis engine. Generate a comprehensive, logistically feasible pilgrimage itinerary.
Return a structured JSON with:
- summary: string
- title: string
- totalDays: number
- estimatedCost: string
- days: Array<{ day: number, title: string, location: string, morning: string, afternoon: string, evening: string, stay: string, tip: string }>
- rituals: Array<string>
- packingAdvice: Array<string>`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.7-flash',
          contents: `Plan a spiritual yatra from ${origin || 'Delhi'} to ${destination || 'Varanasi'} for ${travelers || '2 Adults'}, Dates: ${dates || 'Upcoming month'}, Senior-friendly: ${seniorFriendly ? 'Yes' : 'No'}, Family-mode: ${familyMode ? 'Yes' : 'No'}, Budget: ${budgetTier || 'Comfort'}. Preferences: ${preferences || 'Sacred darshan, peaceful pace'}.`,
          config: {
            systemInstruction,
            responseMimeType: 'application/json',
          },
        });

        try {
          const parsed = JSON.parse(response.text?.trim() || '{}');
          return res.json(parsed);
        } catch (e) {
          // fall through
        }
      } catch (err: any) {
        console.error('Gemini itinerary generation error:', err);
      }
    }

    // Default structured response
    const sampleDays = [
      {
        day: 1,
        title: 'Arrival & Sacred Welcome',
        location: destination || 'Varanasi',
        morning: `Arrival at ${destination || 'Varanasi'}, private transfer to your heritage riverside stay. Rest and acclimatize.`,
        afternoon: 'Orientation stroll through the historic corridors. Savor authentic satvik refreshments.',
        evening: 'Witness the grand evening Maha Aarti with front-row boat seating on the sacred river.',
        stay: 'Heritage Riverside Haveli / Taj Nadesar',
        tip: 'Book evening boat 1 hour in advance before sunset for prime viewing.'
      },
      {
        day: 2,
        title: 'Divine Sanctum & Temple Trails',
        location: destination || 'Varanasi',
        morning: 'Brahma Muhurta holy dip, followed by VIP Darshan and Rudrabhishek ritual at the main sanctum.',
        afternoon: 'Guided cultural heritage walk discovering ancient stone carvings, silk weavers, and sacred ashrams.',
        evening: 'Sunset spiritual discourse & peaceful meditation by the quiet northern ghats.',
        stay: 'Heritage Riverside Haveli / Taj Nadesar',
        tip: 'Carry temple offerings in traditional brass thali without electronic devices.'
      },
      {
        day: 3,
        title: 'Enlightenment & Farewell Blessings',
        location: destination || 'Varanasi',
        morning: 'Visit to surrounding sacred shrines and historic monastery parks for peaceful reflection.',
        afternoon: 'Prasad collection, auspicious souvenir blessing, and check-out.',
        evening: 'Depart with peace of mind and divine memories for onward journey.',
        stay: 'Onward Journey',
        tip: 'Collect certified Ganga Jal and consecrated Rudraksha beads from temple trust counters.'
      }
    ];

    res.json({
      summary: `A carefully crafted 3-day spiritual pilgrimage to ${destination || 'Varanasi'} designed for ${travelers || '2 Adults'} with ${budgetTier || 'Comfort'} tier accommodations and thoughtful pacing.`,
      title: `${destination || 'Kashi'} Divya Yatra`,
      totalDays: 3,
      estimatedCost: budgetTier === 'Budget' ? '₹9,500 - ₹14,000' : budgetTier === 'Premium' ? '₹32,000 - ₹55,000' : '₹15,000 - ₹25,000',
      days: sampleDays,
      rituals: ['Brahma Muhurta Snan', 'Rudrabhishek Sankalp', 'Evening Deep Daan', 'Vedic Chanting Circle'],
      packingAdvice: ['Traditional modest attire', 'Comfortable slip-on footwear', 'Personal medicine kit', 'Brass/Copper jal pot']
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`YatraAI Server running on port ${PORT}`);
  });
}

startServer();
