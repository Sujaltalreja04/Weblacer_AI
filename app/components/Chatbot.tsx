'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Handle Enter to send, Shift+Enter for newline
  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!loading) sendMessage();
    }
  }

  const sendMessage = async () => {
    setError('');
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput('');
    setLoading(true);
    let aiMessage = { role: 'assistant', content: '' };
    setMessages((msgs) => [...msgs, aiMessage]);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      if (!res.body) throw new Error('No response from server');
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
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
      setMessages((msgs) => msgs.slice(0, -1));
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

  // Only show recommended questions if no user message has been sent yet
  const hasUserMessage = messages.some(m => m.role === 'user');

  return (
    <div>
      {/* Chatbot Button */}
      <button
        onClick={() => { setOpen((o) => !o); if (!hasOpened) setHasOpened(true); }}
        className="fixed bottom-6 right-6 z-[1000] bg-[#111]/80 border-2 border-[#B5FF6D] shadow-2xl rounded-full w-16 h-16 flex items-center justify-center text-3xl transition-all duration-300 animate-pulse-glow hover:scale-110 focus:outline-none backdrop-blur-md"
        aria-label="Open chatbot"
        style={{ boxShadow: '0 0 32px 4px #B5FF6D44, 0 2px 8px rgba(0,0,0,0.15)' }}
      >
        <Image src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg" alt="Weblancer AI" width={36} height={36} className="rounded-full border-2 border-[#B5FF6D] bg-[#B5FF6D]" />
        <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#B5FF6D] border-2 border-black animate-pulse" aria-label="Online" />
      </button>
      {/* Chatbot Window */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-24 right-4 w-[95vw] max-w-[400px] max-h-[80vh] bg-gradient-to-br from-black/80 via-[#101510]/90 to-black/80 border-2 border-[#B5FF6D] rounded-3xl shadow-2xl flex flex-col z-[1001] animate-fade-in backdrop-blur-xl"
          style={{ boxShadow: '0 0 48px 8px #B5FF6D33, 0 4px 24px rgba(0,0,0,0.18)' }}
          aria-modal="true"
          role="dialog"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[#222] bg-gradient-to-r from-[#111]/80 via-[#1a1a1a]/80 to-[#222]/80 rounded-t-3xl">
            <Image src="https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg" alt="Weblancer AI" width={32} height={32} className="rounded-full border border-[#B5FF6D] animate-float" />
            <span className="font-bold text-lg text-[#B5FF6D] tracking-wide">Weblancer AI</span>
            <span className="ml-auto text-xs text-[#8A9A5B] font-semibold">Premium Assistant</span>
          </div>
          {/* Recommended Questions */}
          {!hasUserMessage && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#222] scrollbar-track-transparent"
            >
              <div className="flex flex-wrap md:flex-nowrap gap-2 px-4 py-2 border-b border-[#222] bg-[#101010]/80 min-w-full">
                {recommendedQuestions.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    className="px-3 py-1 rounded-lg bg-transparent border border-[#B5FF6D] text-[#B5FF6D] text-xs font-medium hover:bg-[#B5FF6D] hover:text-black transition-all duration-200 shadow-sm whitespace-nowrap"
                    onClick={() => setInput(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 bg-black/60 scrollbar-thin scrollbar-thumb-[#222] scrollbar-track-transparent">
            {/* Welcome Message */}
            {hasOpened && messages.length === 0 && (
              <div className="mb-3 flex justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm max-w-[80%] shadow-md bg-[#181818]/80 text-[#B5FF6D] border border-[#222] animate-fade-in">
                  <Image src='https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg' alt='Weblancer AI' width={22} height={22} className="rounded-full border border-[#B5FF6D] animate-float" />
                  Hi! I’m <b>Weblancer AI</b>. How can I help you today?
                </span>
              </div>
            )}
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <Image src='https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg' alt='Weblancer AI' width={22} height={22} className="rounded-full border border-[#B5FF6D] mr-2 animate-float" />
                )}
                <span
                  className={`inline-block px-5 py-3 rounded-xl text-sm max-w-[80%] shadow-lg transition-all duration-200 ${
                    msg.role === 'user'
                      ? 'bg-[#B5FF6D] text-black font-semibold border border-[#B5FF6D]'
                      : 'bg-gradient-to-br from-[#101510] to-[#181818] text-[#B5FF6D] border border-[#B5FF6D] shadow-2xl'
                  } ${msg.role === 'assistant' ? 'card-reply' : ''}`}
                  style={{ wordBreak: 'break-word', fontFamily: 'inherit' }}
                >
                  {msg.content}
                </span>
              </motion.div>
            ))}
            {/* Typing Indicator */}
            {loading && (
              <div className="mb-3 flex justify-start items-center gap-2">
                <Image src='https://i.postimg.cc/DwwNNDsr/Whats-App-Image-2025-06-26-at-17-33-59-a813e2b2.jpg' alt='Weblancer AI' width={22} height={22} className="rounded-full border border-[#B5FF6D] animate-float" />
                <span className="inline-block px-3 py-2 rounded-xl bg-[#181818]/80 border border-[#222] flex items-center gap-1">
                  <span className="inline-block w-2 h-2 bg-[#B5FF6D] rounded-full animate-bounce mr-1" style={{ animationDelay: '0s' }}></span>
                  <span className="inline-block w-2 h-2 bg-[#B5FF6D] rounded-full animate-bounce mr-1" style={{ animationDelay: '0.2s' }}></span>
                  <span className="inline-block w-2 h-2 bg-[#B5FF6D] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  <span className="ml-2 text-xs text-[#B5FF6D] animate-pulse">Typing...</span>
                </span>
              </div>
            )}
            {/* Error Message */}
            {error && (
              <div className="mb-3 flex justify-center">
                <span className="inline-block px-4 py-2 rounded-xl text-sm bg-red-600/80 text-white border border-red-400 animate-fade-in shadow-lg">
                  {error}
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
            className="flex items-center gap-2 border-t border-[#222] bg-gradient-to-r from-[#111]/90 to-[#181818]/90 px-4 py-3 rounded-b-3xl shadow-inner"
          >
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-white placeholder-[#8A9A5B] border-none outline-none px-2 py-2 text-base font-medium resize-none min-h-[36px] max-h-[90px]"
              disabled={loading}
              rows={1}
              aria-label="Type your message"
            />
            <button
              type="submit"
              className="bg-[#B5FF6D] text-black font-bold px-4 py-2 rounded-xl shadow-md transition-all duration-200 hover:bg-[#8A9A5B] hover:text-white disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-1"
              disabled={loading}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l15.364-8.192a.75.75 0 011.06.853l-2.4 10.8a.75.75 0 01-.853.853l-10.8-2.4a.75.75 0 01.853-1.06L21.75 12" />
              </svg>
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot; 