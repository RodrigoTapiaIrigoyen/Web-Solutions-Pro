import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transformamos Ideas en</span>
            <span className="block text-blue-400">Soluciones Digitales</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Expertos en desarrollo web, cloud computing y soluciones empresariales personalizadas.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a href="#contact" className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-400 transition duration-200">
              Comenzar Proyecto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-blue-100 border border-blue-100 hover:bg-white hover:text-blue-600 transition duration-200">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use href="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#wave" x="48" y="7" fill="#ffffff" />
          </g>
        </svg>
      </div>
    </div>
  );
}