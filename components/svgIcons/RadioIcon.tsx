import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { useTheme } from '@/context/ThemeContext';

interface RadioIconProps {
    width?: number;
    height?: number;
}

export default function RadioIcon({ width = 28, height = 28 }: RadioIconProps) {
    const { colors } = useTheme();
    return (
        <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
            <Rect width="28" height="28" rx="14" fill={colors.warning} />
            <Path d="M14 21V24V21Z" fill={colors.warning} />
            <Path
                d="M21 12V14C21 15.8565 20.2625 17.637 18.9497 18.9497C17.637 20.2625 15.8565 21 14 21C12.1435 21 10.363 20.2625 9.05025 18.9497C7.7375 17.637 7 15.8565 7 14V12"
                fill={colors.warning}
            />
            <Path
                d="M17 7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V14C11 15.6569 12.3431 17 14 17C15.6569 17 17 15.6569 17 14V7Z"
                fill={colors.warning}
            />
            <Path
                d="M14 21V24M14 21C15.8565 21 17.637 20.2625 18.9497 18.9497C20.2625 17.637 21 15.8565 21 14V12M14 21C12.1435 21 10.363 20.2625 9.05025 18.9497C7.7375 17.637 7 15.8565 7 14V12M14 4C15.6569 4 17 5.34315 17 7V14C17 15.6569 15.6569 17 14 17C12.3431 17 11 15.6569 11 14V7C11 5.34315 12.3431 4 14 4Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
