import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { StreakDay } from '../../types/index';

interface StreakTrackerProps {
  days: StreakDay[];
  currentStreak: number;
}

export const StreakTracker: React.FC<StreakTrackerProps> = ({ days, currentStreak }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.streakTitle}>Your streak</Text>
        <Text style={styles.streakCount}>{currentStreak} days 🔥</Text>
      </View>

      <View style={styles.daysRow}>
        {days.map((dayItem, index) => (
          <View key={dayItem.day} style={styles.dayGroup}>
            {/* Connector bar (except first) */}
            {index > 0 ? (
              <View
                style={[
                  styles.connector,
                  dayItem.isActive ? styles.connectorActive : styles.connectorInactive,
                ]}
              />
            ) : null}

            {/* Day circle */}
            <View
              style={[
                styles.dayCircle,
                dayItem.isActive ? styles.dayCircleActive : styles.dayCircleInactive,
              ]}
            >
              <Text
                style={[
                  styles.dayLabel,
                  dayItem.isActive ? styles.dayLabelActive : styles.dayLabelInactive,
                ]}
              >
                {dayItem.day}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streakTitle: {
    fontSize: 20,
    letterSpacing: -0.22,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
  streakCount: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
  daysRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  connector: {
    flex: 1,
    height: 2,
  },
  connectorActive: {
    backgroundColor: 'rgba(90,160,43,0.19)',
  },
  connectorInactive: {
    backgroundColor: 'rgba(255,255,255,0.49)',
  },
  dayCircle: {
    width: 47,
    height: 47,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircleActive: {
    backgroundColor: 'rgba(90,160,43,0.19)',
  },
  dayCircleInactive: {
    backgroundColor: 'rgba(244,243,243,0.5)',
  },
  dayLabel: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-SemiBold',
  },
  dayLabelActive: {
    color: '#7CA62B',
  },
  dayLabelInactive: {
    color: '#708892',
  },
});
