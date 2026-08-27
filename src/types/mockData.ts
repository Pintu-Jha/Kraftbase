import type { Course, Lesson, AnalyticsData, CourseType } from './index';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Colors',
    subTitle:'Learn colors with objects',
    backgroundColor: '#E5CDFF',
    categoryColor: '#9881B3',
    lessonCount: 12,
    completedCount: 4,
    type: 'colors' as CourseType,
  },
  {
    id: '2',
    title: 'Letters',
    subTitle:'Learn ABC with fun sounds',
    backgroundColor: '#E1F18C',
    categoryColor: '#708892',
    lessonCount: 26,
    completedCount: 5,
    type: 'letters' as CourseType,
  },
];


export const MOCK_LESSONS: Lesson[] = [
  { id: '1', title: 'A for Apple', backgroundColor: '#F4EFD7', status: 'completed', progress: 1 },
  { id: '2', title: 'B for Ball', backgroundColor: '#FFE9E9', status: 'completed', progress: 1 },
  { id: '3', title: 'C for Cat', backgroundColor: '#E5CDFF', status: 'active', progress: 0.6 },
  { id: '4', title: 'D for Dog', backgroundColor: '#D7EAF8', status: 'active', progress: 0.2 },
  { id: '5', title: 'E for Elephant', backgroundColor: '#F9E9DC', status: 'locked' },
  { id: '6', title: 'F for Fish', backgroundColor: '#F4EFD7', status: 'locked' },
];

export const MOCK_ANALYTICS: AnalyticsData = {
  streakDays: [
    { day: 'Mon', isActive: true, count: 3 },
    { day: 'Tue', isActive: true, count: 5 },
    { day: 'Wed', isActive: false, count: 0 },
    { day: 'Thu', isActive: true, count: 4 },
    { day: 'Fri', isActive: true, count: 6 },
    { day: 'Sat', isActive: false, count: 0 },
    { day: 'Sun', isActive: true, count: 2 },
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
