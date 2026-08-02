import React from 'react';
import { EBOOK_PAGES } from '../../data/ebookContent';
import { Edit3, X, CheckCircle, Download, Printer, Copy, Check, ArrowRight } from 'lucide-react';
import { OrnamentalDivider } from '../OrnamentalDivider';

interface WorkbookManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  userWorkbookState: Record<string, string>;
  onNavigateToExercisePage: (pageNumber: number) => void;
}

export const WorkbookManagerModal: React.FC<WorkbookManagerModalProps> = ({
  isOpen,
  onClose,
  userWorkbookState,
  onNavigateToExercisePage,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  // Extract exercise pages (Pages 22, 23, 24)
  const exercisePages = EBOOK_PAGES.filter((p) => p.exerciseData);

  const handleCopyAll = () => {
    let summaryText = `MI AMIGO CARLITOS — CUADERNO DE EJERCICIOS COMPLETADO\n==========================================================\n\n`;

    exercisePages.forEach((page) => {
      const ex = page.exerciseData!;
      const answer = userWorkbookState[ex.inputFieldKey] || '[Pendiente de respuesta]';
      summaryText += `--- ${ex.title} (Página ${page.pageNumber}) ---\nObjetivo: ${ex.objective}\n\nRegistro Personal:\n${answer}\n\n`;
    });

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#120e0a]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#dfceaa] border-4 border-[#120e0a] w-full max-w-3xl p-4 sm:p-8 shadow-2xl relative paper-card max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#120e0a]">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#5d4025] font-bold tracking-widest">
              Capítulo 5 • Autoconocimiento Aplicado
            </span>
            <h2 className="font-playfair text-xl sm:text-3xl font-extrabold text-[#120e0a] uppercase ink-text">
              Cuaderno de Ejercicios Prácticos
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#120e0a] hover:text-[#efe2c8] transition-all cursor-pointer border border-[#120e0a]"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="my-4 flex flex-wrap items-center justify-between gap-2 p-3 bg-[#e2d1b0] border border-[#120e0a]">
          <span className="text-xs font-mono text-[#5d4025] font-bold">
            Respuestas guardadas localmente en esta sesión
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="px-3 py-1.5 bg-[#d8c29b] text-[#120e0a] border border-[#120e0a] font-playfair font-bold text-xs uppercase hover:bg-[#c9b28a] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado al Portapapeles' : 'Copiar Todo'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#120e0a] text-[#efe2c8] font-playfair font-bold text-xs uppercase hover:bg-[#382618] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>

        {/* Exercises List */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-1">
          {exercisePages.map((page) => {
            const ex = page.exerciseData!;
            const answer = userWorkbookState[ex.inputFieldKey];
            const isFilled = answer && answer.trim().length > 0;

            return (
              <div
                key={page.pageNumber}
                className="p-4 sm:p-5 bg-[#e8d7b5] border-2 border-[#120e0a] space-y-3 relative shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#120e0a]/30 pb-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold bg-[#120e0a] text-[#efe2c8] px-2 py-0.5 uppercase mr-2">
                      Página {page.pageNumber}
                    </span>
                    <span className="font-playfair font-bold text-base sm:text-lg text-[#120e0a]">
                      {ex.title}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onNavigateToExercisePage(page.pageNumber);
                      onClose();
                    }}
                    className="text-xs font-mono font-bold text-[#5d4025] hover:underline flex items-center gap-1 self-start cursor-pointer"
                  >
                    <span>Editar en Pág {page.pageNumber}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <p className="font-cormorant italic text-xs sm:text-sm text-[#382618] font-semibold">
                  Objetivo: {ex.objective}
                </p>

                {/* Answer Display */}
                <div className="p-3 bg-[#efe2c8] border border-[#120e0a]/40 font-old-standard text-xs sm:text-sm text-[#120e0a] whitespace-pre-wrap leading-relaxed shadow-inner">
                  {isFilled ? (
                    answer
                  ) : (
                    <span className="italic text-[#8b5e34]">
                      Aún no has escrito tu respuesta para este ejercicio. Dirígete a la página {page.pageNumber} para completarlo.
                    </span>
                  )}
                </div>

                <div className="text-[10px] font-mono flex items-center justify-between text-[#5d4025]">
                  <span>{ex.closurePrompt}</span>
                  {isFilled ? (
                    <span className="text-emerald-800 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Completado
                    </span>
                  ) : (
                    <span className="text-amber-800 italic">Pendiente</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#120e0a]/30 mt-4 flex items-center justify-between text-xs font-mono">
          <span className="text-[#5d4025]">
            3 Protocolos Autoadministrables de Integración
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#120e0a] text-[#efe2c8] font-playfair uppercase text-xs hover:bg-[#382618] transition-all cursor-pointer"
          >
            Cerrar Cuaderno
          </button>
        </div>

      </div>
    </div>
  );
};
