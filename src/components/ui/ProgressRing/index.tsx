import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface ProgressRingProps {
  percentage: number; // 0-100
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  backgroundColor?: string;
  showPercentage?: boolean;
  style?: ViewStyle;
}

/**
 * ProgressRing - Circular SVG percentage indicator
 * Used for: progress display (12%, 20% complete)
 */
export const ProgressRing: React.FC<ProgressRingProps> = ({
  percentage,
  size = 56,
  strokeWidth = 4,
  strokeColor = '#7CA62B',
  backgroundColor = '#F5F5F5',
  showPercentage = false,
  style,
}) => {
  const progress = Math.max(0, Math.min(100, percentage)) / 100; // Clamp 0-1
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
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
      {showPercentage ? (
        <View style={styles.percentageOverlay}>
          <Text style={[styles.percentageText, { fontSize: size * 0.25 }]}>
            {Math.round(percentage)}%
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontFamily: 'Inter-SemiBold',
    letterSpacing: -0.154,
    color: '#010000',
  },
});
