import { Button } from "./button"

export const Hero = () => {
  return (
    <section className="-mt-20 relative z-10 max-w-[500px] mx-auto md:mt-20]">

      <h1 className="text-center text-3xl font-Raleway font-bold px-2">
        Conectatech: Expertos en Transformación Digital del Estado
      </h1>

      <p className="text-center text-1xl mb-10 mt-6 px-6">
        Acompañamos a las instituciones públicas en la implementación de la Ley 21.180
      </p>

      <div className="flex  flex-col sm:flex-row justify-center gap-6 ">
        <Button text="Contactanos" styles="w-[240px]" />
        <Button text="Descargar Brochure" styles="w-[240px]" />
      </div>

      

      
    </section>
  )
}
