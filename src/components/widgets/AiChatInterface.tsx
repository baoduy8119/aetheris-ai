"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, User, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "ai",
    content: "Hi! I just finished analyzing the Q3 pipeline. We have 14 high-intent leads that haven't been contacted in 48 hours. Should I draft follow-up emails for them?",
  },
];

const DEMO_RESPONSES = [
  "Done. I've drafted 14 personalized emails based on their recent website activity and saved them in your Outbox for review.",
  "Looking at the data, 'TechNova Inc' has a 85% probability of closing this week. I'll prioritize their proposal.",
  "I've generated a revenue forecast report for next month. It looks like we're on track to beat our quota by 12%. Want me to send the PDF to the team?",
  "I scheduled a follow-up meeting with John Doe for Thursday at 2 PM and blocked your calendar.",
];

export const AiChatInterface = ({ className }: { className?: string }) => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: DEMO_RESPONSES[Math.floor(Math.random() * DEMO_RESPONSES.length)],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full min-h-[250px] max-h-[400px] bg-surface-0 border border-surface-2 rounded-2xl overflow-hidden shadow-2xl spatial-shadow-md",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-surface-2 bg-surface-1/50 backdrop-blur-sm">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-cyan/10 text-accent-cyan mr-3">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-white">Aetheris Assistant</h3>
          <p className="text-xs text-white/50">Online • Ready to help</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn(
                "flex w-full",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "flex max-w-[80%] items-start gap-3 p-3 rounded-2xl",
                  msg.role === "user"
                    ? "bg-accent-cyan/10 text-white rounded-tr-sm border border-accent-cyan/20"
                    : "bg-surface-2 text-white/90 rounded-tl-sm border border-white/5"
                )}
              >
                {msg.role === "ai" && (
                  <div className="w-6 h-6 shrink-0 rounded-full bg-surface-3 flex items-center justify-center border border-white/10">
                    <Bot className="w-3.5 h-3.5 text-white/70" />
                  </div>
                )}
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-2 text-white/50 text-sm p-2"
            >
              <Loader2 className="w-4 h-4 animate-spin text-accent-cyan" />
              Aetheris is thinking...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-3 bg-surface-1 border-t border-surface-2">
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 bg-surface-2 rounded-xl p-1 border border-white/5 focus-within:border-accent-cyan/50 transition-colors"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a command or ask a question..."
            className="flex-1 bg-transparent border-none outline-none text-sm text-white px-3 py-2 placeholder:text-white/30"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-cyan text-surface-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
