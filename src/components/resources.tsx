import { Button } from "./button";

interface Recurso {
    title: string;
    description: string;
    fileUrl: string;
    iconUrl: string;
}

const recursos: Recurso[] = [
    {
        title: "Guía de Implementación de la Ley 21.180",
        description:
            "Documento con los pasos esenciales para aplicar la Ley de Transformación Digital del Estado en tu institución.",
        fileUrl: "/docs/guia-implementacion.pdf",
        iconUrl: "/images/guide.svg",
    },
    {
        title: "Plantilla de Diagnóstico Digital",
        description:
            "Herramienta editable para evaluar el nivel de madurez digital de una organización pública.",
        fileUrl: "/docs/plantilla-diagnostico.xlsx",
        iconUrl: "/images/template.svg",
    },
    {
        title: "Manual de Buenas Prácticas",
        description:
            "Recomendaciones y estándares para la gestión digital y la interoperabilidad entre servicios públicos.",
        fileUrl: "/docs/manual-buenas-practicas.pdf",
        iconUrl: "/images/manual.svg",
    },
];

export const Resources = () => {
    return (
        <section className="w-full bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Encabezado */}
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                    Recursos para la Transformación Digital
                </h2>

                <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-base leading-relaxed">
                    Descarga guías, manuales y plantillas diseñadas para apoyar a las
                    instituciones públicas en la implementación de la Ley 21.180 y la
                    modernización del Estado.
                </p>

                {/* Tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {recursos.map(({ title, description, fileUrl, iconUrl }: Recurso) => (
                        <div
                            key={title}
                            className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300"
                        >
                            <img
                                src={iconUrl}
                                alt={title}
                                className="w-16 h-16 mb-4 bg-blue-50 p-3 rounded-full shadow-sm"
                            />
                            <h3 className="font-bold text-blue-900 text-lg mb-3">{title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {description}
                            </p>
                            <a href={fileUrl} download>
                                <Button text="Descargar Recurso" styles="w-[200px]" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center  gap-10 mt-10">
                <div className=" bg-white rounded-3xl shadow-md p-9  mx-auto">
                    <h2 className="text-3xl text-center md:text-3xl font-bold text-blue-900 mb-6">
                        Casos de Éxito
                    </h2>
                    <p className="text-gray-700 max-w-3xl mb-10">
                        Conoce cómo distintas instituciones públicas han logrado avanzar en
                        su proceso de Transformación Digital, mejorando su gestión interna y
                        la atención a la ciudadanía con el apoyo de Conectatech.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            text="Ver Casos de Éxito"
                            styles="w-[220px] bg-blue-700 text-white hover:bg-blue-800"
                        />
                    </div>
                </div>

                <div className=" bg-white rounded-3xl shadow-md p-12 max-w-2x1 mx-auto">
                    <h2 className="text-sm text-center md:text-3xl font-bold text-blue-900 mb-6">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-10">
                        ¿Tienes dudas sobre la Ley 21.180 o sobre nuestros servicios? Aquí
                        encontrarás respuestas a las preguntas más comunes sobre la
                        Transformación Digital del Estado y el acompañamiento que ofrecemos.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            text="Preguntas Frecuentes"
                            styles="w-[260px] bg-blue-700 text-white hover:bg-blue-800"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};



