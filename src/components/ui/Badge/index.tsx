import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, fontFamilies } from '../../../theme';
import { textScale } from '../../../theme/responsive';

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
          backgroundColor: active ? colors.badgeActive : colors.badgeInactive,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.badgeText,
          { fontSize: textScale(size * 0.5), color: active ? colors.white : colors.gray },
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
    fontFamily: fontFamilies.interSemiBold,
    letterSpacing: -0.132,
  },
});
