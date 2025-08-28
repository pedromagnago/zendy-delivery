import calmOwnerImage from "@/assets/calm-restaurant-owner.jpg";
import whatsappTranscriptionImage from "@/assets/whatsapp-voice-transcription.jpg";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O que a Zendy faz por si
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Imagine ter o funcionário perfeito: nunca se cansa, nunca erra e está sempre disponível.
          </p>
        </div>
        
        <div className="space-y-20">
          {/* First sub-section: Image left, text right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-zendy-large">
                <img
                  src={calmOwnerImage}
                  alt="Dono de restaurante calmo a olhar para tablet organizado"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zendy-primary/10 rounded-full">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold text-zendy-primary">Atendimento 24/7 sem falhas</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Zendy nunca dorme, nunca está ocupada e nunca perde a paciência. Os seus clientes recebem sempre uma resposta imediata, mesmo às 3 da manhã de domingo.
              </p>
            </div>
          </div>
          
          {/* Second sub-section: Text left, image right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zendy-secondary/10 rounded-full">
                <span className="text-2xl">🧠</span>
                <span className="font-semibold text-zendy-secondary">Inteligência que entende os seus clientes</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Linguagem natural, áudios, imagens - a Zendy compreende qualquer forma de comunicação. "Quero o mesmo de sempre" torna-se num pedido perfeito, instantaneamente.
              </p>
            </div>
            
            <div className="relative animate-slide-up lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-zendy-large">
                <img
                  src={whatsappTranscriptionImage}
                  alt="Close-up de telemóvel com conversa WhatsApp e transcrição de voz"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;