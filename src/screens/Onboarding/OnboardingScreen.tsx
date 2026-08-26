import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Button } from '../../components/ui/Button/index';
import { FeatureCardStack } from '../../components/composite/FeatureCardStack';
import type { OnboardingScreenProps } from '../../navigation/types';

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoRing}>
            <Text style={styles.logoEmoji}>🎓</Text>
          </View>
          <Text style={styles.logoText}>SmartLearn</Text>
        </View>

        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingPersonalized}>Personalized</Text>
          <Text style={styles.headingLearning}>Learning</Text>
          <Text style={styles.headingSubtitle}>
            A smart way to learn, track and grow every day.
          </Text>
        </View>

        {/* Feature card stack */}
        <View style={styles.cardStackContainer}>
          <FeatureCardStack />
        </View>

        {/* Feature tags */}
        <View style={styles.tagsRow}>
          <View style={[styles.featureTag, styles.featureTagPink]}>
            <Text style={styles.featureTagText}>🎯 Personalized</Text>
          </View>
          <View style={[styles.featureTag, styles.featureTagLime]}>
            <Text style={styles.featureTagText}>🔊 Fun Sounds</Text>
          </View>
          <View style={[styles.featureTag, styles.featureTagBlue]}>
            <Text style={styles.featureTagText}>📈 Progress</Text>
          </View>
        </View>

        {/* CTA buttons */}
        <View style={styles.buttonsContainer}>
          <Button label="Sign up" onPress={() => navigation.replace('Home')} variant="filled" />
          <Button
            label="Log in"
            onPress={() => navigation.replace('Home')}
            variant="outline"
            style={styles.loginButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 32,
  },
  logoRing: {
    width: 69,
    height: 69,
    borderRadius: 999,
    backgroundColor: '#1C274C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoEmoji: {
    fontSize: 32,
  },
  logoText: {
    fontSize: 24,
    letterSpacing: -0.264,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  headingContainer: {
    marginBottom: 32,
    gap: 4,
  },
  headingPersonalized: {
    fontSize: 30,
    letterSpacing: -0.33,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  headingLearning: {
    fontSize: 27,
    letterSpacing: -0.297,
    fontFamily: 'Inter-SemiBold',
    color: '#708892',
  },
  headingSubtitle: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: 'rgba(1,0,0,0.5)',
    marginTop: 8,
  },
  cardStackContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 32,
  },
  featureTag: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  featureTagPink: {
    backgroundColor: '#F2D1D0',
  },
  featureTagLime: {
    backgroundColor: '#DFF28A',
  },
  featureTagBlue: {
    backgroundColor: '#CADDF7',
  },
  featureTagText: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Medium',
    color: '#010000',
  },
  buttonsContainer: {
    gap: 12,
    marginTop: 'auto',
  },
  loginButton: {
    marginTop: 0,
  },
});
