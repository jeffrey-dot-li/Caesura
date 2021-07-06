export const googleFonts = [
  'Permanent Marker',
  'Quicksand',
  'Kaushan Script',
  'Rock Salt',
  'Caveat',
  'Inter',
  'Saira',
  'Pacifico',
  'Patua One',
  'Sen'
] as const;

const replaceSpaces = (s: string, c = ''): string => s.replace(/\s+/g, c);

const googleFontsLink = `${googleFonts.reduce(
  (prev, current) => `${prev}family=${replaceSpaces(current, '+')}&`,
  'https://fonts.googleapis.com/css2?'
)}display=swap`;

export default googleFontsLink;

export const FontFamilyReference = Object.fromEntries(googleFonts.map(v => [replaceSpaces(v.toLowerCase()) as Lowercase<typeof v>, [v]] as const));
