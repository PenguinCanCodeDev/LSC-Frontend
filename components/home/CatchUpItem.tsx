import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PodcastIcon from '@/components/svgIcons/PodcastIcon';
import YouTubeIcon from '@/components/svgIcons/YouTubeIcon';
import RadioIcon from '@/components/svgIcons/RadioIcon';
import { useTheme } from '@/context/ThemeContext';

export type MediaType = 'PODCAST' | 'YOUTUBE' | 'RADIO';

interface CatchUpItemProps {
    title: string;
    subtitle: string;
    type: MediaType;
    containerStyle?: object;
}

const getMediaConfig = (colors: any): Record<MediaType, { badgeColor: string; icon: React.ReactNode }> => ({
    PODCAST: {
        badgeColor: colors.primary,
        icon: <PodcastIcon width={42} height={42} />,
    },
    YOUTUBE: {
        badgeColor: colors.primary,
        icon: <YouTubeIcon width={42} height={30} />,
    },
    RADIO: {
        badgeColor: colors.primary,
        icon: <RadioIcon width={42} height={42} />,
    },
});

export default function CatchUpItem({ title, subtitle, type, containerStyle }: CatchUpItemProps) {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    const config = getMediaConfig(colors)[type];

    return (
        <View style={[styles.container, containerStyle]}>
            {/* Media icon */}
            <View style={styles.iconContainer}>
                {config.icon}
            </View>

            {/* Text content */}
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
                <Text style={styles.subtitle} numberOfLines={1}>
                    {subtitle}
                </Text>
            </View>

            {/* Badge */}
            <View style={[styles.badge, { borderColor: config.badgeColor }]}>
                <Text style={[styles.badgeText, { color: config.badgeColor }]}>
                    {type}
                </Text>
            </View>
        </View>
    );
}

const getStyles = (colors: any) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: 14,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
    },
    iconContainer: {
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.text,
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 12,
        color: colors.tertiaryText,
    },
    badge: {
        borderWidth: 1.2,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});
