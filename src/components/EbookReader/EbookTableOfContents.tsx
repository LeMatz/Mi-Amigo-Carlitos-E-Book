import React from 'react';
import { ChaptersMetaData, EBOOK_PAGES } from '../../data/ebookContent';
import { OrnamentalDivider } from '../OrnamentalDivider';

interface EbookTableOfContentsProps {
  currentPageNumber?: number;
  onSelectPage?: (pageNumber: number) => void;
  onClose?: () => void;
  completedPages?: number[];
}

export const EbookTableOfContents: React.FC<EbookTableOfContentsProps> = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-4 sm:p-8 paper-card border-2 border-[#120e0a] rounded-sm shadow-2xl print-page-sheet min-h-[1100px] sm:min-h-[1250px] flex flex-col justify-between bg-[#dfceaa]">
      <div className="border-4 border-double border-[#120e0a] p-4 sm:p-6 relative bg-[#e3d2b0]/50 min-h-[1020px] sm:min-h-[1170px] flex-1 flex flex-col justify-between">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-6">
        <span className="text-xs font-mono tracking-widest text-[#5d4025] uppercase">
          Estructura General del Documento
        </span>
        <h2 className="font-playfair text-2xl sm:text-4xl font-extrabold text-[#120e0a] uppercase tracking-wide ink-text">
          Índice de Contenidos
        </h2>
        <p className="font-cormorant italic text-sm sm:text-base text-[#2b1d12]">
          25 Páginas de Contenido Riguroso + Cuaderno de Ejercicios
        </p>
        <OrnamentalDivider variant="flourish" className="my-2" />
      </div>

      {/* Chapters Grid */}
      <div className="space-y-5">
        {ChaptersMetaData.chapters.map((chapter) => {
          const chapterPages = EBOOK_PAGES.filter(
            (p) => p.pageNumber >= chapter.startPage && p.pageNumber <= chapter.endPage
          );

          return (
            <div
              key={chapter.chapterId}
              className="bg-[#e2d1b0]/60 p-4 sm:p-5 border border-[#120e0a] relative"
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
                  return (
                    <div
                      key={page.pageNumber}
                      className="text-left p-2.5 text-xs font-old-standard flex flex-col justify-between border bg-[#d8c29b]/40 border-[#120e0a]/30 rounded-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="font-mono font-bold text-[10px] px-1.5 py-0.5 bg-[#120e0a]/10 text-[#120e0a]">
                            Pág {page.pageNumber}
                          </span>
                        </div>
                        <div className="font-playfair font-semibold text-xs leading-snug text-[#120e0a]">
                          {page.pageTitle}
                        </div>
                        <div className="text-[10px] italic text-[#4a2e19] line-clamp-1">
                          {page.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <OrnamentalDivider variant="double" className="my-5" />

      {/* Footer Meta Info */}
      <div className="pt-2 border-t border-[#120e0a]/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-[#5d4025]">
        <span>EDICIÓN 2026 • REGISTRO DE PÁGINAS (1 A 25)</span>
        <span>TEXTO INTEGRAL Y GUÍA DE AUTOEXPLORACIÓN</span>
      </div>

      </div>
    </div>
  );
};
