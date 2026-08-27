import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StreakTracker } from '../../components/composite/StreakTracker';
import { SkillProgressCard } from '../../components/composite/SkillProgressCard';
import { AiBuddyTipCard } from '../../components/composite/AiBuddyTipCard';
import { MOCK_ANALYTICS } from '../../types/mockData';
import type { AnalyticsScreenProps } from '../../navigation/types';
import { colors } from '../../theme';
import { textScale } from '../../theme/responsive';

export const AnalyticsScreen: React.FC<AnalyticsScreenProps> = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Analytics</Text>
        </View>

        <View style={styles.card}>
          <StreakTracker
            days={MOCK_ANALYTICS.streakDays}
            currentStreak={MOCK_ANALYTICS.currentStreak}
          />
          <AiBuddyTipCard
            message="You learn best with quick 5-min lessons."
            onDismiss={() => console.log('Tip dismissed')}
          />
        </View>

        <SkillProgressCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flexGrow: 1,
    padding: 16,
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: textScale(26),
    letterSpacing: -0.286,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
  },
  card: {
    backgroundColor: colors.analyticsCard,
    borderRadius: 32,
    padding: 12,
    gap: 11,
  },
});
