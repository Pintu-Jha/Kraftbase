import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LessonListItem } from '../../components/composite/LessonListItem';
import { LessonHero } from '../../components/composite/LessonHero';
import {
  LessonProgressIndicator,
  type LessonStatus as ProgressStatus,
} from '../../components/ui/LessonProgressIndicator';

import { MOCK_LESSONS } from '../../types/mockData';
import type { Lesson, LessonStatus } from '../../types/index';

import {
  scale,
  verticalScale,
  textScale,
} from '../../theme/responsive';

import { colors } from '../../theme/colors';
import type { LessonsScreenProps } from '../../navigation/types';

export const LessonsScreen: React.FC<LessonsScreenProps> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  const getProgressStatus = useCallback(
    (status: LessonStatus): ProgressStatus => {
      switch (status) {
        case 'completed':
          return 'completed';

        case 'locked':
          return 'locked';

        default:
          return 'current';
      }
    },
    [],
  );

  const renderLesson = useCallback(
    ({
      item,
      index,
    }: {
      item: Lesson;
      index: number;
    }) => {
      const isLast = index === MOCK_LESSONS.length - 1;

      return (
        <View style={styles.lessonRow}>
          <LessonProgressIndicator
            lessonNumber={index + 1}
            status={getProgressStatus(item.status)}
            isLast={isLast}
          />

          <View style={styles.lessonCardWrapper}>
            <LessonListItem
              lesson={item}
              onPress={() => {}}
            />

           
            {!isLast && (
              <View style={styles.cardSpacing} />
            )}
          </View>
        </View>
      );
    },
    [getProgressStatus],
  );

  const keyExtractor = useCallback(
    (item: Lesson) => item.id,
    [],
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.heroBackground}
      />

      <View
        style={[
          styles.statusBarBackground,
          {
            height: insets.top,
          },
        ]}
      />

      <View style={styles.heroWrapper}>
        <LessonHero
          category="Letters"
          title="Learn ABC with fun sounds"
          lessonCount={MOCK_LESSONS.length}
          duration="1hr 30 min"
          onBackPress={navigation.goBack}
          aiMessage="You're learning great today!"
          aiProgress={12}
        />
      </View>

      <FlatList
        data={MOCK_LESSONS}
        keyExtractor={keyExtractor}
        renderItem={renderLesson}
        showsVerticalScrollIndicator={false}
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Text style={styles.sectionLabel}>
            All Lessons
          </Text>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>
              📭
            </Text>

            <Text style={styles.emptyTitle}>
              No lessons yet
            </Text>

            <Text style={styles.emptySubtitle}>
              Check back soon for new content.
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  statusBarBackground: {
    backgroundColor: colors.heroBackground,
  },

  heroWrapper: {
    zIndex: 2,
    elevation: 2,
  },

  listContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  listContent: {
    paddingLeft: scale(12),
    paddingRight: scale(20),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(32),
  },

  lessonRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: scale(16),
  },

  lessonCardWrapper: {
    flex: 1,
  },

  cardSpacing: {
    height: verticalScale(8),
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