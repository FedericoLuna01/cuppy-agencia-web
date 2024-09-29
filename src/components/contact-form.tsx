"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { toast } from "@/hooks/use-toast"
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button"
import { CheckIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"

const FormSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre es requerido",
  }),
  email: z.string().email({
    message: "El email es requerido",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres",
  })
})

function ContactForm() {
  const [buttonStatus, setButtonStatus] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (buttonStatus) {
      toast({
        title: "Mensaje ya enviado",
        description: "Tu mensaje ya ha sido enviado",
      })
      return
    }
    setLoading(true)
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setButtonStatus(true)
          toast({
            title: "Mensaje enviado",
            description: "Tu mensaje ha sido enviado correctamente",
            variant: "success",
          })
        } else {
          toast({
            title: "Error",
            description: "Ha ocurrido un error al enviar el mensaje",
            variant: "destructive",
          })
        }
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Ha ocurrido un error al enviar el mensaje",
          variant: "destructive",
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-[40em] mx-auto space-y-6 border-border border rounded-md p-4 bg-white">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Juan Perez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="JuanPerez@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea className="resize-none" rows={8} placeholder="Quería consultar..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AnimatedSubscribeButton
          subscribeStatus={buttonStatus}
          loading={loading}
          initialText={
            <span className="group w-full inline-flex items-center justify-center">
              Enviar{" "}
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group w-full inline-flex items-center justify-center">
              <CheckIcon className="mr-2 size-4" />
              Enviado{" "}
            </span>
          }
        />
      </form>
    </Form>
  )
}

export default ContactForm