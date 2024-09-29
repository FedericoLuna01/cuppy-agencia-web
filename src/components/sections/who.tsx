import Image from "next/image"
import { Button } from "../ui/button"
import Title from "../title"
import BoxReveal from "../ui/box-reveal"

const Who = () => {
  return (
    <section id="acerca">
      <div className="container mx-auto px-4 flex items-center flex-col gap-10">
        <BoxReveal>
          <Title label="¿Quien está detrás de cuppy?" />
        </BoxReveal>
        <div className="shadow-xl max-w-3xl flex rounded-md gap-10 overflow-hidden flex-col md:flex-row">
          <BoxReveal>
            <div className="p-8 flex flex-col">
              <div className="space-y-3 ">
                <p className="text-lg font-semibold">
                  Soy Federico Luna 👋
                </p>
                <p>
                  Voy a ser el encargado de acompañarte durante el proceso de diseñar y desarrollar tu próxima página web, una vez terminada también te brindaré soporte técnico para que siempre esté en línea y sin problemas.
                </p>
                <p>
                  Estoy siempre dispuesto a aceptar cualquier desafío o idea que tengas.
                  No dudes en contactarme para cualquier consulta o presupuesto.
                </p>
              </div>
              <Button
                className="md:mt-auto w-auto mt-8"
                asChild
              >
                <a href="https://wa.me/543413125385?text=Hola!%20queria%20hacer%20una%20consulta%20sobre%20una%20pagina%20web" target="_blank">
                  Trabajemos juntos!
                </a>
              </Button>
            </div>
          </BoxReveal>
          <Image className="md:flex hidden" width={200} height={300} src="/yo.jpeg" alt="Persona que está detrás de cuppy" />
        </div>
      </div>
    </section>
  )
}

export default Who