import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
      {/* Header: icon badge + meta chips */}
      <View style={styles.header}>
        <View style={styles.iconBadge}>
          <Text style={styles.badgeEmoji}>{course.imageEmoji || '📚'}</Text>
        </View>
        <View style={styles.metaChips}>
          <View style={styles.metaChip}>
            <Ionicons name="book-outline" size={10} color="#708892" />
            <Text style={styles.metaText}>{course.lessonCount}</Text>
          </View>
          <View style={styles.metaChip}>
            <Ionicons name="time-outline" size={10} color="#708892" />
            <Text style={styles.metaText}>15m</Text>
          </View>
        </View>
      </View>

      {/* Category label + Title */}
      <View style={styles.titleSection}>
        <Text style={[styles.category, { color: course.categoryColor }]}>{course.category}</Text>
        <Text style={styles.title}>{course.title}</Text>
      </View>

      {/* Emoji illustration area */}
      {course.imageEmoji ? (
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{course.imageEmoji}</Text>
        </View>
      ) : null}

      {/* Start learning button with play icon */}
      <TouchableOpacity style={styles.ctaButton} onPress={onPress} activeOpacity={0.8}>
        <Ionicons name="play-circle" size={18} color="#073647" />
        <Text style={styles.ctaLabel}>Start learning</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 315,
    borderRadius: 32,
    padding: 20,
    justifyContent: 'space-between',
    marginRight: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeEmoji: {
    fontSize: 20,
  },
  metaChips: {
    flexDirection: 'row',
    gap: 6,
  },
  metaChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(244,243,243,0.6)',
    borderRadius: 56,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 3,
  },
  metaText: {
    fontSize: 10,
    letterSpacing: -0.11,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
  titleSection: {
    gap: 4,
  },
  category: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
  },
  title: {
    fontSize: 28,
    letterSpacing: -0.308,
    fontFamily: 'Inter-SemiBold',
    color: '#073647',
  },
  emojiContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 64,
  },
  ctaButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.38)',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  ctaLabel: {
    fontSize: 16,
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
    color: '#073647',
  },
});
