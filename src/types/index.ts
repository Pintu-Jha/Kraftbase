// ─── Enums ────────────────────────────────────────────────────────────────────
export enum CourseType {
  COLORS = 'colors',
  LETTERS = 'letters',
  NUMBERS = 'numbers',
  SHAPES = 'shapes',
}

// ─── Course ───────────────────────────────────────────────────────────────────
export interface Course {
  id: string;
  title: string;
  subTitle:string
  backgroundColor: string;
  categoryColor: string;
  lessonCount: number;
  completedCount: number;
  type: CourseType;
}

// ─── Lesson ───────────────────────────────────────────────────────────────────
export type LessonStatus = 'locked' | 'active' | 'completed';

export interface Lesson {
  id: string;
  title: string;        
  description: string;
  duration: string;
  backgroundColor: string;
  status: LessonStatus;
  progress?: number;
  buttonText?: string;
}

// ─── Analytics ────────────────────────────────────────────────────────────────
export interface StreakDay {
  day: string;         
  isActive: boolean;
  count?: number;
}

export interface SkillProgress {
  skill: string;      
  progress: number;   
  barColor?: string;
}

export interface AnalyticsData {
  streakDays: StreakDay[];
  currentStreak: number;
  skillProgress: SkillProgress[];
  weeklyData: number[]; 
}
