import { Button } from "./button"

export const Form = () => {
    return (
        <section className="w-full bg-gray-800 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* -------------------- SECCIÓN NOSOTROS -------------------- */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Sobre Nosotros
                    </h2>
                    <p className="text-white max-w-3xl mx-auto leading-relaxed mb-12">
                        En <span className="font-semibold">Conectatech</span> impulsamos la
                        transformación digital del Estado, brindando soluciones tecnológicas
                        que fortalecen la gestión pública y mejoran la atención ciudadana.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <h3 className="font-bold text-blue-900 text-xl mb-2">Nuestra Historia</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Nacimos con el propósito de acompañar a las instituciones públicas
                                en su camino hacia la digitalización, impulsando una gestión más moderna y eficiente.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <h3 className="font-bold text-blue-900 text-xl mb-2">Nuestro Equipo</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Contamos con profesionales expertos en tecnología, gestión pública y comunicación digital,
                                comprometidos con la innovación en el sector estatal.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <h3 className="font-bold text-blue-900 text-xl mb-2">Misión</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Promover la transformación digital en el sector público
                                mediante soluciones tecnológicas inclusivas, eficientes y sostenibles.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <h3 className="font-bold text-blue-900 text-xl mb-2">Visión</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ser referentes en innovación y modernización digital del Estado,
                                construyendo un gobierno más transparente y conectado con la ciudadanía.
                            </p>
                        </div>
                    </div>
                </div>

                {/* -------------------- SECCIÓN CONTACTO -------------------- */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Contáctanos
                    </h2>
                    <p className="text-white max-w-2xl mx-auto mb-10">
                        ¿Tienes dudas o quieres agendar una reunión?
                        Completa el formulario o comunícate directamente con nosotros.
                    </p>

                    {/* Formulario */}
                    <form className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-lg text-left space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Correo electrónico</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="tunombre@ejemplo.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                            <textarea
                                rows={4}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <Button text="Enviar Mensaje" styles="w-[220px]" />
                        </div>
                    </form>

                    {/* Botones de contacto directo */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        <a
                            href="https://wa.me/56999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
                        >
                            Contactar por WhatsApp
                        </a>
                        <a
                            href="mailto:contacto@conectatech.cl"
                            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                        >
                            Enviar Correo
                        </a>
                        <a
                            href="https://outlook.office365.com/bookwithme/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
                        >
                            Agendar Reunión (Booking)
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )

}
