import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, fontFamilies } from '../../../theme';
import { textScale } from '../../../theme/responsive';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'filled' | 'outline';
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ label, onPress, variant = 'filled', style }) => {
  return (
    <TouchableOpacity
      style={[styles.base, variant === 'outline' ? styles.outline : styles.filled, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.label, variant === 'outline' ? styles.labelOutline : styles.labelFilled]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 56,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  filled: {
    backgroundColor: colors.btn,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.btn,
  },
  label: {
    fontSize: textScale(16),
    letterSpacing: -0.176,
    fontFamily: fontFamilies.interSemiBold,
  },
  labelFilled: {
    color: colors.white,
  },
  labelOutline: {
    color: colors.btn,
  },
});
