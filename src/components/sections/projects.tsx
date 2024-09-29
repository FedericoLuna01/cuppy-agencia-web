"use client"

import Image from "next/image"
import Title from "../title"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { data } from "@/data/data"
import Autoplay from "embla-carousel-autoplay"
import BoxReveal from "../ui/box-reveal"

const Projects = () => {
  return (
    <section id="proyectos" className=" bg-gradient-to-b">
      <div className="container mx-auto px-4 flex flex-col gap-10 items-center justify-center">
        <BoxReveal>
          <Title label="Proyectos" />
        </BoxReveal>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="rounded-md px-8"
        >
          <BoxReveal>
            <CarouselContent className="rounded-md">
              {
                data.projects.map(({ image, href }, index) => (
                  <CarouselItem className="basis-auto rounded-md md:basis-1/2 xl:basis-1/3" key={index}>
                    <a href={href} target="_blank" className="">
                      <Image
                        className="rounded-md hover:brightness-75 transition-all duration-150"
                        src={image}
                        alt={`Proyecto ${index + 1}`}
                        width={600}
                        height={600}
                      />
                    </a>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
          </BoxReveal>
          <CarouselPrevious className="sm:flex hidden bg-primary/80 size-10 hover:bg-primary hover:text-white text-white" />
          <CarouselNext className="sm:flex hidden bg-primary/80 size-10 hover:bg-primary hover:text-white text-white" />
        </Carousel>
      </div>
    </section>
  )
}

export default Projects