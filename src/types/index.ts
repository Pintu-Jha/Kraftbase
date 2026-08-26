// ─── Course ───────────────────────────────────────────────────────────────────
export interface Course {
  id: string;
  title: string;
  category: string;
  backgroundColor: string;
  categoryColor: string;
  lessonCount: number;
  completedCount: number;
  imageEmoji?: string;
}

// ─── Lesson ───────────────────────────────────────────────────────────────────
export type LessonStatus = 'locked' | 'active' | 'completed';

export interface Lesson {
  id: string;
  title: string;        // e.g. "A for Apple"
  subtitle?: string;
  backgroundColor: string;
  status: LessonStatus;
  progress?: number;    // 0–1 for active lessons
}

// ─── Analytics ────────────────────────────────────────────────────────────────
export interface StreakDay {
  day: string;          // e.g. "Mon", "Tue"
  isActive: boolean;
  count?: number;
}

export interface SkillProgress {
  skill: string;        // e.g. "Reading", "Writing"
  progress: number;     // 0–1
  barColor?: string;
}

export interface AnalyticsData {
  streakDays: StreakDay[];
  currentStreak: number;
  skillProgress: SkillProgress[];
  weeklyData: number[];  // bar chart values
}
