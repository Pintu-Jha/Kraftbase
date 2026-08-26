/**
 * Design tokens — spacing
 * Extracted verbatim from Figma file: Kraftbase (fileKey: 0hLuOTK9L9ZldluGzQJjxE)
 *
 * Note: The designer used a mixed spacing scale (not a clean 4pt or 8pt grid).
 * These are the exact observed gap and padding values — not approximated.
 */
export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 6,
  ms: 8,
  md: 10,
  base: 12,
  lg: 14,
  xl: 16,
  xxl: 18,
} as const;

export type SpacingKey = keyof typeof spacing;
