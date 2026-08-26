import Svg, { SvgProps, Path } from "react-native-svg"
export const AnalyticsIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || "#000"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.833 14.167v-3.334M10 14.167V5.833M14.167 14.167v-5"
    />
    <Path
      stroke={props.color || "#000"}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.083 10c0-3.732 0-5.598 1.16-6.757 1.16-1.16 3.025-1.16 6.757-1.16 3.732 0 5.598 0 6.757 1.16 1.16 1.16 1.16 3.025 1.16 6.757 0 3.732 0 5.598-1.16 6.757-1.16 1.16-3.025 1.16-6.757 1.16-3.732 0-5.598 0-6.757-1.16-1.16-1.16-1.16-3.025-1.16-6.757Z"
    />
  </Svg>
)