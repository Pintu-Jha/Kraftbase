import Svg, { SvgProps, Path } from "react-native-svg"

interface ProgressRingProps extends SvgProps {
  fillColor?: string;
  fillOpacity?: number;
}

export const ProgressRing = ({ 
  fillColor = "#83B5EF", 
  fillOpacity = 0.21, 
  ...props 
}: ProgressRingProps) => (
  <Svg
    width={46}
    height={46}
    fill="none"
    {...props}
  >
    <Path
      fill={fillColor}
      fillOpacity={fillOpacity}
      d="M46 23c0 12.703-10.297 23-23 23S0 35.703 0 23 10.297 0 23 0s23 10.297 23 23ZM3.288 23c0 10.886 8.826 19.712 19.712 19.712S42.712 33.886 42.712 23 33.886 3.288 23 3.288 3.288 12.114 3.288 23Z"
    />
  </Svg>
)
