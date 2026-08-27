import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { colors, fontFamilies } from '../../../theme';
import { textScale } from '../../../theme/responsive';

type FilterChipVariant = 'withIcon' | 'textOnly';

interface FilterChipProps {
  label: string;
  icon?: React.FC<SvgProps> | string;
  count?: number;
  variant?: FilterChipVariant;
  active?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

const ACTIVE_COLOR = colors.white;
const INACTIVE_COLOR = colors.btn;
const ACTIVE_BG = colors.btn;

export const FilterChip: React.FC<FilterChipProps> = ({
  label,
  icon,
  count,
  variant = 'textOnly',
  active = false,
  onPress,
  style,
}) => {
  const isIconComponent = !!icon && typeof icon !== 'string';
  const IconComponent = isIconComponent ? (icon as React.FC<SvgProps>) : null;
  const iconColor = active ? ACTIVE_COLOR : INACTIVE_COLOR;
  const showIcon = !!icon && variant === 'withIcon';

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
      {showIcon ? (
        <View style={styles.content}>
          <View style={styles.iconWrap}>
            {IconComponent ? (
              <IconComponent
                width={18}
                height={18}
                fill={iconColor}
                color={iconColor}
                stroke={iconColor}
              />
            ) : (
              <Text style={[styles.icon, { color: iconColor }]}>{icon as string}</Text>
            )}
          </View>
          <Text style={[styles.label, active ? styles.labelActive : styles.labelInactive]}>
            {label}
          </Text>
        </View>
      ) : (
        <Text style={[styles.label, active ? styles.labelActive : styles.labelInactive]}>
          {label}
        </Text>
      )}

      {count !== undefined ? (
        <View style={active ? styles.countCircleActive : styles.countPillInactive}>
          <Text style={[styles.countText, active ? styles.countTextActive : styles.countTextInactive]}>
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
    height: 44,
    paddingRight: 5,
    gap: 12,
  },
  chipActive: {
    backgroundColor: ACTIVE_BG,
    paddingLeft: 17,
  },
  chipInactive: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.translucentBorder,
    paddingLeft: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: textScale(18),
  },
  label: {
    fontSize: textScale(15),
    letterSpacing: -0.165,
    fontFamily: fontFamilies.interMedium,
  },
  labelActive: {
    color: ACTIVE_COLOR,
  },
  labelInactive: {
    color: INACTIVE_COLOR,
  },
  countCircleActive: {
    width: 34,
    height: 34,
    borderRadius: 40,
    padding: 8,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countPillInactive: {
    width: 34,
    height: 34,
    borderRadius: 40,
    padding: 8,
    backgroundColor: colors.neutralA,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: textScale(12),
    letterSpacing: -0.132,
    fontFamily: fontFamilies.interMedium,
  },
  countTextActive: {
    color: ACTIVE_BG,
  },
  countTextInactive: {
    color: INACTIVE_COLOR,
  },
});