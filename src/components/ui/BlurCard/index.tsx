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
 * Maps Figma blur radius to expo-blur intensity (visually tuned):
 * - Soft blur (course card button)  → intensity ~60-70
 * - Medium blur (progress card)     → intensity ~40-50
 * - Strong blur (tooltip badge)     → intensity ~80-90
 * 
 * Note: expo-blur intensity (0-100) does not map 1:1 to CSS px blur radius.
 * These values are visually tuned to match the foggy/frosted glass effect.
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
    <View style={[{ borderRadius, overflow: 'hidden' }, style]}>
      <BlurView
        intensity={intensity}
        tint={tint}
        style={StyleSheet.absoluteFill}
      />
      {backgroundColor ? (
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor },
          ]}
        />
      ) : null}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
  },
});
