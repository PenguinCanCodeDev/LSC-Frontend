import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const PassEye = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#C9C9C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.813 8.097a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.875 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.875 0Z"
    />
    <Path
      stroke="#C9C9C9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.75 10.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
)
export default PassEye
