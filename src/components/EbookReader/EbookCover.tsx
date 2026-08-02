import React from 'react';
import { OrnamentalDivider } from '../OrnamentalDivider';
import { GreekGoddessIcon, WaxSealBadge } from '../VintageSvgIcons';
import { BookOpen, Compass, Bookmark, ArrowRight, Sparkles } from 'lucide-react';

interface EbookCoverProps {
  onStartReading: () => void;
  onOpenIndex: () => void;
}

export const EbookCover: React.FC<EbookCoverProps> = ({ onStartReading, onOpenIndex }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-4 sm:p-8 paper-card border-2 border-[#120e0a] rounded-sm shadow-2xl relative overflow-hidden transition-all duration-300">
      
      {/* Outer Decorative Vintage Frame */}
      <div className="border-4 border-double border-[#120e0a] p-4 sm:p-8 relative bg-[#e3d2b0]/50">
        
        {/* Corner Ornaments */}
        <div className="absolute top-2 left-2 text-[#4a2e19] text-xs font-serif opacity-70">❖</div>
        <div className="absolute top-2 right-2 text-[#4a2e19] text-xs font-serif opacity-70">❖</div>
        <div className="absolute bottom-2 left-2 text-[#4a2e19] text-xs font-serif opacity-70">❖</div>
        <div className="absolute bottom-2 right-2 text-[#4a2e19] text-xs font-serif opacity-70">❖</div>

        {/* Top Header Label */}
        <div className="text-center space-y-1 mb-6">
          <div className="text-xs tracking-[0.3em] font-playfair uppercase text-[#4a2e19] font-bold">
            Colección de Psicología Analítica • Edición de Archivo
          </div>
          <div className="text-[10px] tracking-widest font-mono text-[#5d4025]">
            DOCUMENTO INSTRUCCIONAL & GUÍA DE AUTOCONOCIMIENTO
          </div>
        </div>

        <OrnamentalDivider variant="double" className="my-3" />

        {/* Center Graphic & Title Block */}
        <div className="flex flex-col items-center justify-center text-center py-6 sm:py-10 space-y-4">
          
          <div className="relative my-2">
            <GreekGoddessIcon className="w-20 h-20 sm:w-28 sm:h-28 text-[#120e0a] drop-shadow-sm" />
            <div className="absolute -bottom-2 -right-2">
              <WaxSealBadge text="JUNG" className="w-10 h-10 text-[9px]" />
            </div>
          </div>

          <div className="space-y-2 max-w-2xl">
            <span className="font-signature text-2xl sm:text-4xl text-[#5d4025] block -mb-2">
              Colección Especial
            </span>
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-black text-[#120e0a] tracking-tight leading-tight uppercase ink-text">
              Mi amigo Carlitos
            </h1>
            <p className="font-cormorant italic text-lg sm:text-2xl text-[#2b1d12] max-w-lg mx-auto font-semibold">
              Carl Jung aplicado al coaching y al autoconocimiento
            </p>
          </div>

          <OrnamentalDivider variant="fleuron" className="my-2 max-w-md" />

          {/* Core Description Box */}
          <div className="bg-[#d2bf98]/60 p-4 sm:p-6 border border-[#120e0a] max-w-xl text-left font-old-standard text-xs sm:text-sm text-[#120e0a] space-y-2 leading-relaxed shadow-inner">
            <p className="drop-cap">
              <strong className="font-bold">Un viaje de 25 páginas</strong> por las profundidades de la psique humana. Presentamos la obra de C. G. Jung desde la voz cercana de "Carlitos" —un interlocutor cercano que aclara los conceptos técnicos sin sacrificar el rigor científico.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#4a2e19] flex flex-wrap gap-2 justify-between border-t border-[#120e0a]/30">
              <span>• 5 Capítulos Integrales</span>
              <span>• Tabla de Arquetipos</span>
              <span>• Ejercicios Prácticos</span>
            </div>
          </div>

        </div>

        <OrnamentalDivider variant="stars" className="my-4" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onStartReading}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#1a120b] hover:bg-[#382618] text-[#efe2c8] font-playfair font-bold text-sm tracking-wider uppercase border border-[#efe2c8]/30 shadow-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#dfceaa]" />
            Comenzar Lectura (Página 1)
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenIndex}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#d8c29b] hover:bg-[#c9b28a] text-[#120e0a] font-playfair font-bold text-xs tracking-wider uppercase border border-[#120e0a] flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            Índice Interactivo (25 Págs)
          </button>
        </div>

        {/* Footer Meta info */}
        <div className="mt-8 pt-4 border-t border-[#120e0a]/30 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#5d4025] gap-2">
          <span>EDICIÓN 2026 • REGISTRO PSICOLÓGICO INSTRUCCIONAL</span>
          <span>TEXTO INTEGRAL AUTOCONTENIDO</span>
        </div>

      </div>
    </div>
  );
};
