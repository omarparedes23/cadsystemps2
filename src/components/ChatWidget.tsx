"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hola, soy el asistente de CAD SYSTEMPS. ¿En qué puedo ayudarte hoy?",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isStreaming) return;

    const userMessage: Message = { role: "user", content: text };
    const history = [...messages, userMessage];

    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setIsStreaming(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.body) throw new Error("No stream");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: accumulated,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "Hubo un error al procesar tu mensaje. Por favor intenta nuevamente.",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col overflow-hidden rounded-2xl border border-white/[0.08]"
            style={{
              height: "480px",
              background: "rgba(13, 15, 23, 0.97)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 0 40px -10px rgba(59,130,246,0.2), 0 20px 40px -15px rgba(0,0,0,0.8)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Bot size={18} strokeWidth={1.5} className="text-accent" />
                <span className="text-sm font-semibold text-text-primary font-display">
                  Asistente CAD SYSTEMPS
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="Cerrar chat"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed font-body ${
                      msg.role === "user"
                        ? "bg-accent text-white rounded-2xl rounded-br-sm"
                        : "bg-white/[0.06] text-text-secondary rounded-2xl rounded-bl-sm border border-white/[0.05]"
                    }`}
                  >
                    {msg.content}
                    {msg.role === "assistant" &&
                      isStreaming &&
                      i === messages.length - 1 &&
                      !msg.content && (
                        <span className="inline-flex gap-1 py-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0ms]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:150ms]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:300ms]" />
                        </span>
                      )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/[0.06] flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu pregunta..."
                disabled={isStreaming}
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent/40 transition-colors font-body disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isStreaming}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/90 hover:bg-accent text-white transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex-shrink-0"
                aria-label="Enviar mensaje"
              >
                <Send size={15} strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center"
        style={{
          boxShadow:
            "0 0 20px -5px rgba(59,130,246,0.5), 0 4px 20px rgba(0,0,0,0.4)",
        }}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} strokeWidth={1.5} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} strokeWidth={1.5} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
