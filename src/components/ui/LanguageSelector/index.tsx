import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
      <Ionicons name="chevron-down" size={14} color="#708892" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(244,243,243,0.7)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
  },
  flagEmoji: {
    fontSize: 16,
  },
  languageText: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
});
