import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Bot, User, RefreshCw, Copy, Check } from 'lucide-react';
import { AiChatMessage } from '../types';

interface AskAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  onOpenPlanner: (destinationName?: string) => void;
}

export const AskAiModal: React.FC<AskAiModalProps> = ({
  isOpen,
  onClose,
  initialPrompt,
  onOpenPlanner,
}) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<AiChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: `Namaste. I am your YatraAI Spiritual Concierge.

System capabilities initialized:
• Sacred Timings & Aarti Muhurats (Mangala, Sandhya, Shringar)
• Senior-Friendly & Accessibility Protocols (Wheelchairs, step counts)
• Sanctum Protocols & Attire Standards (Dhoti/Saree rules, cloakrooms)
• Algorithmic Pilgrimage Route Synthesis`,
      timestamp: 'Just now',
      suggestions: [
        'Suggest senior-friendly temples in Varanasi',
        'What are the timings and rules for Kedarnath?',
        'How to perform the 22 wells bath in Rameshwaram?',
        'Best time to attend Kashi Vishwanath Sugam Darshan'
      ]
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt) {
      sendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: AiChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await response.json();
      const assistantMessage: AiChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Namaste. May your pilgrimage be blessed with profound stillness and spiritual fulfillment.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          'Generate a 3-day itinerary for this yatra',
          'What are the dress code guidelines?',
          'Suggest nearby sacred ashrams'
        ]
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Ask AI error:', err);
      const fallbackMessage: AiChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: `Namaste. For optimal pilgrimage experience:
• Morning Darshan: Brahma Muhurta (4:30 AM - 6:30 AM) offers the most serene spiritual atmosphere.
• Dress Code: Traditional modest attire (Dhoti/Kurta or Saree/Salwar).
• Pacing: Allow 2 to 3 hours per major sanctum to fully absorb the divine vibration.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center items-center p-2 sm:p-4">
      <div className="relative w-full max-w-3xl bg-[#0E0E0E] text-white border border-white/20 flex flex-col h-[90vh] sm:h-[82vh] overflow-hidden">
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/40"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/40"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/40"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/40"></div>

        {/* Header */}
        <div className="bg-[#0A0A0A] border-b border-white/10 px-6 py-4 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/30 bg-[#0E0E0E] flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base font-light text-white">
                  YatraAI Concierge
                </h3>
                <span className="text-[9px] px-1.5 py-0.2 border border-white/20 text-white/70 font-mono">
                  [ONLINE]
                </span>
              </div>
              <p className="text-[10px] text-white/50 font-mono">
                Vedic Lore & Sacred Logistics Engine
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-white/20 hover:border-white text-white/60 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6 bg-[#0E0E0E]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-7 h-7 border flex items-center justify-center shrink-0 text-xs font-mono ${
                  msg.sender === 'user'
                    ? 'bg-white text-black border-white'
                    : 'bg-black text-white border-white/40'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              {/* Message Bubble */}
              <div className="space-y-2 max-w-[85%] sm:max-w-[75%]">
                <div
                  className={`p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-white text-black font-mono font-medium border border-white'
                      : 'bg-[#0A0A0A] border border-white/10 text-white/90 space-y-2 font-light'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                <div className="flex items-center justify-between px-1 text-[9px] font-mono text-white/40">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'assistant' && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="hover:text-white flex items-center gap-1"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-white" />
                          <span className="text-white">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Suggestions */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.suggestions.map((sug, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => sendMessage(sug)}
                        className="px-2.5 py-1 bg-[#0A0A0A] hover:bg-white hover:text-black text-white/70 text-[10px] font-mono border border-white/20 hover:border-white transition-all text-left"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 border border-white/40 bg-black flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
              </div>
              <div className="bg-[#0A0A0A] border border-white/10 p-3.5 flex items-center gap-2 text-xs font-mono text-white/50">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                <span>Consulting sacred lore and pilgrimage matrix...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#0A0A0A] border-t border-white/10 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputText);
            }}
            className="flex items-center gap-2"
          >
            <input
              id="input-ask-ai-modal"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Query sacred protocols, timings, transit..."
              className="flex-1 px-4 py-3 bg-[#0E0E0E] border border-white/20 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-white font-mono"
            />

            <button
              id="btn-ask-ai-submit"
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-3 bg-white text-black font-mono font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

