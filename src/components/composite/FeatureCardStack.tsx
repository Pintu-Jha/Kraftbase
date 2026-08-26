import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PersonalizedCardCurve } from '../../assets/illustrations/PersonalizedCardCurve';
import KidOnApple from '../../assets/illustrations/KidOnApple';
import { StarIcon } from '../../assets/icons/svg/StarIcon';
import { scale, verticalScale, moderateScale, textScale } from '../../theme/responsive';


export const FeatureCardStack: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.card,
          styles.cardBack,
          { backgroundColor: '#F2D1D0' },
        ]}
      >
        <Text style={styles.cardLabel}>Instant Feedback</Text>
      </View>

      <View
        style={[
          styles.card,
          styles.cardMiddle,
          { backgroundColor: '#DFF28A' },
        ]}
      >
        <Text style={[styles.cardLabel, styles.cardLabelFaded]}>
          Fun Games & Activities
        </Text>
      </View>

      <View
        style={[
          styles.card,
          styles.cardFront,
          { backgroundColor: '#CADDF7' },
        ]}
      >
        <View style={styles.starIconWrapper}>
          <StarIcon width={scale(21)} height={scale(21)} />
        </View>

        <View style={styles.PersonalizedCardCurveillustrationWrapper}>
          <PersonalizedCardCurve />
        </View>

        <View style={styles.frontCardContent}>
          <View style={styles.textContent}>
            <View style={styles.titleRow}>
              <Text style={styles.titleText}>Personalized</Text>
            </View>
            <View style={styles.highlightPill}>
              <Text style={styles.highlightText}>Learning</Text>
            </View>

            <Text style={styles.bodyText}>
              Lessons adapt to your child's pace, focusing on what they need most.
            </Text>

            <View style={styles.pagination}>
              <View style={styles.dotActive} />
              <View style={styles.dotInactive} />
              <View style={styles.dotInactive} />
            </View>
          </View>
        </View>

        <View style={styles.illustrationWrapper}>
          <KidOnApple />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(450),
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    borderRadius: moderateScale(20),
    borderWidth: scale(7),
    borderColor: '#FFFFFF',
  },
  cardBack: {
    width: scale(200),
    height: verticalScale(133),
    transform: [{ rotate: '-7.95deg' }],
    top: verticalScale(40),
    right: scale(100),
    paddingTop: verticalScale(16),
    alignItems: 'center',
  },
  cardMiddle: {
    width: scale(270),
    height: verticalScale(180),
    transform: [{ rotate: '7.47deg' }],
    top: verticalScale(100),
    left: scale(60),
    paddingTop: verticalScale(16),
    alignItems: 'center',
  },
  cardFront: {
    width: scale(340),
    height: verticalScale(311),
    borderRadius: moderateScale(24),
    transform: [{ rotate: '-1.71deg' }],
    top: verticalScale(160),
    alignSelf: 'center',
    padding: moderateScale(20),
  },
  cardLabel: {
    fontSize: textScale(16),
    letterSpacing: -0.176,
    fontFamily: 'Inter-Medium',
    color: '#010000',
    textAlign: 'center',
  },
  cardLabelFaded: {
    opacity: 0.5,
  },
  frontCardContent: {
    flex: 1,
    zIndex: 1,
  },
  textContent: {
    gap: verticalScale(8),
    maxWidth: scale(180),
    paddingBottom: verticalScale(60),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: textScale(28),
    letterSpacing: -0.33,
    fontFamily: 'Inter-Medium',
    color: '#010000',
  },
  highlightPill: {
    backgroundColor: '#71A6EE',
    borderRadius: moderateScale(32),
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(3),
    alignSelf: 'flex-start',
    marginBottom: verticalScale(6),
  },
  highlightText: {
    fontSize: textScale(25),
    letterSpacing: -0.297,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
  },
  bodyText: {
    fontSize: textScale(13),
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: 'rgba(28,39,76,0.5)',
    lineHeight: textScale(18),
    flexWrap: 'wrap',
  },
  pagination: {
    flexDirection: 'row',
    gap: scale(6),
    marginTop: verticalScale(12),
  },
  dotActive: {
    width: scale(24),
    height: verticalScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: '#1C274C',
  },
  dotInactive: {
    width: scale(8),
    height: verticalScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: 'rgba(28,39,76,0.2)',
  },
  illustrationWrapper: {
    position: 'absolute',
    bottom: verticalScale(-25),
    right: scale(-15),
    zIndex: 2,
  },
  PersonalizedCardCurveillustrationWrapper: {
    position: 'absolute',
    bottom: verticalScale(55),
    right: scale(-5),
    zIndex: 1,
  },
  starIconWrapper: {
    position: 'absolute',
    top: verticalScale(-15),
    left: 0,
    zIndex: 3,
  },
  emojiAccent1: {
    position: 'absolute',
    fontSize: textScale(24),
    top: verticalScale(70),
    right: scale(60),
  },
  emojiAccent2: {
    position: 'absolute',
    fontSize: textScale(20),
    bottom: verticalScale(120),
    left: scale(20),
  },
});
