import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderRowProps {
  userName: string;
  greeting: string;
  avatarUri?: string;
  onLanguagePress?: () => void;
  onNotificationPress?: () => void;
  hasNotifications?: boolean;
}

export const HeaderRow: React.FC<HeaderRowProps> = ({
  userName,
  greeting,
  onLanguagePress,
  onNotificationPress,
  hasNotifications = false,
}) => {
  return (
    <View style={styles.container}>
      {/* Left: Avatar + greeting */}
      <View style={styles.leftSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>
        <View style={styles.greetingBlock}>
          <Text style={styles.helloText}>Hello {userName} 👋</Text>
          <Text style={styles.greetingText}>{greeting}</Text>
        </View>
      </View>

      {/* Right: Language selector + notification */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.languagePill}
          onPress={onLanguagePress}
          activeOpacity={0.8}
        >
          <Text style={styles.languageText}>English</Text>
          <Ionicons name="chevron-down" size={14} color="#708892" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.notifButton}
          onPress={onNotificationPress}
          activeOpacity={0.8}
        >
          <Ionicons name="notifications-outline" size={20} color="#010000" />
          {hasNotifications ? <View style={styles.redDot} /> : null}
        </TouchableOpacity>
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
    paddingTop: 16,
    paddingBottom: 16,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3C425F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    letterSpacing: -0.22,
  },
  greetingBlock: {
    gap: 2,
  },
  helloText: {
    fontSize: 13,
    letterSpacing: -0.143,
    fontFamily: 'Inter-Regular',
    color: 'rgba(1,0,0,0.5)',
  },
  greetingText: {
    fontSize: 15,
    letterSpacing: -0.165,
    fontFamily: 'Inter-Medium',
    color: '#010000',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  languagePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(244,243,243,0.7)',
    borderRadius: 56,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
  },
  languageText: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
  notifButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(240,239,239,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4444',
  },
});
