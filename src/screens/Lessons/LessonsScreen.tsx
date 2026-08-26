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
import type { LessonsScreenProps } from '../../navigation/types';

export const LessonsScreen: React.FC<LessonsScreenProps> = ({ navigation, route }) => {
  const { courseTitle } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
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
            onPress={() => {/* navigate to lesson detail */}}
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
    backgroundColor: '#FFFFFF',
  },
  hero: {
    backgroundColor: '#DCEA8F',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 28,
    gap: 8,
  },
  backButtonBlur: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 25,
    letterSpacing: -0.275,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  heroSubtitle: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: 'rgba(1,0,0,0.5)',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 32,
  },
  sectionLabel: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Medium',
    color: '#708892',
    marginBottom: 12,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: 60,
    gap: 8,
  },
  emptyEmoji: {
    fontSize: 48,
  },
  emptyTitle: {
    fontSize: 18,
    letterSpacing: -0.198,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  emptySubtitle: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: 'rgba(1,0,0,0.5)',
  },
});
