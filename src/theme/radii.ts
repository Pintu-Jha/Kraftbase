/**
 * Design tokens — border radii
 * Extracted verbatim from Figma file: Kraftbase (fileKey: 0hLuOTK9L9ZldluGzQJjxE)
 */
export const radii = {
  /** Streak segment pills */
  streakPill: 15,
  /** Small play-icon circle button */
  playIconCircle: 15.5,
  /** Onboarding feature-tag cards */
  featureTag: 20,
  /** Course/lesson cards, chips, icon buttons */
  card: 24,
  /** Small circular icon buttons */
  iconBtnSmall: 24.5,
  /** Top nav icon buttons, "Personalized Learning" card corner */
  navIconBtn: 28,
  /** Large section cards (home banner, analytics cards, lessons hero) */
  sectionCard: 32,
  /** Circular floating action buttons */
  fab: 39.5,
  /** Pill-shaped filter chips / avatar circle bg */
  avatarCircle: 56,
  /** Large pill container (bottom tab bar, streak bar background) */
  tabBar: 64,
  /** Sign up / Log in buttons (full pill) */
  authButton: 80,
  /** Perfect circles (avatars, dots, logo ring) */
  full: 999,
} as const;

export type RadiusKey = keyof typeof radii;
