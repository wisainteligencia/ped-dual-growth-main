import { ArrowDown, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="container text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-8 animate-fade-up">
          <GraduationCap className="w-4 h-4" />
          Educação que gera resultado
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Capacitação que transforma a sua carreira{" "}
          <span className="text-gradient-ped">e acelera a sua empresa.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Escolha o seu caminho: Cursos profissionalizantes para você se destacar
          no mercado, ou Trilhas Corporativas para escalar os resultados do seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="ped-primary" size="lg" asChild className="text-base px-8 py-6">
            <a href="#cursos">
              <GraduationCap className="w-5 h-5" />
              Para Você (Ver Cursos)
            </a>
          </Button>
          <Button variant="ped-outline" size="lg" asChild className="text-base px-8 py-6">
            <a href="#empresas">
              <Building2 className="w-5 h-5" />
              Para Empresas
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Certificado Válido
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Resultados Reais
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            100% Online
          </div>
        </div>

        <a href="#cursos" className="inline-block mt-12 animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
