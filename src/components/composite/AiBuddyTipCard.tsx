import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Fire } from '../../assets/illustrations/Fire';
import { Close } from '../../assets/icons/svg/Close';
import { colors } from '../../theme';
import { scale } from '../../theme/responsive';

interface AiBuddyTipCardProps {
  message: string;
  onDismiss?: () => void;
}

export const AiBuddyTipCard: React.FC<AiBuddyTipCardProps> = ({
  message,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../../assets/icons/Static/AIBuddy.png')}
            style={styles.buddyIcon}
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.message}>{message}</Text>
      </View>
      
      <TouchableOpacity
        onPress={handleDismiss}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Close width={13} height={13} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: scale(36),
    borderRadius: scale(32),
    padding:scale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
    width: scale(25),
    height: scale(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buddyIcon: {
    width: scale(16),
    height: scale(20),
  },
  message: {
    flex: 1,
    fontSize: scale(12),
    fontFamily: 'Inter-Medium',
    color: colors.black,
    lineHeight: scale(20),
  },
});
