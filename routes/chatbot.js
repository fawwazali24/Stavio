

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// const { InferenceClient } = require("@huggingface/inference");

// Initialize Hugging Face client
// const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

//googleconst 
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const Listing = require('../models/listing.js'); 

// Chat History Model
const chatHistorySchema = new mongoose.Schema({
  conversationId: {
    type: String,
    required: true,
    index: true
  },
  userMessage: String,
  aiResponse: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const ChatHistory = mongoose.model('ChatHistory', chatHistorySchema);

// RAG Helper Functions
async function searchRelevantProperties(query) {
  try {
    // Search properties based on query keywords
    const keywords = query.toLowerCase().split(' ').filter(w => w.length > 2);
    
    // Build search query
    const searchQuery = {
      $or: [
        { title: { $regex: keywords.join('|'), $options: 'i' } },
        { description: { $regex: keywords.join('|'), $options: 'i' } },
        { location: { $regex: keywords.join('|'), $options: 'i' } },
        { country: { $regex: keywords.join('|'), $options: 'i' } },
        { category: { $regex: keywords.join('|'), $options: 'i' } },
        { usp1: { $regex: keywords.join('|'), $options: 'i' } },
        { usp2: { $regex: keywords.join('|'), $options: 'i' } },
        { usp3: { $regex: keywords.join('|'), $options: 'i' } }
      ]
    };

    const priceMatch = query.match(/under\s+(\d+)|less than\s+(\d+)|below\s+(\d+)/i);
    if (priceMatch) {
      const maxPrice = parseInt(priceMatch[1] || priceMatch[2] || priceMatch[3]);
      searchQuery.price = { $lte: maxPrice };
    }

    const guestMatch = query.match(/(\d+)\s+guests?/i);
    if (guestMatch) {
      searchQuery.guests = { $gte: parseInt(guestMatch[1]) };
    }

    const bedroomMatch = query.match(/(\d+)\s+bedrooms?/i);
    if (bedroomMatch) {
      searchQuery.bedrooms = { $gte: parseInt(bedroomMatch[1]) };
    }
    
    const properties = await Listing.find(searchQuery).limit(5);

    return properties;
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}

async function getContextFromDB(query) {
  const properties = await searchRelevantProperties(query);
  
  if (properties.length === 0) {
    return "No properties found matching your criteria. Please try a different search.";
  }
  
  let context = "Available Properties:\n\n";
  
  properties.forEach((prop, idx) => {
    context += `${idx + 1}. ${prop.title}\n`;
    context += `   Location: ${prop.location}, ${prop.country}\n`;
    context += `   Category: ${prop.category}\n`;
    context += `   Price: ${prop.price}/night\n`;
    context += `   Capacity: ${prop.guests} guests, ${prop.bedrooms} bedrooms, ${prop.beds} beds, ${prop.bathroom} bathrooms\n`;
    context += `   Check-in: ${prop.checkin}, Check-out: ${prop.checkout}\n`;
    
    //removed desciption from prompt to send lesser text input
    // if (prop.description) {
    //   context += `   Description: ${prop.description}\n`;
    // }
    
    const usps = [prop.usp1, prop.usp2, prop.usp3].filter(Boolean);
    if (usps.length > 0) {
      context += `   Highlights: ${usps.join(' • ')}\n`;
    }
    
    context += '\n';
  });

  return context;
}


// async function generateResponse(userMessage, context) {
//   const systemPrompt = `You are a helpful assistant for an Airbnb-like property rental platform. 
// Use the following property information to answer user questions accurately and helpfully.
// If the information isn't in the context, politely say you don't have that information.

// Available Properties:
// ${context}

// Guidelines:
// - Provide concise, friendly responses
// - Include property details when relevant (price, location, capacity, category)
// - List the properties clearly with their key information
// - Mention unique selling points (USPs/highlights) when discussing properties
// - Help users find properties based on their needs (location, budget, guest count, bedrooms)
// - Be conversational and helpful
// - Encourage users to login for personalized recommendations and booking`;

//   try {
//     console.log('Calling Hugging Face API...');
    
//     // Using Hugging Face's official client
//     const chatCompletion = await client.chatCompletion({
//       model: "HuggingFaceH4/zephyr-7b-beta",
//       messages: [
//         {
//           role: "system",
//           content: systemPrompt
//         },
//         {
//           role: "user",
//           content: userMessage
//         }
//       ],
//       max_tokens: 500,
//       temperature: 0.7
//     });

//     const aiResponse = chatCompletion.choices[0].message.content;
//     console.log('AI Response received:', aiResponse.substring(0, 100) + '...');
//     console.log(aiResponse);
    
//     // If response is empty or too short, provide fallback
//     if (!aiResponse || aiResponse.trim().length < 20) {
//       console.log('Response too short, using fallback');
//       return generateFallbackResponse(userMessage, context);
//     }
    
//     return aiResponse.trim();
    
//   } catch (error) {
//     console.error('AI API error:', error.message);
//     return generateFallbackResponse(userMessage, context);
//   }
// } 
//

async function generateResponse(userMessage, context) {
  const systemPrompt = `You are a helpful assistant for an Airbnb-like property rental platform. 
Use the following property information to answer user questions accurately and helpfully.
If the information isn't in the context, politely say you don't have that information.

Available Properties:
${context}

Guidelines:
- Provide concise, friendly responses
- Include property details when relevant (price, location, capacity, category)
- List properties clearly
- Mention unique selling points
- Help users find properties based on their needs
- Encourage users to login for personalized recommendations and booking.
  `;

  try {
    console.log("Calling Gemini API...");

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
    });

    const result = await model.generateContent({
      contents: [
        { role: "system", parts: [{ text: systemPrompt }] },
        { role: "user", parts: [{ text: userMessage }] },
      ]
    });

    const aiResponse = result.response.text();

    console.log("AI Response received:", aiResponse.substring(0, 100) + "...");

    if (!aiResponse || aiResponse.trim().length < 20) {
      console.log("Response too short — using fallback.");
      return generateFallbackResponse(userMessage, context);
    }

    return aiResponse.trim();

  } catch (error) {
    console.error("AI API error:", error);
    return generateFallbackResponse(userMessage, context);
  }
}

function generateFallbackResponse(userMessage, context) {
  const lowerQuery = userMessage.toLowerCase();
  
  // Check if asking about properties
  if (lowerQuery.includes('show') || lowerQuery.includes('find') || lowerQuery.includes('looking for')) {
    if (context.includes('No properties found')) {
      return "I couldn't find any properties matching your criteria. Try searching by location, category, or price range.";
    }
    return "Here are the properties I found based on your search. Would you like more details about any specific property?";
  }
  
  // Check if asking about price
  if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('expensive')) {
    return "I can help you find properties within your budget. What's your price range per night?";
  }
  
  // Check if asking about location
  if (lowerQuery.includes('where') || lowerQuery.includes('location')) {
    return "I can show you properties in various locations. Which area are you interested in?";
  }
  
  // Check if asking about amenities/features
  if (lowerQuery.includes('bedroom') || lowerQuery.includes('guest') || lowerQuery.includes('bathroom')) {
    return "I can help you find properties based on capacity. How many guests will be staying?";
  }
  
  // Generic helpful response
  return "I'm here to help you find the perfect property! You can ask me about properties by location, price, category (beaches, mountains, cities, etc.), or capacity. Please login for a personalized experience and to make bookings.";
}

//Post route
router.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get relevant context from database
    const context = await getContextFromDB(message);

    // Generate AI response
    const aiResponse = await generateResponse(message, context);

    // Save conversation to database using Mongoose
    const conversation = new ChatHistory({
      conversationId: conversationId || new Date().getTime().toString(),
      userMessage: message,
      aiResponse: aiResponse,
      timestamp: new Date()
    });

    await conversation.save();

    res.json({
      response: aiResponse,
      conversationId: conversation.conversationId
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get chat history
router.get('/api/chat/history/:conversationId', async (req, res) => {
  try {
    const { conversationId } = req.params;
    
    const history = await ChatHistory
      .find({ conversationId })
      .sort({ timestamp: 1 });

    res.json({ history });
  } catch (error) {
    console.error('History error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
