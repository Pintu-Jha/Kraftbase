import Svg, { SvgProps, Path } from "react-native-svg"
export const Close = (props: SvgProps) => (
  <Svg
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.75 3.25-6.5 6.5m6.5 0-6.5-6.5"
    />
  </Svg>
)
