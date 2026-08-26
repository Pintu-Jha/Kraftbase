import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface ChipProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  backgroundColor = 'rgba(244,243,243,0.7)',
  textColor = '#010000',
  style,
}) => {
  return (
    <View style={[styles.chip, { backgroundColor }, style]}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderRadius: 56,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
  },
});
