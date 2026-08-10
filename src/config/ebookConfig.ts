export type PageSize = 'Legal' | 'A4' | 'Letter' | 'Custom';

export interface EbookPageConfig {
  id: string;
  size: PageSize;
  width?: string;
  height?: string;
}

export interface EbookConfig {
  pages: EbookPageConfig[];
}

declare global {
  interface Window {
    ebookConfig?: EbookConfig;
  }
}

/**
 * Global E-Book Page Size Configuration.
 * The order of pages in this array MUST match exactly the rendering order in the DOM:
 * 1. Portada (page-cover)
 * 2. Índice (page-toc)
 * 3. Páginas de contenido (page-1 to page-26)
 * 4. Contraportada (page-backcover)
 */
export const ebookPagesConfig: EbookPageConfig[] = [
  { id: 'page-cover', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-toc', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-1', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-2', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-3', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-4', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-5', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-6', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-7', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-8', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-9', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-10', size: 'Letter', width: '8.5in', height: '11in' },
  { id: 'page-11', size: 'Letter', width: '8.5in', height: '11in' },
  { id: 'page-12', size: 'Letter', width: '8.5in', height: '11in' },
  { id: 'page-13', size: 'Letter', width: '8.5in', height: '11in' },
  { id: 'page-14', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-15', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-16', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-17', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-18', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-19', size: 'Legal', width: '8.5in', height: '14in' },
  { id: 'page-20', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-21', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-22', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-23', size: 'Custom', width: '8.5in', height: '12.8in' },
  { id: 'page-24', size: 'Custom', width: '8.5in', height: '12.8in' },
  { id: 'page-25', size: 'Custom', width: '8.5in', height: '12.8in' },
  { id: 'page-26', size: 'A4', width: '210mm', height: '297mm' },
  { id: 'page-backcover', size: 'Legal', width: '8.5in', height: '14in' },
];

export const ebookConfig: EbookConfig = {
  pages: ebookPagesConfig,
};

export function initEbookConfig(): EbookConfig {
  if (typeof window !== 'undefined') {
    window.ebookConfig = ebookConfig;
  }
  return ebookConfig;
}

export function getPageConfig(id: string): EbookPageConfig | undefined {
  return ebookPagesConfig.find((p) => p.id === id);
}

export function getPageSizeClass(id: string): string {
  const config = getPageConfig(id);
  if (!config) return 'page-legal';
  switch (config.size) {
    case 'Legal':
      return 'page-legal';
    case 'A4':
      return 'page-a4';
    case 'Letter':
      return 'page-letter';
    case 'Custom':
      return 'page-custom';
    default:
      return 'page-legal';
  }
}

// Ensure window.ebookConfig is populated immediately upon module evaluation
initEbookConfig();
