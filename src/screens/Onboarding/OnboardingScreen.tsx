import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/ui/Button';
import { FeatureCardStack } from '../../components/composite/FeatureCardStack';
import { OnboardingBackgroundCurve } from '../../assets/illustrations/OnboardingBackgroundCurve';
import type { OnboardingScreenProps } from '../../navigation/types';

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const handleSignUp = () => {
    // No real auth - navigate directly to Home per plan assumptions
    navigation.navigate('Home');
  };

  const handleLogIn = () => {
    // No real auth - navigate directly to Home per plan assumptions
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      
      {/* Decorative background curve */}
      <OnboardingBackgroundCurve />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoRing}>
            <Ionicons name="book-outline" size={32} color="#71A6EE" />
          </View>
        </View>

        {/* App name */}
        <Text style={styles.appName}>SmartLearn</Text>

        {/* Tilted feature card stack */}
        <FeatureCardStack />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button label="Sign up" variant="filled" onPress={handleSignUp} />
          <Button label="Log in" variant="outline" onPress={handleLogIn} />
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 32,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 16,
  },
  logoRing: {
    width: 69,
    height: 69,
    borderRadius: 34.5,
    backgroundColor: 'rgba(202,221,247,0.3)',
    borderWidth: 2,
    borderColor: 'rgba(113,166,238,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 24,
    letterSpacing: -0.264,
    fontFamily: 'Inter-Medium',
    color: '#010000',
    marginBottom: 8,
  },
  buttonContainer: {
    width: '100%',
    gap: 8,
    marginTop: 'auto',
    paddingTop: 24,
  },
});
