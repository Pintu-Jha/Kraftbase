import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurCard } from '../ui/BlurCard';
import { IconButton } from '../ui/IconButton';
import { Chip } from '../ui/Chip';
import { KidWithLearn } from '../../assets/illustrations/KidWithLearn';
import { Lessons } from '../../assets/icons/svg/Lesson';
import { Clock } from '../../assets/icons/svg/Clock';
import { scale, verticalScale, moderateScale, textScale } from '../../theme/responsive';
import { colors } from '../../theme/colors';

interface LessonHeroProps {
  category: string;
  title: string;
  subtitle: string;
  lessonCount: number;
  duration: string;
  onBackPress: () => void;
}

export const LessonHero: React.FC<LessonHeroProps> = ({
  category,
  title,
  subtitle,
  lessonCount,
  duration,
  onBackPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <BlurCard
        intensity={75}
        tint="light"
        borderRadius={moderateScale(28)}
        backgroundColor="rgba(255,255,255,0.15)"
        style={styles.backButtonBlur}
      >
        <IconButton
          icon="arrow-back"
          size={scale(48)}
          iconSize={scale(20)}
          backgroundColor="transparent"
          onPress={onBackPress}
        />
      </BlurCard>

      {/* Content Area */}
      <View style={styles.content}>
        {/* Text Section */}
        <View style={styles.textSection}>
          <Text style={styles.category}>{category}</Text>
          <View>
            <Text style={styles.title} numberOfLines={3} adjustsFontSizeToFit>
              {title}
              <Text style={styles.subtitle}> {subtitle}</Text>
            </Text>
          </View>

          {/* Info Chips */}
          <View style={styles.chipsRow}>
            <Chip
              icon={<Lessons width={scale(16)} height={scale(16)} />}
              label={`${lessonCount} lessons`}
              variant="frosted"
            />
            <Chip
              icon={<Clock width={scale(16)} height={scale(16)} />}
              label={duration}
              variant="frosted"
            />
          </View>
        </View>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <KidWithLearn 
            width={scale(200)} 
            height={verticalScale(240)} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.heroBackground,
    borderBottomLeftRadius: moderateScale(32),
    borderBottomRightRadius: moderateScale(32),
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(100),
    overflow: 'visible',
  },
  backButtonBlur: {
    width: scale(48),
    height: scale(48),
    marginBottom: verticalScale(12),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textSection: {
    flex: 1,
    gap: verticalScale(12),
    paddingRight: scale(100),
    maxWidth: '65%',
    zIndex: 2,
  },
  category: {
    fontSize: textScale(14),
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
  },
  title: {
    fontSize: textScale(32),
    letterSpacing: -0.352,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
    lineHeight: textScale(38),
    flexShrink: 1,
  },
  subtitle: {
    fontSize: textScale(32),
    letterSpacing: -0.352,
    fontFamily: 'Inter-Medium',
    color: colors.black,
    flexShrink: 1,
  },
  chipsRow: {
    flexDirection: 'row',
    gap: scale(8),
    marginTop: verticalScale(4),
  },
  illustrationContainer: {
    position: 'absolute',
    right: scale(-30),
    top: verticalScale(20),
    zIndex: 1,
  },
});
