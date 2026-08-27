import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../../theme';

interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  borderRadius?: number;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  children,
  backgroundColor = colors.white,
  borderRadius = 32,
  style,
}) => {
  return (
    <View style={[styles.card, { backgroundColor, borderRadius }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
});
