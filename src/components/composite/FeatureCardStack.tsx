import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CARDS = [
  { label: 'Personalized Learning', backgroundColor: '#CADDF7', rotate: '-6deg' },
  { label: 'Fun Sounds & Games', backgroundColor: '#DFF28A', rotate: '4deg' },
  { label: 'Track Progress', backgroundColor: '#F2D1D0', rotate: '-2deg' },
] as const;

export const FeatureCardStack: React.FC = () => {
  return (
    <View style={styles.container}>
      {CARDS.map((card, index) => (
        <View
          key={card.label}
          style={[
            styles.card,
            { backgroundColor: card.backgroundColor, transform: [{ rotate: card.rotate }] },
            index === 1 && styles.cardMiddle,
            index === 2 && styles.cardFront,
          ]}
        >
          <Text style={styles.cardLabel}>{card.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    width: 260,
    height: 120,
    borderRadius: 20,
    padding: 16,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardMiddle: {
    top: 20,
  },
  cardFront: {
    top: 10,
  },
  cardLabel: {
    fontSize: 14,
    letterSpacing: -0.154,
    fontFamily: 'Inter-SemiBold',
    color: '#010000',
  },
});
