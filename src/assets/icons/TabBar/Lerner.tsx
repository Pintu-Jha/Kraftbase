import Svg, { SvgProps, Path } from "react-native-svg"
export const LernerIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || "#141B34"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.083 14.107V8.333c0-3.142 0-4.714-.976-5.69s-2.548-.976-5.69-.976h-.834c-3.142 0-4.714 0-5.69.976s-.976 2.548-.976 5.69v7.917"
    />
    <Path
      stroke={props.color || "#141B34"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.083 14.167H5a2.083 2.083 0 1 0 0 4.166h12.083"
    />
    <Path
      stroke={props.color || "#141B34"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.083 18.333a2.083 2.083 0 0 1 0-4.166"
    />
    <Path
      stroke={props.color || "#141B34"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.256 10 9.04 6.232a.6.6 0 0 0-.577-.399.6.6 0 0 0-.578.4L6.667 10M12.5 5.833V10M7.115 8.75h2.693"
    />
  </Svg>
)
