import React from 'react';
import { ChaptersMetaData, EBOOK_PAGES } from '../../data/ebookContent';
import { OrnamentalDivider } from '../OrnamentalDivider';
import { BookOpen, Compass, CheckCircle2, Bookmark, ArrowRight, FileText, Sparkles } from 'lucide-react';

interface EbookTableOfContentsProps {
  currentPageNumber: number;
  onSelectPage: (pageNumber: number) => void;
  onClose?: () => void;
  completedPages?: number[];
}

export const EbookTableOfContents: React.FC<EbookTableOfContentsProps> = ({
  currentPageNumber,
  onSelectPage,
  onClose,
  completedPages = [],
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-4 sm:p-8 paper-card border-2 border-[#120e0a] rounded-sm shadow-xl">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-6">
        <span className="text-xs font-mono tracking-widest text-[#5d4025] uppercase">
          Estructura General del Documento
        </span>
        <h2 className="font-playfair text-2xl sm:text-4xl font-extrabold text-[#120e0a] uppercase tracking-wide ink-text">
          Índice Interactivo de Contenidos
        </h2>
        <p className="font-cormorant italic text-sm sm:text-base text-[#2b1d12]">
          25 Páginas de Contenido Riguroso + Cuaderno de Ejercicios
        </p>
        <OrnamentalDivider variant="flourish" className="my-2" />
      </div>

      {/* Chapters Grid */}
      <div className="space-y-6">
        {ChaptersMetaData.chapters.map((chapter) => {
          const chapterPages = EBOOK_PAGES.filter(
            (p) => p.pageNumber >= chapter.startPage && p.pageNumber <= chapter.endPage
          );

          return (
            <div
              key={chapter.chapterId}
              className="bg-[#e2d1b0]/60 p-4 sm:p-5 border border-[#120e0a] relative hover:bg-[#decba8] transition-all"
            >
              {/* Chapter Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#120e0a]/40">
                <div>
                  <div className="text-xs font-mono font-bold text-[#5d4025] tracking-widest uppercase">
                    Páginas {chapter.startPage} – {chapter.endPage}
                  </div>
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#120e0a]">
                    {chapter.title}
                  </h3>
                  <p className="font-cormorant italic text-xs sm:text-sm text-[#382618]">
                    {chapter.subtitle}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-[#1a120b] text-[#efe2c8] px-2 py-1 uppercase rounded-xs">
                    {chapter.endPage - chapter.startPage + 1} Páginas
                  </span>
                </div>
              </div>

              {/* Pages Grid under this Chapter */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
                {chapterPages.map((page) => {
                  const isCurrent = page.pageNumber === currentPageNumber;
                  const isCompleted = completedPages.includes(page.pageNumber);

                  return (
                    <button
                      key={page.pageNumber}
                      onClick={() => {
                        onSelectPage(page.pageNumber);
                        if (onClose) onClose();
                      }}
                      className={`text-left p-2.5 text-xs font-old-standard flex items-start justify-between border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-[#1a120b] text-[#efe2c8] border-[#1a120b] font-bold shadow-md'
                          : 'bg-[#d8c29b]/50 hover:bg-[#d8c29b] text-[#120e0a] border-[#120e0a]/30'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`font-mono font-bold text-[10px] px-1.5 py-0.5 ${
                              isCurrent ? 'bg-[#5d4025] text-[#efe2c8]' : 'bg-[#120e0a]/10 text-[#120e0a]'
                            }`}
                          >
                            Pág {page.pageNumber}
                          </span>
                          {isCompleted && (
                            <CheckCircle2 className="w-3 h-3 text-emerald-700" title="Página leída" />
                          )}
                        </div>
                        <div className="font-playfair font-semibold text-xs leading-snug line-clamp-1">
                          {page.pageTitle}
                        </div>
                        <div className={`text-[10px] italic line-clamp-1 ${isCurrent ? 'text-[#dfceaa]' : 'text-[#4a2e19]'}`}>
                          {page.subtitle}
                        </div>
                      </div>

                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 mt-1 transition-transform ${
                          isCurrent ? 'text-[#dfceaa] translate-x-1' : 'opacity-40'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <OrnamentalDivider variant="double" className="my-6" />

      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#4a2e19]">
        <div>
          <span>Total: 25 Páginas de Contenido Completo</span>
        </div>
        <button
          onClick={() => onSelectPage(1)}
          className="px-4 py-2 bg-[#120e0a] text-[#efe2c8] font-playfair font-bold text-xs uppercase hover:bg-[#382618] transition-all flex items-center gap-2 cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          Ir a Página 1
        </button>
      </div>

    </div>
  );
};
