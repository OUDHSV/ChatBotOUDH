"use client";
import { useState } from "react";
import Image from "next/image";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 ¡Hola! Soy el asistente OUDH, ¿listo para empezar?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "🤖 Gracias por tu mensaje, pronto responderé con más datos." },
      ]);
    }, 800);
    setInput("");
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-br from-[#0A1F44] via-purple-700 to-orange-500">
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-8">
        <Image
          src="/logo-oudh.jpg"
          alt="OUDH Logo"
          width={180}
          height={180}
          className="rounded-full shadow-lg"
        />
        <h1 className="text-white text-3xl font-bold mt-4 animate-pulse text-center">
          Tu asistente en Derechos Humanos 💬✨
        </h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-white/90 rounded-t-3xl shadow-inner">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-5 py-3 rounded-2xl max-w-[75%] shadow-md ${
              msg.role === "user"
                ? "ml-auto bg-orange-500 text-white animate-bounce"
                : "bg-[#E6ECFF] text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white/80 flex gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          onClick={sendMessage}
          className="bg-orange-500 text-white px-5 py-3 rounded-full hover:bg-orange-600 transition transform hover:scale-105"
        >
          🚀
        </button>
      </div>
    </div>
  );
}
