import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ChipVariant = 'filled' | 'outline' | 'frosted';

interface ChipProps {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap | string; // Ionicon name or emoji
  iconSize?: number;
  variant?: ChipVariant;
  active?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

/**
 * Chip - Reusable pill-shaped badge component
 * Used for: meta info chips (lessons, duration), filter chips, category tags
 * Variants: filled (active filter), outline (inactive), frosted (with blur)
 */
export const Chip: React.FC<ChipProps> = ({
  label,
  icon,
  iconSize = 12,
  variant = 'outline',
  active = false,
  onPress,
  style,
}) => {
  const isEmoji = icon && icon.length <= 2; // Simple emoji detection
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      style={[
        styles.chip,
        variant === 'filled' && (active ? styles.chipFilledActive : styles.chipFilledInactive),
        variant === 'outline' && styles.chipOutline,
        variant === 'frosted' && styles.chipFrosted,
        style,
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      {icon ? (
        isEmoji ? (
          <Text style={styles.emoji}>{icon}</Text>
        ) : (
          <Ionicons
            name={icon as keyof typeof Ionicons.glyphMap}
            size={iconSize}
            color={active && variant === 'filled' ? '#FFFFFF' : '#708892'}
          />
        )
      ) : null}
      <Text
        style={[
          styles.label,
          variant === 'filled' && (active ? styles.labelFilledActive : styles.labelFilledInactive),
          variant === 'outline' && styles.labelOutline,
          variant === 'frosted' && styles.labelFrosted,
        ]}
      >
        {label}
      </Text>
    </Component>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 56,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
    alignSelf: 'flex-start',
  },
  chipFilledActive: {
    backgroundColor: '#1C274C',
  },
  chipFilledInactive: {
    backgroundColor: 'transparent',
  },
  chipOutline: {
    backgroundColor: 'rgba(244,243,243,0.7)',
    borderWidth: 0,
  },
  chipFrosted: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  emoji: {
    fontSize: 14,
  },
  label: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
  },
  labelFilledActive: {
    color: '#FFFFFF',
  },
  labelFilledInactive: {
    color: '#708892',
  },
  labelOutline: {
    color: '#708892',
  },
  labelFrosted: {
    color: '#010000',
  },
});
