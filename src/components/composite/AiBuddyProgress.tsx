import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurCard } from '../ui/BlurCard';
import { ProgressRing } from '../../assets/icons/svg/ProgressRing';
import { scale, verticalScale, moderateScale, textScale } from '../../theme/responsive';
import { colors } from '../../theme/colors';
import Svg, { Circle, G } from 'react-native-svg';

interface AiBuddyProgressProps {
  message: string;
  progress: number; // 0-100
}

export const AiBuddyProgress: React.FC<AiBuddyProgressProps> = ({
  message,
  progress,
}) => {
  const size = scale(80);
  const strokeWidth = scale(6);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <BlurCard
      intensity={75}
      tint="light"
      borderRadius={moderateScale(24)}
      backgroundColor="rgba(255,255,255,0.5)"
      style={styles.container}
    >
      <View style={styles.content}>
        {/* AI Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <View style={styles.robotFace}>
              <View style={styles.robotEyes}>
                <View style={styles.eye} />
                <View style={styles.eye} />
              </View>
              <View style={styles.robotMouth} />
            </View>
          </View>
          <View style={styles.sparkle} />
        </View>

        {/* Text Content */}
        <View style={styles.textContent}>
          <Text style={styles.label}>Your Ai buddy</Text>
          <Text style={styles.message}>{message}</Text>
        </View>

        {/* Progress Ring */}
        <View style={styles.progressContainer}>
          <Svg width={size} height={size}>
            <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
              {/* Background Circle */}
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={colors.incomplete}
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              {/* Progress Circle */}
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={colors.completed}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </G>
          </Svg>
          <View style={styles.percentageContainer}>
            <Text style={styles.percentage}>{Math.round(progress)}%</Text>
          </View>
        </View>
      </View>
    </BlurCard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(20),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
    gap: scale(12),
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: scale(64),
    height: scale(64),
    borderRadius: scale(32),
    backgroundColor: colors.robotAvatarCircleBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotFace: {
    alignItems: 'center',
    gap: verticalScale(6),
  },
  robotEyes: {
    flexDirection: 'row',
    gap: scale(8),
  },
  eye: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: '#00E5FF',
  },
  robotMouth: {
    width: scale(20),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: '#00E5FF',
  },
  sparkle: {
    position: 'absolute',
    top: scale(-4),
    right: scale(-4),
    width: scale(16),
    height: scale(16),
    backgroundColor: '#7CA62B',
    borderRadius: scale(8),
  },
  textContent: {
    flex: 1,
    gap: verticalScale(2),
  },
  label: {
    fontSize: textScale(13),
    letterSpacing: -0.143,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
  },
  message: {
    fontSize: textScale(16),
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
  },
  progressContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    fontSize: textScale(18),
    letterSpacing: -0.198,
    fontFamily: 'Inter-Bold',
    color: colors.black,
  },
});
