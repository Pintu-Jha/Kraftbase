import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';

interface BlurCardProps {
  children: React.ReactNode;
  intensity: number;
  tint?: 'light' | 'dark' | 'default';
  style?: ViewStyle;
  borderRadius?: number;
  backgroundColor?: string; 
}


export const BlurCard: React.FC<BlurCardProps> = ({
  children,
  intensity,
  tint = 'light',
  style,
  borderRadius = 32,
  backgroundColor,
}) => {
  return (
    <View style={[styles.wrapper, { borderRadius }, style]}>
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
  wrapper: {
    overflow: 'hidden',
  },
  content: {
    position: 'relative',
  },
});
