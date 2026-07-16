import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'bot',
  content: "Hey! I'm Krishnan's AI assistant. Ask me about his skills, projects, or anything else. You can also use me to send a message directly!",
};

const QUICK_ACTIONS = [
  { label: 'Projects', query: 'Tell me about Krishnan\'s projects' },
  { label: 'Skills', query: 'What skills does Krishnan have?' },
  { label: 'Contact Me', query: 'I want to contact Krishnan' },
];

const ContactFlow = ({ step, data, onChange, onConfirm, onCancel }) => {
  if (step === 'name') {
    return (
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-xs font-semibold text-[#D4D4D4]">Enter your name:</p>
        <div className="flex gap-2">
          <input
            autoFocus
            type="text"
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
            placeholder="Your name"
            className="flex-1 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all duration-300 font-medium"
            onKeyDown={(e) => e.key === 'Enter' && data.name.trim() && onChange({ ...data, _next: 'email' })}
          />
          <button
            onClick={() => data.name.trim() && onChange({ ...data, _next: 'email' })}
            className="px-4 py-3 rounded-xl bg-white text-[#121212] text-xs font-bold hover:bg-[#D4D4D4] transition-all duration-300"
          >
            Next
          </button>
        </div>
        <button onClick={onCancel} className="text-[10px] text-white/30 hover:text-white/60 transition-colors mt-1 cursor-pointer text-left">cancel</button>
      </div>
    );
  }

  if (step === 'email') {
    return (
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-xs font-semibold text-[#D4D4D4]">Enter your email:</p>
        <div className="flex gap-2">
          <input
            autoFocus
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all duration-300 font-medium"
            onKeyDown={(e) => e.key === 'Enter' && data.email.trim() && onChange({ ...data, _next: 'message' })}
          />
          <button
            onClick={() => data.email.trim() && onChange({ ...data, _next: 'message' })}
            className="px-4 py-3 rounded-xl bg-white text-[#121212] text-xs font-bold hover:bg-[#D4D4D4] transition-all duration-300"
          >
            Next
          </button>
        </div>
        <button onClick={onCancel} className="text-[10px] text-white/30 hover:text-white/60 transition-colors mt-1 cursor-pointer text-left">cancel</button>
      </div>
    );
  }

  if (step === 'message') {
    return (
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-xs font-semibold text-[#D4D4D4]">Your message:</p>
        <textarea
          autoFocus
          value={data.message}
          onChange={(e) => onChange({ ...data, message: e.target.value })}
          placeholder="What would you like to say?"
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all duration-300 resize-none font-medium"
        />
        <button
          onClick={() => data.message.trim() && onChange({ ...data, _next: 'confirm' })}
          disabled={!data.message.trim()}
          className="w-full px-4 py-3 rounded-xl bg-white text-[#121212] text-xs font-bold hover:bg-[#D4D4D4] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Review & Send
        </button>
        <button onClick={onCancel} className="text-[10px] text-white/30 hover:text-white/60 transition-colors mt-1 cursor-pointer text-left">cancel</button>
      </div>
    );
  }

  if (step === 'confirm') {
    return (
      <div className="flex flex-col gap-3 mt-3">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs space-y-2">
          <p className="text-white/40 font-bold uppercase tracking-[0.15em] text-[10px] mb-3">Review your message</p>
          <div className="flex items-start gap-2">
            <span className="text-white/30 shrink-0 w-12">Name</span>
            <span className="text-white font-medium break-words min-w-0">{data.name}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white/30 shrink-0 w-12">Email</span>
            <span className="text-white font-medium break-words min-w-0">{data.email}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white/30 shrink-0 w-12">Message</span>
            <span className="text-white font-medium break-words min-w-0 overflow-wrap-anywhere">{data.message}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 rounded-xl bg-white text-[#121212] text-xs font-bold hover:bg-[#D4D4D4] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message
          </button>
          <button
            onClick={() => onChange({ ...data, _back: 'message' })}
            className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white text-xs font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Edit
          </button>
        </div>
        <button onClick={onCancel} className="text-[10px] text-white/30 hover:text-white/60 transition-colors mt-1 cursor-pointer text-left">cancel</button>
      </div>
    );
  }

  return null;
};

const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 px-5 py-3.5">
    <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0ms' }} />
    <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '150ms' }} />
    <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
);

const BotAvatar = () => (
  <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/[0.06] flex items-center justify-center shrink-0">
    <svg className="w-3.5 h-3.5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a9 9 0 100-18 9 9 0 000 18zm0 0v-2.25a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25V21" />
    </svg>
  </div>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [contactFlow, setContactFlow] = useState({ active: false, step: 'name', data: { name: '', email: '', message: '' } });
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const msgIdCounter = useRef(0);
  const hasOpenedRef = useRef(false);

  const nextId = () => {
    msgIdCounter.current += 1;
    return msgIdCounter.current;
  };

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !hasOpenedRef.current) {
      hasOpenedRef.current = true;
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const sendToAI = async (conversationMessages) => {
    setIsTyping(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationMessages.map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.content }))
        }),
      });

      if (!res.ok) throw new Error('Failed');

      const data = await res.json();
      const reply = data.reply || "Sorry, I couldn't process that. Please try again.";

      const hasContactIntent = reply.includes('[CONTACT_INTENT]');
      const cleanReply = reply.replace(/\[CONTACT_INTENT\]/g, '').trim();

      setMessages(prev => [...prev, { id: nextId(), role: 'bot', content: cleanReply }]);

      if (hasContactIntent) {
        setTimeout(() => {
          setContactFlow({ active: true, step: 'name', data: { name: '', email: '', message: '' } });
          setMessages(prev => [...prev, {
            id: nextId(),
            role: 'bot',
            content: "I'd love to help you connect with Krishnan! Let me collect a few details.",
          }]);
        }, 500);
      }
    } catch {
      setMessages(prev => [...prev, {
        id: nextId(),
        role: 'bot',
        content: "Sorry, something went wrong. Please try again or email Krishnan directly at sskrishnan03@gmail.com"
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;

    const userMsg = { id: nextId(), role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    sendToAI(newMessages);
  };

  const handleQuickAction = (query) => {
    setInputValue('');
    const userMsg = { id: nextId(), role: 'user', content: query };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    sendToAI(newMessages);
  };

  const handleContactChange = (newData) => {
    if (newData._next) {
      const stepMap = { name: 'email', email: 'message', message: 'confirm' };
      setContactFlow(prev => ({ ...prev, step: stepMap[prev.step], data: { ...newData, _next: undefined } }));
    } else if (newData._back) {
      setContactFlow(prev => ({ ...prev, step: newData._back, data: { ...newData, _back: undefined } }));
    } else {
      setContactFlow(prev => ({ ...prev, data: newData }));
    }
  };

  const handleContactConfirm = async () => {
    const { data } = contactFlow;
    setContactFlow({ active: false, step: 'name', data: { name: '', email: '', message: '' } });

    setMessages(prev => [...prev, {
      id: nextId(),
      role: 'user',
      content: `Sending message as ${data.name} (${data.email}): "${data.message}"`
    }]);

    setIsTyping(true);
    try {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.name.split(' ')[0] || data.name,
          lastName: data.name.split(' ').slice(1).join(' ') || '.',
          email: data.email,
          message: data.message,
          permission: true
        }),
      });

      if (!res.ok) throw new Error('Failed');

      setMessages(prev => [...prev, {
        id: nextId(),
        role: 'bot',
        content: "Message sent successfully! Krishnan will get back to you soon. Is there anything else you'd like to know?"
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: nextId(),
        role: 'bot',
        content: "Failed to send message. Please try emailing Krishnan directly at sskrishnan03@gmail.com"
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleContactCancel = () => {
    setContactFlow({ active: false, step: 'name', data: { name: '', email: '', message: '' } });
    setMessages(prev => [...prev, {
      id: nextId(),
      role: 'bot',
      content: "No worries! Feel free to ask me anything else."
    }]);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0.12 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[80vh] rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.8)] flex flex-col bg-[#121212]"
          >
            <div className="relative px-6 py-5 flex items-center justify-between shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-[#1E1E1E]" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.015)_25%,rgba(255,255,255,.015)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.015)_75%,rgba(255,255,255,.015)_76%,transparent_77%,transparent)] bg-[length:40px_40px] pointer-events-none" />

              <div className="relative flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a9 9 0 100-18 9 9 0 000 18zm0 0v-2.25a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25V21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white tracking-tight leading-tight">Krishnan's AI</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-[10px] text-white/40 font-medium">Online</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => { setMessages([WELCOME_MESSAGE]); setContactFlow({ active: false, step: 'name', data: { name: '', email: '', message: '' } }); setIsTyping(false); }}
                className="relative w-8 h-8 rounded-xl flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
                title="New chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="relative w-8 h-8 rounded-xl flex items-center justify-center text-white/30 hover:text-white hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'bot' && <BotAvatar />}
                  <div className={`max-w-[80%] min-w-0 ${msg.role === 'user' ? '' : ''}`}>
                    {msg.role === 'bot' ? (
                      <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-[#1E1E1E] border border-white/[0.06] break-words overflow-hidden">
                        <p className="text-[13px] text-[#D4D4D4] leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">{msg.content}</p>
                      </div>
                    ) : (
                      <div className="px-4 py-3 rounded-2xl rounded-tr-md bg-white text-[#121212] break-words overflow-hidden">
                        <p className="text-[13px] font-medium leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">{msg.content}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {contactFlow.active && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5 justify-start"
                >
                  <BotAvatar />
                  <div className="max-w-[80%]">
                    <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-[#1E1E1E] border border-white/[0.06]">
                      <ContactFlow
                        step={contactFlow.step}
                        data={contactFlow.data}
                        onChange={handleContactChange}
                        onConfirm={handleContactConfirm}
                        onCancel={handleContactCancel}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5 justify-start"
                >
                  <BotAvatar />
                  <div className="px-1 py-1 rounded-2xl rounded-tl-md bg-[#1E1E1E] border border-white/[0.06]">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 2 && !contactFlow.active && (
              <div className="px-5 pb-3 flex gap-2 flex-wrap shrink-0">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.query)}
                    className="px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-white/[0.04] border border-white/[0.08] text-white/60 hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            <div className="px-5 py-4 shrink-0 border-t border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder={contactFlow.active ? "Type 'cancel' to abort..." : "Type a message..."}
                  disabled={isTyping}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all duration-300 font-medium disabled:opacity-40"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-11 h-11 rounded-xl bg-white text-[#121212] flex items-center justify-center hover:bg-[#D4D4D4] transition-all duration-300 disabled:opacity-15 disabled:cursor-not-allowed cursor-pointer shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-2xl bg-[#1E1E1E] border border-white/[0.12] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.06)] hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        whileTap={{ scale: 0.92 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.span
            className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1E1E1E]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </>
  );
};

export default ChatBot;
