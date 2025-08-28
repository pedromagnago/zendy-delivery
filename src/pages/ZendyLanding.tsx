import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import FinalCallToActionSection from "@/components/FinalCallToActionSection";
import ZendyChatModal from "@/components/ZendyChatModal";

const ZendyLanding = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <>
      <main className="overflow-x-hidden">
        <HeroSection onOpenChat={openChat} />
        <ProblemsSection onOpenChat={openChat} />
        <SolutionSection />
        <FinalCallToActionSection onOpenChat={openChat} />
      </main>

      <ZendyChatModal isOpen={isChatOpen} onClose={closeChat} />
    </>
  );
};

export default ZendyLanding;