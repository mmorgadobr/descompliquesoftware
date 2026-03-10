"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quais tecnologias vocês utilizam no desenvolvimento?",
    answer: "Trabalhamos principalmente com PHP e JavaScript para o desenvolvimento web, utilizando o framework Adianti para maior produtividade. Para banco de dados, oferecemos suporte a MySQL, PostgreSQL e SQL Server, escolhendo a melhor opção de acordo com as necessidades do projeto.",
  },
  {
    question: "Quanto tempo leva para desenvolver um sistema?",
    answer: "O prazo varia de acordo com a complexidade do projeto. Sistemas simples podem ser entregues em 30-60 dias, enquanto projetos mais complexos como ERPs completos podem levar de 3 a 6 meses. Após a análise inicial, fornecemos um cronograma detalhado.",
  },
  {
    question: "Vocês oferecem suporte após a entrega do sistema?",
    answer: "Sim! Oferecemos planos de suporte e manutenção mensais que incluem correção de bugs, atualizações de segurança, pequenas melhorias e atendimento técnico. Também disponibilizamos treinamento para sua equipe.",
  },
  {
    question: "É possível integrar com sistemas que já utilizamos?",
    answer: "Absolutamente! Temos ampla experiência em integrações com sistemas legados, ERPs de mercado, plataformas de pagamento, APIs de terceiros e muito mais. Fazemos um mapeamento completo das suas necessidades de integração.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Seguimos uma metodologia ágil: 1) Levantamento de requisitos, 2) Proposta técnica e comercial, 3) Desenvolvimento em sprints com entregas parciais, 4) Testes e validações, 5) Deploy e treinamento, 6) Suporte contínuo. Você acompanha cada etapa.",
  },
  {
    question: "Vocês trabalham com projetos de qualquer tamanho?",
    answer: "Sim, atendemos desde pequenas empresas que precisam de um sistema específico até grandes corporações com projetos complexos. Cada projeto recebe a mesma atenção e qualidade, independente do tamanho.",
  },
  {
    question: "O sistema fica hospedado onde?",
    answer: "Oferecemos flexibilidade: podemos hospedar em servidores cloud (AWS, Google Cloud, Azure), em servidor dedicado ou na infraestrutura do cliente. Auxiliamos na escolha da melhor opção custo-benefício.",
  },
  {
    question: "Como é feito o orçamento?",
    answer: "Após uma reunião inicial para entender suas necessidades, elaboramos uma proposta detalhada com escopo, cronograma e investimento. Trabalhamos com preço fechado por projeto ou por hora, dependendo da natureza do trabalho.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">Perguntas Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processo de trabalho.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
