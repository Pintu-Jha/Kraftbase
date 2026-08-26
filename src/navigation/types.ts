import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';

export type RootStackParamList = {
  Onboarding: undefined;
  MainTabs: undefined;
  Lessons: {
    courseId: string;
    courseTitle: string;
  };
};

export type TabParamList = {
  Home: undefined;
  Dictionary: undefined;
  Analytics: undefined;
  Profile: undefined;
};

export type DictionaryStackParamList = {
  DictionaryMain: undefined;
  Lessons: {
    courseId?: string;
    courseTitle?: string;
  };
};

export type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;
export type DictionaryScreenProps = BottomTabScreenProps<TabParamList, 'Dictionary'>;
export type LessonsScreenProps = NativeStackScreenProps<RootStackParamList, 'Lessons'>;
export type AnalyticsScreenProps = BottomTabScreenProps<TabParamList, 'Analytics'>;
export type ProfileScreenProps = BottomTabScreenProps<TabParamList, 'Profile'>;
