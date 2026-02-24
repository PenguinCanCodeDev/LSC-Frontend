import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';
import { useTheme } from '@/context/ThemeContext';

interface NotificationIconProps {
    width?: number;
    height?: number;
}

export default function NotificationIcon({ width = 40, height = 40 }: NotificationIconProps) {
    const { colors } = useTheme();
    const styles = getStyles(colors);

    return (
        <View style={styles.shadow}>
            <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
                <Rect width="40" height="40" rx="20" fill={colors.surfaceTertiary} />
                <Path
                    d="M18.2684 29C18.4439 29.304 18.6964 29.5565 19.0004 29.732C19.3044 29.9075 19.6493 29.9999 20.0004 29.9999C20.3514 29.9999 20.6963 29.9075 21.0003 29.732C21.3043 29.5565 21.5568 29.304 21.7324 29M21.9164 10.3139C21.0138 10.0098 20.0519 9.92486 19.11 10.0662C18.1682 10.2075 17.2735 10.571 16.5 11.1266C15.7265 11.6822 15.0964 12.414 14.6617 13.2614C14.227 14.1088 14.0003 15.0475 14.0004 15.9999C14.0004 20.4989 12.5894 21.9559 11.2604 23.3269C11.1299 23.4702 11.044 23.6484 11.0129 23.8397C10.9819 24.031 11.0071 24.2272 11.0855 24.4044C11.1639 24.5817 11.2921 24.7323 11.4545 24.838C11.6169 24.9437 11.8066 25 12.0004 24.9999H28.0004C28.1942 25 28.3838 24.9437 28.5462 24.838C28.7086 24.7323 28.8369 24.5817 28.9152 24.4044C28.9936 24.2272 29.0188 24.031 28.9878 23.8397C28.9567 23.6484 28.8708 23.4702 28.7404 23.3269C28.5346 23.115 28.3393 22.893 28.1554 22.6619M29.0004 16C29.0004 17.6569 27.6572 19 26.0004 19C24.3435 19 23.0004 17.6569 23.0004 16C23.0004 14.3431 24.3435 13 26.0004 13C27.6572 13 29.0004 14.3431 29.0004 16Z"
                    stroke={colors.primary}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
}

const getStyles = (colors: any) => StyleSheet.create({
    shadow: {
        shadowColor: colors.notificationShadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        borderRadius: 20,
    },
});
