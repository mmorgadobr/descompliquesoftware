import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            
            <p className="text-muted-foreground max-w-md mb-4">
              Transformando ideias em soluções digitais. Desenvolvimento de software 
              web personalizado para empresas que querem crescer.
            </p>
            <p className="text-sm text-muted-foreground">
              PHP • JavaScript • MySQL • PostgreSQL • SQL Server • Adianti
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground">Sistema de Gestão (ERP)</span>
              </li>
              <li>
                <span className="text-muted-foreground">CRM</span>
              </li>
              <li>
                <span className="text-muted-foreground">E-commerce B2B</span>
              </li>
              <li>
                <span className="text-muted-foreground">Business Intelligence</span>
              </li>
              <li>
                <span className="text-muted-foreground">Sistemas sob medida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Descomplique Software. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com dedicação no Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
