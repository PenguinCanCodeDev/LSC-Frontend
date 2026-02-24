import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PodcastIcon from '@/components/svgIcons/PodcastIcon';
import YouTubeIcon from '@/components/svgIcons/YouTubeIcon';
import RadioIcon from '@/components/svgIcons/RadioIcon';

export type MediaType = 'PODCAST' | 'YOUTUBE' | 'RADIO';

interface CatchUpItemProps {
    title: string;
    subtitle: string;
    type: MediaType;
    containerStyle?: object;
}

const MEDIA_CONFIG: Record<MediaType, { badgeColor: string; icon: React.ReactNode }> = {
    PODCAST: {
        badgeColor: '#0444B6',
        icon: <PodcastIcon width={42} height={42} />,
    },
    YOUTUBE: {
        badgeColor: '#0444B6',
        icon: <YouTubeIcon width={42} height={30} />,
    },
    RADIO: {
        badgeColor: '#0444B6',
        icon: <RadioIcon width={42} height={42} />,
    },
};

export default function CatchUpItem({ title, subtitle, type, containerStyle }: CatchUpItemProps) {
    const config = MEDIA_CONFIG[type];

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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        shadowColor: '#000',
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
        color: '#1A1A2E',
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 12,
        color: '#9CA3AF',
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
