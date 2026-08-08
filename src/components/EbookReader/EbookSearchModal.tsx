import React, { useState } from 'react';
import { EBOOK_PAGES } from '../../data/ebookContent';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { OrnamentalDivider } from '../OrnamentalDivider';

interface EbookSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (pageNumber: number) => void;
}

export const EbookSearchModal: React.FC<EbookSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const query = searchTerm.trim().toLowerCase();

  // Filter matching pages
  const results = query.length < 2
    ? []
    : EBOOK_PAGES.filter((page) => {
        const inTitle = page.pageTitle.toLowerCase().includes(query);
        const inSubtitle = page.subtitle?.toLowerCase().includes(query) || false;
        const inTerms = page.keyTerms?.some((t) => t.toLowerCase().includes(query)) || false;
        const inParagraphs = page.paragraphs.some((p) => p.toLowerCase().includes(query));
        const inCallout = page.carlitosCallout?.text.toLowerCase().includes(query) || false;
        const inTable = page.tableData?.some(
          (r) =>
            r.archetype.toLowerCase().includes(query) ||
            r.symbols.toLowerCase().includes(query) ||
            r.distortion.toLowerCase().includes(query)
        ) || false;

        return inTitle || inSubtitle || inTerms || inParagraphs || inCallout || inTable;
      });

  return (
    <div className="fixed inset-0 z-50 bg-[#120e0a]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#dfceaa] border-4 border-[#120e0a] w-full max-w-2xl p-4 sm:p-6 shadow-2xl relative paper-card max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#120e0a]/30">
          <div className="flex items-center gap-2 font-playfair font-black text-lg sm:text-xl text-[#120e0a] uppercase">
            <Search className="w-5 h-5 text-[#5d4025]" />
            <span>Búsqueda en las {EBOOK_PAGES.length} Páginas del E-book</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-[#120e0a] hover:text-[#efe2c8] transition-all cursor-pointer border border-[#120e0a]"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="my-4">
          <div className="relative">
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Escribe un término (ej: enantiodromía, sombra, sueño, Neumann)..."
              className="w-full pl-10 pr-4 py-3 bg-[#efe2c8] border-2 border-[#120e0a] font-old-standard text-sm text-[#120e0a] focus:outline-none focus:ring-2 focus:ring-[#5d4025] shadow-inner placeholder:text-[#120e0a]/50"
            />
            <Search className="w-5 h-5 text-[#5d4025] absolute left-3 top-3.5" />
          </div>
          <div className="text-[10px] font-mono text-[#5d4025] mt-1.5 flex justify-between">
            <span>Búsqueda integral en texto, tablas, citas y ejercicios</span>
            {query.length >= 2 && <span>{results.length} coincidencias encontradas</span>}
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {query.length < 2 ? (
            <div className="text-center py-10 font-cormorant italic text-base text-[#382618]">
              Ingresa al menos 2 caracteres para iniciar la búsqueda bibliográfica...
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 space-y-2">
              <p className="font-playfair font-bold text-base text-[#120e0a]">
                No se encontraron coincidencias para "{searchTerm}"
              </p>
              <p className="font-cormorant italic text-sm text-[#382618]">
                Intenta buscar términos técnicos como: inconsciente, arquetipo, proyección, individuación, persona, etc.
              </p>
            </div>
          ) : (
            results.map((page) => {
              // Extract snippet paragraph
              const matchedParagraph = page.paragraphs.find((p) =>
                p.toLowerCase().includes(query)
              );

              return (
                <div
                  key={page.pageNumber}
                  onClick={() => {
                    onSelectPage(page.pageNumber);
                    onClose();
                  }}
                  className="p-3.5 bg-[#e2d1b0] border border-[#120e0a] hover:bg-[#d8c29b] transition-all cursor-pointer space-y-1 group"
                >
                  <div className="flex items-center justify-between font-mono text-xs text-[#5d4025]">
                    <span className="font-bold bg-[#120e0a] text-[#efe2c8] px-2 py-0.5">
                      Página {page.pageNumber}
                    </span>
                    <span className="uppercase text-[10px]">{page.sectionTitle}</span>
                  </div>

                  <h3 className="font-playfair font-bold text-base text-[#120e0a] group-hover:text-[#4a2e19] transition-colors">
                    {page.pageTitle}
                  </h3>

                  {matchedParagraph && (
                    <p className="font-old-standard text-xs text-[#2b1d12] line-clamp-2 leading-relaxed italic">
                      "{matchedParagraph}"
                    </p>
                  )}

                  <div className="flex items-center justify-end gap-1 text-[11px] font-mono font-bold text-[#4a2e19] pt-1">
                    <span>Ir a esta página</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-[#120e0a]/30 mt-3 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#120e0a] text-[#efe2c8] font-playfair text-xs uppercase hover:bg-[#382618] transition-all cursor-pointer"
          >
            Cerrar Búsqueda
          </button>
        </div>

      </div>
    </div>
  );
};
