import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurCard } from '../ui/BlurCard';
import { Chip } from '../ui/Chip';
import { KidWithPainting } from '../../assets/illustrations/KidWithPainting';
import { Play } from '../../assets/icons/svg/Play';
import { Colors } from '../../assets/icons/svg/Colors';
import { Letters } from '../../assets/icons/svg/Letters';
import { Lessons } from '../../assets/icons/svg/Lesson';
import { Clock } from '../../assets/icons/svg/Clock';
import { scale, verticalScale, moderateScale, textScale } from '../../theme/responsive';
import { colors } from '../../theme/colors';
import type { Course } from '../../types/index';

interface CourseCardProps {
  course: Course;
  onPress: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onPress }) => {
  const IconComponent = course.type.toLowerCase().includes('colors') ? Colors : Letters;

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: course.backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <IconComponent/>
        </View>

        <View style={styles.metaChips}>
          <Chip
            icon={<Lessons width={12} height={12} />}
            label={`${course.lessonCount} lessons`}
            variant="frosted"
          />
          <Chip
            icon={<Clock width={12} height={12} />}
            label="10 min"
            variant="frosted"
          />
        </View>
      </View>

      <View style={styles.textSection}>
        <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit>
          {course.title}
        </Text>
        <Text style={styles.subTitle}>
          {course.subTitle}
        </Text>
      </View>

      <View style={styles.contentArea}>
        <View style={styles.illustrationWrap}>
          <KidWithPainting width={scale(145)} height={verticalScale(146)} />
        </View>

        <BlurCard
          intensity={50}
          tint="light"
          borderRadius={moderateScale(64)}
          backgroundColor={colors.frostedLessonBanner}
          style={styles.ctaBlurCard}
        >
          <TouchableOpacity style={styles.ctaButton} onPress={onPress} activeOpacity={0.8}>
            <Text style={styles.ctaLabel}>Start learning</Text>
            <View style={styles.playButtonCircle}>
              <Play width={scale(18)} height={scale(18)} />
            </View>
          </TouchableOpacity>
        </BlurCard>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: scale(280),
    height: verticalScale(315),
    borderRadius: moderateScale(32),
    padding: scale(12),
    marginRight: scale(16),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metaChips: {
    flexDirection: 'row',
    gap: scale(2),
    alignItems: 'center',
  },
  textSection: {
    gap: verticalScale(2),
    alignItems: 'flex-start',
    marginTop: verticalScale(20),
    paddingRight: scale(8),
  },
  title: {
    fontSize: textScale(14),
    letterSpacing: -1.1,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
  },
  subTitle: {
    fontSize: textScale(28),
    letterSpacing: -1.1,
    fontFamily: 'Inter-Medium',
    color: colors.black,
    lineHeight: textScale(32),
  },
  contentArea: {
    flex: 1,
    position: 'relative',
  },
  illustrationWrap: {
    position: 'absolute',
    right: scale(30),
    bottom: verticalScale(25),
  },
  ctaBlurCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginHorizontal: 0,
  },
  ctaButton: {
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    paddingLeft: scale(21),
    paddingRight: scale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ctaLabel: {
    fontSize: textScale(18),
    letterSpacing: -0.198,
    fontFamily: 'Inter-SemiBold',
    color: colors.buttonLabel,
    flex: 1,
  },
  playButtonCircle: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
});