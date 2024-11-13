import { Globe, Cloud, Database, Code, Server, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos y responsivos con las últimas tecnologías.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Soluciones en AWS y Google Cloud para optimizar tu infraestructura.',
  },
  {
    icon: Database,
    title: 'Bases de Datos',
    description: 'Diseño e implementación de bases de datos escalables y seguras.',
  },
  {
    icon: Code,
    title: 'Desarrollo de Software',
    description: 'Aplicaciones personalizadas para potenciar tu negocio.',
  },
  {
    icon: Server,
    title: 'DevOps',
    description: 'Automatización y optimización de procesos de desarrollo.',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Protección de datos y sistemas con los más altos estándares.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Soluciones integrales para todas tus necesidades tecnológicas
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
                <div className="relative bg-white p-6 rounded-xl">
                  <Icon className="h-8 w-8 text-blue-600" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-500">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}