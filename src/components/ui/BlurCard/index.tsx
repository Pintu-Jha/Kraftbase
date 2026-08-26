import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';

interface BlurCardProps {
  children: React.ReactNode;
  intensity: number; // 0-100 scale for expo-blur
  tint?: 'light' | 'dark' | 'default';
  style?: ViewStyle;
  borderRadius?: number;
  backgroundColor?: string; // Optional tint background overlay
}

/**
 * FrostedCard / BlurCard component - reusable wrapper for glassmorphism effects
 * 
 * Maps Figma blur radius to expo-blur intensity:
 * - blur 3.5px  → intensity ~15-20
 * - blur 10.5px → intensity ~40-50
 * - blur 21.5px → intensity ~70-80
 * - blur 26px   → intensity ~85-90
 * 
 * Note: expo-blur intensity (0-100) does not map 1:1 to CSS px blur radius.
 * These values are visually tuned against Figma screenshots.
 */
export const BlurCard: React.FC<BlurCardProps> = ({
  children,
  intensity,
  tint = 'light',
  style,
  borderRadius = 32,
  backgroundColor,
}) => {
  return (
    <View style={[styles.container, { borderRadius }, style]}>
      <BlurView
        intensity={intensity}
        tint={tint}
        style={[StyleSheet.absoluteFill, { borderRadius }]}
      />
      {backgroundColor ? (
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor, borderRadius },
          ]}
        />
      ) : null}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
  },
});
