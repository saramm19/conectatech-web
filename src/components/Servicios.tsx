interface Servicio {
  title: string;
  description: string;
  iconUrl: string;
}

const servicios: Servicio[] = [
  {
    title: "Consultoría en Transformación Digital",
    description:
      "Acompañamos a las instituciones públicas en el diagnóstico, planificación e implementación de su transformación digital, alineada con la Ley 21.180.",
    iconUrl: "/images/consultant.svg",
  },
  {
    title: "Gestión del Cambio y Capacitaciones",
    description:
      "Diseñamos programas de formación y gestión del cambio para que los equipos públicos adopten nuevas herramientas y metodologías digitales.",
    iconUrl: "/images/training.svg",
  },
  {
    title: "Implementación de Plataformas Transversales",
    description:
      "Brindamos soporte en la integración de sistemas y herramientas del Estado, como Firma Electrónica, Clave Única y Sistema de Notificaciones.",
    iconUrl: "/images/platform.svg",
  },
  {
    title: "Soporte Técnico y Acompañamiento",
    description:
      "Proporcionamos asistencia técnica continua para garantizar el correcto funcionamiento de las soluciones implementadas y el éxito del proceso digital.",
    iconUrl: "/images/technical-support.svg",
  },
];











export const MoreInformation = () => {
  return (
    <section className="w-full bg-gray-800 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Imagen ilustrativa */}
        <div className="flex justify-center mb-12">
          <img
            className="w-[400px] md:w-[480px]"
            src="/images/illustration-stay-productive.png"
            alt="Ilustración Conectatech"
          />
        </div>

        {/* Título principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Servicios de Conectatech
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-12 text-base leading-relaxed">
          En Conectatech impulsamos la modernización del Estado mediante
          soluciones tecnológicas, acompañamiento estratégico y formación
          especializada para equipos públicos.
        </p>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicios.map(({ title, description, iconUrl }: Servicio) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <div className="bg-blue-100 p-4 rounded-full shadow-sm mb-4">
                <img src={iconUrl} alt={title} className="w-14 h-14" />
              </div>
              <h3 className="font-bold text-blue-900 text-lg mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
