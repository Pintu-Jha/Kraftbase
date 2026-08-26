import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface BadgeProps {
  value: number | string;
  active?: boolean;
  size?: number;
  style?: ViewStyle;
}

/**
 * Badge - Small circular number counter
 * Used for: count badges inside filter chips, notification dots
 */
export const Badge: React.FC<BadgeProps> = ({
  value,
  active = false,
  size = 24,
  style,
}) => {
  const borderRadius = size / 2;

  return (
    <View
      style={[
        styles.badge,
        {
          minWidth: size,
          height: size,
          borderRadius,
          backgroundColor: active ? 'rgba(255,255,255,0.25)' : 'rgba(28,39,76,0.08)',
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.badgeText,
          { fontSize: size * 0.5, color: active ? '#FFFFFF' : '#708892' },
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  badgeText: {
    fontFamily: 'Inter-SemiBold',
    letterSpacing: -0.132,
  },
});
