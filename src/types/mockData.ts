import type { Course, Lesson, AnalyticsData, CourseType } from './index';
import { colors } from '../theme/colors';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Colors',
    subTitle:'Learn colors with objects',
    backgroundColor: colors.courseCardColors,
    categoryColor: colors.categoryLabelPurple,
    lessonCount: 12,
    completedCount: 4,
    type: 'colors' as CourseType,
  },
  {
    id: '2',
    title: 'Letters',
    subTitle:'Learn ABC with fun sounds',
    backgroundColor: colors.courseCardLetters,
    categoryColor: colors.categoryLabelGreen,
    lessonCount: 26,
    completedCount: 5,
    type: 'letters' as CourseType,
  },
];


export const MOCK_LESSONS: Lesson[] = [
  { 
    id: '1', 
    title: 'A for Apple', 
    description: 'Learn the sound of A and objects that start with A',
    duration: '2 min',
    backgroundColor: colors.aForApple,
    status: 'completed', 
    progress: 1,
    buttonText: 'Replay'
  },
  { 
    id: '2', 
    title: 'B for Ball', 
    description: 'Recognize the letter B and its phonetic sound',
    duration: '3 min',
    backgroundColor: colors.bForBall,
    status: 'active', 
    progress: 0.6,
    buttonText: 'Continue'
  },
  { 
    id: '3', 
    title: 'D for Dog', 
    description: 'Hear and repeat the D sound',
    duration: '5 min',
    backgroundColor: colors.dForDog,
    status: 'active', 
    progress: 0,
    buttonText: 'Start Lesson'
  },
  { 
    id: '4', 
    title: 'C for Cat', 
    description: 'Learn the "C" sound with fun animations',
    duration: '10 min',
    backgroundColor: colors.cForCat,
    status: 'active', 
    progress: 0,
    buttonText: 'Start Lesson'
  },
  { 
    id: '5', 
    title: 'E for Elephant', 
    description: 'Discover the E sound and practice words',
    duration: '10 min',
    backgroundColor: colors.eForElephant,
    status: 'locked',
    buttonText: 'Locked'
  },
  { 
    id: '6', 
    title: 'F for Fish', 
    description: 'Learn F sound with underwater theme',
    duration: '8 min',
    backgroundColor: colors.aForApple,
    status: 'locked',
    buttonText: 'Locked'
  },
];

export const MOCK_ANALYTICS: AnalyticsData = {
  streakDays: [
    { day: 'Mon', isActive: true, count: 3 },
    { day: 'Tue', isActive: true, count: 5 },
    { day: 'Wed', isActive: true, count: 0 },
    { day: 'Thu', isActive: true, count: 4 },
    { day: 'Fri', isActive: false, count: 6 },
    { day: 'Sat', isActive: false, count: 0 },
    { day: 'Sun', isActive: false, count: 2 },
  ],
  currentStreak: 5,
  skillProgress: [
    { skill: 'Reading', progress: 0.75 },
    { skill: 'Writing', progress: 0.45 },
    { skill: 'Speaking', progress: 0.6 },
    { skill: 'Listening', progress: 0.85 },
  ],
  weeklyData: [3, 7, 5, 8, 4, 6, 9],
};
