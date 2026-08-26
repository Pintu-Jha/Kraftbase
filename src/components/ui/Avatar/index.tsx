import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';

interface AvatarProps {
  size?: number;
  backgroundColor?: string;
  initials?: string;
  imageUri?: string;
  style?: ViewStyle;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 47,
  backgroundColor = '#3C425F',
  initials,
  imageUri,
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
        style,
      ]}
    >
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : initials ? (
        <Text style={styles.initials}>{initials}</Text>
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
  initials: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    letterSpacing: -0.176,
  },
});
