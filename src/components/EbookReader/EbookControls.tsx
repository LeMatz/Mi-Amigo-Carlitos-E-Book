import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Search,
  Type,
  Bookmark,
  Edit3,
  MessageSquare,
  Sparkles,
  Grid,
  Menu,
  X,
} from 'lucide-react';

interface EbookControlsProps {
  currentPageNumber: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  onOpenIndex: () => void;
  onOpenSearch: () => void;
  onOpenWorkbook: () => void;
  onOpenCarlitosAi: () => void;
  fontSize: 'sm' | 'md' | 'lg';
  onChangeFontSize: (size: 'sm' | 'md' | 'lg') => void;
  fontFamily: 'playfair' | 'baskerville' | 'cormorant' | 'old-standard';
  onChangeFontFamily: (font: 'playfair' | 'baskerville' | 'cormorant' | 'old-standard') => void;
  viewMode: 'cover' | 'reading' | 'index' | 'backcover';
  onChangeViewMode: (mode: 'cover' | 'reading' | 'index' | 'backcover') => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  bookmarksCount: number;
  completedExercisesCount: number;
}

export const EbookControls: React.FC<EbookControlsProps> = ({
  currentPageNumber,
  totalPages,
  onPageChange,
  onOpenIndex,
  onOpenSearch,
  onOpenWorkbook,
  onOpenCarlitosAi,
  fontSize,
  onChangeFontSize,
  fontFamily,
  onChangeFontFamily,
  viewMode,
  onChangeViewMode,
  isBookmarked,
  onToggleBookmark,
  bookmarksCount,
  completedExercisesCount,
}) => {
  const [jumpInput, setJumpInput] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpInput, 10);
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      onPageChange(num);
      setJumpInput('');
      if (viewMode !== 'reading') onChangeViewMode('reading');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#120e0a] text-[#efe2c8] border-b-2 border-[#5d4025] shadow-xl py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side: Brand & Mode Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onChangeViewMode('cover')}
            className="flex items-center gap-2 font-playfair font-black text-sm sm:text-base tracking-wider uppercase hover:text-[#dfceaa] transition-colors cursor-pointer"
            title="Ir a la Portada"
          >
            <span className="bg-[#5d4025] text-[#efe2c8] w-7 h-7 flex items-center justify-center font-bold text-xs rounded-xs">
              MJ
            </span>
            <span className="hidden md:inline">Mi amigo Carlitos</span>
          </button>

          <div className="h-5 w-[1px] bg-[#efe2c8]/20 hidden sm:block" />

          {/* Quick Section Jumpers */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-mono">
            <button
              onClick={() => onChangeViewMode('cover')}
              className={`px-2.5 py-1 transition-all cursor-pointer ${
                viewMode === 'cover' ? 'bg-[#5d4025] text-[#efe2c8] font-bold' : 'hover:bg-[#1f160e]'
              }`}
            >
              Portada
            </button>
            <button
              onClick={onOpenIndex}
              className={`px-2.5 py-1 transition-all flex items-center gap-1 cursor-pointer ${
                viewMode === 'index' ? 'bg-[#5d4025] text-[#efe2c8] font-bold' : 'hover:bg-[#1f160e]'
              }`}
            >
              <Grid className="w-3 h-3" />
              Índice
            </button>
            <button
              onClick={() => onChangeViewMode('reading')}
              className={`px-2.5 py-1 transition-all flex items-center gap-1 cursor-pointer ${
                viewMode === 'reading' ? 'bg-[#5d4025] text-[#efe2c8] font-bold' : 'hover:bg-[#1f160e]'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              Lectura
            </button>
            <button
              onClick={() => onChangeViewMode('backcover')}
              className={`px-2.5 py-1 transition-all cursor-pointer ${
                viewMode === 'backcover' ? 'bg-[#5d4025] text-[#efe2c8] font-bold' : 'hover:bg-[#1f160e]'
              }`}
            >
              Contraportada
            </button>
          </div>
        </div>

        {/* Center: Pagination controls (visible in Reading mode) */}
        {viewMode === 'reading' && (
          <div className="flex items-center gap-1.5 sm:gap-3 bg-[#1f160e] px-2 sm:px-3 py-1 border border-[#efe2c8]/20">
            <button
              disabled={currentPageNumber <= 1}
              onClick={() => onPageChange(currentPageNumber - 1)}
              className="p-1 hover:bg-[#5d4025] disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer disabled:cursor-not-allowed"
              title="Página Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <form onSubmit={handleJump} className="flex items-center gap-1">
              <span className="text-xs font-mono font-bold text-[#dfceaa]">Pág</span>
              <input
                type="number"
                min={1}
                max={totalPages}
                placeholder={String(currentPageNumber)}
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                className="w-10 sm:w-12 text-center bg-[#120e0a] border border-[#efe2c8]/30 font-mono text-xs text-[#efe2c8] py-0.5 focus:outline-none focus:border-[#dfceaa]"
              />
              <span className="text-xs font-mono text-[#efe2c8]/60">/ {totalPages}</span>
            </form>

            <button
              disabled={currentPageNumber >= totalPages}
              onClick={() => onPageChange(currentPageNumber + 1)}
              className="p-1 hover:bg-[#5d4025] disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer disabled:cursor-not-allowed"
              title="Página Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Right Side: Tools & Modals */}
        <div className="hidden md:flex items-center gap-2">
          
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 bg-[#1f160e] hover:bg-[#5d4025] border border-[#efe2c8]/20 text-xs font-mono flex items-center gap-1 transition-all cursor-pointer"
            title="Buscar término en las 25 páginas"
          >
            <Search className="w-3.5 h-3.5 text-[#dfceaa]" />
            <span className="hidden xl:inline">Buscar</span>
          </button>

          {/* Typography Adjuster */}
          <div className="flex items-center bg-[#1f160e] border border-[#efe2c8]/20 text-xs font-mono px-2 py-1 gap-1">
            <Type className="w-3.5 h-3.5 text-[#dfceaa]" />
            <button
              onClick={() => onChangeFontSize(fontSize === 'lg' ? 'md' : fontSize === 'md' ? 'sm' : 'lg')}
              className="hover:text-[#dfceaa] font-bold px-1 uppercase"
              title="Cambiar tamaño de fuente"
            >
              {fontSize}
            </button>
          </div>

          {/* Bookmarks Counter */}
          <button
            onClick={onToggleBookmark}
            className={`p-1.5 text-xs font-mono flex items-center gap-1 border transition-all cursor-pointer ${
              isBookmarked
                ? 'bg-[#5d4025] text-[#efe2c8] border-[#dfceaa]'
                : 'bg-[#1f160e] hover:bg-[#382618] border-[#efe2c8]/20'
            }`}
            title="Marcar página actual"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#efe2c8]' : ''}`} />
            {bookmarksCount > 0 && <span className="font-bold">{bookmarksCount}</span>}
          </button>

          {/* Workbook Manager */}
          <button
            onClick={onOpenWorkbook}
            className="px-2.5 py-1.5 bg-[#4a2e19] hover:bg-[#5d4025] border border-[#dfceaa]/40 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer text-[#efe2c8]"
            title="Cuaderno de Ejercicios del Capítulo 5"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#dfceaa]" />
            <span>Ejercicios</span>
            {completedExercisesCount > 0 && (
              <span className="bg-[#efe2c8] text-[#120e0a] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                {completedExercisesCount}
              </span>
            )}
          </button>

          {/* Carlitos AI Helper */}
          <button
            onClick={onOpenCarlitosAi}
            className="px-3 py-1.5 bg-gradient-to-r from-[#5d4025] to-[#2b1d12] hover:from-[#735130] hover:to-[#382618] border border-[#dfceaa] text-xs font-playfair font-bold flex items-center gap-1.5 transition-all cursor-pointer text-[#efe2c8] shadow-sm"
            title="Consultar a 'Carlitos' (Asistente Junguiano)"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Hablar con Carlitos</span>
          </button>

        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCarlitosAi}
            className="p-1.5 bg-[#5d4025] text-[#efe2c8] border border-[#dfceaa] rounded-xs cursor-pointer"
            title="Carlitos AI"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-[#1f160e] border border-[#efe2c8]/30 hover:bg-[#382618] transition-all cursor-pointer text-[#efe2c8]"
            title="Menú Móvil"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 pt-3 border-t border-[#efe2c8]/20 space-y-3 font-mono text-xs bg-[#120e0a] p-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onChangeViewMode('cover');
                setIsMobileMenuOpen(false);
              }}
              className="p-2 bg-[#1f160e] text-left hover:bg-[#5d4025]"
            >
              • Portada
            </button>
            <button
              onClick={() => {
                onOpenIndex();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 bg-[#1f160e] text-left hover:bg-[#5d4025]"
            >
              • Índice (25 págs)
            </button>
            <button
              onClick={() => {
                onChangeViewMode('reading');
                setIsMobileMenuOpen(false);
              }}
              className="p-2 bg-[#1f160e] text-left hover:bg-[#5d4025]"
            >
              • Modo Lectura
            </button>
            <button
              onClick={() => {
                onChangeViewMode('backcover');
                setIsMobileMenuOpen(false);
              }}
              className="p-2 bg-[#1f160e] text-left hover:bg-[#5d4025]"
            >
              • Contraportada
            </button>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#efe2c8]/10">
            <button
              onClick={() => {
                onOpenSearch();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 p-2 bg-[#1f160e] w-full justify-center"
            >
              <Search className="w-4 h-4 text-[#dfceaa]" />
              Buscar en el Texto
            </button>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                onOpenWorkbook();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 p-2 bg-[#4a2e19] text-[#efe2c8] w-full justify-center font-bold"
            >
              <Edit3 className="w-4 h-4 text-[#dfceaa]" />
              Cuaderno de Ejercicios ({completedExercisesCount}/3)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
