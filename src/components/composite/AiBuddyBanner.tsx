import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressRing } from '../ui/ProgressRing';

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
      {/* Top row: Robot + text + progress ring */}
      <View style={styles.topRow}>
        <View style={styles.robotAvatar}>
          <Text style={styles.robotEmoji}>🤖</Text>
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.labelText}>Your A.i buddy</Text>
          <Text style={styles.mainText}>You're learning great today!</Text>
        </View>

        <View style={styles.progressContainer}>
          <ProgressRing size={56} strokeWidth={4} progress={progress} />
          <View style={styles.progressTextOverlay}>
            <Text style={styles.progressPercent}>{percentComplete}%</Text>
          </View>
        </View>
      </View>

      {/* Bottom row: Today's pick info + play button */}
      <View style={styles.bottomRow}>
        <View style={styles.pickInfo}>
          <Text style={styles.pickLabel}>Today's pick: {category}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaChip}>
              <Ionicons name="book-outline" size={12} color="#708892" />
              <Text style={styles.metaText}>{lessonCount} lessons</Text>
            </View>

            <View style={styles.metaChip}>
              <Ionicons name="time-outline" size={12} color="#708892" />
              <Text style={styles.metaText}>{durationMinutes} min</Text>
            </View>
          </View>

          <Text style={styles.completeText}>{percentComplete}% complete</Text>
        </View>

        <TouchableOpacity
          style={styles.playButton}
          onPress={onPlayPress}
          activeOpacity={0.8}
        >
          <Ionicons name="play" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EAF1F9',
    borderRadius: 32,
    padding: 20,
    gap: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  robotAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3C425F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotEmoji: {
    fontSize: 24,
  },
  textBlock: {
    flex: 1,
    gap: 2,
  },
  labelText: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Regular',
    color: 'rgba(1,0,0,0.5)',
  },
  mainText: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  progressContainer: {
    position: 'relative',
    width: 56,
    height: 56,
  },
  progressTextOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPercent: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickInfo: {
    flex: 1,
    gap: 6,
  },
  pickLabel: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Medium',
    color: '#010000',
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
  },
  metaChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 56,
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    letterSpacing: -0.121,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
  completeText: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#7CA62B',
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#161A34',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
