import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurCard } from '../ui/BlurCard';
import { Avatar } from '../ui/Avatar';
import { ProgressPlayButton } from '../ui/ProgressPlayButton';
import { AiBuddyCardCurve } from '../../assets/illustrations/AiBuddyCardCurve';
import { KidWithPen } from '../../assets/illustrations/KidWithPen';
import { BulbIcon } from '../../assets/icons/svg/Bulb';
import { StarIcon } from '../../assets/icons/svg/StarIcon';
import { Lessons } from '../../assets/icons/svg/Lesson';
import { Clock } from '../../assets/icons/svg/Clock';
import { scale, verticalScale, textScale } from '../../theme/responsive';
import { colors, fontFamilies } from '../../theme';

interface AiBuddyBannerProps {
  progress: number;
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
      <View style={styles.curveWrap} pointerEvents="none">
        <AiBuddyCardCurve width={scale(385)} height={verticalScale(224)} />
      </View>

      <View style={styles.illustrationLayer} pointerEvents="none">
        <KidWithPen width={scale(77)} height={verticalScale(106)} />
        <View style={styles.bulbWrap}>
          <BulbIcon width={scale(19)} height={scale(26)} />
        </View>
      </View>

      <View style={styles.topSection}>
        <View style={styles.leftContent}>
          <View style={styles.avatarCluster}>
            <Avatar size={scale(44)} backgroundColor={colors.robotAvatarCircleBg} emoji="🤖" />
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.labelText}>Your A.i buddy</Text>
            <Text style={styles.mainText}>You're learning great today!</Text>
          </View>
        </View>
      </View>

      <BlurCard
        intensity={21}
        tint="light"
        borderRadius={32}
        backgroundColor={colors.translucentWhiteStrong}
        style={styles.bottomBlurCard}
      >
        <View style={styles.bottomSection}>
          <View style={styles.pickInfo}>
            <Text style={styles.pickTitle}>Today's pick: {category}</Text>

            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Lessons width={scale(12)} height={scale(12)} />
                <Text style={styles.metaText}>{lessonCount} lessons</Text>
              </View>
              <View style={styles.metaDivider} />
              <View style={styles.metaItem}>
                <Clock width={scale(12)} height={scale(12)} />
                <Text style={styles.metaText}>{durationMinutes} min</Text>
              </View>
            </View>
          </View>

          <View style={styles.rightActions}>
            <Text style={styles.progressText}>{percentComplete}% complete</Text>
            <ProgressPlayButton
              progress={progress}
              size={scale(46)}
              strokeWidth={4}
              strokeColor={colors.robotStroke}
              playButtonSize={scale(40)}
              playIconSize={scale(18)}
              onPress={onPlayPress}
            />
          </View>
        </View>
      </BlurCard>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.aiBuddyBannerBackground,
    borderRadius: 32,
    paddingTop: verticalScale(18),
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(42),
    position: 'relative',
  },
  bottomBlurCard: {
    position: 'absolute',
    left: scale(2),
    right: scale(2),
    bottom: verticalScale(2),
    zIndex: 1,
  },
  curveWrap: {
    position: 'absolute',
    right: scale(10),
    top: verticalScale(0),
    zIndex: 0,
  },
  illustrationLayer: {
    position: 'absolute',
    right: scale(30),
    top: verticalScale(-13),
    zIndex: 1,
  },
  bulbWrap: {
    position: 'absolute',
    top: verticalScale(15),
    right: scale(0),
    transform: [{ rotate: '56deg' }],
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: verticalScale(88),
    paddingRight: scale(100),
    marginBottom: verticalScale(4),
    zIndex: 1,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    flex: 1,
  },
  avatarCluster: {
    width: scale(44),
    height: scale(44),
    position: 'relative',
  },
  starTop: {
    position: 'absolute',
    top: verticalScale(-8),
    left: scale(-8),
    zIndex: 1,
  },
  starBottom: {
    position: 'absolute',
    bottom: verticalScale(-2),
    right: scale(-10),
  },
  textBlock: {
    // flex: 1,
    gap: 2,
    paddingTop: 2,
  },
  labelText: {
    fontSize: textScale(13),
    letterSpacing: -0.143,
    fontFamily: fontFamilies.interRegular,
    color: colors.mutedBodyText,
  },
  mainText: {
    fontSize: textScale(14),
    letterSpacing: -0.176,
    fontFamily: fontFamilies.interSemiBold,
    color: colors.black,
  },
   bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 6,
  },
  pickInfo: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
  },
   pickTitle: {
    fontSize: textScale(14),
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
    fontWeight:'500'
  },
   metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  metaDivider: {
    width: scale(4),
    height: scale(4),
    borderRadius: scale(2),
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginHorizontal: scale(4),
  },
  metaText: {
    fontSize: textScale(12),
    fontFamily: 'Inter-Regular',
    color: colors.mutedBodyTextStrong,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressText: {
    fontSize: textScale(13),
    letterSpacing: -0.143,
    fontFamily: 'Inter-Medium',
    color: colors.gray,
  },
});
