"use client"

import { scrollTo } from "@/lib/utils"
import { Safari } from "../ui/browser"
import { Button } from "../ui/button"
import BoxReveal from "../ui/box-reveal"

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-visible">
      <div aria-hidden="true" className="-z-10 flex absolute -top-96 start-1/2 transform -translate-x-[100%]">
        <div className="bg-gradient-to-r from-orange-300/50 to-orange-100 blur-3xl w-[5rem] md:w-[25rem] h-[5rem] md:h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
        <div className="bg-gradient-to-tl blur-3xl w-[20rem] sm:w-[10rem] md:w-[20rem] lg:w-[40rem] h-[40rem] md:h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] from-primary/20 via-orange-400/20 to-orange-200/30"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center flex-col pt-36">
        <div className="space-y-5 max-w-4xl flex items-center flex-col mx-auto text-center">
          <BoxReveal>
            <h1 className="text-sm text-primary font-bold">
              Obtené ya tu web!
            </h1>
          </BoxReveal>
          <BoxReveal>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl p-2">
              Potencia tu negocio con  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">tu futura pagina web</span>
            </h2>
          </BoxReveal>
          <BoxReveal>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Somos una agencia de desarrollo web que ofrece soluciones a medida para empresas que buscan destacarse en el entorno digital. Desde sitios corporativos hasta plataformas avanzadas, te ayudamos a convertir tu visión en una realidad funcional y atractiva.
            </p>
          </BoxReveal>
          <BoxReveal>
            <Button
              size="lg"
              className="font-semibold"
              onClick={() => scrollTo("contacto")}
            >
              Contactáme!
            </Button>
          </BoxReveal>
        </div>
        <div className="mt-14">
          <Safari
            url="tupaginaweb.com"
            className="size-full"
            src="/hero.png"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero