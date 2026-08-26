import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { Lesson } from '../../types/index';

interface LessonListItemProps {
  lesson: Lesson;
  onPress?: () => void;
}

const PlayIcon = () => (
  <Svg width={12} height={14} viewBox="0 0 12 14" fill="none">
    <Path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#FFFFFF" />
  </Svg>
);

const LockIcon = () => (
  <Svg width={14} height={16} viewBox="0 0 14 16" fill="none">
    <Path
      d="M11 7V5C11 2.79 9.21 1 7 1C4.79 1 3 2.79 3 5V7H2C1.45 7 1 7.45 1 8V14C1 14.55 1.45 15 2 15H12C12.55 15 13 14.55 13 14V8C13 7.45 12.55 7 12 7H11ZM7 11.5C6.17 11.5 5.5 10.83 5.5 10C5.5 9.17 6.17 8.5 7 8.5C7.83 8.5 8.5 9.17 8.5 10C8.5 10.83 7.83 11.5 7 11.5ZM9 7H5V5C5 3.9 5.9 3 7 3C8.1 3 9 3.9 9 5V7Z"
      fill="#708892"
    />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={14} height={11} viewBox="0 0 14 11" fill="none">
    <Path
      d="M1 5.5L5 9.5L13 1.5"
      stroke="#7CA62B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LessonListItem: React.FC<LessonListItemProps> = ({ lesson, onPress }) => {
  const isLocked = lesson.status === 'locked';
  const isCompleted = lesson.status === 'completed';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: lesson.backgroundColor },
        isLocked && styles.lockedOpacity,
      ]}
      onPress={isLocked ? undefined : onPress}
      activeOpacity={isLocked ? 1 : 0.8}
    >
      {/* Text side */}
      <View style={styles.textArea}>
        <Text style={[styles.title, isLocked && styles.lockedText]}>{lesson.title}</Text>
        {lesson.status === 'active' && lesson.progress !== undefined ? (
          <View style={styles.progressRow}>
            <View style={styles.progressRail}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${lesson.progress * 100}%` as `${number}%` },
                ]}
              />
            </View>
            <Text style={styles.progressLabel}>{Math.round(lesson.progress * 100)}%</Text>
          </View>
        ) : null}
        {isCompleted ? <Text style={styles.completedLabel}>Completed</Text> : null}
        {isLocked ? <Text style={styles.lockedLabel}>Locked</Text> : null}
      </View>

      {/* Action icon */}
      <View
        style={[
          styles.iconCircle,
          isLocked ? styles.iconLocked : isCompleted ? styles.iconCompleted : styles.iconActive,
        ]}
      >
        {isLocked ? <LockIcon /> : isCompleted ? <CheckIcon /> : <PlayIcon />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 96,
    borderRadius: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  lockedOpacity: {
    opacity: 0.6,
  },
  textArea: {
    flex: 1,
    marginRight: 12,
    gap: 6,
  },
  title: {
    fontSize: 16,
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  lockedText: {
    color: '#708892',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  progressRail: {
    flex: 1,
    height: 4,
    backgroundColor: '#F5F5F5',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7CA62B',
    borderRadius: 999,
  },
  progressLabel: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
  completedLabel: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#7CA62B',
  },
  lockedLabel: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
  iconCircle: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActive: {
    backgroundColor: '#161A34',
  },
  iconCompleted: {
    backgroundColor: 'rgba(124,166,43,0.15)',
  },
  iconLocked: {
    backgroundColor: 'rgba(244,243,243,0.7)',
  },
});
