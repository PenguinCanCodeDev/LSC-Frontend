import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '@/context/ThemeContext';

interface FilterIconProps {
    width?: number;
    height?: number;
}

export default function FilterIcon({ width = 24, height = 24 }: FilterIconProps) {
    const { colors } = useTheme();
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M3 6H21M7 12H17M10 18H14"
                stroke={colors.text}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
