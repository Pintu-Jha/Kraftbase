import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontFamilies } from '../../theme';
import { textScale } from '../../theme/responsive';

export const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Profile screen coming soon...</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: textScale(32),
    fontFamily: fontFamilies.interSemiBold,
    color: colors.btn,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: textScale(16),
    fontFamily: fontFamilies.interRegular,
    color: colors.gray,
  },
});
