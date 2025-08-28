import stressedOwnerImage from "@/assets/stressed-restaurant-owner.jpg";
import { Button } from "@/components/ui/button";

interface ProblemsSectionProps {
  onOpenChat: () => void;
}

const ProblemsSection = ({ onOpenChat }: ProblemsSectionProps) => {
  const problems = [
    {
      title: "Clientes que desistem",
      description: "Esperam demasiado tempo por uma resposta e acabam por encomendar noutro local. Cada minuto de atraso é dinheiro perdido."
    },
    {
      title: "Erros nos pedidos", 
      description: "Mal-entendidos no atendimento resultam em pedidos errados, clientes insatisfeitos e desperdício de comida."
    },
    {
      title: "Stress constante",
      description: "A pressão de ter de responder a todas as horas, mesmo quando deveria estar a descansar com a família."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Reconhece estes problemas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabemos como pode ser frustrante gerir o atendimento enquanto tenta manter o seu negócio a funcionar na perfeição.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-zendy-large">
              <img
                src={stressedOwnerImage}
                alt="Dono de restaurante stressado a gerir múltiplos pedidos em telemóvel, tablet e papéis num ambiente caótico"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right column - Problem cards */}
          <div className="space-y-6 animate-fade-in">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-xl shadow-zendy border border-border/50 hover:shadow-zendy-large transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action Button */}
        <div className="mt-12 text-center animate-fade-in">
          <Button 
            variant="zendy" 
            size="lg" 
            onClick={onOpenChat}
            className="text-lg px-8 py-4 h-auto"
          >
            💬 Falar com a Zendy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;