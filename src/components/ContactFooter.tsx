import { MessageSquare, MessageCircle, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/553231980374";
const WHATSAPP_LINK2 = "https://wa.me/5532987094390";

const ContactFooter = () => {
  return (
    <>
      {/* Hub WiSa Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div
            className="rounded-2xl p-8 md:p-12 text-center border shadow-lg"
            style={{
              background: "linear-gradient(135deg, hsl(215 60% 15%) 0%, hsl(215 50% 10%) 100%)",
              borderColor: "hsl(215 30% 30%)",
            }}
          >
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center bg-white shadow-lg">
                <img src="/logo-wisa.png" alt="Hub WiSa" className="w-[110px] h-[85px] object-contain" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
              Conheça o Hub WiSa
            </h3>
            <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: "hsl(215 20% 70%)" }}>
              Somos um ecossistema de inteligência B2B focado em crescimento escalável. 
              Unimos gestão, vendas, tecnologia e educação corporativa para acabar com o seu retrabalho operacional.
            </p>
            <Button size="lg" asChild className="text-base px-8 py-6 rounded-lg font-semibold" style={{ backgroundColor: "hsl(145 65% 28%)", color: "white" }}>
              <a href="https://hubwisa.com.br" target="_blank" rel="noopener noreferrer">
                Acessar Hub WiSa
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-28 bg-muted">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ficou com alguma dúvida?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Nossa equipe está pronta para ajudar. Entre em contato pelo canal que preferir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="ped-primary" size="lg" asChild className="text-base px-8 py-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                (32) 3198-0374
              </a>
            </Button>
            <Button 
              variant="ped-outline" 
              size="lg" 
              className="text-base px-8 py-6"
              onClick={async () => {
                console.log('Opening email client');
                try {
                  window.location.href = 'mailto:suporte@portaleducacionaldigital.com.br';
                  // Fallback: copiar email se não abrir
                  setTimeout(async () => {
                    await navigator.clipboard.writeText('suporte@portaleducacionaldigital.com.br');
                    alert('Email copiado para a área de transferência: suporte@portaleducacionaldigital.com.br');
                  }, 500);
                } catch (error) {
                  console.error('Error opening email client:', error);
                }
              }}
            >
              <Mail className="w-5 h-5" />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <img
                src="/logo-ped.png"
                alt="PED - Portal Educacional Digital"
                className="h-[85px] w-auto mb-4 brightness-0 invert"
          
              />
              <p className="text-sm" style={{ color: "hsl(215 20% 65%)" }}>
                Educação profissionalizante e treinamentos corporativos para
                transformar carreiras e escalar negócios.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "hsl(0 0% 90%)" }}>Links Úteis</h4>
              <ul className="space-y-2 text-sm" style={{ color: "hsl(215 20% 65%)" }}>
                <li><a href="#cursos" className="hover:text-ped-green-light transition-colors">Cursos Profissionalizantes</a></li>
                <li><a href="#empresas" className="hover:text-ped-green-light transition-colors">Treinamentos para Empresas</a></li>
                <li><a href="https://eadon.com.br/ped" target="_blank" rel="noopener noreferrer" className="hover:text-ped-green-light transition-colors">Plataforma de Cursos</a></li>
                <li><a href="#contato" className="hover:text-ped-green-light transition-colors">Fale Conosco</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "hsl(0 0% 90%)" }}>Suporte Educacional</h4>
              <ul className="space-y-3 text-sm" style={{ color: "hsl(215 20% 65%)" }}>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-ped-green-light" />
                  <a href={WHATSAPP_LINK2} target="_blank" className="hover:text-ped-green-light transition-colors">(32) 98709-4390</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-ped-green-light" />
                  <a href="mailto:suporte@portaleducacionaldigital.com.br" className="hover:text-ped-green-light transition-colors">suporte@portaleducacionaldigital.com.br</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm" style={{ borderColor: "hsl(215 20% 25%)", color: "hsl(215 20% 55%)" }}>
            <p>© {new Date().getFullYear()} PED – Portal Educacional Digital. Braço educacional do <a href="https://hubwisa.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-ped-green-light transition-colors">Hub WiSa</a>. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
