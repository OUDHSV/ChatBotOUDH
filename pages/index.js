// components/Chatbot.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "¡Hola! Soy el asistente OUDH 🤖, ¿cómo puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto h-[600px] border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#0A1F44] flex items-center justify-center p-4">
        <Image src="/oudh-logo.png" alt="OUDH Logo" width={60} height={60} />
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-white">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-xl max-w-[75%] ${
              msg.role === "user"
                ? "ml-auto bg-[#0A1F44] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 bg-gray-100 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 rounded-xl border border-gray-300 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
