import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  size?: number; // Button size (width/height)
  iconSize?: number; // Icon size
  backgroundColor?: string;
  iconColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

/**
 * IconButton - Reusable circular icon button
 * Used for: notification bell, back arrow, play buttons, nav buttons
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 48,
  iconSize = 20,
  backgroundColor = 'rgba(240,239,239,0.4)',
  iconColor = '#010000',
  onPress,
  style,
  disabled = false,
}) => {
  const borderRadius = size / 2;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius,
          backgroundColor,
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Ionicons name={icon} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
