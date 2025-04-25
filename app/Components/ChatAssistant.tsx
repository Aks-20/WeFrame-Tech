'use client'
import React, { useState } from 'react';

interface ChatAssistantProps {
  title?: string;
  value?: string;
  subtitle?: string;
  questions?: any[];
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ 
  title = "Welcome to the AI Chat Assistant"
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessageToAPI = async (userMessage: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString() + '-assistant',
          content: data.response,
          role: 'assistant',
          timestamp: new Date()
        }
      ]);

    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('API call failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const userMessage = {
        id: Date.now().toString(),
        content: message,
        role: 'user' as const,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      sendMessageToAPI(message);
      setMessage('');
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      {/* Logo and header */}
      <div className="text-center py-4">
        <div className="inline-flex justify-center">
          <div className="w-10 h-10 relative mb-2">
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                
            </div>
          </div>
        </div>
        <h1 className="text-xl font-bold px-4 py-2 border-2 border-purple-700 inline-block">
        Welcome to the AI Chat Assistant
        </h1>
      </div>

      {/* Messages */}
      {messages.length > 0 && (
        <div className="p-4 max-h-64 overflow-y-auto border-t">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`mb-3 p-2 rounded-lg ${
                msg.role === 'user' ? 'bg-blue-100 ml-8' : 'bg-gray-100 mr-8'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className="text-xs text-gray-500 text-right mt-1">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center justify-center p-4">
              <div className="animate-pulse">Thinking...</div>
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center p-2">{error}</div>
          )}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask your question here..."
            className=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
              isLoading ? 'text-gray-300' : 'text-gray-400 hover:text-blue-500'
            }`}
            disabled={isLoading}
          >
            <svg xmlns="" width="20" height="20" 
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatAssistant;
