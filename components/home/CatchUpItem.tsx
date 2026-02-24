import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type MediaType = 'PODCAST' | 'YOUTUBE';

interface CatchUpItemProps {
    title: string;
    subtitle: string;
    type: MediaType;
}

export default function CatchUpItem({ title, subtitle, type }: CatchUpItemProps) {
    const isPodcast = type === 'PODCAST';

    return (
        <View style={styles.container}>
            {/* Media icon */}
            <View
                style={[
                    styles.iconCircle,
                    { backgroundColor: isPodcast ? '#E8F5E9' : '#FFEBEE' },
                ]}
            >
                <Ionicons
                    name={isPodcast ? 'headset' : 'play'}
                    size={20}
                    color={isPodcast ? '#4CAF50' : '#F44336'}
                />
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
            <View
                style={[
                    styles.badge,
                    {
                        borderColor: isPodcast ? '#4CAF50' : '#F44336',
                    },
                ]}
            >
                <Text
                    style={[
                        styles.badgeText,
                        { color: isPodcast ? '#4CAF50' : '#F44336' },
                    ]}
                >
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
    iconCircle: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
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
