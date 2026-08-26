import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurCard } from '../ui/BlurCard';
import { Avatar } from '../ui/Avatar';
import { IconButton } from '../ui/IconButton';
import { Chip } from '../ui/Chip';

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
      <View style={styles.topSection}>
        <View style={styles.leftContent}>
          <Avatar size={44} backgroundColor="#3C425F" emoji="🤖" />
          <View style={styles.textBlock}>
            <Text style={styles.labelText}>Your A.i buddy</Text>
            <Text style={styles.mainText}>You're learning great today!</Text>
          </View>
        </View>

        <View style={styles.illustrationArea}>
          <Text style={styles.illustrationPlaceholder}>👩‍🎓</Text>
        </View>
      </View>

      <BlurCard
        intensity={50}
        tint="light"
        borderRadius={24}
        backgroundColor="rgba(255,255,255,0.4)"
        style={styles.bottomBlurCard}
      >
        <View style={styles.bottomSection}>
          <View style={styles.pickInfo}>
            <Text style={styles.pickTitle}>Today's pick: {category}</Text>

            <View style={styles.metaRow}>
              <Chip
                icon="book-outline"
                iconSize={14}
                label={`${lessonCount} lessons`}
                variant="frosted"
              />
              <Chip
                icon="time-outline"
                iconSize={14}
                label={`${durationMinutes} min`}
                variant="frosted"
              />
            </View>
          </View>

          <View style={styles.rightActions}>
            <Text style={styles.progressText}>{percentComplete}% complete</Text>
            <IconButton
              icon="play"
              size={56}
              iconSize={24}
              backgroundColor="#FFFFFF"
              onPress={onPlayPress}
              style={styles.playButtonShadow}
            />
          </View>
        </View>
      </BlurCard>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E8EFF5',
    borderRadius: 32,
    padding: 20,
    gap: 16,
  },
  bottomBlurCard: {
    marginHorizontal: 0,
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
    padding: 16,
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
    gap: 8,
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
  playButtonShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
});
