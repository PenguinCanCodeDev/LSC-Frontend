import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { useTheme } from '@/context/ThemeContext';

interface ConfidentialIconProps {
    width?: number;
    height?: number;
}

export default function ConfidentialIcon({ width = 28, height = 28 }: ConfidentialIconProps) {
    const { colors } = useTheme();
    return (
        <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
            <Rect width="28" height="28" rx="14" fill={colors.surfaceTertiary} />
            <Path
                d="M16 20C16 19.4696 15.7893 18.9609 15.4142 18.5858C15.0391 18.2107 14.5304 18 14 18C13.4696 18 12.9609 18.2107 12.5858 18.5858C12.2107 18.9609 12 19.4696 12 20M16 20C16 21.6569 17.3431 23 19 23C20.6569 23 22 21.6569 22 20C22 18.3431 20.6569 17 19 17C17.3431 17 16 18.3431 16 20ZM12 20C12 21.6569 10.6569 23 9 23C7.34315 23 6 21.6569 6 20C6 18.3431 7.34315 17 9 17C10.6569 17 12 18.3431 12 20ZM21 12.9999L18.89 6.34293C18.7976 6.07707 18.6502 5.8337 18.4573 5.62872C18.2645 5.42375 18.0305 5.26179 17.7708 5.15343C17.511 5.04508 17.2313 4.99276 16.9499 4.99991C16.6686 5.00706 16.3919 5.07352 16.138 5.19493L14.862 5.80493C14.5928 5.93339 14.2983 6.00002 14 5.99993H10.5C10.0643 5.99984 9.64057 6.14201 9.29311 6.40481C8.94565 6.66762 8.6935 7.0367 8.575 7.45593L7 12.9999M4 13H24"
                stroke={colors.primary}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
