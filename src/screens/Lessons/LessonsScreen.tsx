import React from 'react';
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
import { MOCK_LESSONS } from '../../types/mockData';

import { scale, verticalScale, textScale } from '../../theme/responsive';
import { colors } from '../../theme/colors';

import type { LessonsScreenProps } from '../../navigation/types';

export const LessonsScreen: React.FC<LessonsScreenProps> = ({
  navigation,
  route,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.heroBackground}
      />

      {/* Paint ONLY the status bar inset with the hero color — not the whole safe area */}
      <View style={{ height: insets.top, backgroundColor: colors.heroBackground }} />

      <View style={styles.heroWrapper}>
        <LessonHero
          category="Letters"
          title="Learn ABC with fun sounds"
          lessonCount={MOCK_LESSONS.length}
          duration="1hr 30 min"
          onBackPress={() => navigation.goBack()}
          aiMessage="You're learning great today!"
          aiProgress={12}
        />
      </View>

      <FlatList
        data={MOCK_LESSONS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <LessonListItem lesson={item} onPress={() => {}} />
        )}
        ListHeaderComponent={
          <Text style={styles.sectionLabel}>All Lessons</Text>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>📭</Text>
            <Text style={styles.emptyTitle}>No lessons yet</Text>
            <Text style={styles.emptySubtitle}>
              Check back soon for new content.
            </Text>
          </View>
        }
        style={styles.listContainer}
        contentContainerStyle={[
          styles.listContent,
          MOCK_LESSONS.length === 0 && styles.emptyListContent,
        ]}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white, 
  },

  heroWrapper: {
    zIndex: 2,
    elevation: 2,
  },

  listContainer: {
    flex: 1,
    backgroundColor: colors.white,
    zIndex: 1,
  },

  listContent: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(32),
  },

  emptyListContent: { flexGrow: 1 },

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

  emptyEmoji: { fontSize: textScale(48) },

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