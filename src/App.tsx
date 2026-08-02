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
      
      {/* Newspaper Masthead Header (shown on cover mode only for web viewing) */}
      {viewMode === 'cover' && (
        <div className="no-print print:hidden">
          <NewspaperHeader onOpenRegisterModal={() => setViewMode('index')} />
        </div>
      )}

      {/* Main Document Content Area - Only Clean Page Format */}
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
            {displayAllPages ? (
              <>
                {/* 1. PORTADA / COVER SHEET */}
                <div id="page-cover" className="relative">
                  <EbookCover
                    onStartReading={() => handlePageChange(1)}
                    onOpenIndex={() => setViewMode('index')}
                  />
                </div>

                {/* 2. ÍNDICE DE CONTENIDOS / TABLE OF CONTENTS SHEET */}
                <div id="page-toc" className="relative">
                  <EbookTableOfContents
                    currentPageNumber={currentPageNumber}
                    onSelectPage={handlePageChange}
                    completedPages={readPages}
                  />
                </div>

                {/* 3. THE 25 BOOK PAGES */}
                {EBOOK_PAGES.map((page) => (
                  <div key={page.pageNumber} id={`page-${page.pageNumber}`} className="relative">
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
                ))}

                {/* 3. CONTRAPORTADA / BACK COVER SHEET */}
                <div id="page-backcover" className="relative">
                  <EbookBackCover
                    onReturnToCover={() => {
                      setViewMode('cover');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onOpenIndex={() => setViewMode('index')}
                    onOpenWorkbookManager={() => setIsWorkbookOpen(true)}
                  />
                </div>
              </>
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
