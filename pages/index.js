import Image from "next/image";

export default function ChatbotUI() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Image src="/logo.png" alt="Logo OUDH" width={80} height={80} className="mb-4" />

      <h1 className="text-3xl font-bold text-gray-800 mb-6">💬 Asistente OUDH</h1>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg flex flex-col h-[70vh]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="self-start bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-[80%]">
            ¡Hola! Soy tu asistente. Pregúntame lo que quieras sobre los datos 📊
          </div>
          <div className="self-end bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-[80%]">
            ¿Qué información hay sobre violaciones a derechos humanos en 2024?
          </div>
          <div className="self-start bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-[80%]">
            En 2024 se registraron 120 casos documentados. La mayoría relacionados con libertad de expresión.
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex gap-2">
          <input
            type="text"
            placeholder="Escribe tu pregunta..."
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
