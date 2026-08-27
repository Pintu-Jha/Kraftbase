import Svg, { SvgProps, Path } from "react-native-svg"
export const Back = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.5 12H19M11 18s-6-4.419-6-6c0-1.581 6-6 6-6"
    />
  </Svg>
)
