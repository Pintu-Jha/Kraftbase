import Svg, { SvgProps, Path } from "react-native-svg"
export const Play = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C274C"
      fillRule="evenodd"
      d="M3.938 4.342a1.313 1.313 0 0 1 2-1.117l7.569 4.657a1.312 1.312 0 0 1 0 2.236l-7.57 4.658c-.874.538-2-.091-2-1.118V4.342Z"
      clipRule="evenodd"
    />
  </Svg>
)
