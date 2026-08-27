import Svg, { SvgProps, Path } from "react-native-svg"
export const Clock = (props: SvgProps) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path stroke="#708892" d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Z" />
    <Path
      stroke="#708892"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 4v2l1 1"
    />
  </Svg>
)
