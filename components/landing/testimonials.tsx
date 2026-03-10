import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Diretor Comercial",
    company: "Distribuidora ABC",
    content: "O sistema de gestão que a Descomplique desenvolveu revolucionou nossa operação. Reduzimos em 40% o tempo de processamento de pedidos e ganhamos visibilidade total do estoque.",
    rating: 5,
  },
  {
    name: "Ana Paula Santos",
    role: "CEO",
    company: "Consultoria Nexus",
    content: "Profissionais extremamente competentes e comprometidos. Entregaram nosso portal corporativo antes do prazo e com qualidade excepcional. Recomendo a todos!",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Gerente de TI",
    company: "Indústria Metalmax",
    content: "A integração entre o ERP e nosso sistema legado foi feita de forma impecável. A equipe entendeu nossa necessidade e entregou uma solução que superou nossas expectativas.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Proprietária",
    company: "Clínica Bem Estar",
    content: "O sistema de agendamento online transformou a experiência dos nossos pacientes. Menos faltas, mais organização e clientes muito mais satisfeitos.",
    rating: 5,
  },
  {
    name: "Fernando Oliveira",
    role: "Diretor Financeiro",
    company: "Grupo Nordeste",
    content: "Os dashboards de BI nos deram uma visão que nunca tivemos antes. Agora tomamos decisões baseadas em dados reais e os resultados são visíveis.",
    rating: 5,
  },
  {
    name: "Mariana Lima",
    role: "Gestora de E-commerce",
    company: "Atacado Prime",
    content: "Nossa plataforma B2B aumentou as vendas em 60% no primeiro trimestre. A equipe da Descomplique entende de negócio e de tecnologia.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3">Depoimentos</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">O que nossos clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior indicador de sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {`"${testimonial.content}"`}
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
