import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Lessons: { courseId: string; courseTitle: string };
  Analytics: undefined;
};

export type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LessonsScreenProps = NativeStackScreenProps<RootStackParamList, 'Lessons'>;
export type AnalyticsScreenProps = NativeStackScreenProps<RootStackParamList, 'Analytics'>;
