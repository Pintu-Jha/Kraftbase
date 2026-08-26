import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const StarIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#474D67"
      d="M19.61 3.252a.361.361 0 0 1 .375.564l-5.124 7.031a.361.361 0 0 0-.06.296l2.003 8.467a.361.361 0 0 1-.564.375L9.207 14.86a.361.361 0 0 0-.296-.06L.446 16.805a.361.361 0 0 1-.375-.564l5.123-7.032a.361.361 0 0 0 .06-.296L3.252.446A.361.361 0 0 1 3.816.07l7.031 5.123a.361.361 0 0 0 .296.06l8.467-2.002Z"
    />
  </Svg>
)

