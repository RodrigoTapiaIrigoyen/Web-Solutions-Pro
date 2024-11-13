import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué servicios de desarrollo web ofrecen?",
    answer: "Ofrecemos desarrollo de sitios web responsivos, aplicaciones web, e-commerce, y sistemas personalizados utilizando las últimas tecnologías y mejores prácticas."
  },
  {
    question: "¿Cómo manejan los proyectos en la nube?",
    answer: "Trabajamos con AWS y Google Cloud, ofreciendo servicios de migración, optimización de infraestructura, y arquitectura cloud nativa para maximizar eficiencia y escalabilidad."
  },
  {
    question: "¿Cuál es su proceso de desarrollo?",
    answer: "Seguimos una metodología ágil que incluye análisis inicial, planificación detallada, desarrollo iterativo, pruebas exhaustivas y despliegue controlado."
  },
  {
    question: "¿Ofrecen mantenimiento post-desarrollo?",
    answer: "Sí, proporcionamos servicios de mantenimiento continuo, actualizaciones de seguridad, y soporte técnico para asegurar el óptimo funcionamiento de su solución."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Respuestas a las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mt-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between w-full px-4 py-4 text-left text-gray-800 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600 bg-white rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}