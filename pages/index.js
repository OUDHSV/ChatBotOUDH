import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "¡Hola! Soy tu asistente 😊, pregúntame algo." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Agregar mensaje del usuario
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    // Respuestas rápidas (chatbot básico con reglas)
    let response = "Lo siento, no entendí tu pregunta 🤔";

    if (/hola/i.test(input)) response = "¡Hola! 👋 ¿Cómo estás?";
    if (/adios|chao/i.test(input)) response = "¡Hasta luego! 👋";
    if (/quien eres/i.test(input)) response = "Soy un chatbot de prueba hecho con Next.js 😎";
    if (/gracias/i.test(input)) response = "¡De nada! 🙌";

    // Agregar respuesta del bot
    setMessages([...newMessages, { role: "bot", text: response }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* HEADER ELEGANTE */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 flex items-center justify-center space-x-3 shadow-md">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-10 rounded-full border-2 border-white shadow"
        />
        <h1 className="text-2xl font-semibold">Chatbot OUDH</h1>
      </header>

      {/* ÁREA DEL CHAT */}
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "bot" && (
                <img
                  src="/logo.png"
                  alt="Bot"
                  className="w-8 h-8 rounded-full mr-2 border"
                />
              )}
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* INPUT DEL CHAT */}
      <footer className="p-4 bg-white border-t flex">
        <input
          className="flex-1 border rounded-lg px-3 py-2 mr-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          onClick={handleSend}
        >
          Enviar
        </button>
      </footer>
    </div>
  );
}
