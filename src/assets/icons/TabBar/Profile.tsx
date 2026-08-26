import Svg, { SvgProps, Path } from "react-native-svg"
export const ProfileIcon = (props: SvgProps) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            stroke={props.color || "#141B34"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.167 7.083a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0Z"
        />
        <Path
            stroke={props.color || "#141B34"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.833 17.083a5.833 5.833 0 0 0-11.666 0"
        />
    </Svg>
)
