import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurCard } from '../ui/BlurCard';
import { colors } from '../../theme';
import { HomeIcon, AnalyticsIcon, ProfileIcon, LernerIcon } from '../../assets/icons/TabBar';
import { scale, verticalScale, moderateScale } from '../../theme/responsive';

interface TabItem {
  id: string;
  Icon: React.FC<{ color?: string }>;
}

interface CustomTabBarProps {
  activeTab: string;
  onTabPress: (tabId: string) => void;
}

const TABS: TabItem[] = [
  { id: 'home', Icon: HomeIcon },
  { id: 'lessons', Icon: LernerIcon },
  { id: 'analytics', Icon: AnalyticsIcon },
  { id: 'profile', Icon: ProfileIcon },
];

export const CustomTabBar: React.FC<CustomTabBarProps> = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.container}>
      <BlurCard
        intensity={21}
        tint="light"
        borderRadius={100}
        backgroundColor={colors.neutralB}
      >
        <View style={styles.tabBar}>
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.Icon;
            return (
              <TouchableOpacity
                key={tab.id}
                style={[styles.tabButton, isActive ? styles.tabButtonActive : styles.tabButtonInactive]}
                onPress={() => onTabPress(tab.id)}
                activeOpacity={0.8}
              >
                <IconComponent color={isActive ? colors.white : colors.bottomIconInActive} />
              </TouchableOpacity>
            );
          })}
        </View>
      </BlurCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: verticalScale(32),
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  tabBar: {
    flexDirection: 'row',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    gap: scale(1),
  },
  tabButton: {
    width: scale(54),
    height: scale(54),
    borderRadius: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonActive: {
    backgroundColor: colors.btn,
  },
  tabButtonInactive: {
    backgroundColor: colors.white,
  },
});
