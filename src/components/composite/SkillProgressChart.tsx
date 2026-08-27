import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { BlurCard } from '../ui/BlurCard';
import type { SkillProgress } from '../../types/index';
import { colors, fontFamilies } from '../../theme';
import { textScale } from '../../theme/responsive';

export interface SkillProgressChartProps {
  data: SkillProgress[];
  maxBarHeight?: number;
  activeIndex?: number;
  growthPercent?: number;
}

export const SkillProgressChart: React.FC<SkillProgressChartProps> = ({
  data,
  maxBarHeight = 120,
  activeIndex = 0,
  growthPercent = 30,
}) => {
  const barWidth = 42;
  const barRadius = 21; // top pill
  const activeColor = colors.btn;
  const inactiveColor = colors.chartInactive;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {data.map((item, index) => {
          const barHeight = Math.max(item.progress * maxBarHeight, 8);
          const isActive = index === activeIndex;
          const itemGrowthPercent = index === activeIndex ? growthPercent : 0;
          
          return (
            <View key={item.skill} style={styles.barColumn}>
              <View style={styles.barWrapper}>
                <Svg width={barWidth} height={maxBarHeight}>
                  {/* Background rail */}
                  <Rect
                    x={0}
                    y={0}
                    width={barWidth}
                    height={maxBarHeight}
                    rx={barRadius}
                    fill={inactiveColor}
                  />
                  {/* Filled bar — anchored to bottom */}
                  <Rect
                    x={0}
                    y={maxBarHeight - barHeight}
                    width={barWidth}
                    height={barHeight}
                    rx={barRadius}
                    fill={isActive ? activeColor : colors.chartActive}
                  />
                </Svg>
                
                {/* +30% tooltip badge with blur for active bar */}
                {itemGrowthPercent > 0 ? (
                  <View style={styles.tooltipContainer}>
                    <BlurCard
                      intensity={88}
                      tint="light"
                      borderRadius={16}
                      backgroundColor={colors.frostedLessonBanner}
                      style={styles.tooltipBlur}
                    >
                      <View style={styles.tooltip}>
                        <Text style={styles.tooltipText}>+{itemGrowthPercent}%</Text>
                      </View>
                    </BlurCard>
                  </View>
                ) : null}
              </View>
              <Text style={styles.skillLabel}>{item.skill}</Text>
              <Text style={styles.percentLabel}>{Math.round(item.progress * 100)}%</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  scrollContent: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 4,
  },
  barColumn: {
    alignItems: 'center',
    gap: 6,
  },
  barWrapper: {
    position: 'relative',
  },
  tooltipContainer: {
    position: 'absolute',
    top: -40,
    left: -10,
    zIndex: 10,
  },
  tooltipBlur: {
    width: 62,
    height: 32,
  },
  tooltip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipText: {
    fontSize: textScale(13),
    letterSpacing: -0.143,
    fontFamily: fontFamilies.interSemiBold,
    color: colors.chartTooltip,
  },
  skillLabel: {
    fontSize: textScale(12),
    letterSpacing: -0.132,
    fontFamily: fontFamilies.interMedium,
    color: colors.gray,
  },
  percentLabel: {
    fontSize: textScale(12),
    letterSpacing: -0.132,
    fontFamily: fontFamilies.interSemiBold,
    color: colors.black,
  },
});
