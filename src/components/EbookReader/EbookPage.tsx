import React from 'react';
import { EbookPageData, CarlitosCallout } from '../../types/ebook';
import { ChaptersMetaData, EBOOK_PAGES } from '../../data/ebookContent';
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

  const renderFormattedText = (text: string | undefined): React.ReactNode => {
    if (!text) return null;
    const parts = text.split(/(\*{1,2}[^*]+\*{1,2})/g);
    return parts.map((part, i) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        const cleanText = part.replace(/^\*{1,2}|\*{1,2}$/g, '');
        return (
          <strong key={i} className="font-bold text-[#120e0a]">
            {cleanText}
          </strong>
        );
      }
      return part;
    });
  };

  const renderCalloutBox = (callout: CarlitosCallout) => {
    const variant = callout.variant || 'carlitos';

    if (variant === 'left_callout' || callout.position === 'left') {
      return (
        <aside
          key={callout.id}
          className="sm:float-left sm:mr-5 sm:mb-2 sm:mt-1 sm:w-60 w-full p-3 bg-[#e8d9b8] border-2 border-[#120e0a] shadow-md relative rounded-xs text-xs z-10 clear-none font-sans"
        >
          <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-[#120e0a]/30">
            <CompassStarIcon className="w-3.5 h-3.5 text-[#5d4025] shrink-0" />
            <h3 className="font-playfair text-[11px] font-bold text-[#120e0a] uppercase tracking-wider">
              {callout.title || 'Anotación Clave'}
            </h3>
          </div>
          <p className="font-cormorant italic text-sm sm:text-base text-[#120e0a] leading-snug font-semibold">
            "{renderFormattedText(callout.text)}"
          </p>
        </aside>
      );
    }

    if (variant === 'historical_quote') {
      return (
        <aside key={callout.id} className="my-6 p-4 sm:p-6 bg-[#ebdcb8] border-l-4 border-r-2 border-y border-[#120e0a] shadow-md relative rounded-xs">
          <div className="flex items-center gap-3 mb-3 border-b border-[#120e0a]/20 pb-2">
            <BookOpen className="w-6 h-6 text-[#4a2e19] shrink-0" />
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5d4025] block">
                Fragmento de Archivo
              </span>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#120e0a] uppercase tracking-wider">
                {callout.title || 'Cita Histórica de C. G. Jung:'}
              </h3>
            </div>
          </div>
          <p className="font-cormorant italic text-lg sm:text-xl text-[#120e0a] leading-relaxed font-semibold">
            "{renderFormattedText(callout.text)}"
          </p>
          <div className="mt-3 pt-2 text-[10px] font-mono text-right text-[#4a2e19] uppercase border-t border-[#120e0a]/10">
            • C. G. Jung (Obras Completas / Archivo Histórico)
          </div>
        </aside>
      );
    }

    if (variant === 'marginalia') {
      return (
        <aside key={callout.id} className="my-6 p-4 sm:p-5 bg-[#d9c7a3] border-2 border-dashed border-[#4a2e19]/60 shadow-sm relative rounded-xs">
          <div className="flex items-center gap-3 mb-2 border-b border-[#4a2e19]/30 pb-1.5">
            <Layers className="w-5 h-5 text-[#4a2e19] shrink-0" />
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#4a2e19] block font-bold">
                Anotación de Cuaderno
              </span>
              <h3 className="font-playfair text-sm sm:text-base font-bold text-[#120e0a] uppercase tracking-wider">
                {callout.title || 'Nota Marginal de Archivo:'}
              </h3>
            </div>
          </div>
          <p className="font-old-standard text-sm sm:text-base text-[#120e0a] leading-relaxed italic">
            {renderFormattedText(callout.text)}
          </p>
          <div className="mt-2 text-[10px] font-mono text-right text-[#4a2e19]">
            • Manuscrito Liber Novus / Archivo Küsnacht
          </div>
        </aside>
      );
    }

    if (variant === 'glossary') {
      return (
        <aside
          key={callout.id}
          className="sm:float-right sm:ml-5 sm:mb-2 sm:mt-1 sm:w-52 w-full p-2.5 bg-[#e3d0aa] border border-[#120e0a] shadow-sm relative rounded-xs text-xs z-10 clear-none font-sans"
        >
          <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-[#120e0a]/30">
            <CompassStarIcon className="w-3.5 h-3.5 text-[#120e0a] shrink-0" />
            <h3 className="font-playfair text-[11px] font-bold text-[#120e0a] uppercase tracking-wider">
              {callout.title || 'Glosario'}
            </h3>
          </div>
          <p className="font-old-standard text-[11px] sm:text-xs text-[#120e0a] leading-snug">
            {renderFormattedText(callout.text)}
          </p>
        </aside>
      );
    }

    if (variant === 'alchemical') {
      return (
        <aside key={callout.id} className="my-6 p-5 sm:p-7 bg-[#382618] text-[#efe2c8] border-2 border-[#120e0a] shadow-xl relative rounded-xs">
          <div className="flex items-center gap-3 mb-3 border-b border-[#efe2c8]/20 pb-2">
            <GreekGoddessIcon className="w-7 h-7 text-[#dfceaa] shrink-0" />
            <div>
              <span className="font-signature text-lg text-[#dfceaa] block -mb-1">
                Mysterium Coniunctionis
              </span>
              <h3 className="font-playfair text-sm sm:text-base font-bold text-[#efe2c8] uppercase tracking-wider">
                {callout.title || 'Paralelo Hermético & Simbolismo:'}
              </h3>
            </div>
          </div>
          <p className="font-cormorant italic text-lg sm:text-xl text-[#f3e7d0] leading-relaxed">
            "{renderFormattedText(callout.text)}"
          </p>
        </aside>
      );
    }

    if (variant === 'context_note') {
      return (
        <aside key={callout.id} className="my-5 p-4 sm:p-5 bg-[#d2bf98]/70 border-l-4 border-[#5d4025] shadow-sm relative rounded-xs">
          <div className="flex items-center gap-2.5 mb-2 pb-1.5 border-b border-[#5d4025]/30">
            <HelpCircle className="w-5 h-5 text-[#5d4025] shrink-0" />
            <h3 className="font-playfair text-xs sm:text-sm font-bold text-[#120e0a] uppercase tracking-wider">
              {callout.title || 'Nota de Contexto Histórico:'}
            </h3>
          </div>
          <p className="font-old-standard text-xs sm:text-sm text-[#120e0a] leading-relaxed">
            {renderFormattedText(callout.text)}
          </p>
        </aside>
      );
    }

    // Default 'carlitos' variant
    return (
      <aside key={callout.id} className="my-6 p-5 sm:p-7 bg-[#e8d9b8] border-2 border-double border-[#4a2e19] shadow-lg relative rounded-xs">
        <div className="flex items-center gap-3 mb-3 border-b border-[#4a2e19]/30 pb-2">
          <MedallionBustIcon className="w-8 h-8 text-[#5d4025] shrink-0" />
          <div>
            <span className="font-signature text-xl text-[#5d4025] block -mb-1">
              Aparte Narrativo
            </span>
            <h3 className="font-playfair text-base sm:text-lg font-bold text-[#1a120b] uppercase tracking-wider">
              {callout.title || 'Carlitos dice:'}
            </h3>
          </div>
        </div>

        <p className="font-cormorant italic text-lg sm:text-xl text-[#1a120b] leading-relaxed font-semibold">
          "{renderFormattedText(callout.text)}"
        </p>

        <div className="mt-3 pt-2 text-[10px] font-mono text-right text-[#5d4025] uppercase">
          • C. G. Jung (Reflexión)
        </div>
      </aside>
    );
  };

  const isFloatedCallout = (c?: CarlitosCallout) =>
    !!c && (c.variant === 'glossary' || c.variant === 'left_callout' || c.position === 'left' || c.position === 'right');

  const chapterStartMeta = ChaptersMetaData.chapters.find(
    (c) => c.startPage === pageData.pageNumber
  );

  return (
    <article className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-4 sm:p-10 paper-card border-2 border-[#120e0a] rounded-sm shadow-2xl relative transition-all bg-[#dfceaa] print-page-sheet min-h-[1100px] sm:min-h-[1250px] flex flex-col justify-between">
      
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
          <div className="bg-[#120e0a] text-[#efe2c8] font-mono font-bold px-3 py-1 text-xs">
            Página {pageData.pageNumber} / {EBOOK_PAGES.length}
          </div>
        </div>
      </header>

      {/* Main Page Title & Subtitle */}
      <div className="text-center space-y-2 mb-8">
        {chapterStartMeta && (
          <div className="mb-4 text-center space-y-1.5 animate-fadeIn">
            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 bg-[#120e0a] text-[#efe2c8] border-2 border-[#5d4025] shadow-lg rounded-xs">
              <CompassStarIcon className="w-4 h-4 text-[#e3ceaa] shrink-0" />
              <span className="font-playfair font-black text-xs sm:text-sm uppercase tracking-[0.2em] text-[#e3ceaa]">
                {chapterStartMeta.chapterId === 0
                  ? '— INTRODUCCIÓN —'
                  : `— CAPÍTULO ${chapterStartMeta.chapterId} —`}
              </span>
              <CompassStarIcon className="w-4 h-4 text-[#e3ceaa] shrink-0" />
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#4a2e19] font-bold uppercase tracking-widest">
              {chapterStartMeta.title}
            </p>
          </div>
        )}

        <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-black text-[#120e0a] tracking-tight leading-tight uppercase ink-text">
          {pageData.pageTitle}
        </h1>
        {pageData.subtitle && (
          <p className="font-cormorant italic text-lg sm:text-2xl text-[#382618] max-w-2xl mx-auto font-semibold">
            {renderFormattedText(pageData.subtitle)}
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
              {renderFormattedText(term)}
            </span>
          ))}
        </div>
      )}

      {/* Main Content Body */}
      <div className={`space-y-6 ${selectedFontClass} ${selectedTextSizeClass} text-[#111111]`}>
        
        {/* Paragraphs with Drop-Cap on first paragraph & floated callouts distributed across the page */}
        {(() => {
          const hasCarlitosFloated = isFloatedCallout(pageData.carlitosCallout);
          const hasSecondaryFloated = isFloatedCallout(pageData.secondaryCallout);
          const hasBothFloated = hasCarlitosFloated && hasSecondaryFloated;

          let carlitosTargetIdx = -1;
          let secondaryTargetIdx = -1;

          if (pageData.paragraphs.length > 1) {
            if (hasBothFloated) {
              carlitosTargetIdx = Math.max(1, Math.floor(pageData.paragraphs.length / 3));
              secondaryTargetIdx = Math.max(carlitosTargetIdx + 1, pageData.paragraphs.length - 1);
            } else {
              const mid = Math.max(1, Math.floor(pageData.paragraphs.length / 2));
              if (hasCarlitosFloated) carlitosTargetIdx = mid;
              if (hasSecondaryFloated) secondaryTargetIdx = mid;
            }
          }

          return pageData.paragraphs.map((pText, idx) => (
            <React.Fragment key={idx}>
              {hasCarlitosFloated && idx === carlitosTargetIdx && renderCalloutBox(pageData.carlitosCallout!)}
              {hasSecondaryFloated && idx === secondaryTargetIdx && renderCalloutBox(pageData.secondaryCallout!)}
              <p className={`${idx === 0 ? 'drop-cap' : ''} text-justify leading-relaxed`}>
                {renderFormattedText(pText)}
              </p>
            </React.Fragment>
          ));
        })()}

        {/* Fallback for floated callouts if page has 1 or fewer paragraphs */}
        {pageData.paragraphs.length <= 1 && (
          <>
            {isFloatedCallout(pageData.carlitosCallout) && renderCalloutBox(pageData.carlitosCallout!)}
            {isFloatedCallout(pageData.secondaryCallout) && renderCalloutBox(pageData.secondaryCallout!)}
          </>
        )}

        {/* Historical Timeline / Notes Box for Biography (if present) */}
        {pageData.historicalNotes && pageData.historicalNotes.length > 0 && (
          <div className="my-6 p-4 bg-[#d0be97] border-l-4 border-[#120e0a] font-mono text-xs sm:text-sm text-[#120e0a] space-y-1.5 shadow-sm">
            <div className="font-bold uppercase tracking-widest text-[#4a2e19] mb-2 flex items-center gap-2">
              <span>Hitos Históricos Documentados</span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {pageData.historicalNotes.map((note, idx) => (
                <li key={idx}>{renderFormattedText(note)}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Non-floated Editorial Callout / Ornaments */}
        {pageData.carlitosCallout && !isFloatedCallout(pageData.carlitosCallout) && renderCalloutBox(pageData.carlitosCallout)}
        {pageData.secondaryCallout && !isFloatedCallout(pageData.secondaryCallout) && renderCalloutBox(pageData.secondaryCallout)}

        {/* CHAPTER 3: Archetypes Table Content */}
        {pageData.tableData && pageData.tableData.length > 0 && (
          <div className="my-8 overflow-x-auto border-2 border-[#120e0a] bg-[#efe2c8]">
            <table className="w-full text-left font-old-standard text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#1a120b] text-[#efe2c8] font-playfair uppercase tracking-wider text-xs border-b border-[#120e0a]">
                  <th className="p-3 border-r border-[#efe2c8]/20 w-1/4">Arquetipo</th>
                  <th className="p-3 border-r border-[#efe2c8]/20 w-1/3">Símbolos más Comunes</th>
                  <th className="p-3 w-5/12">Contracara / Distorsión</th>
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
                      {renderFormattedText(row.archetype)}
                    </td>
                    <td className="p-3 border-r border-[#120e0a]/30 align-top">
                      {renderFormattedText(row.symbols)}
                    </td>
                    <td className="p-3 align-top text-[#2b1d12]">
                      {renderFormattedText(row.distortion)}
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

            {/* Application Example / Warning Box */}
            <div className={`p-4 font-old-standard text-xs sm:text-sm text-[#120e0a] ${
              pageData.exerciseData.exampleLabel?.toLowerCase().includes('advertencia')
                ? 'bg-[#d8a892]/50 border-l-4 border-[#8b2626]'
                : 'bg-[#c9b28a]/60 border-l-4 border-[#5d4025]'
            }`}>
              <span className={`font-bold font-playfair uppercase tracking-wider block mb-1 ${
                pageData.exerciseData.exampleLabel?.toLowerCase().includes('advertencia')
                  ? 'text-[#8b2626]'
                  : 'text-[#4a2e19]'
              }`}>
                {pageData.exerciseData.exampleLabel || 'Ejemplo Práctico de Aplicación:'}
              </span>
              <p className="italic text-[#2b1d12]">
                {pageData.exerciseData.applicationExample}
              </p>
            </div>
          </div>
        )}

      </div>

      <OrnamentalDivider variant="double" className="my-8" />

      {/* Page Footer Navigation Bar */}
      <footer className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#5d4025]">
        <div>
          <span>HEROISMO COSMOGONICO • MATIAS PEREZ ROJAS</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-bold text-[#120e0a]">
            Pág {pageData.pageNumber} de {EBOOK_PAGES.length}
          </span>
        </div>
      </footer>

    </article>
  );
};
