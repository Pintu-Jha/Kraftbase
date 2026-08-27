import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontFamilies } from '../../theme';
import { textScale } from '../../theme/responsive';

export const DictionaryScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Dictionary</Text>
        <Text style={styles.subtitle}>Browse words and their meanings</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    textAlign: 'center',
  },
});
