import React from 'react';

interface OrnamentalDividerProps {
  variant?: 'simple' | 'flourish' | 'stars' | 'double' | 'fleuron';
  className?: string;
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  variant = 'flourish',
  className = '',
}) => {
  if (variant === 'simple') {
    return <div className={`w-full border-t border-[#111111] my-4 ${className}`} />;
  }

  if (variant === 'double') {
    return (
      <div className={`w-full my-4 flex flex-col gap-[2px] ${className}`}>
        <div className="w-full border-t-2 border-[#111111]" />
        <div className="w-full border-t border-[#111111]" />
      </div>
    );
  }

  if (variant === 'stars') {
    return (
      <div className={`w-full my-6 flex items-center justify-center gap-4 text-[#111111] ${className}`}>
        <div className="flex-1 border-t border-[#111111]" />
        <span className="font-serif text-lg tracking-widest">✶ ✶ ✶</span>
        <div className="flex-1 border-t border-[#111111]" />
      </div>
    );
  }

  if (variant === 'fleuron') {
    return (
      <div className={`w-full my-6 flex items-center justify-center gap-3 text-[#111111] ${className}`}>
        <div className="flex-1 border-t border-[#111111]" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-85">
          <path d="M12 2C10.5 4.5 8 5 6 5C6 7.5 8 9.5 12 12C16 9.5 18 7.5 18 5C16 5 13.5 4.5 12 2ZM12 22C10.5 19.5 8 19 6 19C6 16.5 8 14.5 12 12C16 14.5 18 16.5 18 19C16 19 13.5 19.5 12 22Z" />
        </svg>
        <div className="flex-1 border-t border-[#111111]" />
      </div>
    );
  }

  // Default: flourish
  return (
    <div className={`w-full my-6 flex items-center justify-center gap-3 text-[#111111] ${className}`}>
      <div className="flex-1 border-t-2 border-[#111111]" />
      <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M24 0C21 4 15 6 8 6C8 9 12 11 24 16C36 11 40 9 40 6C33 6 27 4 24 0Z" fill="currentColor" />
        <circle cx="6" cy="6" r="2" fill="currentColor" />
        <circle cx="42" cy="6" r="2" fill="currentColor" />
      </svg>
      <div className="flex-1 border-t-2 border-[#111111]" />
    </div>
  );
};
