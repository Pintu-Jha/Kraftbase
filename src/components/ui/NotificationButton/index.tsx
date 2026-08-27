import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from '../IconButton';

interface NotificationButtonProps {
  hasNotifications?: boolean;
  onPress?: () => void;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({
  hasNotifications = false,
  onPress,
}) => {
  return (
    <View style={styles.notifContainer}>
      <IconButton
        icon="notifications-outline"
        size={40}
        iconSize={20}
        onPress={onPress}
      />
      {hasNotifications ? <View style={styles.redDot} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  notifContainer: {
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4444',
  },
});
