import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, Image } from 'react-native';
import { BlurCard } from '../ui/BlurCard';
import { scale, verticalScale, moderateScale, textScale } from '../../theme/responsive';
import { colors } from '../../theme/colors';
import Svg, { Circle, G } from 'react-native-svg';
import { ProgressRing } from '../../assets/icons/svg/ProgressRing';
import aiBuddyImage from '../../assets/icons/Static/AIBuddy.png';

interface AiBuddyProgressProps {
  message: string;
  progress: number;
  style?: StyleProp<ViewStyle>
}

export const AiBuddyProgress: React.FC<AiBuddyProgressProps> = ({
  message,
  progress,
  style
}) => {
  const size = scale(45);
  const strokeWidth = scale(5);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <BlurCard
      intensity={21}
      tint="light"
      borderRadius={moderateScale(25)}
      backgroundColor={colors.frostedLessonBanner}
      style={StyleSheet.flatten(style)}
    >
      <View style={styles.content}>
        <View style={styles.leftGroup}>
          <View style={styles.avatarContainer}>
            <Image
              source={aiBuddyImage}
              style={styles.avatarImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.textContent}>
            <Text
              style={styles.label}
              numberOfLines={1}
              ellipsizeMode="tail"
              adjustsFontSizeToFit
              minimumFontScale={0.85}
            >
              Your Ai buddy
            </Text>
            <Text
              style={styles.message}
              numberOfLines={1}
              ellipsizeMode="tail"
              adjustsFontSizeToFit
              minimumFontScale={0.8}
            >
              {message}
            </Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.circleBackground} />
          <ProgressRing width={size} height={size} fillColor={colors.progressRingBackground} />
          <Svg width={size} height={size} style={styles.progressOverlay}>
            <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(11),
  },
  leftGroup: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
    marginRight: scale(8),
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarImage: {
    width: scale(34),
    height: scale(34),
  },
  textContent: {
    flex: 1, 
    gap: verticalScale(7),
  },
  label: {
    fontSize: textScale(12),
    letterSpacing: -0.132,
    fontFamily: 'Inter-Regular',
    color: colors.black50,
  },
  message: {
    fontSize: textScale(14),
    letterSpacing: -0.154,
    fontFamily: 'Inter-Medium',
    color: colors.black,
  },
  progressContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0, 
  },
  circleBackground: {
    position: 'absolute',
    width: scale(55),
    height: scale(55),
    borderRadius: scale(27.5),
    backgroundColor: colors.translucentWhite,
  },
  progressOverlay: {
    position: 'absolute',
  },
  percentageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    fontSize: textScale(12),
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: colors.black,
  },
});