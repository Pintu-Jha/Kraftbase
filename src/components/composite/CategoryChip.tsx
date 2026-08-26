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
    borderRadius: 56,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 6,
  },
  chipActive: {
    backgroundColor: '#1C274C',
  },
  chipInactive: {
    backgroundColor: 'rgba(244,243,243,0.7)',
    borderWidth: 1,
    borderColor: 'rgba(1,0,0,0.1)',
  },
  icon: {
    fontSize: 14,
  },
  label: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Medium',
  },
  labelActive: {
    color: '#FFFFFF',
  },
  labelInactive: {
    color: '#708892',
  },
  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  badgeActive: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  badgeInactive: {
    backgroundColor: 'rgba(28,39,76,0.1)',
  },
  badgeText: {
    fontSize: 11,
    letterSpacing: -0.121,
    fontFamily: 'Inter-SemiBold',
  },
  badgeTextActive: {
    color: '#FFFFFF',
  },
  badgeTextInactive: {
    color: '#708892',
  },
});
