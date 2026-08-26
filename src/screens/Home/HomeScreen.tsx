import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { HeaderRow } from '../../components/composite/HeaderRow';
import { AiBuddyBanner } from '../../components/composite/AiBuddyBanner';
import { CategoryChip } from '../../components/composite/CategoryChip';
import { CourseCard } from '../../components/composite/CourseCard';
import { BottomTabBar } from '../../components/composite/BottomTabBar';
import { MOCK_COURSES } from '../../types/mockData';
import type { HomeScreenProps } from '../../navigation/types';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: '', count: 24 },
  { id: 'letters', label: 'Letters', icon: '📚', count: 12 },
  { id: 'colors', label: 'Colors', icon: '🎨', count: 8 },
  { id: 'numbers', label: 'Numbers', icon: '🔢', count: 4 },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'lessons') {
      navigation.navigate('Lessons', { courseId: '1', courseTitle: 'Letters' });
    } else if (tabId === 'analytics') {
      navigation.navigate('Analytics');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Header with avatar, greeting, language selector, notification */}
        <HeaderRow
          userName="Max"
          greeting="Good Morning"
          hasNotifications={true}
          onLanguagePress={() => {/* language selector */}}
          onNotificationPress={() => {/* notifications */}}
        />

        {/* AI Buddy banner with progress ring */}
        <View style={styles.section}>
          <AiBuddyBanner
            progress={0.12}
            category="Letters"
            lessonCount={5}
            durationMinutes={15}
            onPlayPress={() => navigation.navigate('Lessons', { courseId: '2', courseTitle: 'Letters' })}
          />
        </View>

        {/* Let's learn section header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Let's learn</Text>
        </View>

        {/* Category filter chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {CATEGORIES.map(cat => (
            <CategoryChip
              key={cat.id}
              label={cat.label}
              icon={cat.icon}
              count={cat.count}
              isActive={activeCategory === cat.id}
              onPress={() => setActiveCategory(cat.id)}
            />
          ))}
        </ScrollView>

        {/* Course cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.courseScroll}
        >
          {MOCK_COURSES.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onPress={() =>
                navigation.navigate('Lessons', {
                  courseId: course.id,
                  courseTitle: course.title,
                })
              }
            />
          ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom tab bar */}
      <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: 100, // space for bottom tab bar
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 26,
    letterSpacing: -0.286,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  categoryScroll: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 20,
  },
  courseScroll: {
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
});
