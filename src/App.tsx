import { Header, Hero, Features, MoreInformation, Resources, Form, Footer, } from "./components"

function App() {
  

  return (
    <main className=" m-auto">
      <section className="bg-Navy-850 p-6 h-[420px] relative md:h-[640px]">
        <Header />

        <img 
          className="relative z-10 mt-12 w-[320px]  md:w-[450px] mx-auto"
          src="/images/illustration-intro.png" 
          alt="intro ilustration">
        </img>

        <img 
          className="absolute bottom-0 left-0 w-full xl:hidden"
          src="/images/bg-curvy-mobile.svg" 
          alt="bg curvy mobile">
        </img>

        <img 
          className="absolute bottom-0 left-0 w-full hidden xl:block"
          src="/images/bg-curvy-desktop.svg" 
          alt="bg curvy mobile">
        </img>

        
      </section>

      <section className="bg-Navy-900 p-6 pb-[300px]">
        <Hero />
        <Features />
        <MoreInformation />
        <Resources />   
      </section>

      <section className="bg-Navy-950 p-6 relative">
        <Form />
        <Footer />

      </section>
    
    </main>
  )
}

export default App
