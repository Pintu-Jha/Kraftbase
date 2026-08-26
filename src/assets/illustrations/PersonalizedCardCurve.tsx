import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const PersonalizedCardCurve = (props: SvgProps) => (
  <Svg
    width={128}
    height={210}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeOpacity={0.2}
      strokeWidth={16}
      d="M73.056 201.277c-10.508-3.907-22.629-15.637-32.366-28.471C-6.424 110.71 4.836 52.723 28.093 36.866 99.437-11.779 243.81 54.31 323.807 18.991c13.754-6.072 59.789-41.717 34.312-80.632-22.731-34.723-49.063-24.355-56.126-15.726-23.897 29.198-18.155 91.099-24.86 136.566-2.374 16.107-4.684 32.194-7.427 47.997-3.669 21.124-13.049 35.31-22.546 50.469"
    />
  </Svg>
)

