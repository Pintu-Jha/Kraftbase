/**
 * Design tokens — typography
 * Extracted verbatim from Figma file: Kraftbase (fileKey: 0hLuOTK9L9ZldluGzQJjxE)
 *
 * Assumption (documented in README):
 *   "Inter Display" is not a distributable font family.
 *   Using standard Inter (Regular/Medium/SemiBold) as the closest available match.
 */

export const fontFamilies = {
  /**
   * Primary font used throughout the app.
   * Maps to: Inter Display (Regular/Medium/SemiBold) in Figma.
   * Implementation uses: Inter loaded via expo-font.
   */
  interRegular: 'Inter-Regular',
  interMedium: 'Inter-Medium',
  interSemiBold: 'Inter-SemiBold',
} as const;

/**
 * All font sizes found across the 4 frames, with their exact letter-spacing values.
 * Ratio: letterSpacing ≈ -0.011 × fontSize (derived, for reference only).
 * Every value actually used in the 4 screens is listed explicitly below.
 */
export const textStyles = {
  /** Chips, captions, nav labels */
  xs: { fontSize: 12, letterSpacing: -0.132 },
  /** "Hello Max" small label */
  sm13: { fontSize: 13, letterSpacing: -0.143 },
  /** Body text, buddy banner subtitle */
  sm: { fontSize: 14, letterSpacing: -0.154 },
  /** "Good Morning" greeting */
  base15: { fontSize: 15, letterSpacing: -0.165 },
  /** Lesson card titles, Log in button label */
  base: { fontSize: 16, letterSpacing: -0.176 },
  /** "Start learning" CTA label */
  lg: { fontSize: 18, letterSpacing: -0.198 },
  /** "Your streak" heading, streak day numbers */
  xl: { fontSize: 20, letterSpacing: -0.22 },
  /** Onboarding "SmartLearn" logo text */
  xxl: { fontSize: 24, letterSpacing: -0.264 },
  /** Lessons screen header */
  heading25: { fontSize: 25, letterSpacing: -0.275 },
  /** Home "Let's learn", Analytics headers */
  heading26: { fontSize: 26, letterSpacing: -0.286 },
  /** Onboarding "Learning" pill text */
  heading27: { fontSize: 27, letterSpacing: -0.297 },
  /** Course card big title */
  heading28: { fontSize: 28, letterSpacing: -0.308 },
  /** Onboarding "Personalized" heading */
  heading30: { fontSize: 30, letterSpacing: -0.33 },
} as const;

export type TextStyleKey = keyof typeof textStyles;
