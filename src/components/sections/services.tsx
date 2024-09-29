import { data } from "@/data/data"
import Title from "../title"
import BoxReveal from "../ui/box-reveal"

const Services = () => {
  return (
    <section id="que ofrecemos">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center flex-col gap-4">
          <BoxReveal>
            <Title label="¿Que ofrecemos?" />
          </BoxReveal>
          <BoxReveal>
            <p className="text-muted-foreground max-w-2xl">
              Nos encargamos de brindar servicios de diseño y desarrollo web, donde combinamos las últimas y más avanzadas tecnologías para que tu negocio cree una mayor presencia en internet y así poder llegar a un mayor número de clientes.
            </p>
          </BoxReveal>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <ul className="grid gap-y-8 gap-x-20 sm:grid-cols-2 lg:grid-cols-3 align-center">
            {
              data.services.map((item, idx) => (
                <BoxReveal key={idx}>
                  <li className="space-y-3 max-w-[20em] ">
                    <div className="size-12 mx-auto bg-orange-300/20 text-primary rounded-full flex items-center justify-center">
                      {<item.icon />}
                    </div>
                    <h3 className="text-lg text-gray-800 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.desc}
                    </p>
                  </li>
                </BoxReveal>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services