import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurCard } from '../ui/BlurCard';
import { Avatar } from '../ui/Avatar';
import { Chip } from '../ui/Chip';
import type { Course } from '../../types/index';

interface CourseCardProps {
  course: Course;
  onPress: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: course.backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Icon badge + meta chips */}
      <View style={styles.topRow}>
        <Avatar size={48} backgroundColor="rgba(255,255,255,0.5)" emoji={course.imageEmoji || '🎨'} />

        <View style={styles.metaChips}>
          <Chip icon="book-outline" iconSize={12} label={`${course.lessonCount} lessons`} variant="frosted" />
          <Chip icon="time-outline" iconSize={12} label="10 min" variant="frosted" />
        </View>
      </View>

      {/* Illustration area */}
      <View style={styles.illustrationArea}>
        <Text style={styles.illustrationPlaceholder}>👩‍🎨</Text>
      </View>

      {/* Category + Title */}
      <View style={styles.textSection}>
        <Text style={styles.category}>{course.category}</Text>
        <Text style={styles.title}>{course.title}</Text>
      </View>

      {/* Start learning button with foggy blur effect */}
      <BlurCard
        intensity={65}
        tint="light"
        borderRadius={56}
        backgroundColor="rgba(255,255,255,0.5)"
        style={styles.ctaBlurCard}
      >
        <TouchableOpacity style={styles.ctaButton} onPress={onPress} activeOpacity={0.8}>
          <Text style={styles.ctaLabel}>Start learning</Text>
          <Ionicons name="play" size={16} color="#010000" />
        </TouchableOpacity>
      </BlurCard>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 380,
    borderRadius: 32,
    padding: 24,
    marginRight: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  metaChips: {
    gap: 6,
    alignItems: 'flex-end',
  },
  illustrationArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationPlaceholder: {
    fontSize: 120,
  },
  textSection: {
    gap: 4,
    marginBottom: 16,
  },
  category: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Regular',
    color: 'rgba(1,0,0,0.5)',
  },
  title: {
    fontSize: 24,
    letterSpacing: -0.264,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  ctaBlurCard: {
    marginHorizontal: 0,
  },
  ctaButton: {
    flexDirection: 'row',
    borderRadius: 56,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  ctaLabel: {
    fontSize: 15,
    letterSpacing: -0.165,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
});
