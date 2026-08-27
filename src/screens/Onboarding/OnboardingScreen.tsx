import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme';
import { FeatureCardStack } from '../../components/composite/FeatureCardStack';
import { OnboardingBackgroundCurve } from '../../assets/illustrations/OnboardingBackgroundCurve';
import { LOGO } from '../../assets/icons/svg/LOGO';
import { LogoRing } from '../../assets/icons/svg/LogoRing';
import { scale, verticalScale, textScale } from '../../theme/responsive';
import type { OnboardingScreenProps } from '../../navigation/types';

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const handleSignUp = () => navigation.navigate('MainTabs');
  const handleLogIn = () => navigation.navigate('MainTabs');

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <View style={styles.backgroundCurveContainer}>
          <OnboardingBackgroundCurve />
        </View>

        <View style={styles.header}>
          <View style={styles.logoRing}>
            <LogoRing/>
            <View style={styles.logoCenter}>
              <LOGO width={scale(41)} height={scale(25)} />
            </View>
          </View>
          <Text style={styles.appName}>SmartLearn</Text>
        </View>

   
        <View style={styles.cardsContainer}>
          <FeatureCardStack />
        </View>

        <View style={styles.minGap} />

        <View style={styles.buttonsContainer}>
          <Button label="Sign up" variant="filled" onPress={handleSignUp} />
          <View style={styles.buttonSpacer} />
          <Button label="Log in" variant="outline" onPress={handleLogIn} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? verticalScale(20) : 0,
  },
  backgroundCurveContainer: {
    position: 'absolute',
    top: verticalScale(-60),
    left: scale(60),
    zIndex: -1,
  },
  header: {
    alignItems: 'center',
    paddingTop: verticalScale(20),
  },
  logoRing: {
    width: scale(87),
    height: scale(87),
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCenter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: textScale(24),
    letterSpacing: -0.264,
    fontFamily: 'Inter-Medium',
    color: colors.black,
    textAlign: 'center',
  },

  cardsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minGap: {
    height: verticalScale(28),
  },
  buttonsContainer: {
    paddingHorizontal: scale(34),
    paddingBottom: verticalScale(24),
  },
  buttonSpacer: {
    height: verticalScale(12),
  },
});