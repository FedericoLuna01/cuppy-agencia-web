"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { scrollTo } from "@/lib/utils"
import BoxReveal from "../ui/box-reveal"

const Cta = () => {
  return (
    <section className="bg-gradient-to-b via-orange-300/50 from-transparent py-10">
      <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <BoxReveal>
            <p className="font-bold text-3xl md:text-4xl max-w-3xl text-center md:text-left">
              Envíanos un mensaje para consultar el presupuesto de tu futura página web.
            </p>

          </BoxReveal>
          <BoxReveal>
            <Button
              size={"lg"}
              className="px-10 py-6 text-xl w-fit"
              onClick={() => scrollTo("contacto")}
            >
              Contactar
            </Button>
          </BoxReveal>
        </div>
        <BoxReveal>
          <Image src="/mockup.png" width={300} height={300} alt="Mockup website" />
        </BoxReveal>
      </div>
    </section>
  )
}

export default Cta