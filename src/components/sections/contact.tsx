import ContactForm from "../contact-form"
import Title from "../title"
import { data } from "@/data/data"
import BoxReveal from "../ui/box-reveal"

const Contact = () => {
  return (
    <section className="pb-[10vh]" id="contacto" >
      <div className="container px-4 mx-auto flex items-center justify-center flex-col gap-10">
        <BoxReveal>
          <Title label="Contacto" />
        </BoxReveal>
        <div className="flex flex-col items-center justify-between w-full gap-10">
          <div className="flex flex-col items-center gap-4">
            {
              data.socials.map((social, index) => (
                <BoxReveal
                  key={index}
                >
                  <a
                    href={social.href}
                    className="flex items-center gap-4 group"
                    target="_blank"
                  >
                    <social.icon className="group-hover:text-primary" />
                    <p className="group-hover:text-primary">{social.label}</p>
                  </a>
                </BoxReveal>
              ))
            }
          </div>
          <div className="flex w-full justify-between gap-2 md:gap-5 lg:gap-10 items-center px-3 md:px-10 lg:px-28">
            <div className="h-[1px] w-1/4 md:w-1/2 bg-border"></div>
            <p className="w-[12em] md:w-[17em] lg:w-[17em] text-sm font-semibold text-center">O envíanos un mensaje</p>
            <div className="h-[1px] w-1/4 md:w-1/2 bg-border"></div>
          </div>
          <BoxReveal
            width="100%"
          >
            <ContactForm />
          </BoxReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact