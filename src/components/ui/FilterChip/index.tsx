import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Badge } from '../Badge';

type FilterChipVariant = 'withIcon' | 'textOnly';

interface FilterChipProps {
  label: string;
  icon?: string; // Emoji or text icon
  count?: number;
  variant?: FilterChipVariant;
  active?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

/**
 * FilterChip - Interactive filter/category chip with optional icon and count badge
 * Used for: Home category filters, Analytics view filters
 * Variants: withIcon (Home screen), textOnly (Analytics tabs)
 */
export const FilterChip: React.FC<FilterChipProps> = ({
  label,
  icon,
  count,
  variant = 'textOnly',
  active = false,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        active ? styles.chipActive : styles.chipInactive,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && variant === 'withIcon' ? (
        <Text style={styles.icon}>{icon}</Text>
      ) : null}
      <Text style={[styles.label, active ? styles.labelActive : styles.labelInactive]}>
        {label}
      </Text>
      {count !== undefined ? (
        <Badge value={count} active={active} size={24} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 12,
    gap: 8,
  },
  chipActive: {
    backgroundColor: '#1C274C',
  },
  chipInactive: {
    backgroundColor: 'transparent',
  },
  icon: {
    fontSize: 18,
  },
  label: {
    fontSize: 15,
    letterSpacing: -0.165,
    fontFamily: 'Inter-Medium',
  },
  labelActive: {
    color: '#FFFFFF',
  },
  labelInactive: {
    color: '#708892',
  },
});
