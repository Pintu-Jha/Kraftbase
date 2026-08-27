import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { Chip } from '../ui/Chip';
import { AiBuddyProgress } from './AiBuddyProgress';

import { KidWithLearn } from '../../assets/illustrations/KidWithLearn';
import { Lessons } from '../../assets/icons/svg/Lesson';
import { Clock } from '../../assets/icons/svg/Clock';

import {
  scale,
  verticalScale,
  moderateScale,
  textScale,
} from '../../theme/responsive';

import { colors } from '../../theme/colors';
import { Back } from '../../assets/icons/svg/Back';

interface LessonHeroProps {
  category: string;
  title: string;
  lessonCount: number;
  duration: string;
  onBackPress: () => void;
  aiMessage: string;
  aiProgress: number;
}

export const LessonHero: React.FC<LessonHeroProps> = ({
  category,
  title,
  lessonCount,
  duration,
  onBackPress,
  aiMessage,
  aiProgress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <KidWithLearn
          width={scale(280)}
          height={verticalScale(292)}
        />
      </View>
        <Pressable style={styles.backButtonBlur} onPress={onBackPress}>
        <Back  />
        </Pressable>

      {/* Main Content */}
      <View style={styles.textSection}>
        <Text
          style={styles.category}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {category}
        </Text>

        <Text
          style={styles.title}
          numberOfLines={2}
          adjustsFontSizeToFit
          minimumFontScale={0.75}
        >
          {title}
        </Text>

        <View style={styles.chipsRow}>
          <Chip
            icon={<Lessons width={12} height={12} />}
            label={`${lessonCount} lessons`}
            variant="frosted"
          />

          <Chip
            icon={<Clock width={12} height={12} />}
            label={duration}
            variant="frosted"
          />
        </View>


      </View>

      <AiBuddyProgress
        message={aiMessage}
        progress={aiProgress}
        style={styles.aiBuddyOverlap}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.heroBackground,
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(24),
    borderBottomLeftRadius: moderateScale(32),
    borderBottomRightRadius: moderateScale(32),
    overflow: 'hidden',
    height:scale(292)
  },

  backButtonBlur: {
    width: scale(48),
    height: scale(48),
    marginBottom: verticalScale(12),
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'#FFFFFF66',
    borderRadius:moderateScale(28)
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  textSection: {
    flex: 1,
    paddingRight: scale(100),
    maxWidth: '60%',
    zIndex: 2,
  },

  category: {
    fontSize: textScale(14),
    letterSpacing: -1.1,
    fontFamily: 'Inter-Regular',
    color: colors.gray,
  },

  title: {
    fontSize: textScale(25),
    letterSpacing: -1.1,
    fontFamily: 'Inter-Medium',
    color: colors.black,
  },

  chipsRow: {
    flexDirection: 'row',
    gap: scale(4),
    marginTop:scale(7)
  },

  illustrationContainer: {
    position: 'absolute',
    right: scale(-45),
    zIndex: 0,
  },

  aiBuddyOverlap: {
    zIndex: 10,
  },
});