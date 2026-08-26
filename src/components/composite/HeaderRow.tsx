import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from '../ui/Avatar';
import { IconButton } from '../ui/IconButton';

interface HeaderRowProps {
  userName: string;
  greeting: string;
  avatarEmoji?: string;
  onLanguagePress?: () => void;
  onNotificationPress?: () => void;
  hasNotifications?: boolean;
}

export const HeaderRow: React.FC<HeaderRowProps> = ({
  userName,
  greeting,
  avatarEmoji = '👨‍💼',
  onLanguagePress,
  onNotificationPress,
  hasNotifications = false,
}) => {
  return (
    <View style={styles.container}>
      {/* Left: Avatar + greeting */}
      <View style={styles.leftSection}>
        <Avatar size={56} backgroundColor="#4A9B9F" emoji={avatarEmoji} />
        <View style={styles.greetingBlock}>
          <Text style={styles.helloText}>Hello {userName} 👋</Text>
          <Text style={styles.greetingText}>{greeting}</Text>
        </View>
      </View>

      {/* Right: Language selector + notification */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={onLanguagePress}
          activeOpacity={0.8}
        >
          <Text style={styles.flagEmoji}>🇬🇧</Text>
          <Text style={styles.languageText}>English</Text>
          <Ionicons name="chevron-down" size={14} color="#708892" />
        </TouchableOpacity>

        <View style={styles.notifContainer}>
          <IconButton
            icon="notifications-outline"
            size={40}
            iconSize={20}
            onPress={onNotificationPress}
          />
          {hasNotifications ? <View style={styles.redDot} /> : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  greetingBlock: {
    gap: 2,
  },
  helloText: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: 'rgba(1,0,0,0.5)',
  },
  greetingText: {
    fontSize: 16,
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(244,243,243,0.7)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
  },
  flagEmoji: {
    fontSize: 16,
  },
  languageText: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
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
