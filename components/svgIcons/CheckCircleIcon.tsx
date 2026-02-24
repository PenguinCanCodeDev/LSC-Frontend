import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

interface CheckCircleIconProps {
    width?: number;
    height?: number;
}

export default function CheckCircleIcon({ width = 36, height = 36 }: CheckCircleIconProps) {
    return (
        <Svg width={width} height={height} viewBox="0 0 36 36" fill="none">
            <Rect width="36" height="36" rx="18" fill="#32B904" />
            <Path
                d="M14.0003 18L16.667 20.6666L22.0003 15.3333M31.3337 18C31.3337 25.3638 25.3641 31.3333 18.0003 31.3333C10.6365 31.3333 4.66699 25.3638 4.66699 18C4.66699 10.6362 10.6365 4.66663 18.0003 4.66663C25.3641 4.66663 31.3337 10.6362 31.3337 18Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
