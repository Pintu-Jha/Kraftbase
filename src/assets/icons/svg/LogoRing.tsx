import Svg, { SvgProps, Circle } from "react-native-svg"
export const LogoRing = (props: SvgProps) => (
  <Svg
    width={87}
    height={87}
    fill="none"
    {...props}
  >
    <Circle
      cx={43.5}
      cy={43.5}
      r={39}
      fill="#fff"
      stroke="#F0F4F8"
      strokeWidth={9}
    />
  </Svg>
)
