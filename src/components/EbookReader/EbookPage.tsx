import React from 'react';
import { EbookPageData } from '../../types/ebook';
import { OrnamentalDivider } from '../OrnamentalDivider';
import { MedallionBustIcon, DoorwayShadowIcon, CompassStarIcon, GreekGoddessIcon } from '../VintageSvgIcons';
import { MessageSquare, Check, Sparkles, AlertCircle, BookOpen, Layers, Edit3, HelpCircle } from 'lucide-react';

interface EbookPageProps {
  pageData: EbookPageData;
  fontSize?: 'sm' | 'md' | 'lg';
  fontFamily?: 'playfair' | 'baskerville' | 'cormorant' | 'old-standard';
  userWorkbookState?: Record<string, string>;
  onSaveWorkbookEntry?: (key: string, value: string) => void;
  onNavigatePage?: (pageNumber: number) => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (pageNumber: number) => void;
}

export const EbookPage: React.FC<EbookPageProps> = ({
  pageData,
  fontSize = 'md',
  fontFamily = 'old-standard',
  userWorkbookState = {},
  onSaveWorkbookEntry,
  onNavigatePage,
  isBookmarked = false,
  onToggleBookmark,
}) => {
  const fontClassMap = {
    'playfair': 'font-playfair',
    'baskerville': 'font-baskerville',
    'cormorant': 'font-cormorant',
    'old-standard': 'font-old-standard',
  };

  const textSizeMap = {
    'sm': 'text-sm sm:text-base leading-relaxed',
    'md': 'text-base sm:text-lg leading-relaxed sm:leading-loose',
    'lg': 'text-lg sm:text-xl leading-relaxed sm:leading-loose',
  };

  const selectedFontClass = fontClassMap[fontFamily] || 'font-old-standard';
  const selectedTextSizeClass = textSizeMap[fontSize] || textSizeMap['md'];

  return (
    <article className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-4 sm:p-10 paper-card border-2 border-[#120e0a] rounded-sm shadow-2xl relative transition-all bg-[#dfceaa] print-page-sheet">
      
      {/* Top Header & Page Header Bar */}
      <header className="border-b border-[#120e0a]/40 pb-3 mb-6 flex items-center justify-between gap-4 font-mono text-xs text-[#5d4025]">
        <div className="flex items-center gap-2">
          <span className="font-bold uppercase tracking-wider text-[#120e0a]">
            {pageData.sectionTitle}
          </span>
          <span className="text-[#120e0a]/40">•</span>
          <span className="italic hidden sm:inline text-[#4a2e19]">
            Mi amigo Carlitos
          </span>
        </div>

        <div className="flex items-center gap-3">
          {onToggleBookmark && (
            <button
              onClick={() => onToggleBookmark(pageData.pageNumber)}
              className={`text-xs px-2 py-1 flex items-center gap-1 border transition-all cursor-pointer print:hidden ${
                isBookmarked
                  ? 'bg-[#5d4025] text-[#efe2c8] border-[#5d4025]'
                  : 'bg-transparent text-[#120e0a] border-[#120e0a]/30 hover:border-[#120e0a]'
              }`}
              title={isBookmarked ? 'Quitar marcador' : 'Guardar marcador'}
            >
              <span>{isBookmarked ? '★ Marcada' : '☆ Marcar'}</span>
            </button>
          )}

          <div className="bg-[#120e0a] text-[#efe2c8] font-mono font-bold px-3 py-1 text-xs">
            Página {pageData.pageNumber} / 25
          </div>
        </div>
      </header>

      {/* Main Page Title & Subtitle */}
      <div className="text-center space-y-2 mb-8">
        <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-black text-[#120e0a] tracking-tight leading-tight uppercase ink-text">
          {pageData.pageTitle}
        </h1>
        {pageData.subtitle && (
          <p className="font-cormorant italic text-lg sm:text-2xl text-[#382618] max-w-2xl mx-auto font-semibold">
            {pageData.subtitle}
          </p>
        )}
        <OrnamentalDivider variant="flourish" className="my-3" />
      </div>

      {/* Key Terms Badges (if present) */}
      {pageData.keyTerms && pageData.keyTerms.length > 0 && (
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 border-y border-[#120e0a]/20 py-2 bg-[#d8c29b]/40">
          <span className="text-[10px] font-mono uppercase text-[#5d4025] font-bold mr-1">
            Términos Clave:
          </span>
          {pageData.keyTerms.map((term, i) => (
            <span
              key={i}
              className="text-[11px] font-mono bg-[#120e0a]/10 border border-[#120e0a]/20 text-[#120e0a] px-2 py-0.5"
            >
              {term}
            </span>
          ))}
        </div>
      )}

      {/* Main Content Body */}
      <div className={`space-y-6 ${selectedFontClass} ${selectedTextSizeClass} text-[#111111]`}>
        
        {/* Paragraphs with Drop-Cap on first paragraph */}
        {pageData.paragraphs.map((pText, idx) => (
          <p
            key={idx}
            className={`${idx === 0 ? 'drop-cap' : ''} text-justify leading-relaxed`}
          >
            {pText}
          </p>
        ))}

        {/* Historical Timeline / Notes Box for Biography (if present) */}
        {pageData.historicalNotes && pageData.historicalNotes.length > 0 && (
          <div className="my-6 p-4 bg-[#d0be97] border-l-4 border-[#120e0a] font-mono text-xs sm:text-sm text-[#120e0a] space-y-1.5 shadow-sm">
            <div className="font-bold uppercase tracking-widest text-[#4a2e19] mb-2 flex items-center gap-2">
              <span>Hitos Históricos Documentados</span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {pageData.historicalNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Carlitos Te Diría Callout Box */}
        {pageData.carlitosCallout && (
          <aside className="my-8 p-5 sm:p-7 bg-[#e8d9b8] border-2 border-double border-[#4a2e19] shadow-lg relative rounded-xs">
            <div className="flex items-center gap-3 mb-3 border-b border-[#4a2e19]/30 pb-2">
              <MedallionBustIcon className="w-8 h-8 text-[#5d4025] shrink-0" />
              <div>
                <span className="font-signature text-xl text-[#5d4025] block -mb-1">
                  Aparte Narrativo
                </span>
                <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1a120b] uppercase tracking-wider">
                  {pageData.carlitosCallout.title || 'Carlitos te diría:'}
                </h3>
              </div>
            </div>

            <p className="font-cormorant italic text-lg sm:text-xl text-[#1a120b] leading-relaxed font-semibold">
              "{pageData.carlitosCallout.text}"
            </p>

            <div className="mt-3 pt-2 text-[10px] font-mono text-right text-[#5d4025] uppercase">
              • C. G. Jung (Reflexión personal)
            </div>
          </aside>
        )}

        {/* CHAPTER 3: Archetypes Table Content */}
        {pageData.tableData && pageData.tableData.length > 0 && (
          <div className="my-8 overflow-x-auto border-2 border-[#120e0a] bg-[#efe2c8]">
            <table className="w-full text-left font-old-standard text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#1a120b] text-[#efe2c8] font-playfair uppercase tracking-wider text-xs border-b border-[#120e0a]">
                  <th className="p-3 border-r border-[#efe2c8]/20 w-1/4">Arquetipo</th>
                  <th className="p-3 border-r border-[#efe2c8]/20 w-1/3">Símbolos más Comunes</th>
                  <th className="p-3 border-r border-[#efe2c8]/20 w-1/3">Contracara / Distorsión</th>
                  <th className="p-3 text-center">Origen</th>
                </tr>
              </thead>
              <tbody>
                {pageData.tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-[#120e0a]/30 ${
                      idx % 2 === 0 ? 'bg-[#d8c29b]/40' : 'bg-[#e2d1b0]/40'
                    }`}
                  >
                    <td className="p-3 font-bold font-playfair text-[#120e0a] border-r border-[#120e0a]/30 align-top">
                      {row.archetype}
                    </td>
                    <td className="p-3 border-r border-[#120e0a]/30 align-top">
                      {row.symbols}
                    </td>
                    <td className="p-3 border-r border-[#120e0a]/30 align-top text-[#2b1d12]">
                      {row.distortion}
                    </td>
                    <td className="p-3 text-center align-top font-mono text-[10px]">
                      <span
                        className={`inline-block px-2 py-0.5 font-bold ${
                          row.origin === 'Jung explícito'
                            ? 'bg-[#5d4025] text-[#efe2c8]'
                            : 'bg-[#120e0a]/10 text-[#120e0a]'
                        }`}
                      >
                        {row.origin}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CHAPTER 5: Interactive Practical Exercise Content */}
        {pageData.exerciseData && (
          <div className="my-8 p-5 sm:p-8 bg-[#e3d1ae] border-2 border-[#120e0a] space-y-6 shadow-md">
            
            {/* Exercise Header */}
            <div className="border-b-2 border-[#120e0a] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#5d4025] font-bold mb-1">
                <Edit3 className="w-4 h-4" />
                <span>Protocolo de Ejercicio Autoadministrable</span>
              </div>
              <h2 className="font-playfair text-xl sm:text-3xl font-extrabold text-[#120e0a] uppercase">
                {pageData.exerciseData.title}
              </h2>
              <p className="font-cormorant italic text-base sm:text-lg text-[#382618] mt-1 font-semibold">
                Objetivo: {pageData.exerciseData.objective}
              </p>
            </div>

            {/* Exercise Numbered Steps */}
            <div className="space-y-4">
              <h3 className="font-playfair font-bold text-sm sm:text-base text-[#120e0a] uppercase tracking-wider">
                Pasos de Ejecución:
              </h3>
              <div className="grid grid-cols-1 gap-3 font-old-standard text-xs sm:text-sm">
                {pageData.exerciseData.steps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-3 bg-[#d8c29b] border border-[#120e0a]/40 flex items-start gap-3"
                  >
                    <span className="font-playfair font-black text-lg text-[#efe2c8] bg-[#120e0a] w-7 h-7 flex items-center justify-center shrink-0 rounded-xs">
                      {step.stepNumber}
                    </span>
                    <div>
                      <h4 className="font-playfair font-bold text-[#120e0a] text-sm">
                        {step.title}
                      </h4>
                      <p className="text-[#2b1d12] mt-0.5 leading-relaxed">
                        {step.instruction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Example Box */}
            <div className="p-4 bg-[#c9b28a]/60 border-l-4 border-[#5d4025] font-old-standard text-xs sm:text-sm text-[#120e0a]">
              <span className="font-bold font-playfair uppercase tracking-wider text-[#4a2e19] block mb-1">
                Ejemplo Práctico de Aplicación:
              </span>
              <p className="italic text-[#2b1d12]">
                {pageData.exerciseData.applicationExample}
              </p>
            </div>

            {/* Interactive Workbook Textarea Field & PDF Static Output */}
            <div className="pt-4 border-t border-[#120e0a]/40 space-y-3">
              <label className="block font-playfair font-bold text-sm sm:text-base text-[#120e0a]">
                {pageData.exerciseData.closurePrompt}
              </label>
              
              {/* Screen Mode: Interactive Textarea */}
              <textarea
                value={userWorkbookState[pageData.exerciseData.inputFieldKey] || ''}
                onChange={(e) => {
                  if (onSaveWorkbookEntry && pageData.exerciseData) {
                    onSaveWorkbookEntry(pageData.exerciseData.inputFieldKey, e.target.value);
                  }
                }}
                placeholder={pageData.exerciseData.inputPlaceholder}
                rows={5}
                className="w-full p-4 bg-[#efe2c8] border-2 border-[#120e0a] font-old-standard text-xs sm:text-sm text-[#120e0a] focus:outline-none focus:ring-2 focus:ring-[#5d4025] shadow-inner leading-relaxed resize-y placeholder:text-[#120e0a]/40 print:hidden"
              />

              {/* Print / PDF Mode: Static Document Text Block */}
              {userWorkbookState[pageData.exerciseData.inputFieldKey] ? (
                <div className="hidden print:block p-4 bg-[#efe2c8] border-2 border-[#120e0a] font-old-standard text-xs sm:text-sm text-[#120e0a] leading-relaxed whitespace-pre-wrap">
                  <span className="font-mono text-[10px] uppercase text-[#5d4025] font-bold block mb-1">
                    • Registro Personal del Lector:
                  </span>
                  {userWorkbookState[pageData.exerciseData.inputFieldKey]}
                </div>
              ) : (
                <div className="hidden print:block p-4 bg-[#efe2c8] border-2 border-[#120e0a] font-mono text-xs text-[#5d4025] space-y-3">
                  <p className="font-bold uppercase text-[10px] tracking-wider">
                    • Espacio Reservado para Anotaciones y Respuestas Reflexivas:
                  </p>
                  <div className="border-b border-[#120e0a]/30 h-5" />
                  <div className="border-b border-[#120e0a]/30 h-5" />
                  <div className="border-b border-[#120e0a]/30 h-5" />
                  <div className="border-b border-[#120e0a]/30 h-5" />
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[#5d4025] print:hidden">
                <span>✓ Respuestas guardadas automáticamente en tu sesión</span>
                {userWorkbookState[pageData.exerciseData.inputFieldKey] ? (
                  <span className="text-emerald-800 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Ejercicio Completado ({userWorkbookState[pageData.exerciseData.inputFieldKey].length} caracteres)
                  </span>
                ) : (
                  <span className="italic text-[#8b5e34]">
                    Escribe tu respuesta para completar este ejercicio
                  </span>
                )}
              </div>
            </div>

          </div>
        )}

      </div>

      <OrnamentalDivider variant="double" className="my-8" />

      {/* Page Footer Navigation Bar */}
      <footer className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#5d4025]">
        <div>
          <span>DOCUMENTO OFICIAL DE ESTUDIO • C. G. JUNG</span>
        </div>

        <div className="flex items-center gap-3">
          {pageData.pageNumber > 1 && onNavigatePage && (
            <button
              onClick={() => onNavigatePage(pageData.pageNumber - 1)}
              className="px-3 py-1 bg-[#d8c29b] text-[#120e0a] border border-[#120e0a] hover:bg-[#c9b28a] transition-all cursor-pointer print:hidden"
            >
              ← Pág {pageData.pageNumber - 1}
            </button>
          )}

          <span className="font-bold text-[#120e0a]">
            Pág {pageData.pageNumber} de 25
          </span>

          {pageData.pageNumber < 25 && onNavigatePage && (
            <button
              onClick={() => onNavigatePage(pageData.pageNumber + 1)}
              className="px-3 py-1 bg-[#120e0a] text-[#efe2c8] hover:bg-[#382618] transition-all cursor-pointer print:hidden"
            >
              Pág {pageData.pageNumber + 1} →
            </button>
          )}
        </div>
      </footer>

    </article>
  );
};
