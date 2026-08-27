import React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { ProgressRing } from '../../../assets/icons/svg/ProgressRing';
import { Play } from '../../../assets/icons/svg/Play';
import { scale } from '../../../theme/responsive';
import { colors } from '../../../theme';

interface ProgressPlayButtonProps {
  progress: number; // 0-1
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  playButtonSize?: number;
  playIconSize?: number;
  onPress?: () => void;
  style?: ViewStyle;
}

export const ProgressPlayButton: React.FC<ProgressPlayButtonProps> = ({
  progress,
  size = scale(46),
  strokeWidth = 4,
  strokeColor = colors.robotStroke,
  playButtonSize = scale(40),
  playIconSize = scale(18),
  onPress,
  style,
}) => {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - clampedProgress);

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      {/* Background circle */}
      <View style={styles.progressBackground}>
        <ProgressRing width={size} height={size} />
      </View>

      {/* Animated progress ring */}
      <Svg width={size} height={size} style={styles.progressRing}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      {/* Play button */}
      <TouchableOpacity
        style={[
          styles.playButton,
          { width: playButtonSize, height: playButtonSize, borderRadius: playButtonSize / 2 },
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Play width={playIconSize} height={playIconSize} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  progressBackground: {
    position: 'absolute',
  },
  progressRing: {
    position: 'absolute',
  },
  playButton: {
    position: 'absolute',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
});
