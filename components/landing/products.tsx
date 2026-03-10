import { 
  FileText, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Calendar, 
  Building2,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    icon: FileText,
    title: "Sistema de Gestão Empresarial",
    description: "ERP completo para controle financeiro, estoque, vendas e compras. Integração total entre departamentos com relatórios gerenciais avançados.",
    features: ["Controle financeiro", "Gestão de estoque", "Relatórios gerenciais"],
  },
  {
    icon: Users,
    title: "CRM - Gestão de Clientes",
    description: "Organize sua base de clientes, acompanhe negociações e potencialize suas vendas com automação de marketing e funil de vendas.",
    features: ["Funil de vendas", "Automação de e-mails", "Histórico completo"],
  },
{
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards interativos para análise de dados em tempo real. Tome decisões baseadas em dados com visualizações poderosas.",
    features: ["Dashboards em tempo real", "KPIs personalizados", "Exportação de dados"],
  },
  {
    icon: Calendar,
    title: "Sistema de Agendamento",
    description: "Gerencie agendamentos, reservas e compromissos com notificações automáticas e calendário integrado.",
    features: ["Agenda online", "Notificações automáticas", "Integração com calendários"],
  },
  {
    icon: Building2,
    title: "Portal Corporativo",
    description: "Intranet e portal para colaboradores com gestão de documentos, comunicação interna e workflows automatizados.",
    features: ["Gestão documental", "Workflows", "Comunicação interna"],
  },
]

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3">Nossas Soluções</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">Produtos que impulsionam seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções desenvolvidas com as melhores práticas de mercado, 
            prontas para escalar junto com sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                Saiba mais
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o que precisa? Desenvolvemos soluções personalizadas.
          </p>
          <Button size="lg" asChild>
            <Link href="#contato">
              Solicitar Projeto Personalizado
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
