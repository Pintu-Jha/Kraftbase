import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface CategoryChipProps {
  label: string;
  icon?: string;
  count?: number;
  isActive?: boolean;
  onPress?: () => void;
}

export const CategoryChip: React.FC<CategoryChipProps> = ({
  label,
  icon,
  count,
  isActive = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon ? <Text style={styles.icon}>{icon}</Text> : null}
      <Text style={[styles.label, isActive ? styles.labelActive : styles.labelInactive]}>
        {label}
      </Text>
      {count !== undefined ? (
        <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeInactive]}>
          <Text style={[styles.badgeText, isActive ? styles.badgeTextActive : styles.badgeTextInactive]}>
            {count}
          </Text>
        </View>
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
    borderWidth: 0,
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
  badge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  badgeActive: {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  badgeInactive: {
    backgroundColor: 'rgba(28,39,76,0.08)',
  },
  badgeText: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-SemiBold',
  },
  badgeTextActive: {
    color: '#FFFFFF',
  },
  badgeTextInactive: {
    color: '#708892',
  },
});
