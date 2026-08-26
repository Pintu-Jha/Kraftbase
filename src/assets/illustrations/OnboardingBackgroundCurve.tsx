import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const OnboardingBackgroundCurve = (props: SvgProps) => (
  <Svg
    width={800}
    height={487}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E4EAF1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeOpacity={0.19}
      strokeWidth={16}
      d="M161.79 497.554c-22.577-6.605-49.698-29.342-71.997-54.746C-18.097 319.893-3.201 196.849 43.1 160.184c142.042-112.474 454.083 4.25 616.224-81.629 27.878-14.765 118.892-96.25 59.753-173.884-52.767-69.273-106.327-43.636-119.818-24.52-45.646 64.682-24.373 193.375-31.606 289.534-2.561 34.067-4.989 68.08-8.367 101.564-4.519 44.759-22.029 75.851-39.638 108.997"
    />
  </Svg>
)
