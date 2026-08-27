import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LessonListItem } from '../../components/composite/LessonListItem';
import { LessonHero } from '../../components/composite/LessonHero';
import { AiBuddyProgress } from '../../components/composite/AiBuddyProgress';
import { MOCK_LESSONS } from '../../types/mockData';
import { scale, verticalScale, textScale } from '../../theme/responsive';
import { colors } from '../../theme/colors';
import type { LessonsScreenProps } from '../../navigation/types';

export const LessonsScreen: React.FC<LessonsScreenProps> = ({ navigation, route }) => {
  const { courseTitle } = route.params;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.heroContainer}>
        {/* Hero section with illustration */}
        <LessonHero
          category="Letters"
          title="Learn ABC"
          subtitle="with fun sounds"
          lessonCount={MOCK_LESSONS.length}
          duration="1hr 30 min"
          onBackPress={() => navigation.goBack()}
        />

        {/* AI Buddy Progress Banner - positioned absolutely to overlap */}
        <View style={styles.aiBuddyWrapper}>
          <AiBuddyProgress
            message="You're learning great today!"
            progress={12}
          />
        </View>
      </View>

      {/* Lesson list */}
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionLabel}>All Lessons</Text>
        {MOCK_LESSONS.map(lesson => (
          <LessonListItem
            key={lesson.id}
            lesson={lesson}
            onPress={() => {}}
          />
        ))}
        {MOCK_LESSONS.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>📭</Text>
            <Text style={styles.emptyTitle}>No lessons yet</Text>
            <Text style={styles.emptySubtitle}>Check back soon for new content.</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.heroBackground,
  },
  heroContainer: {
    position: 'relative',
    marginBottom: verticalScale(60),
  },
  aiBuddyWrapper: {
    position: 'absolute',
    bottom: verticalScale(-60),
    left: 0,
    right: 0,
    zIndex: 10,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContent: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(32),
  },
  sectionLabel: {
    fontSize: textScale(13),
    letterSpacing: -0.143,
    fontFamily: 'Inter-Medium',
    color: colors.gray,
    marginBottom: verticalScale(12),
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: verticalScale(60),
    gap: verticalScale(8),
  },
  emptyEmoji: {
    fontSize: textScale(48),
  },
  emptyTitle: {
    fontSize: textScale(18),
    letterSpacing: -0.198,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
  },
  emptySubtitle: {
    fontSize: textScale(14),
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: colors.mutedBodyText,
  },
});
