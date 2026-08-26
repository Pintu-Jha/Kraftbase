import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

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
    backgroundColor: '#1C274C',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#1C274C',
  },
  label: {
    fontSize: 16,
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
  },
  labelFilled: {
    color: '#FFFFFF',
  },
  labelOutline: {
    color: '#1C274C',
  },
});
