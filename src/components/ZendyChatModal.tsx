import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

interface ZendyChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ZendyChatModal = ({ isOpen, onClose }: ZendyChatModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md h-[600px] bg-white rounded-2xl shadow-zendy-large overflow-hidden animate-slide-up">
        {/* Header - WhatsApp style */}
        <div className="flex items-center justify-between p-4 bg-zendy-primary text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Zendy</h3>
              <p className="text-xs opacity-90">online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Iframe Content */}
        <div className="h-full pb-16">
          <iframe
            src="https://dash.superagentes.ai/agents/cmehf9no0001yjp92d23bze25/iframe"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="clipboard-write"
            className="border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ZendyChatModal;