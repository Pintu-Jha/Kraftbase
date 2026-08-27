import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontFamilies } from '../../../theme';
import { textScale } from '../../../theme/responsive';

interface LanguageSelectorProps {
  flagEmoji?: string;
  languageText?: string;
  onPress?: () => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  flagEmoji = '🇬🇧',
  languageText = 'English',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.languageButton}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.flagEmoji}>{flagEmoji}</Text>
      <Text style={styles.languageText}>{languageText}</Text>
      <Ionicons name="chevron-down" size={textScale(14)} color={colors.gray} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.neutralB,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
  },
  flagEmoji: {
    fontSize: textScale(16),
  },
  languageText: {
    fontSize: textScale(12),
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: colors.gray,
  },
});
