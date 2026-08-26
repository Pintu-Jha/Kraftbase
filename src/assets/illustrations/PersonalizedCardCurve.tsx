import React from 'react';
import Svg, { Path } from 'react-native-svg';

/**
 * PersonalizedCardCurve - Decorative curve strip inside blue "Personalized Learning" card
 * Exact SVG path data from Figma
 */
export const PersonalizedCardCurve: React.FC = () => {
  return (
    <Svg
      width={128}
      height={210}
      viewBox="0 0 128 210"
      fill="none"
      style={{
        position: 'absolute',
        top: -20,
        right: -80,
      }}
    >
      <Path
        d="M73.0559 201.277C62.5479 197.37 50.427 185.64 40.6895 172.806C-6.42428 110.71 4.83644 52.7229 28.0928 36.8654C99.4374 -11.778 243.811 54.31 323.807 18.992C337.561 12.9197 383.596 -22.7248 358.119 -61.64C335.388 -96.3634 309.056 -85.9951 301.993 -77.3658C278.096 -48.1677 283.838 13.733 277.133 59.1998C274.759 75.3073 272.449 91.3944 269.706 107.197C266.037 128.321 256.657 142.507 247.16 157.666"
        stroke="white"
        strokeOpacity={0.2}
        strokeWidth={16}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
