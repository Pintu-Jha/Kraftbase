import Svg, { SvgProps, Path } from "react-native-svg"
export const HomeIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color ?? '#010000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.5 9.991v2.092c0 2.75 0 4.125.854 4.98.855.854 2.23.854 4.98.854h3.333c2.75 0 4.124 0 4.979-.855.854-.854.854-2.229.854-4.979V9.991c0-1.4 0-2.101-.297-2.708-.296-.606-.85-1.036-1.955-1.896L13.581 4.09c-1.72-1.338-2.58-2.007-3.581-2.007-1 0-1.86.67-3.581 2.007L4.752 5.387c-1.106.86-1.659 1.29-1.955 1.896C2.5 7.89 2.5 8.59 2.5 9.991Z"
    />
    <Path
      stroke={props.color ?? '#010000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 14.167A4.066 4.066 0 0 1 10 15a4.066 4.066 0 0 1-2.5-.833"
    />
  </Svg>
)
