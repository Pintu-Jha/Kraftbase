import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from '../ui/Avatar';
import { LanguageSelector } from '../ui/LanguageSelector';
import { NotificationButton } from '../ui/NotificationButton';
import { colors, fontFamilies } from '../../theme';
import { textScale } from '../../theme/responsive';

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
        <Avatar size={textScale(56)} backgroundColor={colors.tealAvatar} emoji={avatarEmoji} />
        <View style={styles.greetingBlock}>
          <Text style={styles.helloText}>Hello {userName} 👋</Text>
          <Text style={styles.greetingText}>{greeting}</Text>
        </View>
      </View>

      {/* Right: Language selector + notification */}
      <View style={styles.rightSection}>
        <LanguageSelector onPress={onLanguagePress} />
        <NotificationButton
          hasNotifications={hasNotifications}
          onPress={onNotificationPress}
        />
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
    fontSize: textScale(14),
    letterSpacing: -0.154,
    fontFamily: 'Inter-Regular',
    color: colors.mutedBodyText,
  },
  greetingText: {
    fontSize: textScale(16),
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
