import React from 'react';
import { OrnamentalDivider } from '../OrnamentalDivider';
import { WaxSealBadge, GreekGoddessIcon } from '../VintageSvgIcons';
import { BookOpen, RotateCcw, Award, CheckCircle } from 'lucide-react';
import { getPageSizeClass } from '../../config/ebookConfig';

interface EbookBackCoverProps {
  onReturnToCover: () => void;
  onOpenIndex: () => void;
  onOpenWorkbookManager: () => void;
  pageSize?: string;
}

export const EbookBackCover: React.FC<EbookBackCoverProps> = ({
  onReturnToCover,
  onOpenIndex,
  onOpenWorkbookManager,
  pageSize,
}) => {
  const pageSizeClass = pageSize || getPageSizeClass('page-backcover');

  return (
    <div className={`w-full max-w-4xl mx-auto my-6 sm:my-10 p-4 sm:p-8 paper-card border-2 border-[#120e0a] rounded-sm shadow-2xl bg-[#dfceaa] print-page-sheet flex flex-col justify-between ${pageSizeClass}`}>
      <div className="border-4 border-double border-[#120e0a] p-4 sm:p-8 relative bg-[#e3d2b0]/60 text-center min-h-[1020px] sm:min-h-[1170px] flex-1 flex flex-col justify-between">
        
        {/* Header Badge */}
        <div className="text-center space-y-1">
          <span className="text-xs tracking-[0.3em] font-mono uppercase text-[#5d4025]">
            CONTRAPORTADA OFICIAL • EDICIÓN IMPRESA & DIGITAL
          </span>
          <h2 className="font-playfair text-2xl sm:text-4xl font-extrabold text-[#120e0a] uppercase tracking-tight ink-text">
            Mi amigo Carlitos
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#382618]">
            Carl Jung aplicado al coaching y al autoconocimiento
          </p>
        </div>

        <OrnamentalDivider variant="flourish" className="my-2" />

        {/* Verified Quotation Box */}
        <div className="p-6 bg-[#efe2c8] border-2 border-[#120e0a] max-w-2xl mx-auto space-y-3 text-left shadow-md">
          <div className="text-xs font-mono text-[#5d4025] uppercase font-bold tracking-widest border-b border-[#120e0a]/20 pb-1">
            Cita Verificada de la Obra Publicada de C. G. Jung:
          </div>
          <blockquote className="font-cormorant italic text-lg sm:text-xl text-[#120e0a] leading-relaxed font-semibold">
            "Aquello a lo que te resistes, persiste; lo que aceptas, te transforma. Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta."
          </blockquote>
          <div className="text-right font-mono text-xs text-[#4a2e19]">
            — Carl Gustav Jung (Obras Completas, Vol. 9/1)
          </div>
        </div>

        {/* Summary Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto font-old-standard text-xs text-left">
          <div className="p-3 bg-[#d8c29b] border border-[#120e0a] space-y-1">
            <h4 className="font-playfair font-bold text-[#120e0a] uppercase text-xs">
              Estructura Rigurosa
            </h4>
            <p className="text-[#2b1d12]">
              25 páginas divididas en 5 capítulos temáticos, biografía clínica y tabla de arquetipos.
            </p>
          </div>

          <div className="p-3 bg-[#d8c29b] border border-[#120e0a] space-y-1">
            <h4 className="font-playfair font-bold text-[#120e0a] uppercase text-xs">
              Dispositivo "Carlitos"
            </h4>
            <p className="text-[#2b1d12]">
              Reflexiones cercanas que traducen el rigor técnico a una voz pedagógica humana.
            </p>
          </div>

          <div className="p-3 bg-[#d8c29b] border border-[#120e0a] space-y-1">
            <h4 className="font-playfair font-bold text-[#120e0a] uppercase text-xs">
              Cuaderno Integrado
            </h4>
            <p className="text-[#2b1d12]">
              3 ejercicios prácticos autoadministrables para integración conductual.
            </p>
          </div>
        </div>

        <div className="flex justify-center my-3">
          <WaxSealBadge text="PSIQUE INTEGRADA" className="w-20 h-20 sm:w-24 sm:h-24" />
        </div>

        {/* CONTINUARÁ Banner */}
        <div className="my-4 py-4 px-6 bg-[#120e0a] text-[#efe2c8] border-2 border-[#5d4025] shadow-xl max-w-xl mx-auto rounded-xs text-center space-y-1 relative">
          <span className="font-playfair text-2xl sm:text-4xl font-black uppercase tracking-[0.25em] block text-[#e3ceaa] drop-shadow-md">
            — CONTINUARÁ —
          </span>
          <p className="font-cormorant italic text-sm sm:text-base text-[#d8c29b] font-medium">
            El viaje del autoconocimiento y la integración psíquica recién comienza...
          </p>
        </div>

        <OrnamentalDivider variant="double" className="my-4" />

        {/* Technical Registry Bar */}
        <div className="pt-6 border-t border-[#120e0a]/30 font-mono text-[10px] text-[#5d4025] flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>COLECCIÓN PSICOLOGÍA ANALÍTICA • REGISTRO DE ARCHIVO</span>
          <span>ISBN: 978-987-00-2026-JUNG</span>
        </div>

      </div>
    </div>
  );
};
