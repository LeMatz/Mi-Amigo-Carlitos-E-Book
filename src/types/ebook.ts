export interface CarlitosCallout {
  id: string;
  title?: string;
  text: string;
  variant?: 'carlitos' | 'historical_quote' | 'marginalia' | 'glossary' | 'alchemical' | 'context_note' | 'left_callout';
  position?: 'left' | 'right' | 'full';
}

export interface ArchetypeTableRow {
  archetype: string;
  symbols: string;
  distortion: string;
  origin?: 'Jung explícito' | 'Tradición junguiana / Ampliado';
}

export interface ExerciseStep {
  stepNumber: number;
  title: string;
  instruction: string;
}

export interface ExerciseData {
  id: string;
  title: string;
  objective: string;
  steps: ExerciseStep[];
  applicationExample: string;
  exampleLabel?: string;
  closurePrompt?: string;
  inputFieldKey?: string;
  inputPlaceholder?: string;
}

export type PageContentType = 
  | 'text' 
  | 'table' 
  | 'exercise' 
  | 'biography' 
  | 'legacy' 
  | 'introduction' 
  | 'conclusion';

export interface EbookPageData {
  pageNumber: number; // 1 to 26
  chapterId: number; // 0 for Intro/Bio, 1, 2, 3, 4, 5
  sectionTitle: string;
  pageTitle: string;
  subtitle?: string;
  contentType: PageContentType;
  paragraphs: string[];
  carlitosCallout?: CarlitosCallout;
  secondaryCallout?: CarlitosCallout;
  tableData?: ArchetypeTableRow[];
  exerciseData?: ExerciseData;
  keyTerms?: string[];
  historicalNotes?: string[];
}

export interface ChapterMeta {
  chapterId: number;
  title: string;
  subtitle: string;
  startPage: number;
  endPage: number;
  iconName: string;
}

export interface Bookmark {
  pageNumber: number;
  title: string;
  timestamp: string;
  note?: string;
}

export interface UserWorkbookState {
  [key: string]: string; // exercise field key -> user answer
}
