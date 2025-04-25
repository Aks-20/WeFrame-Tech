import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Simulate API latency
    // await new Promise(resolve => setTimeout(resolve, 1000));

    // Uncomment for real AI API usage
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Add this to .env.local
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API error:', data);
      return res.status(500).json({ error: 'AI API failed to respond' });
    }

    const aiResponse = data.choices[0]?.message?.content || 'No response received.';

    return res.status(200).json({ response: aiResponse });

  } catch (error) {
    console.error('Error processing chat request:', error);
    return res.status(500).json({ error: 'Failed to process your request' });
  }
}
