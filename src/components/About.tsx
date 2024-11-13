import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestra Visión y Misión
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl">
            <Eye className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Visión</h3>
            <p className="mt-4 text-lg text-gray-600">
              Ser líderes globales en la transformación digital, impulsando la innovación y el éxito de nuestros clientes a través de soluciones tecnológicas de vanguardia.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl">
            <Target className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Misión</h3>
            <p className="mt-4 text-lg text-gray-600">
              Proporcionar soluciones tecnológicas innovadoras y personalizadas que impulsen el crecimiento y la eficiencia de nuestros clientes, mediante un servicio de excelencia y compromiso continuo.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 text-center">
              <h3 className="text-3xl font-extrabold text-white">
                Comprometidos con la Excelencia
              </h3>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
                Nuestro equipo de expertos combina creatividad, experiencia técnica y pasión por la innovación para entregar soluciones que superan expectativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}