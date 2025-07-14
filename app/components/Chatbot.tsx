'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);
    let aiMessage = { role: 'assistant', content: '' };
    setMessages((msgs) => [...msgs, aiMessage]);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    if (!res.body) return;
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let content = '';
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      content += decoder.decode(value);
      setMessages((msgs) => {
        const updated = [...msgs];
        updated[updated.length - 1] = { role: 'assistant', content };
        return updated;
      });
    }
    setLoading(false);
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const recommendedQuestions = [
    "Who are you?",
    "Who developed you?",
    "What services do you offer?",
    "Tell me about the founders.",
    "How can I contact Weblancer?",
    "What makes Weblancer unique?",
    "Show me your packages."
  ];

  return (
    <div>
      <button
        onClick={() => { setOpen((o) => !o); if (!hasOpened) setHasOpened(true); }}
        className="fixed bottom-6 right-6 z-[1000] bg-[#111] border-2 border-[#B5FF6D] shadow-xl rounded-full w-16 h-16 flex items-center justify-center text-3xl transition-all duration-300 animate-pulse-glow hover:scale-110 focus:outline-none"
        aria-label="Open chatbot"
        style={{ boxShadow: '0 0 32px 4px #B5FF6D44, 0 2px 8px rgba(0,0,0,0.15)' }}
      >
        <Image src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg" alt="Weblancer AI" width={36} height={36} className="rounded-full border-2 border-[#B5FF6D] bg-[#B5FF6D]" />
      </button>
      {open && (
        <div
          className="fixed bottom-28 right-6 w-[370px] max-w-[95vw] max-h-[70vh] bg-black border-2 border-[#B5FF6D] rounded-2xl shadow-2xl flex flex-col z-[1001] animate-fade-in"
          style={{ boxShadow: '0 0 48px 8px #B5FF6D33, 0 4px 24px rgba(0,0,0,0.18)' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[#222] bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#222] rounded-t-2xl">
            <Image src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg" alt="Weblancer AI" width={32} height={32} className="rounded-full border border-[#B5FF6D] animate-float" />
            <span className="font-bold text-lg text-[#B5FF6D] tracking-wide">Weblancer AI</span>
            <span className="ml-auto text-xs text-[#8A9A5B] font-semibold">Premium Assistant</span>
          </div>
          {/* Recommended Questions */}
          <div className="flex flex-wrap gap-2 px-4 py-2 border-b border-[#222] bg-[#101010]">
            {recommendedQuestions.map((q, i) => (
              <button
                key={i}
                type="button"
                className="px-3 py-1 rounded-lg bg-[#181818] border border-[#8A9A5B] text-[#8A9A5B] text-xs font-medium hover:bg-[#B5FF6D] hover:text-black transition-all duration-200 shadow-sm"
                onClick={() => setInput(q)}
              >
                {q}
              </button>
            ))}
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 bg-black scrollbar-thin scrollbar-thumb-[#222] scrollbar-track-transparent">
            {/* Welcome Message */}
            {hasOpened && messages.length === 0 && (
              <div className="mb-3 flex justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm max-w-[80%] shadow-md bg-[#181818] text-[#B5FF6D] border border-[#222] animate-fade-in">
                  <Image src='https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg' alt='Weblancer AI' width={22} height={22} className="rounded-full border border-[#B5FF6D] animate-float" />
                  Hi! I’m <b>Weblancer AI</b>. How can I help you today?
                </span>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <Image src='https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg' alt='Weblancer AI' width={22} height={22} className="rounded-full border border-[#B5FF6D] mr-2 animate-float" />
                )}
                <span
                  className={`inline-block px-4 py-2 rounded-xl text-sm max-w-[80%] shadow-md transition-all duration-200 ${
                    msg.role === 'user'
                      ? 'bg-[#B5FF6D] text-black font-semibold border border-[#B5FF6D]'
                      : 'bg-[#181818] text-[#B5FF6D] border border-[#222]'
                  }`}
                  style={{ wordBreak: 'break-word', fontFamily: 'inherit' }}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {/* Typing Indicator */}
            {loading && (
              <div className="mb-3 flex justify-start items-center gap-2">
                <Image src='https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg' alt='Weblancer AI' width={22} height={22} className="rounded-full border border-[#B5FF6D] animate-float" />
                <span className="inline-block px-3 py-2 rounded-xl bg-[#181818] border border-[#222]">
                  <span className="inline-block w-2 h-2 bg-[#B5FF6D] rounded-full animate-bounce mr-1" style={{ animationDelay: '0s' }}></span>
                  <span className="inline-block w-2 h-2 bg-[#B5FF6D] rounded-full animate-bounce mr-1" style={{ animationDelay: '0.2s' }}></span>
                  <span className="inline-block w-2 h-2 bg-[#B5FF6D] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!loading) sendMessage();
            }}
            className="flex items-center gap-2 border-t border-[#222] bg-[#111] px-4 py-3 rounded-b-2xl"
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-white placeholder-[#8A9A5B] border-none outline-none px-2 py-2 text-base font-medium"
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#B5FF6D] text-black font-bold px-5 py-2 rounded-xl shadow-md transition-all duration-200 hover:bg-[#8A9A5B] hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 