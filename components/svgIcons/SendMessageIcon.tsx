import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { useTheme } from '@/context/ThemeContext';

interface SendMessageIconProps {
    width?: number;
    height?: number;
}

export default function SendMessageIcon({ width = 28, height = 28 }: SendMessageIconProps) {
    const { colors } = useTheme();
    return (
        <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
            <Rect width="28" height="28" rx="14" fill={colors.surfaceTertiary} />
            <Path
                d="M14 15C16.7614 15 19 12.7614 19 10C19 7.23858 16.7614 5 14 5C11.2386 5 9 7.23858 9 10C9 12.7614 11.2386 15 14 15ZM14 15C16.1217 15 18.1566 15.8429 19.6569 17.3431C21.1571 18.8434 22 20.8783 22 23M14 15C11.8783 15 9.84344 15.8429 8.34315 17.3431C6.84285 18.8434 6 20.8783 6 23"
                stroke={colors.primary}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
