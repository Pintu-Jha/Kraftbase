import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PersonalizedCardCurve } from '../../assets/illustrations/PersonalizedCardCurve';
import KidOnApple from '../../assets/illustrations/KidOnApple';

/**
 * FeatureCardStack - Three overlapping rotated cards for onboarding screen
 * Card order: back (pink) -> middle (lime) -> front (blue main content)
 */
export const FeatureCardStack: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Card 1 - Back (Pink) */}
      <View
        style={[
          styles.card,
          styles.cardBack,
          { backgroundColor: '#F2D1D0' },
        ]}
      >
        <Text style={styles.cardLabel}>Instant Feedback</Text>
      </View>

      {/* Card 2 - Middle (Lime) */}
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

      {/* Card 3 - Front (Blue) - Main content card */}
      <View
        style={[
          styles.card,
          styles.cardFront,
          { backgroundColor: '#CADDF7' },
        ]}
      >
        {/* Decorative curved vector path */}
        <PersonalizedCardCurve />
        
        {/* Main content */}
        <View style={styles.frontCardContent}>
          {/* Left side - Text content */}
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

            {/* Pagination dots */}
            <View style={styles.pagination}>
              <View style={styles.dotActive} />
              <View style={styles.dotInactive} />
              <View style={styles.dotInactive} />
            </View>
          </View>
        </View>

        {/* Kid on apple illustration - positioned absolute bottom right */}
        <View style={styles.illustrationWrapper}>
          <KidOnApple width={180} height={190} />
        </View>
      </View>

      {/* Decorative emoji accents */}
      <Text style={styles.emojiAccent1}>💡</Text>
      <Text style={styles.emojiAccent2}>⭐</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
  card: {
    position: 'absolute',
    borderRadius: 20,
    borderWidth: 7,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  cardBack: {
    width: 200,
    height: 133,
    transform: [{ rotate: '-7.95deg' }],
    top: 80,
    right: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardMiddle: {
    width: 270,
    height: 180,
    transform: [{ rotate: '7.47deg' }],
    top: 110,
    left: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFront: {
    width: 340,
    height: 311,
    borderRadius: 24,
    transform: [{ rotate: '-1.71deg' }],
    top: 150,
    padding: 20,
    overflow: 'hidden',
  },
  cardLabel: {
    fontSize: 16,
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
    flex: 1,
    gap: 8,
    maxWidth: 200,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    letterSpacing: -0.33,
    fontFamily: 'Inter-Medium',
    color: '#010000',
  },
  highlightPill: {
    backgroundColor: '#71A6EE',
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  highlightText: {
    fontSize: 27,
    letterSpacing: -0.297,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
  },
  bodyText: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: 'rgba(28,39,76,0.5)',
    lineHeight: 20,
  },
  pagination: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 12,
  },
  dotActive: {
    width: 24,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1C274C',
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(28,39,76,0.2)',
  },
  illustrationWrapper: {
    position: 'absolute',
    bottom: -30,
    right: -20,
    zIndex: 2,
  },
  emojiAccent1: {
    position: 'absolute',
    fontSize: 24,
    top: 70,
    right: 60,
  },
  emojiAccent2: {
    position: 'absolute',
    fontSize: 20,
    bottom: 120,
    left: 20,
  },
});
