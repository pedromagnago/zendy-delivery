import { Button } from "@/components/ui/button";
import womanOrderingImage from "@/assets/woman-ordering-food.jpg";

interface HeroSectionProps {
  onOpenChat: () => void;
}

const HeroSection = ({ onOpenChat }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating shapes background */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">🚀 A revolução do atendimento automático</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              A eficiência que o seu{" "}
              <span className="bg-gradient-to-r from-zendy-primary to-zendy-secondary bg-clip-text text-transparent">
                delivery
              </span>{" "}
              precisa.
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforme o seu WhatsApp numa máquina de vendas. Fale com a Zendy agora e veja como funciona na perfeição.
            </p>
            
            <Button 
              variant="zendy" 
              size="lg" 
              onClick={onOpenChat}
              className="text-lg px-8 py-4 h-auto"
            >
              💬 Conversar com a Zendy
            </Button>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                Resposta imediata
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                Sem compromisso
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                Configuração em 5 minutos
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-zendy-large">
              <img
                src={womanOrderingImage}
                alt="Mulher a fazer pedido através do WhatsApp"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;