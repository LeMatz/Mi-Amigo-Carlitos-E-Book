import React, { useState, useEffect } from 'react';
import { EBOOK_PAGES } from './data/ebookContent';
import { EbookCover } from './components/EbookReader/EbookCover';
import { EbookTableOfContents } from './components/EbookReader/EbookTableOfContents';
import { EbookPage } from './components/EbookReader/EbookPage';
import { EbookBackCover } from './components/EbookReader/EbookBackCover';
import { EbookSearchModal } from './components/EbookReader/EbookSearchModal';
import { WorkbookManagerModal } from './components/EbookReader/WorkbookManagerModal';
import { CarlitosAiModal } from './components/EbookReader/CarlitosAiModal';
import { NewspaperHeader } from './components/NewspaperHeader';
import { Printer, BookOpen, Layers, Search, Edit3, Sparkles, List, ArrowUp } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'cover' | 'reading' | 'index' | 'backcover'>('reading');
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [displayAllPages, setDisplayAllPages] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [fontFamily, setFontFamily] = useState<'playfair' | 'baskerville' | 'cormorant' | 'old-standard'>('old-standard');

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWorkbookOpen, setIsWorkbookOpen] = useState(false);
  const [isCarlitosAiOpen, setIsCarlitosAiOpen] = useState(false);

  // Persistence: Bookmarks & Workbook
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('ebook_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [userWorkbookState, setUserWorkbookState] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('ebook_workbook_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [readPages, setReadPages] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('ebook_read_pages');
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  // Save Bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('ebook_bookmarks', JSON.stringify(bookmarks));
    } catch {}
  }, [bookmarks]);

  // Save Workbook
  useEffect(() => {
    try {
      localStorage.setItem('ebook_workbook_answers', JSON.stringify(userWorkbookState));
    } catch {}
  }, [userWorkbookState]);

  // Save Read Pages
  useEffect(() => {
    if (viewMode === 'reading' && !readPages.includes(currentPageNumber)) {
      const updated = [...readPages, currentPageNumber];
      setReadPages(updated);
      try {
        localStorage.setItem('ebook_read_pages', JSON.stringify(updated));
      } catch {}
    }
  }, [currentPageNumber, viewMode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (viewMode === 'reading' && !displayAllPages) {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          if (currentPageNumber < 25) {
            setCurrentPageNumber((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setViewMode('backcover');
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          if (currentPageNumber > 1) {
            setCurrentPageNumber((prev) => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            setViewMode('cover');
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, currentPageNumber, displayAllPages]);

  const handlePageChange = (newPageNumber: number) => {
    if (newPageNumber >= 1 && newPageNumber <= 25) {
      setCurrentPageNumber(newPageNumber);
      setViewMode('reading');
      
      if (displayAllPages) {
        const el = document.getElementById(`page-${newPageNumber}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleBookmark = (pageNumber?: number) => {
    const target = pageNumber || currentPageNumber;
    setBookmarks((prev) =>
      prev.includes(target) ? prev.filter((p) => p !== target) : [...prev, target]
    );
  };

  const handleSaveWorkbookEntry = (key: string, value: string) => {
    setUserWorkbookState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const currentPageData = EBOOK_PAGES.find((p) => p.pageNumber === currentPageNumber) || EBOOK_PAGES[0];

  const handleExportPdf = () => {
    setDisplayAllPages(true);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div className="min-h-screen newspaper-bg text-[#111111] font-old-standard flex flex-col justify-between selection:bg-[#5d4025] selection:text-[#efe2c8] overflow-x-hidden">
      
      {/* Newspaper Masthead Header (shown on cover mode only) */}
      {viewMode === 'cover' && (
        <NewspaperHeader onOpenRegisterModal={() => setViewMode('index')} />
      )}

      {/* Main Document Content Area - Only Page Format */}
      <main className="flex-1 px-2 sm:px-4 py-4 max-w-7xl mx-auto w-full">
        
        {viewMode === 'cover' && (
          <EbookCover
            onStartReading={() => handlePageChange(1)}
            onOpenIndex={() => setViewMode('index')}
          />
        )}

        {viewMode === 'index' && (
          <EbookTableOfContents
            currentPageNumber={currentPageNumber}
            onSelectPage={handlePageChange}
            completedPages={readPages}
          />
        )}

        {viewMode === 'reading' && (
          <div className="space-y-10 sm:space-y-16 py-2">
            
            {/* View Mode Banner / PDF Info */}
            <div className="bg-[#120e0a] text-[#efe2c8] p-3 border-2 border-[#120e0a] flex flex-wrap items-center justify-between gap-3 font-mono text-xs no-print print:hidden shadow-lg">
              <div className="flex items-center gap-2">
                <span className="bg-[#efe2c8] text-[#120e0a] font-bold px-2 py-0.5 uppercase">
                  Formato Documento PDF
                </span>
                <span className="hidden sm:inline">
                  {displayAllPages ? 'Mostrando las 25 páginas separadas en pliegos' : `Mostrando Página ${currentPageNumber} de 25`}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDisplayAllPages(!displayAllPages)}
                  className="px-3 py-1 bg-[#efe2c8] text-[#120e0a] font-playfair font-bold uppercase hover:bg-[#d8c29b] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{displayAllPages ? 'Ver Página Individual' : 'Ver Todas las 25 Páginas'}</span>
                </button>

                <button
                  onClick={handleExportPdf}
                  className="px-3 py-1 bg-[#5d4025] text-[#efe2c8] font-playfair font-bold uppercase hover:bg-[#4a2e19] transition-all cursor-pointer flex items-center gap-1.5 border border-[#efe2c8]/30"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Exportar PDF / Imprimir</span>
                </button>
              </div>
            </div>

            {/* Separated Pages rendering */}
            {displayAllPages ? (
              EBOOK_PAGES.map((page) => (
                <div key={page.pageNumber} id={`page-${page.pageNumber}`} className="relative">
                  {/* Page Break Visual Separator Bar (hidden in PDF output) */}
                  {page.pageNumber > 1 && (
                    <div className="text-center font-mono text-[11px] text-[#5d4025] my-6 uppercase tracking-widest no-print print:hidden flex items-center justify-center gap-3">
                      <span className="h-[1px] bg-[#5d4025]/40 flex-1 max-w-xs"></span>
                      <span className="bg-[#e8d7b5] border border-[#120e0a]/30 px-3 py-1 font-bold">
                        ─ Separador de Pliego • Página {page.pageNumber} de 25 ─
                      </span>
                      <span className="h-[1px] bg-[#5d4025]/40 flex-1 max-w-xs"></span>
                    </div>
                  )}

                  <EbookPage
                    pageData={page}
                    fontSize={fontSize}
                    fontFamily={fontFamily}
                    userWorkbookState={userWorkbookState}
                    onSaveWorkbookEntry={handleSaveWorkbookEntry}
                    onNavigatePage={handlePageChange}
                    isBookmarked={bookmarks.includes(page.pageNumber)}
                    onToggleBookmark={() => handleToggleBookmark(page.pageNumber)}
                  />
                </div>
              ))
            ) : (
              <EbookPage
                pageData={currentPageData}
                fontSize={fontSize}
                fontFamily={fontFamily}
                userWorkbookState={userWorkbookState}
                onSaveWorkbookEntry={handleSaveWorkbookEntry}
                onNavigatePage={handlePageChange}
                isBookmarked={bookmarks.includes(currentPageNumber)}
                onToggleBookmark={() => handleToggleBookmark(currentPageNumber)}
              />
            )}
          </div>
        )}

        {viewMode === 'backcover' && (
          <EbookBackCover
            onReturnToCover={() => setViewMode('cover')}
            onOpenIndex={() => setViewMode('index')}
            onOpenWorkbookManager={() => setIsWorkbookOpen(true)}
          />
        )}

      </main>

      {/* Floating Minimal Quick Controls Bar (Hidden during PDF print) */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 no-print print:hidden">
        <button
          onClick={handleExportPdf}
          className="p-3 bg-[#120e0a] text-[#efe2c8] border-2 border-[#efe2c8] shadow-2xl hover:bg-[#382618] transition-all cursor-pointer flex items-center gap-2 font-playfair text-xs uppercase font-bold"
          title="Exportar a PDF / Imprimir"
        >
          <Printer className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">Exportar PDF</span>
        </button>

        <button
          onClick={() => setViewMode('index')}
          className="p-3 bg-[#d8c29b] text-[#120e0a] border-2 border-[#120e0a] shadow-xl hover:bg-[#c9b28a] transition-all cursor-pointer"
          title="Índice de Contenidos"
        >
          <List className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsSearchOpen(true)}
          className="p-3 bg-[#d8c29b] text-[#120e0a] border-2 border-[#120e0a] shadow-xl hover:bg-[#c9b28a] transition-all cursor-pointer"
          title="Buscar término"
        >
          <Search className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsWorkbookOpen(true)}
          className="p-3 bg-[#d8c29b] text-[#120e0a] border-2 border-[#120e0a] shadow-xl hover:bg-[#c9b28a] transition-all cursor-pointer"
          title="Cuaderno de Ejercicios"
        >
          <Edit3 className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsCarlitosAiOpen(true)}
          className="p-3 bg-[#5d4025] text-[#efe2c8] border-2 border-[#120e0a] shadow-xl hover:bg-[#4a2e19] transition-all cursor-pointer"
          title="Consultar a Carlitos (AI)"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-[#120e0a] text-[#efe2c8] border-2 border-[#120e0a] shadow-xl hover:bg-[#382618] transition-all cursor-pointer"
          title="Ir arriba"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* MODALS */}
      <EbookSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPage={handlePageChange}
      />

      <WorkbookManagerModal
        isOpen={isWorkbookOpen}
        onClose={() => setIsWorkbookOpen(false)}
        userWorkbookState={userWorkbookState}
        onNavigateToExercisePage={handlePageChange}
      />

      <CarlitosAiModal
        isOpen={isCarlitosAiOpen}
        onClose={() => setIsCarlitosAiOpen(false)}
        currentPageTitle={currentPageData.pageTitle}
        currentPageNumber={currentPageNumber}
      />

    </div>
  );
}
