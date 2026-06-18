import { Settings, Target, Bot, MessageSquare, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5532987094390";
const GOOGLE_AGENDA= "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ10baEhf2nfYpW2ekiKDw0qe5z_NCfTWJVTiWxzGMgfiazjT929J3HWw0iTm09Qo7cWhZJbFSTT"

const trails = [
  {
    icon: Settings,
    title: "Excelência em Gestão e ERP",
    desc: "Capacitação em sistemas, processos financeiros e backoffice. Sua equipe domina a ferramenta — e a operação flui.",
  },
  {
    icon: Target,
    title: "Máquina de Vendas e CRM",
    desc: "Metodologia de vendas B2B (SPICED), qualificação de leads e fechamento. Transforme o seu pipeline em receita previsível.",
  },
  {
    icon: Bot,
    title: "Atendimento e IA",
    desc: "Como o seu time pode usar Agentes de Inteligência Artificial para não perder nenhuma venda no WhatsApp.",
  },
];

const CorporateSection = () => {
  return (
    <section id="empresas" className="bg-gradient-b2b py-20 md:py-28">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-ped-green-light tracking-wider uppercase">Para Empresas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Muito além do profissionalizante.{" "}
            <span className="text-gradient-ped">Nós aceleramos a sua operação.</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "hsl(215 20% 75%)" }}>
            O braço educacional da <strong>WiSa</strong>. Treinamentos estratégicos para nivelar
            sua equipe, acabar com o retrabalho e escalar vendas. <br></br>
            <strong> Sem equipe preparada, qualquer estratégia quebra. </strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {trails.map((trail) => (
            <div
              key={trail.title}
              className="rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: "hsl(215 28% 18%)",
                borderColor: "hsl(215 28% 25%)",
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <trail.icon className="w-6 h-6 text-ped-green-light" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                {trail.title}
              </h3>
              <p className="text-sm" style={{ color: "hsl(215 20% 70%)" }}>
                {trail.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 text-center border"
          style={{
            background: "linear-gradient(135deg, hsl(145 65% 28%) 0%, hsl(145 65% 22%) 100%)",
            borderColor: "hsl(145 60% 35%)",
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            A tecnologia da sua empresa é tão boa quanto a equipe que a opera.
          </h3>
          <p className="text-base mb-6 max-w-2xl mx-auto" style={{ color: "hsl(145 30% 85%)" }}>
            Agende sua consultoria <strong>gratuita</strong> de 15 minutos.
          </p>
          <Button size="lg" asChild className="text-base px-8 py-6 rounded-lg font-semibold bg-card hover:bg-card/90" style={{ color: "hsl(var(--ped-green))" }}>
            <a href={GOOGLE_AGENDA} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5" />
              Acesse nossa agenda
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
