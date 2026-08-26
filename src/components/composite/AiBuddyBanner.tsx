import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AiBuddyBannerProps {
  progress: number; // 0–1
  category: string;
  lessonCount: number;
  durationMinutes: number;
  onPlayPress?: () => void;
}

export const AiBuddyBanner: React.FC<AiBuddyBannerProps> = ({
  progress,
  category,
  lessonCount,
  durationMinutes,
  onPlayPress,
}) => {
  const percentComplete = Math.round(progress * 100);

  return (
    <View style={styles.card}>
      {/* Top section: Robot + text + illustration */}
      <View style={styles.topSection}>
        <View style={styles.leftContent}>
          <View style={styles.robotBadge}>
            <Text style={styles.robotEmoji}>🤖</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.labelText}>Your A.i buddy</Text>
            <Text style={styles.mainText}>You're learning great today!</Text>
          </View>
        </View>

        {/* Illustration placeholder - would be actual illustration in production */}
        <View style={styles.illustrationArea}>
          <Text style={styles.illustrationPlaceholder}>👩‍🎓</Text>
        </View>
      </View>

      {/* Bottom section: Today's pick + progress + play button */}
      <View style={styles.bottomSection}>
        <View style={styles.pickInfo}>
          <Text style={styles.pickTitle}>Today's pick: {category}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons name="book-outline" size={14} color="#708892" />
              <Text style={styles.metaText}>{lessonCount} lessons</Text>
            </View>

            <View style={styles.metaDivider} />

            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={14} color="#708892" />
              <Text style={styles.metaText}>{durationMinutes} min</Text>
            </View>
          </View>
        </View>

        <View style={styles.rightActions}>
          <Text style={styles.progressText}>{percentComplete}% complete</Text>
          <TouchableOpacity
            style={styles.playButton}
            onPress={onPlayPress}
            activeOpacity={0.8}
          >
            <Ionicons name="play" size={24} color="#010000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E8EFF5',
    borderRadius: 32,
    padding: 20,
    gap: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    flex: 1,
  },
  robotBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#3C425F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotEmoji: {
    fontSize: 24,
  },
  textBlock: {
    flex: 1,
    gap: 4,
  },
  labelText: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Regular',
    color: 'rgba(1,0,0,0.5)',
  },
  mainText: {
    fontSize: 16,
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  illustrationArea: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationPlaceholder: {
    fontSize: 48,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  pickInfo: {
    flex: 1,
    gap: 8,
  },
  pickTitle: {
    fontSize: 15,
    letterSpacing: -0.165,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaDivider: {
    width: 1,
    height: 12,
    backgroundColor: 'rgba(1,0,0,0.1)',
  },
  metaText: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Regular',
    color: '#708892',
  },
  rightActions: {
    alignItems: 'flex-end',
    gap: 8,
  },
  progressText: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
  playButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
});
