import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fire } from '../../assets/illustrations/Fire';
import type { StreakDay } from '../../types/index';
import { colors } from '../../theme';

const ACTIVE_TICK_COLOR = '#5A9F3B';
const INACTIVE_TICK_COLOR = 'rgba(193,199,202,0.6)';

interface StreakTrackerProps {
  days: StreakDay[];
  currentStreak: number;
  totalGoal?: number;
}

export const StreakTracker: React.FC<StreakTrackerProps> = ({
  days,
  currentStreak,
  totalGoal = 5000,
}) => {
  const activeDaysCount = days.filter(d => d.isActive).length;
  const progressPercentage = (activeDaysCount / days.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.streakTitle}>Your streak</Text>
        <View style={styles.streakCountBadge}>
          <Text style={styles.streakCount}>
            <Text style={styles.streakCountBold}>{currentStreak}</Text>
            <Text style={styles.streakCountLight}>/{totalGoal}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.progressSection}>
        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBackground}>
            {/* Active segments */}
            {days.map((dayItem, index) => {
              const segmentWidth = 100 / days.length;
              return (
                <View
                  key={index}
                  style={[
                    styles.progressSegment,
                    {
                      width: `${segmentWidth}%`,
                      backgroundColor: dayItem.isActive
                        ? 'rgba(90,160,43,0.25)'
                        : 'rgba(255,255,255,0.6)',
                    },
                  ]}
                />
              );
            })}
          </View>

          {/* Tick marks — one centered inside each day segment */}
          <View style={styles.tickMarksContainer} pointerEvents="none">
            {days.map((dayItem, index) => {
              const segmentWidth = 100 / days.length;
              const centerPercent = segmentWidth * (index + 0.6);
              return (
                <View
                  key={index}
                  style={[
                    styles.tickMark,
                    {
                      left: `${centerPercent}%`,
                      backgroundColor: dayItem.isActive
                        ? ACTIVE_TICK_COLOR
                        : INACTIVE_TICK_COLOR,
                    },
                  ]}
                />
              );
            })}
          </View>

          {/* Fire Icon badge positioned on progress bar */}
          <View
            style={[
              styles.fireIconContainer,
              { left: `${Math.min(progressPercentage, 95)}%` },
            ]}
          >
            <Fire />
          </View>
        </View>

        {/* Day Labels */}
        <View style={styles.daysLabelsRow}>
          {days.map((dayItem, index) => (
            <Text
              key={index}
              style={[
                styles.dayLabel,
                dayItem.isActive ? styles.dayLabelActive : styles.dayLabelInactive,
              ]}
            >
              {dayItem.day}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streakTitle: {
    fontSize: 20,
    letterSpacing: -1.1,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
  },
  streakCountBadge: {
    backgroundColor: colors.white,
    borderRadius: 24,
    paddingVertical: 10,
  },
  streakCount: {
    letterSpacing: -0.22,
    fontFamily: 'Inter-Medium',
  },
  streakCountBold: {
    color: '#010000',
    fontFamily: 'Inter-SemiBold',
    fontSize: 22,
  },
  streakCountLight: {
    color: '#9BA5AA',
    fontFamily: 'Inter-Medium',
    fontSize: 22,
  },
  progressSection: {
    gap: 12,
  },
  progressBarContainer: {
    position: 'relative',
    height: 48,
  },
  progressBarBackground: {
    flexDirection: 'row',
    height: 34,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  progressSegment: {
    height: '100%',
  },
  fireIconContainer: {
    position: 'absolute',
    top: '50%',
    marginTop: -30,
    marginLeft: -40,
    width: 47,
    height: 47,
    borderRadius: 47/2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    zIndex: 10,
  },
  tickMarksContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 34,
  },
  tickMark: {
    position: 'absolute',
    bottom: '30%',
    top:'30%',
    width: 1,
    height:'40%',
    borderRadius: 1
  },
  daysLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  dayLabel: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-SemiBold',
    flex: 1,
    textAlign: 'center',
  },
  dayLabelActive: {
    color: '#010000',
  },
  dayLabelInactive: {
    color: '#C1C7CA',
  },
});