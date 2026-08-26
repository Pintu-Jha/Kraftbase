import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from '../../components/ui/IconButton';
import { StreakTracker } from '../../components/composite/StreakTracker';
import { SkillProgressChart } from '../../components/composite/SkillProgressChart';
import { MOCK_ANALYTICS } from '../../types/mockData';
import type { AnalyticsScreenProps } from '../../navigation/types';

export const AnalyticsScreen: React.FC<AnalyticsScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* Header */}
        <View style={styles.header}>
          <IconButton
            icon="arrow-back"
            size={48}
            iconSize={20}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.screenTitle}>Analytics</Text>
        </View>

        {/* Streak card */}
        <View style={styles.card}>
          <StreakTracker
            days={MOCK_ANALYTICS.streakDays}
            currentStreak={MOCK_ANALYTICS.currentStreak}
          />
        </View>

        {/* Skill progress card */}
        <View style={styles.skillCard}>
          <Text style={styles.cardTitle}>Skill Progress</Text>
          <SkillProgressChart data={MOCK_ANALYTICS.skillProgress} />
        </View>

        {/* Weekly summary */}
        <View style={styles.weeklyCard}>
          <Text style={styles.cardTitle}>Weekly Activity</Text>
          <View style={styles.weeklyBars}>
            {MOCK_ANALYTICS.weeklyData.map((value, index) => {
              const maxVal = Math.max(...MOCK_ANALYTICS.weeklyData);
              const barH = Math.max((value / maxVal) * 80, 8);
              const isToday = index === MOCK_ANALYTICS.weeklyData.length - 1;
              return (
                <View key={index} style={styles.weeklyBarWrapper}>
                  <View
                    style={[
                      styles.weeklyBar,
                      isToday ? styles.weeklyBarActive : styles.weeklyBarInactive,
                      { height: barH },
                    ]}
                  />
                  <Text style={styles.weeklyBarLabel}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flexGrow: 1,
    padding: 20,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 8,
  },
  screenTitle: {
    fontSize: 26,
    letterSpacing: -0.286,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  card: {
    backgroundColor: '#E5F2F9',
    borderRadius: 32,
    padding: 20,
  },
  skillCard: {
    backgroundColor: '#E5F2F9',
    borderRadius: 32,
    padding: 20,
    gap: 12,
  },
  cardTitle: {
    fontSize: 26,
    letterSpacing: -0.286,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  weeklyCard: {
    backgroundColor: '#F4EFD7',
    borderRadius: 32,
    padding: 20,
    gap: 16,
  },
  weeklyBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 100,
  },
  weeklyBarWrapper: {
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  weeklyBar: {
    width: 28,
    borderRadius: 14,
  },
  weeklyBarActive: {
    backgroundColor: '#1C274C',
  },
  weeklyBarInactive: {
    backgroundColor: '#F5F5F5',
  },
  weeklyBarLabel: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
});
