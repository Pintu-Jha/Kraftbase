import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import {
  scale,
  verticalScale,
  textScale,
} from '../../theme/responsive';
import { colors } from '../../theme';

export type LessonStatus = 'completed' | 'current' | 'locked';

interface LessonProgressIndicatorProps {
  lessonNumber: number;
  status: LessonStatus;
  isLast?: boolean;
}

const NODE_SIZE = scale(60);
const INNER_SIZE = scale(45);
const LINE_WIDTH = scale(6);
const RING_STROKE = scale(5);

const COMPLETED_COLOR = '#6F911F';
const CURRENT_BG = '#DDE9F4';
const LOCKED_RING = 'rgba(180, 190, 205, 0.14)';
const LOCKED_LINE = 'rgba(180, 190, 205, 0.12)';

export const LessonProgressIndicator: React.FC<
  LessonProgressIndicatorProps
> = React.memo(({
  lessonNumber,
  status,
  isLast = false,
}) => {
  const {
    center,
    radius,
    circumference,
    dashOffset,
  } = useMemo(() => {
    const center = NODE_SIZE / 2;
    const radius = (NODE_SIZE - RING_STROKE) / 2;
    const circumference = 2 * Math.PI * radius;

    return {
      center,
      radius,
      circumference,
      // Matches the partial ring from the design
      dashOffset: circumference * (1 - 0.78),
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.node}>
        {status === 'completed' && (
          <View style={styles.completedOuter}>
            <View style={styles.completedInner}>
              <Svg
                width={scale(28)}
                height={scale(28)}
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path
                  d="M20 6L9 17L4 12"
                  stroke="#FFFFFF"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </View>
        )}

        {status === 'current' && (
          <>
            <Svg
              width={NODE_SIZE}
              height={NODE_SIZE}
              viewBox={`0 0 ${NODE_SIZE} ${NODE_SIZE}`}
              style={styles.progressRing}
            >
              <Circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="#E7EBF0"
                strokeWidth={RING_STROKE}
              />

              <Circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={COMPLETED_COLOR}
                strokeWidth={RING_STROKE}
                strokeLinecap="round"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={dashOffset}
                transform={`rotate(-90 ${center} ${center})`}
              />
            </Svg>

            <View style={styles.currentInner}>
              <Text style={styles.lessonNumber}>
                {lessonNumber}
              </Text>
            </View>
          </>
        )}

        {status === 'locked' && (
          <View style={styles.lockedOuter}>
            <View style={styles.lockedInner}>
              <Text style={styles.lessonNumber}>
                {lessonNumber}
              </Text>
            </View>
          </View>
        )}
      </View>

      {!isLast && (
        <View style={styles.connector}>
          <View
            style={[
              styles.connectorLine,
              status === 'completed' && styles.completedLine,
              status === 'current' && styles.currentLine,
              status === 'locked' && styles.lockedLine,
            ]}
          />
        </View>
      )}
    </View>
  );
});

LessonProgressIndicator.displayName = 'LessonProgressIndicator';

const styles = StyleSheet.create({
  container: {
    width: NODE_SIZE,
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  node: {
    width: NODE_SIZE,
    height: NODE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

 

  completedOuter: {
    width: NODE_SIZE,
    height: NODE_SIZE,
    borderRadius: NODE_SIZE / 2,
    backgroundColor: COMPLETED_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },

  completedInner: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: INNER_SIZE / 2,
    backgroundColor: COMPLETED_COLOR,
    borderWidth: scale(4),
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  progressRing: {
    position: 'absolute',
  },

  currentInner: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: INNER_SIZE / 2,
    backgroundColor: CURRENT_BG,
    borderWidth: scale(2),
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

 

  lockedOuter: {
    width: NODE_SIZE,
    height: NODE_SIZE,
    borderRadius: NODE_SIZE / 2,
    backgroundColor: LOCKED_RING,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lockedInner: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: INNER_SIZE / 2,
    backgroundColor: colors.lessonProgressLockedInner,
    borderWidth: scale(1),
    borderColor: colors.lessonProgressLockedBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lessonNumber: {
    fontSize: textScale(18),
    fontFamily: 'Inter-Regular',
    color: colors.darkIconButtonBg,
    letterSpacing: -0.4,
  },



  connector: {
    flex: 1,
    width: LINE_WIDTH,
    minHeight: verticalScale(24),
  },

  connectorLine: {
    flex: 1,
    width: LINE_WIDTH,
  },

  completedLine: {
    backgroundColor: COMPLETED_COLOR,
  },

  currentLine: {
    backgroundColor: COMPLETED_COLOR,
    opacity: 0.75,
  },

  lockedLine: {
    backgroundColor: LOCKED_LINE,
  },
});