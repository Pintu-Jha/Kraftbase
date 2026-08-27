import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { scale, textScale } from '../../theme/responsive';
import { StripedProgressBar } from './StripedProgressBar';
import { colors } from '../../theme';

type TimeFilter = 'This Week' | 'This Month' | 'All Time';

interface SkillCategory {
  name: string;
  value: number;
  improvement?: number;
}

interface WeeklyData {
  day: string;
  value: number;
  isToday?: boolean;
}

interface SkillProgressCardProps {
  categories?: SkillCategory[];
  weeklyData?: WeeklyData[];
  timeFilter?: TimeFilter;
}

const defaultCategories: SkillCategory[] = [
  { name: 'Letters', value: 0.65, improvement: 30 },
  { name: 'Colors', value: 0.75 },
  { name: 'Shapes', value: 0.82 },
  { name: 'Animals', value: 0.55 },
];

const defaultWeeklyData: WeeklyData[] = [
  { day: 'Mon', value: 0.45 },
  { day: 'Tue', value: 0.78 },
  { day: 'Wed', value: 0.68 },
  { day: 'Thu', value: 0.95, isToday: true },
  { day: 'Fri', value: 0.52 },
  { day: 'Sat', value: 0.35 },
  { day: 'Sun', value: 0.72 },
];

export const SkillProgressCard: React.FC<SkillProgressCardProps> = ({
  categories = defaultCategories,
  weeklyData = defaultWeeklyData,
  timeFilter = 'This Week',
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Letters');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedCategoryData = categories.find(
    category => category.name === selectedCategory
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Skill progress</Text>

          <Text style={styles.subtitle}>
            Avg improvement this week
          </Text>
        </View>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
          activeOpacity={0.7}
        >
          <Text style={styles.filterText}>{timeFilter}</Text>

          <Text style={styles.filterIcon}>
            {isDropdownOpen ? '▲' : '▼'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Category Pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesRow}
      >
        {categories.map(category => {
          const isSelected = selectedCategory === category.name;

          return (
            <TouchableOpacity
              key={category.name}
              style={[
                styles.categoryPill,
                isSelected && styles.categoryPillActive,
              ]}
              onPress={() => setSelectedCategory(category.name)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.categoryTextActive,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Chart */}
      <View style={styles.chartContainer}>
        <View style={styles.barsRow}>
          {weeklyData.map((item, index) => {
            const showImprovement =
              item.isToday &&
              selectedCategoryData?.improvement !== undefined;

            return (
              <View
                key={`${item.day}-${index}`}
                style={styles.barColumn}
              >
                <StripedProgressBar
                  progress={item.value}
                  showImprovement={showImprovement}
                  improvement={selectedCategoryData?.improvement}
                />

                <Text style={styles.dayLabel}>
                  {item.day}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.skillProgressCard,
    borderRadius: scale(32),
    padding: scale(18),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  titleSection: {
    flex: 1,
    gap: scale(4),
  },

  title: {
    fontSize: textScale(26),
    letterSpacing: -1.1,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
  },

  subtitle: {
    fontSize: textScale(12),
    letterSpacing: -1.1,
    fontFamily: 'Inter-Medium',
    color: colors.gray,
  },

  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
    paddingHorizontal: scale(12),
    paddingVertical: scale(6),
  },

  filterText: {
    fontSize: textScale(16),
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
    color: colors.btn,
  },

  filterIcon: {
    fontSize: textScale(10),
    color: colors.btn,
  },

  categoriesRow: {
    flexDirection: 'row',
    gap: scale(2),
    paddingTop:21
  },

  categoryPill: {
    paddingHorizontal: scale(18),
    paddingVertical: scale(16),
    borderRadius: scale(56),
    borderWidth:1,
    borderColor: colors.translucentBorder
  },

  categoryPillActive: {
    backgroundColor: colors.btn,
  },

  categoryText: {
    fontSize: textScale(12),
    letterSpacing: -1.1,
    fontFamily: 'Inter-SemiBold',
    color: colors.gray,
  },

  categoryTextActive: {
    color: colors.white,
  },

  chartContainer: {
    marginTop: scale(25),
  },

  barsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: scale(12),
  },

  barColumn: {
    flex: 1,
    alignItems: 'center',
    gap: scale(12),
  },

  dayLabel: {
    fontSize: textScale(16),
    letterSpacing: -0.176,
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
  },
});