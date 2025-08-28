import { Button } from "@/components/ui/button";

interface FinalCallToActionSectionProps {
  onOpenChat: () => void;
}

const FinalCallToActionSection = ({ onOpenChat }: FinalCallToActionSectionProps) => {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Floating shapes background */}
      <div className="floating-shapes">
        <div className="floating-shape opacity-20"></div>
        <div className="floating-shape opacity-15"></div>
        <div className="floating-shape opacity-25"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            O futuro do delivery já chegou
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Não deixe que os seus concorrentes se adiantem. A Zendy está pronta para transformar o seu negócio, hoje mesmo.
          </p>
          
          <Button 
            variant="zendyInverse" 
            size="lg" 
            onClick={onOpenChat}
            className="text-lg px-8 py-4 h-auto animate-pulse hover:animate-none"
          >
            💬 Conversar com a Zendy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToActionSection;