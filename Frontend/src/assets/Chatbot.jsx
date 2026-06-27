import React, { useState } from "react";
import { Bot, Send, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userName, setUserName] = useState("");
  const [sessionId] = useState(() => crypto.randomUUID());

  const [messages, setMessages] = useState([
    {
      text: "Hi 👋 I'm Dhruvil's AI Assistant. What's your name?",
      sender: "bot",
    },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        text: userMessage,
        sender: "user",
      },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      let payload = {
        session_id: sessionId,
        question: userMessage,
      };

      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.type === "welcome") {
        setUserName(userMessage);
      }

      setMessages((prev) => [
        ...prev,
        {
          text:
            data.message ||
            data.answer ||
            "Sorry, I couldn't understand.",
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          text:
            "⚠️ Unable to connect to the chatbot server.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    
    <>
    
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#0095ff] text-white shadow-2xl transition hover:scale-110"
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[99] flex flex-col overflow-hidden rounded-3xl border border-white/30 bg-white/70 shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        } w-[90vw] max-w-sm h-[70vh] max-h-[550px]`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 bg-[#D89C95] px-5 py-4 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <Bot
              className="text-[#D89C95]"
              size={24}
            />
          </div>

          <div>
            <h3 className="font-semibold">
              Dhruvil AI Assistant
            </h3>

            <p className="text-xs text-white/80">
              Usually replies instantly
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto bg-[#FDF7F6] p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow ${
                  msg.sender === "user"
                    ? "bg-[#D89C95] text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Loader */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 shadow">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={
                !userName
                  ? "Enter your name..."
                  : "Type your message..."
              }
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              className="flex-1 rounded-full border border-gray-300 px-4 py-3 outline-none focus:border-[#D89C95]"
            />

            <button
              onClick={handleSend}
              disabled={isLoading}
              className="rounded-full bg-[#D89C95] p-3 text-white transition hover:bg-[#C98780] disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;