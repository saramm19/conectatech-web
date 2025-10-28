interface Feature {
  title: string;
  description: string;
  iconUrl: string;

}

const features: Feature[] = [

  {
    title: "Preparación",
    description: "Diagnóstico institucional y planificación estratégica para iniciar el proceso de Transformación Digital conforme a la Ley 21.180.",
    iconUrl: "/images/clipboard1.svg"
  },
  {
    title: "Notificaciones Electrónicas",
    description: "Adopción de plataformas digitales para la comunicación oficial entre organismos públicos y la ciudadanía.",
    iconUrl: "/images/notification.svg"
  },
  {
    title: "Interoperabilidad",
    description: "Integración de sistemas y bases de datos para compartir información entre instituciones públicas de manera segura y eficiente.",
    iconUrl: "/images/data.svg"
  },
  {
    title: "Digitalización de Procesos",
    description: "Transformación completa de trámites y servicios públicos hacia entornos digitales accesibles, transparentes y eficientes.",
    iconUrl: "/images/data-entry.svg"
  },
]

export const Features = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 relative mt-20">


      <div className="max-w-3xl mx-auto bg-white text-gray-800 p-10 rounded-3xl shadow-xl text-center md:-mt-10 ">
        <h2 className="text-2xl md:text-3xl font-Raleway font-bold text-blue-900 mb-4">
          Ley 21.180
        </h2>
        <p className="text-base leading-relaxed">
          La <span className="font-semibold">Ley de Transformación Digital del Estado</span> busca que los organismos públicos en Chile modernicen su gestión mediante el uso de tecnologías digitales.
          Su propósito es mejorar la eficiencia, transparencia y accesibilidad de los servicios públicos para toda la ciudadanía.
        </p>

      </div>



      <div className="max-w-6xl mx-auto text-center mt-10">
        {/* Título de sección */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-15">
          Fases de Implementación de la Ley 21.180
        </h2>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map(({ title, description, iconUrl }: Feature) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <div className="bg-blue-50 p-4 rounded-full shadow-sm mb-4">
                <img src={iconUrl} alt={title} className="w-14 h-14" />
              </div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>



      
    </section>
  );
}
