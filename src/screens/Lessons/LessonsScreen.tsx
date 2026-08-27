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
import { BlurCard } from '../../components/ui/BlurCard';
import { IconButton } from '../../components/ui/IconButton';
import { MOCK_LESSONS } from '../../types/mockData';
import { scale, verticalScale, moderateScale, textScale } from '../../theme/responsive';
import { colors } from '../../theme/colors';
import type { LessonsScreenProps } from '../../navigation/types';

export const LessonsScreen: React.FC<LessonsScreenProps> = ({ navigation, route }) => {
  const { courseTitle } = route.params;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      {/* Hero section with blur card AI banner */}
      <View style={styles.hero}>
        <BlurCard
          intensity={75}
          tint="light"
          borderRadius={28}
          backgroundColor="rgba(255,255,255,0.15)"
          style={styles.backButtonBlur}
        >
          <IconButton
            icon="arrow-back"
            size={48}
            iconSize={20}
            backgroundColor="transparent"
            onPress={() => navigation.goBack()}
          />
        </BlurCard>
        <Text style={styles.heroTitle}>Learn {courseTitle} with fun sounds</Text>
        <Text style={styles.heroSubtitle}>{MOCK_LESSONS.length} lessons available</Text>
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
  hero: {
    backgroundColor: colors.heroBackground,
    borderBottomLeftRadius: moderateScale(32),
    borderBottomRightRadius: moderateScale(32),
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(28),
    gap: verticalScale(8),
  },
  backButtonBlur: {
    width: scale(48),
    height: scale(48),
    marginBottom: verticalScale(8),
  },
  heroTitle: {
    fontSize: textScale(25),
    letterSpacing: -0.275,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
  },
  heroSubtitle: {
    fontSize: textScale(14),
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: colors.mutedBodyText,
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
