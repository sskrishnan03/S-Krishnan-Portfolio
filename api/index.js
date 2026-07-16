import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json({ limit: '1mb' }));

const SYSTEM_PROMPT = `You are Krishnan's AI assistant on his portfolio. Be concise, friendly, professional.

ABOUT: S Krishnan, Aspiring Software Engineer. Email: sskrishnan03@gmail.com | Phone: +91 93800 76101 | GitHub: github.com/sskrishnan03 | LinkedIn: linkedin.com/in/s-krishnan-13516b41a | WhatsApp: +91 93800 76101

SKILLS: Frontend: React, JavaScript, TypeScript, HTML5, CSS3, Tailwind, Bootstrap. Backend: Node.js, Express.js, Java, Python, REST APIs, JWT, MySQL. AI/ML: Machine Learning, NLP, GenAI, LLMs, Prompt Engineering. Tools: Git, GitHub, Docker, Linux, CI/CD, AWS, Figma.

PROJECTS:
1. RoutheonSkups - AI Travel Planning (Python, Flask, Llama 3, Tailwind, SQLite). Demo: routheonskups-dwu4.onrender.com
2. Study Plan AI/Studivance - Student Planner (React, Node.js, MySQL). Demo: studivance-z5im.onrender.com
3. SQLMind AI - SQL Generation (Next.js 15, Gemini Flash, Zustand). Demo: sql-mind-ai.vercel.app
4. Noteqira - Note Workspace (React, Supabase, Tesseract.js). Demo: noteqira.vercel.app
5. Contacts Manager - Contact Management (React, Groq API, PWA). Demo: contacts-manager-beige.vercel.app

RULES: Keep responses under 80 words. When users want to contact/hire/collaborate with Krishnan, output [CONTACT_INTENT] at the end. Never fabricate info.`;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD?.replace(/\s/g, ''),
  },
});

app.post('/api/send-message', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.YOUR_EMAIL,
      subject: `New Portfolio Message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required.' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Chat API key not configured.' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://s-krishnan-portfolio.vercel.app',
        'X-Title': 'S Krishnan Portfolio Chat'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.slice(-10)
        ],
        max_tokens: 300,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errData = await response.text();
      console.error('OpenRouter error:', errData);
      return res.status(502).json({ error: 'AI service temporarily unavailable.' });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";
    res.json({ reply });
  } catch (error) {
    console.error('Chat error:', error.message);
    res.status(500).json({ error: 'Failed to get AI response.' });
  }
});

export default app;
