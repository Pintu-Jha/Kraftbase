import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import type { SkillProgress } from '../../types/index';

interface SkillProgressChartProps {
  data: SkillProgress[];
  maxBarHeight?: number;
}

export const SkillProgressChart: React.FC<SkillProgressChartProps> = ({
  data,
  maxBarHeight = 120,
}) => {
  const barWidth = 42;
  const barRadius = 21; // top pill
  const activeColor = '#1C274C';
  const inactiveColor = '#F5F5F5';

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {data.map((item, index) => {
          const barHeight = Math.max(item.progress * maxBarHeight, 8);
          const isActive = index === 0; // highlight first bar as selected
          return (
            <View key={item.skill} style={styles.barColumn}>
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
                  fill={isActive ? activeColor : '#7CA62B'}
                />
              </Svg>
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
  skillLabel: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-Medium',
    color: '#708892',
  },
  percentLabel: {
    fontSize: 12,
    letterSpacing: -0.132,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
});
