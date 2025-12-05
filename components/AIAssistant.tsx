import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateTravelResponse } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Ayubowan! I am your Sri Lanka travel assistant. Ask me anything about safety, visas, places to visit, or local etiquette.',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateTravelResponse(input);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-rounded">
      {/* Chat Window */}
      <div 
        className={`pointer-events-auto bg-white rounded-3xl shadow-2xl border border-gray-100 w-[90vw] md:w-[400px] transition-all duration-300 transform origin-bottom-right overflow-hidden ${
          isOpen ? 'scale-100 opacity-100 translate-y-0 mb-4' : 'scale-90 opacity-0 translate-y-10 h-0 w-0'
        }`}
        style={{ maxHeight: '600px' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-ceylon-green to-sky-700 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Sparkles className="w-5 h-5 text-ceylon-gold" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm">Ayubowan AI</h3>
              <p className="text-xs text-sky-100 opacity-90 font-medium">Online • Official Assistant</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 bg-slate-50 space-y-4">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-sky-100 text-ceylon-green'
              }`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`max-w-[80%] p-3.5 text-sm rounded-2xl font-medium ${
                msg.role === 'user' 
                  ? 'bg-ceylon-green text-white rounded-tr-none shadow-md' 
                  : 'bg-white border border-gray-100 text-slate-700 rounded-tl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 ml-10">
              <div className="w-2 h-2 bg-ceylon-green/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-ceylon-green/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-ceylon-green/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about safety, visas, etc..."
              className="w-full pl-5 pr-12 py-3.5 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-ceylon-green/20 focus:bg-white transition-all text-sm font-medium"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-ceylon-green text-white rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-gray-400 font-bold">AI responses can be inaccurate. Verify official info.</p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto shadow-2xl transition-all duration-300 group flex items-center gap-2 ${
          isOpen ? 'bg-gray-800 text-white' : 'bg-ceylon-green text-white hover:bg-sky-700 hover:-translate-y-1'
        } p-4 rounded-full`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold pr-1">Ask AI Assistant</span>}
      </button>
    </div>
  );
};