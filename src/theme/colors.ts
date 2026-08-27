/**
 * Design tokens — colors
 * Extracted verbatim from Figma file: Kraftbase (fileKey: 0hLuOTK9L9ZldluGzQJjxE)
 * Named styles defined in Figma + all raw hex/rgba fills found across all 4 frames.
 */

// ─── Figma named styles ───────────────────────────────────────────────────────
export const namedColors = {
  black: '#010000',
  black50:'#01000080',
  btn: '#1C274C',
  bottomIconInActive:'#141B34',
  gray: '#708892',
  white: '#FFFFFF',
} as const;

// ─── Onboarding (frame 1:725) ─────────────────────────────────────────────────
export const onboardingColors = {
  featureTagPink: '#F2D1D0',
  featureTagLime: '#DFF28A',
  personalizedCard: '#CADDF7',
} as const;

// ─── Home (frame 1:351) ───────────────────────────────────────────────────────
export const homeColors = {
  aiBuddyBanner: '#EAF1F9',
  courseCardColors: '#E5CDFF',
  courseCardLetters: '#E1F18C',
  chipBadgeMutedText: '#6A8282',
} as const;

// ─── Shared card / label colors ───────────────────────────────────────────────
export const cardColors = {
  buttonLabel: '#073647',
  categoryLabelPurple: '#9881B3',
  categoryLabelGreen: '#708892',
} as const;

// ─── Lesson cards (frame 1:1150) ──────────────────────────────────────────────
export const lessonCardColors = {
  aForApple: '#F4EFD7',
  bForBall: '#FFE9E9',
  cForCat: '#E5CDFF',
  dForDog: '#D7EAF8',
  eForElephant: '#F9E9DC',
  heroBackground: '#DCEA8F',
} as const;

// ─── Icon / avatar ────────────────────────────────────────────────────────────
export const iconColors = {
  darkIconButtonBg: '#161A34',
  robotAvatarCircleBg: '#3C425F',
} as const;

// ─── Progress ─────────────────────────────────────────────────────────────────
export const progressColors = {
  completed: '#7CA62B',
  incomplete: '#F5F5F5',
} as const;

// ─── Analytics (frame 1:825) ──────────────────────────────────────────────────
export const analyticsColors = {
  skillProgressCard: '#E5F2F9',
  activeBarSelectedPill: '#1C274C',
  streakActive: 'rgba(90,160,43,0.19)',
  streakInactive: 'rgba(255,255,255,0.49)',
} as const;

// ─── Chip / pill ──────────────────────────────────────────────────────────────
export const chipColors = {
  neutralA: 'rgba(244,243,243,0.5)',
  neutralB: 'rgba(244,243,243,0.7)',
  iconButtonTopNav: 'rgba(240,239,239,0.4)',
} as const;

// ─── Text / overlay ───────────────────────────────────────────────────────────
export const overlayColors = {
  mutedBodyText: 'rgba(1,0,0,0.5)',
  frostedLessonBanner: 'rgba(255,255,255,0.4)',
  frostedChipA: 'rgba(255,255,255,0.29)',
  frostedChipB: 'rgba(255,255,255,0.38)',
} as const;

// ─── Flat export for convenience ──────────────────────────────────────────────
export const colors = {
  ...namedColors,
  ...onboardingColors,
  ...homeColors,
  ...cardColors,
  ...lessonCardColors,
  ...iconColors,
  ...progressColors,
  ...analyticsColors,
  ...chipColors,
  ...overlayColors,
} as const;

export type ColorKey = keyof typeof colors;
