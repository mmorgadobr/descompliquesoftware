"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget
    const data = {
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    setIsLoading(false)

    if (res.ok) {
      setIsSubmitted(true)
    } else {
      alert("Erro ao enviar mensagem. Tente novamente.")
    }
  }

  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3">Contato</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">Vamos conversar sobre seu projeto?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e entraremos em contato em até 24 horas úteis.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-muted-foreground">contato@descompliquesoftware.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Localização</p>
                    <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Atendemos todo o Brasil de forma remota
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">
                Horário de Atendimento
              </h4>
              <p className="text-muted-foreground text-sm">
                Segunda a Sexta: 09h às 18h
              </p>
              <p className="text-muted-foreground text-sm">
                Sábado: 09h às 13h
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-card border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Obrigado pelo contato. Nossa equipe retornará em breve.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nome da sua empresa"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Seu Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Como podemos te chamar?"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com.br"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="whatsapp" className="text-sm font-medium text-foreground">
                        WhatsApp
                      </label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
