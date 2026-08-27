import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../../theme';

type ProgressRailStatus = 'completed' | 'active' | 'locked';

interface ProgressRailProps {
  status: ProgressRailStatus;
  height?: number;
  width?: number;
  style?: ViewStyle;
}

/**
 * ProgressRail - Vertical line segment connector
 * Used for: connecting lesson list items with progress states
 */
export const ProgressRail: React.FC<ProgressRailProps> = ({
  status,
  height = 34,
  width = 2,
  style,
}) => {
  return (
    <View
      style={[
        styles.rail,
        {
          height,
          width,
          backgroundColor:
            status === 'completed'
              ? colors.completed
              : status === 'active'
              ? colors.lessonProgressRail
              : colors.incomplete,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  rail: {
    alignSelf: 'center',
  },
});
