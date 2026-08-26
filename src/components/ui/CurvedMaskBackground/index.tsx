import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface CurvedMaskBackgroundProps {
  width: number;
  height: number;
  color?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const CurvedMaskBackground: React.FC<CurvedMaskBackgroundProps> = ({
  width,
  height,
  color = '#DCEA8F',
  style,
  children,
}) => {
  // Swooping curve: fills top portion, curves down to a wave at the bottom
  const path = `M0,0 L${width},0 L${width},${height * 0.72} Q${width * 0.75},${height} ${width * 0.5},${height * 0.82} Q${width * 0.25},${height * 0.65} 0,${height * 0.78} Z`;

  return (
    <View style={[styles.container, { width, height }, style]}>
      <Svg
        width={width}
        height={height}
        style={StyleSheet.absoluteFill}
      >
        <Path d={path} fill={color} />
      </Svg>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
});
