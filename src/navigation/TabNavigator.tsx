import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { AnalyticsScreen } from '../screens/Analytics/AnalyticsScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { CustomTabBar } from '../components/composite/CustomTabBar';
import type { TabParamList } from './types';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { DictionaryScreen } from '../screens/Dictionary/DictionaryScreen';

const Tab = createBottomTabNavigator<TabParamList>();

const CustomTabBarWrapper: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const tabMap: Record<string, string> = {
    Home: 'home',
    Dictionary: 'lessons',
    Analytics: 'analytics',
    Profile: 'profile',
  };

  const activeTab = tabMap[state.routes[state.index].name] || 'home';

  const handleTabPress = (tabId: string) => {
    const routeName = Object.keys(tabMap).find(key => tabMap[key] === tabId);
    if (routeName) {
      navigation.navigate(routeName);
    }
  };

  return <CustomTabBar activeTab={activeTab} onTabPress={handleTabPress} />;
};

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBarWrapper {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dictionary" component={DictionaryScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
