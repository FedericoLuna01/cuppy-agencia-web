"use client"

import Title from '../title'
import { Check } from 'lucide-react'
import { data } from '@/data/data'
import { cn, scrollTo } from '@/lib/utils'
import BoxReveal from '../ui/box-reveal'

const Pricing = () => {
  return (
    <section id="servicios" className='relative overflow-x-clip'>
      <div className="mx-auto flex flex-col items-center container px-4 ">
        <BoxReveal>
          <Title label="Planes y servicios" />
        </BoxReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-20">
          {
            data.pricing.map((item, index) => (
              <BoxReveal
                key={index}
                className='py-4'
              >
                <div
                  className={cn("flex flex-col rounded-md border p-4 pt-6 relative", index === 1 && 'border-primary border-2')}
                >
                  {
                    index === 1 && (
                      <div className="absolute inset-x-0 -top-3 flex justify-center">
                        <span className="flex h-6 items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">Mas popular</span>
                      </div>
                    )
                  }
                  <div className="mb-12">
                    <p className="mb-2 text-center text-2xl font-bold">
                      {item.title}
                    </p>
                    <p className="mx-auto mb-8 px-8 text-center text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {
                        item.features.map((feature, index) => (
                          <div key={index} className="flex gap-2">
                            <Check size={24} className='text-primary' />
                            <span>{feature}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </BoxReveal>
            ))
          }
        </div>
        <div className="text-center text-sm text-gray-500 sm:text-base">Necesitas ayuda para decidir?{" "}
          <span
            onClick={() => scrollTo("contacto")}
            className="text-muted-foreground cursor-pointer underline transition duration-100 hover:text-primary active:text-primary">
            Contactános
          </span>.</div>
      </div>
    </section>
  )
}

export default Pricing