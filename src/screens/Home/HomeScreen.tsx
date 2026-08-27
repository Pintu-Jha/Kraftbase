import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderRow } from '../../components/composite/HeaderRow';
import { AiBuddyBanner } from '../../components/composite/AiBuddyBanner';
import { FilterChip } from '../../components/ui/FilterChip';
import { CourseCard } from '../../components/composite/CourseCard';
import { MOCK_COURSES } from '../../types/mockData';
import type { HomeScreenProps } from '../../navigation/types';
import { Letters } from '../../assets/icons/svg/Letters';
import { Colors } from '../../assets/icons/svg/Colors';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: '', count: 12 },
  { id: 'letters', label: 'Letters', icon: Letters, count: 3 },
  { id: 'colors', label: 'Colors', icon: Colors, count: 4 },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Header */}
        <HeaderRow
          userName="Max"
          greeting="Good Morning"
          hasNotifications={true}
          onLanguagePress={() => {/* language selector */}}
          onNotificationPress={() => {/* notifications */}}
        />

        {/* AI Buddy Banner */}
        <View style={styles.bannerSection}>
          <AiBuddyBanner
            progress={0.20}
            category="Shapes"
            lessonCount={12}
            durationMinutes={10}
            onPlayPress={() => navigation.navigate('Lessons', { courseId: '1', courseTitle: 'Shapes' })}
          />
        </View>

        {/* Let's learn header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Let's learn</Text>
        </View>

        {/* Category chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {CATEGORIES.map(cat => (
            <FilterChip
              key={cat.id}
              label={cat.label}
              icon={cat.icon}
              count={cat.count}
              variant="withIcon"
              active={activeCategory === cat.id}
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
    paddingBottom: 120, 
  },
  bannerSection: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 26,
    letterSpacing: -0.352,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  categoryScroll: {
    paddingHorizontal: 16,
    gap: 6,
    marginBottom: 10,
  },
  courseScroll: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
});
