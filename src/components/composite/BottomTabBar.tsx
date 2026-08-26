import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TabItem {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
}

interface BottomTabBarProps {
  activeTab: string;
  onTabPress: (tabId: string) => void;
}

const TABS: TabItem[] = [
  { id: 'home', icon: 'home-outline', iconActive: 'home' },
  { id: 'lessons', icon: 'book-outline', iconActive: 'book' },
  { id: 'analytics', icon: 'stats-chart-outline', iconActive: 'stats-chart' },
  { id: 'profile', icon: 'person-outline', iconActive: 'person' },
];

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {TABS.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tabButton, isActive ? styles.tabButtonActive : styles.tabButtonInactive]}
              onPress={() => onTabPress(tab.id)}
              activeOpacity={0.8}
            >
              <Ionicons
                name={isActive ? tab.iconActive : tab.icon}
                size={22}
                color={isActive ? '#FFFFFF' : '#708892'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 64,
    paddingVertical: 5,
    paddingHorizontal: 8,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  tabButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#1C274C',
  },
  tabButtonInactive: {
    backgroundColor: 'transparent',
  },
});
