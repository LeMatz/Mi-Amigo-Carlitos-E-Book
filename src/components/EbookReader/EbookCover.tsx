import React from 'react';
import { OrnamentalDivider } from '../OrnamentalDivider';
import { GreekGoddessIcon, WaxSealBadge } from '../VintageSvgIcons';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { getPageSizeClass } from '../../config/ebookConfig';

interface EbookCoverProps {
  onStartReading: () => void;
  onOpenIndex: () => void;
  pageSize?: string;
}

export const EbookCover: React.FC<EbookCoverProps> = ({ onStartReading, onOpenIndex, pageSize }) => {
  const pageSizeClass = pageSize || getPageSizeClass('page-cover');

  return (
    <div className={`w-full max-w-4xl mx-auto my-6 sm:my-10 p-4 sm:p-8 paper-card border-2 border-[#120e0a] rounded-sm shadow-2xl relative overflow-hidden transition-all duration-300 print-page-sheet flex flex-col justify-between bg-[#dfceaa] ${pageSizeClass}`}>
      
      {/* Outer Decorative Vintage Frame */}
      <div className="border-4 border-double border-[#120e0a] p-4 sm:p-8 relative bg-[#e3d2b0]/50 min-h-[1020px] sm:min-h-[1170px] flex-1 flex flex-col justify-between">
        
        {/* Corner Ornaments */}
        <div className="absolute top-2 left-2 text-[#4a2e19] text-xs font-serif opacity-70">❖</div>
        <div className="absolute top-2 right-2 text-[#4a2e19] text-xs font-serif opacity-70">❖</div>
        <div className="absolute bottom-2 left-2 text-[#4a2e19] text-xs font-serif opacity-70">❖</div>
        <div className="absolute bottom-2 right-2 text-[#4a2e19] text-xs font-serif opacity-70">❖</div>

        {/* Top Header Label */}
        <div>
          <div className="text-center space-y-1 mb-4">
            <div className="text-xs tracking-[0.3em] font-playfair uppercase text-[#4a2e19] font-bold">
              Colección de Mitología Personal • Edición de Archivo
            </div>
            <div className="text-[10px] tracking-widest font-mono text-[#5d4025]">
              DOCUMENTO INSTRUCCIONAL & GUÍA DE AUTOCONOCIMIENTO
            </div>
          </div>

          <OrnamentalDivider variant="double" className="my-3" />
        </div>

        {/* Center Graphic, Title & Reserved Photograph Frame */}
        <div className="flex flex-col items-center justify-center text-center py-4 space-y-4 my-auto">
          
          <div className="relative my-1">
            <GreekGoddessIcon className="w-16 h-16 sm:w-24 sm:h-24 text-[#120e0a] drop-shadow-sm" />
            <div className="absolute -bottom-2 -right-2">
              <WaxSealBadge text="JUNG" className="w-9 h-9 text-[9px]" />
            </div>
          </div>

          <div className="space-y-1 max-w-2xl">
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

          {/* Cover Image Frame */}
          <div className="w-full max-w-md my-4 p-2.5 sm:p-3 border-2 border-[#120e0a] bg-[#eedebf] flex flex-col items-center justify-center text-center rounded-xs relative shadow-lg">
            {/* Vintage Frame Corner Accents */}
            <div className="absolute top-1 left-1 text-[#5d4025] font-serif text-xs z-10">┌</div>
            <div className="absolute top-1 right-1 text-[#5d4025] font-serif text-xs z-10">┐</div>
            <div className="absolute bottom-1 left-1 text-[#5d4025] font-serif text-xs z-10">└</div>
            <div className="absolute bottom-1 right-1 text-[#5d4025] font-serif text-xs z-10">┘</div>
            
            <div className="relative w-full overflow-hidden border border-[#120e0a]/40 bg-[#120e0a]/5 rounded-xs">
              <img
                src="https://lh3.googleusercontent.com/d/1vfTgOaB7WazEhElIbXm7-nTrIAKLtINj"
                alt="Portada Mi amigo Carlitos"
                className="w-full h-auto max-h-[420px] object-contain mx-auto shadow-sm rounded-xs"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://drive.google.com/uc?export=view&id=1vfTgOaB7WazEhElIbXm7-nTrIAKLtINj";
                }}
              />
            </div>
          </div>

        </div>

        <div>
          <OrnamentalDivider variant="stars" className="my-3" />

          {/* Footer Meta info */}
          <div className="pt-3 border-t border-[#120e0a]/30 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#5d4025] gap-2">
            <span>EDICIÓN 2026 • REGISTRO INSTRUCCIONAL</span>
            <span>TEXTO INTEGRAL AUTOCONTENIDO</span>
          </div>
        </div>

      </div>
    </div>
  );
};
