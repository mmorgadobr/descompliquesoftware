export function Technologies() {
  const technologies = [
    { name: "PHP", description: "Backend robusto" },
    { name: "JavaScript", description: "Interatividade" },
    { name: "MySQL", description: "Banco de dados" },
    { name: "PostgreSQL", description: "Alta performance" },
    { name: "SQL Server", description: "Corporativo" },
    { name: "Adianti", description: "Framework ágil" },
  ]

  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground mb-8 font-medium">
          Tecnologias que utilizamos
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-lg font-bold text-foreground mb-1">{tech.name}</span>
              <span className="text-xs text-muted-foreground">{tech.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
