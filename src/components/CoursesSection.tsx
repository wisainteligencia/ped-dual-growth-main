import { BookOpen, Monitor, Briefcase, Heart, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Monitor, title: "Informática & Tecnologia", desc: "Excel, Word, PowerPoint e ferramentas digitais essenciais." },
  { icon: Briefcase, title: "Administração & Gestão", desc: "Gestão empresarial, financeira e de processos." },
  { icon: Heart, title: "Saúde & Bem-Estar", desc: "Cursos voltados ao cuidado e qualidade de vida." },
  { icon: Code, title: "Desenvolvimento Web", desc: "Programação, web design e desenvolvimento de sistemas." },
  { icon: TrendingUp, title: "Marketing & Vendas", desc: "Estratégias de marketing digital e técnicas de vendas." },
  { icon: BookOpen, title: "Educação & Pedagogia", desc: "Formação complementar para educadores e pedagogos." },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-20 md:py-28 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">Para Você</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Dê o próximo passo na sua carreira.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cursos profissionalizantes 100% online, com certificado reconhecido.
            Do básico ao avançado, encontre o curso ideal para alavancar sua carreira.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-background rounded-xl p-6 border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="ped-primary" size="lg" asChild className="text-base px-8 py-6">
            <a href="https://eadon.com.br/ped" target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-5 h-5" />
              Acessar Plataforma de Cursos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
