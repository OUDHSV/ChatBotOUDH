import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "¡Hola! Soy tu asistente 😊, pregúntame algo." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    let response = "Lo siento, no entendí tu pregunta 🤔";
    if (/hola/i.test(input)) response = "¡Hola! 👋 ¿Cómo estás?";
    if (/adios|chao/i.test(input)) response = "¡Hasta luego! 👋";
    if (/quien eres/i.test(input)) response = "Soy un chatbot minimalista hecho con Next.js 😎";
    if (/gracias/i.test(input)) response = "¡De nada! 🙌";

    setMessages([...newMessages, { role: "bot", text: response }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* HEADER minimalista */}
      <header className="flex flex-col items-center justify-center py-6 border-b bg-white shadow-sm">
        <img
          src="/jpeg.jpg"
          alt="Logo"
          className="h-14 w-14 mb-2"
        />
        <h1 className="text-xl font-semibold text-gray-800">Chatbot OUDH</h1>
      </header>

      {/* CHAT */}
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl shadow-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* INPUT minimalista */}
      <footer className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <input
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full"
            onClick={handleSend}
          >
            ➤
          </button>
        </div>
      </footer>
    </div>
  );
}
