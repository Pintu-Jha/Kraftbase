import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';

interface AvatarProps {
  size?: number;
  backgroundColor?: string;
  initials?: string;
  source?: ImageSourcePropType;
  emoji?: string;
  style?: ViewStyle;
}

/**
 * Avatar - Circular image/initials/emoji container
 * Used for: user avatars, robot buddy icons, illustration placeholders
 */
export const Avatar: React.FC<AvatarProps> = ({
  size = 48,
  backgroundColor = '#3C425F',
  initials,
  source,
  emoji,
  style,
}) => {
  const borderRadius = size / 2;

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius, backgroundColor },
        style,
      ]}
    >
      {source ? (
        <Image source={source} style={styles.image} />
      ) : emoji ? (
        <Text style={[styles.emoji, { fontSize: size * 0.5 }]}>{emoji}</Text>
      ) : initials ? (
        <Text style={[styles.initials, { fontSize: size * 0.36 }]}>{initials}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  emoji: {
    lineHeight: undefined, // Let emoji size naturally
  },
  initials: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    letterSpacing: -0.176,
  },
});
