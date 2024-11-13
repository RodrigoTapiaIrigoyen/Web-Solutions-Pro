export default function Testimonials() {
  const testimonials = [
    {
      content: "Web Solution Pro transformó completamente nuestra presencia digital. Su equipo es excepcional.",
      author: "María González",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "La mejor decisión que tomamos fue trabajar con ellos. Profesionales y resultados increíbles.",
      author: "Carlos Ruiz",
      role: "Director de Operaciones, InnovaTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "Su experiencia en cloud computing nos ayudó a escalar nuestro negocio de manera eficiente.",
      author: "Ana Martínez",
      role: "CTO, DataFlow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Historias de éxito de quienes confiaron en nosotros
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 p-6">
                <blockquote className="mt-6 text-gray-700">
                  <p className="text-lg font-medium">"{testimonial.content}"</p>
                </blockquote>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}