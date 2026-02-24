import * as React from "react"
import Svg, { Path, Rect, SvgProps } from "react-native-svg"
const BackIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <Rect width={28} height={28} fill="#F2F2F2" rx={14} />
    <Path
      stroke="#0D0D0D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17 20-6-6 6-6"
    />
  </Svg>
)
export default BackIcon
