import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NoDeviceSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      {...props}
    >
      <Path
        d="M18.042 5.053L5.626 14.995c-1.398 1.111-2.293 3.458-1.989 5.214L6.02 34.472c.43 2.544 2.867 4.604 5.447 4.604h20.066c2.562 0 5.017-2.078 5.447-4.604l2.383-14.262c.287-1.756-.61-4.103-1.989-5.214L24.958 5.07c-1.917-1.54-5.017-1.54-6.916-.018z"
        stroke="#F8F8F8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.702 25.764c2.275-2.168 5.32-2.168 7.596 0m3.799-3.798a11.897 11.897 0 00-3.154-2.222 10.216 10.216 0 00-8.904 0 12.194 12.194 0 00-3.154 2.222"
        stroke="#F8F8F8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.491 30.458h.017"
        stroke="#F8F8F8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NoDeviceSvg