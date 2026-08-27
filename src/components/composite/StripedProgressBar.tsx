import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Svg, {
  Rect,
  Defs,
  Pattern,
  Line,
} from 'react-native-svg';
import { scale, textScale } from '../../theme/responsive';
import { colors } from '../../theme';

interface StripedProgressBarProps {
  progress: number;
  showImprovement?: boolean;
  improvement?: number;
}

const maxBarHeight = scale(200);
const barWidth = scale(42);
const badgeSize = scale(34);

export const StripedProgressBar: React.FC<
  StripedProgressBarProps
> = ({
  progress,
  showImprovement = false,
  improvement,
}) => {
  const normalizedProgress = Math.min(
    Math.max(progress, 0),
    1
  );

  const barHeight = Math.max(
    normalizedProgress * maxBarHeight,
    scale(20)
  );

  return (
    <View style={styles.container}>
      <View style={styles.barWrapper}>
        {/* Full striped background */}
        <Svg
          width={barWidth}
          height={maxBarHeight}
          style={styles.stripedBar}
        >
          <Defs>
            <Pattern
              id="diagonalStripe"
              patternUnits="userSpaceOnUse"
              width={scale(14)}
              height={scale(14)}
            >
              {/* Continuous diagonal stripe */}
              <Line
                x1={scale(-7)}
                y1={scale(21)}
                x2={scale(21)}
                y2={scale(-7)}
                stroke="#1C274C"
                strokeWidth={scale(2)}
              />
            </Pattern>
          </Defs>

          <Rect
            x={0}
            y={0}
            width={barWidth}
            height={maxBarHeight}
            rx={barWidth / 2}
            ry={barWidth / 2}
            fill="url(#diagonalStripe)"
          />
        </Svg>

        {/* Solid progress */}
        <View
          style={[
            styles.activeBar,
            {
              height: barHeight,
            },
          ]}
        />

        {/* Improvement badge */}
        {showImprovement && improvement !== undefined && (
          <View style={styles.improvementBadge}>
            <Text style={styles.improvementText}>
              +{improvement}%
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: barWidth,
    height: maxBarHeight,
  },

  barWrapper: {
    position: 'relative',
    width: barWidth,
    height: maxBarHeight,
  },

  stripedBar: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  activeBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1C274C',
    borderRadius: barWidth / 2,
    zIndex: 2,
  },

  improvementBadge: {
    position: 'absolute',
    top: scale(-10),
    alignSelf: 'center',

    width: badgeSize,
    height: badgeSize,
    borderRadius: badgeSize / 2,

    backgroundColor: '#9AA5B8',

    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 10,
    elevation: 10,
  },

  improvementText: {
    fontSize: textScale(9),
    letterSpacing: -1.1,
    fontFamily: 'Inter-SemiBold',
    color: colors.white,
  },
});