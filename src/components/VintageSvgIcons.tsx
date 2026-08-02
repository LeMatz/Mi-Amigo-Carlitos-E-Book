import React from 'react';

// Vintage Pointing Hand (Manicule)
export const ManiculeIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={className} viewBox="0 0 100 50" fill="currentColor">
    <path d="M10 25 C10 15, 20 15, 25 25 C30 20, 40 20, 45 25 C50 15, 60 15, 65 25 L85 25 C92 25, 98 28, 98 32 C98 36, 92 38, 85 38 L65 38 C60 42, 50 42, 45 38 C40 42, 30 42, 25 38 C20 42, 10 38, 10 25 Z" opacity="0.15" />
    <path d="M5 25 L30 25 L35 22 L65 22 L70 20 L95 20 C98 20 100 23 100 25 C100 27 98 30 95 30 L65 30 C60 35 50 35 45 30 L25 30 C20 35 10 32 5 25 Z M35 22 L35 12 C35 8 32 5 28 5 C24 5 22 8 22 12 L22 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="28" cy="12" r="2" fill="currentColor" />
  </svg>
);

// Greek Goddess Icon (Athena in Profile with Corinthian Helmet & Plume)
export const GreekGoddessIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    
    {/* Majestic Helmet Plume (Penacho de Casco Griego de Atenea) */}
    <path d="M20 28 C28 10, 62 8, 80 18 C72 26, 52 21, 36 32 Z" fill="currentColor" />
    <path d="M24 25 C35 14, 60 12, 75 20" stroke="#efe2c8" strokeWidth="1.5" strokeDasharray="2 2" />
    
    {/* Helmet Dome & Nose Guard */}
    <path d="M30 30 C45 22 68 26 72 38 C74 43 70 50 65 52 C57 50 48 48 38 48 C32 44 30 36 30 30 Z" fill="currentColor" />
    <path d="M58 38 L63 48 L58 47 Z" fill="currentColor" />
    
    {/* Athena Female Profile Silhouette (Facing Right) */}
    {/* Forehead, Greek Nose, Lips, Chin, Elegant Neck */}
    <path d="M50 48 C54 50 59 52 61 55 C59 57 58 59 60 60 C62 60 63 62 60 64 C56 67 54 70 53 76 C48 76 43 72 42 65 C42 59 42 54 50 48 Z" fill="currentColor" />
    
    {/* Eye in profile view */}
    <polygon points="53,53 57,52 55,55" fill="#efe2c8" />
    
    {/* Helmet Cheek Protection Piece */}
    <path d="M36 44 C42 46 44 54 42 62 C38 60 35 52 36 44 Z" fill="currentColor" stroke="#efe2c8" strokeWidth="1" />
    
    {/* Hair flowing under back of helmet */}
    <path d="M30 48 C24 52 24 62 31 66 C34 62 34 54 30 48 Z" fill="currentColor" />
    
    {/* Classical Greek Robe Drapery */}
    <path d="M28 82 C36 72 52 72 70 82 H28 Z" fill="currentColor" />
    <path d="M34 76 Q48 84 62 76" stroke="#efe2c8" strokeWidth="1.5" fill="none" />
  </svg>
);

// WhatsApp Icon
export const WhatsappIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Medallion Bust / Vintage Archetype Bust
export const MedallionBustIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M50 25C43 25 38 30 38 37C38 42 41 46 45 48C35 52 28 62 28 75H72C72 62 65 52 55 48C59 46 62 42 62 37C62 30 57 25 50 25Z" fill="currentColor" />
    <path d="M42 35 C45 32, 55 32, 58 35" stroke="#efe2c8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Doorway into the Shadow
export const DoorwayShadowIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="70" height="70" stroke="currentColor" strokeWidth="3" />
    <path d="M30 85 V30 C30 20 70 20 70 30 V85" stroke="currentColor" strokeWidth="2" />
    <path d="M35 85 V35 C35 28 65 28 65 35 V85" fill="currentColor" />
    <circle cx="42" cy="60" r="2" fill="#efe2c8" />
    <path d="M50 85 L50 65 L40 75" stroke="#efe2c8" strokeWidth="2" />
  </svg>
);

// Compass Star / Intuition
export const CompassStarIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    {/* 8 Point Star */}
    <path d="M50 10 L55 42 L87 35 L58 50 L87 65 L55 58 L50 90 L45 58 L13 65 L42 50 L13 35 L45 42 Z" fill="currentColor" />
    <circle cx="50" cy="50" r="4" fill="#efe2c8" />
  </svg>
);

// Wax Seal / Official Stamp
export const WaxSealBadge: React.FC<{ className?: string; text?: string }> = ({ className = 'w-24 h-24', text = 'APROBADO' }) => (
  <div className={`relative flex items-center justify-center rounded-full border-4 border-[#5d4025] bg-[#5d4025] text-[#efe2c8] shadow-md ${className}`}>
    <div className="absolute inset-1 rounded-full border border-dashed border-[#efe2c8] opacity-60" />
    <div className="text-center font-playfair uppercase text-xs font-bold tracking-widest px-2 leading-tight">
      {text}
    </div>
  </div>
);
