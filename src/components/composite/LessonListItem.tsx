import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import type { Lesson } from '../../types/index';
import { scale, verticalScale, moderateScale, textScale } from '../../theme/responsive';
import { colors } from '../../theme';
import { Play } from '../../assets/icons/svg/Play';

interface LessonListItemProps {
  lesson: Lesson;
  onPress?: () => void;
}



const ClockIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Circle cx={7} cy={7} r={6.5} stroke="#161A34" strokeWidth={1} fill="none" />
    <Path d="M7 3.5V7L9.5 9.5" stroke="#161A34" strokeWidth={1} strokeLinecap="round" />
  </Svg>
);

export const LessonListItem: React.FC<LessonListItemProps> = ({ lesson, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: lesson.backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Top row: Title and Duration */}
      <View style={styles.topRow}>
        <Text style={styles.title} numberOfLines={1}>
          {lesson.title}
        </Text>
        <View style={styles.durationBadge}>
          <ClockIcon />
          <Text style={styles.durationText}>{lesson.duration}</Text>
        </View>
      </View>

      {/* Bottom row: Description and Replay button */}
      <View style={styles.bottomRow}>
        <Text style={styles.description} numberOfLines={2}>
          {lesson.description}
        </Text>
        <View style={styles.replayButton}>
          <Text style={styles.replayText}>{lesson.buttonText ?? 'Start'}</Text>
          <View style={styles.playCircle}>
            <Play fill={'#fff'} width={scale(10)} height={scale(10)}/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(32),
    padding: scale(20),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
  title: {
    flex: 1,
    fontSize: textScale(16),
    letterSpacing: -1.1,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  durationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
    backgroundColor:'#FFFFFF61',
    paddingVertical:verticalScale(6),
    paddingHorizontal:scale(8),
    borderRadius:moderateScale(24)
  },
  durationText: {
    fontSize: textScale(10),
    letterSpacing: -0.154,
    fontFamily: 'Inter-SemiBold',
    color: '#161A34',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: scale(12),
  },
  description: {
    flex: 1,
    fontSize: textScale(12),
    letterSpacing: -1.1,
    fontFamily: 'Inter-Regular',
    color: colors.black50,
  },
  replayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: moderateScale(28),
    paddingVertical: verticalScale(6),
    paddingLeft: scale(8),
    paddingRight: scale(12),
    gap: scale(6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  replayText: {
    fontSize: textScale(11),
    letterSpacing: -0.121,
    fontFamily: 'Inter-SemiBold',
    color: colors.buttonLabel,
  },
  playCircle: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    backgroundColor: colors.darkIconButtonBg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
});
