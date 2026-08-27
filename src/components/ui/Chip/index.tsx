import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ViewStyle } from 'react-native';
import { colors, fontFamilies, textStyles } from '../../../theme';
import { textScale } from '../../../theme/responsive';

type ChipVariant = 'filled' | 'outline' | 'frosted';

interface ChipProps {
  label: string;
  icon?: ReactNode;
  variant?: ChipVariant;
  active?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  icon,
  variant = 'outline',
  active = false,
  onPress,
  style,
}) => {
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      style={[
        styles.chip,
        variant === 'filled' && [styles.chipFilledBase, active ? styles.chipFilledActive : styles.chipFilledInactive],
        variant === 'outline' && styles.chipOutline,
        variant === 'frosted' && styles.chipFrosted,
        style,
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
      <Text
        style={[
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
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  chipFilledBase: {
    borderRadius: 56,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
  },
  chipFilledActive: {
    backgroundColor: colors.btn,
  },
  chipFilledInactive: {
    backgroundColor: 'transparent',
  },
  chipOutline: {
    borderRadius: 56,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
    backgroundColor: colors.neutralB,
    borderWidth: 0,
  },
  chipFrosted: {
    borderRadius: 24,
    height: 36,
    padding: 12,
    gap: 4,
    backgroundColor: colors.frostedChipA,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelFilledActive: {
    fontSize: textScale(textStyles.xs.fontSize),
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
  },
  labelFilledInactive: {
    fontSize: textScale(textStyles.xs.fontSize),
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: colors.gray,
  },
  labelOutline: {
    fontSize: textScale(textStyles.xs.fontSize),
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: colors.gray,
  },
  labelFrosted: {
    fontSize: textScale(10),
    letterSpacing: -0.11,
    fontFamily: 'Inter-Medium',
    color: colors.buttonLabel,
  },
});